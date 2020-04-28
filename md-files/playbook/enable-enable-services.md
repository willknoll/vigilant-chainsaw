---  
# required metadata  
title: FastTrack Playbook - Enable Services  
description: FastTrack Playbook - Enable Services  
author: Ryan Meehan  
ms.author: ryanme  
manager: eduardod  
ms.date: 3/25/2020  
ms.topic: playbook  
ms.prod: non-product-specific  
ms.custom: internal-playbook  
ft.audience: internal  
ft.owner: ryanme  
---  
[!INCLUDE [Playbook Feedback](./includes/questions-feedback.md)]  

# Enable Services

Phase: **Enable**  
Motions: **Customer Health / RFA / Targeting**  
[!INCLUDE [Data Privacy](./includes/playbook-data-privacy.md)]  

## Overview

The Enable Services process guides a customer through configuring
services for consumption, migration and begin to experience the Enable
Service benefits. 

## Objectives

- Identify provisioning and synchronization are configured and active. 
- Ensure eligible workloads are configured in tenant and available for consumption.
- Confirm pilot users are migrated and consuming services. 
- Contact the Customer Success Manager (CSM) to facilitate alignment between the customer and Modern Communications service (Outlook Mobile, Teams or Yammer) once enabled.

## Approach

### Assist with Enablement

Primary Role: **FastTrack Manager**  
Motions: **Customer Health / RFA / Targeting**  
Applies To: **All Services**

