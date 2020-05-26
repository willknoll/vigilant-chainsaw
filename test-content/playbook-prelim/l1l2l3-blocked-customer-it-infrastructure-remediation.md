---
# required metadata
title: Blocked - Customer IT Infrastructure, Remediation
description: Blocked - Customer IT Infrastructure, Remediation
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

# Customer IT Infrastructure, Remediation

> [!IMPORTANT]
> **Definition:** Dependencies with surrounding IT infrastructure components in a customer's environment (e.g. VPN devices not compatible, hardware updates, AD Complexities, Hybrid Scenario's, Client, Browser, etc.) block adoption.  For this L2, the problem must be related to a Technology. It is NOT related to people or processes. ​​​

## Valid Example Scenarios:
| Valid Example Scenario | Scenario Status |
| :--: | :--: |
| Customer needs to upgrade Internet Explorer (IE) or Windows. | Customer IT Infrastructure, Remediation |
| Customer has AD complexities that need to be addressed before deployment. | Customer IT Infrastructure, Remediation |
| Customer's network does not have sufficient bandwidth and must be upgraded.​ | Customer IT Infrastructure, Remediation |
| Customer is in the process of a merger and cannot migrate until active directories are merged.  | Customer IT Infrastructure, Remediation |
| Customer has a specific configuration which is not compatible with Office 365 (O365) service.  | Customer IT Infrastructure, Remediation |


## Invalid Example Scenarios for this L2:
| Invalid Example Scenario | Scenario Status |
| :--: | :--: |
| IT department does not have the expertise in needed architecture to deploy service. | IT Change Management and Resourcing |
| Customer has specific technical processes in place that cannot be changed. | IT Change Management and Resourcing |


> [!TIP]
> If you are still unsure about using this L2, here are some questions to ask the customer to confirm if this is the appropriate L2 to be used:
>    1. Are there problems with setting up desktop or devices to/for the service?
>    3. Is the customer having problems with their network devices, bandwidth or connection to the service? For example:VPN, firewall, etc.
>    5. Does customer need to upgrade to new version of (Exchange/SharePoint) prior to migration?​
>    

## Workload-Specific Questions
### Office Pro Plus (OPP)
    1. Is the customer blocked from rolling out OPP until they complete their Windows 10 image? 
    2. Are there problems with package creation or deployment?
    3. Is the customer experiencing channel communications issues?
    4. Is there a problem with understanding/deploying an update solution to the service?​
    
### Teams
    1. Is the customer waiting to deploy Exchange first?




## List of L3s by Service Name:

### All Services
- **[Desktop / Devices](l1l2l3-blocked-customer-it-infrastructure-remediation-desktop-devices.md)** - Devices in customer environment are incompatible with service
- **[Hardware](l1l2l3-blocked-customer-it-infrastructure-remediation-hardware.md)** - Customer environment contains specific hardware which currently cannot be remediated and is incompatible with service
- **[Network](l1l2l3-blocked-customer-it-infrastructure-remediation-network.md)** - Network is unable to handle cloud traffic (bandwidth, firewall)
- **Other**
- **[Identity](l1l2l3-blocked-customer-it-infrastructure-remediation-identity.md)** - Active Directory is unable to be moved to the cloud, either because of an inability to remediate directory, or because of a specific need to keep on premises
### OfficeProPlus
- **VDI**
- **(OPP) Channel Communications**
- **(OPP) Package Deployment Solution**
- **(OPP) Package Update Solution**
### SfB(Skype for Business)
- **VDI**
### StaffHub
- **Company doesn't allow staff workers to use personal devices on company network**
- **Company doesn't provide staff workers with company devices**
- **Staff Workers don't have device types that are currently supported**
- **Staff Workers don't have devices**
### Teams
- **VDI**
- **Exchange Online dependency**
- **SharePoint Online/OneDrive for Business dependency**
