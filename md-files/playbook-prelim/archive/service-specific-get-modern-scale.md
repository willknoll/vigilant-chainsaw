---  
# required metadata  
title: FastTrack Playbook - Get Modern Scale Motion
description: FastTrack Playbook - Get Modern Scale Motion
ms.author: mikelamb  
manager: cadenli  
ms.date: 12/2/2019  
ms.topic: playbook  
ms.prod: non-product-specific  
ms.custom: internal-playbook  
ft.audience: internal  
ft.owner: mikelamb
---   
[!INCLUDE [Playbook Feedback](./includes/questions-feedback.md)]

# Get Modern Scale Motion

Program Manager: **Mike Lamb**  
Phase: **Assess, Remediate, Enable**

## Overview

The FY20 Get Modern motion is designed for FastTrack Engineers, with support from FastTrack Managers & Get Modern Subject Matter Experts (SMEs), to guide qualified customers through the Windows 7/8.1 to Windows 10 upgrade process as well as deploying Office 365 ProPlus using System Center.

For customers who are interested or have requested assistance staying
current with Windows 10 and Office 365 ProPlus our Get Modern Subject
Matter Experts are available to assist with the optional steps in this
motion (steps 7 – 9).

For deployment of Office 365 ProPlus without Windows upgrade, please reference the [Office 365 ProPlus Standalone Scale Playbook](./service-specific-opp-standalone.md).

## Objectives

The following is a list of objectives for this playbook:

  - **Keeping our customers secure and helping them to shift to Windows 10** is imperative as they **prepare for Windows 7 end of support in January 2020.**

  - As we help customers get modern with Microsoft 365, securing endpoints with Windows 10 is also of strategic importance to Microsoft in a competitive landscape.

  - **Ensuring customers deploy and use the latest cloud connected Office client applications** in organizations is critical as we continue to support our customers as they prepare for Office 2010 end of **support and through their digital transformation journey.**

  - Office 365 ProPlus is of strategic importance to Microsoft among
    competition as we shift our customers to the cloud with Microsoft
    365.

## Approach

Primary Role: **FastTrack Engineer; SME**  
Applies To: **Windows & Office 365 ProPlus**

