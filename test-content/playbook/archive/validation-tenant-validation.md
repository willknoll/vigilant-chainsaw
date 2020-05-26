---  
# required metadata  
title: FastTrack Playbook - Tenant Validation  
description: FastTrack Playbook - Tenant Validation  
author: Maria Conceição  
ms.author: maconcei  
manager: eduardod  
ms.date: 4/25/2019  
ms.topic: playbook  
ms.prod: non-product-specific  
ms.custom: internal-playbook  
ft.audience: internal  
ft.owner: maconcei  
---  
[!INCLUDE [Playbook Feedback](./includes/questions-feedback.md)]  

# Tenant Validation

Program Manager: **Maria Conceição**  
Phase: **Validation**  
[!INCLUDE [Data Privacy](./includes/playbook-data-privacy.md)]  

## Overview

The Tenant Validation process is how the FastTrack Center (FTC)
validates a customer's service eligibility and proactively engages those
customers who meet the minimum threshold of 1000 licenses on a single
workload. Once validated, customers move to the tenant validation
process to ensure the tenant information is accurate, starts customer
engagement, and enables smooth onboarding and a successful experience.

## Objectives

  - Identify Account Team members using tools such as Customer Account
    Lifecycle (CALC) and Premier Standard Reporting (PSR) and add them
    in FastTrack Orchestration Portal (FTOP).
  - Identify any partner using tools such as ViewPoint, Eligibility, and
    FTOP; and add them to FTOP.

## Approach

### Open Various Validation tools

Primary Role: **FastTrack Manager**  
Applies To: **Core Onboarding**

