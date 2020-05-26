---
# required metadata
title: Blocked - Billing, Licensing, Subscription
description: Blocked - Billing, Licensing, Subscription
author: Peter Boulos
ms.author: pboulos
manager: eduardod 
ms.date: 9/25/2019
ms.topic: playbook 
ms.prod: non-product-specific 
ms.custom: internal-playbook 
ft.audience: internal 
ft.owner: pboulos
---
[!INCLUDE [Playbook Feedback](./includes/questions-feedback.md)] 

# Billing, Licensing, Subscription

> [!IMPORTANT]
> **Definition:** Implementation is blocked until subscription issues are resolved (e.g., application of licenses, transfer of licenses, incorrect SKU, or subtraction of seats). Requires seller, LSS and /or LSA to engage.

## Valid Example Scenarios:
| Valid Example Scenario | Scenario Status |
| :--: | :--: |
| Entitlements/tenants are being transferred between data centers. | Billing, Licensing, Subscription |
| Customer is reducing or increasing seats or paused due to merger and acquisition activity. Company being acquired should go to duplicate/invalid. Company buying should have licenses transferred to their tenant. | Billing, Licensing, Subscription |
| Enterprise Agreement (EA) negotiations. | Billing, Licensing, Subscription |
| Customer is currently in the midst of a merger or acquisition and needs to edit the tenant in some way, | Billing, Licensing, Subscription |
| Customer is waiting to deploy until a new EA is signed. | Billing, Licensing, Subscription |


## Invalid Example Scenarios for this L2:
| Invalid Example Scenario | Scenario Status |
| :--: | :--: |
| Partner has purchased licenses for customer and does not plan on deploying all workloads. | Partner Engagement |


> [!TIP]
> If you are still unsure about using this L2, here are some questions to ask the customer to confirm if this is the appropriate L2 to be used:
>    1.​ Did the customer purchase the correct platform (dedicated/vnext/GCC) such as government?
>    2. ​Are they changing tenants? Will their licenses be moving to another tenant?
>    3. Are they having issues with qualifying Office 365 (O365) as a capital expense?
>    4. Are they stalled in EA/contract negotiations?
>    5. Are they asking for features that are not available in their current subscription (E1/E3/E5)?​
>    

## Workload-Specific Questions
### Skype for Business (SfB)
    1. Is the customer interested in advanced call features that require a license add-on? 
    2. Is there concern over the pricing and functionality of the advanced features?​​
    
    
### Azure Active Directory Premium (AADP)
    1. Are there questions about how billing works for the Multi-Factor Authentication (MFA) portion? 
    2. Have they been educated on the MFA calculator and how to estimate costs?​
    
    




## List of L3s by Service Name:

### All Services
- **[Addition of Seats](l1l2l3-blocked-billing-licensing-subscription-addition-of-seats.md)** - Additional entitlements are required in order to deploy workload
- **[Incorrect SKU](l1l2l3-blocked-billing-licensing-subscription-incorrect-sku.md)** - Customer needs a different license in order to deploy service
- **Other**
- **[Wrong Tenant](l1l2l3-blocked-billing-licensing-subscription-wrong-tenant.md)** - Licenses will not be used as the customer is moving to a new tenant
### StaffHub
- **Customer didn't purchase a qualified SKU (StaffHub specific reason)**
### Teams
- **Educational/Government/Non-profit not supported**
- **No free trial**
### Windows 10
- **Educational/Government/Non-profit not supported**
