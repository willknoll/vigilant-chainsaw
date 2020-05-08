---  
# required metadata  
title: FastTrack Partner Playbook - FE/SME Notes Guidance 
description: FastTrack Partner Playbook - FTOP Notes Guidance 
author: Celia Kennedy
ms.author: v-cekenn
manager: pagrim
ms.date: 10/03/2019  
ms.topic: partner-playbook  
ms.prod: non-product-specific
ms.custom: partner-playbook  
ft.audience: partner
ft.owner: partner
--- 

# FE / SME Notes Guidance

> [!IMPORTANT]
> In order to track and monitor all M365 customers requesting deployment assistance or accelerating deployment plans due to COVID-19 all notes should include hashtag **#covid**. In addition we have issued the following Notes guidance:  
>
>For customers who express a need to **pause or stop deployment, do not add #covid** and instead update Entitlement Status (L1/L2/L3) to reflect this change.  

>**Role:** FastTrack Manager  
>**Action required:** Update **Engagement Management** and/or **Service Intent** notes for customers that have accelerated their deployment/adoption priorities due to COVID19. **Include hashtag #covid**  

>**Role:** FE/SME/GMFTA/MVM  
>**Action required:** Update **Technical Enablement** notes for customers that have accelerated their deployment/migration/adoption priorities due to COVID19. **Include hashtag #covid**  

>**Role:** FastTrack Architect  
>**Action required:** Update **Enterprise Status** notes using the **Executive Summary section of template** for customers that have accelerated their deployment/adoption priorities due to COVID19. **Include hashtag #covid**  

>**Role:** Gateway Manager  
>**Action required:** Update **Engagement Management** when we have identified customers who want to accelerate a service deployment due to COVID19. **Include hashtag #covid**

Guidance is being communicated to ensure that we are following a consistent process across all regions. This will improve predictability and reduce confusion regarding which notes go where and how often they need to be recorded.

Primary Role: **FastTrack Engineer; FastTrack Engineer SME**  
Applies To: **All Services**

## Objectives
FE and FE SME roles are required to record notes in the FastTrack Orchestration Portal (FTOP) throughout the duration of their customer engagements. Notes are required to be recorded when delivering Business Value Discussions (BVD), Technical Workshops, Success Workshops, Remediation activities, Enablement activities and other ring-fence specific activities to capture engagement status. This document details the expectations placed on the FE/SME pertaining to the frequency, the location and the content and format of the note.

## Frequency
Notes must be recorded in FTOP each time an FE/SME has an interaction with a customer, internal stakeholder,or undertakes an engagement related activity. Some examples are as follows:

- Kick off meeting
- BVD discussions
- Technical Workshops
- Assess activities
- Remediation meetings and follow up actions
- Enablement meetings
- Testing or reproductions during customer deployment and related activities

## Location
The FE/SME will record the note details under the **Time** entry section in FTOP using the workload time tracking task that best align to the playbook activities they are undertaking.

If no workload in the list is applicable, use the Core Onboarding Time task. If multiple workloads apply (i.e., Compliance center, Outlook Mobile on Intune), log one note and use the prefix in the note entry to reflect the other notes.

[![Service Time Entry](media/resources-core-onboarding-time.png)](media/resources-core-onboarding-time.png)

**Examples**

- BVD discussions notes will be recorded under the time tracking task for the workload. 
- Notes for technical workshops and remediation activities that apply to a specific workload will be logged under the time tracking task for the workload.
- Notes for activities that do not directly align to a specific workload such as, but not limited to, tenant and licensing, networking, client and directory synchronization/authentication, will be logged under the core onboarding time task.

## Notes Content and Format

Each FE/SME note is required to include the following content:

**Template for Note Entries**

- WORKLOAD AFFECTED
- STATUS: Brief summary statement on the status of the engagement
- SUMMARY: Include a synopsis of activities undertaken during the interaction
- NEXT ACTION: State next action and when it is scheduled to occur next
- CONCERNS: Insert concerns here, where applicable

1. Workload Affected: Prefix each note entry with the workload being discussed on the first line of the note entry.

   **Expected Format**
   -  [EXO] Exchange Online
   -  [SPO] SharePoint Online
   -  [OD] OneDrive for Business
   -  [YAM] Yammer Enterprise
   -  [OPP] Office 365 ProPlus
   -  [TEAMS] Teams    
   -  [INTUNE] Intune
   -  [AADP] Azure Active Directory Premium
   -  [MCAS] Microsoft Cloud App Security
   -  [AIP] Azure Information Protection
   -  [OLM] Outlook Mobile
   -  [PROJ] Project Online
   -  [WDATP] Windows Defender ATP
   -  [WIN10] Windows 10
   -  [SDS] Classroom / School Data Sync (SDS)
   -  [IDSEC] Identity Security
   -  [CORE] For those that do not fit within above workloads
   -  [OLM+INTUNE] Example for multiple impacted workloads

2. Workload technical status: Include one of the following status selections.

   **Expected Format**

- STATUS: Brief sentence on the status of the engagement
   - On track
   - Paused
   - Pending customer feedback
   - Pending FastTrack Center (FTC) or internal feedback

3. Activity details summary
   **Expected Format**

- SUMMARY: Include a synopsis of activities undertaken during the interaction of activities

4. Next action / next action date
   **Expected Format**

- NEXT ACTION: Expected next steps and when it is scheduled to occur

5. Concerns
   **Expected Format**

- CONCERNS: Details about the nature of the concern (1st party softwarea, 3rd party software or hardware, business concern, security, project resources or funding).   

  Note: Where 1st party software concerns are identified, the corresponding FTC Insight ID must be referenced.

**Examples of Notes**

- CORE
- STATUS: On track to continue the deployment process and currently working on remediation checklist follow up actions.
- SUMMARY: Held first meeting with customer after remediation checklist delivered. Reviewed first wave of action items the customer indicates network team is reviewing provided uniform resource locator (URL) / Internet Protocol (IP) list to build allow rule, Active Directory (AD) Admin is addressing routable user principal name (UPN) suffix in on-premise AD, Server team is provisioning new virtual machine (VM) for Azure AD Connect server.
- NEXT ACTION: Scheduled weekly touch point meeting to review progress and sync on remediation item statuses. Next occurrence on April 30, 2019.
- CONCERNS: Customer network team reports their 3rd party firewall may not support wildcard URL based rulesets, which they are stating is a requirement based on the extensive rule set requirements. The customer indicates their deployment will be delayed if no upgrade option is available because replacement will be necessary which will require funding, procurement and deployment.

[![New Note](media/resources-new-note.png)](media/resources-new-note.png)

### Refresh Summary

|Date|Who Changed|What Changed|
|---------|---------------|----------------------------|
|03/25/2020| Celia Kennedy| General Maintenance|
|09/27/2019| Celia Kennedy| Partner Playbook Updated|

[Home](http://partner-docs.microsoft.com)
