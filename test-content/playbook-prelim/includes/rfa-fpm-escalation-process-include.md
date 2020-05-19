---  
# required metadata  
title: FPM Escalation Process 
description: This is an INCLUDE file - inserted into more than one RFA Process Guide flow
author: Erin Saville 
ms.author: v-ersav
manager: steveso
ms.date: 1/25/2020  
ms.topic: playbook  
ms.prod: non-product-specific  
ms.custom: internal-playbook  
ft.audience: internal  
ft.owner: alicia.evans
---
# FPM Escalation Process

## Type and use of document

- Topic category: Request for Assistance (RFA)
- Primary role: Gateway RFA FMs
- Use: Guidance for executing the FPM Escalation Process

## Summary

This article provides step-by-step guidance for Gateway RFA FMs to follow when executing the FPM Escalation Process when the FM is processing an M365 FastTrack Benefit RFA. The FM will employ this conditional step under certain conditions as detailed in the [RFA Process Guide](../rfa-process-guide.md).

## Approach

### 1. Execute FPM Escalation process

Note: *No FPM escalations will be sent to address Assignment Business Rule violations or Assignment Conflicts for customers that are **Targeted for Get Modern**. The assigned Delivery Team will coordinate with the FPM regarding these conflicts.*

1. Select one or more of the following templates to notify the FPM of one of the following conflicts.

    **Note:** In cases where a tenant has both FTOP Assignment and FRP Assignment Business Rule conflicts, templates must be combined to accommodate.

    - Assignment Business Rule conflicts:

        - If the conflict is due to **Windows 10 or Edge** being requested, use the [FPM Escalation – Windows 10 and/or Edge Selected](https://microsoft.sharepoint.com/teams/FastTrackAssignmentTeamLeads/Shared%20Documents/AiR%20Leads/Gateway%20RFA%20Team%20GitHub%20files/rfa-fpm-escalation-windows-10-and-or-edge-selected.msg) template.

        - For all other Assignment Business Rule conflicts, use the [FPM Escalation – Business Rule Violation](https://microsoft.sharepoint.com/teams/FastTrackAssignmentTeamLeads/Shared%20Documents/AiR%20Leads/Gateway%20RFA%20Team%20GitHub%20files/fpm-escalation-business-rule-violation.msg) template.

    - FTOP Assignment conflict (FRP engaged): [FPM Escalation – Already in FTOP (FRP Engaged)](https://microsoft.sharepoint.com/teams/FastTrackAssignmentTeamLeads/Shared%20Documents/AiR%20Leads/Gateway%20RFA%20Team%20GitHub%20files/fpm-escalation-already-in-ftop-frp-engaged.msg) template

    - FTOP Assignment conflict (non-FRP engaged): [FPM Escalation – Already in FTOP (FRP Assigned with non-FRP Engaged)](https://microsoft.sharepoint.com/teams/FastTrackAssignmentTeamLeads/Shared%20Documents/AiR%20Leads/Gateway%20RFA%20Team%20GitHub%20files/fpm-escalation-already-in-ftop-frp-assigned-with-non-frp-engaged.msg) template

1. Start Task 4046

    - Select the **playbook** tab in the RFA tenant record in FTOP.

    - Select the approved workload from the available list.

    - Select the **Assignment** phase.

    - In the **Search** box, search for **4046**.

    - Select **In Progress** for the **Status** of the task and start the timer (this will remain running until the FPM confirms the assignment guidance).

    - Complete the task **Note**, which will include the FPM name (for example, [Michael Barta]).

1. After sending FPM Escalation email, place the RFA **On Hold** by updating the status in the [RFA Assignment Dashboard](https://ftop.microsoft.com/rfa/dashboard/#/) and the [FastTrack Portal](https://fasttrack.microsoft.com/). (For guidance on this step, see the **Links to Status update guidance** section below.)

1. Complete Task 4046

    - Open Task 4046 following the guidance outlined for the task above

    - Select **Complete** for the **Status** of the task and end the timer when the FPM confirms the assignment guidance
