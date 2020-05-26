---  
# required metadata  
title: FastTrack Partner Playbook - Get Modern FTC Engagement
description: FastTrack Partner Playbook - Get Modern FTC Engagement
author: Celia Kennedy
ms.author: v-cekenn 
manager: pagrim
ms.date: 9/06/2019  
ms.topic: partner-playbook  
ms.prod: non-product-specific  
ms.custom: partner-playbook  
ft.audience: partner
ft.owner: pagrim
---   
# Get Modern - FastTrack Center Engagement

## Overview

The FY20 Get Modern motion is designed for FastTrack Engineers, with support from FastTrack Managers & Get Modern Subject Matter Experts (SMEs), to guide qualified customers through the Windows 7/8.1 to Windows 10 upgrade process as well as deploying Microsoft 365 Apps using System Center.  

For customers who are interested or have requested assistance staying current with Windows 10 and Microsoft 365 Apps, our Get Modern Subject Matter Experts are available to assist with the optional steps in this motion (steps 7 – 9).  

For customers who need assistance to migrate data to OneDrive for Business can obtain guidance to setup and leverage OneDrive for Business ahead of the Window 10 upgrade.

## Objectives

The following is a list of objectives for this approach:

- **Keeping our customers secure and helping them to shift to Windows 10** is imperative.
- As we help customers get modern with Microsoft 365, securing endpoints with Windows 10 is also of strategic importance to Microsoft in a competitive landscape.
- **Ensuring customers deploy and use the latest cloud connected Office client applications** in organizations is critical as we continue to support our customers as they prepare for Office 2010 end of **support and through their digital transformation journey.**
- Microsoft 365 Apps is of strategic importance to Microsoft among competition as we shift our customers to the cloud with Microsoft 365.

## Approach

Primary Role: **FastTrack Engineer, SME**  
Applies To: **Windows 10, Microsoft 365 Apps**

## Approach

Primary Roles: **FastTrack Manager; FastTrack Engineer; SME**  
Applies To: **Windows 10 & Microsoft 365 Apps**

