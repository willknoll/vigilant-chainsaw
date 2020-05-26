---  
# required metadata  
title: FastTrack Partner Playbook - Address Technical Gaps  
description: FastTrack Partner Playbook - Address Technical Gaps  
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

# Abordar Lacunas Técnicas

Fase: **Remediar**

## Visão geral

O processo Abordar Lacunas Técnicas identifica e soluciona lacunas técnicas antes da implantação para permitir implantação de workload consistente e oportuna do cliente e evitar frustração ou atrasos devido a infraestrutura ou outros bloqueadores técnicos.

##  Objetivos

  - Remediar todas as deficiências identificadas durante a avaliação.
  - Garantir que o ambiente do cliente esteja em conformidade com o padrão mínimo para ativação.
  - Concluir atividades de integração principal, incluindo remediação de identidade e sincronização.

## Abordagem

### Analisar a Checklist de Remediação

Função Principal: **Engenheiro Microsoft FastTrack**  
Aplica-se a: **Todos os Serviços**

Examinar a Checklist de Remediação com o cliente.

###  Realizar Reuniões de Ponto de Verificação

Função Principal: **Engenheiro Microsoft FastTrack**  
Aplica-se a: **Todos os Serviços**

Realizar uma reunião de ponto de verificação (semanalmente ou com outra frequência) para examinar o progresso nas etapas de remediação.

###  Ajudar nas Etapas de Remediação

Função Principal: **Engenheiro Microsoft FastTrack**  
Aplica-se a: **Todos os Serviços**

Ajudar nas etapas de remediação conforme necessário.

#### Tarefas do FTOP

