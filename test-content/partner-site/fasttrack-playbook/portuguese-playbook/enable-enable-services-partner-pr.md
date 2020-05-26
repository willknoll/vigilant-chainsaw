---  
# required metadata  
title: FastTrack Partner Playbook - Enable Services  
description: FastTrack Partner Playbook - Enable Services  
author: Celia Kennedy  
ms.author: v-cekenn
manager: pagrim
ms.date: 5/2/19
ms.topic: playbook
ms.prod: non-product-specific
ms.custom: partner-playbook
ft.audience: partner
ft.owner: pagrim
---  

# Ativar Serviços

Fase: **Habilitar**

## Visão geral

O processo Ativar Serviços orienta o cliente na configuração de serviços para consumo e migração e para começar a experimentar os benefícios de Ativar Serviço.

##  Objetivos

  - Identificar se o provisionamento e a sincronização estão configurados e ativos.
  - Os workloads elegíveis são configuradas no tenant e estão disponíveis para consumo.
  - Os usuários piloto são migrados e estão consumindo serviços.

## Abordagem

###  Solicitar Gerente de Migração

Função Principal: **Gerente FastTrack (FM)**  
Aplica-se a: **Exchange/SharePoint/OneDrive for Business**

Se um Gerente de Migração (MVM) não tiver sido solicitado, solicite o MVM seguindo o processo de solicitação documentado na atribuição (Tarefa 2278 ‒ Solicitar MVM) na fase Avaliar.

###  Ajudar na Ativação

Função Principal: **Gerente FastTrack (FM)**  
Iniciativas: **Integridade do Cliente/RFA/Segmentação**  
Aplica-se a: **Todos os Serviços**

Realizar reuniões de sincronização com o cliente conforme apropriado e ajudar nas tarefas de ativação.  

**Informações de Qualidade** 

- Os contatos no FTOP são atualizados
- Nota de Ativação Técnica que lista os nomes e funções dos clientes participantes

**Resultados de Qualidade** 

- ((Se aplicável) Data(s) prevista(s) para workloads atualizados
- (Se aplicável) Alterações de status L1/L2
- Nota de Ativação de Envolvimento ou Gerenciamento de Envolvimento que documenta quaisquer alterações na Data-Alvo e/ou alterações no status L1 / L2
- ((Se aplicável) Nota de Ativação Técnica afirmando que o questionário de Migração foi revisado e validado

#### Tarefas do FTOP

| ID da Tarefa | Nome da tarefa      | (b) Obrigatório / (O) Opcional |       Função do Microsoft FastTrack       | Serviços                                      |
| ------- | ----------------------------------------------------------------------------------- | :----------------------: | :------------------------: | --------------------------------------------- |
| 1126    | Reunir-se com o PM do Cliente e os Líderes Técnicos do Cliente para ativar os Itens Principais e os Serviços           |            b             |     Engenheiro Microsoft FastTrack     | Todos os Serviços                                  |
| 1672    | Examinar e validar o Questionário de Migração no Site de Colaboração de Migração |            b             | Gerente de Migração | Exchange/OneDrive for Business/SharePoint |

###  Executar Tarefas de Ativação

Função Principal: **Engenheiro Microsoft FastTrack**  
Iniciativas: **Integridade do Cliente/RFA/Segmentação**  
Aplica-se a: **Todos os Serviços**

Siga as tarefas de Ativar para cada serviço conforme necessário. Algumas tarefas de serviço podem:

  - Vincular ao assistente público.
  - Vincular a documentos de guia adicionais.
  - Ser necessário se o benefício de migração for usado

**Informações de Qualidade**

- As observações de Ativação técnica ou Ambiente capturam o seguinte (se aplicável)):
    - Decisões de identidade do cliente 
    - Confirmação de que o cliente tem identidades instaladas, configuradas e/ou sincronizadas 
    - Decisões de rede do cliente 
    - O cliente tem políticas de acesso condicional configuradas em que "Microsoft realizando valor de migração" = TRUE na seção Migração de Dados do workload da guia Serviços de FTOP 
    - As decisões dos requisitos híbridos, de mobilidade on premises e federação on premises e os domínios do cliente são remediados e configurados de maneira apropriada
    - O cliente concluiu a análise de Descoberta de Site do Edge para sites herdados que usam o IE

**Resultados de Qualidade**

- As observações de Ativação técnica capturam o seguinte (se aplicável)): 
    - Confirmação de que o cliente executou o cmdlet apropriado do Assistente do Microsoft FastTrack (por ambiente) para validar qualquer instalação e configuração de domínio personalizado de ambiente híbrido 
    - ViewPoint usado para validar Sincronização de Diretório, assistente de configuração do ADFS concluído com êxito ou o cliente pode acessar os serviços usando IDs de Nuvem
    - O cliente concluiu as atividades de configuração e validação dos Serviços principais, mais quaisquer serviços M365 verificados aos quais ele tem direito
        - Status de Consumo (L1) = Em Andamento
        - Razão (L2) = Solução ou Adoção do Usuário
        - Lynx usado para confirmar que os clientes de RFA alcançaram 100 usuários ativos ou 10% de uso se há < 1000 estações
    - a migração de teste foi concluída com êxito usando a Agenda de Migração Piloto do cliente e a solicitação de criação da migração foi atendida

