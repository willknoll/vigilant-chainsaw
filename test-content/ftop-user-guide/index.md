---
# required metadata
title: FTOP User Guide - Index
description: Process guidance for internal FTOP users.
author: Connie Brenden
ms.author: v-conbre
manager: jimmuir
ms.date: 5/21/2020
ms.topic: ftop-user-guide
ms.prod: non-product-specific
ms.custom: ftop-user-guide
ft.audience: internal
ft.owner: jimmuir
---
# Overview

The FastTrack Orchestration Portal (FTOP) is the primary tool FastTrack Center delivery team members and FastTrack Ready Partners (FRPs) use to manage customer deployments. Using FTOP, you can track workload intentions and the status of FastTrack Center customers as they move through onboarding to active usage. You can view customer data and create reports about the status of FastTrack tenants.

FTOP is a critical tool in managing customer relationships for FastTrack and an important repository for customer information.

## About this guide

This guide provides an overview of how FTOP works. Screenshots of Contoso tenants, with demonstration data, are used to provide visual examples of FTOP. All instructions and guidance in this document are generic in nature and are meant to provide you with an explanation of how to perform a specific action in FTOP. Specific process guidance on how, what, when, and where to enter data into FTOP is located outside of this guide.

## Changes in this version

This section describes updates made to the FTOP User Guide, per [FTOP](https://ftop.microsoft.com).

|Last Updated  |Modified By  |Changes Made  |
|---------|---------|---------|
|27 May 2020    |Connie Brenden      |CI 159895 – Added note about legacy Edge not being supported. See [Services tab](detailed-tenant-view-services-tab.md) |

# Customer vs. tenant

As part of the FastTrack Center, you will frequently hear the terms customer and tenant. In many cases, these terms are used interchangeably, which is not always correct. Providing context to their proper usage is important because FTOP (and this guide) uses both terms.

## Customer

Customer refers to the entity (business, school, organization, etc.) that owns the Microsoft 365 (M365) services. We typically refer to a customer by their name (or a form of their name), for example, Contoso or Microsoft Corporation. The customer is often equated as the top parent identification (TPID), which is often the identifier for a customer the field teams will reference. The customer view in FTOP allows you begin customer level actions. At this time customer level actions include those for customer health and compete scenarios.

## Tenant

Tenant refers to the logical grouping of services (and the data stored in those services) that the customer has purchased. We refer to a tenant as the tenant name (contoso.onmicrosoft.com) or the tenant ID (a GUID).

Some customers only have one tenant; however, a customer can have multiple tenants. A tenant can only be associated with one customer.

### COVID-19 RFA

A **COVID-19 RFA** column has been added to the Scorecard Adoption, Overview, and Customer Engagement displays in the Tenant View. A medical icon ![medical-icon.png](media/index/medical-icon.png) will be displayed when an RFA for emergency assistance related to COVID-19 has been approved by the Gateway RFA team for the tenant. This medical icon will remain indefinitely in the column. The FM, FE, FRP, and Gateway team will be able to filter, sort, and prioritize.

### SLT Watchlist Flag

For all TPIDs that exist in FTOP (including, but not limited to: S1500 and W2020), one tenant will be chosen to represent the whole TPID—the winner tenant. We have the need to collect and access qualitative and quantitative data at the TPID-level, both in FTOP and in Power BI reports.  A corresponding customer record is now available in the customer view in FTOP. ​​The SLT Watchlist flag designates a tenant as the "reference" or "winner" tenant. This tenant contains a winner icon (yellow trophy) that identifies the tenant being used to track customer level activities not available in the FTOP Customer view. The SLT Watchlist flag can only be edited by members of a specific security group.

- The FM/FTA accountable for a TPID is only required to be assigned (as primary) to the referencing/winner tenant.​

- The FM should also be assigned to any other tenants under the TPID where there is an active engagement​.

- Other tenants under a TPID (not considered to be the referencing tenant or an active engagement) should follow standard FTCQ routing rules for RM placement, and the FM assignment value should be empty​.

>[!NOTE]
>In this guide, we attempt to use the proper term wherever possible. In scenarios where the context is unclear, we will use the term customer/tenant.

# Tenant Records in FTOP

Understanding how to add a customer/tenant record in FTOP is helpful before we look at the detailed content of FTOP. There are two primary entry points for a new record.

## Commerce feed

The commerce group automatically collects the necessary information when a customer purchases M365. Tenants that meet FTC eligibility requirements are fed into FTOP from the commerce data twice a day. The assignment team then reaches out to the customer to begin the onboarding process.

## Tenant exception

Occasionally, a tenant must be manually added to FTOP. These tenant exceptions generally occur when a customer has entered the FTC process because of an exception, but has not met the minimum licensing eligibility requirement for the FTC (or the tenant has tagging that is exempt) that would enable the automated processing. For instructions on how to manually add a tenant to FTOP, see [Appendix](appendix.md).

## Request for assistance form

A customer may submit a request for assistance through FastTrack Portal on occasion. The assignment team receives this request and verifies the tenant. If the tenant does not exist, the assignment team adds the tenant to FTOP.

## Obtaining access

Microsoft takes our commitment to maintain the integrity and security of our customer's data seriously, and to that end, FastTrack views security as a critical priority.
FTOP contains a great deal of customer information, including Microsoft 365 (M365) onboarding status, adoption, usage, and intent. FTOP access is available to certain vendors, full-time employees, and certain Microsoft partners that work together to deliver FastTrack commitments to our customers.

Before using FTOP, you must first obtain access via MyAccess, see [Access to FTOP](access-to-ftop.md).

## Next steps

To request access to FTOP, see [**Access to FTOP**](access-to-ftop.md).

To learn about FTOP, see the [**Landing Page**](landing-page.md).
