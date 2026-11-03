# Revisão e Evolução do Domínio — Total Eventos

**Disciplina:** Desenvolvimento de Software Corporativo

**Alunos:** Fernando Villar, Emmanuelly Madeira

**Tema:** Plataforma de Organização de Eventos (Total Eventos)

**Data:** 1 de Setembro de 2026

---

## 1. Análise de Linguagem Ubíqua e Mudança de Significado

No sistema, constatou-se que determinados termos fundamentais possuem significados distintos dependendo do contexto de negócio em que são aplicados, justificando formalmente a divisão em **Contextos Delimitados (*Bounded Contexts*)**:

| Termo | Área A (Contexto A) | Significado A | Área B (Contexto B) | Significado B |
| --- | --- | --- | --- | --- |
| **Participante** | **Credenciamento / Controle de Acesso** | Entidade física portadora de credencial/QR Code. O foco é a validação de presença em tempo real e verificação de capacidade da sala.

 | **Emissão de Certificados** | Titular de Direitos Acadêmicos. O foco é a taxa percentual de presença acumulada, nome oficial e chave de autenticidade (hash SHA-256).

 |
| **Sessão** | **Gestão de Espaço / Lotação** | Ocupação de Espaço Físico. Representa uma sala com capacidade máxima de pessoas e controle de entradas/saídas físicas.

 | **Grade de Programação** | Unidade de Conteúdo. Representa o tema, palestrante, ementa e quantidade de horas complementares atribuídas.

 |
| **Inscrição / Credencial** | **Vendas / Inscrições Online** | Transação Comercial e Financeira. Representa o contrato de compra, status de pagamento e categoria do ingresso.

 | **Totens / Operação Offline** | Token Criptográfico (`QRCodeAssinado`). Payload leve assinado digitalmente, validado de forma autônoma sem consulta ao banco central.

 |

---

## 2. Contextos Delimitados Candidatos (*Bounded Contexts*)

O sistema foi estruturado para isolar responsabilidades críticas, destacando-se o contexto principal de operação:

### Contexto: Controle de Acesso e Lotação (`ControleDeAcesso`)

* **Objetivo:** Garantir a validação rápida (online/offline) de entradas nas salas, respeitando a lotação física e evitando fraudes.


* **Vocabulário principal:** Totem, Catraca, Reader, `QRCodeAssinado`, Check-In, Lotação, Capacidade Máxima, Margem Offline.


* **Agregados principais:** `SessaoPalestra`, `EspacoFisicoSala`, `RegistroPresenca`, `QRCodeAssinado`.


* **Regras principais:** RN01 (sem duplicidade), RN02 (trava de lotação), RN05 (contenção offline).


* **O que pertence:** Leitura nos totens, registro de entradas/saídas, alerta de sobrepopulação.


* **O que NÃO pertence:** Vendas de ingressos, cálculo de frequência acadêmica e geração de certificados.


* **Colaboração:** Envia eventos para Gestão de Certificados e recebe credenciais válidas de Inscrições e Vendas.



---

## 3. Estratégia Offline-First e Evolução do ADR-001

* **Contexto do Desafio:** Em grandes centros de convenções, a conectividade Wi-Fi e 4G costuma falhar nos momentos de pico devido à alta interferência do público. Uma falha total no credenciamento gera filas imensas.


* **Evolução da Decisão Arquitetural (ADR-001):** Adota-se o modelo *Offline-First* nos dispositivos leitores (totens e celulares dos recepcionistas), gravando localmente em banco SQLite por meio de pacotes criptografados e sincronizando de forma assíncrona.


* **Regra de Contenção de Margem Offline:** Para mitigar o risco de estouro de capacidade gerado por múltiplos totens offline sincronizando simultaneamente, os dispositivos desconectados utilizam um teto preventivo (ex: alocação máxima de 95% da capacidade da sala). Ao atingir esse limite local, novos acessos exigem validação de rede ou liberação presencial da organização.