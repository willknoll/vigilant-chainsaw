---  
# required metadata   
title: FastTrack Partner Playbook - Conduct Security Workshops  
description: FastTrack Partner Playbook - Conduct Security Workshops  
author: Ryan Meehan
ms.author: v-cekenn
manager: pagrim
ms.date: 10/01/2019  
ms.topic: partner-playbook  
ms.prod: non-product-specific  
ms.custom: partner-playbook  
ft.audience: partner  
ft.owner: pargim
---  
# Conduct Security Workshops

Phase: **Assess**  

## Overview
The Conduct Security Workshops process continues the relationship between the FastTrack Center (FTC) and the customer with security at the center of the engagement. This is where the FTC continues to work with the customer to ensure the customer defines and achieves​ their desired security posture.  

## Objectives

  - Assess customer's current security posture for Identity, Device and Information Security.
  - Customers understand what is available to them to secure their organization's digital assets and how to conduct daily investigations for security concerns.  
  - Customer enables the applicable security features to protect their digital assets.  

## Approach

### Identity Security

Primary Role: **SME**  
Applies To: **AADP**

Securing identities is critically important and needs to be addressed as part of establishing a security baseline. We need to ensure customers have a clear understanding of the types of identity security available via AADP to preven​t user credential compromises, and that those users are managed according to the customer needs and security best practices.  

  - Review modern authentication options for the customer and scenarios
  - Ensure the customer understands controls available via AADP features like Conditional Access (CA), Multi-Factor Authentication (MFA), and Single Sign-on (SSO)  
  - Share AADP feature overviews, adoption kits, demos
  
### Azure AD Premium Feature Decks

Find links to all Azure AD Premium features currently supported in FastTrack that can be used to focus on the value of specific features in the Azure AD Premium suite by clicking [here](https://aka.ms/aadpfrptraining).

If your customer has interest in a particular feature, you may present and/or share these feature decks for quick, high level overviews and provide access to resources to learn more.

#### FTOP Tasks

| Task ID | Task Name                      | (M)andatory / (O)ptional | FastTrack Role | Services |
| ------- | ------------------------------ | :----------------------: | :------------: | -------- |
| 2533    | [Azure AD Premium - Technical Workshop](https://ftdocs-bcm.azureedge.net/public/azure-ad-technical-workshop-v1.pdf) |            M             |      SME       | AADP     |

### Device Security

Primary Role: **SME**  
Motions: **Customer Health / RFA / Targeting**  
Applies To: **Intune / MDATP / Windows 10**

Help customers protect their data while maintaining productivity for employees on the devices and apps they choose. Mobile Devices Management (MDM) can provide integrated data protection and compliance capabilities that let you be precise about what data different users can access as well as what they can do with the data within Office and other mobile apps.  

  - ​Understand the different platforms the customer is looking to manage and protect
  - Define comprehensive policies that protect the applications, data, and devices​

[Microsoft Defender Advanced Threat Protection (MDATP)](https://docs.microsoft.com/en-us/windows/security/threat-protection/microsoft-defender-atp/microsoft-defender-advanced-threat-protection)
is a unified endpoint security platform for preventative protection, post-breach detection, and automated investigation and response.

In-scope features: **Threat Vulnerability Management (TVM)** uses a risk-based approach to the discovery, prioritization and remediation of endpoint vulnerabilities and misconfigurations. **Attack Surface Reduction (ASR)** eliminates risky or unnecessary surface areas and restricts dangerous code from running. **Next generation protection** leverages machine learning and deep analysis to protect against file-based and file-less malware. **Endpoint Detection and Response (EDR)** monitors behaviors and attacker techniques to detect and respond to advanced attacks. **Auto investigation and remediation** leverages artificial intelligence to automatically investigate alerts and remediate complex threats in minutes. **Security posture** provides real-time visibility and helps identify ways to improve a customer's security score.  

#### FTOP Tasks

| Task ID | Task Name                                               | (M)andatory / (O)ptional |  FastTrack Role   | Services   |
| ------- | ------------------------------------------------------- | :----------------------: | :---------------: | ---------- |
| 2460    | Intune - Conduct Microsoft Intune Workshop              |            M             | FastTrack Manager | Intune     |
| 4084    | Intune - Conduct Microsoft Modern Management Assessment |            M             |        SME        | Intune     |
| 4079    | [MDATP Business Value Deck](https://aka.ms/mdatp-oatp-bvd)                               |            M             | FastTrack Manager | MDATP      |
| 4078    | MDATP – Position MDATP over 3rd Party AV                |            M             |        SME        | Windows 10 |
| 4085    | Deliver MDATP BVD                                       |            O             |        SME        | Intune     |

### Information Security

Primary Role: **FastTrack Engineer**  
Applies To: **Exchange / OneDrive for Business / Outlook Mobile /
SharePoint**

Securing customer information or data is an important requirement for establishing a security baseline. ​Before the customer moves their sensitive and most valuable digital assets to the cloud, we need to make sure they have a clear understanding of the information classification and protection needed to ensure their sensitive data is secure.​

  - Identify what information the customer wants to protect
  - Determine and establish access, retention and information protection policies  

#### FTOP Tasks

| Task ID | Task Name                                      | (M)andatory / (O)ptional |   FastTrack Role   | Services                                      |
| ------- | ---------------------------------------------- | :----------------------: | :----------------: | --------------------------------------------- |
| 3747    | Exchange Online Protection Workshop            |            M             | FastTrack Engineer | Exchange                                      |
| 3748    | Data Loss Prevention Workshop                  |            O             | FastTrack Engineer | Exchange / OneDrive for Business / SharePoint |
| 3749    | Office 365 Message Encryption Workshop         |            O             | FastTrack Engineer | Exchange                                      |
| 3750    | [Office 365 Advanced Threat Protection Workshop](https://aka.ms/mdatp-oatp-bvd) |            O             | FastTrack Engineer | Exchange                                      |
| 3997    | [MIP Workshop](https://aka.ms/PartnerMIPWorkshopDeck)                                   |            M             | FastTrack Manager  | AIP                                           |

## Key Inputs

  - M365 Security Conversation completed
  - Deploy Securely tasks completed​​  

## Key Outputs

  - Customer enables Exchange Online Protection and Azure Information Protection, Azure Active Directory settings and Azure Information Protection, as applicable to their licensing.
  - Customer enables additional features per their organizational policy related to security and compliance.
  - Document the areas the customer doesn't plan to enable along with the reasons why.​

## Next Steps

  - Based on identified workloads to onboard, proceed to [Conduct Services Workshops](assess-conduct-services-workshops-partner.md)  
  - If no workshops are required, proceed to [Address Technical Gaps​](remediate-address-technical-gaps-partner.md)  

## Refresh Summary

| Date      | Who Changed   | What Changed                    |
| --------- | ------------- | ------------------------------- |
| 01/03/2020 | Celia Kennedy | Update Device Security, added BVD for Task 4079 and 3750 |
| 10/18/2019 | Celia Kennedy | Update Partner Playbook |
| 7/26/2019 | Rosie Arrieta | Added Device and Identity steps |
| 5/31/2019 | Rosie Arrieta | Published process               |

[Home](http://partner-docs.microsoft.com)
