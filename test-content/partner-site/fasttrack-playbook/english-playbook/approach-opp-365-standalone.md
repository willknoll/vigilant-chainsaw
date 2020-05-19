---  
# required metadata  
title: FastTrack Partner Playbook - Office 365 ProPlus Standalone Deployment
description: FastTrack Partner Playbook - Office 365 ProPlus Standalone Deployment 
ms.author: v-cekenn
manager: pagrim
ms.date: 10/01/2019  
ms.topic: partner-playbook  
ms.prod: non-product-specific  
ms.custom: partner-playbook  
ft.audience: partner
ft.owner: pagrim
---   

# Office 365 ProPlus Standalone Deployment

## Overview

The primary driver of Office 365 ProPlus MAU in FY20 will be the Get Modern motion, which includes both Windows 7/8.1 to Windows 10 upgrade & Office 365 ProPlus deployment using System Center.

This guide is designed for FastTrack Engineers, with support from FastTrack Managers & OPP SMEs, to guide customers through deployment of Office 365 ProPlus without Windows upgrade.

**In some cases, steps can be bypassed if the relevant topic is completely addressed/remediated.**

## Objectives

The following is a list of objectives for this playbook:

  - **Use of steps that align to where the customer is with their deployment of Office 365 ProPlus.** In some cases, steps can be bypassed if the relevant topic is completely addressed/remediated.
    Piloting is recommended to prevent support cases from untested deployments.

  - **Ensuring customers deploy to 70%+ and use the latest cloud connected Office client applications** in organizations is critical as we continue to support our customers as they prepare for Office
    2010 end of support and through their digital transformation journey.

  - Office 365 ProPlus is of strategic importance to Microsoft among competition as we shift our customers to the cloud with Microsoft 365.

## Office 365 ProPlus WorkFlow  

[![office-proplus-complete-processv3](media/office-proplus-complete-processv3.PNG)]

## Playbook Processes

- [Conduct Services Workshops](assess-conduct-services-workshops-partner.md)
- [Conduct Adoption & Change Management Customer Conversation](assess-conduct-adoption-and-change-management-conversation-partner.md)
- [Conduct Technical Assessment](assess-conduct-technical-assessment-partner.md)
- [Enable Services](enable-enable-services-partner.md)

## Deployment

Primary Role: **FastTrack Engineer**  
Applies To: **Office 365 ProPlus (without Windows 10 upgrade)**

