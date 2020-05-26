---  
# required metadata  
title: FastTrack Playbook - Deploy securely  
description: FastTrack Playbook - Deploy securely  
author: Rosie Arrieta  
ms.author: rosiea  
manager: eduardod  
ms.date: 5/27/2020 
ms.topic: playbook  
ms.prod: non-product-specific  
ms.custom: internal-playbook  
ft.audience: internal  
ft.owner: rosiea  
---  
[!INCLUDE [Playbook Feedback](./includes/questions-feedback.md)]  

# Deploy securely

Phase: **Initiate**  
Motions: **Customer Health / RFA / Targeting**  
[!INCLUDE [Data Privacy](./includes/playbook-data-privacy.md)]  

## Overview

The Deploy Securely process initiates the working relationship between
the FastTrack Center (FTC) and the customer.  This is where FTC begins
to learn about the customers business, owned services and where the
customer begins to learn about the scope of support the FTC can provide
in relation to the security features available.  

## Objectives

Understand the customer's deployment requirements and how M365 security
solutions can address them.  

Assess customer's current knowledge of Identity, Device, and Information
security.  

Explain​ to the customer:

  - Importance of security
  - Why a security baseline should be established
  - Why productivity and collaboration workloads should deploy
    securely  

## Approach

### Prepare for M365 Security Conversation

Primary Role: **FastTrack Manager**  
Motions: **Customer Health / RFA / Targeting**  
Applies To: **Core Onboarding**

Review the customer licensing to determine what type of licensing the
customer has and if they have any add on security features. Knowing what
licenses a customer has will help you stitch together a story that
compels them to leverage more of the Microsoft 365 suite of products to
deploy their workloads as securely as possible from the start.​  

**Step Inputs (the checklist of items you should collect to be successful with this step)**
- Engagement start date updated in FTOP
- Engagement Management note documenting the following:
    - Customer Kickoff completed
    - Customer’s interest in a guided security conversation
    - Customer’s needs, intent, and plans for workloads in scope
- Customer contacts updated in FTOP including customer, Microsoft account team and partner  

**Step Outputs (the set of items you should make sure are documented to successfully exit this step)**  
- Environment Note documenting the following: 
    - Outline of customer licensing for Office 365/M365 
    - Add-on security features for which the customer has entitlements 
- Engagement Management note documenting the following:
    - The security scenarios the customer’s Office 365/M365 licensing enable (conditional access, multi-factor authentication, etc.)  

### Schedule and Deliver M365 Security Conversation

Primary Role: **FastTrack Manager**  
Motions: **Customer Health / RFA / Targeting**  
Applies To: **Core Onboarding**

The M365 Security Conversation should be held with the Business Decision Maker from the organization. Other potential attendees could be anyone responsible for security and risk mitigation. Some example roles are IT Pro, Director of Security, Security Operations, Security Architect, CISO.  

This meeting should happen as the very next conversation after the kickoff call or revisited when beginning to work on the next workload for deployment.  

**For Customers new to FastTrack**:  

