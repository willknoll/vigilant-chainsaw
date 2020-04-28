---
# required metadata
title: FTOP User Guide - RBAC Controls
description: Process guidance for RBAC controls.
author: Connie Brenden
ms.author: v-conbre
manager: jimmuir
ms.date: 4/22/2020
ms.topic: ftop-rbac-controls
ms.prod: non-product-specific
ms.custom: ftop-user-guide
ft.audience: internal
ft.owner: jimmuir
---
# FTOP RBAC Controls

## Overview

Role Based Access Controls (RBAC) is in place to protect FastTrack Tenant PII and OII data in FTOP.  Microsoft personnel will only have access to FTOP Tenant data as needed for their job function. Read and write access levels as well as user assignment will be determined based on the FastTrack Role (using IDWeb Security Groups).

Below is the permission breakdown for FastTrack Roles.

> [!NOTE]
> There is a chance you will see different permissions. This is a result of being in an additional security group. If a user is in multiple security groups, the one with greater privilege will win.

## Assigned

## Tenant View

Under Tenant View, you will see 3 filters; My Active Tenants, My InActive Tenants and My Tenants. You will only be able to view and edit the tenants that you are assigned to. User assignments are not allowed unless you are an FM and Primary at the Tenant level.

## Customer View

In the Customer View, you have 2 filters in the customer list to view your assigned customers, Primary and Assigned. You will only be able to view and edit the customers that you are assigned to. User assignments are not allowed unless you are an FM and Primary at the Customer level.

When assigned at the Customer Level you will have read/write access to all the associated tenants to the Customer TPID. This is different to tenant assignment and supersedes the tenant RBAC. For example, you are assigned as primary at the customer level, this means you will be able to have read/write access to all associated tenants even if you are not assigned to the associated/child tenants.  

