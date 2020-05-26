---  
# required metadata  
title: FastTrack Partner Playbook - Office 365 ProPlus Standalone Deployment
description: FastTrack Partner Playbook - Office 365 ProPlus Standalone Deployment 
ms.author: v-cekenn
manager: pagrim
ms.date: 10/01/2019  
ms.topic: partner-playbook  
ms.prod: non-product-specific  
ms.custom: partner-playbook  
ft.audience: partner
ft.owner: pagrim
---   

# Implantação Autônoma do Office 365 ProPlus

## Visão geral

O principal impulsionador do Office 365 ProPlus MAU no AF20 será a iniciativa Get Modern, que inclui a atualização do Windows 7/8.1 para o Windows 10 e a implantação do Office 365 ProPlus usando o System Center.

Esse guia foi desenvolvido para os Engenheiros FastTrack, com suporte dos Gerentes FastTrack e SMEs OPP, para orientar os clientes na implantação do Office 365 ProPlus sem a atualização do Windows.

**Em alguns casos, etapas poderão ser ignoradas se o tópico relevante for completamente abordado/remediado.**

## Objetivos

A seguir, é apresentada uma lista de objetivos para este guia estratégico:

  - **Uso das etapas alinhadas ao ponto em que o cliente está na implantação do Office 365 ProPlus.** Em alguns casos, etapas poderão ser ignoradas se o tópico relevante for completamente abordado/remediado.
    Recomenda-se a realização de pilotos para evitar casos de suporte devido a implantações não testadas.

  - **Garantir que os clientes implantem até mais de 70% e usem os mais recentes aplicativos cliente do Office conectados à nuvem** nas organizações é fundamental, pois continuamos a dar suporte a nossos clientes enquanto eles se preparam para o fim do suporte do Office 2010 e em sua jornada de transformação digital.

  - O Office 365 ProPlus é de importância estratégica para a Microsoft entre os concorrentes, à medida que transferimos nossos clientes para a nuvem com o Microsoft 365.

## Fluxo de Trabalho do Office 365 ProPlus  

[![office-proplus-complete-processv3](media/office-proplus-complete-processv3.PNG)]

##  Processos de Guia Estratégico

- [Realizar Workshop de Serviços](assess-conduct-services-workshops-partner-pr.md)
- [Realizar Conversa com o Cliente sobre Adoção e Gerenciamento de Alterações](assess-conduct-adoption-and-change-management-conversation-partner-pr.md)
- [Realizar Avaliação Técnica](assess-conduct-technical-assessment-partner-pr.md)
- [Ativar Serviços](enable-enable-services-partner-pr.md)

## Implantação

Função Principal: **Engenheiro Microsoft FastTrack**  
Aplica-se a: **Office 365 ProPlus (sem atualização do Windows 10)**

