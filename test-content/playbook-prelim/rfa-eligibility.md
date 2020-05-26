---
# required metadata  
title: FastTrack Playbook - Request for Assistance eligibility guide 
description: FastTrack Playbook - Request for Assistance eligibility reference guide
author: Erin Saville  
ms.author: v-ersav
manager: steveso
ms.date: 12/31/2019  
ms.topic: playbook  
ms.prod: non-product-specific  
ms.custom: internal-playbook  
ft.audience: internal  
ft.owner: alicia.evans
---  
[!INCLUDE [Playbook Feedback](./includes/questions-feedback.md)]  

# Request for Assistance Eligibility Guide

## Type and use of document

- Topic category: Request for Assistance (RFA)
- Primary role: Gateway RFA FMs
- Use: Reference providing eligibility criteria for FastTrack benefits

## Summary

This article is a reference to be used by Gateway RFA FMs when processing M365 FastTrack Benefit RFAs submitted via the [FastTrack Portal](https://fasttrack.microsoft.com/) per the [RFA Process Guide](rfa-process-guide.md). It details the criteria under which customers are eligible for FastTrack Center benefits.

## Eligibility

As of October 15th, FTC eligible workloads under 150 seats are ineligible for the traditional benefit and must be routed through the customer's Admin. Portal. Customers with 150 or more paid seats of [eligible plans](https://docs.microsoft.com/en-us/fasttrack/O365-eligible-services-and-plans) across Microsoft 365 (Office 365 and EMS) are eligible for the FastTrack benefit. This includes education and non-profit customers for paid seats.  

> [!NOTE]
> Trial licenses are always ineligible.

## Resources

- [Products Offer Management Tool](http://commoffertool/Prod/Office365/product/list)

- [FastTrack Eligible Services and Plans](https://docs.microsoft.com/en-us/fasttrack/M365-eligible-services-and-plans)

- [Office 365 - Data Migration](https://docs.microsoft.com/en-us/fasttrack/o365-data-migration)

## DODCON SKUs

- If Todd Wheeler is the requestor of an RFA and the tenant domain is blocked in [ViewPoint](https://support.office.net/), the tenant is most likely a DODCON/GCC High customer.  

- DODCON or GCC High SKUs are eligible for FastTrack Assistance via the traditional route at 50 or more seats and will not be routed through the customer's Admin. Portal for assistance with the Concierge Team.  

- DODCON or GCC High tenants with fewer than 50 seats will not be eligible for assistance and the RFA can be cancelled.

- Once an RFA is approved, reach out to Luda Zhuk ([v-luzhu@microsoft.com](mailto:v-luzhu@microsoft.com)) for assignment instructions.

- More information on the FastTrack Benefit for Government Licenses can be found [here](https://docs.microsoft.com/en-us/office365/servicedescriptions/office-365-platform-service-description/office-365-us-government/office-365-us-government).

## Government SKUs

- Tenants with Government SKUs are eligible to receive FastTrack Services with 50 or more seats of a FastTrack eligible Government SKU.

- More information on the FastTrack Benefit for Government Licenses can be found [here](https://docs.microsoft.com/en-us/office365/servicedescriptions/office-365-platform-service-description/office-365-us-government/office-365-us-government).

## IUR SKUs

- IUR (Internal Use Rights) SKUs are not eligible for FTC assistance. These are free SKUs given to Partners as a benefit of MPN.

## Secure Productive Enterprise SKUs

- Secure Productive Enterprise (SPE) has been re-branded as Microsoft 365. However, you may still encounter SPE SKUs (for example, SPE E3 and SPE E5), which are eligible for FTC assistance. Secure Productive Enterprise (SPE) SKUs include Office 365, Windows 10 Enterprise, Enterprise Mobility + Security products.

## StaffHub SKUs

- A customer can be approved for a StaffHub RFA if they meet general FTC eligibility guidelines and have one of the following SKUs: K1, E1, E3, E5.

## Nonprofit SKUs

- Free Nonprofit O365 SKUs are not eligible for FTC support. RFAs for customers that only have free nonprofit O365 SKUs should be rejected.

  - This only applies to O365 SKUs; Nonprofit EMS SKUs are still FTC-eligible.

  - If a nonprofit customer purchased at least 150 nonprofit O365 SKUs (that is, paid Non-Profit licenses), the SKUs are considered eligible and the RFA can be approved if all other standard eligibility requirements are met.

  - If a nonprofit customer purchases a different, eligible SKU, then they will be eligible for FTC support just like any other customer.  

- You only need to check for nonprofit licenses if the Business Type = **Charity** in ViewPoint.

- To verify if a charity tenant has paid or unpaid licenses, search for the tenant ID in ODIN and check to see if the **Billing Type** indicates **Paid**. If so, then any SKUs marked as **False** to **Is Paid** will not be counted towards eligibility (see screenshots below for an example).

    ![Billing type - Odin](media\billing-type-odin.png)

    ![Paid seats - false](media\paid-seats-false.png)

## EDU SKUs

> [!Note]
> EDU eligibility requirements are continuing to change. If you are unsure if an EDU RFA can be approved for onboarding, adoption, or migration, escalate to your lead for guidance.

- RFAs for EDU customers are eligible for the FastTrack benefit if *at least one* of the following requirements are met:

    1. The customer has minimum number of eligible Office 365 licenses, Microsoft 365 Education licenses, or both.

        - If the customer purchased Office 365 Education A3, Office 365 Education A5, Microsoft 365 Education A3, Microsoft 365 Education A5 licenses, or more than one of these, they must have 150 or more of one of these license to be considered eligible.

    2. The customer has 150 or more Intune for Education licenses.

    3. The customer has the minimum number of any other FTC eligible licenses.

- If the minimum requirements *are* met:

  - The EDU RFA can be approved for Onboarding & Adoption Planning for faculty/staff and students.

  - If Data Migration is requested, only Faculty users affiliated with the tenant can be approved. Student users are not eligible for Data Migration.

- If the minimum requirements *are **not*** met:

  - For all other EDU RFAs, escalate to your lead.

  - If you receive an escalation from a Partner or Customer following a rejection, forward to your lead who can escalate if needed.

  - If you receive an escalation from the field following a rejection, refer the Requestor to the [Digital Winroom](https://microsoft.sharepoint.com/teams/Digital_Win_Room/Pages/Home.aspx) to request an exception.

## Office 365 Customers with fewer than 150 Seats

- FTC and FRPs will no longer onboard customers with less than 150 seats.

- Customers with less than 150 seats will be routed to the Concierge Team, who is responsible for customers with 50 - 149 seats.

  - *Exception:* If the tenant is already in FTOP assigned to Delivery, reach out to Daniel Spielman ([v-daspi@microsoft.com](mailto:v-daspi@microsoft.com)) to determine if the customer should be routed to Concierge or if we should re-engage the Delivery Team.

  - *Exception:* If in the **Profile** tab in ViewPoint for the tenant displays *Support Program =* **CSS Classic Support**, the tenant cannot be routed to Concierge using the standard instructions.

    - If the **CSS Classic Support** tenant has 50 or more seats and lists a Reseller Partner in the **Profile** tab in ViewPoint, it can be processed and assigned to CSS like a regular RFA tenant, as they have agreed to support these customers until a better workaround is identified. Be sure to include the note in the Overall Status notes in FTOP: *This is a CSP customer with 50-149 licenses stamped as CSS Classic Support; this tenant will be sent to CSS per temporary RFA escalation process.*

    - If the **CSS Classic Support** tenant does *not* list a Reseller Partner in the **Profile** tab in ViewPoint, escalate to Erin Saville ([v-ersav@microsoft.com](mailto:v-ersav@microsoft.com)).

  - *Exception:* If licenses were purchased through a Reseller Partner, the customer will be routed to their Reseller for assistance and their Admin. Portal will not provide Concierge support as an available option.

- If you identify a customer with **50-149 O365 licenses**, escalate to your lead.

- If you identify a customer with **less than 50 O365 licenses**, escalate to your lead.

    Note: *The Concierge route is only intended for O365 customers* (**not** EMS).

## Migration Eligibility Requirement Increase is 500 or more Seats

The FastTrack Benefit for Data Migration is available for all eligible customers with Office 365 services for Exchange Online, OneDrive for Business, and SharePoint Online. Tenant to tenant migration is **not** supported by FastTrack.

- As of September 1, 2017, the minimum number of seats required for Data Migration for Office 365 has increased from 150 to 500.

- The customer's **initial O365 purchase date** will determine their minimum seat threshold for receiving the data migration service.

  - Any customer who purchases or renews O365 on or after September 1, 2017 will be treated as a net new customer and will have 500 seats as the minimum seat requirement. For example, a customer who purchased 150 seats before September 1, 2017 and lets their subscription expire, and then purchases between 150-499 licenses after September 1, is *not* eligible for Data Migration.

  - Any customer who purchased O365 prior to September 1, 2017 is considered an existing customer and will retain 150 seats as the minimum seat requirement throughout their current subscription period.

- To determine the initial purchase date, search for the tenant ID in [Lynx](https://lynx.office.net/#/) and navigate to the **Subscriptions** tab under the Account header.

- Scroll to the bottom of the page where you will see a table with detailed subscription information.

- Check the **Start Date** to see if licenses were purchased prior to or after September 1, 2017 to determine which minimum seat requirement will apply.

- If you are unsure, reach out to your leads.

## Enhancement of Teams Awareness

- Effective June 8, 2018, RFAs that include Skype for Business as a requested workload will be processed by Former Engagement FM's only to ensure the [Teams First Pitch](rfa-teams-first-pitch.md) is delivered to the customer.

## Azure Information Protection Eligibility

As of May 10, 2019, Azure Information Protection (AIP) is available to request on the RFA form if eligibility requirements are met (see details below). Customers who do not meet FastTrack eligibility can still submit requests in the Limited Scope EMS request form, where they will receive an abridged version of assistance.

- Customers having 150 or more seats of M365 E5, EMS E5, and AIP P2 SKUs are eligible for the AIP FastTrack benefit

- E3 SKUs are NOT eligible

Migration is not supported for this product

[!INCLUDE [rfa-resources-for-footer-of-every-article-include](includes/rfa-resources-for-footer-of-every-article-include.md)]

## Refresh Summary

| Date       | Who Changed       | What Changed                                                                              |
| ---------- | ----------------- | ----------------------------------------------------------------------------------------- |
| 4/30/2020  | Ben Skoropinski   | Created Refresh Summary                                                                   |