<<<<<<< HEAD
**Informações de Qualidade**

- As observações de Ativação técnica ou Ambiente capturam o seguinte (se aplicável)):
    - Decisões de identidade do cliente 
    - Confirmação de que o cliente tem identidades instaladas, configuradas e/ou sincronizadas 
    - Decisões de rede do cliente 
    - O cliente tem políticas de acesso condicional configuradas em que "Microsoft realizando valor de migração" = TRUE na seção Migração de Dados do workload da guia Serviços de FTOP 
    - As decisões dos requisitos híbridos, de mobilidade on premises e federação on premises e os domínios do cliente são remediados e configurados de maneira apropriada
    - O cliente concluiu a análise de Descoberta de Site do Edge para sites herdados que usam o IE

**Resultados de Qualidade**

- As observações de Ativação técnica capturam o seguinte (se aplicável)): 
    - Confirmação de que o cliente executou o cmdlet apropriado do Assistente do Microsoft FastTrack (por ambiente) para validar qualquer instalação e configuração de domínio personalizado de ambiente híbrido 
    - ViewPoint usado para validar Sincronização de Diretório, assistente de configuração do ADFS concluído com êxito ou o cliente pode acessar os serviços usando IDs de Nuvem
    - O cliente concluiu as atividades de configuração e validação dos Serviços principais, mais quaisquer serviços M365 verificados aos quais ele tem direito
        - Status de Consumo (L1) = Em Andamento
        - Razão (L2) = Solução ou Adoção do Usuário
        - Lynx usado para confirmar que os clientes de RFA alcançaram 100 usuários ativos ou 10% de uso se há < 1000 estações
    - a migração de teste foi concluída com êxito usando a Agenda de Migração Piloto do cliente e a solicitação de criação da migração foi atendida
=======
#### Tarefas do FTOP
>>>>>>> 4b48cb7652dd99a1f0993d371c26b81d0b745b41

