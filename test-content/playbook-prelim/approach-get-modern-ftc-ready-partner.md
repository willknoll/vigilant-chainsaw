---  
# required metadata  
title: FastTrack Playbook - Get Modern 
description: FastTrack Playbook - Get Modern
ms.author: mareich  
manager: eduardod  
ms.date: 2/28/2020  
ms.topic: playbook  
ms.prod: non-product-specific  
ms.custom: internal-playbook  
ft.audience: internal  
ft.owner: mikelamb
---   
[!INCLUDE [Playbook Feedback](./includes/questions-feedback.md)]

# FastTrack Ready Partner (FRP) Approach

Program Managers: **Mike Lamb; Patric Grimwood; Renuka Iyer**  
  
## Overview 

The FY20 Get Modern FRP approach is designed for FastTrack Ready
Partners, with support from Get Modern & EMS Subject Matter Experts
(SMEs), to guide qualified customers through Windows 10 and Office 365
ProPlus deployments, including stay current update delivery optimization
and phased deployments using System Center &/or cloud management.

## Objectives

The following is a list of objectives for this playbook:

  - **Keeping our customers secure and helping them to shift to Windows
    10** is imperative as they **prepare for Windows 7 end of support in
    January 2020.**

  - As we help customers get modern with Microsoft 365, securing
    endpoints with Windows 10 is also of strategic importance to
    Microsoft in a competitive landscape.

  - **Ensuring customers deploy and use the latest cloud connected
    Office client applications** in organizations is critical as we
    continue to support our customers as they prepare for Office 2010
    end of **support and through their digital transformation journey.**

  - Office 365 ProPlus is of strategic importance to Microsoft among
    competition as we shift our customers to the cloud with Microsoft
    365.

## Approach

Primary Role: FastTrack Manager; **FastTrack Ready Partner; Get Modern FastTrack Architect; Get Modern / Intune FastTrack SMEs**  
Applies To: **Windows 10; Office 365 ProPlus; Intune**

