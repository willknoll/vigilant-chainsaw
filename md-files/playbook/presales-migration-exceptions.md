---  
# required metadata  
title: FastTrack Playbook - Migration Exceptions  
description: FastTrack Playbook - Migration Exceptions  
author: Ann Roberts  
ms.author: aroberts  
manager: eduardod  
ms.date: 1/16/2020  
ms.topic: playbook  
ms.prod: non-product-specific  
ms.custom: internal-playbook  
ft.audience: internal  
ft.owner: aroberts  
---  
[!INCLUDE [Playbook Feedback](./includes/questions-feedback.md)]  

# Migration Exceptions
 
Phase: **PreSales**  
Motions: **Customer Health / RFA / Targeting**  
[!INCLUDE [Data Privacy](./includes/playbook-data-privacy.md)]  

## Overview

The Migration Exception process handles migration exception requests
that are unique to customers either transitioning from a disparate mail
environment to Office 365 (O365) Exchange/Outlook or who opted for a
local migration experience. The FastTrack Architect (FTA) determines if
the environment, coupled with other constraints, provides a successful
migration experience.

## Objectives

The FTA partners with an Account Team to:

  - Determine complexity of the mail environment to support the
    exception (size of mailboxes, mailbox structure, reporting
    requirements, and timeframe to complete migrations).
  - Obtain business requirements that justify the exception.

## Approach

### Review Customer Environment based on Request

Primary Role: **FastTrack Solution Architect**  
Motions: **Customer Health / RFA / Targeting**  
Applies To: **Exchange / SharePoint / OneDrive for Business**

If the exception request type is IBM Domino (Lotus Notes) 90 days,
perform the following tasks:

  - Review detailed information about the customer Notes environment,
    and request additional information from the Account Team Unit (ATU)​
    as necessary:
      - Average mailbox size
      - Item count
      - Folder count
      - Number of mailboxes
      - Shared Mailbox size and count
      - Expected Start Date
      - Expected Complete Date
  - Document scope and decision:
    ([*https://fasttrack.crm.dynamics.com/main.aspx*](https://fasttrack.crm.dynamics.com/main.aspx))
  - If exception request type is IBM (Lotus Notes) Coexistence, review
    detailed information about the customer Domino environment when
    number of licenses \> 4000.
  - If exception request type is Parallel mailbox migration platform
    exception, review existing mail source details and request
    additional information from the ATU as required.
  - If exception request type is Parallel OneDrive migration platform
    exception, review all migration sources and request additional
    information from the ATU if necessary.
  - If exception request type is Local migrators exception, review legal
    requirements, location of the migration resource, and request
    additional information from the ATU if necessary.
  - If exception request type is Other, review detailed information from
    the ATU as required.
  - If exception request type includes initiating a FastTrack engagement
    ahead of the license purchase, request necessary information and
    approvals from ATU as required.

### Meet with ATU about Migration Exception

Primary Role: **FastTrack Solution Architect**  
Motions: **Customer Health / RFA / Targeting**  
Applies To: **Exchange / SharePoint / OneDrive for Business**

Meet with the ATU to review the findings.

### Meet with Customer about Migration Exception

Primary Role: **FastTrack Solution Architect**  
Motions: **Customer Health / RFA / Targeting**  
Applies To: **OneDrive for Business / SharePoint / Exchange**

Meet with customer to discuss migration strategy or approach in the
event the exception is approved.

### Migration Exception Customer Decision

Primary Role: **FastTrack Solution Architect**  
Motions: **Customer Health / RFA / Targeting**  
Applies To: **Exchange / OneDrive for Business / SharePoint**

Document customer decision in FastTrack v2 Exceptions Tracker list and
transition knowledge to FastTrack Manager (FM) during scheduled FTA to
FM handoff meeting. Refer to [Discovery
Workshop](./presales-discovery-workshop.md) process for
specific details.  

#### FTOP Tasks

| Task ID | Task Name                                                                    | (M)andatory / (O)ptional |        FastTrack Role        | Services                                      |
| ------- | ---------------------------------------------------------------------------- | :----------------------: | :--------------------------: | --------------------------------------------- |
| 3284    | Exchange - approve IBM Domino email migration exception for +90 days         |            O             | FastTrack Solution Architect | Exchange                                      |
| 3285    | Exchange - approve IBM Domino calendar coexistence exception for 4000+ seats |            O             | FastTrack Solution Architect | Exchange                                      |
| 3977    | Other - Approve other migration exception to the standard process            |            O             | FastTrack Solution Architect | Exchange / OneDrive for Business / SharePoint |

## Key Inputs

  - Request for Assistance submitted and assigned to an FTA

## Key Outputs

  - Document the scope and decision ​in the FastTrack V2 Exceptions
    Tracker list

## Next Steps

  - Prepare decision in FTA OneNote as part of the FTA-to-FM handoff

## Refresh Summary

| Date       | Who Changed       | What Changed                 |
| ---------- | ----------------- | ---------------------------- |
| 2/22/2019  | Ann Roberts       | Playbook migration to GitHub |
| 12/7/2018  | Ann Roberts       | Minor formatting changes     |
| 10/26/2018 | Mark Eichenberger | Playbook Created             |
