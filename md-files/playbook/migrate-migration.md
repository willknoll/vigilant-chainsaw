---  
# required metadata  
title: FastTrack Playbook - Migration  
description: FastTrack Playbook - Migration  
author: Ryan Meehan  
ms.author: ryanme  
manager: eduardod  
ms.date: 1/31/2020  
ms.topic: playbook  
ms.prod: non-product-specific  
ms.custom: internal-playbook  
ft.audience: internal  
ft.owner: ryanme  
---  
[!INCLUDE [Playbook Feedback](./includes/questions-feedback.md)]  

# Migration

Phase: **Migrate**  
Motions: **Customer Health / RFA / Targeting**  
[!INCLUDE [Data Privacy](./includes/playbook-data-privacy.md)]  

## Overview

Ensure successful customer migration to the cloud (Exchange
Online/OneDrive for Business/SharePoint).

## Objectives

  - Validate technical enablement and customer readiness for migration
  - Execute migration test
  - Transfer engagement to velocity and run velocity migrations
  - Issue management

## Approach

### Validate Email Migration with Test Batch

Primary Role: **FastTrack Engineer**  
Motions: **Customer Health / RFA / Targeting**  
Applies To: **Exchange**

FE will work with customer and MVM to preform a pilot group of 10-15
users for the migration type specified.  \*Use [Validation
Steps​​](https://microsoft.sharepoint.com/teams/ftccm/FTOP/FTC_Migration_Validation.docx)
document for each email migration type and source mail system

​  

### Manage Velocity Migration

Primary Role: **Migration Velocity Manager**  
Motions: **Customer Health / RFA / Targeting**  
Applies To: **Exchange / OneDrive for Business / SharePoint**

Schedule and process customer batch migration to accelerate migration to
the cloud.  

#### FTOP Tasks

| Task ID | Task Name                                                                                         | (M)andatory / (O)ptional |       FastTrack Role       | Services                                      |
| ------- | ------------------------------------------------------------------------------------------------- | :----------------------: | :------------------------: | --------------------------------------------- |
| 3234    | Lead Go-NoGo meetings with customer                                                               |            O             |     FastTrack Manager      | SharePoint / Exchange / OneDrive for Business |
| 3135    | Customer create migration schedule                                                                |            O             |     FastTrack Engineer     | OneDrive for Business / Exchange / SharePoint |
| 3143    | Exchange - Exchange Hybrid Migration Preflight Guidance                     |            O             |     FastTrack Engineer     | Exchange                                      |
| 1328    | Exchange - Remediate identified mailbox problems                                                  |            O             |     FastTrack Engineer     | Exchange                                      |
| 1871    | Direct Migration Activities                                                                       |            M             | Migration Velocity Manager | Exchange / OneDrive for Business / SharePoint |
| 1874    | Exchange - Advise customer to execute on-premises mailbox to mail-enabled users conversion script |            O             |     FastTrack Engineer     | Exchange                                      |
| 3629    | MVM Disengagement and Migration Pause Process                                                     |            M             | Migration Velocity Manager | Exchange / OneDrive for Business / SharePoint |

### Issue Management

Primary Role: **Migration Velocity Manager**  
Motions: **Targeting / RFA / Customer Health**  
Applies To: **Exchange / OneDrive for Business / SharePoint**

Manage and resolve migration issues.  

#### FTOP Tasks

| Task ID | Task Name                                                                                                               | (M)andatory / (O)ptional |       FastTrack Role       | Services                                      |
| ------- | ----------------------------------------------------------------------------------------------------------------------- | :----------------------: | :------------------------: | --------------------------------------------- |
| 2543    | Exchange - Advise customer to report any post migration issues inside T+5 business days from the day of migration event |            O             |     FastTrack Manager      | Exchange                                      |
| 2481    | Post migration support management                                                                                       |            O             | Migration Velocity Manager | Exchange / OneDrive for Business / SharePoint |

### Complete Migration

Primary Role: **Migration Velocity Manager**  
Motions: **Targeting / RFA / Customer Health**  
Applies To: **Exchange / OneDrive for Business / SharePoint**

Validate customer data is successfully migrated and proceed with any
cleanup activities before disengaging.  

#### FTOP Tasks

| Task ID | Task Name                                                                   | (M)andatory / (O)ptional |       FastTrack Role       | Services                                      |
| ------- | --------------------------------------------------------------------------- | :----------------------: | :------------------------: | --------------------------------------------- |
| 2544    | Exchange - Change the MX record based on Mail-flow plan                     |            O             |     FastTrack Engineer     | Exchange                                      |
| 1386    | Exchange - Reset MX DNS Record TTL to original value                        |            O             |     FastTrack Engineer     | Exchange                                      |
| 1370    | Exchange - Email Migration Post-Migration Activities (All Source Systems)   |            O             |     FastTrack Engineer     | Exchange                                      |
| 2561    | OneDrive - OneDrive for Business Post Migration Activities (Setup Redirect) |            O             |     FastTrack Engineer     | OneDrive for Business                         |
| 2323    | Migration Closure Activities                                                |            M             | Migration Velocity Manager | Exchange / OneDrive for Business / SharePoint |
| 4102    | Remove CA Policies and Enable Security Default Policies Post Migrations |            O             |     FastTrack Engineer      | Exchange / OneDrive for Business / SharePoint |
| 1702    | Migrate Exit: All in-scope migrations completed                             |            M             |     FastTrack Manager      | Exchange / OneDrive for Business / SharePoint |

## Key Inputs

  - Migration Workshop
  - Migration Questionnaire
  - Customer infrastructure setup and configuration completed
  - Connectivity requirements met
  - Credential provided by customer
  - Schedule batches (CSV files)

## Key Outputs

  - Successful migration of customer data​  

## Next Steps

  - Progress customer to the [Conduct Adoption and Change Management Conversation](./assess-conduct-adoption-and-change-management-conversation.md)
    process.


## Refresh Summary

| Date      | Who Changed   | What Changed                                                                        |
| --------- | ------------- | ----------------------------------------------------------------------------------- |
| 1/31/2020  | Ryan Meehan | Added task 4102, renamed task 3143 |
| 9/13/2019 | Rosie Arrieta | Conduct Engagement Completion Discussion Removed                                    |
| 8/28/2019 | Rosie Arrieta | Added Conduct Engagement Completion Discussion with the Customer (migration)        |
| 6/28/2019 | Ryan Meehan   | Modified task 3143                                                                  |
| 4/26/2019 | Ryan Meehan   | Removed Deprecated Tasks                                                            |
| 4/26/2019 | Ryan Meehan   | Set the following tasks to optional: 3312, 2026, 3281, 3305, 3615, 3677, 3311, 2481 |
| 3/29/2019 | Ryan Meehan   | CMR 82937                                                                           |
| 2/22/2019 | Ryan Meehan   | Playbook migration to GitHub                                                        |
