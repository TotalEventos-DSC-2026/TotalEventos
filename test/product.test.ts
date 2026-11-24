import assert from 'node:assert/strict';
import type { AddressInfo } from 'node:net';
import { after, before, test } from 'node:test';
import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from '../src/app.module';
import { SqliteDatabase } from '../src/database/sqlite-database';
import { Product } from '../src/modules/products/entities/product.entity';
import { InMemoryProductsRepository } from '../src/modules/products/repositories/in-memory-products.repository';
import { ProductsService } from '../src/modules/products/services/products.service';
import { ProductLookupFailedException } from '../src/common/exceptions/product-lookup-failed.exception';
import { ProductUpdateFailedException } from '../src/common/exceptions/product-update-failed.exception';
import { ProductNotFoundException } from '../src/common/exceptions/product-not-found.exception';

const activeId = 'a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11';
const removedId = 'b0eebc99-9c0b-4ef8-bb6d-6bb9bd380a12';
const missingId = 'c0eebc99-9c0b-4ef8-bb6d-6bb9bd380a13';

let app: Awaited<ReturnType<typeof NestFactory.create>>;
let baseUrl: string;

before(async () => {
  app = await NestFactory.create(AppModule, { logger: false });
  app.useGlobalPipes(new ValidationPipe({ whitelist: true, transform: true }));
  await app.listen(0, '127.0.0.1');

  const address = app.getHttpServer().address() as AddressInfo;
  baseUrl = `http://127.0.0.1:${address.port}`;

  const db = app.get(SqliteDatabase);
  db.connection.prepare(
    'INSERT INTO products (product_id, name, deleted_at) VALUES (?, ?, ?) ' +
      'ON CONFLICT(product_id) DO UPDATE SET name=excluded.name, deleted_at=excluded.deleted_at',
  ).run(activeId, 'Produto ativo', null);
  db.connection.prepare(
    'INSERT INTO products (product_id, name, deleted_at) VALUES (?, ?, ?) ' +
      'ON CONFLICT(product_id) DO UPDATE SET name=excluded.name, deleted_at=excluded.deleted_at',
  ).run(removedId, 'Produto removido', '2026-11-24T00:00:00.000Z');
});

after(async () => {
  await app.close();
});

test('GET /products/:productId retorna produto ativo com campos aprovados', async () => {
  const response = await fetch(`${baseUrl}/products/${activeId}`);

  assert.equal(response.status, 200);
  assert.deepEqual(await response.json(), {
    productId: activeId,
    name: 'Produto ativo',
  });
});

test('GET /products/:productId retorna 404 para produto inexistente', async () => {
  const response = await fetch(`${baseUrl}/products/${missingId}`);

  assert.equal(response.status, 404);
  const body = await response.json();
  assert.equal(body.statusCode, 404);
  assert.equal(body.message, 'Produto não encontrado.');
});

test('GET /products/:productId trata produto removido como inexistente', async () => {
  const response = await fetch(`${baseUrl}/products/${removedId}`);

  assert.equal(response.status, 404);
});

test('GET /products/:productId rejeita UUID inválido antes do Service', async () => {
  const response = await fetch(`${baseUrl}/products/abc`);

  assert.equal(response.status, 400);
  assert.deepEqual(await response.json(), {
    statusCode: 400,
    message: ['O identificador do produto deve ser um UUID válido.'],
    error: 'Bad Request',
  });
});

test('ProductsService retorna os dois campos da resposta', async () => {
  const repository = new InMemoryProductsRepository();
  repository.add(new Product(activeId, 'Produto ativo'));
  const service = new ProductsService(repository);

  assert.deepEqual(await service.getProductById(activeId), {
    productId: activeId,
    name: 'Produto ativo',
  });
});

test('ProductsService diferencia ausência de falha de persistência', async () => {
  const notFoundRepository = new InMemoryProductsRepository();
  const notFoundService = new ProductsService(notFoundRepository);
  await assert.rejects(
    notFoundService.getProductById(missingId),
    ProductNotFoundException,
  );

  const failingService = new ProductsService({
    async findActiveById(): Promise<null> {
      throw new Error('detalhe interno do banco');
    },
    async save(product: Product): Promise<Product> {
      return product;
    },
  });
  await assert.rejects(
    failingService.getProductById(activeId),
    (error: unknown) =>
      error instanceof ProductLookupFailedException &&
      error.message === 'Falha ao consultar o produto.',
  );
});

test('PATCH /products/:productId altera name de produto ativo', async () => {
  const response = await fetch(`${baseUrl}/products/${activeId}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name: 'Produto alterado' }),
  });

  assert.equal(response.status, 200);
  assert.deepEqual(await response.json(), {
    productId: activeId,
    name: 'Produto alterado',
  });
});

test('PATCH /products/:productId retorna 404 para produto inexistente', async () => {
  const response = await fetch(`${baseUrl}/products/${missingId}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name: 'Novo nome' }),
  });

  assert.equal(response.status, 404);
});

test('PATCH /products/:productId rejeita nome vazio', async () => {
  const response = await fetch(`${baseUrl}/products/${activeId}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name: '   ' }),
  });

  assert.equal(response.status, 400);
});

test('PATCH /products/:productId rejeita UUID inválido', async () => {
  const response = await fetch(`${baseUrl}/products/abc`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name: 'Novo nome' }),
  });

  assert.equal(response.status, 400);
});

test('PATCH /products/:productId trata produto removido como inexistente', async () => {
  const response = await fetch(`${baseUrl}/products/${removedId}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name: 'Novo nome' }),
  });

  assert.equal(response.status, 404);
});

test('ProductsService traduz falha de persistência da alteração', async () => {
  const failingService = new ProductsService({
    async findActiveById(productId: string) {
      return new Product(productId, 'Produto ativo');
    },
    async save(): Promise<Product> {
      throw new Error('detalhe interno do banco');
    },
  });

  await assert.rejects(
    failingService.updateProductById(activeId, 'Novo nome'),
    (error: unknown) =>
      error instanceof ProductUpdateFailedException &&
      error.message === 'Falha ao alterar o produto.',
  );
});
