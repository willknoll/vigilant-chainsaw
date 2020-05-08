---  
# required metadata  
title: FastTrack Playbook - Environment Notes Guidance  
description: FastTrack Playbook - Environment Notes Guidance  
author: Rosie Arrieta  
ms.author: rosiea  
manager: eduardod  
ms.date: 2/7/2020  
ms.topic: playbook  
ms.prod: non-product-specific
ms.custom: internal-playbook  
ft.audience: internal  
ft.owner: rosiea
---  
[!INCLUDE [Playbook Feedback](./includes/questions-feedback.md)]  

# Environment Notes Guidance 

Primary Role: **FastTrack Engineer; FastTrack Engineer SME**  
Applies To: **All Services**

## Objectives

M365 FE and FE SME roles are required to record notes in the FastTrack Orchestration Portal (FTOP) throughout the duration of their customer engagements. Environment Notes can be recorded when delivering Technical Workshops, Remediation activities, Enablement activities and other ring-fence specific activities to capture Customer Environment information critical for the success of the deployment.   This guidance details the expectations placed on the M365 FE/SME pertaining to the frequency, and Environment Note’s content and format.  

## Frequency  

Environment Notes must be recorded in FTOP each time an FE/SME identifies Customer environment details that might create a risk to the success of the engagement or that are critical for success. Some examples of these interactions:  

- Kickoff meeting
- BVD discussions
- Technical Workshops
- Assess activities
- Remediation meetings and follow up actions
- Enablement meetings
- Testing or reproductions during customer deployment and related activities

## Notes Content and Format  

Due to the nature of these notes, the content and format might vary depending on the scenario and/or technology to be documented. For example, should the scenario be related to an Exchange deployment, documentation about the server’s structure, communications, etc. might be appropriate. Below is an example of an Environment Note.  

**Exchange:**  

- Exchange 2016 environment on the latest CU.
- Cisco IronPort currently performing eSMTP filtering on inbound mail.
- 2 Edge transport servers.
- Autodiscover records are not published externally.  

**SharePoint / OneDrive:**  

- SharePoint 2013 migration to be handled by a partner.  Partner will also assist with hybrid search configuration.
- 5TB of data on local file shares.  Customer exploring migration of this data through FastTrack.
- OneDrive for Business fully deployed in environment, no GPO configuration in place today.
