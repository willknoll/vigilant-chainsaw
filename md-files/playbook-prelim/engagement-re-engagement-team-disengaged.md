---  
# required metadata  
title: FastTrack Playbook - Re-Engagement Team Disengaged  
description: FastTrack Playbook - Re-Engagement Team Disengaged  
author: Maria Conceição  
ms.author: maconcei  
manager: eduardod  
ms.date: 12/5/2019  
ms.topic: playbook  
ms.prod: non-product-specific  
ms.custom: internal-playbook  
ft.audience: internal  
ft.owner: maconcei  
---  
[!INCLUDE [Playbook Feedback](./includes/questions-feedback.md)]  

# Re-Engagement Team Disengaged

Phase: **Engagement**  
Motions: **Customer Health / RFA / Targeting**  
[!INCLUDE [Data Privacy](./includes/playbook-data-privacy.md)]  

## Overview

The Re-Engagement Team Disengaged process identifies how the Gateway
Re-engagement Team (GRT) captures results of customer outreach efforts
and ends an assignment to that same tenant.  

  

## Objectives

Document GRT outcome.

## Approach

### Re-Engagement Send to appropriate Delivery Channel

Primary Role: **Targeting Manager**  
Motions: **Customer Health / RFA / Targeting**  
Applies To: **All Services**

- If you selected **GRT Team Disengaged - Send to Delivery**, do the
following:
  1.  ​​Make sure new delivery FM is assigned primary for tenant and then remove yourself as FM.
  2.  Mark Task 3729 GRT Team Disengaged - Send to Delivery, is taking over complete.​

- If you selected **FRP is taking over**, do the following:

  - After speaking to the ATU, FM discover customer is going to engage FRP. 
    1.  We reach out to the PSM and confirm the FRP will be actively engaged with customer.
  - PSM is responsible for ensuring the Onboarding RM/PSM and Partner RM fields are all assigned in FTOP.
  - ***When we Disengage***
    1.  Add RM: *FTCQ Intent NonActionable* as primary for tenant
    2.  Add RM: *watchlist FM* as primary for tenant  
  - Mark Task 3703 FRP is taking over complete.​​  

#### FTOP Tasks

| Task ID | Task Name                              | (M)andatory / (O)ptional |  FastTrack Role   | Services     |
| ------- | -------------------------------------- | :----------------------: | :---------------: | ------------ |
| 3729    | GRT Team Disengaged - Send to Delivery |            O             | Targeting Manager | All Services |
| 3703    | FRP is taking over                     |            O             | Targeting Manager | All Services |
| 4023    | Windows 10 Partner Referral            |            O             | Targeting Manager | Windows 10   |

### Customer Handoff to FM

Primary Role: **Targeting Manager**  
Motions: **Customer Health / RFA / Targeting**  
Applies To: **All Services**

Customer Handoff - Intent FM and Deployment FM

  - Call customer to introduce Delivery FM to ensure a smooth
    transition.
  - After handoff meeting, add last Engagement Management note that handoff
    occurred, and set Task 3676 Customer Handoff Meeting to complete.​  

#### FTOP Tasks

| Task ID | Task Name                | (M)andatory / (O)ptional |  FastTrack Role   | Services     |
| ------- | ------------------------ | :----------------------: | :---------------: | ------------ |
| 3676    | Customer Handoff Meeting |            O             | Targeting Manager | All Services |

### Non-actionable

Primary Role: **Targeting Manager**  
Motions: **Customer Health / RFA / Targeting**  
Applies To: **All Services**

Enter last Engagement Management note with **​Re-engaged Customer** at the
beginning with detailed root cause/reason for disengagement.

