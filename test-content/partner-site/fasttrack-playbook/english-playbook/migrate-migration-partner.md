---  
# required metadata  
title: FastTrack Partner Playbook - Migration
description: FastTrack Partner Playbook - Migration
author: Celia Kennedy
ms.author: v-cekenn
manager: pagrim
ms.date: 5/02/2019  
ms.topic: playbook  
ms.prod: non-product-specific  
ms.custom: partner-playbook  
ft.audience: partner  
ft.owner: pagrim  
---  

# Migration

Phase: **Migrate**

## Overview

Ensure successful customer migration to the cloud (Exchange Online/OneDrive for Business/SharePoint).

## Objectives

  - Validate technical enablement and customer readiness for migration
  - Execute migration test
  - Transfer engagement to velocity and run velocity migrations
  - Issue management

## Approach

### Execute Test Migration

Primary Role: **Migration Velocity Manager**  
Applies To: **Exchange / OneDrive for Business / SharePoint**

Execute test migration and validate customer infrastructure is prepared for velocity migration.  

#### FTOP Tasks

| Task ID | Task Name                                                             | (M)andatory / (O)ptional |   FastTrack Role   | Services |
| ------- | --------------------------------------------------------------------- | :----------------------: | :----------------: | -------- |
| 1330    | Exchange - Validate Email Migration with Test Batch (FE and Customer) |            O             | FastTrack Engineer | Exchange |

### Create Transition Documents and Transition Project to Universal Partner

Primary Role: **Migration Velocity Manager**  
Applies To: **Exchange / OneDrive for Business / SharePoint**

Create documentation to transition engagement toward the Universal Partner Model (UPM) partner.  

### Manage Velocity Migration

Primary Role: **Migration Velocity Manager**  
Applies To: **Exchange / OneDrive for Business / SharePoint**

Schedule and process customer batch migration to accelerate migration to the cloud.  

#### FTOP Tasks

| Task ID | Task Name                | (M)andatory / (O)ptional |       FastTrack Role       | Services      |
| ------- | -----------------------------------------| :----------------------: | :------------------------: | ---------------|
| 3234    | Lead Go-NoGo meetings with customer  |         O             |     FastTrack Manager      | SharePoint / Exchange / OneDrive for Business |
| 3135    | Customer create migration schedule   |         O             |     FastTrack Engineer     | OneDrive for Business / Exchange / SharePoint |
| 3143    | [Exchange Hybrid Migration Preflight Guidance](https://aka.ms/FTCPreflight) Customers must check mailboxes prior to scheduling mitigation of inflight errors during migration|  O  |  FastTrack Engineer | Exchange|| 1328    | Exchange - Remediate identified mailbox problems |   O         |     FastTrack Engineer     | Exchange                                       |
| 3629    | MVM Disengagement and Migration Pause Process  |   M        | Migration Velocity Manager | Exchange / OneDrive for Business / SharePoint |
| 1871    | Direct Migration Activities|            M             | Migration Velocity Manager | Exchange / OneDrive for Business / SharePoint |
| 1874    | Exchange - Advise customer to execute on-premises mailbox to mail-enabled users conversion script |          O             |     FastTrack Engineer     | Exchange |

### Issue Management

Primary Role: **Migration Velocity Manager**  
Applies To: **Exchange / OneDrive for Business / SharePoint**

Manage and resolve migration
issues.  

#### FTOP Tasks

| Task ID | Task Name                                                                                                               | (M)andatory / (O)ptional |       FastTrack Role       | Services              |
| ------- | ----------------------------------------------------------------------------------------------------------------------- | :----------------------: | :------------------------: | --------------------- |
| 2543    | Exchange - Advise customer to report any post migration issues inside T+5 business days from the day of migration event |            O             |     FastTrack Manager      | Exchange              |
| 2481    | OneDrive - Assist customer with items not synchronized and other migration issues                                       |            O             | Migration Velocity Manager | OneDrive for Business |

### Complete Migration

Primary Role: **Migration Velocity Manager**  
Applies To: **Exchange / OneDrive for Business / SharePoint**

Validate customer data is successfully migrated and proceed with any cleanup activities before disengaging.  

#### FTOP Tasks

| Task ID | Task Name               | (M)andatory / (O)ptional | FastTrack Role             | Services                                      |
|---------|---------------------------------------------------|--------------------------|----------------------------|-----------------------------------------------|
| 2544    | Exchange - Change the MX record based on Mail-flow plan     | O                        | FastTrack Engineer         | Exchange                                      |
| 1386    | Exchange - Reset MX DNS Record TTL to original value          | O                        | FastTrack Engineer         | Exchange                                      |
| 1370    | Exchange - Email Migration Post-Migration Activities (All Source Systems)          | O                        | FastTrack Engineer         | Exchange                                      |
| 2561    | OneDrive - OneDrive for Business Post Migration Activities (Setup Redirect)         | O                        | FastTrack Engineer         | OneDrive for Business                         |
| 2323    | Migration Closure Activities               | M                        | Migration Velocity Manager | Exchange / OneDrive for Business / SharePoint |
| 4102    | Remove CA Policies & Enable Security Defaults Post Migration [Instructions](https://aka.ms/AA75m9r) FRP can [Request Identity SME](https://aka.ms/FRPHubSMERequestProcess) for optional assistance | O                        | FastTrack Engineer         | Exchange / OneDrive for Business / SharePoint |
| 1702    | Migrate Exit: All in-scope migrations completed     | M                        | FastTrack Manager          | Exchange / OneDrive for Business / SharePoint |

### Uncategorized Tasks (Migration)

Primary Role: **-**  
Applies To: **All Services**

Uncategorized FastTrack Orchestration Portal (FTOP) tasks that are not yet incorporated into the FastTrack Playbook flow will appear here.  

## Key Inputs

  - Migration Workshop
  - Migration Questionnaire
  - Customer infrastructure setup and configuration completed
  - Connectivity requirements met
  - Credential provided by customer
  - Schedule batches (CSV files)

## Key Outputs

- Successful migration of customer data

## Next Steps

  - Progress customer to the [Support Success Execution](success-support-success-execution-partner.md) process.
  - Progress customer to the [Conduct Success Review](success-conduct-success-review-partner.md) process.


## Refresh Summary

| Date       | Who Changed       | What Changed        |
| ---------- | ----------------- | ----------------    |
| 03/27/2019 | Celia Kennedy     | General Maintenance |
| 1/31/2020  | Celia Kennedy | Added task 4102, renamed task 3143 |
| 09/25/2019 | Celia Kennedy     | Update Partner Content |
| 05/02/2019 | Celia Kennedy     | Deprecated Tasks Removed |
| 03/06/2019 | Patric Grimwood   | Updated links in Next Steps |
| 02/26/2019 | Patric Grimwood   | Partner links updated |
| 12/11/2018 | Mark Eichenberger | Playbook Created      |

[Home](http://partner-docs.microsoft.com)
