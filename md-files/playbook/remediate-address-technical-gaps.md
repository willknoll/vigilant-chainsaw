---  
# required metadata  
title: FastTrack Playbook - Address Technical Gaps  
description: FastTrack Playbook - Address Technical Gaps  
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

# Address Technical Gaps

Phase: **Remediate**  
Motions: **Customer Health / RFA / Targeting**  
[!INCLUDE [Data Privacy](./includes/playbook-data-privacy.md)]  

## Overview

The Address Technical Gaps process identifies and addresses technical
gaps ahead of deployment to enable the customer's consistent and timely
workload deployment and avoid frustration or delays due to
infrastructure or other technical blockers.

## Objectives

  - Remediate all deficiencies identified during assessment.
  - Ensure customer environment conforms to minimum standard for
    enablement.
  - Complete core onboarding activities including identity remediation
    and synchronization.

## Approach

### Conduct Checkpoint Meetings

Primary Role: **FastTrack Engineer**  
Motions: **Customer Health / RFA / Targeting**  
Applies To: **All Services**

Conduct a checkpoint meeting (weekly or other frequency) to review progress on remediation steps. Refer to [Sync Meeting Guidance](https://fasttrack-docs.microsoft.com/references/sync-meeting-guidance/) to help you have more effective meetings with your customers.  

**Step Inputs (the checklist of items you should collect to be successful with this step)**
- Remediation Checklist
- Engagement Management or Technical Enablement note documenting the following:
    - The set of remediation items to be discussed in the meeting  

**Step Outputs (the set of items you should make sure are documented to successfully exit this step)**
- Engagement Management or Technical Enablement note documenting the following:
    - The set of remediation items that were addressed during the meeting
    - The set of remediation items that will be discussed at the next meeting  


### Assist with Remediation Steps

Primary Role: **FastTrack Engineer**  
Motions: **Customer Health / RFA / Targeting**  
Applies To: **All Services**

Assist with remediation steps as required.  

**Step Inputs (the checklist of items you should collect to be successful with this step)**
- Technical Enablement note(s) documenting the following:
    - List of blockers, constraints, out of scope items regarding remediation 
    - In-scope remediation checklists have been delivered and reviewed with the customer
    - Remediation items to be resolved prior to deployment  

**Step Outputs (the set of items you should make sure are documented to successfully exit this step)**
- Technical Enablement note that documents the following:
    - Remediation items that were resolved from the in-scope remediation checklists  


#### FTOP Tasks

| Task ID | Task Name                                                        | (M)andatory / (O)ptional |   FastTrack Role   | Services           |
| ------- | ---------------------------------------------------------------- | :----------------------: | :----------------: | ------------------ |
| 3184    | AAD Connect Health - Verify System requirements                  |            O             | FastTrack Engineer | Core Onboarding    |
| 2193    | SfB - Advanced features remediation and long poles               |            O             | FastTrack Engineer | Skype for Business |
| 3224    | EDU: Remediate Classroom & SDS                                   |            O             | FastTrack Engineer | Classroom/SDS      |
| 3998    | MIP – Verify Pre-Requisites                                      |            O             |        SME         | AIP                |
| 4073    | Network – Address identified network issues from netonboard tool |            O             | FastTrack Engineer | Core Onboarding    |
| 4080    | MDATP - Proxy Configuration including URL Whitelisting           |            M             |        SME         | MDATP              |
| 4096    | Microsoft Edge Site Discovery                                    |            O             |        SME         | Edge               |
| 4101    | Replace Security Default Policies with CA Policies for Migrations |            O             |    FastTrack Engineer | Exchange / OneDrive for Business / SharePoint |

### Enterprise Additional Benefit Remediation

Primary Role: **FastTrack Engineer**  
Motions: **Customer Health / RFA / Targeting**  
Applies To: **Exchange / Skype for Business**

For approved enterprise customers only with 20,000 seats or more, or with an exception.  

**Step Inputs (the checklist of items you should collect to be successful with this step)**
- Customer has qualified as enterprise type (entitlements > 20,000 or by exception) and has an FTA assigned
- Services Assessment Workshops have been completed for in scope services and task status set appropriately:
    - Get Modern assessment and plan (task 4061, task 4035)
    - OPP client deployment type and method (task 4090, task 4091, task 4092)
    - Security, Compliance, and Regulatory tenant features and administration, if needed (task 3380)
    - Migration planning, if needed (task 3202, task 3203, task 3204)
    - Identity management, if needed (task 3365)
    - Exchange Online unified messaging, if needed (3236)
- Customer Environment notes documenting the following:
    - created and updated Remediation Checklist delivered to customer  

**Step Outputs (the set of items you should make sure are documented to successfully exit this step)**
- Customer Environment notes documenting the following:
    - updated with remediation progress
- Technical Enablement notes documenting the following:
    - updated with remediation completion
    - Migration Planning and pilot schedule creation complete, as needed (task 3208, task 3209, task 3358)  

#### FTOP Tasks

| Task ID | Task Name                                                   | (M)andatory / (O)ptional |     FastTrack Role     | Services                                      |
| ------- | ----------------------------------------------------------- | :----------------------: | :--------------------: | --------------------------------------------- |
| 3208    | Exchange - Mailbox Grouping and Planning Migration Planning |            O             |   FastTrack Engineer   | Exchange                                      |
| 3209    | SfB - User Migration Remediation                            |            O             |   FastTrack Engineer   | Skype for Business                            |
| 3358    | Deep Dive Migration Planning Workshop                       |            O             | FastTrack Architect v2 | Exchange / OneDrive for Business / SharePoint |

### Remediation Checklist Resolved

Primary Role: **FastTrack Manager**  
Motions: **Customer Health / RFA / Targeting**  
Applies To: **All Services**

Move to the enable phase and complete the Remediate Exit process.  

**Step Inputs (the checklist of items you should collect to be successful with this step)**
- Technical Enablement note that documents the following:
    - Remediation items that were resolved from the in-scope remediation checklists  

**Step Outputs (the set of items you should make sure are documented to successfully exit this step)**
- Engagement Management note that documents the following: 
    - Confirms the customer has reviewed the in-scope remediation checklists and resolved all items on the checklists and can move to deployment  
- Technical Enablement note that documents the following:  
    - Any customer challenges in resolving any in-scope remediation checklist items
        - SME or the App Assure team was requested to help customer finalize remediation items  


#### FTOP Tasks

| Task ID | Task Name                                                                       | (M)andatory / (O)ptional |   FastTrack Role   | Services     |
| ------- | ------------------------------------------------------------------------------- | :----------------------: | :----------------: | ------------ |
| 3190    | Confirm the customer reviews and resolves anything in the remediation checklist |            M             | FastTrack Engineer | All Services |
| 1700    | Remediate Exit: All items in Remediation Checklist resolved                     |            M             | FastTrack Manager  | All Services |

## Key Inputs

  - All technical assessment activities are completed (Remediation
    Checklist).
  - Customer has identified additional resources to complete remediation
    (Partner/MCS/Premier).

## Key Outputs

  - All identified remediation steps are resolved, and the customer
    continues to the Enable phase.
  - Customer environment meets or exceeds minimum standards for cloud
    service enablement.
  - Identity is remediated; and provisioning and synchronization are
    configured and active.
  - Pilot users/groups are identified and prepared for migration to
    cloud workloads.

## Next Steps

- Prepare pilot users/groups for enablement.
- Proceed to the [Enable Services](enable-enable-services.md) process.

## Refresh Summary

| Date       | Who Changed       | What Changed                                 |
| ---------- | ----------------- | -------------------------------------------- |
| 1/31/2020  | Rosie Arrieta | Added task 4096 |
| 1/31/2020  | Ryan Meehan | Added task 4101 |
| 10/25/2019 | Ryan Meehan       | Added tasks 4080 and 3358                    |
| 6/28/2019  | Maria Conceição   | Modified step "Review Remediation Checklist" |
| 4/26/2019  | Rosie Arrieta     | CRM 69844                                    |
| 4/26/2019  | Rosie Arrieta     | Removed Deprecated Tasks                     |
| 2/22/2019  | Ryan Meehan       | Playbook migration to GitHub                 |
| 12/11/2018 | Mark Eichenberger | Playbook Created                             |
| 12/7/2018  | Ryan Meehan       | Minor formatting changes                     |