A qualquer momento, se seu envolvimento for atrasado ou bloqueado ou se você precisar de suporte adicional para executar este guia estratégico, solicite um SME OPP usando a [Ferramenta de Solicitação de Recursos do Microsoft FastTrack](https://aka.ms/FRPHubSMERequestProcess).
Essa equipe dedicada de especialistas no assunto do OPP está disponível para apoiar a iniciativa em escala, mas em nenhum momento eles substituem a função do Gerente, Engenheiro ou Arquiteto FastTrack.

### 1. Avaliação Técnica e Planejamento do Office 365 ProPlus

O workshop de avaliação orienta o cliente a descobrir e planejar a implantação do Office 365 ProPlus. Durante o workshop, serão informados os pontos de decisão importantes para a implantação do Office 365 ProPlus. O workshop fornece a discussão para identificar pontos de decisão para os clientes. Use a [apresentação do workshop de avaliação](https://fasttrack-docs.microsoft.com/collateral/M365-O365-O365ProPlus.html#assessment-workshop). A realização do workshop deve incluir a equipe de TI responsável pela implantação do Office 365 ProPlus. Os clientes podem ser direcionados ao [Guia de Implantação do Office](https://docs.microsoft.com/DeployOffice/deployment-guide-for-office-365-proplus) e usam uma estrutura consistente para obter mais recursos de suporte.

### 2. Conversa sobre Adoção e Gerenciamento de Alterações

> O Gerente FastTrack deve usar o Guia do ACM, conforme necessário, para garantir que o cliente tenha o material relevante para ajudar a informar os usuários finais que estão implantando o Office 365 ProPlus. Use o OPP BVD ou os Manipuladores de Objeções para solucionar quaisquer equívocos sobre os benefícios do Office 365 ProPlus em relação às versões anteriores. Essa discussão pode ser usada posteriormente na implantação, se necessário, para que o cliente volte a progredir, caso esteja parado.

### 3. Avaliação do Office Readiness Toolkit
 
### 4. O ORT por meio de SCCM ou autônomo deve ser executado pelo cliente para avaliar quaisquer macros ou suplementos personalizados/de terceiros que são incompatíveis com o Office 365 ProPlus de 64 bits. O Engenheiro FastTrack deve examinar esses resultados para identificar os processos críticos de negócios que podem ser afetados. Consulte um SME conforme necessário para garantir que a ferramenta ORT seja concluída ou para ajudar a identificar opções extras de remediação.

### 5. Criar Checklist de Remediação

Use o Questionário de Remediação e a Checklist para fornecer ao cliente um guia de implantação para qualquer/todos os serviços com suporte do FTC. A versão Government Community Cloud (GCC) High/Department of Defense (DOD) deve ser usada para clientes GCC High/DOD. Para garantir que você tenha o conteúdo mais recente, faça o download de uma nova cópia a cada vez. Para gerar uma checklist final, comece preenchendo a (guia) do questionário para o(s) serviço(s) apropriado(s). O guia de serviços que não estão no escopo será ocultada na checklist final. Para acompanhar o uso, envie uma cópia completa do XLS por e-mail para: [d4cf4a2d.microsoft.com@amer.teams.ms](mailto:d4cf4a2d.microsoft.com@amer.teams.ms)

### 6.  Confirmar as revisões dos clientes e resolver qualquer item na checklist de remediação

Para obter mais detalhes, consulte [Remediação](phase-remediate-pr.md)

### 7. Implantar o Office 365 ProPlus

Na fase de implantação, use os resultados da avaliação para orientar o cliente a criar os pacotes identificados e prepará-los para entrega.

Orientar o cliente para criar o arquivo de configuração do pacote usando a Ferramenta de Configuração do Office ([https://config.office.com](https://config.office.com/)) ou através da opção de cliente do Office 365, se o cliente estiver implantando o pacote com o Configuration Manager. As definições de configuração estarão disponíveis nas decisões tomadas nas atividades de avaliação, incluindo canal de atualização, idiomas etc.

Após a criação dos pacotes, o Microsoft FastTrack agora fornece um guia quando o cliente começa a implantar os pacotes nos grupos de usuários direcionados. O cliente é responsável por entregar os pacotes em suas ferramentas de implantação selecionadas. O Microsoft FastTrack pode fornecer um guia para ajudar nessa atividade.

O Microsoft FastTrack continuará acompanhando a implantação e usará o progresso junto com o cliente nas sessões subsequentes para ajudar a garantir que o cliente continue a distribuição.

Não é recomendável usar o assistente de implantação para facilitar essa atividade.

## Acelerar

Função Principal: **Engenheiro Microsoft FastTrack**  
Funções Secundárias: **Gerente FastTrack, SME, GM FTA, OPP Ranger**  
Aplica-se a: **Office 365 ProPlus (sem atualização do Windows 10)**
 
**Aceleração:** Clientes que estão implantando no momento ou que interromperam suas implantações, e a assistência do Microsoft FastTrack é necessária para que eles progridam novamente. Eles provavelmente tinham um plano de implantação, mas houve algum problema ou eles mudaram de prioridade.
 
O Microsoft FastTrack continuará acompanhando a implantação e usará o progresso junto com o cliente nas sessões subsequentes para ajudar a garantir que o cliente continue a distribuição. O cliente não é considerado "íntegro" ou totalmente implantado até atingir 70% de MAU.

\*Qualquer cliente que fique abaixo de 3% de crescimento em 3 meses (e abaixo de 70%) pode disparar o acompanhamento de SMEs de OPP para garantir que o crescimento seja acelerado. Nesse ponto, o FM, o FE e o SME devem discutir o status do cliente para entender como colocá-lo de volta no rumo certo.

1. Determinar o motivo de MAU interrompido e seguir o plano de ação correspondente

  - Impedimento técnico
    
    1.  Envolver um OPP SME para ajudar, se ainda não estiver envolvido
    
    2.  Fazer a triagem do impedimento dos clientes em relação a soluções conhecidas e da comunidade de SMEs de Get Modern
    
    3.  Fazer uma parceria com o cliente para resolver seus impedimentos
        
        -  Criar insights de FTC conforme necessário
        
        -  Envolver a Garantia de Aplicativo para problemas de suplementos ou performance
    
    4.  Se o impedimento não puder ser resolvido, documentá-lo nas observações de Gerenciamento de Envolvimento e atualizar L1 para Bloqueado

  - Impedimento de Adoção/Gerenciamento de Alterações
    
    1. Miniworkshop de ACM para ajudar a identificar impedimentos específicos e resolvê-los

  - Impedimento de recursos do cliente
    
    1. Se for necessário um ACM mais aprofundado, direcionar para os Quickleads de ACM (Ver um guia da tarefa relevante)

- Recuperar a prioridade reduzida do cliente
- 
    1. Envolver o GM FTA, se conectado

    2. Envolver ATS/ATU

2.  Atualizar a tarefa do Office 365 ProPlus - Acelerador de OPP se forem realizadas iniciativas de aceleração para fazer com que um cliente saia de um status anteriormente paralisado. Essa tarefa será usada para rastrear as iniciativas contínuas a fim de manter as implantações do Office 365 ProPlus com mais de 70% de MAU.

#### Tarefas do FTOP

| ID da Tarefa                                        | Descrição da Tarefa                                                                 | (b) Obrigatório (O) Opcional | Função do Microsoft FastTrack |
| ---------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------- | -------------- |
<<<<<<< HEAD
| 3080   | Workshop de Avaliação do Office 365 ProPlus  | M    | O FE             |
| 3738   | Office 365 ProPlus - Realizar Apresentação | M    | FM             |
| 3070   | Criar Checklist de Remediação            | M    | O FE             |
| 3190   | Confirmar as revisões dos clientes e resolver qualquer item na checklist de remediação    | M  | O FE  |
| 1247   | Implantar o Office 365 ProPlus               | M    | O FE             |
=======
| 3080   | Workshop de Avaliação do Office 365 ProPlus  | b    | O FE             |
| 3738   | Office 365 ProPlus - Realizar Apresentação | b    | FM             |
| 3070   | Criar Checklist de Remediação            | b    | O FE             |
| 3190   | Confirmar as revisões dos clientes e resolver qualquer item na checklist de remediação    | b  | O FE  |
| 1247   | Implantar o Office 365 ProPlus               | b    | O FE             |
>>>>>>> 4b48cb7652dd99a1f0993d371c26b81d0b745b41
| 3650   | Office ProPlus – Aceleração de OPP      | O    | FM             |

##  Principais Ações

  - O cliente tem a intenção de implantar o Office 365 ProPlus

##  Principais Resultados

  - Implantação do Office 365 ProPlus concluída

## Próximas etapas

  - Continue a dar suporte ao cliente até que a implantação seja totalmente concluída com AU \> 70%.

##  Dados Coletados

| Campo de Dados/Nome Comum           | Obrigatório para este Processo | Inserido pela Primeira Vez no FTOP |
| -------------------------------- | ------------------------- | ----------------------- |
| L1 – Status de Consumo          | Sim                       | Sim                     |
| L2 – Direitos                | Sim                       | Sim                     |
| Cenário de Envolvimento              | Sim                       | Sim                     |
| Observações de Gerenciamento de Envolvimento (FM) | Sim                       | Sim                     |
| Observações de Ativação Técnica (FE)  | Sim                       | Sim                     |
| Observações Corporativas (FTA)           | Não                        | Sim                     |

> [!Note]
> *Consulte a [Descrição do Serviço do Microsoft FastTrack](https://docs.microsoft.com/en-us/fasttrack/m365-eligible-services-and-plans) para obter detalhes específicos de elegibilidade de licença.

##  Resumo de Atualização

|Data|Quem Mudou|O Que Mudou|
|---------|---------------|----------------------------|
|05/04/2020| Celia Kennedy|  Manutenção Geral|
|03/25/2020| Celia Kennedy| Manutenção Geral|
|10/01/2019| Celia Kennedy| Manutenção Geral|

[Início](http://partner-docs.microsoft.com)
