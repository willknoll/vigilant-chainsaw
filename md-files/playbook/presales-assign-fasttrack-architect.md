---  
# required metadata  
title: FastTrack Playbook - Assign FastTrack Architect  
description: FastTrack Playbook - Assign FastTrack Architect  
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

# Assign FastTrack Architect
 
Phase: **PreSales**  
Motions: **Customer Health / RFA / Targeting**  
[!INCLUDE [Data Privacy](./includes/playbook-data-privacy.md)]  

## Overview

The Assign FastTrack Architect process fulfills a request to identify
and assign a FastTrack Architect (FTA) submitted through
<https://aka.ms/ftarequest>.

## Objectives

  -  Assign FTA within 2 business days of request via workload balancer
    engine.
  -  Notify requestor and Account Team Unit (ATU) of assignment and next
    steps.
  -  Process request for FTA to conduct Discovery Workshop.
  -  Process request for FTA to perform an End Customer Incentive Funds
    (ECIF) / Digital WinRoom Request (DWR) review.
  -  Process request for FTA to review and authorize migration exception
    requests.
  -  Process request for FTA to fulfill other Sales Support inquires.

## Approach

### Route to Assignment Queue

Primary Role: **FastTrack Solution Architect**  
Motions: **Customer Health / RFA / Targeting**  
Applies To: **Core Onboarding**

Assign Funding and Migration Exception Requests to FTAs.

Assign Non-funding and Sales Support Requests to FastTrack Team Center
Help (FTCHelp) team.

### Confirm Request Type

Primary Role: **FastTrack Solution Architect**  
Motions: **Customer Health / RFA / Targeting**  
Applies To: **Core Onboarding**

Confirm request type and segment for completeness through
<https://aka.ms/ftarequest>.

Funding Request Types:

  - Discovery workshop or ECIF/DWR process
      - Attach Statement of Work (SOW)
      - Attach staffing plan/work breakdown structure
      - Attach cost breakdown

Migration Exception:

  - Mailbox detail, source environment, and business justification are
    consistent with exception request.
  - Engagement details and approvals accompany requests to engage
    FastTrack prior to license purchase.

Non-funding Request Types:

  - Land FTC Benefit
      - Complete quality Customer Success Plan (CSP)
  - Sales Support Inquiries
      - Refer to FTCHelp Frequently Asked Questions (FAQ) for the
        following:
          - Eligibility
          - Windows 10
          - FastTrack Ready Partners
          - Provision Test/POC/Demo Tenants
          - GCC/GCC High Tenant Requirements
          - Marketing and Promotional Material
  - Engage FTC prior to license assignment

### Assign FTA

Primary Role: **FastTrack Solution Architect**  
Motions: **Targeting / RFA / Customer Health**  
Applies To: **Core Onboarding**

Add FTA name to FastTrack Orchestration Portal (​FTOP)​ Enterprise
Assignment tab.​  

### Completed Internal Account Team Call

Primary Role: **FastTrack Solution Architect**  
Motions: **Customer Health / RFA / Targeting**  
Applies To: **Core Onboarding**

Send assignment email notification to requestor and conduct internal
call with ATU, Customer Success Unit (CSU), FTAv2 explaining next step
(per request type).

Note: If production tenant is not in FTOP, FTA creates "fake" tenant to
track data capture during discovery workshops.

#### FTOP Tasks

| Task ID | Task Name                                              | (M)andatory / (O)ptional |        FastTrack Role        | Services        |
| ------- | ------------------------------------------------------ | :----------------------: | :--------------------------: | --------------- |
| 3286    | Approve FastTrack engagement prior to license purchase |            O             | FastTrack Solution Architect | Core Onboarding |
| 3298    | Pre-Sales: First Account Team contact made             |            M             | FastTrack Solution Architect | Core Onboarding |

## Key Inputs

  - Submit Request for FTA notification with sales attachments for
    funding requests.
  -  Discovery Workshop, ECIF/DWR requests include specific Sales
    artifacts the FTA uses to prepare for customer calls, workshops, and
    any ECIF funding requests.
      - Attach SOW
      - Attach Staffing Plan/Work Breakdown Structure
      - Attach Cost Breakdown
  - Migration Exception Request includes:
      - Domino and Notes mail environment details
      - Source mail environment details for parallel migrations
      - File environment details for other parallel OneDrive for
        Business (ODfB) migrations
      - Business justification for local migrations
          - Mailbox details provided are consistent with exception
            request justification.
      -  All other non-Exchange migration exceptions outside the benefit
        standard
  -  Sales questions, support fulfillment, or escalations with
    appropriate detail to resolve non-funding requests:
      -  Impact
      -  Customer type
      -  Deployment status

## Key Outputs

  - Assign FTA
  - Complete Initial FTA/ATU/CSU internal call

## Next Steps

  - ATU/CSU completes FTA and customer Introductions
  - Schedule and conduct [Discovery
    Workshop​](./presales-discovery-workshop.md)  
  - Review and categorize ECIF for funding and DWR approvals [ECIF
    DWR Review](./presales-ecif-dwr.md) 
  - Process Migration Exception Requests [Migration
    Exceptions](./presales-migration-exceptions.md)

## Refresh Summary

| Date       | Who Changed       | What Changed                 |
| ---------- | ----------------- | ---------------------------- |
| 2/22/2019  | Ann Roberts       | Playbook migration to GitHub |
| 10/26/2018 | Mark Eichenberger | Playbook Created             |