At any time should your engagement become delayed, blocked or you otherwise require additional support executing this playbook, request an OPP SME using the [FastTrack Resource Request Tool](https://aka.ms/FRPHubSMERequestProcess).
This team of dedicated OPP subject matter experts are available to support the at scale motion but at no time do they replace the role of the FastTrack Manager, Engineer or Architect.

### 1. Office 365 ProPlus Technical Assessment & Planning

The assessment workshop guides the customer to discover and plan the Office 365 ProPlus deployment. During the workshop it will inform the important decision points for the Office 365 ProPlus deployment. The workshop provides the discussion to identify decision points for the customers. Use the [assessment workshop deck](https://fasttrack-docs.microsoft.com/collateral/M365-O365-O365ProPlus.html#assessment-workshop). Delivery of the workshop should
include the IT team responsible for the Office 365 ProPlus deployment. Customers can be directed to the [Office Deployment Guide](https://docs.microsoft.com/DeployOffice/deployment-guide-for-office-365-proplus)
and uses a consistent structure for further supporting resources.

### 2. Adoption and Change Management Conversation

> The FastTrack Manager should use the ACM Guidance as needed to > ensure the customer has the relevant materials to help inform end users, they are deploying Office 365 ProPlus. Use the OPP BVD or the Objection Handlers to address any misconceptions on Office 365 ProPlus benefits over previous versions. This discussion can be used later in the deployment, if needed, to get the customer moving again should they stall.

### 3. Office Readiness Toolkit Assessment
 
### 4. ORT through SCCM or stand-alone should be ran by the customer to evaluate any custom/3rd party macros or add-ins that are incompatible with 64-bit Office 365 ProPlus. The FastTrack Engineer should review these results to identify the business-critical processes that could be impacted. Consult a SME as needed to ensure the ORT tool completes, or to help identify extra remediation options.

### 5. Create Remediation Checklist

Use the Remediation Questionnaire and Checklist to provide the customer with deployment guidance for any/all FTC supported services. The Government Community Cloud (GCC) High/Department of Defense (DOD) version should be used for GCC High/DOD customers. To ensure you have the latest content, download a new copy each time. To generate a final checklist, start by filling out the questionnaire (tab) for the appropriate service(s), Guidance for services that are not in scope will be hidden in the final checklist. In order to track usage, please email a completed copy of the XLS to: [d4cf4a2d.microsoft.com@amer.teams.ms](mailto:d4cf4a2d.microsoft.com@amer.teams.ms)

### 6. Confirm the customer reviews & resolves anything in the remediation checklist

For more details consult [Remediation](phase-remediate.md)

### 7. Deploy Office 365 ProPlus

In the deploy phase use the results of the assessment to guide the customer to build the identified packages and prepare these packages for delivery.

Guide the customer to build the package configuration file using the Office Configuration Tool ([https://config.office.com](https://config.office.com/)) or through the Office 365 client option if the customer will be deploying the package with Configuration Manager. The settings for configuration will be available from the decisions made in the assessment activities, including update channel, languages, etc.

After the packages are built FastTrack now provides guidance as the customer begins deploying the packages to the targeted groups of users. The customer is responsible for delivering the packages in their
selected deployment tooling. FastTrack can provide guidance to assist in this activity.

FastTrack will continue tracking deployment and use progress together with the customer in follow-on sessions to help ensure the customer continues the roll-out.

It is not recommended to use the deployment wizard to facilitate this activity.

## Accelerate

Primary Role: **FastTrack Engineer**  
Secondary Roles: **FastTrack Manager, SME, GM FTA, OPP Ranger**  
Applies To: **Office 365 ProPlus (without Windows 10 upgrade)**
 
**Acceleration:** Customers that are currently deploying or have stalled their deployments, and FastTrack assistance is needed to get them moving again. They likely had a deployment plan, but something went wrong, or they change priorities.
 
FastTrack will continue tracking deployment and use progress together with the customer in follow-on sessions to help ensure the customer continues the roll-out. The customer is not considered "healthy" or fully deployed until they reach 70% MAU.

\*Any customer that drops below 3% growth over 3 months (and under 70%) could trigger follow up from OPP SMEs to ensure growth is accelerated. At this point the FM, FE, and SME should discuss the status of the customer to understand how to get them back on track.

1. Determine the reason for stalled MAU & follow the corresponding action plan

  - Technical impediment
    
    1.  Engage an OPP SME to assist if not already engaged
    
    2.  Triage the customers impediment against known solutions and the Get Modern SME community
    
    3.  Partner with the customer to resolve their impediment
        
        -  Create FTC insight as needed
        
        -  Engage App Assure for Add-in or performance issues
    
    4.  If the impediment cannot be resolved, document the impediment in Engagement Management notes and update L1 to Blocked

  - Adoption / Change Management impediment
    
    1. Mini-ACM workshop to help identify specific impediment & resolve

  - Customer resource impediment
    
    1. If more depth ACM is needed, route to ACM Quick leads (See relevant task guidance)

- Recover diminished priority from customer
- 
    1. Engage GM FTA if attached

    2. Engage ATS/ATU

2.  Update Office 365 ProPlus - OPP Accelerator task if Acceleration efforts are performed to get a customer moving from a previously stalled status. This task will be used to track ongoing efforts to maintain Office 365 ProPlus deployments to 70%+ MAU.

#### FTOP Tasks

| Task ID                                        | Task Description                                                                 | (M) Mandatory (O) Optional | FastTrack Role |
| ---------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------- | -------------- |
| 3080   | Office 365 ProPlus Assessment Workshop  | M    | FE             |
| 3738   | Office 365 ProPlus - Deliver Pitch Deck | M    | FM             |
| 3070   | Create Remediation Checklist            | M    | FE             |
| 3190   | Confirm the customer reviews & resolved anything in the remediation checklist    | M  | FE  |
| 1247   | Deploy Office 365 ProPlus               | M    | FE             |
| 3650   | Office ProPlus – OPP Acceleration      | O    | FM             |

## Key Inputs

  - Customer has intent to deploy Office 365 ProPlus

## Key Outputs

  - Office 365 ProPlus deployment complete

## Next Steps

  - Continue to support the customer until fully deployed with AU \> 70%.

## Data Collected

| Data Field/Common Name           | Required for this Process | First Entered into FTOP |
| -------------------------------- | ------------------------- | ----------------------- |
| L1 – Consumption Status          | Yes                       | Yes                     |
| L2 – Entitlements                | Yes                       | Yes                     |
| Engagement Scenario              | Yes                       | Yes                     |
| Engagement Management Notes (FM) | Yes                       | Yes                     |
| Technical Enablement Notes (FE)  | Yes                       | Yes                     |
| Enterprise Notes (FTA)           | No                        | Yes                     |

> [!Note]
> *See [FastTrack Service Description](https://docs.microsoft.com/en-us/fasttrack/m365-eligible-services-and-plans) for specific license eligibility details.

## Refresh Summary

|Date|Who Changed|What Changed|
|---------|---------------|----------------------------|
|03/25/2020| Celia Kennedy| General Maintenance|
|10/01/2019| Celia Kennedy| General Maintenance|

[Home](http://partner-docs.microsoft.com)
