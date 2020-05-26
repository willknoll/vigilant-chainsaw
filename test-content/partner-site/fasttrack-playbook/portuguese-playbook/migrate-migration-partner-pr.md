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

Garantir uma migração bem-sucedida do cliente para a nuvem (Exchange Online/OneDrive for Business/SharePoint).

##  Objetivos

  - Validar a ativação técnica e o aprendizado do cliente para a migração
  - Executar o teste de migração
  - Transferir o envolvimento para as migrações e executar migrações
  - Gerenciamento de problemas

## Abordagem

###  Executar Migração de Teste

Função Principal: **Gerente de migração**  
Aplica-se a: **Exchange/OneDrive for Business/SharePoint**

Executar a migração de teste e validar se a infraestrutura do cliente está preparada para a migração.  

####  Tarefas do FTOP

| ID da Tarefa | Nome da tarefa                                                             | (b) Obrigatório / (O) Opcional |   Função do Microsoft FastTrack   | Serviços |
| ------- | --------------------------------------------------------------------- | :----------------------: | :----------------: | -------- |
| 1330    | Exchange - Validar a migração de email com lote de teste (FE e cliente) |            O             | Engenheiro Microsoft FastTrack | Exchange |

###  Criar Documentos de Transição e Projeto de Transição para o Parceiro Universal

Função Principal: **Gerente de migração**  
Aplica-se a: **Exchange/OneDrive for Business/SharePoint**

Criar a documentação para fazer a transição do envolvimento para o parceiro do Modelo de Parceiro Universal (UPM).  

###  Gerente de Migração

Função Principal: **Gerente de migração**  
Aplica-se a: **Exchange/OneDrive for Business/SharePoint**

Agendar e processar a migração em lotes do cliente para acelerar a migração para a nuvem.  

####  Tarefas do FTOP

