---  
# required metadata  
title: FastTrack Playbook - Conduct Security Workshops  
description: FastTrack Playbook - Conduct Security Workshops  
author: Ryan Meehan  
ms.author: ryanme  
manager: eduardod  
ms.date: 4/29/2020  
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

**Step Inputs (the checklist of items you should collect to be successful with this step)**
- Engagement Management note(s) documenting the following: 
    - M365 Security Conversation deck was delivered to the customer
    - #AADP to indicate the customer has interest in this product 
    - If a Threat Check had been scheduled and / or delivered by a Partner 
        - If a Threat Check has not been scheduled or delivered by a Partner, a Quick Lead request was submitted 
    - Authentication method selected and/or implemented by customer
        - Cloud Authentication,
        - Azure AD password hash synchronization
        - Azure AD Pass-through Authentication
        - Federated Authentication  
    - Device Platforms being used by the customer
        - Windows
            - Is SCCM present?
        - iOS 
        - macOS
        - Android

**Step Outputs (the set of items you should make sure are documented to successfully exit this step)**
- Technical Enablement note documenting the following: 
    - Key customer scenarios for identity security
        - Secure Foundation Infrastructure
        - Production Management 
        - Monitoring and Reporting
        - Governance
        - Compliance and Audits
        - Automations 
    - Which AADP features the customer plans to or has enabled – to support their key scenarios for identity
        - Which AADP features the customer will not enable – and why  
    - Which enrollment methods the customer has on mind
        - Corporate-Owned
        - Bring your own device (BYOD)
    - Key customer scenarios for Device Management
        - Azure AD Joined/Co-Managed
        - Hybrid Azure joined/Co-Managed  


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
endpoint vulnerabilities and misconfigurations. **Attack Surface Reduction (ASR)** eliminates risky or unnecessary surface areas and
restricts dangerous code from running. **Next generation protection**
leverages machine learning and deep analysis to protect against
file-based and file-less malware. **Endpoint Detection and Response (EDR)** monitors behaviors and attacker techniques to detect and respond
to advanced attacks. **Auto investigation and remediation** leverages
artificial intelligence to automatically investigate alerts and
remediate complex threats in minutes. **Security posture** provides
real-time visibility and helps identify ways to improve a customer’s
security score.  

**Step Inputs (the checklist of items you should collect to be successful with this step)**
- Engagement Management note(s) that documents the following: 
    - What are the in-scope devices to be deployed 
    - Cloud attach assessment complete - if applicable 
    - Will customer be cloud attached, tenant attached or a combination 
    - In-scope remediation checklists have been delivered and reviewed with the customer
    - Project risks such as blockers, out of scope items, customer task constraints, etc.
    - Confirmation customer is eligible for MDATP – if applicable 
    - Current Customer Contacts updated in FTOP responsible for security   

**Step Outputs (the set of items you should make sure are documented to successfully exit this step)**
- Engagement Management note(s) that documents the following:
    - Platforms (iOS, Android, Windows et. al) customer is looking to manage and protect 
    - Confirmation that Microsoft Intune workshop was delivered to customer 
    - Intune deployment scenarios of customer interest
        - Intune App Protection – Formerly known as mobile application management (MAM)
        - Selective wipe
        - Outlook Mobile 
        - Intune mobile device management (MDM) 
        - Conditional access 
        - Co-management
        - Autopilot 
        - App Assure
        - Stay current 
    - Which Intune capabilities of customer interest 
    - MDATP workshop delivered to customer 
        - ATP SME requested – if customer interested in moving forwards with MDATP
- Technical Enablement note(s) documenting the following: 
    - Get Modern Assessment workshop delivered to customer
- Environment note(s) documenting the following:
    - Customer’s current of version of Configuration Manager and if upgrade is needed to current version for future upgrade of Windows devices
    - Customer’s current version of Windows enabled and if upgrade is needed to current version of Windows 10
    - Customer scenario of for managing device security - cloud attach (co-management) or cloud only 
    - (If applicable) 3rd party client management tool used by client 


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
  - Determine and establish access, retention and information protection policies  

**Step Inputs (the checklist of items you should collect to be successful with this step)**
- Engagement Management note(s) that documents the following:
    - DIBS for workloads/services of customer interest 
    - M365 Security Conversation deck was delivered to the customer
    - (If applicable) outline workloads/services of customer interest where Information Security is relevant to help customer establish security baseline for its information and data – and the type of information and date to be secured Confirmation that customer is eligible for AIP – if applicable  

**Step Outputs (the set of items you should make sure are documented to successfully exit this step)**
- Technical Enablement note documenting the following: 
    - (If applicable) Delivered Office 365 Advanced Threat Protection Business Value Deck to the customer
    - Customer interested to move forward with OATP
- Technical Enablement note(s) documenting the following:
    - Delivered the Exchange Online Protection (EOP) Workshop to the customer
    - Customer’s EOP deployment scenario 
        - Stand alone
        - Hybrid
        - Exchange Online
    - (If applicable) customer migrating from a 3rd party to EOP and what 3rd party
    - (If applicable) customer enabling Directory Synchronization or not
    - (If applicable) Delivered Data Loss Prevention workshop to the customer 
        - Customer has interest in enabling Data Loss Prevention (DLP) and for which workloads 
        - Which DLP features customer has interest to enable
    - (If applicable) Delivered Office 365 Message Encryption workshop to the customer 
        - Customer has interest in enabling Office 365 Message Encryption (OME) 
    - Delivered the MIP workshop deck to the customer  
        - Which MIP features customer interested to enable  

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
