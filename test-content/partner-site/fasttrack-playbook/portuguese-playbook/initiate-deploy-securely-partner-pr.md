---  
# required metadata  
title: FastTrack Partner Playbook - Deploy Securely  
description: FastTrack Partner Playbook - Deploy Securely  
author: Celia Kennedy
ms.author: v-cekenn
manager: pagrim
ms.date: 09/27/2019
ms.topic: partner-playbook
ms.prod: non-product-specific  
ms.custom: partner-playbook  
ft.audience: partner  
ft.owner: pagrim
--- 

# Implantar com segurança

Fase: **Iniciar**  
Iniciativas: **Integridade do Cliente/RFA/Segmentação**  

## Visão geral

O processo Implantar com Segurança inicia o relacionamento de trabalho entre o FastTrack Center (FTC) e o cliente. É aqui que o FTC começa a saber mais os negócios do cliente, serviços próprios e onde o cliente começa a saber mais sobre o escopo de suporte que o FTC pode fornecer em relação aos recursos de segurança disponíveis.  

##  Objetivos

Entender os requisitos de implantação do cliente e como as soluções de segurança do M365 podem resolvê-los.  

Avaliar o conhecimento atual do cliente sobre segurança de Identidades, Dispositivos e Informações.  

Explicar ao cliente:

  - A importância da segurança
  - Por que uma linha de base de segurança deve ser estabelecida
  - Por que os workloads de produtividade e colaboração devem ser implantados com segurança  

## Abordagem

###  Preparar-se para a Conversa sobre Segurança do M365

Função Principal: **Gerente FastTrack (FM)**  
Iniciativas: **Integridade do Cliente/RFA/Segmentação**  
Aplica-se a: **Integração principal**

Examinar o licenciamento do cliente para determinar que tipo de licenciamento o cliente tem e se possui algum recurso adicional de segurança. Saber quais licenças um cliente tem ajudará a preparar um argumento que o convença a aproveitar mais o pacote de produtos do Microsoft 365 para implantar seus workloads da forma mais segura possível desde o início.​  

###  Agendar e Realizar a Conversa sobre Segurança do M365

Função Principal: **Gerente FastTrack (FM)**  
Iniciativas: **Integridade do Cliente/RFA/Segmentação**  
Aplica-se a: **Integração principal**

