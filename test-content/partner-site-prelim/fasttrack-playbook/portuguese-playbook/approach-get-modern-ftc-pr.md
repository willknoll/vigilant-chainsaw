---  
# required metadata  
title: FastTrack Partner Playbook - Get Modern FTC Engagement
description: FastTrack Partner Playbook - Get Modern FTC Engagement
author: Celia Kennedy
ms.author: v-cekenn 
manager: pagrim
ms.date: 9/06/2019  
ms.topic: partner-playbook  
ms.prod: non-product-specific  
ms.custom: partner-playbook  
ft.audience: partner
ft.owner: pagrim
---   
# Get Modern - Envolvimento do Microsoft FastTrack Center

## Abordagem

Função principal: **Engenheiro FastTrack, SME**  
Aplica-se a: **Windows 10, Office 365 ProPlus**

Se um EF envolvido estiver confiante em seu entendimento, os recursos para realizar a iniciativa Get Modern deverão ser capacitados para continuar com o envolvimento. No entanto, se o envolvimento for paralisado ou bloqueado ou se o EF precisar de qualquer suporte adicional para executar esse guia estratégico, o FE solicitará um SME de Get Modern (SME de OPP e/ou Windows) usando a [Ferramenta de Solicitação de Recursos do Microsoft FastTrack](https://aka.ms/FRPHubSMERequestProcess).

A equipe de SME de Get Modern é uma equipe dedicada de SMEs do Windows e OPP e está disponível para ajudar quando necessário. Os SMEs são recursos auxiliares, mas não substituem as funções de Gerente, Engenheiro ou Arquiteto FastTrack.

### 1. Realizar Reunião de Início/Abertura 

Para clientes novos/envolvidos novamente que ainda não tiveram uma reunião de abertura, use a apresentação para definir as expectativas corretas em torno do Benefício do Microsoft FastTrack, Local de Trabalho Moderno com segurança como uma linha de base para o sucesso e determinar quais serviços o cliente deseja implantar.

- Os clientes de nível corporativo já podem ter um plano detalhado de várias divisões coletado do FA/FTA.

- Verifique as Observações de status geral para ver se os detalhes são coletados no repositório de Documentos do FTOP. 

- Esse detalhe extra complementará os detalhes gerais da tarefa 4021 

Para clientes existentes que se qualificaram para a assistência de implantação do Windows 10, use a apresentação (em capacidade reduzida) para definir as expectativas certas em relação ao Benefício do Microsoft FastTrack, Local de Trabalho Moderno, com segurança como uma linha de base para o sucesso e determinar quais serviços o cliente deseja implantar. 

- Siga o processo de solicitação de recursos para adicionar um SME de implantação do Windows 10 ao seu envolvimento. 

- A implantação do Windows 10 pelo Microsoft FastTrack requer o SCCM no branch atual, mas essa atualização do SCCM está fora do escopo em nosso benefício. Use o processo de indicação de parceiros para dar suporte à atualização do SCCM.

- A apresentação de abertura tem slides de suporte para o escopo do Windows 10 e serviços liderados pelo parceiro do Windows 10 disponíveis.

### 2.  [Avaliação Técnica e Planejamento de Get Modern](https://aka.ms/GetModernEnglishDeployandMaintainGuidance)

Realize o workshop de Avaliação Técnica de Get Modern para iniciar o projeto de implantação da área de trabalho dos clientes com um inventário de seus dispositivos e aplicativos, ajudando-os a priorizar o que desejam para seguir em frente, testar aplicativos e dispositivos priorizados e remediar o que é necessário para se preparar para a implantação. Eles podem realizar a avaliação de aplicativos utilizando seus processos/ferramentas atuais do System Center, incluindo inventário de software (descoberta), medição de software (uso) etc. Identificar quem é responsável pelo suporte a aplicativos e fornecedores é igualmente crucial. Lembre-se de que, ao atribuir proprietários e testar aplicativos, isso NÃO é um trabalho descartável. Isso deve estabelecer a base operacional para gerenciar futuras atualizações do Windows 10 e do Office 365 ProPlus, reduzindo os riscos e aumentando a eficiência dos testes.

Ative o painel de aprendizado para atualização do Office 365 ProPlus no Configuration Manager para permitir que os clientes obtenham uma avaliação do Office.

Aprendizado de suplementos, instruções de suporte de suplementos, inventário de suplementos, inventário de dispositivos que têm macros e aprendizado para atualização de macros.

### 3. Ativar a Análise de Área de Trabalho

A seguir, são apresentadas as ações esperadas a serem realizadas como parte da tarefa de FTOP Get Modern - Ativar a Análise da Área de Trabalho. 

- A. Apresentar ao cliente a Análise de Área de Trabalho. 

    - i. Nessa atividade, você apresentará a Análise de Área de Trabalho ao cliente, compartilhando os benefícios e o caso de uso de DA a fim de fornecer inteligência para planejar a implantação do Windows 10. Aproveite a apresentação em [https://aka.ms/FTDesktopAnalytics](https://aka.ms/FTDesktopAnalytics) para facilitar essa ação. Sempre que possível, é preferível incluir uma demonstração ao vivo ou usar o vídeo de demonstração disponível em [https://aka.ms/FTDADemo](https://aka.ms/FTDADemo) (vídeo de demonstração de treinamento) para mostrar os recursos do produto. Se o cliente já estiver usando o Windows Analytics, isso poderá ser acelerado, posicionando DA como a evolução do Windows Analytics. 

    - ii. Resultado: Garantir a concordância para prosseguir com a ativação da Análise de Área de Trabalho. 

- B. Guiar o cliente para se inscrever e configurar a Análise de Área de Trabalho

    - i. Seguir o Guia Passo a Passo da instalação de DA do Microsoft FastTrack em [https://aka.ms/sbsDASetup](https://aka.ms/sbsDASetup) para guiar o administrador do cliente durante as etapas para ativar a Análise de Área de Trabalho para uso da iniciativa Get Modern (fornecer a URL da documentação voltada ao público [https://docs.microsoft.com/sccm/desktop-analytics/set-up](https://docs.microsoft.com/sccm/desktop-analytics/set-up). Consultar o guia passo a passo para obter os pré-requisitos de entrega e assistência esperada. Observação: se necessário, você também pode fornecer o Guia Interativo, explicando como configurar a Análise de Área de Trabalho (consulte: [https://content.cloudguides.com/guides/Setting%20up%20Desktop%20Analytics](https://content.cloudguides.com/guides/Setting%20up%20Desktop%20Analytics)). 

    - ii. **Resultado**: O resultado dessa atividade será o registro bem-sucedido da versão prévia e o início da coleta de dados na DA.

- C. Guiar o cliente para criar um plano de implantação inicial da Análise de Área de Trabalho

    - i. Após a ativação e a coleta de dados, ajudar o cliente a iniciar seu primeiro [Plano de implantação da Análise de Área de Trabalho](https://docs.microsoft.com/en-us/sccm/desktop-analytics/about-deployment-plans). Aproveitar as etapas no [Guia do Plano de Implantação da documentação da DA](https://docs.microsoft.com/sccm/desktop-analytics/create-deployment-plans) para definir o escopo das atividades esperadas. O cliente será responsável por determinar e aplicar a importância dos aplicativos detectados. 

    - ii. **Resultado**: Os clientes têm um plano de implantação da Análise de Área de Trabalho e um conjunto de dispositivos piloto identificados para o Windows 10. 

### 4.  Criar Checklist de Remediação

Use o Questionário de Remediação e a Checklist para fornecer ao cliente um guia de implantação para qualquer/todos os serviços com suporte do FTC. A versão de GCC High/DOD deve ser usada para clientes GCC High/DOD. Para garantir que você tenha o conteúdo mais recente, faça o download de uma nova cópia a cada vez. Para gerar uma checklist final, comece preenchendo o [questionário](https://ftdocs-bcm.azureedge.net/public/playbook-remediation-checklist-v1) para o(s) serviço(s) apropriado(s). O guia dos serviços que não estão no escopo será ocultado na checklist final. Para acompanhar o uso, envie uma cópia completa do XLS por e-mail para a [Microsoft](d4cf4a2d.microsoft.com@amer.teams.ms).

### 5. Examinar a Checklist de Remediação com o cliente para obter itens de ação

Seguir o procedimento padrão.

### 6. Confirmar as revisões dos clientes e resolver qualquer item na checklist de remediação

Seguir o procedimento padrão.

### 7. Reunir-se com o PM do Cliente e os Líderes Técnicos do Cliente para ativar os Itens Principais e os Serviços 

Seguir o procedimento padrão.

### 8.  Atualizar do Windows 7/8.1 para o Windows 10 Enterprise

Para atualizar seus dispositivos Windows 7/8.1 para o Windows 10, recomendamos que os clientes utilizem seus processos existentes para manter a consistência e a previsibilidade. Se eles não tiverem um processo existente, o caminho recomendado para a implantação do Windows 10 aproveita o programa de instalação do Windows (Setup.exe) para executar uma atualização in-loco, que preserva automaticamente todos os dados, configurações, aplicativos e drivers da versão existente do sistema operacional. Isso requer o mínimo de esforço de TI, pois não há necessidade de nenhuma infraestrutura de implantação complexa.

**Processo para entrega:**

Usando o guia da etapa 1c no [Guia de Implementação para Manter e Implantar Get Modern](https://aka.ms/GetModernEnglishDeployandMaintainGuidance), orientar o cliente na implantação do Windows 10.

Para atualizar seus dispositivos Windows 7/8.1 para o Windows 10, recomendamos que os clientes utilizem seus processos existentes para manter a consistência e a previsibilidade. Se eles não tiverem um processo existente, o caminho recomendado para a implantação do Windows 10 aproveita o programa de instalação do Windows (Setup.exe) para executar uma atualização in-loco, que preserva automaticamente todos os dados, configurações, aplicativos e drivers da versão existente do sistema operacional. Isso requer o mínimo de esforço de TI, pois não há necessidade de nenhuma infraestrutura de implantação complexa. O uso da [Documentação Passo a Passo de Atualizações In-loco](https://aka.ms/GetModernStepbyStepIn-PlaceUpgrades) orienta o cliente durante as seguintes etapas:

1. Planejar a sequência de tarefas
2. Configurar condições de atualização
3. Opções de implantação
4. Monitorar a implantação

### 10. Implantar o Office 365 ProPlus com o System Center

O Configuration Manager é dimensionado para ambientes grandes e fornece amplo controle sobre a instalação, as atualizações e as configurações. Ele também tem recursos internos que tornam mais fácil e eficiente implantar e gerenciar o Office 365 ProPlus Recomendamos a implantação do Office 365 ProPlus para garantir que você tenha sempre as ferramentas de produtividade modernas mais atualizadas da Microsoft. Ao implantar com o painel de Gerenciamento de Cliente do Office e o Instalador do Office 365, você pode gerenciar atualizações com o Configuration Manager

**Processo para entrega:**

Usar os dados necessários coletados na fase de avaliação para ajudar o cliente a criar seu pacote de implantação. *O método preferencial de implantação é o SCCM, mas a instalação/atualização do SCCM está fora do escopo.

1. Atribuir licenças de usuário final usando o portal de administração de usuário do O365 ou o PowerShell. [Guia do PowerShell](https://docs.microsoft.com/en-us/office365/enterprise/powershell/assign-licenses-to-user-accounts-with-office-365-powershell)
2. Ajudar o cliente a criar o pacote de Implantação do OPP localmente ou por distribuição na nuvem.
    
    a. Pacote do SCCM [guia do SCCM](https://docs.microsoft.com/en-us/DeployOffice/deploy-office-365-proplus-with-system-center-configuration-manager#step-3---create-and-deploy-the-office-application-to-the-pilot-group)
    
    b. Implantação de origem local com a ferramenta de Implantação do Office 365 [Guia do ODT de origem local](https://docs.microsoft.com/en-us/deployoffice/deploy-office-365-proplus-from-a-local-source)
    
    c. Implantar da nuvem com a ferramenta de Implantação do Office [Guia do ODT na nuvem](https://docs.microsoft.com/en-us/DeployOffice/deploy-office-365-proplus-from-the-cloud)
    
    d. Autoinstalação da nuvem ‒ Auto-instalação [Office da nuvem](https://support.office.com/en-us/article/download-and-install-or-reinstall-office-365-or-office-2019-on-a-pc-or-mac-4414eaaf-0478-48be-9c42-23adc4716658?ui=en-US&rs=en-US&ad=US)3. Testar a implantação do pacote com **dispositivos piloto.**
3. Depois que a implantação é aplicada ao **dispositivos de uso geral** ou **dispositivos essenciais de negócios**- isso significa que a implantação ampla foi iniciada- **a ativação está concluída**, e a tarefa deve ser marcada como concluída.

### 11.  Gerenciamento de Nuvem

Para clientes de Get Modern que indicam intenção ou interesse na "Conexão de Nuvem" do Gerenciamento de Nuvem ou Cogerenciamento do Intune para gerenciar seus dispositivos Windows, se tiver sido confirmado pelo FE/FTA que o ambiente do Configuration Manager do cliente já está no branch atual ou estiver em processo de atualização, o FM/FE deverá solicitar assistência de SME EMS usando a [Ferramenta de Solicitação de Recursos do Microsoft FastTrack](https://aka.ms/FRPHubSMERequestProcess).

### 12. Otimizar a Entrega de Atualizações do Windows 10 e do Office com o System Center

Um caminho de sucesso para se manter atualizado com o Windows 10 e o Office 365 ProPlus começa com uma boa estratégia de distribuição de conteúdo. A Microsoft investiu significativamente para resolver preocupações quanto ao tamanho das atualizações. Existem várias tecnologias disponíveis para reduzir a largura de banda e a carga de rede a fim de otimizar a entrega de atualizações. Nesta etapa, explique essas tecnologias, compare-as e forneça recomendações para ajudar seu cliente a decidir qual delas usar. 

### 13. Implantação em Fases do Windows 10 com o System Center

Em vez de uma mudança disruptiva na tecnologia a cada poucos anos, você disponibilizará continuamente **novos recursos, experiências e proteções** para seus usuários. As atualizações semestrais de recursos oferecem novos recursos no outono e na primavera de cada ano, enquanto as Atualizações de Qualidade mensais cumulativas contêm correções de segurança, de confiabilidade e de erros. **Para clientes que não podem receber atualizações semestrais, nossa recomendação é consumir anualmente a atualização de Outono**. 

### 14. Implantações em Fases do Office 365 ProPlus com o System Center

Como o Windows, os aplicativos cliente incluídos no Office 365 são lançados regularmente com atualizações que fornecem novos recursos e funcionalidades, além de segurança e outras atualizações. Você pode usar o Configuration Manager para atualizar o Office 365 ProPlus. O System Center Configuration Manager pode gerenciar atualizações de clientes do Office 365 usando o fluxo de trabalho de gerenciamento de Atualização de Software. 

A equipe de SME de Get Modern é uma equipe dedicada de Windows e PMEs de OPP que está disponível para oferecer suporte em uma iniciativa em escala. Os SMEs são recursos auxiliares dos recursos da entrega do Microsoft FastTrack, mas em nenhum momento substituem as funções de Gerente, Engenheiro ou Arquiteto FastTrack.

### Resumo de Atualização

|Data|Quem Mudou|O Que Mudou|Notas|
|---------|---------------|----------------------------|-------------|
|01/10/2019| Celia Kennedy| Guia Estratégico do Parceiro atualizado| |

[Início](http://partner-docs.microsoft.com)
