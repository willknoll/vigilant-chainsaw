---  
# required metadata  
title: FastTrack Partner Playbook - Migration
description: FastTrack Partner Playbook - Migration
author: Celia Kennedy
ms.author: v-cekenn
manager: pagrim
ms.date: 5/02/2019  
ms.topic: playbook  
ms.prod: non-product-specific  
ms.custom: partner-playbook  
ft.audience: partner  
ft.owner: pagrim  
---  

# Migração

Fase: **Migrar**

## Visão geral

Garantir a migração bem-sucedida do cliente para a nuvem (Exchange Online/OneDrive for Business/SharePoint).

## Objetivos

  - Validar a ativação técnica e o aprendizado do cliente para a migração
  - Executar o teste de migração
  - Transferir o envolvimento para as migrações e executar migrações
  - Gerenciamento de problemas

## Abordagem

### Executar Migração de Teste

Função principal: **Gerente de migração**  
Aplica-se a: **Exchange/OneDrive for Business/SharePoint**

Executar a migração de teste e validar se a infraestrutura do cliente está preparada para a migração.  

#### Tarefas do FTOP

| ID da Tarefa | Nome da Tarefa                                                             | O(b)rigatório / (O)pcional |   Função do Microsoft FastTrack   | Serviços |
| ------- | --------------------------------------------------------------------- | :----------------------: | :----------------: | -------- |
| 1330    | Exchange - Validar a Migração de Email com Lote de Teste (FE e Cliente) |            O             | Engenheiro FastTrack (FE) | Exchange |

### Criar Documentos de Transição e Projeto de Transição para o Parceiro Universal

Função principal: **Gerente de migração**  
Aplica-se a: **Exchange/OneDrive for Business/SharePoint**

Criar a documentação para fazer a transição do envolvimento para o parceiro do Modelo de Parceiro Universal(UPM).  

### Gerente de Migração

Função principal: **Gerente de migração**  
Aplica-se a: **Exchange/OneDrive for Business/SharePoint**

Agendar e processar a migração em lotes do cliente para acelerar a migração para a nuvem.  

#### Tarefas do FTOP

| ID da Tarefa | Nome da Tarefa                                                                                         | O(b)rigatório / (O)pcional |       Função do Microsoft FastTrack       | Serviços                                      |
| ------- | ------------------------------------------------------------------------------------------------- | :----------------------: | :------------------------: | --------------------------------------------- |
| 3234    | Realizar reuniões Go-NoGo com o cliente                                                               |            O             |     Gerente FastTrack (FM)      | SharePoint/Exchange/OneDrive for Business |
| 3135    | O cliente cria a agenda de migração                                                                |            O             |     Engenheiro FastTrack (FE)     | OneDrive for Business/Exchange/SharePoint |
| 3143    | Exchange - Validar Acesso à Caixa de Correio - Executar Preflight em TODAS as caixas de correio agendadas                     |            O             |     Engenheiro FastTrack (FE)     | Exchange                                      |
| 1328    | Exchange - Remediar problemas de caixa de correio identificados                                                  |            O             |     Engenheiro FastTrack (FE)     | Exchange                                      |
| 3629    | Desligamento do MVM e Processo de Pausa na Migração                                                     |            M             | Gerente de Migração | Exchange/OneDrive for Business/SharePoint |
| 1871    | Atividades de Migração Direta                                                                      |            M             | Gerente de Migração | Exchange/OneDrive for Business/SharePoint |
| 1874    | Exchange - Aconselhar o cliente a executar o script de conversão de caixa de correio on-premises para usuários ativados para email |            O             |     Engenheiro FastTrack (FE)     | Exchange                                      |

### Gerenciamento de Problemas

Função principal: **Gerente de migração**  
Aplica-se a: **Exchange/OneDrive for Business/SharePoint**

Gerenciar e resolver problemas de migração.  

#### Tarefas do FTOP

