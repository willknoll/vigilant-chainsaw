---  
# required metadata  
title: FastTrack Partner Playbook - Conduct Technical Assessment  
description: FastTrack Partner Playbook - Conduct Technical Assessment  
author: Ryan Meehan
ms.author: v-cekenn
manager: pagrim
ms.date: 10/03/2019  
ms.topic: partner-playbook  
ms.prod: non-product-specific  
ms.custom: partner-playbook  
ft.audience: partner  
ft.owner: pagrim
---  

# Realizar Avaliação Técnica

Fase: **Avaliar**  
Propostas: **Integridade do Cliente/RFA/Segmentação**  

## Visão geral

O processo Realizar Avaliação Técnica permite que a equipe do Microsoft FastTrack desenvolva um entendimento da infraestrutura e das necessidades de negócios do cliente e determine o que é necessário para uma transição para a nuvem sem problemas.
Essa avaliação inclui o ambiente local do cliente, o modelo de segurança do usuário, restrições de acesso remoto e quaisquer restrições de infraestrutura que possam potencialmente atrasar o processo de implantação.

Observação: O Benefício de Migração é apenas para clientes com mais de 500 direitos para serviços especificados (Exchange, SharePoint, OneDrive como *destino*).  

## Objetivos

  - Identificar a capacidade e o design de infraestrutura: 
      - Layout e capacidade de firewall
      - Conexão com a Internet para www ou como outros sites são conectados
      - Métodos de implantação de software e versões atuais 
      - Processo de criação de conta do usuário
  - Necessidades de negócios:
      - Produtos que o cliente quer usar
      - Licenças de software que vão expirar
      - Infraestrutura a ser comprada
      - Fusões ou alienações  
      - Agenda de implementação
  - Restrições de segurança: 
      - Políticas de RAS
      - Políticas de usuários (relacionadas às necessidades de acesso da equipe de migração)
      - Restrições da política de firewall
  - Proprietários da implementação: 
      - Identificar contatos para um serviço on-premises
      - Contatos responsáveis por promover a implementação  

## Abordagem

### Fornecer princípios de um guia de conectividade de rede

Função principal: **Engenheiro Microsoft FastTrack**  
Propostas: **Integridade do Cliente/RFA/Segmentação**  
Aplica-se a: **Integração principal**

O processo Realizar Avaliação de Rede permite à equipe do Microsoft FastTrack fornecer um guia aos clientes para ajudá-los a entender as recomendações da Microsoft sobre práticas recomendadas de conectividade e, além disso, entender como a infraestrutura existente do cliente se alinha com esse guia.

Fornecer um guia sobre Princípios de Conectividade de Rede do Office 365/Microsoft 365.

  - Diferenciar o tráfego crítico de SaaS, tratar e confiar em várias categorias de tráfego de rede de forma diferente  
  - Saída de conexões localmente, garantindo latência mínima para a infraestrutura da Microsoft
  - Otimizar o comprimento de rota para a borda da rede da Microsoft  
  - Avaliar o desvio de dispositivos/processos de segurança de rede incorretos

Garantir que o cliente entenda a direção da Microsoft de longo prazo para permitir o alinhamento da estratégia de conectividade entre o cliente e a Microsoft*

Identificar caminhos de saída de sites de clientes para a rede global da Microsoft

Identificar possíveis configurações incorretas de infraestrutura de rede que podem causar problemas na experiência do usuário final

Determinar se proxies (particularmente SSL break & inspect) estão em uso com tráfego de workload crítico

É necessário um guia de conectividade de rede para todos os novos clientes (antecipadamente no envolvimento) e para clientes que se envolvem novamente em workloads adicionais.  

O objetivo de fornecer um guia de conectividade de rede antecipadamente no envolvimento é garantir que os clientes estejam devidamente configurados para serem capazes de consumir qualquer serviço do Office 365/Microsoft 365 com performance e disponibilidade aceitáveis.  

Um Engenheiro FastTrack (FE) realizará a conversa sobre princípios de conectividade de rede, utilizando a apresentação disponível aqui:  