Realizar uma reunião que inclua todos os stakeholders relevantes (BDM, Analista de Segurança, Arquiteto de Segurança, Diretor de Segurança, TI etc.) na organização do cliente para discutir a importância de criar uma linha de base de segurança para sua implantação vai ajudar a garantir que o cliente aproveite a segurança integrada à malha de nossos produtos e soluções. A [Apresentação da Conversa sobre Segurança do M365](https://aka.ms/frp-sandcconversation) define a conversa sobre a implantação segura de seus serviços.​  

####  Tarefas do FTOP

| ID da Tarefa | Nome da tarefa                  | (b) Obrigatório / (O) Opcional |  Função do Microsoft FastTrack   | Serviços        |
| ------- | -------------------------- | :----------------------: | :---------------: | --------------- |
| 4017    | Conversa sobre Segurança do M365 |            b             | Gerente Microsoft FastTrack | Integração principal |

###  Preparar a Identidade

Função Principal: **Engenheiro Microsoft FastTrack**  
Iniciativas: **Integridade do Cliente/RFA/Segmentação**  
Aplica-se a: **Integração principal**

**Identificar Florestas Existentes e Corrigir UPNs Malformados**

Essa será a primeira discussão para conduzir o cliente no rumo para estabelecer uma base segura para sua transição para a nuvem. O FE deve concluir essa tarefa tendo uma boa compreensão do ambiente e infraestrutura atuais e ajudará a desenvolver o rumo a ser seguido. Reunir-se com o cliente para realizar uma conversa a fim de entender seu ambiente/estrutura atual. Utilizar o conjunto de ferramentas para corrigir o ambiente do cliente a fim de se preparar para a sincronização de identidade.

  - [Conjunto de Ferramentas](https://docs.microsoft.com/en-us/office365/enterprise/install-and-run-idfix)

**Finalizar Método de Autenticação**

Realizar uma conversa com o cliente para discutir e escolher o método de autenticação. Isso só pode acontecer depois de identificar as florestas existentes e depois que o cliente corrigir seu ambiente para se preparar para a sincronização de identidade. 

  - [Escolher a Autenticação do Azure AD](https://go.microsoft.com/fwlink/?linkid=873173)

**Configurar AAD Connect**

Utilize as [Tarefas Prescritas do AAD Connect](https://docs.microsoft.com/en-us/office365/enterprise/set-up-directory-synchronization) para configurar o AAD Connect. Não sincronize identidades nesse momento.

Antes de sincronizar identidades, configure duas contas de emergência somente na nuvem para mitigar cenários em que você talvez não consiga entrar em uma conta de administrador regular. Em seguida, configure uma política de Acesso Condicional que bloqueia todo o acesso por padrão. Exclua suas contas de emergência para evitar que os administradores sejam bloqueados do portal.

Por fim, ative a Política de Linha de Base: MFA para Administradores para garantir que os usuários privilegiados sejam registrados para MFA e protegidos por padrão. 

  - [Contas de emergência](https://docs.microsoft.com/en-us/azure/active-directory/users-groups-roles/directory-emergency-access)
  - [Política de Linha de Base: MFA para administradores](https://docs.microsoft.com/en-us/azure/active-directory/conditional-access/baseline-protection)
  - [O que são políticas de linha de base?](https://docs.microsoft.com/en-us/azure/active-directory/conditional-access/baseline-protection)
  
**Sincronização de Identidades**

O cliente não deve sincronizar identidades até que:  

  - Contas de emergência sejam criadas
  - Uma política de Acesso Condicional para Bloquear Tudo seja configurada
  - Política de linha de base: MFA para administradores está ativado

Na conclusão dessa etapa, a estrutura de segurança de linha de base em torno da identidade estará em vigor. Sincronização de identidades usando o AAD Connect configurada anteriormente ocorrerá na Tarefa 1141: Configurar Sincronização de Diretório (Azure AD Connect) na fase de ativação.  

####  Tarefas do FTOP

| ID da Tarefa | Nome da tarefa                                      | (b) Obrigatório / (O) Opcional |   Função do Microsoft FastTrack   | Serviços        |
| ------- | ---------------------------------------------- | :----------------------: | :----------------: | --------------- |
| 3736    | Guia para Escolher um Método de Autenticação |            b             | Engenheiro Microsoft FastTrack | Integração principal |

###  Segurança de Identidade e Dispositivo

Função Principal: **Engenheiro Microsoft FastTrack**  
Iniciativas: **Integridade do Cliente/RFA/Segmentação**  
Aplica-se a: **Integração principal**

A apresentação/discussão sobre Segurança de Identidade e Dispositivo é obrigatória para todos os clientes. Incentive os clientes a planejar uma base de segurança sólida em torno de gerenciamento de identidades, dispositivos e aplicativos móveis.

Como resultado do workshop, você ajudará os clientes a escolher e ativar os recursos de segurança apropriados para sua organização no que se refere a proteger identidades e dispositivos.  

  - Os FEs realizam o Workshop de Práticas Recomendadas de Segurança de Identidade e Dispositivo e preenchem o formulário de entrega
  - Para reenvolvimentos no EMS, os FMs devem considerar a [Apresentação de](https://aka.ms/AA54548) para uma discussão de alto nível.
  - Use o [Guia de Segurança de Identidade e Dispositivo](https://aka.ms/FRPDeploySecurelyGuidance) para obter detalhes sobre como executar esta etapa.

#### Tarefas do FTOP

| ID da Tarefa | Nome da tarefa     | (b) Obrigatório / (O) Opcional |   Função do Microsoft FastTrack   | Serviços        |
| ------- | --------------------------------------------------------- | :----------------------: | :----------------: | --------------- |
| 3720    | [Workshop sobre Práticas Recomendadas de Segurança de Dispositivos e Identidade](https://aka.ms/FRPDeploySecurelyGuidance)      |            b             | Engenheiro Microsoft FastTrack | Integração principal |
| 3721    | Trabalho no formulário de transferência de Segurança de Identidade e Dispositivo concluído |            O             |        SME         | Integração principal |

##  Principais Ações

  - Chamada de abertura concluída  

##  Principais Resultados

  - O cliente tem uma forte compreensão dos recursos de segurança disponíveis para implantar workloads com a maior segurança possível.  
  - documenta as áreas que o cliente não planeja ativar, juntamente com os motivos.
  - O cliente escolheu seu método de autenticação e ativou os recursos de segurança apropriados para sua organização, no que se refere a identidade e dispositivos.​  

## Próximas etapas

  - O FM agenda reunião(ões) adicional(is) de acompanhamento com a equipe do projeto e stakeholders relevantes para discussões sobre serviços e cenários específicos a fim de preencher lacunas de conhecimento conforme necessário (por exemplo, BVD, workshops de serviços, reunião(ões) com SMEs técnicos/de adoção etc.)  
  - Quando os resultados listados acima estiverem concluídos, ir para [Realizar Avaliação Técnica](assess-conduct-technical-assessment-partner-pr.md),
    [Realizar Workshop de Serviços](assess-conduct-security-workshops-partner-pr.md) e [Realizar Workshop de Serviços](assess-conduct-services-workshops-partner-pr.md)

###  Resumo de Atualização

|Data|Quem Mudou|O Que Mudou|
|---------|---------------|----------------------------|
|05/04/2020| Celia Kennedy|  Manutenção Geral|
|03/25/2020| Celia Kennedy| Manutenção Geral|
|10/018/2019| Celia Kennedy| Guia Estratégico do Parceiro Atualizado|

[Início](http://partner-docs.microsoft.com)