|Role  |Read (Assigned Tenants/Customers  |Write (Assigned Tenants/Customers)  |User Assignment (Assigned Tenants/Customers)  |
|---------|---------|---------|---------|
|**AppAssure Manager**     |![checkmark.png](media/access-to-ftop/checkmark.png)       |![checkmark.png](media/access-to-ftop/checkmark.png)        |         |
|**CXP Vendors** (Org vendors that are not in another role, yet need access to FTOP Assigned Tenants)     |![checkmark.png](media/access-to-ftop/checkmark.png)       |![checkmark.png](media/access-to-ftop/checkmark.png)        |         |
|**FastTrack Engineer (FE)**     |![checkmark.png](media/access-to-ftop/checkmark.png)       |![checkmark.png](media/access-to-ftop/checkmark.png)        |         |
|**Migration Velocity Managers (MVM)**    |![checkmark.png](media/access-to-ftop/checkmark.png)        |![checkmark.png](media/access-to-ftop/checkmark.png)        |         |
|**FastTrack Manager (FM)**     |![checkmark.png](media/access-to-ftop/checkmark.png)        |![checkmark.png](media/access-to-ftop/checkmark.png)        |![checkmark.png](media/access-to-ftop/checkmark.png)        |

## Assigned and Assignment

### Tenant View

Under Tenant View, you will see all 8 filters; My Active Tenants, My InActive Tenants, My Tenants, Active Tenants, Inactive Tenants, Volume Licensing, and All. You will be able to view and apply user assignments to all tenants. You will only be able to write to the tenants that you are assigned to.

### Customer VIew

In the Customer View, you have 2 filters in the customer list to view your assigned customers, Primary and Assigned. You can view assignments and you will only be able to write to the customers that you are assigned to.

When assigned at the Customer Level you will have read / write access to all the associated tenants to the Customer TPID. This is different to tenant assignment and supersedes the tenant RBAC. For example, you are assigned as primary at the customer level, this means you will be able to have read/write access to all associated tenants even if you are not assigned to the associated/child tenants.  

|Role  |Read (All Tenants/Customers  |Write (Assigned Tenants/Customers)  |User Assignment (All Tenants/Customers)  |
|---------|---------|---------|---------|
|**AppAssure Router**     |![checkmark.png](media/access-to-ftop/checkmark.png)       |![checkmark.png](media/access-to-ftop/checkmark.png)        |![checkmark.png](media/access-to-ftop/checkmark.png)         |
|**FastTrack Architect Leads (FTA Leads)**   |![checkmark.png](media/access-to-ftop/checkmark.png)       |![checkmark.png](media/access-to-ftop/checkmark.png)        |![checkmark.png](media/access-to-ftop/checkmark.png)         |
|**FastTrack Architects (FTA)**     |![checkmark.png](media/access-to-ftop/checkmark.png)       |![checkmark.png](media/access-to-ftop/checkmark.png)        |![checkmark.png](media/access-to-ftop/checkmark.png)         |
|**FastTrack Team Leads**    |![checkmark.png](media/access-to-ftop/checkmark.png)        |![checkmark.png](media/access-to-ftop/checkmark.png)        |![checkmark.png](media/access-to-ftop/checkmark.png)         |
|**Gateway**     |![checkmark.png](media/access-to-ftop/checkmark.png)        |![checkmark.png](media/access-to-ftop/checkmark.png)        |![checkmark.png](media/access-to-ftop/checkmark.png)        |
|**Gateway Targeting Managers (G-TM)**     |![checkmark.png](media/access-to-ftop/checkmark.png)       |![checkmark.png](media/access-to-ftop/checkmark.png)        |![checkmark.png](media/access-to-ftop/checkmark.png)         |
|**Migration Velocity Manager Leads (MVM Leads)**    |![checkmark.png](media/access-to-ftop/checkmark.png)       |![checkmark.png](media/access-to-ftop/checkmark.png)        |![checkmark.png](media/access-to-ftop/checkmark.png)         |
|**FastTrack Partner Manager (FPM)** (including Leads, Regional Leads)     |![checkmark.png](media/access-to-ftop/checkmark.png)       |![checkmark.png](media/access-to-ftop/checkmark.png)        |![checkmark.png](media/access-to-ftop/checkmark.png)         |
|**Regional Assignment Teams**    |![checkmark.png](media/access-to-ftop/checkmark.png)        |![checkmark.png](media/access-to-ftop/checkmark.png)        |![checkmark.png](media/access-to-ftop/checkmark.png)         |
|**Team Manager (TM)** Previously "Regional Manager (RM)"     |![checkmark.png](media/access-to-ftop/checkmark.png)        |![checkmark.png](media/access-to-ftop/checkmark.png)        |![checkmark.png](media/access-to-ftop/checkmark.png)        |
|**FastTrack Ready Partner (FRP) Onboarding Team**     |![checkmark.png](media/access-to-ftop/checkmark.png)       |![checkmark.png](media/access-to-ftop/checkmark.png)        |![checkmark.png](media/access-to-ftop/checkmark.png)         |

## Privileged

### Tenant View

Under Tenant View, you will see all 8 filters; My Active Tenants, My InActive Tenants, My Tenants, Active Tenants, Inactive Tenants, Volume Licensing, and All. You will be able to view all tenants. You will not be able to write to the tenants or apply user assignments.

### Customer View

Under Customer View, you will see three views, Primary, Assigned and All. You will be able to view all Customers in the All view. You will have read access to all Customers.  

|Role  |Read (All Tenants/Customers)  |Write (All Tenants/Customers)  |User Assignment (All Tenants/Customers)  |
|---------|---------|---------|---------|
|**CXP FTE**     |![checkmark.png](media/access-to-ftop/checkmark.png)       |        |         |
|**EMS FastTrack PM**  |![checkmark.png](media/access-to-ftop/checkmark.png)       |        |         |
|**Friends of FastTrack**     |![checkmark.png](media/access-to-ftop/checkmark.png)       |        |         |
|**Senior Leadership (SLT)**    |![checkmark.png](media/access-to-ftop/checkmark.png)        |        |         |

## Next steps

To learn about FTOP, see the [**Landing Page**](landing-page.md).
