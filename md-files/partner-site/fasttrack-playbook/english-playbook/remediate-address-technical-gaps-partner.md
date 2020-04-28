---  
# required metadata  
title: FastTrack Partner Playbook - Address Technical Gaps  
description: FastTrack Partner Playbook - Address Technical Gaps  
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

# Address Technical Gaps

Phase: **Remediate**

## Overview

The Address Technical Gaps process identifies and addresses technical gaps ahead of deployment to enable the customer's consistent and timely workload deployment and avoid frustration or delays due to
infrastructure or other technical blockers.

## Objectives

  - Remediate all deficiencies identified during assessment.
  - Ensure customer environment conforms to minimum standard for enablement.
  - Complete core onboarding activities including identity remediation and synchronization.

## Approach

### Review Remediation Checklist

Primary Role: **FastTrack Engineer**  
Applies To: **All Services**

Review the Remediation Checklist with the customer.

### Conduct Checkpoint Meetings

Primary Role: **FastTrack Engineer**  
Applies To: **All Services**

Conduct a checkpoint meeting (weekly or other frequency) to review progress on remediation steps.

### Assist with Remediation Steps

Primary Role: **FastTrack Engineer**  
Applies To: **All Services**

Assist with remediation steps as required.

#### FTOP Tasks

| Task ID | Task Name     | (M)andatory / (O)ptional | FastTrack Role | Services |
|---------|---------------|--------------------------|--------------------------|--------------------------|
| 3184    | AAD Connect Health - Verify System requirements | O FastTrack Engineer | Core Onboarding       |
| 2193    | SfB - Advanced features remediation and long poles | O  | FastTrack Engineer | Skype for Business |
| 3224    | EDU: Remediate Classroom & SDS  | O | FastTrack Engineer | Classroom/SDS    |
| 3998    | MIP - Verify pre-requisites     | M                        | SME                | AIP |
| 4073    | Network – Address identified network issues from netonboard tool  | O  | FastTrack Engineer | Core Onboarding  |
| 4080  | [MDATP - Proxy Configuration including URL Whitelisting](https://docs.microsoft.com/en-us/windows/security/threat-protection/microsoft-defender-atp/configure-proxy-internet)  |M |  SME | MDATP              |
| 4101    | Replace Security Default Policies with CA Policies for Migrations - [Instructions](https://aka.ms/AA75xf0) FRP can [Request an Identity SME](https://aka.ms/FRPHubSMERequestProcess) for optional assistance | O  | FastTrack Engineer | Exchange / OneDrive for Business / SharePoint |

### Enterprise Additional Benefit Remediation

Primary Role: **FastTrack Engineer**  
Applies To: **Exchange / Skype for Business**

For approved enterprise customers only with 20,000 seats or more, or with an exception.

#### FTOP Tasks

| Task ID | Task Name                                                   | (M)andatory / (O)ptional |   FastTrack Role   | Services           |
| ------- | ----------------------------------------------------------- | :----------------------: | :----------------: | ------------------ |
| 3208    | Exchange - Mailbox Grouping and Planning Migration Planning |            O             | FastTrack Engineer | Exchange           |
| 3209    | SfB - User Migration Remediation                            |            O             | FastTrack Engineer | Skype for Business |
| 3358    | Deep Dive Migration Planning Workshop                       |            O             | FastTrack Architect v2 | Exchange / OneDrive for Business / SharePoint |

### Coordinate Remediation Activity

Primary Role: **FastTrack Engineer**  
Applies To: **All Services**

Coordinate remediation activity undertaken by the partner, Microsoft Consulting Services (MCS) or Premier.

### Remediation Checklist Resolved

Primary Role: **FastTrack Manager**  
Applies To: **All Services**

Move to the enable phase and complete the Remediate Exit process.

#### FTOP Tasks

| Task ID | Task Name                                                                       | (M)andatory / (O)ptional |   FastTrack Role   | Services     |
| ------- | ------------------------------------------------------------------------------- | :----------------------: | :----------------: | ------------ |
| 3190    | Confirm the customer reviews and resolves anything in the remediation checklist |            M             | FastTrack Engineer | All Services |
| 1700    | Remediate Exit: All items in Remediation Checklist resolved                     |            M             | FastTrack Manager  | All Services |

##### Uncategorized Tasks (Address Technical Gaps)

Primary Roles: -
Applies To: **All Services**

Uncategorized FastTrack Orchestration Portal (FTOP) tasks that are not yeat incorporated into the FastTrack Playbook flow will appear here.

#### FTOP Tasks

| Task ID | Task Name                        | (M)andatory / (O)ptional |   FastTrack Role   | Services |
| ------- | -------------------------------- | :----------------------: | :----------------: | -------- |
| 2545    | AzRMS Remediation and long poles |            O             | FastTrack Engineer | AIP      |

## Key Inputs

  - All technical assessment activities are completed (Remediation Checklist).
  - Customer has identified additional resources to complete remediation (Partner/MCS/Premier).

## Key Outputs

  - All identified remediation steps are resolved, and the customer continues to the Enable phase.
  - Customer environment meets or exceeds minimum standards for cloud service enablement.
  - Identity is remediated; and provisioning and synchronization are configured and active.
  - Pilot users/groups are identified and prepared for migration to cloud workloads.

## Next Steps

  - Prepare pilot users/groups for enablement.
  - Continue to the [Support Success Execution](success-support-success-execution-partner.md) process to drive adoption.
  - Proceed to the [Enable Services](enable-enable-services-partner.md) process.

## Refresh Summary

| Date       | Who Changed       | What Changed             |
| ---------- | ----------------- | ------------------------ |
| 03/27/2020 | Celia Kennedy     | General Maintenance |
| 12/18/2019 | Celia Kennedy     | Added tasks 4080 and 3358                    |
| 09/25/2018 | Celia Kennedy     | Updated Content |
| 05/02/2018 | Celia Kennedy     | Deprecated Tasks Removed |
| 03/06/2019 | Patric Grimwood   | Updated links in Next Steps |
| 02/26/2019 | Patric Grimwood   | Partner links updated    |
| 12/11/2018 | Mark Eichenberger | Playbook Created         |
| 12/7/2018  | Ryan Meehan       | Minor formatting changes |

[Home](http://partner-docs.microsoft.com)
