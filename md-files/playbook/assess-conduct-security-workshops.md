---  
# required metadata  
title: FastTrack Playbook - Conduct Security Workshops  
description: FastTrack Playbook - Conduct Security Workshops  
author: Ryan Meehan  
ms.author: ryanme  
manager: eduardod  
ms.date: 1/16/2020  
ms.topic: playbook  
ms.prod: non-product-specific  
ms.custom: internal-playbook  
ft.audience: internal  
ft.owner: ryanme  
---  
[!INCLUDE [Playbook Feedback](./includes/questions-feedback.md)]  

# Conduct Security Workshops

Phase: **Assess**  
Motions: **Customer Health / RFA / Targeting**  
[!INCLUDE [Data Privacy](./includes/playbook-data-privacy.md)]  

## Overview

The Conduct Security Workshops process continues the relationship
between the FastTrack Center (FTC) and the customer with security at the
center of the engagement. This is where the FTC continues to work with
the customer to ensure the customer defines and achieves​ their desired
security posture.  

## Objectives

  - Assess customer's current security posture for Identity, Device​ and
    Information Security.
  - Customers understand what is available to them to secure their
    organization's digital assets and how to conduct​ daily
    investigations for security concerns.  
  - Customer enables the applicable security features to protect their
    digital assets.  

## Approach

### Identity Security

Primary Role: **SME**  
Motions: **Customer Health / RFA / Targeting**  
Applies To: **AADP**

Securing users, apps, devices, and data is critically important as part
of establishing a secure cloud first infrastructure, as well as part of
implementing automations to gain operational efficiencies and empowering
end users to be more productive. This workshop will help customers
understand how Azure AD Premium can help across a variety of identity
scenarios and outcomes, such as security, one click/mobility, IT and end
user efficiencies, governance and compliance, and external
collaboration. Customers should complete this workshop with a clear
understanding of the types of identity capabilities available via AADP
in alignment with their business needs.

Success Criteria:  

  - Understand customer’s business requirements and needs related to
    users, devices, apps, and data
  - Ensure the customer understands how to establish a secure cloud
    first infrastructure
  - Showcase AADP capabilities via scenario and feature overviews,
    deployment plans, adoption kits, demos, and other content.  

#### FTOP Tasks

| Task ID | Task Name                             | (M)andatory / (O)ptional | FastTrack Role | Services |
| ------- | ------------------------------------- | :----------------------: | :------------: | -------- |
|  2533   | Azure AD Premium – Technical Workshop |            M             |      SME       | AADP     |

### Device Security

Primary Role: **SME**  
Motions: **Customer Health / RFA / Targeting**  
Applies To: **Intune / MDATP / Windows 10**

Help customers protect their data while maintaining productivity for
employees on the devices and apps they choose. Mobile Devices Management
(MDM) can provide integrated data protection and compliance capabilities
that let you be precise about what data different users can access as
well as what they can do with the data within Office and other mobile
apps.  

  - ​Understand the different platforms the customer is looking to
    manage and protect
  - Define comprehensive policies that protect the applications, data,
    and devices​

[Microsoft Defender Advanced Threat Protection
(MDATP)](https://docs.microsoft.com/en-us/windows/security/threat-protection/microsoft-defender-atp/microsoft-defender-advanced-threat-protection)
is a unified endpoint security platform for preventative protection,
post-breach detection, and automated investigation and response.
In-scope features: **Threat Vulnerability Management (TVM)** uses a
risk-based approach to the discovery, prioritization and remediation of
endpoint vulnerabilities and misconfigurations. **Attack Surface
Reduction (ASR)** eliminates risky or unnecessary surface areas and
restricts dangerous code from running. **Next generation protection**
leverages machine learning and deep analysis to protect against
file-based and file-less malware. **Endpoint Detection and Response
(EDR)** monitors behaviors and attacker techniques to detect and respond
to advanced attacks. **Auto investigation and remediation** leverages
artificial intelligence to automatically investigate alerts and
remediate complex threats in minutes. **Security posture** provides
real-time visibility and helps identify ways to improve a customer’s
security score.  

#### FTOP Tasks

| Task ID | Task Name                                               | (M)andatory / (O)ptional |  FastTrack Role   | Services   |
| ------- | ------------------------------------------------------- | :----------------------: | :---------------: | ---------- |
| 2460    | Intune - Conduct Microsoft Intune Workshop              |            M             | FastTrack Manager | Intune     |
| 4084    | Intune - Conduct Microsoft Modern Management Assessment |            M             |        SME        | Intune     |
| 4079    | MDATP Business Value Deck                               |            M             | FastTrack Manager | MDATP      |
| 4078    | MDATP – Position MDATP over 3rd Party AV                |            M             |        SME        | Windows 10 |
| 4085    | Deliver MDATP BVD                                       |            O             |        SME        | Intune     |

### Information Security

Primary Role: **FastTrack Engineer**  
Motions: **Customer Health / RFA / Targeting**  
Applies To: **Exchange / OneDrive for Business / Outlook Mobile /
SharePoint / OATP**

Securing customer information or data is an important requirement for
establishing a security baseline. ​Before the customer moves their
sensitive and most valuable digital assets to the cloud, we need to make
sure they have a clear understanding of the information classification
and protection needed to ensure their sensitive data is secure.​

  - Identify what information the customer wants to protect
  - Determine and establish access, retention and information protection
    policies  

#### FTOP Tasks

| Task ID | Task Name                                                 | (M)andatory / (O)ptional |   FastTrack Role   | Services                                      |
| ------- | --------------------------------------------------------- | :----------------------: | :----------------: | --------------------------------------------- |
| 3747    | Exchange Online Protection Workshop                       |            M             | FastTrack Engineer | Exchange                                      |
| 3748    | Data Loss Prevention Workshop                             |            O             | FastTrack Engineer | Exchange / OneDrive for Business / SharePoint |
| 3749    | Office 365 Message Encryption Workshop                    |            O             | FastTrack Engineer | Exchange                                      |
| 3750    | Office 365 Advanced Threat Protection Business Value Deck |            O             | FastTrack Manager  | Exchange / OATP                               |
| 3997    | MIP – MIP Workshop                                     |            M             | SME  | AIP                                           |

## Key Inputs

  - M365 Security Conversation completed
  - Deploy Securely tasks completed​​  

## Key Outputs

  - Customer enables Exchange Online Protection and Azure Information
    Protection, Azure Active Directory settings and Azure Information
    Protection, as applicable to their licensing.
  - Customer enables additional features per their organizational policy
    related to security and compliance.
  - Document the areas the customer doesn't plan to enable along with
    the reasons why.​  
      

## Next Steps

  - Based on identified workloads to onboard, proceed to [Conduct
    Services
    Workshops​](./assess-conduct-services-workshops.md).  
  - If no workshops are required, proceed to [Address Technical
    Gaps​](./remediate-address-technical-gaps.md).  

## Refresh Summary

| Date       | Who Changed   | What Changed                    |
| ---------- | ------------- | ------------------------------- |
| 10/25/2019 | Ryan Meehan   | Added tasks 4078, 4079, 4084    |
| 10/25/2019 | Ryan Meehan   | Renamed Identity Security Step  |
| 7/26/2019  | Rosie Arrieta | Added Device and Identity steps |
| 5/31/2019  | Rosie Arrieta | Published process               |
