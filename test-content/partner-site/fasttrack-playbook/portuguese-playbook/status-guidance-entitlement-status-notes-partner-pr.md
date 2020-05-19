--- 
# required metadata 
title: FastTrack Partner Playbook - Entitlement Status Notes Guidance
description: FastTrack Partner Playbook - Entitlement Status Notes Overview
ms.author: v-cekenn
manager: pagrim
ms.date: 10/03/2019 
ms.topic: partner-playbook 
ms.prod: non-product-specific 
ms.custom: partner-playbook 
ft.audience: partner
ft.owner: pagrim
--- 

# Guia de Observações de Status de Direito

As observações de status de direito devem ser usadas pelo Gerente FastTrack (FM) e certas equipes de especialista no assunto (SME) para fornecer uma imagem atual dos direitos em cada workload. As Observações de Status de Direito são declarações **concisas** que descrevem a intenção de um cliente ou a falta dela para consumir o serviço. Ao resumir o status atual de direito, não deixe de incluir o método de **"porquê"** ou **"motivo"**. Esse é um dos principais componentes de sua declaração. Apenas uma ou duas frases são necessárias para declarar suficientemente o status. As atualizações devem ser fornecidas conforme necessário para que os direitos do workload tenham uma descrição clara e atualizada que reflita com precisão a intenção do workload.

Aqui estão algumas perguntas a serem consideradas ao escrever sua observação:

  - O cliente está avançando com sucesso na integração? Sua observação transmite isso claramente?
  - Seu cliente está bloqueado? Em caso afirmativo, qual é o bloqueador **principal** que o impede de avançar?
  - Seu cliente tem uma intenção? Se a resposta é não, você declarou por que ele não tem uma intenção para o serviço?
  - Se precisar de assistência para descrever de forma concisa os aspectos técnicos da observação, você deverá trabalhar com seus Engenheiros FastTrack (FE) para garantir que os detalhes técnicos necessários sejam incluídos.

Ao elaborar sua observação, **use linguagem inequívoca**. Palavras e frases como "*incapaz*", "*problema*", "*bloqueado*", "*não tem intenção*", "*questões*", "*sem valor*" ou "*falta de recursos*" ajudam a esclarecer a intenção para o serviço. Por outro lado, palavras e frases como "*por enquanto*", "*atualmente*" ou "*ainda*" devem ser evitadas, pois não esclarecem a intenção para o serviço. 

**Em resumo, uma observação deve indicar a intenção ou a falta dela e incluir o "**porquê**" por trás disso.**

## Guias de Modelo de Observação

**Em Andamento:**

  - O cliente está avançando na implantação. Ele está na fase de adoção.
  - Integração ao serviço. Cliente na \[**fase de implantação**\]. \[**detalhes adicionais**\].
  - A empresa realizará a integração ao serviço depois que o \[**workload de foco atual**\] for concluído. \[**detalhes adicionais**\].
  - Integração em andamento, concentrando-se em \[**detalhes**\].

**Bloqueado:**

Em uma declaração concisa, forneça detalhes sobre por que os direitos estão bloqueados, seja uma lacuna de recursos técnicos, um problema de licença ou falta de recursos. É crucial transmitir o bloqueador para que a engenharia de recursos e outras equipes da Microsoft possam identificar uma oportunidade de tomar medidas para corrigir o problema.

  - O cliente não implantará o workload devido ao \[**problema principal**\] referente a \[**detalhes técnicos**\], \[**limitações específicas**\] e \[**detalhes adicionais importantes**\].
  - Não é possível implantar devido a \[**problema principal**\] e \[**detalhes técnicos**\] devido a \[**limitações específicas**\].
  - Cliente bloqueado devido a \[**problema principal**\] até que \[**resolução potencial**\] seja implementada.

**Sem Intenção:**