Set only one of the following tasks to *​complete* based on the outcome
captured during the process:

  - 3706 Disengaged in GTR validation - Disengaged in validation OR
    customer activer afters validation. Mandatory to document
    disengagement reason in Technical Enablement notes.
  - 3704 Customer requires assistance in unsupported language - Customer
    requires assistance in usupported language.
  - 3705 Out of FTC Scope (include task not re items out of scope) -
    Customer requires services that are out of FTC scope. Mandatory to
    list out of scope requirements in Technical Enablement notes.
  - 3708 Customer Outreach Unsuccessful - All attempts to contact the
    customer failed. This task can only be completed for Unmanaged
    customers.
  - 3710 DIBS incomplete - Due Date, Intent, Business reason, Success
    owners (DIBS) was not secured with the Customer.
  - 3711 Non FRP engaged - Partner already engaged with this tenant and
    customer does not require FTC assistance, Required to enter partner
    name in the Technical Enablement notes.
  - 3712 Account Team Declined - Account team declined further team
    engagement with customer. Required to add reason in Technical Enablement notes.
  - 3713 Customer Declined - Customer declares they have no interest to
    work with FTC. Required to add reason in Technical Enablement notes.
  - 3714 Subscription not eligible - Subscription not eligible as
    per [https://docs.microsoft.com/en-us/fasttrack/o365-eligible-services-and-plans​](https://docs.microsoft.com/en-us/fasttrack/o365-eligible-services-and-plans)  
  - 3715 Other Please specify (details in Technical Enablement notes) - Any other
    disengagement reason not listed above - required to add detailed
    reason in Technical Enablement notes.  

- If you selected ***Disengaged in validation OR customer active validation** do the following*:
  - Leave all of the other RMs or FMs as they are, do not remove them
  - RM field: remove *FTCQ Intent Assigned*
  - FM field: removes myself as FM
  - This applies in following customer engagement scenarios:  
    1.  ​Esisting FM
    2.  FRP is already assigned in Onboarding RM/PSM and Partner RM fields
    3.  Top 400/S400 customer with FTA engagement
    4.  NOTE: Do not disengage in validation if FM has alrasy been assigned as primary, please follow instructions below.  
      

​- If you selected any other disengagement task, do the following:
  - FTOP \> Assignment tab
  - RM field:
    1.  Remove *FTCQ Intent Assigned*
    2.  Add as primary for tenant: *FTCQ Intent NonActionable*
  - FM field:
    1.  Remove myself as FM
    2.  Add as primary for tenant: *watchlist FM*
  - Leave all other RMs or FMs as they are, do not remove them​ 

#### FTOP Tasks

| Task ID | Task Name                                                    | (M)andatory / (O)ptional |  FastTrack Role   | Services     |
| ------- | ------------------------------------------------------------ | :----------------------: | :---------------: | ------------ |
| 3706    | Disengaged in validation OR customer active after validation |            O             | Targeting Manager | All Services |
| 3704    | Customer requires assistance in unsupported language         |            O             | Targeting Manager | All Services |
| 3705    | Out of FTC Scope                                             |            O             | Targeting Manager | All Services |
| 3708    | Customer Outreach Unsuccessful                               |            O             | Targeting Manager | All Services |
| 3710    | DIBS incomplete                                              |            O             | Targeting Manager | All Services |
| 3711    | Non-FRP engaged                                              |            O             | Targeting Manager | All Services |
| 3712    | Account Team Declined                                        |            O             | Targeting Manager | All Services |
| 3713    | Customer Declined                                            |            O             | Targeting Manager | All Services |
| 3714    | Subscription not eligible                                    |            O             | Targeting Manager | All Services |
| 3715    | Other - Please specify                                       |            O             | Targeting Manager | All Services |

## Key Inputs

GRT Outcome

## Key Outputs

N/A

## Next Steps

N/A

## Refresh Summary

| Date       | Who Changed       | What Changed                                                                                                |
| ---------- | ----------------- | ----------------------------------------------------------------------------------------------------------- |
| 12/6/2019  | Ryan Meehan       | Updated roles to Targeting Manager                    |
| 6/28/2019  | Maria Conceição   | Added task 4023                                                                                             |
| 4/26/2019  | Maria Conceição   | Added new description to approach "Non-Actionable" and "Re-Engagement Send to appropriate Delivery Channel" |
| 4/26/2019  | Maria Conceição   | CRM 87525                                                                                                   |
| 4/26/2019  | Maria Conceição   | Removed Deprecated Tasks                                                                                    |
| 3/22/2019  | Maria Conceição   | Changed approach description of "non-actionable" step                                                       |
| 2/22/2019  | Maria Conceição   | Playbook migration to GitHub                                                                                |
| 12/7/2018  | Maria Conceição   | Minor formatting changes; added Events                                                                      |
| 10/26/2018 | Mark Eichenberger | Playbook Created                                                                                            |