If an engaged FE is confident in their understanding, capabilities to deliver the Get Modern motion the FE should be empowered to continue with the engagement. However, if the engagement becomes stalled, blocked, or the FE requires any additional support executing this playbook, the FE shall request a Get Modern SME (Microsoft 365 Apps and/or Windows SME) using the [FastTrack Resource Request Tool](https://aka.ms/FRPHubSMERequestProcess).

The Get Modern SME team is a dedicated team of Windows and Microsoft 365 Apps SMEs that is available to support at scale motion. The SMEs are adjunct resources to the capabilities of the FastTrack delivery, but at no time do they replace the roles of the FastTrack Manager, Engineer or Architect.

### 1. Conduct Initiate/Kickoff Meeting 

For new/re-engaged customers who have yet to have a kickoff meeting, use the kickoff deck to set the right expectations around the FastTrack Benefit, Modern Workplace with security as a baseline for success and determine what services the customer wants to deploy.

- Enterprise level customers could already have a detailed multiple division plan collected from FA/FTA.

- Check Overall status notes to see if details are collected in FTOP Documents repository. 

- This extra detail will complement the overall details from task 4021 

For existing customers that have become eligible for Windows 10 deployment assistance, use the kickoff deck (in reduced capacity) to set the right expectations around the FastTrack Benefit, Modern Workplace with security as a baseline for success and determine what services the customer wants to deploy. 

- Follow resource request process to add a Windows 10 deployment SME to your engagement. 

- Windows 10 deployment by FastTrack requires SCCM at current branch, yet this SCCM upgrade is out of scope in our benefit. Use partner referral process to support SCCM upgrade.

- Kickoff deck has supporting slides for Windows 10 scope and windows 10 Partner- led services available.

### 2.  [Get Modern Technical Assessment & Planning](http://aka.ms/ftgetmodernassessment)

Deliver the Get Modern Technical Assessment workshop to begin the customers desktop deployment project with an inventory of their devices and apps, assisting them to prioritize what they want to move forward, test prioritized apps and devices, then remediate what's needed to get ready for deployment. They can perform their app assessment leveraging their current System Center processes/tools including software inventory (discovery), software metering (usage), etc. Identifying who owns application and vendor support is equally critical. Keep in mind that as they assign app owners and test, this is NOT throw-away work--this should lay the operational foundation for managing future Windows 10 & Microsoft 365 Apps updates, reducing risk and increasing testing efficiency.

Enable the Microsoft 365 Apps upgrade readiness dashboard in Configuration Manager to enable customers to obtain an assessment of Office.

Add-in readiness, Add-in support statements, Add-ins inventory, inventory of devices that have macros, and macro upgrade readiness.

### 3. Enable Desktop Analytics

The following are the expected actions to be delivered as part of the FTOP task Get Modern - Enable Desktop Analytics. 

- A. Introduce the customer to Desktop Analytics. 

    - i. In this activity you will introduce the customer to Desktop Analytics sharing the benefits and use case of DA to provide intelligence to plan the deployment for Windows 10. Leverage the deck at [https://aka.ms/FTDesktopAnalytics](https://aka.ms/FTDesktopAnalytics) to facilitate this action. Where possible including a live demo is preferred, or use the demo video available at [https://aka.ms/FTDADemo](https://aka.ms/FTDADemo) (demo video from training) to show the product capabilities. If the customer is already using Windows Analytics this can be expedited by positioning DA as the evolution of Windows Analytics. 

    - ii. Outcome: Secure agreement to proceed with enablement of Desktop Analytics. 

- B. Guide the customer to enroll and setup Desktop Analytics

    - i. Following the FastTrack DA setup Step-by-Step Guide at [https://aka.ms/sbsDASetup](https://aka.ms/sbsDASetup) to guide the customer administrator through the steps to enable Desktop Analytics for use Get Modern motion (provide the public facing documentation URL [https://docs.microsoft.com/sccm/desktop-analytics/set-up](https://docs.microsoft.com/sccm/desktop-analytics/set-up). Refer to the step-by-step guide for the pre-requisites for delivery and expected delivery assistance. Note: if needed you can also provide the Interactive Guide explaining how to setup Desktop Analytics (see: [https://content.cloudguides.com/guides/Setting%20up%20Desktop%20Analytics](https://content.cloudguides.com/guides/Setting%20up%20Desktop%20Analytics)). 

    - ii. **Outcome**: The outcome of this activity will be successful preview enrollment and initiation of data collection in DA.

- C. Guide the customer to create an initial Desktop Analytics Deployment Plan

    - i. Following enablement and data collection assist the customer to begin their first [Desktop Analytics Deployment Plan](https://docs.microsoft.com/en-us/sccm/desktop-analytics/about-deployment-plans). Leverage the steps in the [DA docs Deployment Plan guide](https://docs.microsoft.com/sccm/desktop-analytics/create-deployment-plans) to scope the expected activities. The customer will responsible to determine and apply the importance of the detected applications. 

    - ii. **Outcome**: Customers have a working Desktop Analytics Deployment Plan and set of identified pilot devices for Windows 10. 

### 4.  Create Remediation Checklist

Use the Remediation Questionnaire and Checklist to provide the customer with deployment guidance for any/all FTC supported services. The GCC High/DOD version should be used for GCC High/DOD customers. To ensure you have the latest content, download a new copy each time. To generate a final checklist, start by filling out the [questionnaire](https://ftdocs-bcm.azureedge.net/public/playbook-remediation-checklist-v1) for the appropriate service(s). Guidance for services that are not in scope will be hidden in the final checklist. In order to track usage, please email a completed copy of the XLS to [Microsoft](d4cf4a2d.microsoft.com@amer.teams.ms).

### 5. Review the Remediation Checklist with the customer for action items

Follow standard procedure.

### 6. Confirm the customer reviews & resolved anything in the remediation checklist

Follow standard procedure.

### 7. Meet with Customer PM and Customer Tech Leads to enable Core and Services 

Follow standard procedure.

### 8.  Upgrade from Windows 7/8.1 to Windows 10 Enterprise

For upgrading your Windows 7/8.1 devices to Windows 10, we recommend customers utilize their existing processes to maintain consistency and predictability. If they don't have an existing process the recommended path for deploying Windows 10 leverages the Windows installation program (Setup.exe) to perform an in-place upgrade, which automatically preserves all data, settings, applications, and drivers from the existing operating system version. This requires the least IT effort because there is no need for any complex deployment infrastructure.

**Process for delivery:**

Using the guidance for step 1c in the [Get Modern Deploy and Maintain Implementation Guidance](https://aka.ms/GetModernEnglishDeployandMaintainGuidance), guide the customer through deploying Windows 10.

For upgrading your Windows 7/8.1 devices to Windows 10, we recommend customers utilize their existing processes to maintain consistency and predictability. If they don't have an existing process the recommended path for deploying Windows 10 leverages the Windows installation program (Setup.exe) to perform an in-place upgrade, which automatically preserves all data, settings, applications, and drivers from the existing operating system version. This requires the least IT effort, because there is no need for any complex deployment infrastructure. Using the [Step by Step In-Place Upgrades documentation](https://aka.ms/GetModernStepbyStepIn-PlaceUpgrades) guides the customer through the following steps:

1. Plan the task sequence
2. Configure upgrade conditions
3. Deployment options
4. Monitor deployment

### 10. Deploy Microsoft 365 Apps with System Center

Configuration Manager scales for large environments and provides extensive control over installation, updates, and settings. It also has built-in features to make it easier and more efficient to deploy and manage Microsoft 365 Apps. We recommend deploying Microsoft 365 Apps to ensure you always have the most up-to-date modern productivity tools from Microsoft. When deploying with the Office Client Management dashboard in Configuration and the integrated Office 365 Installer wizard, you can manage updates with Configuration Manager.

**Process for delivery:**

Use the required data collected from the assessment phase to help the customer build their deployment package. *Preferred method of deployment is SCCM, but installing/upgrading SCCM is out of scope.

1. Assign end user licenses using O365 user administration portal or PowerShell. [Powershell guidance](https://docs.microsoft.com/en-us/office365/enterprise/powershell/assign-licenses-to-user-accounts-with-office-365-powershell)
2. Assist the customer in building the Microsoft 365 Apps Deployment package either locally or by cloud distribution.
    
    a. SCCM Package [SCCM guidance](https://docs.microsoft.com/en-us/DeployOffice/deploy-office-365-proplus-with-system-center-configuration-manager#step-3---create-and-deploy-the-office-application-to-the-pilot-group)
    
    b. Local source deployment with the Office 365 Deployment tool [Local source ODT guidance](https://docs.microsoft.com/en-us/deployoffice/deploy-office-365-proplus-from-a-local-source)
    
    c. Deploy from the cloud with the Office Deployment tool [Cloud ODT guidance](https://docs.microsoft.com/en-us/DeployOffice/deploy-office-365-proplus-from-the-cloud)
    
    d. Self-install from the cloud Self-install [Office from the cloud](https://support.office.com/en-us/article/download-and-install-or-reinstall-office-365-or-office-2019-on-a-pc-or-mac-4414eaaf-0478-48be-9c42-23adc4716658?ui=en-US&rs=en-US&ad=US)

3. Test the package deployment with **pilot devices.**
4. Once deployment is applied to **general purpose devices** or **business essential devices**- meaning broad deployment has been started- **enablement is complete,** and the task should be marked as complete.

### 11.  Cloud Management

For Get Modern customers that indicate intent or interest in either Cloud Management or Intune Co-Management "Cloud-Attach" for managing their Windows devices, if it has been confirmed by the FE/FTA that the customer's Configuration Manager environment is already on current branch or is in process for being upgraded, the FM/FE should request a EMS SME assistance using the [FastTrack Resource Request Tool](https://aka.ms/FRPHubSMERequestProcess).

### 12. Optimize Windows 10 & Office Update Delivery with System Center

A successful path to getting and staying up to date with Windows 10 and Microsoft 365 Apps starts with a good content distribution strategy. Microsoft has invested significantly to address concerns about the size of updates. There are several technologies available to help reduce bandwidth and network load to optimize update delivery. In this step explain these technologies, compares them, and provides recommendations to help your customer decide which one to use. 

### 13. Windows 10 Phased Deployment with System Center

In place of a disruptive shift in technology every few years, you will continually be bringing **new capabilities, experiences and protections** to your users. Semi-annual feature updates deliver new capabilities in the Fall and Spring of each year, while monthly cumulative Quality Updates will contain security, reliability and bug fixes. **For customers unable to take semi-annual updates, our recommendation is to consume, annually, the Fall update**. 

### 14. Microsoft 365 Apps Phased Deployments with System Center

Like Windows, the client applications that are included with Office 365 are released regularly with updates that provide new features and functionality together with security and other updates. You can use Configuration Manager to update Microsoft 365 Apps. System Center Configuration Manager can manage Office 365 client updates by using the Software Update management workflow. 

The Get Modern SME team is a dedicated team of Windows and Microsoft 365 Apps SMEs that Is available to support at scale motion. The SMEs are adjunct resources to the capabilities of the FastTrack delivery, but at no time do they replace the roles of the FastTrack Manager, Engineer or Architect.

## FTOP Tasks  

| **Task ID** | **Task Description** | **(M) Mandatory (O) Optional** | **FastTrack Role** |
| - | - | - | -|
| 994  | Conduct Initiate/Kickoff Meeting(s) | M | FM |
| 4021 | [Get Modern Assessment Workshop](https://aka.ms/frpgetmodernassessmentworkshop) | M | FE |
| 4068 | Enable Desktop Analytics | M | FE |
| 3070 | Create Remediation Checklist | M | FE |
| 1049 | Review Remediation Checklist with customer for action items | M | FE |
| 1699 | Technical Assessment Complete: Deployment Plan including Remediation Checklist delivered to customer | M  | FM |
| 3190 | Confirm the customer reviews & resolved anything in the remediation checklist | M | FE |
| 1700 | Remediate Exit: All items in Remediation Checklist resolved | M | FM |
| 1126 | Meet with Customer PM and Customer Tech Leads to enable Core and Services | M | FE |
| 4024 | Upgrade from Windows 7/8.1 to Windows 10 | M | FE |
| 1247 | Deploy Microsoft 365 Apps | M | FE |
| 4031 | Optimize Windows 10 & Office Update Delivery with System Center | O | SME |
| 4032 | Windows 10 Phased Deployment with System Center | O | SME |
| 4033 | Microsoft 365 Apps Phased Deployments with System Center | O | SME |
| 3690 | Identify Survey Contact | M | FM |
| 1701 | Enablement Complete: All in-scope services enabled; migration tools configured | M | FM |

## Key Inputs  

- Customer qualifies for FastTrack Get Modern benefit  
- Customer has intent to upgrade to Windows 10  

## Key Outputs  

- Windows 10 upgrade complete  
- Microsoft 365 Apps deployment complete  
- Windows 10 and Microsoft 365 Apps phased deployments using System Center in place  

## Next Steps  

Continue to support the customer until fully deployed with AU > 70%.  

## Data Collected

| Data Field / Common Name | Required for This Process | First Entered into FTOP |
| - | - | - |
| Engagement Scenario | Yes | Yes |
| Engagement Management Notes (FM) | Yes | Yes |
| Technical Enablement Notes (FE) | Yes | Yes |
| Enterprise Notes (FTA) | No | Yes |
| Account Team Contacts | Yes | Yes |
| Customer Contacts | Yes | Yes |

### Refresh Summary

|Date|Who Changed|What Changed|
|---------|---------------|----------------------------|
|05/12/2020| James Collins| General Maintenance|
|03/25/2020| Celia Kennedy| General Maintenance|
|10/01/2019| Celia Kennedy| General Maintenance|

[Home](http://partner-docs.microsoft.com)
