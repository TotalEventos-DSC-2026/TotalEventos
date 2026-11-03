Com base nas documentações e nos registros oficiais do projeto **Total Eventos**, aqui está o documento **04 — Invariantes e Casos de Uso** formatado em **Markdown**, pronto para você copiar e compartilhar com o seu grupo:

---

# Invariantes e Casos de Uso — Total Eventos

**Trabalho:** Especificação de Regras Críticas e Casos de Uso do Sistema

**Sistema Analisado:** Total Eventos

**Alunos:** Fernando Villar, Emmanuelly Madeira

**Data de Atualização:** 2026

---

## 1. Introdução e Contexto

Este documento consolida as principais **Invariantes do Domínio** (Regras de Negócio Críticas) e o mapeamento oficial dos **Casos de Uso** do sistema **Total Eventos**, estruturados para garantir a consistência operacional, a segurança física contra incêndios e a idoneidade jurídica da plataforma.

---

## 2. Invariantes Críticas do Domínio (Regras de Negócio)

As invariantes representam as regras fundamentais que o sistema deve proteger a todo custo para evitar estados inválidos no mundo real.

| ID | Regra de Negócio / Invariante | Conceitos Protegidos | Estado Inválido Evitado (O que violaria a regra?) | Mecanismo de Proteção do Sistema |
| --- | --- | --- | --- | --- |
| **RN01** | **Validação de Duplicidade de Acesso** | Reserva / Ingresso | **Acesso Duplicado / Fraude de Credencial:** O mesmo ingresso transitaria para o estado "Utilizada" mais de uma vez, gerando contagem fraudulenta na catraca. | O Totem mantém cache local (SQLite) com os hashes dos QR Codes já lidos na sessão corrente, rejeitando duplicidades instantaneamente ($<50\text{ms}$). |
| **RN02** | **Trava por Limite Físico Legal de Lotação** | Espaço Físico / Sala | **Superlotação e Violação do Alvará:** O total de pessoas presentes no recinto ultrapassaria a `capacidadeMaxima` legal, gerando risco físico e infração de segurança contra incêndios. | O sistema decrementa as vagas a cada check-in. Ao atingir o teto máximo, a entrada é bloqueada e um Alerta de Sobrepopulação é disparado. |
| **RN03** | **Elegibilidade para Certificação** | Certificado | **Emissão Indevida de Documento Oficial:** Um certificado com hash SHA-256 seria gerado para um participante com frequência inferior a $75\%$ da carga horária. | O módulo de consolidação exige estritamente $\text{Frequência} \ge 75\%$ antes de liberar a assinatura digital e o download do documento. |
| **RN04** | **Prevenção de Choque de Horários** | Participante, Reserva, Sessão | Confirmação de vaga para o mesmo participante em sessões com horários simultâneos ou conflitantes. | A API executa checagem de intersecção de intervalos temporais nas reservas ativas do participante antes de efetivar a nova vaga. |
| **RN05** | **Contenção por Margem Offline** | Totem, Margem Offline, Espaço Físico | Estouro de capacidade gerado por múltiplos totens desconectados sincronizando acessos em concorrente. | O totem offline utiliza um teto preventivo (ex: alocação máxima de $95\%$) e exige liberação manual por senha ao atingir o limite de segurança. |

---

## 3. Mapeamento Oficial dos Casos de Uso

Os casos de uso descrevem as interações dos atores com o sistema para atingir objetivos de negócio específicos:

| ID | Caso de Uso | Ator Principal | Objetivo Principal | Resultado Observável |
| --- | --- | --- | --- | --- |
| **UC01** | **Criar Evento** | Organizador | Registrar e configurar um novo evento em preparação. | O evento é criado e salvo no sistema em estado de rascunho. |
| **UC02** | **Publicar Evento** | Organizador | Abrir o evento ao público e torná-lo visível. | O evento fica publicado e aberto a inscrições no período definido. |
| **UC03** | **Inscrever-se em Evento** *(Reservar Vaga)* | Participante | Garantir lugar em um evento ou sessão. | Inscrição confirmada com sucesso e vaga descontada da capacidade. |
| **UC04** | **Cancelar Inscrição** | Participante | Desistir de uma participação para liberar a vaga. | Inscrição cancelada e vaga restabelecida imediatamente no sistema. |
 | **UC05** | **Registrar Presença** *(Check-in)* | Equipe de Credenciamento / Totem | Confirmar o comparecimento físico do inscrito via leitura de QR Code. | Presença computada na sessão respeitando a trava de lotação. |
| **UC06** | **Cancelar Evento** | Organizador | Desfazer um evento que não irá mais ocorrer. | O evento é cancelado e os participantes afetados são notificados/gerenciados. |
| **UC07** | **Consultar Eventos Disponíveis** | Participante | Encontrar eventos com vagas abertas e visualizar a grade de programações. | Exibição da listagem filtrada de palestras, workshops e horários. |
| **UC08** | **Pagar Inscrição** *(Secundário/Futuro)* | Participante | Efetivar a participação em evento pago através de gateway de pagamento. | Pagamento aprovado e inscrição efetivada na plataforma. |