Forneça uma descrição clara e concisa do motivo pelo qual o cliente não tem a intenção de implantar esses direitos. 

  - O cliente não tem intenção de usar o serviço devido a \[**problema principal**\] e \[**especificidades**\].
  - O cliente não está interessado em implantar o workload devido a \[**problema principal**\] e \[**detalhes relacionados**\].
  - Não há necessidade desse workload porque \[**problema principal**\] é um fator limitante de \[**especificidades**\].

**Status Desconhecido:**

  - Não é possível obter a intenção do cliente quanto a esse workload.
  - O cliente não responde a várias tentativas de contato. Conta gerenciada.

**Duplicado/Inválido:**

Forneça uma descrição do motivo pelo qual os direitos são indicados como duplicados ou inválidos (contagem de licenças duplas etc). 

## Exemplos de Observações

**Situação 1:**

Uma empresa comprou recentemente licenças do Office 365 (O365). O Time da Conta acredita que o FastTrack Center (FTC) possa ajudar na integração do cliente e entra em contato com o FTC. Ao tentar se conectar ao cliente e reunir os Proprietários de Sucesso de Motivo de Negócios de Intenção de Data de Vencimento (DIBS), a equipe descobre que a empresa está atualmente no processo de aquisição de outra empresa, e o enfoque é a combinação das empresas, não a integração ao O365. Uma moratória para todos os projetos de TI é emitida pela gerência até que os detalhes da aquisição sejam realizados. Assim a integração terá que esperar.

  - **Observação Excelente:** O Cliente não tem a intenção de integrar o workload devido a uma aquisição contínua de outra empresa, que deve ser tratada antes que qualquer atividade de integração possa ocorrer.
  - **Observação Mediana**: Até que a fusão seja concluída, o cliente não realizará a implantação.
  - **Observação Inadequada**: O cliente não tem intenção.

**Situação 2:**

Após se envolver com o FTC, o cliente inicia o piloto do Exchange Online (EXO). Durante o piloto, os usuários observam constantemente caixas de correio que não conseguem enviar/receber mensagens e enfrentam problemas gerais de performance. A equipe de TI identifica que a causa é um firewall incompatível que está manipulando o tráfego corretamente por design. Infelizmente, ele não pode ser substituído no momento devido a parâmetros de segurança específicos. Até que uma solução seja encontrada, é necessário migrar de volta para o Exchange on-premises, e a implantação será interrompida.

  - **Observação Excelente:** Como um firewall não encaminha corretamente o tráfego, o cliente não implantará o serviço porque não consegue se conectar às caixas de correio.
  - **Observação Mediana:** O cliente não realizará a implantação devido à infraestrutura específica on-premises.
  - **Observação Inadequada:** O cliente não pode implantar no momento.

**Situação 3:**

Atualmente, o cliente está envolvido com o FTC e está trabalhando nas etapas de remediação. Alguns problemas foram identificados em referência a grupos de usuários, mas não há bloqueadores severos. A Equipe On-site está progredindo.

  - **Observação Excelente:** O cliente está continuando o processo de implantação e atualmente está trabalhando nas etapas de remediação.
  - **Observação Mediana:** Em andamento.
  - **Observação Inadequada:** (em branco)

**Situação 4:**

Um novo tenant está sendo processado por meio do Gateway. O FM entra em contato com a Unidade da Equipe de Conta (ATU), que não está envolvida no momento nem tem conhecimento sobre as intenções do cliente para implantação. No entanto, eles fornecem contatos na organização. São feitas várias tentativas fracassadas de entrar em contato com o cliente. Nenhuma informação adicional é fornecida.

  - **Observação Excelente:** O cliente não responde a três tentativas de contato. Cliente gerenciado.
  - **Observação Mediana:** O cliente não responde às tentativas de contato.
  - **Observação Inadequada:** O cliente não responde.

**Situação 5:**