Conduct sync meetings with customer as appropriate and assist with enablement tasks. Refer to [Sync Meeting Guidance](https://fasttrack-docs.microsoft.com/references/sync-meeting-guidance/) to help you have more effective meetings with your customers. 

**Step Inputs (the checklist of items you should collect to be successful with this step)** 
- Contacts in FTOP are updated
- Technical Enablement note listing customer names and roles participating

**Step Outputs (the set of items you should make sure are documented to successfully exit this step)** 
- (If applicable) Target date(s) for workloads updated
- (If applicable) [L1/L2](https://fasttrack-docs.microsoft.com/playbook/l1l2l3-homepage-list.html) status changes
- Technical Enablement note documenting any Target Date changes and/or [L1/L2](https://fasttrack-docs.microsoft.com/playbook/l1l2l3-homepage-list.html) status changes
- (If applicable) Technical Enablement note affirming that Velocity Migration questionnaire was reviewed and validated


#### FTOP Tasks

| Task ID | Task Name                                                                           | (M)andatory / (O)ptional |       FastTrack Role       | Services                                      |
| ------- | ----------------------------------------------------------------------------------- | :----------------------: | :------------------------: | --------------------------------------------- |
| 1126    | Meet with Customer PM and Customer Tech Leads to enable Core and Services           |            M             |     FastTrack Engineer     | All Services                                  |
| 1672    | Review and validate the Migration Questionnaire on the Migration Collaboration Site |            M             | Migration Velocity Manager | Exchange / OneDrive for Business / SharePoint |

### Perform Enablement Tasks

Primary Role: **FastTrack Engineer**  
Motions: **Customer Health / RFA / Targeting**  
Applies To: **All Services**

Follow the Enable tasks for each service as needed. Some service tasks 
may:

  - Link to public wizard
  - Link to additional guidance documents
  - Require completion if migration benefit is used

**Step Inputs (the checklist of items you should collect to be successful with this step)**
- Technical Enablement or Environment notes capture the following (if applicable):
    - Customer's identity decisions 
    - Confirmation that the customer has setup, configured, and/or synched identities 
    - Customer's security decisions 
    - Customer's network decisions 
    - Customer has conditional access policies configured where the "Microsoft performing migration value" = TRUE in the workload's Data Migration section of the FTOP Services tab 
    - Customer's hybrid, on prem mobility, and on prem federation requirements decisions and domains are remediated and configured accordingly
    - Customer completed the Edge Site Discovery analysis for legacy sites using IE

**Step Outputs (the set of items you should make sure are documented to successfully exit this step)**
- Technical Enablement notes capture the following (if applicable): 
    - Confirmation that the customer executed the appropriate FastTrack Wizard cmdlet (per environment) to validate any hybrid environment custom domain setup and configuration 
    - ViewPoint used to validate Directory Sync, ADFS configuration wizard completed successfully or customer can access services using Cloud IDs
    - Customer completed configuration and validation activities for Core services, plus any verified entitled M365 services
        - Consumption Status (L1) = In Progress
        - Reason (L2) = Solution or User Adoption
        - Lynx used to confirm RFA customers have achieved either 100 active users or 10% usage if < 1000 seats
    - (If applicable) Test migration completed successfully using customer's Pilot Migration Schedule and migration build request fulfilled  


#### FTOP Tasks

| Task ID | Task Name                                                                                                | (M)andatory / (O)ptional |       FastTrack Role       | Services                                                           |
| ------- | -------------------------------------------------------------------------------------------------------- | :----------------------: | :------------------------: | ------------------------------------------------------------------ |
| 3992    | MVM to Onboard Customer                                                                                  |            O             | Migration Velocity Manager | Exchange / OneDrive for Business / SharePoint                      |
| 2474    | Validate migration tool configuration and execute test migration                                         |            M             | Migration Velocity Manager | Exchange / OneDrive for Business / SharePoint                      |
| 3126    | OneDrive - If no migration, install the ODB sync client. Otherwise, install client post-migration        |            O             |     FastTrack Engineer     | OneDrive for Business                                              |
| 3147    | OneDrive - {Wizard} Configure OneDrive for Business                                                      |            M             |     FastTrack Engineer     | OneDrive for Business                                              |
| 3125    | SharePoint/OneDrive - Validate users have been assigned licenses for SPO or ODB                          |            O             |     FastTrack Engineer     | SharePoint / OneDrive for Business                                 |
| 1235    | SharePoint - {Wizard} Configure SharePoint Online                                                        |            M             |     FastTrack Engineer     | SharePoint                                                         |
| 3222    | SharePoint - {Wizard} Configure SharePoint Hybrid                                                        |            O             |     FastTrack Engineer     | SharePoint                                                         |
| 1158    | Exchange - Configure EXO                                                                                 |            M             |     FastTrack Engineer     | Exchange                                                           |
| 3223    | EDU: Enable Classroom & SDS                                                                              |            O             |     FastTrack Engineer     | Classroom/SDS                                                      |
| 3306    | Migration Infrastructure Build/Service request                                                           |            M             | Migration Velocity Manager | Exchange / OneDrive for Business / SharePoint                      |
| 3677    | Exchange - Group Wise Migration: Configure ODME                                                  |            O             | Migration Velocity Manager | Exchange                                                           |
| 2008    | Exchange - Setup Gmail Migration Environment                                                             |            O             |     FastTrack Engineer     | Exchange                                                           |
| 1941    | Exchange - Apply address policy and validate New / Original SMTP Addresses are Listed as a Proxy address |            O             |     FastTrack Engineer     | Exchange                                                           |
| 3687    | Teams - Core Plus Assistance                                                                             |            M             |            SME             | Teams                                                              |
| 1159    | Exchange - {Wizard} Configure Mail flow in EXO                                                           |            O             |     FastTrack Engineer     | Exchange                                                           |
| 1171    | Exchange - {Wizard} Setup IMAP migration                                                                 |            O             |     FastTrack Engineer     | Exchange                                                           |
| 3311    | Exchange - Notes Migration: "Auto Import Tool" guidance for importing Scheduling batches                 |            O             | Migration Velocity Manager | Exchange                                                           |
| 3160    | Exchange - {Wizard} Exchange Minimal Hybrid                                                              |            O             |     FastTrack Engineer     | Exchange                                                           |
| 3159    | Exchange - {Wizard} Exchange 2016 Hybrid                                                                 |            O             |     FastTrack Engineer     | Exchange                                                           |
| 3158    | Exchange - {Wizard} Exchange 2013 Hybrid                                                                 |            O             |     FastTrack Engineer     | Exchange                                                           |
| 3157    | Exchange - {Wizard} Exchange 2010 Hybrid                                                                 |            O             |     FastTrack Engineer     | Exchange                                                           |
| 3156    | Exchange - {Wizard} Exchange Staged Migration                                                            |            O             |     FastTrack Engineer     | Exchange                                                           |
| 3155    | Exchange - {Wizard} Exchange Cutover Migration                                                           |            O             |     FastTrack Engineer     | Exchange                                                           |
| 1240    | Yammer - {Wizard} Configure Yammer                                                                       |            M             |     FastTrack Engineer     | Yammer                                                             |
| 3727    | Teams - Deliver Call Quality Dashboard Workshop                                                          |            M             |            SME             | Teams                                                              |
| 3725    | Teams - Configure Core Collab & Meetings (VOIP)                                                          |            M             |            SME             | Teams                                                              |
| 3724    | Teams - Configure Advanced Voice Services (PSTN)                                                         |            M             |            SME             | Teams                                                              |
| 3728    | Teams - Technically Enable Teams Service                                                                 |            M             |     FastTrack Manager      | Teams                                                              |
| 2218    | Enable Microsoft Intune                                                                                  |            M             |     SME     | Intune                                                             |
| 2415    | AADP - {Wizard} Configure AADP Core                                                                      |            O             |     FastTrack Engineer     | AADP                                                               |
| 1641    | Setup custom domain                                                                                      |            M             |     FastTrack Engineer     | Core Onboarding                                                    |
| 1141    | {Wizard} Set Up Directory Synchronization (Azure AD Connect)                                             |            O             |     FastTrack Engineer     | Core Onboarding                                                    |
| 1134    | Create Cloud IDs                                                                                         |            O             |     FastTrack Engineer     | Core Onboarding                                                    |
| 4112    | EDU:  Enable Classroom & SDS                                                           |            O             |     SME     | Core Onboarding                                                    |
| 1148    | {Wizard} Install and configure ADFS                                                                      |            O             |     FastTrack Engineer     | Core Onboarding                                                    |
| 3267    | Outlook Mobile - Configure Outlook Mobile                                                                |            M             |     FastTrack Engineer     | Outlook Mobile                                                     |
| 3161    | Power BI - Configure Power BI                                                                            |            O             |     FastTrack Engineer     | PowerBI                                                            |
| 2461    | Handle PowerBI customer during Widget Engagement - See Learn More                                        |            O             |     FastTrack Engineer     | PowerBI                                                            |
| 2570    | Configure Cloud PBX with PSTN Calling                                                                    |            O             |     FastTrack Engineer     | Skype for Business - PSTN Calling / Skype for Business - Cloud PBX |
| 2201    | SfB - Configure SfB Split Domain Lync 2010/2013 Server                                                   |            O             |     FastTrack Engineer     | Skype for Business                                                 |
| 2567    | SfB - Configure SfB Split Domain for SfB 2015 Server                                                     |            O             |     FastTrack Engineer     | Skype for Business                                                 |
| 2260    | SfB - Configure SfB Room System Account                                                                  |            O             |     FastTrack Engineer     | Skype for Business                                                 |
| 2980    | SfB - {Wizard} Configure Skype for Business Standard Features                                            |            O             |     FastTrack Engineer     | Skype for Business                                                 |
| 3047    | Configure Cloud PSTN Conferencing                                                                        |            O             |     FastTrack Engineer     | Skype for Business - PSTN Conferencing                             |
| 2483    | Configure Project Professional                                                                           |            M             |     FastTrack Engineer     | Project                                                            |
| 2266    | SfB - Configure Skype for Business Core Features (IM/P only)                                             |            O             |     FastTrack Engineer     | Skype for Business                                                 |
| 2491    | Configure Project Online / Project Lite                                                                  |            M             |     FastTrack Engineer     | Project                                                            |
| 3999    | MIP – Activate Tenant and Configure Users                                                          |            O             |            SME             | AIP                                                                |
| 3954    | Create Transition Documents and Transition to Migration Team                                             |            O             | Migration Velocity Manager | Exchange / OneDrive for Business / SharePoint                      |
| 4000    | MIP – Configure Sensitivity Labels                                                                   |            O             |            SME             | AIP                                                                |
| 4001    | MIP – Test Document Labeling                                                                                 |            O             |            SME             | AIP                                                                |
| 4002    | MIP – Create Protection Policies                                                                   |            O             |            SME             | AIP                                                                |
| 4003    | MIP – Install Clients                                                                                  |            O             |            SME             | AIP                                                                |
| 4004    | MIP – Provide Guidance on BYOK                                                                             |            O             |            SME             | AIP                                                                |
| 4006    | MIP – Work with Unified Labeling Scanner                                                                                 |            O             |            SME             | AIP                                                                |
| 4081    | OATP – Configure P1 settings                                                                             |            O             |     FastTrack Engineer     | Exchange / OATP                                                    |
| 4082    | OATP – Review P2 capabilities                                                                            |            O             |            SME             | Exchange / OATP                                                    |
| 4083    | MDATP – Configure settings                                                                               |            M             |            SME             | MDATP                                                              |
| 4087    | Intune PC Agent Deprecation                                                                              |            O             |            SME             | Intune                                                             |
| 4097    | Microsoft Edge Deploy and Configure                                                                      |            M             |      FastTrack Engineer    | Edge                                                               |
| 4098    | Microsoft Edge Policy Review and Configure                                                               |            M             |            SME             | Edge                                                               |
| 3743    | OneDrive - Track OneDrive Adoption Program Progress       |            O             | FastTrack Manager | OneDrive for Business |

### Perform Get Modern Enablement Tasks  

Primary Role: **FastTrack Engineer**  
Motions: **Customer Health / RFA / Targeting**  
Applies To: **Office ProPlus / Windows 10**

Complete the tasks to perform Get Modern enablement.  **\*For Windows and Office 365 ProPlus, the goal is to achieve 70%+ MAD/MAU.**  

- **Office 365 ProPlus:**  For the remainder of FY20, **OPP is the #1 priority.**  Please ensure every customer you work with is deploying OPP, as it should be deployed concurrently with any workload.  
  - See ProPlus workload playbook task 1247 Deploy Office 365 ProPlus in FTOP.  
- **Windows 10:**  For the remainder of FY20, OPP is the #1 priority.  Any high-deploy Win10 should have OPP attached.  
  - For any low-deploy customer, see the Get Current and Stay Current (Windows 10) playbook tasks:  
    - 4024 Upgrade from Windows 7/8.1 to Windows 10
    - 4031 Optimize Windows 10 & Office Update Delivery with System Center
    - 4032 Windows 10 Phased Deployment with System Center  
- **Microsoft Edge:**  For the remainder of FY20, Edge is the secondary priority in FT.  Task completion is essential for tracking/reporting purposes.  Edge should be deployed concurrently with any workload.  
  - See FTOP Edge playbook task 4095: \[Wizard\] Microsoft Edge Deployment Assessment.  

**Step Inputs (the checklist of items you should collect to be successful with this step)**  
- Technical Enablement or Environment notes capture the following: 
    - Customer's identity decisions and note confirming the customer has setup, configured, and/or synched identities
    - Customer's network decisions and confirmation the customer has remediated all other items identified by netonboard tool, including ingress/egress testing outcomes  

**Step Outputs (the set of items you should make sure are documented to successfully exit this step)**  
- Technical Enablement notes capture the following (if applicable):
    - Customer reasons should they **not** upgrade SCCM for their Win10 deployment
    - Customer completes the Windows to Office app assessment
    - Customer gathers current OS image requirements/decisions
    - Qualified customers requested a GM FTA for additional Win10 deployment assistance
    - Office ProPlus Deployment Package build is complete and distribution method chosen (local or cloud)
    - Office ProPlus deployment wizard shared with customer
    - PowerShell parameter script copied to SCCM servers(s) and pilot devices tested against the OTR results 
    - PowerShell OPP deployment package's execution status for the general use devices (outside pilot lab)
- Engagement Management notes capture the following (if applicable): 
    - Pilot device prep activities progress and completion status 
    - Lynx used to confirm customer's OPP usage is tracked to > 70% for two months post-deployment
        - Consumption Status (L1) = In Progress
        - Reason (L2) = Solution or User Adoption


#### FTOP Tasks

| Task ID | Task Name                                     | (M)andatory / (O)ptional | FastTrack Role | Services |
| ------- | --------------------------------------------- | :----------------------: | :------------: | -------- |
| 4024    | Upgrade from Windows 7/8.1 to Windows 10                                                                 |            M             |     FastTrack Engineer     | Windows 10                                                         |
| 4031    | Optimize Windows 10 & Office Update Delivery with System Center                                          |            O             |            SME             | Windows 10                                                         |
| 4032    | Windows 10 Phased Deployment with System Center                                                          |            O             |            SME             | Windows 10                                                         |
| 1247    | Deploy Office 365 ProPlus                                                                                |            M             |     FastTrack Engineer     | Office ProPlus                                                     |
| 4111    | Managing Existing Office 365 ProPlus in the Remote Work Scenario                                 |            O             |     SME     | Office ProPlus / Windows 10                                 |
| 4033    | Office 365 ProPlus Phased Deployment with System Center                                                  |            O             |            SME             | Office ProPlus                                                         |
| 3650    | Office ProPlus - OPP Acceleration |            O             | FastTrack Manager | Office ProPlus |

### Deploy Mobile Apps 

Primary Role: **FastTrack Engineer**  
Motions: **Customer Health / RFA / Targeting**  
Applies To: **Intune / Office ProPlus / Windows 10**

Some customers prefer the built-in device management inside Office 365 to allow basic controls on mobile devices connecting to corporate data. Other customers need stronger security, so they use EMS or 3rd party MDM solutions to control apps and device access. For those customers that have Intune and AADP, they can configure a much more secure access model for mobile devices. See "Get Secure" guidance in task 3720 or engage an EMS SME to help drive these specific scenarios.  

**Basic MDM recommendations:**  
Mobile Device Management for Microsoft 365 Business Standard can help you secure and manage mobile devices like iPhones, iPads, Androids, and Windows Phones used by licensed Office 365 users in your organization.

- [Access control for Office 365 email and documents](https://support.microsoft.com/en-us/office/capabilities-of-built-in-mobile-device-management-for-office-365-a1da44e5-7475-4992-be91-9ccec25905b0?ui=en-us&rs=en-us&ad=us#bkmk_accesscontrol)
- [Policy settings for mobile devices](https://support.microsoft.com/en-us/office/capabilities-of-built-in-mobile-device-management-for-office-365-a1da44e5-7475-4992-be91-9ccec25905b0?ui=en-us&rs=en-us&ad=us#bkmk_policysettings)
- [Remotely wipe a mobile device](https://support.microsoft.com/en-us/office/capabilities-of-built-in-mobile-device-management-for-office-365-a1da44e5-7475-4992-be91-9ccec25905b0?ui=en-us&rs=en-us&ad=us#bkmk_wipedevice)
- [Set up Mobile Device Management (MDM) in Office 365](https://support.office.com/article/Set-up-Mobile-Device-Management-MDM-in-Office-365-dd892318-bc44-4eb1-af00-9db5430be3cd)

Secured MDM/MAM Applications (Intune)  
[Get Started with Intune fundamentals](https://docs.microsoft.com/mem/intune/fundamentals/what-is-intune)  

#### FTOP Tasks

| Task ID | Task Name                                     | (M)andatory / (O)ptional | FastTrack Role | Services |
| ------- | --------------------------------------------- | :----------------------: | :------------: | -------- |
| 4110    | Deploy Mobile Office Apps                                                              |            O            |     FastTrack Engineer     |      Intune / Office ProPlus / Windows 10        |

### Teams - Skype to Teams Transition

Primary Role: **SME**  
Motions: **Customer Health / RFA / Targeting**  
Applies To: **Teams**

If the customer is receiving assistance for Skype to Teams transition from a Teams SME or FastTrack Ready Partner for **mid-touch proactive engagements (customers with 2,000 to 10,000 active SfBO users)**, execute the tasks below to capture the current status of the engagement.  

**For customers with less than 2,000 active SfBO users**, please see additional guidance around roles and responsibilities for SfBO to Team transition activities on slide 6 of the attached [Roles and Responsibilities deck](https://aka.ms/FTCTeamsRnRs).  

**FastTrack Ready Partners** – Please continue to inform the assigned SME of the engagement details so they may track task status. Provide targeted Teams Only date and summary of customer status.  


#### FTOP Tasks

| Task ID | Task Name                                     | (M)andatory / (O)ptional | FastTrack Role | Services |
| ------- | --------------------------------------------- | :----------------------: | :------------: | -------- |
| 3685    | Teams - {Wizard} Internal Readiness Assessment         |            M             |      GTM       | Teams    |
| 3716    | Teams - Customer Upgrade Overview             |            M             |      SME       | Teams    |
| 3688    | Teams - Customer Strategy and Planning        |            M             |      SME       | Teams    |
| 3689    | Teams - Customer Upgrading                    |            M             |      SME       | Teams    |
| 3722    | Teams - Mid-touch Reactive Transition Support |            M             |      SME       | Teams    |

### Enterprise Additional Benefit Enablement

Primary Role: **FastTrack Engineer**  
Motions: **Targeting / RFA / Customer Health**  
Applies To: **All Services**

For approved enterprise customers only with 20,000 seats or more or an exception.  

**Step Inputs (the checklist of items you should collect to be successful with this step)**
- Technical Enablement or Environment notes capture the following (if applicable):
    - Qualified customer configuration and identity decisions after completing applicable remediation activities unique to: 
        - Geo-redundant ADFS farms
        - Complex hybrid Exchange or other core hybrid scenarios
        - Security, compliance, regulatory requirements (i.e. GPO, Public Folders, holds, group management, etc.)
        - Identity management, including client/web access policies, or Alt-Id 
- Engagement Management notes capture the following:
    - Qualified customer has developed a migration strategy and/or user data backup policy where the "Microsoft performing migration value" = TRUE in the workload's Data Migration section of the FTOP Services tab
    - Migration method and scheduling requirements to generate migration schedules
    - Qualified customer has enabled, is using entitled Modern Comms workloads, and the Customer Success Manager identified in FTOP Contacts from CALC  

**Step Outputs (the set of items you should make sure are documented to successfully exit this step)** 
- Technical Enablement notes capture the following (if applicable):
    - Qualified customer validates configuration of geo-redundant ADFS and client/web access policies 
        - Wizards and/or customized claims rules in the Issuance Authorization List have been tested
    - Qualified customer validates mail-enabled application integration and mail routing complete
        - Confirm no client apps are mail-enabled, or, for those that are, mail is routing as expected
    - Qualified customer's confirmed use of on prem Public Folders and has configured and synced them from Exchange to O365 if they are to co-exist, or has migrated them to Shared Mailboxes in O365
    - If entitled, Exchange hybrid unified messaging configured for enabled Skype/Lync users
    - Get Modern FTA re-engaged for Windows 10 deployment assistance
    - Confirm Modern Comms templatized notification email sent to Field (Customer Success Manager, Account Technology Strategist) team listed in FTOP Contacts for qualified customers 
    - Modern Comms handoff meeting conducted or CSM or ATS confirms Field handshake activities complete for qualified customers  


#### FTOP Tasks

| Task ID | Task Name                                                 | (M)andatory / (O)ptional |   FastTrack Role   | Services        |
| ------- | --------------------------------------------------------- | :----------------------: | :----------------: | --------------- |
| 4037    | Get Modern FastTrack Architect Re-engagement              |            O             |   GetModern FTA    | Windows 10      |
| 3212    | Exchange - Mail Enabled Applications Integration Guidance |            O             | FastTrack Engineer | Exchange        |
| 3213    | Exchange - Exchange Public Folder Coexistence Enablement  |            O             | FastTrack Engineer | Exchange        |
| 3238    | Exchange - Enable Lync/SfB integration                    |            O             | FastTrack Engineer | Exchange        |
| 3241    | Configure AD FS Client Access Policies                    |            O             | FastTrack Engineer | Core Onboarding |
| 3243    | Geo-redundant ADFS Configuration Guidance                 |            O             | FastTrack Engineer | Core Onboarding |
| 3731    | Post-enablement Field Handshake                           |            O             | FastTrack Manager  | Teams |

### Customer Survey Eligibility

Primary Role: **FastTrack Manager**  
Motions: **Customer Health / RFA / Targeting**  
Applies To: **All Services**

Update Customer Survey information for eligibility and contacts in the appropriate tasks. Detailed guidance for the Customer Survey process can be found [here](https://fasttrack-docs.microsoft.com/ftc-survey-process-for-fy20/index.html).  

**Step Inputs (the checklist of items you should collect to be successful with this step)**  
- Contacts in FTOP are updated and obsolete contacts are removed  

**Step Outputs (the set of items you should make sure are documented to successfully exit this step)**  
- none


#### FTOP Tasks

| Task ID | Task Name               | (M)andatory / (O)ptional |  FastTrack Role   | Services     |
| ------- | ----------------------- | :----------------------: | :---------------: | ------------ |
| 3690    | Identify Survey Contact |            M             | FastTrack Manager | All Services |

### All Scoped Services Enabled

Primary Role: **FastTrack Manager**  
Motions: **Customer Health / RFA / Targeting**  
Applies To: **All Services**

Move customer to Migrate phase and complete the appropriate task.  

**Step Inputs (the checklist of items you should collect to be successful with this step)**
- At least one customer contact has been marked Survey Eligible = "Yes" and survey language, customer country, and service(s) which the customer worked on has been added
- (If applicable) Technical Enablement note affirming that Velocity Migration questionnaire was reviewed and validated  

**Step Outputs (the set of items you should make sure are documented to successfully exit this step)**
- Documented in Engagement Management note that the customer achieved active usage milestone (100 active users for customers with > 1000 seats, 10% active usage for customers with > 1000 seats) per LYNX  or when the customer confirms that there are no technical blockers that prevent deployment. 
- (If applicable) Set Service Status for the workload to Migrate


#### FTOP Tasks

| Task ID | Task Name                                                                      | (M)andatory / (O)ptional |  FastTrack Role   | Services     |
| ------- | ------------------------------------------------------------------------------ | :----------------------: | :---------------: | ------------ |
| 1701    | Enablement Complete: All in-scope services enabled; migration tools configured |            M             | FastTrack Manager | All Services |

## Key Inputs

  - All required tasks from Remediation Checklist are complete. 
  - Customer understands identity and completes any remediation. 
  - Customer's on-premise environment is remediated/configured to allow
    consumption of cloud services (including any hybrid coexistence).
  - Customer is ready to begin consuming services. 

## Key Outputs

  - All desired workloads are configured and available for consumption. 
  - Pilot users are enabled and migrated. 

## Next Steps

- Introduce intent for additional workloads, as appropriate, by having a Business Value Discussion in the [Conduct Adoption and Change Management Conversation](assess-conduct-adoption-and-change-management-conversation.md) process; otherwise proceed to [Conduct Engagement Completion Discussion (enablement)](enable-conduct-engagement-completion-discussion.md) for RFA customers.
- Update Service Status to Adoption or Migration 

## Refresh Summary

| Date       | Who Changed       | What Changed                                                                                                            |
| ---------- | ----------------- | ----------------------------------------------------------------------------------------------------------------------- |
| 3/25/2020  | Ryan Meehan   | Added step inputs and outputs to all steps |
| 3/25/2020  | Ryan Meehan   | Added tasks 3731 and 3743, removed step "Request Migration Velocity Manager" |
| 2/28/2020  | Rosie Arrieta | Added step Perform Get Modern Enablement Tasks  |
| 1/31/2020  | Ryan Meehan | Deprecated task 1910, change task 3690 to Mandatory, renamed task 3685 |
| 1/31/2020  | Rosie Arrieta | Added tasks 4097, 4098 |
| 12/6/2019  | Ryan Meehan       | Deprecated Task 4022, Added task 4087 |   
| 10/25/2019 | Ryan Meehan       | Added tasks 4081, 4082, 4083 |
| 9/13/2019  | Rosie Arrieta     | Conduct Engagement Completion Discussion Removed|
| 8/28/2019  | Rosie Arrieta     | Added Conduct Engagement Completion Discussion with the Customer (enablement) and removed Teams - Additional Activities |
| 7/26/2019  | Rosie Arrieta     | Added new Get Modern tasks |
| 6/28/2019  | Maria Conceição   | Added task 4022, 4024. Modified task 1247 |
| 4/26/2019  | Ryan Meehan       | Removed Deprecated Tasks |
| 2/22/2019  | Ryan Meehan       | Playbook migration to GitHub |
| 10/26/2018 | Mark Eichenberger | Playbook Created |
