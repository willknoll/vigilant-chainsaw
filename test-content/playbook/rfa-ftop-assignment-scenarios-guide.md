---
# required metadata  
title: FastTrack Playbook - FTOP assignment scenarios guide
description: FastTrack Playbook - RFA guidance for FTOP assignment scenarios
author: Erin Saville  
ms.author: v-ersav
manager: steveso
ms.date: 01/03/2020  
ms.topic: playbook  
ms.prod: non-product-specific  
ms.custom: internal-playbook  
ft.audience: internal  
ft.owner: alicia.evans

---

[!INCLUDE [Playbook Feedback](./includes/questions-feedback.md)]  

# FTOP Assignment Scenarios Guide

## Type and use of document

- Topic category: Request for Assistance (RFA)
- Primary role: Gateway RFA FMs
- Use: Scenario-based downstream assignment reference and guidance for the Standard RFAs (not Customer Health, for example).

## Summary

This article is a reference and process guide providing step-by-step scenario-based assignment guidance for Gateway RFA FMs to follow near the conclusion of processing an M365 FastTrack Benefit RFA submitted via the [FastTrack Portal](https://fasttrack.microsoft.com/). This is part of the Standard flow of the [RFA Process Guide](rfa-process-guide.md).

## FTOP assignment scenarios

The following instructions outline most common FTOP Assignment Scenarios related to Customer Type. Corner case scenarios that are not covered here may occur; in which case you may need to consult your lead(s) for next steps.

**Note:** If Amy Wilburn or Erik Svenson are assigned to the tenant, it may be an incubation customer and should not be reassigned from their queues (unless you are specifically instructed otherwise). For any escalations related to tenants assigned to Amy Wilburn or Erik Svenson, cc: Steve Sosa-Krall ([steveso@microsoft.com](mailto:steveso@microsoft.com)) if he is not already copied.

### A. RM = *[Gateway Queue](rfa-ftc-leads-contact-list-and-queue-information.md#gateway-queues)*

#### Criteria for scenario identification

- **FM** = *Validation FM* or *N/A*
- **FE** = *N/A*

#### Instructions

1. If [Assignment Business Rules](rfa-assignment-business-rules.md) are met, assign to **FTCQ All FTC** for FRP Referral.

1. *For FRP engagements **only**:* Reassign the tenant to the FRP of record.

1. If [Assignment Business Rules](rfa-assignment-business-rules.md) are *not* met, assign to Regional CSS queue (FTCQ CSS [*Americas*, *EMEA* or *APJ*]).

1. If MDATP, OATP, or both workloads were selected on the RFA form, they will be assigned as primary at the workload level to FTCQ CSS [Americas, EMEA, or APJ] unless the tenant meets [MDATP/OATP CAT Team requirements](rfa-assignment-business-rules.md#footnote-reference). This is in addition to any other queue assignments per the guidance above.

### B. RM = *FTCQ All FTC*

#### Criteria for scenario identification

- **FM** = *N/A*
- **FE** = *N/A*

#### Instructions

1. *For FRP engagements **only**:* Reassign the tenant to the FRP using the following steps since Delivery is not actively engaged:

    1. Navigate to the **Playbook** tab in the customer dashboard.

    1. Type **3186** in the **Search** box.

    1. Complete the Task and add a time stamp.

    1. Add the note with the relevant FRP queue, for example, [FTPQ Avanade].

    1. Click **Save**.

    1. Return to the **Assignments** window.

    1. Remove FTCQ All FTC as RM.

    1. Assign the FastTrack-Ready RM (for example, FTP Avanade US) as RM in the **Onboarding** tab of the **Assignments** window.

        1. Check the **Tenant** box.

        1. Check the **Primary** box at the tenant level.

        1. Check the **Primary** box or boxes next to the workloads requested in the RFA.

    1. Assign the FTPQ (for example, FTPQ Avanade) as an additional RM in the **Onboarding** tab and check the **Tenant** box.

    1. Assign the [FPM](https://msit.powerbi.com/groups/me/dashboards/2d456979-c0ff-4a19-a2a8-2c92c791ef91) in the **Onboarding** tab and check the **Tenant** box.

    1. Assign the [Partner](https://msit.powerbi.com/groups/me/dashboards/2d456979-c0ff-4a19-a2a8-2c92c791ef91) as RM in the **Partner** tab.

        1. Type the RM Partner Queue Name into the RM field.

        1. If a drop-down appears when you start typing, select the correct Partner from the list.

    1. Click Apply Assignments.

1. If **MDATP**, **OATP**, or both workloads were selected on the RFA form, they will be assigned as primary at the workload level to FTCQ CSS [Americas, EMEA, or APJ] unless the tenant meets [MDATP/OATP CAT Team requirements](rfa-assignment-business-rules.md#footnote-reference). If other workloads are selected on the RFA Form, tenant will also remain assigned to FTCQ All FTC for the non MDATP and OATP workloads.

### C. RM = *[FTC Regional Delivery Queue](rfa-ftc-leads-contact-list-and-queue-information.md#ftc-regional-queues)* or *[Holding Queue](rfa-ftc-leads-contact-list-and-queue-information.md#ftc-holding-queues)*

#### Criteria for scenario identification

- **FM** = *N/A*
- **FE** = *N/A*

#### Instructions

1. *For FRP engagements **only**:* Reassign the tenant to the FRP using the following steps since Delivery is not actively engaged:

    1. On the **Assignments** window, remove the CSS queue as RM (and FM if applicable).

    1. Assign the FastTrack-Ready RM (for example, FTP Avanade US) as RM in the **Onboarding** tab of the **Assignments** window.

        1. Check the **Tenant** box.

        1. Check the **Primary** box at the tenant level.

        1. Check the **Primary** box or boxes next to the workloads requested in the RFA.

    1. Assign the FTPQ (for example, FTPQ Avanade) as an additional RM in the **Onboarding** tab and check the **Tenant** box.

    1. Assign the [FPM](https://msit.powerbi.com/groups/me/dashboards/2d456979-c0ff-4a19-a2a8-2c92c791ef91) in the **Onboarding** tab and check the **Tenant** box.

    1. Assign the [Partner](https://msit.powerbi.com/groups/me/dashboards/2d456979-c0ff-4a19-a2a8-2c92c791ef91) as RM in the **Partner** tab.

        1. Type the RM Partner Queue Name into the RM field.

        1. If a drop-down appears when you start typing, select the correct Partner from the list.

    1. Click **Apply Assignments**.

1. *For customers without a Partner* **only**.

    1. If the customer does not meet all the [Assignment Business Rules](rfa-assignment-business-rules.md) criteria, follow **C.1.** above.

    1. If the customer meets all of the criteria in the [Assignment Business Rules](rfa-assignment-business-rules.md) reassign the tenant to **FTCQ All FTC** so the tenant can be sent through the FRP Referral process.

1. If **MDATP**, **OATP**, or both workloads were selected on the RFA form, they will be assigned as primary at the workload level to FTCQ CSS [Americas, EMEA, or APJ] unless the tenant meets [MDATP/OATP CAT Team requirements](rfa-assignment-business-rules.md#footnote-reference).

### D. RM = *FTC RM*

#### Criteria for scenario identification

- **FM** = *FTC FM*
- **FE** = *FTC FE*

#### Instructions

1. **Action:** Assign the relevant regional CSS queue (that is, FTCQ CSS [Americas, EMEA or APJ]) as primary at the Tenant level. All other existing RM(s) will remain assigned.

1. **Action:** Assign the CSS queue as primary at the workload level for all approved workloads being assigned to CSS.

    ***or***

1. *For FRP engagements **only**:*

    1. If the tenant needs to remain assigned to the current team, no additional assignment is needed and the RFA can continue being processed.

    1. If the tenant needs to be reassigned to the FRP, follow these steps:

        1. On the **Assignments** window, remove the CSS Team (RM, FM, and FE), unless it is a split workload scenario.

        1. Assign the FastTrack-Ready RM (for example, FTP Avanade US) as RM in the **Onboarding** tab of the **Assignments** window.

            1. Check the **Tenant** box.

            1. Check the **Primary** box at the tenant level.

            1. Check the **Primary** box or boxes next to the workloads requested in the RFA.

        1. Assign the FTPQ (for example, FTPQ Avanade) as an additional RM in the **Onboarding** tab and check the **Tenant** box.

        1. Assign the [FPM](https://msit.powerbi.com/groups/me/apps/f8dbc5ed-8560-4384-99bb-6486899741e9/reports/0044c4ce-f721-4137-b985-10df1bb7ea17/ReportSection?ctid=72f988bf-86f1-41af-91ab-2d7cd011db47) in the **Onboarding** tab and check the **Tenant** box.

        1. Assign the Partner as RM in the **Partner** tab.

            1. Type the RM Partner Queue Name into the RM field.

            1. If a drop-down appears when you start typing, select the correct Partner from the list.

        1. Click **Apply Assignments**.

    ***or***

1. *For customers without a Partner **only**:*

    1. If the customer does not meet all the [Assignment Business Rules](rfa-assignment-business-rules.md) criteria, follow steps **D.1.** and **D.2.** above.

    1. If the current FM or FE is actively engaged, no additional assignment is needed and the RFA can continue being processed using steps **D.1.** and **D.2.** above.

    1. If the current FM and FE are inactive (that is, tenant has not been worked on within the last 60 days) the customer meets all of the criteria in the [Assignment Business Rules](rfa-assignment-business-rules.md), reassign the tenant to FTCQ All FTC so the tenant can be sent through the FRP Referral process.

1. If **MDATP**, **OATP**, or both workloads were selected on the RFA form, they will be assigned as primary at the workload level to FTCQ CSS [Americas, EMEA, or APJ] unless the tenant meets [MDATP/OATP CAT Team requirements](rfa-assignment-business-rules.md#footnote-reference).

### E. RM = *FTCQ Already Onboarded*, *FTCQ Not Ready*, *[CSS Holding Queue](rfa-ftc-leads-contact-list-and-queue-information.md#ftc-holding-queues)*, or *N/A*

#### Criteria for scenario identification

- **FM** = *CSS FM, N/A (Previously CSS FM),* or *[Holding Queue](rfa-ftc-leads-contact-list-and-queue-information.md#ftc-holding-queues) (Previously CSS FM)*
- **FE** = *N/A* – where either RM or FM is not N/A

#### Instructions

1. **Action:** Assign the relevant regional CSS queue (that is, FTCQ CSS [Americas, EMEA or APJ]) as primary at the Tenant level. All other existing RM(s) will remain assigned.

1. **Action:** Assign the CSS queue as primary at the workload level for all approved workloads being assigned to CSS.

    ***or***

1. *For FRP engagements:*

    1. If the tenant needs to remain assigned to the current team, no additional assignment is needed and the RFA can continue being processed.

    1. If the tenant needs to be reassigned to the FRP, follow these steps:

        1. On the **Assignments** window, remove the CSS Team (RM, FM, and FE), unless it is a split workload scenario.

        1. Assign the FastTrack-Ready RM (for example, FTP Avanade US) as RM in the **Onboarding** tab of the **Assignments** window.

            1. Check the **Tenant** box.

            1. Check the **Primary** box at the tenant level.

            1. Check the **Primary** box or boxes next to the workloads requested in the RFA.

        1. Assign the FTPQ (for example, FTPQ Avanade) as an additional RM in the **Onboarding** tab and check the **Tenant** box.

        1. Assign the [FPM](https://msit.powerbi.com/groups/me/apps/f8dbc5ed-8560-4384-99bb-6486899741e9/reports/0044c4ce-f721-4137-b985-10df1bb7ea17/ReportSection?ctid=72f988bf-86f1-41af-91ab-2d7cd011db47) in the **Onboarding** tab and check the **Tenant** box.

        1. Assign the Partner as RM in the **Partner** tab.

            1. Type the RM Partner Queue Name into the RM field.

            1. If a drop-down appears when you start typing, select the correct Partner from the list.

        1. Click **Apply Assignments**.

1. *For Customers Without a Partner:*

    1. If the customer does not meet all the [Assignment Business Rules](rfa-assignment-business-rules.md) criteria, follow steps **E.1.** and **E.2.** above.

    1. If the current FM or FE is actively engaged (that is, tenant was active within the last 60 days), no additional assignment is needed and the RFA can continue being processed using steps **E.1.** and **E.2.** above.

    1. If the current FM and FE are inactive (that is, tenant has not been worked on within the last 60 days) the customer meets all of the criteria in the [Assignment Business Rules](rfa-assignment-business-rules.md), reassign the tenant to FTCQ All FTC so the tenant can be sent through the FRP Referral process.

1. If **MDATP**, **OATP**, or both workloads were selected on the RFA form, they will be assigned as primary at the workload level to FTCQ CSS [Americas, EMEA, or APJ] unless the tenant meets [MDATP/OATP CAT Team requirements](rfa-assignment-business-rules.md#footnote-reference).

### F. RM = *FTPQ [FRP Partner]*, *FRP RM*

#### Criteria for scenario identification

- **FM** = *FRP FM*
- **FE** = *N/A*

#### Instructions

1. If the tenant needs to remain assigned to the current team, no additional assignment is needed.

1. If the tenant needs to be reassigned to the FRP, follow these steps:

    1. On the **Assignments** window, remove the CSS Team (RM, FM, and FE), unless it is a split workload scenario.

    1. Assign the FastTrack-Ready RM (for example, FTP Avanade US) as RM in the **Onboarding** tab of the **Assignments** window.

        1. Check the **Tenant** box.

            1. Check the **Primary** box at the tenant level.

            1. Check the **Primary** box or boxes next to the workloads requested in the RFA.

    1. Assign the FTPQ (for example, FTPQ Avanade) as an additional RM in the **Onboarding** tab and check the **Tenant** box.

    1. Assign the [FPM](https://msit.powerbi.com/groups/me/apps/f8dbc5ed-8560-4384-99bb-6486899741e9/reports/0044c4ce-f721-4137-b985-10df1bb7ea17/ReportSection?ctid=72f988bf-86f1-41af-91ab-2d7cd011db47) in the **Onboarding** tab and check the **Tenant** box.

    1. Assign the Partner as RM in the **Partner** tab.

        1. Type the RM Partner Queue Name into the RM field.

        1. If a drop-down appears when you start typing, select the correct Partner from the list.

    1. Click **Apply Assignments**.

1. If **MDATP**, **OATP**, or both workloads were selected on the RFA form, they will be assigned as primary at the workload level to FTCQ CSS [Americas, EMEA, or APJ] unless the tenant meets [MDATP/OATP CAT Team requirements](rfa-assignment-business-rules.md#footnote-reference).

### G. RM = *FTCQ Already Onboarded* or *FTCQ Not Ready*

#### Criteria for scenario identification

- **FM** = *FRP FM* or *N/A (Previously assigned FRP FM)*
- **FE** = *N/A*

#### Instructions

1. Assign the tenant back to the FRP Partner using these steps:

    1. Assign the FRP RM (for example, FTP Avanade US) as RM in the “Onboarding” tab of the “Assignments” window.

        1. Check the **Tenant** box.

        1. Check the **Primary** box at the tenant level.

        1. Check the **Primary** box or boxes next to the workloads requested in the RFA.

    1. Assign the FTPQ (for example, FTPQ Avanade) as an additional RM in the **Onboarding** tab and check the **Tenant** box.

    1. Assign the [PRM(s)](https://msit.powerbi.com/groups/me/apps/f8dbc5ed-8560-4384-99bb-6486899741e9/reports/0044c4ce-f721-4137-b985-10df1bb7ea17/ReportSection?ctid=72f988bf-86f1-41af-91ab-2d7cd011db47) as additional RM(s) in the **Onboarding** tab and check the **Tenant** box.

    1. Assign the [FPM](https://msit.powerbi.com/groups/me/apps/f8dbc5ed-8560-4384-99bb-6486899741e9/reports/0044c4ce-f721-4137-b985-10df1bb7ea17/ReportSection?ctid=72f988bf-86f1-41af-91ab-2d7cd011db47) in the **Onboarding** tab and check the **Tenant** box.

    1. Assign the [Partner](https://msit.powerbi.com/groups/me/apps/f8dbc5ed-8560-4384-99bb-6486899741e9/reports/0044c4ce-f721-4137-b985-10df1bb7ea17/ReportSection?ctid=72f988bf-86f1-41af-91ab-2d7cd011db47) as RM in the **Partner** tab.

        1. Type the RM Partner Queue Name into the RM field.

        1. If a drop-down appears when you start typing, select the correct Partner from the list.

    1. Click **Apply Assignments**.

1. *For FRP Engagements*:

    1. If no FM and FE are assigned, reassign the tenant to the FRP using steps **G.1.1.** - **G.1.6** above.

    1. If an FM or FE is assigned, complete assignment instructions previously provided by the FPM.

1. If **MDATP**, **OATP**, or both workloads were selected on the RFA form, they will be assigned as primary at the workload level to FTCQ CSS [Americas, EMEA, or APJ] unless the tenant meets [MDATP/OATP CAT Team requirements](rfa-assignment-business-rules.md#footnote-reference).

### H. RM = *Widget RM*

#### Criteria for scenario identification

- **FM** = *N/A*
- **FE** = *N/A* or *Widget FE*
- **Reason Name** = *Rave / Widget Tenants*

#### Instructions

1. **Action:** Review the Overall Status notes and assignments to determine if it is necessary to follow up with the assigned team prior to reassigning the tenant.

    (Note: *Generally, the assigned Widget team can be removed without follow up if the tenant has a **Widget – Completed** or **Close – Completed** Overall Status. If the tenant does not meet this criteria (for example, if an active FM is also assigned), you may want to check in with the assigned team first to determine if they will continue handling the engagement.*)

    ***and***

1. **Action:** Assign the tenant to either **FTCQ All FTC** if the tenant meets FRP Assignment Business rule requirements.

    ***or***

1. **Action:** Assign the tenant to **FTCQ CSS Americas, EMEA, or APJ** if the tenant does not meet FRP Assignment Business rule requirements.

    ***or***

1. **Action** *For FRP Engagements only*: Assign the tenant to the FRP of record.

1. If **MDATP**, **OATP**, or both workloads were selected on the RFA form, they will be assigned as primary at the workload level to FTCQ CSS [Americas, EMEA, or APJ] unless the tenant meets [MDATP/OATP CAT Team requirements](rfa-assignment-business-rules.md#footnote-reference).

### I. RM = *FTCQ PreSales*

#### Criteria for scenario identification

- **FM** = *N/A*
- **FE** = *N/A*
- **FA** = *N/A*
- **Reason Name** = *FT Presales Architect Request*

#### Instructions

*All tenants with Reason Name = FT Presales Architect Request should have an accompanying FTA RFA.*

1. **Action:** *If the FTA RFA is* **On Hold**, forward any relevant threads with key RFA information to the individual who updated the FTA RFA FastTrack Portal note to determine how the tenant will be handled. Copy Mark Miller ([Miller.Mark@microsoft.com](mailto:Miller.Mark@microsoft.com)). (See [FTCQ Pre-Sales request template](https://microsoft.sharepoint.com/teams/FastTrackAssignmentTeamLeads/Shared%20Documents/AiR%20Leads/Gateway%20RFA%20Team%20GitHub%20files/ftcq-presales-request-template.msg)).

    ***or***

1. **Action:** Assign the tenant to either **FTCQ All FTC** if the tenant meets FRP Assignment Business rule requirements.

    ***or***

1. **Action:** Assign the tenant to **FTCQ CSS Americas, EMEA, or APJ** if the tenant does not meet FRP Assignment Business rule requirements.

    ***or***

1. **Action** *For FRP Engagements only*: Assign the tenant to the FRP of record.

1. If **MDATP**, **OATP**, or both workloads were selected on the RFA form, they will be assigned as primary at the workload level to FTCQ CSS [Americas, EMEA, or APJ] unless the tenant meets [MDATP/OATP CAT Team requirements](rfa-assignment-business-rules.md#footnote-reference).

### J. RM = *FTCQ PreSales*

#### Criteria for scenario identification

- **FM** = *N/A*
- **FE** = *N/A*
- **FA** = *FA*
- **Reason Name** = *FT Presales Architect Request*

#### Instructions

1. **Action:** Forward any relevant threads with key RFA information to the FTA to determine how the tenant will be handled. Copy Mark Miller ([Miller.Mark@microsoft.com](mailto:Miller.Mark@microsoft.com)). (See [FTCQ Pre-Sales request template](https://microsoft.sharepoint.com/teams/FastTrackAssignmentTeamLeads/Shared%20Documents/AiR%20Leads/Gateway%20RFA%20Team%20GitHub%20files/ftcq-presales-request-template.msg)).

    ***or***

1. ACTION: Assign the tenant to either FTCQ All FTC if the tenant meets FRP Assignment Business rule requirements.

    ***or***

1. ACTION: Assign the tenant to FTCQ CSS Americas/EMEA/APJ if the tenant does not meet FRP Assignment Business rule requirements.

    ***or***

1. **Action** *For FRP Engagements only*: Assign the tenant to the FRP of record.

1. If **MDATP**, **OATP**, or both workloads were selected on the RFA form, they will be assigned as primary at the workload level to FTCQ CSS [Americas, EMEA, or APJ] unless the tenant meets [MDATP/OATP CAT Team requirements](rfa-assignment-business-rules.md#footnote-reference).

[!INCLUDE [rfa-resources-for-footer-of-every-article-include](includes/rfa-resources-for-footer-of-every-article-include.md)]

## Refresh Summary

| Date       | Who Changed       | What Changed                                                                              |
| ---------- | ----------------- | ----------------------------------------------------------------------------------------- |
| 4/30/2020  | Ben Skoropinski   | Created Refresh Summary.                                                                  |
