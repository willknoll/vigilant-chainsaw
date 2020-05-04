---
# required metadata
title: Blocked - App Compatibility
description: Blocked - App Compatibility
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

# App Compatibility

> [!IMPORTANT]
> **Definition:** Customer Line of Business (LOA) applications are not compatible or certified compatible with Cloud Services and are holding up deployment or usage.

## Valid Example Scenarios:
| Valid Example Scenario | Scenario Status |
| :--: | :--: |
| Lack of compatibility or certification of compatibility with a LOB application has caused customer to pause deployment plans. | App Compatibility |
| Is there a third-party application that will not work in SharePoint Online (SPO)? Requires SharePoint on-premises solution. | App Compatibility |
| If an existing application (e.g., LOB, third party add-in) needs to work (usually Office Pro-Plus (OPP) and SharePoint Online (SPO) and is not able to. | App Compatibility |
| Customer needs Microsoft Online Product to perform specific function which is currently unavailable.  | App Compatibility |


## Invalid Example Scenarios for this L2:
| Invalid Example Scenario | Scenario Status |
| :--: | :--: |
| Service lacks a specific industry certification. | Product / Feature Capability |
| Customer has concerns around availability of hosted service. | Service Reliability |
| Customer has specific IT architecture that is not compatible with service | Customer IT Infrastructure, Remediation |


> [!TIP]
> If you are still unsure about using this L2, here are some questions to ask the customer to confirm if this is the appropriate L2 to be used:
>    1.​ Have they done testing with other applications, such as Salesforce, or accounting-specific applications?
>    2. Is it a matter of identity? For example, differing User Principal Name (UPN) requirements?​
>    
>    

## Workload-Specific Questions
### Office Pro-Plus (OPP)
    1. Are there specific add-ins for Outlook/Excel/Word that are not working? 
    2. Is it a matter of customized formulas in Excel that are affected on the upgrade?​
    
    
### SharePoint
    1. Are third party or custom add-ins that will not work with SPO?




## List of L3s by Service Name:

### All Services
- **Other**
### OfficeProPlus
- **LOB applications**
- **(OPP) 3rd party plugins**
- **(OPP) Legacy Macros**
### Windows 10
- **LOB applications**