Open [FTOP](https://ftop.microsoft.com/App), [FastTrack
Portal](https://microsoft365dashboard.microsoft.com/),
[CALC](https://calc.microsoft.com/),
[PSR](http://psr/Reports/Pages/Report.aspx?ItemPath=/Customer+Contract+Search/CustomerContractSearch),
[OCP Insights](https://ocpinsights.azurewebsites.net/?tab=1_1),
[ViewPoint](https://support.office.net/) tools used in this process.

### Start Tenant Validation Process

Primary Role: **FastTrack Manager**  
Applies To: **Core Onboarding**

Start tenant validation process and go to Customer Dashboard in FTOP.
Execute Task 1415 Partner, Account Team Validation.

Refer to [Tenant
Validation](https://microsoft.sharepoint.com/:w:/t/ftccm/opsplaybook/EUDlM5F1F_lJqE2URFZGW9IB2Td3ITQ4etqi916zAKJhYw?e=6Q8RWa)
document instructions in the *View the Customer Dashboard* section.

### Validate Account Team Contacts

Primary Role: **FastTrack Manager**  
Applies To: **Core Onboarding**

View/Validate account team contacts pulled by automation through CALC.

Refer to [Tenant
Validation](https://microsoft.sharepoint.com/:w:/t/ftccm/opsplaybook/EUDlM5F1F_lJqE2URFZGW9IB2Td3ITQ4etqi916zAKJhYw?e=6Q8RWa)
document instructions in the Customer, Partner, and Account Team Contact
Information section.

Validate information for Account Team Manager contacts.

### Validate Partner Contacts

Primary Role: **FastTrack Manager**  
Applies To: **Core Onboarding**

Validate partner contact information via FTOP - ViewPoint and FastTrack
Portal.

Refer to [Tenant
Validation](https://microsoft.sharepoint.com/:w:/t/ftccm/opsplaybook/EUDlM5F1F_lJqE2URFZGW9IB2Td3ITQ4etqi916zAKJhYw?e=6Q8RWa)
document instructions in the Customer, Partner, and Account Team Contact
Information section.

View/Validate Microsoft Consulting Services (MCS) contacts if needed via
the Global Address List (GAL).

### Validate Partner and PSM Contact

Primary Role: **FastTrack Manager**  
Applies To: **Core Onboarding**

View/validate partner and Partner Success Manager (PSM) contacts.

Refer to the [Tenant
Validation](https://microsoft.sharepoint.com/:w:/t/ftccm/opsplaybook/EUDlM5F1F_lJqE2URFZGW9IB2Td3ITQ4etqi916zAKJhYw?e=6Q8RWa)
document instructions in the Customer, Partner, and Account Team Contact
Information section.

### Set Overall Status to Initiate-Active-Account and Partner Team Validation

Primary Role: **FastTrack Manager**  
Applies To: **Core Onboarding**

On the Status tab in FTOP, set status to Initiate - Active - Account and
Partner Team Validation and complete relevant fields.

Validate Request for Assistance (RFA) customers. Only contacts found via
Account Team lookups and from the RFA form need to be entered in FTOP.
Full validation is not required.

Refer to the [Tenant
Validation](https://microsoft.sharepoint.com/:w:/t/ftccm/opsplaybook/EUDlM5F1F_lJqE2URFZGW9IB2Td3ITQ4etqi916zAKJhYw?e=6Q8RWa)
document for further instructions in the Validating RFA Customers
section.

### Partner Account Team Validation Completed

Primary Role: **FastTrack Manager**  
Applies To: **Core Onboarding**

Complete Task 1415 (Wizard) Partner Account Team Validation.

#### FTOP Tasks

| Task ID | Task Name                                | (M)andatory / (O)ptional |  FastTrack Role   | Services        |
| ------- | ---------------------------------------- | :----------------------: | :---------------: | --------------- |
| 1415    | (Wizard) Partner Account Team Validation |            M             | FastTrack Manager | Core Onboarding |

### Assign to Engagement Regional Queues

Primary Role: **Validation FM**  
Applies To: **Core Onboarding**

Reassign customer from FastTrack Center Queue (FTCQ) Validation queue to
Regional Gateway Regional Manager (RM) queues (AiR) based on the
country.

### Validate Hi Pri GoBack Tenants

Primary Role: **Validation FM**  
Applies To: **Core Onboarding**

Validate Hi Pri GoBack Tenants assigned to FTCQ Hi Pri GoBack queue.
Refer to [Tenant
Validation](https://microsoft.sharepoint.com/:w:/t/ftccm/opsplaybook/EUDlM5F1F_lJqE2URFZGW9IB2Td3ITQ4etqi916zAKJhYw?e=6Q8RWa)
instructions in the *Hi Pri GoBack Processing* section.

### Confirmed Fraudulent

Primary Role: **Validation FM**  
Applies To: **Core Onboarding**

Fraud/Test Customer validation. Refer to [Tenant
Validation](https://microsoft.sharepoint.com/:w:/t/ftccm/opsplaybook/EUDlM5F1F_lJqE2URFZGW9IB2Td3ITQ4etqi916zAKJhYw?e=6Q8RWa)
instructions in the *Fraud/Test Customers Processing* section.

### MLB/NBA/NFL Special Reassignments

Primary Role: **Validation FM**  
Applies To: **Core Onboarding**

MLB/NBA/NFL Special Reassignments - MLB/NBA/NFL customers skip the
Engagement Phase and are reassigned to Delivery.

Remove yourself as FastTrack Manager (FM) and remove FTCQ Validation as
RM.

Reassign as follows:

MLB

  - RM: Matt Whitten
  - FM: Charlotte Raymundo
  - FE: Kent Yoo  

NBA

  - RM: Jeff Garrett
  - FM: Zack Krueger
  - FE: N/A  

NFL

  - RM: Jeff Garrett
  - FM: Zack Krueger
  - FE: Kent Yoo  

<!-- end list -->

  - Complete Task 3186 Assign Customer to an applicable FTC Delivery
    Queue (Assignment Team).

## Key Inputs

  - Add Commerce tenant data to FTOP to automatically add tenant to the
    FTCQ Validation queue
  - RFA submission

## Key Outputs

  - Update FTOP with Account Team and partner information.
  - Assign customer to one of the regional Gateway RM queues (AiR) based
    on the country.

## Next Steps

  - Proceed to \[\[[Initial Customer
    Engagement​](./engagement-initial-customer-engagement.md)\]\]
    to determine intent.

## Refresh Summary

| Date       | Who Changed       | What Changed                                                     |
| ---------- | ----------------- | ---------------------------------------------------------------- |
| 4/26/2019  | Maria Conceição   | Renamed and updated approach "MLB/NBA/NFL Special Reassignments" |
| 2/22/2019  | Maria Conceição   | Playbook migration to GitHub                                     |
| 12/20/2018 | Mark Eichenberger | Removed references to Reactive Queue and for entitlements \<1000 |
| 12/7/2018  | Maria Conceição   | Minor formatting changes                                         |
| 10/26/2018 | Mark Eichenberger | Playbook created                                                 |
