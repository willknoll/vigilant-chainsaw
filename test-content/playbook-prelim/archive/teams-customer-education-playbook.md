---  
# required metadata  
title: FastTrack Playbook - Teams Customer Education Playbook  
description: FastTrack Playbook - Teams Customer Education Playbook  
author: Rosie Arrieta  
ms.author: ryanme  
manager: eduardod  
ms.date: 1/17/2020  
ms.topic: playbook  
ms.prod: non-product-specific  
ms.custom: internal-playbook  
ft.audience: internal  
ft.owner: ryanme   
---  
[!INCLUDE [Playbook Feedback](./includes/questions-feedback.md)]  

# FastTrack Teams Customer Education Playbook

## Overview

The FastTrack Teams Customer Education Playbook will provide all of the necessary details to educate the customer on deployment of Teams and other necessary M365 components. For details around how to enable your customer Teams and the expectations for managing the customer relationship please refer to the following supplementary Playbooks.  

- FastTrack General Customer Engagement Playbook
- FastTrack Teams Deployment Playbook


## Approach

### Deploy Securely

### Prepare for M365 Security Conversation

Primary Role: **FastTrack Manager**  
Motions: **Customer Health / RFA / Targeting**  
Applies To: **Core Onboarding**

Review the customer licensing to determine what type of licensing the
customer has and if they have any add on security features. Knowing what
licenses a customer has will help you stitch together a story that
compels them to leverage more of the Microsoft 365 suite of products to
deploy their workloads as securely as possible from the start.​  

### Schedule and Deliver M365 Security Conversation

Primary Role: **FastTrack Manager**  
Motions: **Customer Health / RFA / Targeting**  
Applies To: **Core Onboarding**

