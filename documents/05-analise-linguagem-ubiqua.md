
# Análise de Linguagem Ubíqua e Glossário — Total Eventos

**Trabalho:** Padronização de Termos e Alinhamento do Domínio

**Sistema Analisado:** Total Eventos

**Alunos:** Fernando Villar, Emmanuelly Madeira

**Data:** Setembro de 2026

---

## 1. Introdução e Contexto

A Linguagem Ubíqua é a prática de construir um vocabulário rigoroso e compartilhado entre os desenvolvedores, arquitetos e especialistas do domínio do **Total Eventos**. Este documento consolida a análise dos termos que possuem significados distintos dependendo do contexto operacional e estabelece o glossário oficial do sistema para evitar ambiguidades de negócio.

---

## 2. Análise de Mudança de Significado por Contexto (*Bounded Contexts*)

Constatou-se que determinadas palavras fundamentais mudam de sentido conforme a área de negócio em que são aplicadas, o que justifica formalmente a divisão da arquitetura em contextos delimitados:

| Termo | Área A (Contexto A) | Significado no Contexto A | Área B (Contexto B) | Significado no Contexto B |
| --- | --- | --- | --- | --- |
| **Participante** | **Credenciamento / Controle de Acesso** | Entidade física portadora de credencial/QR Code. O foco é a validação de presença em tempo real e verificação de capacidade da sala.
 | **Emissão de Certificados** | Titular de Direitos Acadêmicos. O foco é a taxa percentual de presença acumulada, nome oficial e chave de autenticidade (hash SHA-256). |
| **Sessão** | **Gestão de Espaço / Lotação** | Ocupação de Espaço Físico. Representa uma sala com capacidade máxima de pessoas e controle de entradas/saídas físicas.|
 | **Grade de Programação** | Unidade de Conteúdo. Representa o tema, palestrante, ementa e quantidade de horas complementares atribuídas. |
| **Inscrição / Credencial** | **Vendas / Inscrições Online** | Transação Comercial e Financeira. Representa o contrato de compra, status de pagamento e categoria do ingresso.
 | **Totens / Operação Offline** | Token Criptográfico (`QRCodeAssinado`). Payload leve assinado digitalmente, validado de forma autônoma sem consulta ao banco central. |

---

## 3. Glossário Oficial da Linguagem Ubíqua (*Slice* e Domínio Geral)

A tabela a seguir define os termos oficiais que devem ser rigorosamente utilizados tanto no código-fonte quanto nas documentações do projeto, explicitando também os sinônimos proibidos para manter a consistência:

| Termo Oficial | Significado no Sistema | Termos Proibidos (Evitar Sinônimos) |
| --- | --- | --- |
| **Evento** | Ocorrência organizada, contendo período, local, capacidade e período de inscrições. | Atividade, Programação, Ticket |
| **Evento Publicado** | Evento visível publicamente e apto a receber inscrições de participantes. | Evento ativo, Evento no ar |
| **Inscrição** | Vínculo confirmado entre um Participante e um Evento que ocupa formalmente uma vaga. | Reserva, Cadastro, Matrícula |
| **Inscrição Ativa** | Inscrição que se encontra estritamente no estado "Confirmada". | Inscrição válida |
| **Participante** | Pessoa física que se inscreve e participa dos eventos do sistema. | Usuário, Cliente, Aluno |
| **Organizador** | Pessoa responsável por criar, estruturar e publicar o evento na plataforma. | Admin, Dono |
| **Capacidade** | Número máximo absoluto de inscrições ativas que o evento ou sala comporta. | Lotação, Limite |
| **Vaga** | Unidade de capacidade que ainda não se encontra ocupada por uma inscrição ativa. | Lugar, Assento |
| **Período de Inscrições** | Janela temporal delimitada em que o evento aceita novas solicitações de inscrição. | Prazo, Abertura |
| **Evento Esgotado** | Condição em que o evento não possui mais vagas disponíveis no sistema. | Evento cheio |
| **QR Code Assinado (Token)** | Credencial criptográfica gerada com carimbo temporal para validação local rápida nos leitores e totens. | Ingresso comum, Código de barras |
| **Registro de Presença (Check-in)** | Evento registrado no ato do acesso presencial com marcação de horário, utilizado no cálculo de frequência. | Presença, Entrada, Leitura |