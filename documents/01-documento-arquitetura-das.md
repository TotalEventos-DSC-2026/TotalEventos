# Documento de Arquitetura de Software (DAS) — Total Eventos

**Disciplina:** Desenvolvimento de Software Corporativo

**Alunos:** Fernando Villar, Emmanuelly Madeira

**Tema:** Plataforma de Organização de Eventos (Total Eventos)

**Data:** 1 de Setembro de 2026

---

## 1. Identificação e Capa

* **Nome do Grupo:** Grupo Total Eventos


* **Integrantes:** Fernando Villar, Emmanuelly Madeira


* **Tema Escolhido:** Plataforma de organização de eventos


* **Disciplina:** Desenvolvimento de Software Corporativo


* **Data de Entrega:** 01/09/2026



---

## 2. Visão Geral e Problema Central

Em eventos de médio e grande porte, a gestão descentralizada e manual provoca filas extensas no credenciamento presencial, sobrecarga física em auditórios com risco de sobrepopulação, choques de horário na agenda dos participantes e falhas na consolidação da frequência para a emissão de certificados oficiais. O **Total Eventos** surge para solucionar esses gargalos através de uma arquitetura modular e resiliente.

---

## 3. Arquitetura em Módulos (*Bounded Contexts*)

O sistema foi dividido em módulos independentes para isolar responsabilidades de negócio:

1. **Módulo de Inscrição e Programação:** Catálogo de eventos, trilhas temáticas, palestras e reserva lógica de vagas.
2. **Módulo de Controle de Acesso e Credenciamento:** Geração de QR Codes criptografados e check-in presencial nos leitores/totens (estratégia *Offline-First*).
3. **Módulo de Lotação e Segurança:** Inspeção do limite físico das salas em tempo real e prevenção de sobrepopulação (segurança contra incêndios).
4. **Módulo de Frequência e Certificação:** Computação de carga horária, verificação de elegibilidade ($\ge 75\%$) e assinatura digital via hash SHA-256.
5. **Módulo de Administração e Relatórios:** Dashboards executivos em tempo real, gestão e relatórios de exceção.

---

## 4. Invariantes Críticas do Domínio (Regras de Negócio)

* **RN01 (Validação de Duplicidade de Acesso):** Proíbe que o mesmo ingresso/reserva seja utilizado para check-in mais de uma vez na mesma sessão (antifraude de QR Code).
* **RN02 (Trava por Limite Físico Legal de Lotação):** Garantia de segurança contra incêndios, assegurando que o total de pessoas presentes no recinto nunca ultrapasse a capacidade máxima legal da sala estabelecida pelo alvará.
* **RN03 (Elegibilidade para Certificação):** Assegura que o certificado oficial só seja emitido para participantes com frequência acumulada $\ge 75\%$ da carga horária da sessão, garantindo idoneidade jurídica.

---

## 5. Conclusão e Defesa do Sistema

A elaboração da arquitetura do **Total Eventos** demonstrou que a construção de sistemas corporativos sólidos depende fundamentalmente do entendimento do domínio do problema e de suas restrições operacionais reais.

Se precisássemos defender hoje a arquitetura do **Total Eventos** diante de outro arquiteto, conseguiríamos justificar com total segurança o isolamento dos módulos, a estratégia *Offline-First* no totem com banco local e a verificação em camadas para certificação. Por outro lado, reconhecemos que ainda precisamos investigar com dados empíricos a taxa perfeita de margem de contingência offline para totens desconectados em salas de altíssima capacidade.