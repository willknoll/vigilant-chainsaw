---
# required metadata
title: Blocked - Customer IT Infrastructure, Remediation - Desktop / Devices
description: Blocked - Customer IT Infrastructure, Remediation - Desktop / Devices
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

# Desktop / Devices

> [!IMPORTANT]
> **Definition:** Devices in customer environment are incompatible with service

## Valid Workloads
This L3 can be applied to All Services.

## Valid Example Scenarios:
| Valid Example Scenario | L2 | L3 |
| :--: | :--: | :--: |
| Customer has intent to utilize workload but there is a dependency on desktop and/or device upgrades. | Customer IT Infrastructure, Remediation | Desktop / Devices |
| Customer is in the process of ordering new laptops for the user base to accommodate the increased RAM/processing power required for Click To Run technology. | Customer IT Infrastructure, Remediation | Desktop / Devices |
| Mobile devices are being upgraded from Blackberry to an Android and iPhone mixture across the organization. Once the devices are received and activated the customer will resume the Intune and OLM deployment. | Customer IT Infrastructure, Remediation | Desktop / Devices |
## Invalid Example Scenarios:
| Invalid Example Scenario | L1 | L2 | L3 |
| :--: | :--: | :--: | :--: |
| Having issues with end users after pilot. Users impacted by device changes and need more assistance. | Blocked | Adoption Readiness | Other |
| VDI environment proving problematic to deploy to | Blocked | Product / Feature Capability | VDI |
