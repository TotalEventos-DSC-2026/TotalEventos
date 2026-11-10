# 04-04 - Especificação do teste RED

## Critério de aceite selecionado
Validação de disponibilidade e rejeição da inscrição cancelada antes do check-in.

## Cenário testado
Quando a inscrição estiver cancelada, o sistema deve rejeitar a operação de check-in e registrar claramente que a inscrição não pode avançar para esse fluxo.

## Justificativa do nível de teste
Teste unitário do serviço de inscrições, isolando o estado do objeto `Inscricao` e a regra de negócio do fluxo.

## Teste proposto
```ts
it('deve rejeitar o check-in quando a inscrição estiver cancelada', async () => {
  const inscricaoId = 'insc-cancelada';
  const inscricaoMock = new Inscricao(
    inscricaoId,
    'part-456',
    'sessao-789',
    InscricaoStatus.CANCELADA,
    new Date(),
    new Date(),
  );

  repository.findById.mockResolvedValue(inscricaoMock);

  await expect(service.realizarCheckIn(inscricaoId)).rejects.toThrow(
    /cancelada/i,
  );

  expect(repository.save).not.toHaveBeenCalled();
});
```

## Observação
Este cenário representa a primeira etapa do ciclo TDD: o teste foi escrito antes da correção de comportamento e será executado em estado RED.
