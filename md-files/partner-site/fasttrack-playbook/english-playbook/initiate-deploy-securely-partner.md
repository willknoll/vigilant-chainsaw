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

# Deploy securely

Phase: **Initiate**  
Motions: **Customer Health / RFA / Targeting**  

## Overview

The Deploy Securely process initiates the working relationship between the FastTrack Center (FTC) and the customer.  This is where FTC begins to learn about the customers business, owned services and where the customer begins to learn about the scope of support the FTC can provide in relation to the security features available.  

## Objectives

Understand the customer's deployment requirements and how M365 security solutions can address them.  

Assess customer's current knowledge of Identity, Device, and Information security.  

Explain​ to the customer:

  - Importance of security
  - Why a security baseline should be established
  - Why productivity and collaboration workloads should deploy securely  

## Approach

### Prepare for M365 Security Conversation

Primary Role: **FastTrack Manager**  
Motions: **Customer Health / RFA / Targeting**  
Applies To: **Core Onboarding**

Review the customer licensing to determine what type of licensing the customer has and if they have any add on security features. Knowing what licenses a customer has will help you stitch together a story that compels them to leverage more of the Microsoft 365 suite of products to deploy their workloads as securely as possible from the start.​  

### Schedule and Deliver M365 Security Conversation

Primary Role: **FastTrack Manager**  
Motions: **Customer Health / RFA / Targeting**  
Applies To: **Core Onboarding**

Having a meeting that includes all relevant stakeholders (BDM, Security Analyst, Security Architect, Directory of Security, IT, etc.) in the customer's organization to discuss the importance of creating a security baseline for their deployment will help ensure the customer is leveraging the security built into the fabric of our products and solutions. The [M365 Security Conversation Deck](https://aka.ms/frp-sandcconversation) sets up the conversation about deploying their services securely.​  

#### FTOP Tasks

| Task ID | Task Name                  | (M)andatory / (O)ptional |  FastTrack Role   | Services        |
| ------- | -------------------------- | :----------------------: | :---------------: | --------------- |
| 4017    | M365 Security Conversation |            M             | FastTrack Manager | Core Onboarding |

### Prepare Identity

Primary Role: **FastTrack Engineer**  
Motions: **Customer Health / RFA / Targeting**  
Applies To: **Core Onboarding**

**Identify Existing Forests and Clean Up Malformed UPNs**

This will be the first discussion to lead the customer down the path of setting up a secure foundation for their transition to the cloud. FE should come out of this with a good understanding of their current environment and infrastructure and will help develop a path forward. Meeting with the customer to have a conversation to understand their current environment/structure. Utilize the Toolset to clean up the customer's environment to prepare for identity synchronization.

  - [Toolset](https://docs.microsoft.com/en-us/office365/enterprise/install-and-run-idfix)

**Finalize Authentication Method**

Have a conversation with the customer to discuss and choose the authentication method. This can only happen after you have identifiedthe existing forests and the customer has cleaned up their environment to prepare for identity synchronization. 

  - [Choose Azure AD Authentication](https://go.microsoft.com/fwlink/?linkid=873173)

**Configure AAD Connect**

Utilize [AAD Connect Prescribed Tasks](https://docs.microsoft.com/en-us/office365/enterprise/set-up-directory-synchronization) to configure AAD Connect. Do not synchronize identities at this time.

Before synchronizing identities, set up two cloud-only, break glass accounts to mitigate scenarios where you may be unable to sign into a regular admin account. Next, configure a Conditional Access Policy that blocks all access by default. Be sure to exclude your break glass accounts to avoid administrators getting locked out of the portal.

Finally, enable the Baseline Policy: MFA for Admins to ensure your privileged​ users will be registered for MFA and protected by default. 

  - [Break glass accounts](https://docs.microsoft.com/en-us/azure/active-directory/users-groups-roles/directory-emergency-access)
  - [Baseline Policy: MFA for admins](https://docs.microsoft.com/en-us/azure/active-directory/conditional-access/baseline-protection)
  - [What are baseline policies?](https://docs.microsoft.com/en-us/azure/active-directory/conditional-access/baseline-protection)
  
**Identity Synchronization**

The customer should not synchronize identities until:  

  - Break glass accounts are created
  - A Block All conditional access policy is configured
  - Baseline policy: MFA for admins is enabled

At the conclusion of this step, the baseline security framework around identity will be in place. Identity synchronization using AAD Connect configured previously will occur in Task 1141: Set Up Directory Synchronization (Azure AD Connect) in the enable phase.  

#### FTOP Tasks

| Task ID | Task Name                                      | (M)andatory / (O)ptional |   FastTrack Role   | Services        |
| ------- | ---------------------------------------------- | :----------------------: | :----------------: | --------------- |
| 3736    | Guidance for Choosing an Authentication Method |            M             | FastTrack Engineer | Core Onboarding |

### Identity and Device Security

Primary Role: **FastTrack Engineer**  
Motions: **Customer Health / RFA / Targeting**  
Applies To: **Core Onboarding**

The Identity and Device Security presentation/discussion is required for all customers.  Encourage customers to plan a solid security foundation around identity, device and mobile app management.

As an outcome of the workshop, you will help customers choose and enable the appropriate security features for their organization as it relates to securing identities and devices.  

  - FEs deliver the Identity and Device Security Best Practices Workshop and complete the handoff form
  - For EMS re-engagements, FMs should consider presenting the [EMS Business Value Deck](https://aka.ms/AA54548) for a high level discussion.
  - Use the [Identity and Device Security Guidance](https://aka.ms/FRPDeploySecurelyGuidance) for details on executing this step.

#### FTOP Tasks

| Task ID | Task Name     | (M)andatory / (O)ptional |   FastTrack Role   | Services        |
| ------- | --------------------------------------------------------- | :----------------------: | :----------------: | --------------- |
| 3720    | [Identity and Device Security Best Practices Workshop](https://aka.ms/FRPDeploySecurelyGuidance)      |            M             | FastTrack Engineer | Core Onboarding |
| 3721    | Identity and Device Security completed hand-off form work |            O             |        SME         | Core Onboarding |

## Key Inputs

  - Kickoff call completed  

## Key Outputs

  - Customer has a strong understanding of the security features available to deploy workloads as securely as possible.  
  - documents the areas the customer​ doesn't plan to enable along with the reasons why.
  - Customer has chosen their authentication method and enabled the appropriate security features for their organization as it relates to identity and devices.​  

## Next Steps

  - FM schedules additional follow-up meeting(s) with project team and relevant stakeholders for discussions on specific services and scenarios to close gaps as needed (e.g., BVD, services workshops, meeting(s) with technical/adoption SMEs, etc.)  
  - Once outputs listed above are complete, move to [Conduct Technical Assessment](assess-conduct-technical-assessment-partner.md),
    [Conduct Security Workshops](assess-conduct-security-workshops-partner.md), and [Conduct Services Workshops](assess-conduct-services-workshops-partner.md)

### Refresh Summary

|Date|Who Changed|What Changed|
|---------|---------------|----------------------------|
|03/25/2020| Celia Kennedy| General Maintenance|
|10/018/2019| Celia Kennedy| Partner Playbook Updated|

[Home](http://partner-docs.microsoft.com)