| ID da Tarefa | Nome da tarefa                | (b) Obrigatório / (O) Opcional |       Função do Microsoft FastTrack       | Serviços      |
| ------- | -----------------------------------------| :----------------------: | :------------------------: | ---------------|
| 3234    | Realizar reuniões Go-NoGo com o cliente  |         O             |     Gerente Microsoft FastTrack      | SharePoint/Exchange/OneDrive for Business |
| 3135    | O cliente cria a agenda de migração   |         O             |     Engenheiro Microsoft FastTrack     | OneDrive for Business/Exchange/SharePoint |
| 3143    | [Guia de Pre-flight de Migração Híbrida do Exchange](https://aka.ms/FTCPreflight) Os clientes devem verificar as caixas de correio antes de agendar a mitigação de erros inflight durante a migração|  O  |  Engenheiro Microsoft FastTrack | Exchange|| 1328    | Exchange - Remediar problemas de caixa de correio identificados |   O         |     Engenheiro Microsoft FastTrack     | Exchange                                       |
| 3629    | Desligamento do MVM e processo de pausa na migração  |   b        | Gerente de Migração | Exchange/OneDrive for Business/SharePoint |
| 1871    | Atividades de migração direta|            b             | Gerente de Migração | Exchange/OneDrive for Business/SharePoint |
| 1874    | Exchange - Aconselhar o cliente a executar o script de conversão de caixa de correio on-premises para usuários ativados para email |          O             |     Engenheiro Microsoft FastTrack     | Exchange |

###  Gerenciamento de Problemas

Função Principal: **Gerente de migração**  
Aplica-se a: **Exchange/OneDrive for Business/SharePoint**

Gerenciar e resolver
problemas de migração.  

####  Tarefas do FTOP

| ID da Tarefa | Nome da tarefa                                                                                                               | (b) Obrigatório / (O) Opcional |       Função do Microsoft FastTrack       | Serviços              |
| ------- | ----------------------------------------------------------------------------------------------------------------------- | :----------------------: | :------------------------: | --------------------- |
| 2543    | Exchange - Aconselhar o cliente a relatar qualquer problema pós-migração dentro de T+5 dias úteis a partir do dia do evento de migração |            O             |     Gerente Microsoft FastTrack      | Exchange              |
| 2481    | OneDrive - Auxiliar o cliente em itens não sincronizados e outros problemas de migração                                       |            O             | Gerente de Migração | OneDrive for Business |

###  Migração Concluída

Função Principal: **Gerente de migração**  
Aplica-se a: **Exchange/OneDrive for Business/SharePoint**

Validar que os dados do cliente foram migrados com êxito e prosseguir com qualquer atividades de limpeza antes do desligamento.  

####  Tarefas do FTOP

| ID da Tarefa | Nome da tarefa               | (b) Obrigatório / (O) Opcional | Função do Microsoft FastTrack             | Serviços                                      |
|---------|---------------------------------------------------|--------------------------|----------------------------|-----------------------------------------------|
| 2544    | Exchange - Alterar o registro MX com base no plano de fluxo de email     | O                        | Engenheiro Microsoft FastTrack         | Exchange                                      |
| 1386    | Exchange - Redefinir registro MX DNS TTL para o valor original          | O                        | Engenheiro Microsoft FastTrack         | Exchange                                      |
| 1370    | Exchange - Atividades de pós-migração da migração de email (Todos os sistemas de origem)          | O                        | Engenheiro Microsoft FastTrack         | Exchange                                      |
| 2561    | OneDrive - Atividades de pós-migração do OneDrive for Business (Redirecionamento de instalação)         | O                        | Engenheiro Microsoft FastTrack         | OneDrive for Business                         |
| 2323    | Atividades de fechamento de migração               | b                        | Gerente de Migração | Exchange/OneDrive for Business/SharePoint |
| 4102    | Remover políticas de CA e ativar padrões de segurança após a migração [Instruções](https://aka.ms/AA75m9r) O FRP pode [Solicitar SME de Identidade](https://aka.ms/FRPHubSMERequestProcess) para obter assistência opcional | O                        | Engenheiro Microsoft FastTrack         | Exchange/OneDrive for Business/SharePoint |
| 1702    | Resultado da Migração: Todas as migrações no escopo concluídas     | b                        | Gerente Microsoft FastTrack          | Exchange/OneDrive for Business/SharePoint |

### Tarefas não categorizadas (Migração)

Função Principal: **-**  
Aplica-se a: **Todos os Serviços**

Tarefas não categorizadas do Portal de Orquestração do Microsoft FastTrack (FTOP) que ainda não foram incorporadas ao fluxo do Guia Estratégico do Microsoft FastTrack Playbook serão mostradas aqui.  

##  Principais Ações

  - Workshop sobre Migração
  - Questionário de Migração
  - CInstalação e configuração da infraestrutura do cliente concluída
  - Requisitos de conectividade atendidos
  - Credencial fornecida pelo cliente
  - Agendar lotes (arquivos CSV)

##  Principais Resultados

- Migração bem-sucedida de dados do cliente

## Próximas etapas

  - Mudar o cliente para o processo [Suporte à Execução com Sucesso](success-support-success-execution-partner-pr.md).
  - Mudar o cliente para o processo [Realizar Análise de Sucesso](success-conduct-success-review-partner-pr.md).


##  Resumo de Atualização

| Data       | Quem Mudou       | O Que Mudou        |
| ---------- | ----------------- | ----------------    |
|05/04/2020| Celia Kennedy|  Manutenção Geral|
| 03/27/2019 | Celia Kennedy     | Manutenção Geral |
| 1/31/2020  | Celia Kennedy | Tarefa 4102 preterida, tarefa 3143 renomeada |
| 09/25/2019 | Celia Kennedy     | Atualização de Conteúdo do Parceiro |
| 05/02/2019 | Celia Kennedy     | Tarefas Preteridas Removidas |
| 03/06/2019 | Patric Grimwood   | Links atualizados em Próximas Etapas |
| 02/26/2019 | Patric Grimwood   | Links de parceiros atualizados |
| 12/11/2018 | Mark Eichenberger | Guia Estratégico Criado      |

[Início](http://partner-docs.microsoft.com)