| ID da Tarefa | Nome da tarefa     | (b) Obrigatório / (O) Opcional | Função do Microsoft FastTrack | Serviços |
|---------|---------------|--------------------------|--------------------------|--------------------------|
| 3184    | AAD Connect Health - Verificar Requisitos do sistema | O | Engenheiro FastTrack | Integração principal       |
| 2193    | SfB - Remediação de recursos avançados e polos longos | O  | Engenheiro Microsoft FastTrack | Skype for Business |
| 3224    | EDU: Remediar Classroom e SDS  | O | Engenheiro Microsoft FastTrack | Classroom/SDS    |
| 3998    | MIP - Verificar pré-requisitos     | b                        | SME                | AIP |
| 4073    | Rede – Resolver problemas de rede identificados na ferramenta netonboard  | O  | Engenheiro Microsoft FastTrack | Integração principal  |
| 4080  | [MDATP - Configuração de Proxy incluindo Lista de Permissões de URL](https://docs.microsoft.com/en-us/windows/security/threat-protection/microsoft-defender-atp/configure-proxy-internet)  |b |  SME | MDATP              |
| 4101    | Substituir políticas de segurança padrão por políticas de CA para migrações - [Instruções](https://aka.ms/AA75xf0) O FRP pode [Solicitar um SME de Identidade](https://aka.ms/FRPHubSMERequestProcess) para obter assistência opcional | O  | Engenheiro Microsoft FastTrack | Exchange/OneDrive for Business/SharePoint |

###  Remediação de Benefício Adicional Corporativo

Função Principal: **Engenheiro Microsoft FastTrack**  
Aplica-se a: **Exchange/Skype for Business**

Apenas para clientes empresariais aprovados com 20.000 estações ou mais ou com uma exceção.

####  Tarefas do FTOP

| ID da Tarefa | Nome da tarefa                                                   | (b) Obrigatório / (O) Opcional |   Função do Microsoft FastTrack   | Serviços           |
| ------- | ----------------------------------------------------------- | :----------------------: | :----------------: | ------------------ |
| 3208    | Exchange - Agrupamento de Caixas de Correio e Planejamento de Migração |            O             | Engenheiro Microsoft FastTrack | Exchange           |
| 3209    | SfB - Remediação de Migração do Usuário                            |            O             | Engenheiro Microsoft FastTrack | Skype for Business |
| 3358    | Workshop de Planejamento de Migração Aprofundado                       |            O             | Arquiteto FastTrack v2 | Exchange/OneDrive for Business/SharePoint |

###  Coordenar Atividade de Remediação

Função Principal: **Engenheiro Microsoft FastTrack**  
Aplica-se a: **Todos os Serviços**

Coordenar a atividade de remediação realizada pelo parceiro e pelos Serviços de Consultoria da Microsoft (MCS) ou Premier.

###  Checklist de Remediação Resolvida

Função Principal: **Gerente FastTrack (FM)**  
Aplica-se a: **Todos os Serviços**

Passar para a fase de ativação e concluir o processo de Saída da Remediação.

####  Tarefas do FTOP

| ID da Tarefa | Nome da tarefa                                                                       | (b) Obrigatório / (O) Opcional |   Função do Microsoft FastTrack   | Serviços     |
| ------- | ------------------------------------------------------------------------------- | :----------------------: | :----------------: | ------------ |
| 3190    | Confirmar as revisões dos clientes e resolver qualquer item na checklist de remediação |            b             | Engenheiro Microsoft FastTrack | Todos os Serviços |
| 1700    | Saída da Remediação: Todos os itens da Checklist de Remediação resolvidos                     |            b             | Gerente Microsoft FastTrack  | Todos os Serviços |

##### Tarefas Não Categorizadas (Abordar Lacunas Técnicas)

Funções Principais: -
Aplica-se a: **Todos os Serviços**

Tarefas não categorizadas do Portal de Orquestração do Microsoft FastTrack (FTOP) que ainda não foram incorporadas ao fluxo do Guia Estratégico do Microsoft FastTrack Playbook serão mostradas aqui.

####  Tarefas do FTOP

| ID da Tarefa | Nome da tarefa                        | (b) Obrigatório / (O) Opcional |   Função do Microsoft FastTrack   | Serviços |
| ------- | -------------------------------- | :----------------------: | :----------------: | -------- |
| 2545    | AzRMS - Remediação e polos longos |            O             | Engenheiro Microsoft FastTrack | AIP      |

##  Principais Ações

  - Todas as atividades de avaliação técnica estão concluídas (Checklist de Remediação).
  - O cliente identificou recursos adicionais para concluir a remediação (Partner/MCS/Premier).

##  Principais Resultados

  - Todas as etapas de remediação identificadas são resolvidas e o cliente passa para a fase de Ativação.
  - O ambiente do cliente cumpre ou excede os padrões mínimos para ativação do serviço de nuvem.
  - A identidade é remediada e o provisionamento e a sincronização estão configurados e ativos.
  - Usuários piloto/grupos são identificados e preparados para a migração para workloads de nuvem.

## Próximas etapas

  - Preparar usuários piloto/grupos para ativação.
  - Ir para o processo [Suporte à Execução de Sucesso](success-support-success-execution-partner-pr.md) para impulsionar a adoção.
  - Ir para o processo [Ativar Serviços](enable-enable-services-partner-pr.md).

##  Resumo de Atualização

| Data       | Quem Mudou       | O Que Mudou             |
| ---------- | ----------------- | ------------------------ |
|05/04/2020| Celia Kennedy|  Manutenção Geral|
| 03/27/2020 | Celia Kennedy     | Manutenção Geral |
| 12/18/2019 | Celia Kennedy     | Tarefas 4080 e 3358 adicionadas                    |
| 09/25/2018 | Celia Kennedy     | Conteúdo Atualizado |
| 05/02/2018 | Celia Kennedy     | Tarefas Preteridas Removidas |
| 03/06/2019 | Patric Grimwood   | Links atualizados em Próximas Etapas |
| 02/26/2019 | Patric Grimwood   | Links de parceiros atualizados    |
| 12/11/2018 | Mark Eichenberger | Guia Estratégico Criado         |
| 12/7/2018  | Ryan Meehan       | Pequenas alterações de formatação |

[Início](http://partner-docs.microsoft.com)