Ao explorar as opções de implantação, o cliente começa a encontrar problemas relativos à residência de dados. Após uma investigação mais aprofundada, o workload específico em questão não pode ser implantado para o cliente devido a regulamentos legais que proíbem o armazenamento de dados regulamentados fora do país.

  - **Observação Excelente:** O serviço não será implantado devido a restrições legais à residência de dados. O cliente está proibido de armazenar dados regulamentados fora do país devido à regulamentação X.
  - **Observação Mediana:** O serviço não será implantado devido à regulamentação X, que proíbe que dados sejam armazenados fora do país em repouso ou em trânsito. A ATU está envolvida para encontrar uma solução, ainda que seja improvável. O roteiro está sendo explorado para uma possível resolução de recursos para os requisitos de dados. O FM continua a se reunir com o cliente regularmente para chamadas de sincronização. Se nenhuma solução for encontrada, é provável que uma solução competitiva seja aproveitada. Os Serviços de Consultoria da Microsoft (MCS) podem ser usados, mas isso depende de financiamento.
  **(são muitas informações desnecessárias; isso não é útil)\**
  - **Observação Inadequada:** Não é possível implantar devido a problemas de nuvem/dados/legais.

## Erros comuns

**Não há informações suficientes**
Registrar informações sobre o uso ou o status L1 não é suficiente para uma Observação de Status de Direito.
**Exemplo:** O cliente não tem intenção para este workload ou uso de 0,0%.

**O tipo incorreto de informações**
As observações de Status de Direito não são a área apropriada para registrar informações sobre o envolvimento. Essas informações devem ser compartilhadas nas Observações gerais.
**Exemplo:** Agendamento da reunião de abertura para obter a intenção do workload.

**Podemos copiar e colar a mesma observação para cada workload()?**  
Copiar e colar a mesma observação para cada workload() geralmente é desencorajado, pois a mesma observação frequentemente não é aplicável a vários workloads; por exemplo, a migração não é aplicável ao Office ProPlus (OPP). No entanto, existem situações em que a mesma observação se aplicaria a todos os workloads, como um cliente que não responde.  
  
**Quando um cliente recusa o benefício do FTC, essa é uma situação "sem intenção"?**  
Não, a intenção de aproveitar a FTC não é o mesmo que a intenção de utilizar o serviço.

**E se eu não tiver certeza sobre em qual status colocar o cliente?**
Você pode acessar a página [Status e Direito](l1l2l3-homepage-list-pr.md) para obter melhor esclarecimento ou entendimento sobre qual status e motivo usar para o cliente.

## Perguntas frequentes (FAQ)

**Por que o registro de uma observação excelente é importante?**
Os Grupos de Negócios e Produtos do O365 usam esses dados para tomar decisões de negócios, como: aprimoramento de recursos existentes, desenvolvimento de novos roteiros de produtos, identificação de falhas ou bugs e/ou transformação dos processos de negócios. As observações de qualidade também ajudam a oferecer visibilidade das próximas etapas que precisam ser tomadas para que o cliente avance, alinhando recursos ou fornecendo práticas recomendadas.

**Quais informações precisam ser capturadas em uma observação?**
Quando uma observação excelente é dividida, é possível derivar L1-L3, junto com os detalhes específicos que fornecem insights adicionais para ajudar a Microsoft a entender melhor o raciocínio por trás da intenção do cliente. Pode ser útil fazer as seguintes perguntas sobre sua observação:

  - Sua observação articula claramente se há um bloqueador? Ela fornece os detalhes de um bloqueador?
  - Sua observação expressa claramente a intenção do cliente ou a falta dela? Você diferenciou entre a intenção do cliente de consumir o serviço e a intenção do cliente de aproveitar o FTC para obter assistência?
  - Você capturou todas as informações pertinentes em aproximadamente duas frases?
  - Para tenants que não respondem, você documentou quantas tentativas foram feitas e com quem tentou entrar em contato? Esta é uma conta gerenciada ou não gerenciada?

### Resumo de Atualização

|Data|Quem Mudou|O Que Mudou|Notas|
|---------|---------------|----------------------------|-------------|
|01/10/2019| Celia Kennedy| Guia Estratégico do Parceiro atualizado| |

[Início](http://partner-docs.microsoft.com)