Having a meeting that includes all relevant stakeholders (BDM, Security
Analyst, Security Architect, Directory of Security, IT, etc.) in the
customer's organization to discuss the importance of creating a security
baseline for their deployment will help ensure the customer is
leveraging the security built into the fabric of our products and
solutions. The [M365 Security Conversation
Deck](https://fasttrack-docs.microsoft.com/collateral/m365-content.html)
sets up the conversation about deploying their services securely.​  

#### FTOP Tasks

| Task ID | Task Name                  | (M)andatory / (O)ptional |  FastTrack Role   | Services        |
| ------- | -------------------------- | :----------------------: | :---------------: | --------------- |
| 4017    | M365 Security Conversation |            M             | FastTrack Manager | Core Onboarding |


### Identity and Device Security

Primary Role: **FastTrack Engineer**  
Motions: **Customer Health / RFA / Targeting**  
Applies To: **Core Onboarding**

The Identity and Device Security presentation/discussion is required for
all customers.  Encourage customers to plan a solid security foundation
around identity, device and mobile app management.

As an outcome of the workshop, you will help customers choose and enable
the appropriate security features for their organization as it relates
to securing identities and devices.  

  - FEs deliver the Identity and Device Security Best Practices Workshop
    and complete the handoff form
  - For EMS re-engagements, FMs should consider presenting the [EMS
    Business Value Deck​](https://aka.ms/AA54548) for a high level
    discussion (localized versions
    [here](https://fasttrack-docs.microsoft.com/collateral/ems-content.html))
  - Use the [Identity and Device Security
    Guidance​](https://aka.ms/idsapproach) for details on executing
    this step  

#### FTOP Tasks

| Task ID | Task Name                                                 | (M)andatory / (O)ptional |   FastTrack Role   | Services        |
| ------- | --------------------------------------------------------- | :----------------------: | :----------------: | --------------- |
| 3720    | Identity and Device Security Best Practices Workshop      |            M             | FastTrack Engineer | Core Onboarding |
| 3721    | Identity and Device Security completed hand-off form work |            O             |        SME         | Core Onboarding |

### Conduct Technical Assessment

### Deliver Principles of Network Connectivity Guidance

Primary Role: **FastTrack Engineer**  
Motions: **Customer Health / RFA / Targeting**  
Applies To: **Core Onboarding**

The Conduct Network Assessment process allows the FastTrack team to
deliver guidance to customers to help them understand Microsoft’s
recommendations on connectivity best practices, and additionally
understand how the customer’s existing infrastructure aligns with that
guidance.

Provide guidance on Office 365/Microsoft 365 Principles of Network
Connectivity

  - Differentiate critical SaaS traffic, treat & trust various
    categories of network traffic differently  
  - Egress connections locally, ensuring minimal latency to Microsoft’s
    infrastructure
  - Optimize route length to edge of Microsoft’s network  
  - ​Evaluate bypass of extraneous network security devices/processes

Ensure customer understands Microsoft’s long-term direction to enable
alignment of connectivity strategy between customer and Microsoft•

Identify egress paths from customer sites to Microsoft’s global network

Identify potential misconfigurations of network infrastructure which
might cause issues with end-user experience

Determine whether proxies (particularly SSL break & inspect) are in use
with critical workload traffic

Network connectivity guidance is required for all new customers (early
in the engagement), and for customers re-engaging on additional
workloads.  

The purpose of providing network connectivity guidance early in the
engagement is to ensure that customers are properly configured to be
able to consume any Office 365/Microsoft 365 service with acceptable
performance and availability.  

A FastTrack Engineer will deliver the Principles of Network Connectivity
conversation, utilizing the deck here:  

[Office 365 Network
Guidance​](https://fasttrack-docs.microsoft.com/collateral/O365-content.html)  

If specialized assistance is required to deliver guidance to a customer
due to complex infrastructure or unique requirements, a Networking SME
may be requested via the normal FastTrack resource request process.  

  

#### FTOP Tasks

| Task ID | Task Name                                           | (M)andatory / (O)ptional |   FastTrack Role   | Services        |
| ------- | --------------------------------------------------- | :----------------------: | :----------------: | --------------- |
| 4071    | Deliver Principles of Network Connectivity Guidance |            M             | FastTrack Engineer | Core Onboarding |

### Conduct Services Workshops

### Conduct Specific Workshops

Primary Role: **FastTrack Manager**  
Motions: **Customer Health / RFA / Targeting**  
Applies To: **All Services**

Review service available workloads in Orchestration Portal (FTOP). 

Note: Some service tasks may link to a public wizard or additional
guidance documents and be required if the migration benefit is used or
may be designed for only Enterprise customers.

All presentation decks can be found under the [Services
Workshop​](https://fasttrack-docs.microsoft.com/playbook/resources-services-workshops.html)
in the Resources​ section of the playbook. Please note you should refer
to the task for any specific guidance documentation.   

#### FTOP Tasks

| Task ID | Task Name                                                                                         | (M)andatory / (O)ptional |       FastTrack Role       | Services                                                                                                                         |
| ------- | ------------------------------------------------------------------------------------------------- | :----------------------: | :------------------------: | -------------------------------------------------------------------------------------------------------------------------------- |
| 4088    | Migrating applications to Azure AD Workshop                                                       |            O             |     FastTrack Engineer     | Core Onboarding                                                                                                                  |
| 3240    | ADFS Client Access Policies Assessment                                                            |            O             |     FastTrack Engineer     | Core Onboarding                                                                                                                  |
| 3077    | SfB - Schedule and conduct SfB assessment workshop                                                |            O             |     FastTrack Engineer     | Skype for Business                                                                                                               |
| 3279    | Skype SME: Cloud Voice Wizard                                                                     |            O             |            SME             | Skype for Business / Skype for Business - PSTN Conferencing / Skype for Business - PSTN Calling / Skype for Business - Cloud PBX |

### Enterprise Additional Benefit Workshops

Primary Role: **FastTrack Engineer**  
Motions: **Customer Health / RFA / Targeting**  
Applies To: **All Services**

For approved Enterprise customers only, with 20,000 seats or more, or
with an exception.

#### FTOP Tasks

| Task ID | Task Name                                                        | (M)andatory / (O)ptional |     FastTrack Role     | Services           |
| ------- | ---------------------------------------------------------------- | :----------------------: | :--------------------: | ------------------ | 
| 3242    | Enterprise: Geo-Redundant ADFS workshop                          |            O             |   FastTrack Engineer   | Core Onboarding    |
| 3352    | Deep Dive Network Assessment Workshop                            |            O             | FastTrack Architect v2 | Core Onboarding    |
| 3365    | Deep Dive Identity Workshop                                      |            O             | FastTrack Architect v2 | Core Onboarding    |
| 3380    | Deep Dive Security, Compliance, and Regulatory Workshop          |            O             | FastTrack Architect v2 | Core Onboarding    |
| 3342    | Deep Dive Core Onboarding Workshops                              |            O             | FastTrack Architect v2 | Core Onboarding    |