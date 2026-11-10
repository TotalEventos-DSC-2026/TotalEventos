# Relatório de Planejamento — [SUB-07] Definir Testes Automatizados

## 1. Objetivo da Sub-Tarefa
Garantir que os comportamentos de sucesso e falha do caso de uso sejam verificáveis por testes automatizados, validando regras de negócio, entradas inválidas, capacidade de sessão e persistência.

## 2. Abordagem e Estratégia de Testes
* **Testes Unitários:** Validação isolada de services e regras de negócio utilizando Jest no NestJS.
* **Testes de Integração:** Verificação do fluxo completo entre controllers, services e repositórios com SQLite.

## 3. Critérios de Aceite
* [ ] Cobertura de cenários de sucesso e falha.
* [ ] Validação de casos críticos de lotação e duplicidade.
* [ ] Execução bem-sucedida de testes de integração.

## 4. Próximos Passos
* Implementar os ficheiros de especificação (`*.spec.ts`) para os módulos correspondentes.
* Executar a suíte de testes localmente e gerar o relatório de cobertura.