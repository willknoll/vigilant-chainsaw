---  
# required metadata  
title: FastTrack Playbook - Windows 10 RFA  
description: FastTrack Playbook - Windows 10 RFA initial process 
author: Ben Skoropinski  
ms.author: Ben Skoropinski  
manager: Steve Sosa-Krall
ms.date: 9/24/2019  
ms.topic: playbook  
ms.prod: non-product-specific  
ms.custom: internal-playbook  
ft.audience: internal  
ft.owner: Alicia Evans
---  
[!INCLUDE [Playbook Feedback](./includes/questions-feedback.md)]
# Windows 10 RFA

## Overview

The Complete Initial Windows 10 RFA Settings process is the first set of tasks performed specifically for RFAs that include Windows 10 as a selected workload. These initial tasks are all performed in FTOP.

## Objective

- Identify Windows 10 Reference Tenant
- Update Windows 10 Get Modern Assessment for Reference Tenant
- Set SLT Watchlist flag if applicable

## Approach

Primary Role: FastTrack Manager

### Identify Windows 10 Reference Tenant

1. Set the FTOP Filter to “All Customers.”
1. Search by TPID to find its affiliated Reference tenant.
    - If the tenant IDs for the Reference Tenant and the RFA tenant match, only one tenant must be updated.
    - If the tenant IDs for the Reference Tenant and the RFA tenant do not match, update the Windows 10 workload in the Reference Tenant only and update the other workloads in the RFA tenant.
    - If there is no Reference Tenant in the “All Customers” filter for the TPID, the RFA tenant will become the Reference Tenant. These tenants must be recorded in the [Tenants Missing in All Customer Filter for Windows 10 RFAs](https://nam06.safelinks.protection.outlook.com/ap/x-59584e83/?url=https%3A%2F%2Fmicrosoft.sharepoint-df.com%2F%3Ax%3A%2Fr%2Fteams%2FFastTrackGetModern%2F_layouts%2F15%2Fdoc2.aspx%3Faction%3Dedit%26sourcedoc%3D%257BDFC0F592-F930-419F-9035-C871784C8E21%257D&data=02%7C01%7Cv-annev%40microsoft.com%7C11b2cf6ee9e242cd4f9d08d73ae42e62%7C72f988bf86f141af91ab2d7cd011db47%7C1%7C1%7C637042624029639847&sdata=XjJMW7B0TMKtL136aj4trR5BXIqD0SQYl075nFZc4QM%3D&reserved=0).

### Update Windows 10 Get Modern Assessment for Reference Tenant

1. Select the Windows 10 workload in the Playbook tab within the tenant in FTOP.
1. Search for Task ID 4021.
1. Expand the "Conduct Specific Workshops" phase and select the "Get Modern Assessment Workshop."
1. Select the "Wizard - Get Modern Deployment" link.
1. Update the Wizard to the settings below depending on the Requestor response to the question, “If you plan to use System Center Configuration Manager to deploy Windows 10, are you able to update to ConfigMgr Current Branch?”
    - If **Yes**:
        - Set Device management to “System Center Configuration Manager.”
        - Set If using Configuration Manager for device management, is it on Current Branch? to “Yes”
    - If **No**:
        - Set Device Management to “Unknown.”
        - Leave If using Configuration Manager for device management, is it on Current Branch? blank.
    - All other fields in the Wizard are to be left blank.

### Set SLT Watchlist Flag

*If this tenant is a predetermined Reference Tenant found in the All Customers filter, skip this step.*

To set the SLT Watchlist flag:

1. Navigate to the Flags tab in FTOP.
1. Select “True” for the SLT Watchlist flag.
1. Select “Save.”