| ID da Tarefa | Nome da Tarefa                                                                                                               | O(b)rigatório / (O)pcional |       Função do Microsoft FastTrack       | Serviços              |
| ------- | ----------------------------------------------------------------------------------------------------------------------- | :----------------------: | :------------------------: | --------------------- |
| 2543    | Exchange - Aconselhar o cliente a relatar qualquer problema pós-migração dentro de T+Gerente FastTrack (FM)5 dias úteis a partir do dia do evento de migração |            O             |     Gerente FastTrack (FM)      | Exchange              |
| 2481    | OneDrive - Auxiliar o cliente em itens não sincronizados e outros problemas de migração                                       |            O             | Gerente de Migração | OneDrive for Business |

### Migração Concluída

Função principal: **Gerente de migração**  
Aplica-se a: **Exchange/OneDrive for Business/SharePoint**

Validar que os dados do cliente foram migrados com êxito e prosseguir com qualquer atividade de limpeza antes de se desligar.  

#### Tarefas do FTOP

| ID da Tarefa | Nome da Tarefa                                                                   | O(b)rigatório / (O)pcional |       Função do Microsoft FastTrack       | Serviços                                      |
| ------- | --------------------------------------------------------------------------- | :----------------------: | :------------------------: | --------------------------------------------- |
| 2544    | Exchange - Alterar o registro MX com base no plano de fluxo de mensagens                     |            O             |     Engenheiro FastTrack (FE)     | Exchange                                      |
| 1386    | Exchange - Redefinir registro MX DNS TTL para o valor original                        |            O             |     Engenheiro FastTrack (FE)     | Exchange                                      |
| 1370    | Exchange - Atividades de pós-migração da migração de email (Todos os sistemas de origem)   |            O             |     Engenheiro FastTrack (FE)     | Exchange                                      |
| 2561    | OneDrive - Atividades de pós-migração do OneDrive for Business (Redirecionamento de instalação) |            O             |     Engenheiro FastTrack (FE)     | OneDrive for Business                         |
| 2323    | Exchange - Atividades pós-migração do Domino                                 |            O             | Gerente de Migração | Exchange                                      |
| 1702    | Resultado da Migração: Todas as migrações no escopo concluídas                             |            M             |     Gerente FastTrack (FM)      | Exchange/OneDrive for Business/SharePoint |

### Tarefas Não Categorizadas (Migração)

Função principal: **-**  
Aplica-se a: **Todos os Serviços**

Tarefas não categorizadas do Portal de Orquestração do Microsoft FastTrack (FTOP) que ainda não estão incorporadas ao fluxo do Guia Estratégico do Microsoft FastTrack serão mostradas aqui.  

## Principais Ações

  - Workshop sobre Migração
  - Questionário de Migração
  - CInstalação e configuração da infraestrutura do cliente concluída
  - Requisitos de conectividade atendidos
  - Credencial fornecida pelo cliente
  - Agendar lotes (arquivos CSV)

## Principais Resultados

- Migração bem-sucedida de dados do cliente

## Próximas etapas

  - Mudar o cliente para o processo [Suporte à Execução com Sucesso](success-support-success-execution-partner-en.md).
  - Mudar o cliente para o processo [Realize Análise de Sucesso](success-conduct-success-review-partner-pr.md).


## Resumo de Atualização

| Data       | Quem Mudou       | O Que Mudou          |
| ---------- | ----------------- | ----------------      |
| 25/09/2019 | Celia Kennedy     | Conteúdo do Parceiro Atualizado |
| 05/02/2019 | Celia Kennedy     | Tarefas Preteridas Removidas |
| 06/03/2019 | Patric Grimwood   | Links atualizados em Próximas Etapas |
| 26/02/2019 | Patric Grimwood   | Links de parceiros atualizados |
| 11/12/2018 | Mark Eichenberger | Guia Estratégico criado      |

[Início](http://partner-docs.microsoft.com)
