---
# required metadata
title: Blocked - Customer IT Infrastructure, Remediation - Hardware
description: Blocked - Customer IT Infrastructure, Remediation - Hardware
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

# Hardware

> [!IMPORTANT]
> **Definition:** Customer environment contains specific hardware which currently cannot be remediated and is incompatible with service

## Valid Workloads
This L3 can be applied to All Services.

## Valid Example Scenarios:
| Valid Example Scenario | L2 | L3 |
| :--: | :--: | :--: |
| Customer cannot deploy until replacement Domain Controllers are acquired. | Customer IT Infrastructure, Remediation | Hardware |
| Service does not work with specific hardware architecture currently in place. The customer is working on a remediation plan to address the issue. | Customer IT Infrastructure, Remediation | Hardware |
| Customer's On-Premise Server running applications unexpectedly crashed. Customer is suspending deployment activities until the servers can be replaced and the on-premises infrastructure can be restored. | Customer IT Infrastructure, Remediation | Hardware |
## Invalid Example Scenarios:
| Invalid Example Scenario | L1 | L2 | L3 |
| :--: | :--: | :--: | :--: |
| Unable to deploy until they get improved bandwidth from isp | Blocked | Customer IT Infrastructure, Remediation | Network |
