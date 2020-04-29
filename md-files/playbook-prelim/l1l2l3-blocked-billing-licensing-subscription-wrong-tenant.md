---
# required metadata
title: Blocked - Billing, Licensing, Subscription - Wrong Tenant
description: Blocked - Billing, Licensing, Subscription - Wrong Tenant
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

# Wrong Tenant

> [!IMPORTANT]
> **Definition:** Licenses will not be used as the customer is moving to a new tenant

## Valid Workloads
This L3 can be applied to All Services.

## Valid Example Scenarios:
| Valid Example Scenario | L2 | L3 |
| :--: | :--: | :--: |
| Customer is planning to move to a new tenant, as the current one no longer suits their needs. | Billing, Licensing, Subscription | Wrong Tenant |
| After merging companies, licenses will be transferred to a new tenant. | Billing, Licensing, Subscription | Wrong Tenant |
## Invalid Example Scenarios:
| Invalid Example Scenario | L1 | L2 | L3 |
| :--: | :--: | :--: | :--: |
| Tenant no longer active as customer was bought by another company and licenses were moved to new tenant | Duplicate/Invalid |  |  |
| Test/Dev tenant only, will not be used | Duplicate/Invalid |  |  |