[Guia de Rede do Office 365](https://aka.ms/O365NetworkGuidanceLocalized)  

Se for necessária assistência especializada para fornecer um guia a um cliente devido a infraestrutura complexa ou requisitos exclusivos, um SME de rede poderá ser solicitado por meio do processo normal de solicitação de recursos do Microsof FastTrack.  

#### Tarefas do FTOP

| ID da Tarefa | Nome da Tarefa                                           | O(b)rigatório / (O)pcional |   Função do Microsoft FastTrack   | Serviços        |
| ------- | --------------------------------------------------- | :----------------------: | :----------------: | --------------- |
| 4071    | Fornecer um Guia de Princípios de Conectividade de Rede |            M             | Engenheiro FastTrack (FE) | Integração Principal |

### Executar a ferramenta de Integração de Rede

Função principal: **Engenheiro Microsoft FastTrack**  
Propostas: **Integridade do Cliente/RFA/Segmentação**  
Aplica-se a: **Integração principal**

É necessário um guia de conectividade de rede para todos os novos clientes (antecipadamente no envolvimento) e para clientes que se envolvem novamente em workloads adicionais.  

O objetivo de fornecer um guia de conectividade de rede antecipadamente no envolvimento é garantir que os clientes estejam devidamente configurados para serem capazes de consumir qualquer serviço do Office 365/Microsoft 365 com performance e disponibilidade aceitáveis.  

Um FE deve realizar a conversa sobre Princípios de Conectividade de rede, utilizando a apresentação disponível aqui: [Guia de Rede do Office 365](https://aka.ms/O365NetworkGuidanceLocalized)

Se for necessária assistência especializada para fornecer um guia a um cliente devido a infraestrutura complexa ou requisitos exclusivos, um SME de rede poderá ser solicitado por meio do processo normal de solicitação de recursos do Microsof FastTrack.  

O uso da Ferramenta de Integração de Rede deve ocorrer após o fornecimento do Guia de Princípios de Conectividade de Rede. A ferramenta ajudará a avaliar se a rede do cliente está bem alinhada com nosso guia e fornecerá sugestões específicas de remediação ao cliente.  

A ferramenta deve ser executada de cada site do cliente (ou pelo menos de um conjunto representativo, dado o entendimento da arquitetura de rede). Os clientes podem acessar a ferramenta em [http://aka.ms/netonboard](http://aka.ms/netonboard).  

Como parte da ajuda para que os clientes realizem o processo de execução da ferramenta, os Engenheiros FastTrack (FE) devem evitar armazenar a saída da ferramenta, pois ela contém detalhes da configuração de rede interna do cliente. Para ajudar o cliente a utilizar as recomendações produzidas pela ferramenta, a saída pode ser salva em um PDF no navegador pelo cliente e compartilhada usando um método seguro ou, como alternativa, o cliente pode compartilhar a saída em uma sessão de compartilhamento de tela para discussão com um Engenheiro FastTrack (FE).  

Se for necessária assistência especializada para ajudar o cliente a executar a ferramenta de Integração de Rede devido a infraestrutura complexa ou requisitos exclusivos, um SME de Rede poderá ser solicitado por meio do processo de solicitação de recursos normal do Microsoft FastTrack.  
  
#### Tarefas do FTOP

| ID da Tarefa | Nome da Tarefa                   | O(b)rigatório / (O)pcional |   Função do Microsoft FastTrack   | Serviços        |
| ------- | --------------------------- | :----------------------: | :----------------: | --------------- |
| 4072    | Executar Ferramenta de Integração de Rede |            M             | Engenheiro FastTrack (FE) | Integração Principal |

### Criar Checklist de Remediação

Função principal: **Engenheiro Microsoft FastTrack**  
Propostas: **Integridade do Cliente/RFA/Segmentação**  
Aplica-se a: **Todos os Serviços**

Criar Checklist de remediação: 

  - Fazer download [da checklist de remediação](https://aka.ms/PartnerRemediationChecklist) e remover todos os serviços que o cliente não implantará

Na fase de avaliação, caso você veja riscos do projeto, como bloqueadores, itens fora de escopo, restrições de tarefas do cliente etc., esse é um bom momento para discutir a possibilidade de um Parceiro Pronto para o Microsoft FastTrack para complementar o
benefício do Microsoft FastTrack. Se o cliente desejar usar parceiros, execute a tarefa Quickleads 983 para enviar uma indicação a um parceiro. Você pode encontrar conteúdo sobre Quickleads [aqui](https://ftdocs-bcm.azureedge.net/public/referrals-training-v1.pptx). Para ativar a solicitação, entre em contato com seu Gerente de Parceiro FastTrack (FPM).
  
Exemplos:

- Identidade - Limpeza ou dependências
- Rede
- Fora do escopo do benefício do Microsoft FastTrack
- Necessidades práticas do teclado/configuração complexa  

#### Tarefas do FTOP

| ID da Tarefa | Nome da Tarefa                                                   | O(b)rigatório / (O)pcional |   Função do Microsoft FastTrack   | Serviços     |
| ------- | ----------------------------------------------------------- | :----------------------: | :----------------: | ------------ |
| 3070    | Criar Checklist de Remediação                               |            M             | Engenheiro FastTrack (FE) | Todos os Serviços |
| 1049    | Examinar Checklist de Remediação com o cliente para itens de ação |            M             | Engenheiro FastTrack (FE) | Todos os Serviços |

### Criar Checklist de Remediação do EMS com o cliente para itens de ação

Função principal: **SME**  
Propostas: **Integridade do Cliente/RFA/Segmentação**  
Aplica-se a: **AADP/Intune**

Criar Checklist de Remediação do EMS:

  - Fazer download [da checklist de remediação do EMS](https://aka.ms/frp-EMS-Remediation-Checklist) e remover as tarefas que o cliente não utilizará

Na fase de avaliação, caso você veja riscos do projeto, como bloqueadores, itens fora de escopo, restrições de tarefas do cliente etc., esse é um bom momento para discutir a possibilidade de um Parceiro Pronto para o Microsoft FastTrack para complementar o benefício do Microsoft FastTrack. Se o cliente desejar usar parceiros, execute a tarefa Quickleads 983 para enviar uma indicação a um parceiro. Você pode encontrar conteúdo sobre Quickleads [aqui](https://aka.ms/AA5ctuy). Para ativar a solicitação, você pode enviar um email a seu FPM.

Exemplos:  

  - Identidade - Limpeza ou dependências
  - Rede
  - Fora do escopo do benefício do Microsoft FastTrack
  - Necessidades práticas do teclado/configuração complexa  

#### Tarefas do FTOP

| ID da Tarefa | Nome da Tarefa                                                       | O(b)rigatório / (O)pcional | Função do Microsoft FastTrack | Serviços      |
| ------- | --------------------------------------------------------------- | :----------------------: | :------------: | ------------- |
| 4075    | Criar Checklist de Remediação do EMS com o cliente para itens de ação |            M             |      SME       | AADP/Intune |

### Avaliação da Migração

Função principal: **Gerente Microsoft FastTrack**  
Propostas: **Integridade do Cliente/RFA/Segmentação**  
Aplica-se a: **Exchange/OneDrive for Business/SharePoint**

Se o cliente pretende utilizar o benefício de Migração, atividades adicionais são necessárias. O Questionário de Migração (Tarefa 2050: Fornecer questionário de migração ao cliente) deve ser fornecido ao cliente e uma solicitação do Gerente de Migração (MVM) (Tarefa 2278: Solicitação de atribuição do MVM) deve ser enviada.

#### Tarefas do FTOP

| ID da Tarefa | Nome da Tarefa                                                                                                               | O(b)rigatório / (O)pcional |       Função do Microsoft FastTrack       | Serviços                                      |
| ------- | ----------------------------------------------------------------------------------------------------------------------- | :----------------------: | :------------------------: | --------------------------------------------- |
| 2050    | Fornecer questionário de migração ao cliente                                                                             |            O             |     Gerente FastTrack (FM)      | Exchange/OneDrive for Business/SharePoint |
| 2278    | Solicitar atribuição de MVM                                                                                                  |            O             |     Gerente FastTrack (FM)      | Exchange/OneDrive for Business/SharePoint |
| 3217    | Solicitar Licenças Corporativas Temporárias necessárias para executar migrações                                                      |            O             | Gerente de Migração | Exchange/OneDrive for Business/SharePoint |
| 3312    | Compartilhar e discutir a conectividade remota da migração do FT                                                                      |            O             | Gerente de Migração | Exchange/OneDrive for Business/SharePoint |
| 3308    | Migração do Exchange - Notes: Solicitar recursos de BT para Coexistência Avançada e compartilhar checklist de implantação (opcional) |            O             | Gerente de Migração | Exchange                                      |
| 1034    | Exchange - Atualizar e carregar questionário de migração do sistema de origem                                                      |            M             |     Engenheiro FastTrack (FE)     | Exchange                                      |

### Realizar Avaliações

Função principal: **Engenheiro Microsoft FastTrack**  
Propostas: **Integridade do Cliente/RFA/Segmentação**  
Aplica-se a: **Todos os Serviços**

  - Avaliar as tarefas de um serviço conforme necessário.
  - Algumas tarefas de serviço podem:
      - Link para assistente público.
      - Link para documentos de guia adicionais.
      - Ser necessárias quando o benefício de migração é usado.
      - Ser designadas apenas para clientes corporativos; verificar com colegas do Engenheiro FastTrack (FE) ou Especialista no Assunto (SME) se houver dúvidas sobre tarefas de serviço relevantes.

#### Tarefas do FTOP

| ID da Tarefa | Nome da Tarefa                                                                           | O(b)rigatório / (O)pcional |   Função do Microsoft FastTrack   | Serviços           |
| ------- | ----------------------------------------------------------------------------------- | :----------------------: | :----------------: | ------------------ |
| [3268](https://aka.ms/FRPTeamsDiscoveryDiscussion)    | Teams - Avaliar Microsoft Teams                                                      |            M             | Engenheiro FastTrack (FE) | Teams              |
| 3226    | EDU: Avaliar o Classroom e o SDS Sync                                                  |            O             | Engenheiro FastTrack (FE) | Classroom/SDS      |
| 2121    | Exchange - Se aplicável, fornecer ao cliente o utilitário de Descoberta de cliente do GroupWise   |            O             | Engenheiro FastTrack (FE) | Exchange           |
| 2393    | SfB - Examinar recursos avançados de várias florestas do Skype for Business/requisitos do Lync |            O             | Engenheiro FastTrack (FE) | Skype for Business |
| 2455    | SfB - Executar Ferramenta de Análise de Rede do Office 365                                          |            O             | Engenheiro FastTrack (FE) | Skype for Business |
| 2456    | SfB - Executar Analisador de Conectividade Remota                                              |            O             | Engenheiro FastTrack (FE) | Skype for Business |
| 2457    | SfB - Executar Calculadora de Largura de Banda 2.50 do Lync                                            |            O             | Engenheiro FastTrack (FE) | Skype for Business |

### Avaliação Técnica Concluída

Função principal: **Gerente Microsoft FastTrack**  
Propostas: **Integridade do Cliente/RFA/Segmentação**  
Aplica-se a: **Todos os Serviços**

Após a entrega de todas as Avaliações Técnicas no escopo, marcar Tarefa 1699: Avaliação Técnica Concluída como concluída.

#### Tarefas do FTOP

| ID da Tarefa | Nome da Tarefa                                                                                            | O(b)rigatório / (O)pcional |  Função do Microsoft FastTrack   | Serviços     |
| ------- | ---------------------------------------------------------------------------------------------------- | :----------------------: | :---------------: | ------------ |
| 1699    | Avaliação Técnica Concluída: Plano de Implantação, incluindo Checklist  de Remediação entregue ao cliente |            M             | Gerente FastTrack (FM) | Todos os Serviços |

### Realizar Avaliação de Conexão de Nuvem

Função principal: **Gerente Microsoft FastTrack**  
Propostas: **Integridade do Cliente/RFA/Segmentação**  
Aplica-se a: **Intune**

Realizar Avaliação de Conexão de Nuvem  

#### Tarefas do FTOP

| ID da Tarefa | Nome da Tarefa                                         | O(b)rigatório / (O)pcional |  Função do Microsoft FastTrack   | Serviços |
| ------- | ------------------------------------------------- | :----------------------: | :---------------: | -------- |
| 4039    | Assistente do - (Intune) Realizar Avaliação de Conexão de Nuvem |            M             | Gerente FastTrack (FM) | Intune   |

## Principais Ações

  - O cliente entende o que o FastTrack Center (FTC) fornece.
  - O cliente está interessado em ativar um ou mais serviços. 
  - O cliente identifica recursos para trabalhar com o Microsoft FastTrack.

## Principais Resultados

  - Compreensão completa da infraestrutura do cliente:
      -  Ambientes de origem sendo migrados
      -  Restrições que podem atrasar ou bloquear a implantação
  - Checklist de Remediação criada e revisada com o cliente
  - Identificar quaisquer contatos de clientes específicos do serviço

## Próximas etapas

  - Com base nos workloads identificados para integração, ir para [Realizar Workshop de Serviços](assess-conduct-services-workshops-partner-pr.md).
  - Se nenhum workshop for necessário, ir para [Abordar Lacunas Técnicas](remediate-address-technical-gaps-partner-pr.md).

## Resumo de Atualização

|Data|Quem Mudou|O Que Mudou|Notas|
|---------|---------------|----------------------------|-------------|
|03/10/2019| Celia Kennedy| Guia Estratégico do Parceiro atualizado| |

[Início](http://partner-docs.microsoft.com)