| ID da Tarefa | Nome da tarefa                                                                                                | (b) Obrigatório / (O) Opcional |       Função do Microsoft FastTrack       | Serviços                                                           |
| ------- | -------------------------------------------------------------------------------------------------------- | :----------------------: | :------------------------: | ------------------------------------------------------------------ |
| 3992    | MVM para Integração do Cliente                                                                                  |            O             | Gerente de Migração | Exchange/OneDrive for Business/SharePoint                      |
| 2474    | Validar a configuração da ferramenta de migração e executar a migração de teste                                         |            b             | Gerente de Migração | Exchange/OneDrive for Business/SharePoint                      |
| 3126    | OneDrive - Se não houver migração, instalar o cliente de sincronização de ODB. Caso contrário, instalar a pós-migração do cliente        |            O             |     Engenheiro Microsoft FastTrack     | OneDrive for Business                                              |
| 3147    | OneDrive - {Wizard} Configurar o OneDrive for Business                                                      |            b             |     Engenheiro Microsoft FastTrack     | OneDrive for Business                                              |
| 3125    | SharePoint/OneDrive - Validar que foram atribuídas licenças aos usuários para SPO ou ODB                          |            O             |     Engenheiro Microsoft FastTrack     | SharePoint/OneDrive for Business                                 |
| 1235    | SharePoint - {Wizard} Configurar o SharePoint Online                                                        |            b             |     Engenheiro Microsoft FastTrack     | SharePoint                                                         |
| 3222    | SharePoint - {Wizard} Configurar o SharePoint Híbrido                                                        |            O             |     Engenheiro Microsoft FastTrack     | SharePoint                                                         |
| 1158    | Exchange - Configurar EXO                                                                                 |            b             |     Engenheiro Microsoft FastTrack     | Exchange                                                           |
| 3223    | EDU: Ativar Classroom e SDS                                                                              |            O             |     Engenheiro Microsoft FastTrack     | Classroom/SDS                                                      |
| 3306    | Solicitação de Criação de Infraestrutura de Migração/Serviço                                                           |            b             | Gerente de Migração | Exchange/OneDrive for Business/SharePoint                      |
| 3677    | Exchange - Migração do GroupWise: Configurar ODME                                                  |            O             | Gerente de Migração | Exchange                                                           |
| 1941    | Exchange - Aplicar política de endereço e validar se Endereços SMTP Novos/Originais são listados como um endereço de Proxy |            O             |     Engenheiro Microsoft FastTrack     | Exchange                                                           |
| 3687    | Teams - Assistência Core Plus                                                                             |            b             |            SME             | Teams                                                              |
| 1159    | Exchange - {Wizard} Configurar Fluxo de mensagens no EXO                                                           |            O             |     Engenheiro Microsoft FastTrack     | Exchange                                                           |
| 1171    | Exchange - {Wizard} Configurar migração IMAP                                                                 |            O             |     Engenheiro Microsoft FastTrack     | Exchange                                                           |
| 3311    | Exchange - Migração do Notes: Guia da "Ferramenta de Importação Automática" para importar lotes de Agendamento                 |            O             | Gerente de Migração | Exchange                                                           |
| 3160    | Exchange - {Wizard} Exchange Híbrido Mínimo                                                              |            O             |     Engenheiro Microsoft FastTrack     | Exchange                                                           |
| 3159    | Exchange - {Wizard} Exchange 2016 Mínimo                                                                 |            O             |     Engenheiro Microsoft FastTrack     | Exchange                                                           |
| 3158    | Exchange - {Wizard} Exchange 2013 Mínimo                                                                 |            O             |     Engenheiro Microsoft FastTrack     | Exchange                                                           |
| 3157    | Exchange - {Wizard} Exchange 2010 Mínimo                                                                 |            O             |     Engenheiro Microsoft FastTrack     | Exchange                                                           |
| 3156    | Exchange - {Wizard} Migração Staged do Exchange                                                            |            O             |     Engenheiro Microsoft FastTrack     | Exchange                                                           |
| 3155    | Exchange - {Wizard} Migração de Substituição do Exchange                                                           |            O             |     Engenheiro Microsoft FastTrack     | Exchange                                                           |
| 1240    | Yammer - {Wizard} Configurar o Yammer                                                                       |            b             |     Engenheiro Microsoft FastTrack     | Yammer                                                             |
| 3727    | Teams - Realizar Workshop de Painel de Qualidade de Chamada                                                          |            b             |            SME             | Teams                                                              |
| 3725    | Teams - Configurar Colaboração e Reuniões Principais (VOIP)                                                          |            b             |            SME             | Teams                                                              |
| 3724    | Teams - Configurar Serviços Avançados de Voz (PSTN)                                                         |            b             |            SME             | Teams                                                              |
| 3728    | Teams - Ativar Tecnicamente o Serviço do Teams                                                                 |            b             |     Gerente Microsoft FastTrack      | Teams                                                              |
| 2218    | Ativar o Microsoft Intune                                                                                  |            b             |     SME     | Intune                                                             |
| 2415    | AADP - {Wizard} Configurar AADP Principal                                                                      |            O             |     Engenheiro Microsoft FastTrack     |  AADP                                                               |
| 1641    | Configurar domínio personalizado                                                                                      |            b             |     Engenheiro Microsoft FastTrack     | Integração principal                                                    |
| 1141    | {Wizard} Configurar Sincronização de Diretório (Azure AD Connect)                                             |            O             |     Engenheiro Microsoft FastTrack     | Integração principal                                                    |
| 1134    | Criar IDs de Nuvem                                                                                         |            O             |     Engenheiro Microsoft FastTrack     | Integração principal                                                    |
| 1148    | {Wizard} Instalar e configurar o ADFS                                                                      |            O             |     Engenheiro Microsoft FastTrack     | Integração principal                                                    |
| 3267    | Outlook Mobile - Configurar o Outlook Mobile                                                                |            b             |     Engenheiro Microsoft FastTrack     | Outlook Mobile                                                     |
| 3161    | Power BI - Configurar o Power BI                                                                            |            O             |     Engenheiro Microsoft FastTrack     | PowerBI                                                            |
| 2461    | Lidar com o cliente do PowerBI durante o Envolvimento de Widget - Consulte Saiba Mais                                        |            O             |     Engenheiro Microsoft FastTrack     | PowerBI                                                            |
| 2570    | Configurar Cloud PBX com Chamada PSTN                                                                    |            O             |     Engenheiro Microsoft FastTrack     | Skype for Business - Chamada PSTN/Skype for Business - Cloud PBX |
| 2201    | SfB - Configurar Servidor do Lync 2010/2013 de Domínio Dividido do SfB                                                   |            O             |     Engenheiro Microsoft FastTrack     | Skype for Business                                                 |
| 2567    | SfB - Configurar Domínio Dividido do SfB para Servidor SfB 2015                                                     |            O             |     Engenheiro Microsoft FastTrack     | Skype for Business                                                 |
| 2260    | SfB - Configurar Conta do Sistema de Salas do SfB                                                                  |            O             |     Engenheiro Microsoft FastTrack     | Skype for Business                                                 |
| 2980    | SfB - {Wizard} Configurar Recursos Padrão do Skype for Business                                            |            O             |     Engenheiro Microsoft FastTrack     | Skype for Business                                                 |
| 3047    | Configurar Conferência PSTN de Nuvem                                                                        |            O             |     Engenheiro Microsoft FastTrack     | Skype for Business - Conferência PSTN                             |
| 2483    | Configurar Project Professional                                                                           |            b             |     Engenheiro Microsoft FastTrack     | Project                                                            |
| 2266    | SfB - Configurar Recursos Principais do Skype for Business (IM/P apenas)                                             |            O             |     Engenheiro Microsoft FastTrack     | Skype for Business                                                 |
| 2491    | Configurar Project Online/Project Lite                                                                  |            b             |     Engenheiro Microsoft FastTrack     | Project                                                            |
|| 3999    | [MIP - Ativar o tenant e configurar o cliente de teste](https://aka.ms/PartnerMIPAdoptionGuide)                                                          |            b             |            SME             | AIP                                                                |
| 3954    | Criar Documentos de Transição e Transição para a Equipe de Migração                                             |            O             | Gerente de Migração | Exchange/OneDrive for Business/SharePoint                      |
| 4000    | MIP – Configurar Rótulos de Confidencialidade                                                                   |            O             |            SME             | AIP                                                                |
| 4001    | MIP – Rótulos de Documentos de Teste                                                                                 |            O             |            SME             | AIP                                                                |
| 4002    | MIP – Criar Políticas de Proteção                                                                   |            O             |            SME             | AIP                                                                |
| 4003    | MIP – Instalar Clientes                                                                                  |            O             |            SME             | AIP                                                                |
| 4004    | MIP – Fornecer Guia sobre BYOK                                                                             |            O             |            SME             | AIP                                                                |
| 4006    | MIP – Trabalhar com Scanner de Rotulagem Unificado                                                                                 |            O             |            SME             | AIP                                                                |
| 4081    | OATP – Definir Configurações P1                                                                             |            O             |     Engenheiro Microsoft FastTrack     | Exchange/OATP                                                    |
| 4082    | OATP – Analisar recursos P2                                                                            |            O             |            SME             | Exchange/OATP                                                    |
| 4083    | MDATP – Definir configurações                                                                               |            b             |            SME             | MDATP                                                              |
| 4087    | Preterimento do Agente de PC do Intune                                                                              |            O             |            SME             | Intune                                                             |
| 4097    | Implantar e Configurar o Microsoft Edge                                                                      |            b             |      Engenheiro Microsoft FastTrack    | Edge                                                               |
| 4098    | Análise e Configuração de Política do Microsoft Edge                                                               |            b             |            SME             | Edge                                                               |

### Executar Tarefas de Ativação de Get Modern  

Função Principal: **Engenheiro Microsoft FastTrack**  
Iniciativas: **Integridade do Cliente/RFA/Segmentação**  
Aplica-se a: **Office ProPlus/Windows 10**

Concluir as tarefas para executar a ativação de Get Modern.  

#### Tarefas do FTOP

| ID da Tarefa | Nome da tarefa                                     | (b) Obrigatório / (O) Opcional | Função do Microsoft FastTrack | Serviços |
| ------- | --------------------------------------------- | :----------------------: | :------------: | -------- |
| 4024    | Atualizar do Windows 7/8.1 para o Windows 10                                                                 |            b             |     Engenheiro Microsoft FastTrack     | Windows 10                                                         |
| 4031    | Otimizar a Entrega de Atualizações do Windows 10 e do Office com o System Center                                          |            O             |            SME             | Windows 10                                                         |
| 4032    | Implantação em Fases do Windows 10 com o System Center                                                          |            O             |            SME             | Windows 10                                                         |
| 1247    | Implantar o Office 365 ProPlus                                                                                |            b             |     Engenheiro Microsoft FastTrack     | Office ProPlus                                                     |
| 4033    | Implantação em Fases do Office 365 ProPlus com o System Center                                                  |            O             |            SME             | Office ProPlus                                                         |
| 3650    | Office ProPlus - Aceleração de OPP |            O             | Gerente Microsoft FastTrack | Office ProPlus |

### Teams - Transição do Skype para o Teams

Função Principal: **SME**  
Aplica-se a: **Teams**

Se o cliente estiver recebendo assistência para a transição do Skype para o Teams de um SME do Teams ou do Microsoft FastTrack Ready Partner para **envolvimentos proativos intermediários (clientes com 2.000 a 10.000 usuários ativos de SfBO)**, use as tarefas abaixo para capturar o status atual do envolvimento.

**Para clientes com menos de 2.000 ou 10.000 usuários ativos de SfBO**, consulte o guia adicional sobre as funções e responsabilidades das atividades de transição de SfBO para Teams; consulte o slide 6 na [**apresentação Funções e Responsabilidades** anexada.](https://aka.ms/FTCTeamsRnRs)  

**FastTrack Ready Partners**​​ – se você estiver liderando a transição do cliente, continue informando o SME atribuído sobre os detalhes de seu envolvimento para que ele possa rastrear o status da tarefa em seu nome. Forneça a data visada para Apenas Teams e o resumo do status do cliente. ​
 
####  Tarefas do FTOP

| ID da Tarefa | Nome da tarefa                                     | (b) Obrigatório / (O) Opcional |   Função do Microsoft FastTrack   | Serviços |
| ------- | --------------------------------------------- | :----------------------: | :----------------: | -------- |
| 3685    | Teams - Avaliação de Aprendizado Interno         |            b             | Engenheiro Microsoft FastTrack | Teams    |
| 3716    | Teams - Visão Geral da Atualização do Cliente             |            b             |        SME         | Teams    |
| 3688    | Teams - Estratégia e Planejamento do Cliente        |            b             |        SME         | Teams    |
| 3689    | [Teams - Atualização do Cliente](https://aka.ms/AA6vhy4)                    |            b             |        SME         | Teams    |
| 3722    | Teams - Suporte à Transição Reativa Intermediária |            b             |        SME         | Teams    |

###  Elegibilidade da Pesquisa de Clientes

Função Principal: **Gerente FastTrack (FM)**  
Iniciativas: **Integridade do Cliente/RFA/Segmentação**  
Aplica-se a: **Todos os Serviços**

Atualizar as informações da Pesquisa do Cliente para elegibilidade e contatos nas tarefas apropriadas.  

**Informações de Qualidade**

- Os contatos no FTOP são atualizados e contatos obsoletos são removidos  

**Resultados de Qualidade**

- Nenhum

#### Tarefas do FTOP

| ID da Tarefa | Nome da tarefa               | (b) Obrigatório / (O) Opcional |  Função do Microsoft FastTrack   | Serviços     |
| ------- | ----------------------- | :----------------------: | :---------------: | ------------ |
| 3690    | Identificar Contato da Pesquisa |            b             | Gerente Microsoft FastTrack | Todos os Serviços |

###  Todos os Serviços no Escopo Ativados

Função Principal: **Gerente FastTrack (FM)**  
Iniciativas: **Integridade do Cliente/RFA/Segmentação**  
Aplica-se a: **Todos os Serviços**

Mover o cliente para a fase Migrar e concluir a tarefa apropriada.

####  Tarefas do FTOP

| ID da Tarefa | Nome da tarefa                                                                      | (b) Obrigatório / (O) Opcional |  Função do Microsoft FastTrack   | Serviços     |
| ------- | ------------------------------------------------------------------------------ | :----------------------: | :---------------: | ------------ |
| 1701    | Ativação Concluída: Todos os serviços no escopo ativados; ferramentas de migração configuradas |            b             | Gerente Microsoft FastTrack | Todos os Serviços |

##  Principais Ações

  - Todas as tarefas necessárias da Checklist de Remediação foram concluídas. 
  - O cliente entende a identidade e conclui qualquer remediação. 
  - O ambiente on-premises do cliente é remediado/configurado para permitir o consumo de serviços de nuvem (incluindo qualquer coexistência híbrida).
  - O cliente está pronto para começar a consumir serviços. 

##  Principais Resultados

  - Todos os workloads desejados estão configurados e disponíveis para consumo. 
  - Os usuários piloto foram ativados e migrados. 

## Próximas etapas

  - Incentivar adoção/consumo de workloads adicionais conforme apropriado no processo [Suporte à Execução de Sucesso](success-support-success-execution-partner-pr.md).
  - Atualizar Status do Serviço para **Adoção** ou **Migração**.  

###  Ativação de Benefício Adicional Corporativo

Função Principal: **Engenheiro Microsoft FastTrack**  
Iniciativas: **Segmentação/RFA/Integridade do Cliente**  
Aplica-se a: **Todos os Serviços**

Apenas para clientes empresariais aprovados com 20.000 estações ou mais ou com uma exceção.  

**Informações de Qualidade**

- As observações de Ativação técnica ou Ambiente capturam o seguinte (se aplicável)):
    - Decisões qualificadas de configuração e identidade do cliente após a conclusão das atividades de remediação aplicáveis exclusivas para: 
        - Farms do ADFS com redundância geográfica
        - Exchange híbrido complexo ou outros cenários híbridos principais
        - Segurança, conformidade, requisitos regulamentares (ou seja, GPO, Pastas Públicas, bloqueios, gerenciamento de grupos etc.))
        - Gerenciamento de identidade, incluindo políticas de acesso de cliente/Web ou Alt-Id 
- As observações de Gerenciamento de Envolvimento capturam o seguinte:
    - O cliente qualificado desenvolveu uma estratégia de migração e/ou política de backup de dados do usuário em que "Microsoft realizando valor de migração" = TRUE na seção Migração de Dados do workload da guia Serviços de FTOP
    - Método de migração e requisitos de agendamento para gerar agendas de migração  

**Resultados de Qualidade** 

- As observações de Ativação Técnica capturam o seguinte (se aplicável):
    - O cliente qualificado valida a configuração das políticas de acesso ADFS e de cliente/Web com redundância geográfica 
        - Assistentes e/ou regras de solicitações personalizadas na Lista de Autorizações de Emissão foram testados
    - O cliente qualificado valida a integração de aplicativos ativados para email e o roteamento de email foi concluído
        - Confirmar se nenhum aplicativo cliente está ativado para email ou, para aqueles que estão, o email está sendo roteado conforme o esperado
    - O cliente qualificado confirmou o uso de Pastas Públicas on-premises e as configurou e sincronizou do Exchange para o O365 se elas devem coexistir ou as migrou para Caixas de Correio Compartilhadas no O365
    - Se autorizado, a unificação de mensagens híbrida do Exchange foi configurada para usuários ativados do Skype/LYNX
    - FTA Get Modern envolvido novamente para assistência de implantação do Windows 10 

#### Tarefas do FTOP

| ID da Tarefa | Nome da tarefa                                                 | (b) Obrigatório / (O) Opcional |   Função do Microsoft FastTrack   | Serviços        |
| ------- | --------------------------------------------------------- | :----------------------: | :----------------: | --------------- |
| 4037    | Novo Envolvimento de Arquiteto FastTrack de Get Modern              |            O             |   GetModern FTA    | Windows 10      |
| 3212    | Exchange - Guia de Integração de Aplicativos Ativados para Email |            O             | Engenheiro Microsoft FastTrack | Exchange        |
| 3213    | Exchange - Ativação de Coexistência de Pastas Públicas do Exchange  |            O             | Engenheiro Microsoft FastTrack | Exchange        |
| 3238    | Exchange - Ativar Integração do Lync/SfB                    |            O             | Engenheiro Microsoft FastTrack | Exchange        |
| 3241    | Configurar Políticas de Acesso de Cliente do AD FS                    |            O             | Engenheiro Microsoft FastTrack | Integração principal |
| 3243    | Guia de Configuração do ADFS com Redundância Geográfica                 |            O             | Engenheiro Microsoft FastTrack | Integração principal |

### Tarefas Não Categorizadas (Ativar Serviços)

Função Principal: **-**  
Aplica-se a: **Todos os Serviços**

Tarefas não categorizadas que ainda não foram incorporadas ao fluxo do Guia Estratégico do Microsoft FastTrack Playbook serão mostradas nesta seção.

####  Tarefas do FTOP

| ID da Tarefa | Nome da tarefa                | (b) Obrigatório / (O) Opcional |   Função do Microsoft FastTrack   | Serviços |
| ------- | ------------------------ | :----------------------: | :----------------: | -------- |
| 2550    | {Wizard} Configurar AzRMS |            O             | Engenheiro Microsoft FastTrack | AIP      |

##  Principais Ações

  - Todas as tarefas necessárias da Checklist de Remediação foram concluídas. 
  - O cliente entende a identidade e conclui qualquer remediação. 
  - O ambiente on-premises do cliente é remediado/configurado para permitir o consumo de serviços de nuvem (incluindo qualquer coexistência híbrida).
  - O cliente está pronto para começar a consumir serviços. 

##  Principais Resultados

  - Todos os workloads desejados estão configurados e disponíveis para consumo. 
  - Os usuários piloto foram ativados e migrados. 

## Próximas etapas

  - Incentivar adoção/consumo de workloads adicionais conforme apropriado no processo [Suporte à Execução de Sucesso](success-support-success-execution-partner-pr.md).
  - Atualizar Status de Serviço para Adoção ou Migração
  
[Início](http://partner-docs.microsoft.com)

##  Resumo de Atualização

| Data       | Quem Mudou       | O Que Mudou          |
| ---------- | ----------------- | ----------------      |
| 05/04/2020 | Celia Kennedy| Manutenção Geral |
| 10/25/2020 | Celia Kennedy | Manutenção Geral |
| 2/28/2020  | Celia Kennedy | Etapa adicionada ‒ Executar Tarefas de Ativação de Get Modern  |
| 1/31/2020  | Celia Kennedy | Tarefa 1910 preterida, alteração da tarefa 3690 para Obrigatória, tarefa 3685 renomeada |
| 1/31/2020  | Celia Kennedy | Tarefas 4097, 4098 adicionadas |
| 12/6/2019  | Celia Kennedy | Tarefa 4022 preterida, Tarefa 4087 adicionada |
| 10/25/2019 | Celia Kennedy | Tarefas 4081, 4082, 4083 adicionadas |
| 09/25/2019 | Celia Kennedy | Conteúdo do Parceiro Atualizado  |
| 05/03/2019 | Celia Kennedy | Tarefas Preteridas Removidas  |
| 03/06/2019 | Patric Grimwood | Links atualizados em Próximas Etapas |
| 02/26/2019 | Patric Grimwood | Links de parceiros atualizados |
| 10/26/2018 | Mark Eichenberger | Guia Estratégico Criado |

[Início](http://partner-docs.microsoft.com)