Please go through the entire conversation as the [M365 Security Conversation Deck](https://aka.ms/frpdeploysecurely) sets up the conversation about deploying their services securely.  

**For customers who’ve moved to a new workload or deploying a current workload**:  

If the conversation is happening as you begin to work on the next workload or are deploying a current workload, review slide 13 and 14 from the [M365 Security Conversation Deck](https://aka.ms/frpdeploysecurely) again with the customer to help the customer identify where along the journey to being secure they are.  

Status **Updates** for task 4017:  

- **Not Started**:  Default – no action has been performed for this task  

- **In Progress**:  FastTrack Manager is performing activities against the task or has scheduled a discussion with the Customer  

- **Complete**:  FastTrack Manager (or account teams/Partner or FTA) has completed the actions required in this task:  Approach summarized in Slide 13 is landed with the right audience.  **FastTrack Manager is responsible for tracking how the activity is delivered and detail it in the notes**.  

- **Cancelled**:  FastTrack Manager has tried to deliver the actions required but the actions were declined by the customer or they do not apply – **make detailed notes in FTOP**  

**Step Inputs (the checklist of items you should collect to be successful with this step)**  
- Engagement start date updated in FTOP
- Engagement Management note documenting the following:
    - Customer’s interest in a guided security conversation
    - Customer’s needs, intent, and plans for workloads in scope
    - (If applicable) Confirmation that Quick leads partner referral was completed.
- Environment Note documenting the following: 
    - Outline of customer licensing for Office 365/M365
    - Add-on security features for which the customer has entitlements 
- Customer contacts updated in FTOP including customer, Microsoft account team and partner  

**Step Outputs (the set of items you should make sure are documented to successfully exit this step)**  
- Technical Enablement note documenting the following: 
    - M365 Security Conversation deck delivered to the customer
        - For customers new to FastTrack, the entire M365 Security Conversation deck was delivered
        - For existing FastTrack customers, deploying new or current workload(s), slides 13 and 14 from the M365 Security Conversation deck was delivered 
    - Hashtag to indicated who delivered the M365 Security Conversation to the customer (e.g. #TaskDeliveredFM)
    - Hashtag to indicate which product the customer expressed interest in (e.g. #AADP, #MDATP)
    - If a Partner Threat Check had been completed or scheduled 
        - (If applicable) Customer expressed interest in a Threat Check delivered by a partner 
        - (If applicable) Confirmation that a Quick Lead request for a partner Threat Check was submitted  

#### FTOP Tasks

| Task ID | Task Name                  | (M)andatory / (O)ptional |  FastTrack Role   | Services        |
| ------- | -------------------------- | :----------------------: | :---------------: | --------------- |
| 4017    | M365 Security Conversation |            M             | FastTrack Manager | Core Onboarding |

### Prepare Identity

Primary Role: **FastTrack Engineer**  
Motions: **Customer Health / RFA / Targeting**  
Applies To: **Core Onboarding**

**Identify Existing Forests and Clean Up Malformed UP​Ns**

This will be the first discussion to lead the customer down the path of
setting up a secure foundation for their transition to the cloud. FE
should come out of this with a good understanding of their current
environment and infrastructure and will help develop a path forward.
Meeting with the customer to have a conversation to understand their
current environment/structure. Utilize the Toolset to clean up the
customer's environment to prepare for identity synchronization  

  - [Toolset](https://docs.microsoft.com/en-us/office365/enterprise/install-and-run-idfix)  

**Finalize Authentication Method**

Have a conversation with the customer to discuss and choose the
authentication method. This can only happen after you have identified
the existing forests and the customer has cleaned up their environment
to prepare for identity synchronization. 

  - [Choose Azure AD
    Authentication](https://go.microsoft.com/fwlink/?linkid=873173)

**Configure AAD Connect**

Utilize [AAD Connect Prescribed
Tasks](https://docs.microsoft.com/en-us/office365/enterprise/set-up-directory-synchronization)
to configure AAD Connect. Do not synchronize identities at this time.

Before synchronizing identities, set up two cloud-only, break glass
accounts to mitigate scenarios where you may be unable to sign into a
regular admin account. Next, configure a Conditional Access Policy that
blocks all access by default. Be sure to exclude your break glass
accounts to avoid administrators getting locked out of the portal.
Finally, enable the Baseline Policy: MFA for Admins to ensure your
privileged​ users will be registered for MFA and protected by default. 

  - [Break glass
    accounts](https://docs.microsoft.com/en-us/azure/active-directory/users-groups-roles/directory-emergency-access)
  - [Baseline Policy: MFA for
    admins](https://docs.microsoft.com/en-us/azure/active-directory/conditional-access/baseline-protection)

[](https://docs.microsoft.com/en-us/azure/active-directory/conditional-access/baseline-protection)**Identity
Synchronization**

The customer​ should not synchronize identities until:  

  - Break glass accounts are created
  - A Block All conditional access policy is configured
  - Baseline policy: MFA for admins is enabled

​At the conclusion of this step, the baseline security framework around
identity will be in place. Identity synchronization using AAD Connect
configured previously will occur in Task 1141: Set Up Directory
Synchronization (Azure AD Connect) in the enable phase.  

**Step Inputs (the checklist of items you should collect to be successful with this step)**  
- Engagement start date update in FTOP
- Engagement Management note documenting the following:
    - identified the existing forests 
    - Confirmation that the customer has cleaned up their environment to prepare for identity synchronization. 
    - Customer’s interest in a guided security conversation
    - Customer’s needs, intent, and plans for workloads in scope
- Technical Enablement note documenting the following: 
    - M365 Security Conversation (deck for task 4017) delivered to the customer
    - Hashtag to indicated who delivered the M365 Security Conversation to the customer (e.g. #TaskDeliveredFM)
    - Hashtag to indicate which product the customer expressed interest in (e.g. #AADP, #MDATP)
    - If a Partner Threat Check had been completed or scheduled 
        - If applicable – Customer expressed interest in a Threat Check delivered by a partner 
        - If applicable – Confirmation that a Quick Lead request for a partner Threat Check was submitted 
- Environment Note documenting the following: 
    - Outline of customer licensing for Office 365/M365
    - Add-on security features for which the customer has entitlements 
- Customer contacts updated in FTOP including customer, Microsoft account team and partner  

**Step Outputs (the set of items you should make sure are documented to successfully exit this step)**  
- (if applicable) SME assistance requested – and noted in FTOP 
    - If customer has EMS licenses EMS SME requested, if not, then Identity SME requested 
- Technical Enablement note documenting the following: 
    - Azure AD - Choose Authentication method deck delivered to the customer
    - If applicable – customer selected or interested in moving forward with Staged Rollout 
    - Confirmed with the customer that the customer identified existing forests and cleaned up their environment to prepare for identity synchronization
    - Confirmed with customer that the customer has completed the following items – as pre-requisites before synchronizing identities: 
        - Set up two cloud-only, break glass accounts.
        - Configured a Conditional Access Policy that blocks all access by default
        - Enabled the Baseline Policy: MFA for Admins to ensure privileged users will be registered for MFA and protected by default. 
    - Azure AD authentication method chosen, or expressed interest in, by the customer
        - Cloud-only Authentication
        - Azure AD password hash synchronization
        - Azure AD Pass-through Authentication
        - Federated Authentication.  

#### FTOP Tasks

| Task ID | Task Name                                      | (M)andatory / (O)ptional |   FastTrack Role   | Services        |
| ------- | ---------------------------------------------- | :----------------------: | :----------------: | --------------- |
| 3736    | Guidance for Choosing an Authentication Method |            M             | FastTrack Engineer | Core Onboarding |

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
  - For EMS re-engagements, FMs should consider presenting the [EMS Business Value Deck​](https://aka.ms/AA54548) for a high level
    discussion (localized versions [here](https://aka.ms/AA75mha))
  - Use the [Identity and Device Security
    Guidance​](https://aka.ms/idsapproach) for details on executing
    this step  

**Step Inputs (the checklist of items you should collect to be successful with this step)**  
- (if applicable) SME assistance requested – and noted in FTOP 
- Engagement Management note documenting the following:
    - Customer’s interest in a guided security conversation
    - Customer’s needs, intent, and plans for workloads in scope
- Technical Enablement note documenting the following: 
    - M365 Security Conversation (deck for task 4017) delivered to the customer
    - Hashtag to indicated who delivered the M365 Security Conversation to the customer (e.g. #TaskDeliveredFM)
    - Hashtag to indicate which product the customer expressed interest in (e.g. #AADP, #MDATP)
    - If a Partner Threat Check had been completed or scheduled 
        - If applicable – Customer expressed interest in a Threat Check delivered by a partner 
        - If applicable – Confirmation that a Quick Lead request for a partner Threat Check was submitted 
- Environment Note documenting the following: 
    - Outline of customer licensing for Office 365/M365
    - Add-on security features for which the customer has entitlements 
- Customer contacts updated in FTOP including customer, Microsoft account team and partner  

**Step Outputs (the set of items you should make sure are documented to successfully exit this step)**  
- Technical Enablement note documenting the following: 
    - Identity and Device Security Best Practices deck delivered to the customer
    - IF applicable, the non-Microsoft SaaS apps the customer uses
    - Device Platforms being used by the customer
        - Windows
        - iOS
        - macOS
        - Android
    - Hand-off Form completed 
        - Hand-off Form provided to SME  

#### FTOP Tasks

| Task ID | Task Name                                                 | (M)andatory / (O)ptional |   FastTrack Role   | Services        |
| ------- | --------------------------------------------------------- | :----------------------: | :----------------: | --------------- |
| 3720    | Identity and Device Security Best Practices Workshop      |            M             | FastTrack Engineer | Core Onboarding |
| 3721    | Identity and Device Security completed hand-off form work |            O             |        SME         | Core Onboarding |

## Key Inputs

  - ​Kickoff call completed  

## Key Outputs

  - Customer has a strong understanding of the security features
    available to deploy workloads as securely as possible.  
  - Status on the task is updated accordingly.
  - Customer has chosen their authentication method and enabled the
    appropriate security features for their organization as it relates
    to identity and devices.​  
      

## Next Steps

  - FM schedules additional follow-up meeting(s) with project team and
    relevant stakeholders for discussions on specific services and
    scenarios to close gaps as needed (e.g., BVD, services workshops,
    meeting(s) with technical/adoption SMEs, etc.)  
  - Once outputs listed above are complete, move to [Conduct
    Technical
    Assessment​](./assess-conduct-technical-assessment.md),
    [Conduct Security and Compliance Workshops](./assess-conduct-security-and-compliance-workshops.md), and
    [Conduct Services
    Workshops](./assess-conduct-services-workshops.md).  

## Refresh Summary

| Date      | Who Changed   | What Changed      |
| --------- | ------------- | ----------------- |
| 5/31/2019 | Rosie Arrieta | Published process |