If an engaged FE is confident in their understanding, capabilities to deliver the Get Modern motion the FE should be empowered to continue with the engagement. However, if the engagement becomes stalled, blocked, or the FE requires any additional support executing this playbook, the FE shall request a Get Modern SME (OPP and/or Windows SME) using the [FastTrack Resource Request Tool](https://microsoft.sharepoint.com/teams/ftccm/SitePages/FTC%20Resource%20Request.aspx).

The Get Modern SME team is a dedicated team of Windows and OPP SMEs that Is available to support at scale motion. The SMEs are adjunct resources to the capabilities of the FastTrack delivery, but at no time do they replace the roles of the FastTrack Manager, Engineer or Architect.

1.  **Conduct Initiate/Kickoff Meeting**
    
    **For those customers who have yet to have a kickoff meeting, use the kickoff deck to set the right expectations around the FastTrack Benefit, Modern Workplace with security as a baseline for success and determine what services the customer wants to deploy.**

2.  [**Get Modern Technical Assessment & Planning**](https://aka.ms/ftgetmodernassessment)
    
    Deliver the Get Modern Technical Assessment workshop to begin the customers desktop deployment project with an inventory of their devices and apps, assisting them to prioritize what they want to move forward, test prioritized apps and devices, then remediate what’s needed to get ready for deployment. They can perform their app assessment leveraging their current System Center processes/tools including software inventory (discovery), software metering (usage), etc. Identifying who owns application and vendor support is equally critical. Keep in mind that as they assign app owners and test, this is NOT throw-away work--this should lay the operational foundation for managing future Windows 10 & Office 365 ProPlus updates, reducing risk and increasing testing efficiency.

    Enable the Office 365 ProPlus upgrade readiness dashboard in Configuration Manager to enable customers to obtain an assessment of Office

    Add-in readiness, Add-in support statements, Add-ins inventory, inventory of devices that have macros, and macro upgrade readiness.

3.  **Create Remediation Checklist**
    
    Use the Remediation Questionnaire and Checklist to provide the customer with deployment guidance for any/all FTC supported services. The GCC High/DOD version should be used for GCC High/DOD customers. To ensure you have the latest content, download a new copy each time. To generate a final checklist, start by filling out the questionnaire (tab)for the appropriate service(s), Guidance for services that are not in scope will be hidden in the final checklist. In order to track usage, please email a completed copy of the XLS to: d4cf4a2d.microsoft.com@amer.teams.ms

4.    **Review the Remediation Checklist with the customer for action items.**

5.  **Confirm the customer reviews & resolved anything in the remediation checklist**

6.  **Meet with Customer PM and Customer Tech Leads to enable Core and Services**

7.  **[Upgrade from Windows 7/8.1 to Windows 10](https://aka.ms/ftwin10upgrade) Enterprise**
    
    For upgrading your Windows 7/8.1 devices to Windows 10, we recommend customers utilize their existing processes to maintain consistency and predictability. If they don’t have an existing process the recommended path for deploying Windows 10 leverages the Windows installation program (Setup.exe) to perform an in-place upgrade, which automatically preserves all data, settings, applications, and drivers from the existing operating system version. This requires the least IT effort because there is no need for any complex deployment infrastructure.

8.  [**Deploy Office 365 ProPlus with System Center**](https://aka.ms/ftoppdeploy)
    
    Configuration Manager scales for large environments and provides extensive control over installation, updates, and settings. It also has built-in features to make it easier and more efficient to deploy and manage Office 365 ProPlus. We recommend deploying Office 365 ProPlus to ensure you always have the most up-to-date modern productivity tools from Microsoft. When deploying with the Office Client Management dashboard in Configuration and the integrated Office 365 Installer wizard, you can manage updates with Configuration Manager.

9.  **Cloud Management**
    
    For Get Modern customers that indicate intent or interest in either Cloud Management or Intune Co-Management “Cloud-Attach” for managing their Windows devices, if it has been confirmed by the FE/FTA that the customer’s Configuration Manager environment is already on current branch or is in process for being upgraded, the FM/FE should request a EMS SME assistance using the [FastTrack Resource Request Tool](https://microsoft.sharepoint.com/teams/ftccm/SitePages/FTC%20Resource%20Request.aspx).

10. **Optimize Windows 10 & Office Update Delivery with System Center**
    
    A successful path to getting and staying up to date with Windows 10 and Office 365 ProPlus starts with a good content distribution strategy. Microsoft has invested significantly to address concerns about the size of updates. There are several technologies available to help reduce bandwidth and network load to optimize update delivery. In this step explain these technologies, compares them and provides recommendations to help your customer decide which one to use.

11. **Windows 10 Phased Deployment with System Center**
    
    In place of a disruptive shift in technology every few years, you will continually be bringing **new capabilities, experiences and protections** to your users. Semi-annual feature updates deliver new capabilities in the Fall and Spring of each year, while monthly cumulative Quality Updates will contain security, reliability and bug fixes. **For customers unable to take semi-annual updates, our recommendation is to consume, annually, the Fall update.**

12. **Office 365 ProPlus Phased Deployments with System Center**
    
    Like Windows, the client applications that are included with Office 365 are released regularly with updates that provide new features and functionality together with security and other updates. You can use Configuration Manager to update Office 365 ProPlus. System Center Configuration Manager can manage Office 365 client updates by using the Software Update management workflow.

#### FTOP Tasks 

| Task ID                                              | Task Description                                                                                     | (M) Mandatory (O) Optional | FastTrack Role |
| ---------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | -------------------------- | -------------- |
| 994                                                  | Conduct Initiate/Kickoff Meeting(s)                                                                 | M                          | FM             |
| 4021 | [Get Modern Assessment Workshop](https://aka.ms/ftgetmodernassessmentguidance)                       | M                          | FE             |
| 3070                                                 | Create Remediation Checklist                                                                         | M                          | FE             |
| 1049                                                 | Review Remediation Checklist with customer for action items                                          | M                          | FE             |
| 1699                                                 | Technical Assessment Complete: Deployment Plan including Remediation Checklist delivered to customer | M                          | FM             |
| 3190                                                 | Confirm the customer reviews & resolved anything in the remediation checklist                        | M                          | FE             |
| 1700                                                 | Remediate Exit: All items in Remediation Checklist resolved                                          | M                          | FM             |
| 1126                                                 | Meet with Customer PM and Customer Tech Leads to enable Core and Services                            | M                          | FE             |
| 4024               | Upgrade from Windows 7/8.1 to Windows 10                                                             | M                          | FE             |
| 4031                                                | Optimize Windows 10 & Office Update Delivery with System Center                                    | *O*                        | SME          |
| 4032                                               | Windows 10 Phased Deployment with System Center                                                    | *O*                        | SME          |
| 4033                                                | Office 365 ProPlus Phased Deployments with System Center                                          | *O*                        | SME          |
| 1910                                                 | Survey Eligibility                                                                                   | M                          | FM             |
| 3690                                                 | Identify Survey Contact                                                                              | O                          | FM             |
| 1701                                                 | Enablement Complete: All in-scope services enabled; migration tools configured                       | M                          | FM             |

## Key Inputs
  - Customer qualifies for FastTrack Get Modern benefit
  - Customer has intent to upgrade to Windows 10

## Key Outputs
  - Windows 10 upgrade complete
  - Office 365 ProPlus deployment complete
  - Windows 10 and Office 365 ProPlus phased deployments using System Center in place

## Next Steps
Continue to support the customer until fully deployed with AU \>
70%.

## Success Measurements

| KPI Name        | Definition                                                       | Green / Yellow / Red Thresholds                                            |
| --------------- | ---------------------------------------------------------------- | -------------------------------------------------------------------------- |
|                 |                                                                  |                                                                            |
| Win10 MAD       | [Detailed Definition](https://aka.ms/ftwin10maddefinition)       | Green: \> 70%; Yellow: \> 40% \< 70%; Red: \< 40%                          |
| OPP MAU         | [Detailed Definition](https://aka.ms/ftoppmaudefinition)         | Green: \> 70%; Yellow: \> 40% \< 70%; Red: \< 40%                          |
| Customer Health | [Detailed Definition](https://aka.ms/ftcustomerhealthdefinition) | Green: 1 WL AU \> 70%; Yellow: 1 WL AU \> 40% \< 70%; Red: 2 WLs AU \< 40% |

## Ring Updates

|CMR|CMR Name| CMR Link|
|----|---------|------------|
|CMR-86836|Get Modern (Windows) scope expansion|[Link](https://o365fasttrack.visualstudio.com/Program%20Management/_workitems/edit/86836)|

## Refresh Summary

|Date|Who Changed|What Changed|Notes|
|---------|---------------|----------------------------|-------------|
|12/6/2019| Ryan Meehan | Updated Tasks |
|7/26/2019| Mike Lamb | Updated Steps and Tasks |
|5/14/2019| Mike Lamb| Playbook Created| |
