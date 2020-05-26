---
# required metadata
title: Blocked - Customer IT Infrastructure, Remediation - Identity
description: Blocked - Customer IT Infrastructure, Remediation - Identity
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

# Identity

> [!IMPORTANT]
> **Definition:** Active Directory is unable to be moved to the cloud, either because of an inability to remediate directory, or because of a specific need to keep on premises

## Valid Workloads
This L3 can be applied to All Services.

## Valid Example Scenarios:
| Valid Example Scenario | L2 | L3 |
| :--: | :--: | :--: |
| Customer is facing challenges with with the required synchronization of user attributes to Azure Active Directory. | Customer IT Infrastructure, Remediation | Identity |
| Customer has problems with their vendor regarding Identity. They will be required to upgrade to Exchange SP3 before remediation can begin. | Customer IT Infrastructure, Remediation | Identity |
| Blocked due to an issue with Federation. Must be resolved before pursing cloud services. | Customer IT Infrastructure, Remediation | Identity |
## Invalid Example Scenarios:
| Invalid Example Scenario | L1 | L2 | L3 |
| :--: | :--: | :--: | :--: |
| Customer is having issues with their employees logging into the desktops. Users are not able to authenticate, as several employees use one workstation. | Blocked | Adoption Readiness | Other |
