---
# required metadata
title: Duplicate/Invalid
description: Duplicate/Invalid
author: Peter Boulos
ms.author: pboulos
manager: eduardod 
ms.date: 3/25/2020
ms.topic: playbook 
ms.prod: non-product-specific 
ms.custom: internal-playbook 
ft.audience: internal 
ft.owner: pboulos
---
[!INCLUDE [Playbook Feedback](./includes/questions-feedback.md)] 

# Duplicate/Invalid

> [!IMPORTANT]
> **Definition:** This L1 status should be used in the case of a duplicate/invalid tenant or duplicate/invalid entitlements in order to remove the entitlements from all FastTrack Center (FTC) reporting.  

## Valid Example Scenarios:
| Valid Example Scenario | Scenario Status |
| :--: | :--: |
| The customer has cancelled their subscription and is not deploying Office 365 and/or EMS.  | Duplicate/Invalid |
| The tenant has been identified as a fraudulent tenant.  | Duplicate/Invalid |
| The customer has completed a license remap from one tenant to another and the tenant that the licenses were completely removed from will not be used in the future.   | Duplicate/Invalid |
| There is an overage in the entitlement count caused by a discrepancy between FTOP and ViewPoint reporting.  | Duplicate/Invalid |

## Invalid Example Scenarios:
| Invalid Example Scenario | Scenario Status |
| :--: | :--: |
| The customer does not have enough seats on one or more workloads to qualify for FastTrack Center Assistance. | Status Unknown>New Subscription or Workload |
| The customer's deployment is delayed due to plans to change or upgrade to a new SKU.   | Blocked>Billing, Licensing, Subscription>Incorrect SKU |
|  The customer is in the process moving to a new tenant but has not completed the move.  |  Blocked>Billing, Licensing, Subscription>Wrong Tenant  |
|  The customer's deployment is delayed while negotiating EA renewal.  |  Blocked>Billing, Licensing, Subscription>Other  |

> [!TIP]
> If you are still unsure about using this L1, here are some questions to ask the customer to confirm if this is the appropriate L1 to be used:
>
>  1. Will the tenant be used in the future?  
>  2. Has the tenant been flagged as fraudulent?  
>  3. Can you confirm an overage in the number of entitlements?  
>  4. Is there a license reporting discrepancy between FTOP, ViewPoint and Lynx?  
>  5. Has the customer completed the move of all licenses to another tenant with no plans to use the donor tenant in the future?  