If an engaged Partner is confident in their understanding, capabilities
to deliver the Get Modern motion the Partner should be empowered to
continue with the engagement. However, if the engagement becomes
stalled, blocked, or the Partner requires any additional support
executing this playbook, the Partner shall request a Get Modern or EMS
SME (Win10, OPP, or Intune) using the [FastTrack Resource Request Tool](https://microsoft.sharepoint.com/teams/ftccm/SitePages/FTC%20Resource%20Request.aspx)
or escalating through their PSM if no access to the tool.

The Get Modern SME team is a dedicated team of FastTrack experts that
are available to support the at scale approach. The SMEs are adjunct
resources to the capabilities of the FastTrack delivery, but at no time
do they replace the roles of the Partner.

In FY20 the 2 primary inputs to the Get Modern motion will include a
targeted list of high-opportunity customers and customer requests for
assistance (RFA).

### 1. Targeted Customers
    
FRP Partners will have first opportunity to deliver the FastTrack Get Modern benefit for those targeted customers who are already engaged with an FRP Partner through FastTrack. The FastTrack Gateway team will reach out to each impacted Partner FastTrack Manager and FRP Partner as we process our targeted list; FRP Partners will have 2 weeks to respond before the customer is passed to the FastTrack Center for engagement.

### 2. Windows 10 Partner Assessment

Check the [Microsoft 365 Partner Accelerator Customer Nomination Form](https://m365partneraccelerators.azurewebsites.net) to determine if the engagement qualifies and if so, nominate the customer to request funding.

### 3. [Get Modern Technical Assessment & Planning](https://aka.ms/ftgetmodernassessment)
    
If the customer does not qualify for the Windows 10 Partner Assessment, deliver the Get Modern Technical Assessment Workshop to begin the customers desktop deployment project with an inventory of their devices and apps, assisting them to prioritize what they want to move forward, test prioritized apps and devices, then remediate what’s needed to get ready for deployment. They can perform their app assessment leveraging their current System Center processes/tools including software inventory (discovery), software metering (usage), etc. Identifying who owns the application and vendor support is equally critical. Keep in mind that as they assign app owners and test, this is NOT throw-away work and should lay the operational foundation for managing future Windows 10 & Office 365 ProPlus updates, reducing risk and increasing testing efficiency. Enable the Office 365 ProPlus upgrade readiness dashboard in Configuration Manager to enable customers to obtain an assessment of Office Add-in readiness, Add-in support statements, Add-ins inventory, inventory of devices that have macros, and macro upgrade readiness.
    
Review cloud-attach (stage 3) and cloud only (stage 4) approaches with the customer. Stage 3 focuses on cloud-attaching Configuration Manager to Intune to enable complementary cloud value. This scenario will appeal to most FastTrack customers. It involves implementing co-management so that customers can maintain their existing Configuration Manager investment and integrate it with Intune. For customers that are interested in Intune and are not on Configuration Manager, are looking to move off of it, or are using a third-party client management tool (CMT), stage 4 – cloud only, is the appropriate scenario. It involves using Intune solely as the cloud management solution for all their endpoints.

### 4. Request an EMS SME using the [Resource Request Tool](https://aka.ms/ftcresourcerequest), if the customer has expressed an interest in cloud-attach or cloud only approaches

### 5. Enable Desktop Analytics
    
> a.  Introduce the customer to Desktop Analytics.
        
   - In this activity you will introduce the customer to Desktop Analytics, sharing the benefits and use case of DA to provide intelligence to plan the deployment for Windows 10. Leverage the deck at [https://aka.ms/AA75mgy](https://aka.ms/AA75mgy) to facilitate this action. Where possible, including a live demo is preferred, or use the demo video available at [https://aka.ms/FTDADemo](https://aka.ms/FTDADemo) (demo video from training) to show the product capabilities. If the customer is already using Windows Analytics this can be expedited by positioning DA as the evolution of Windows Analytics.
        
  - **Outcome:** Secure agreement to proceed with enablement of Desktop Analytics.
    
> b.  Guide the customer to enroll and setup Desktop Analytics
        
   - Follow the FastTrack DA setup Step-by-Step Guide at [https://aka.ms/sbsDASetup](https://aka.ms/sbsDASetup) to guide the customer administrator through the steps to enable Desktop Analytics or use Get Modern motion (provide the public facing documentation URL [https://docs.microsoft.com/sccm/desktop-analytics/set-up](https://docs.microsoft.com/sccm/desktop-analytics/set-up). Refer to the step-by-step guide for the pre-requisites for delivery and expected delivery assistance.  
    
> **Note:** If needed you can also provide the Interactive Guide explaining how to setup Desktop Analytics (see: [https://content.cloudguides.com/guides/Setting%20up%20Desktop%20Analytics](https://content.cloudguides.com/guides/Setting%20up%20Desktop%20Analytics)).
        
   -  Outcome: The outcome of this activity will be successful preview enrollment and initiation of data collection in DA.
    
> c.  Guide the customer to create an initial Desktop Analytics Deployment Plan
        
   - Following enablement and data collection assist the customer to begin their first [Desktop Analytics Deployment Plan](https://docs.microsoft.com/en-us/sccm/desktop-analytics/about-deployment-plans). Leverage the steps in the [DA docs Deployment Plan guide to](https://docs.microsoft.com/sccm/desktop-analytics/create-deployment-plans) scope the expected activities. The customer is responsible for determining and applying the importance of the detected applications.
        
   - **Outcome:** Customers have a working Desktop Analytics Deployment Plan and set of identified pilot devices for Windows 10.

### 6. Upgrade from Windows 7/8.1 to Windows 10 Enterprise
    
For upgrading to Windows 7/8.1 devices to Windows 10, we recommend customers utilize their existing processes to maintain consistency and predictability. If they don’t have an existing process, the recommended path for deploying Windows 10 leverages the Windows installation program (Setup.exe) to perform an in-place upgrade, which automatically preserves all data, settings, applications, and
drivers from the existing operating system version. This requires the least IT effort, because there is no need for any complex deployment infrastructure.

### 7. Deploy Office 365 ProPlus with System Center
    
Configuration Manager scales for large environments and provides extensive control over installation, updates, and settings. It also has built-in features to make it easier and more efficient to deploy and manage Office 365 ProPlus. We recommend deploying Office 365 ProPlus to ensure the most up-to-date modern productivity tools from Microsoft. When deploying with the Office Client Management dashboard in Configuration and the integrated Office 365 Installer wizard, you can manage updates with Configuration Manager.

### 8. Optimize Windows 10 & Office Update Delivery with System Center
    
A successful path to getting and staying up to date with Windows 10 and Office 365 ProPlus starts with a good content distribution strategy. Microsoft has invested significantly to address concerns about the size of updates. There are several technologies available to help reduce bandwidth and network load to optimize update delivery. In this step explain these technologies, compares them, and provides recommendations to help your customer decide which one to use.

### 9. Windows 10 Phased Deployment with System Center
    
In place of a disruptive shift in technology every few years, you will continually be bringing **new capabilities, experiences, and protections** to your users. Semi-annual feature updates deliver new capabilities in the Fall and Spring of each year, while monthly cumulative Quality Updates will contain security, reliability and bug fixes. **For customers unable to take semi-annual updates, our recommendation is to consume, annually, the Fall update.**

### 10. Office 365 ProPlus Phased Deployments with System Center
    
Like Windows, the client applications that are included with Office 365 are released regularly with updates that provide new features and functionality together with security and other updates. Use Configuration Manager to update Office 365 ProPlus. System Center Configuration Manager can manage Office 365 client updates by using the Software Update management workflow.
