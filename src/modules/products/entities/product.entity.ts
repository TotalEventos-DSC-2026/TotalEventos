export class Product {
  constructor(
    public readonly productId: string,
    public name: string,
    public readonly deletedAt: Date | null = null,
  ) {}

  isActive(): boolean {
    return this.deletedAt === null;
  }
}
