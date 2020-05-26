---
# required metadata  
title: FastTrack Playbook - FRP Referral Guide
description: FastTrack Playbook - FRP Referral Guide for the Request for Assistance Team's Referral process.
author: Luda Zhuk  
ms.author: v-besk
manager: steveso
ms.date: 04/24/2020  
ms.topic: playbook  
ms.prod: non-product-specific  
ms.custom: internal-playbook  
ft.audience: internal  
ft.owner: alicia.evans

---  
[!INCLUDE [Playbook Feedback](./includes/questions-feedback.md)]  

# FRP Referral Guide

## [Type and use of document](#type-and-use-of-document)

- Topic category: RFA Motion
- Role this document applies to: Gateway RFA FMs who process FRP Referrals
- Use: Comprehensive process guide used by the Gateway Team to refer customers to a FastTrack Ready Partner (FRP)

## [Summary](#summary)

This is a guide used by Gateway RFA Assignment FMs when performing the Referral Process. It is used to understand and apply the FRP Referral Business Rules when making an assignment. This process is a conditional process that may be necessary subsequent to the RFA Process, which follows a Requestors submission of a Request for Assistance (RFA) for the M365 FastTrack Benefit, submitted via the [FastTrack Portal](https://fasttrack.microsoft.com/).

## [Key Objectives](#key-objectives)

- Refer FRP Eligible customers to an appropriate FastTrack Ready Partner based on eligible workloads, customer size, language, location, and Round Robin criteria

- FRP Eligible customers have >149 seats and intent to deploy *at least one* FRP Eligible Workload

- Customers not eligible to be referred to an FRP are assigned to the appropriate FTC Regional queue

## [Entrance Criteria](#entrance-criteria)

- A Microsoft 365 Requested for Assistance has been approved for the requested workloads

- Tenant has gone through preliminary screening of [Assignment Business Rules](https://fasttrack-docs.microsoft.com/playbook/rfa-assignment-business-rules.html)

- Tenant placed in the queue to be evaluated for FRP Referral

## [Exit Criteria](#exit-criteria)

- The tenant is assigned to the appropriate delivery team (FRP or FTC) based on the met criteria within 1 business day

- If assigned to FRP, the FRP Delivery team, FPM, Customer, and field are notified of the assignment details

- Adhere to goal is to assign >75% of incoming tenants to FRP (considering the eligibility criteria is met)

Expected Duration – 30 minutes

## [Referring Customers to the appropriate FastTrack Delivery Team](#referring-customers-to-the-appropriate-fasttrack-delivery-team)

> [!Note]
> If you encounter any scenarios that are not explicitly described in this document, escalate to your lead for guidance.

### 1. [Select a Tenant in the ALL FTC queue in FTOP](#1-select-a-tenant-in-the-all-ftc-queue-in-ftop)

1. Set the FTOP filter to **ALL**.

1. Set Display to **Partner Validation**.

1. Type **ALL FTC** in the Search Box.

1. Sort the Regional Manager column.

1. Assign tenant to yourself as an RFA Manager.

### 2. [Evaluate Tenant for FRP Referral](#2-evaluate-tenant-for-frp-referral)

1. All tenants in the ALL FTC queue with **>149 seats** and at least one FRP eligible workload from the RFA form with appropriate AU% shall be assigned to Referral Ready FRP in Round Robin manner, taking into consideration geographical location and language criteria.

    *Types of FastTrack Ready Partners (FRP)s:*

    - [Referral Ready FastTrack Ready Partner (FRP)](#5-assigning-to-fasttrack-ready-partners-frps) – Partners capable of delivering the FastTrack Benefit with necessary qualifications and are Ready for Referrals (Referral Ready). FRPs provide value-added solutions and earn incentives for delivering the benefit to customers.

    - [Remote Delivery Team (RDT)](#4-assigning-to-remote-delivery-team-rdt) – Part of Legacy FRP Team with an ability to deliver FastTrack benefit remotely and to accommodate smaller businesses with respect to location and language requirement.

      **Note:** To qualify for RDT, an FPM needs to recommend the FRP, and FRP must be willing to take customers with <500 seats and/or >1,000 miles away. This recommendation needs approval from the Program Manager Antonio Sponza.

    [**FastTrack Ready Partner Program overview**](https://www.microsoft.com/microsoft-365/partners/fasttrack-ready)

    ***FY20 Deployment and Adoption Incentives***

    :::image type="content" source="media/rfa-microsoft-365-usage-incentive-model.png" alt-text="Microsoft 365 Usage Incentive Model":::

1. FRP eligible workloads are: **Exchange Online, SharePoint Online, Teams, Yammer, Office ProPlus, Intune, AADP, AIP.**

1. Refer to the table below for FRP Eligible Workloads, % Active Use, and Minimum seat requirements:

    | **Workloads**  | **Eligible for RDT Only** <br /> 150-499 Seats              | **Eligible for RDT and FRP** <br /> >499 Seats |
    | -------------------------- | :-----------------------------------------------------------------------------: | :-------------------------------------------------------------: |
    | **Exchange Online**        | <20%                                                                            | <10%                                                            |
    | **SharePoint Online**      | <20%                                                                            | <10%                                                            |
    | **Teams**                  | <20%                                                                            | <20%                                                            |
    | **Yammer**                 | <20%                                                                            | <10%                                                            |
    | **Office ProPlus**         | <20%                                                                            | <20%                                                            |
    | **Intune**                 | <20%                                                                            | <20%                                                            |
    | **Azure AD Premium**       | <20%                                                                            | <10%                                                            |
    | **AIP**                    | <20%                                                                            | <20%                                                            |

1. Customers with the following attributes are not eligible for FRP Referrals and shall only be assigned to **FTC**:

    | **Region**   | **Attribute**                                                                                      | 
    | ------------ | ------------------------------------------------------------------------------------------------- | 
    | **All**      | <150 seats <br /> Is S1500/Customer Health <br /> Is Get Modern Targeting (i.e. Win 10/OPP) <br /> Is approved for Win 10 <br /> Is approved for Edge <br /> Is approved for MDATP or OATP only <br /> No intent for any FRP Eligible Workloads <br /> MCS Led engagements <br /> Non-FastTrack Partner Led engagements <br /> Non-Profit Subscriptions <br /> >=10,000 licenses of Microsoft Intune <br /> >=10,000 licenses of AADP only <br /> Start date for E1/G1/A5 trials or Teams Exploratory trials is before Feb 1, 2020 |        
    | **Americas**     | GCC High/DoD SKUs; Gov subscriptions (US Only)                                                            |
    | **EMEA**     | "BlackForest" Customers                                                                                          |
    | **APJ**      | NA                                                                                                               |

    **Note:** If customers with the above criteria **are** assigned to ALL FTC queue, please review the Engagement Management note and follow up with the RFA processor.

1. To evaluate Engagement Management Note, look in the notes history in FTOP for the RFA Note with the following RFA related details:

    - RFA/WinRoom Hi Pri: [Reason for RFA Approval included in the FastTrack Portal status note]

    - Requestor contact information: [Details]

    - Customer contact information: [Details]

    - Partner contact information: [Details]

    - City/State/Country: [Details]

    - FT Supported Language: [Details]

    - Partner Engaged: [Yes/No]

    - RFA Approved Workloads: [Details]

    - Seat Count: [Details]

    - % of Active Usage per workload: [%]

    - Information that may impact the project: [Details]

    - RFA Form URL: [URL]

### 3. [Assigning to FTC](#3-assigning-to-ftc)

1. If the tenant (or workload) is not eligible for FRP referral based on the Assignment rules (above), we will need to assign them to the Regional FTC Delivery Team.

1. In the overall status in FTOP, select **Create Notes**.

1. Update **Engagement Management** note:

    1. In the Notes Editor, under Note Category, select **Engagement Management.**

    1. In the Notes section add “Referral: Assigned to FTC CSS [Region]; (Reason).”

    1. If no account team contacts, add “Not a managed account.”

    1. Include any relevant information that may be useful for Delivery.

    1. Under Next Action add “Complete next steps for RFA Tenant.”

    1. Under Next Action Date select the next business date.

    1. Under Next Action Owner add “FM.”

    1. Be sure to click **Save**.

1. Update [**Engagement Scenario**](#6-updating-engagement-scenario-based-on-where-the-tenant-is-assigned-to).

1. Update FT Portal with the Assignment details

    1. Go to the customer’s FastTrack Portal record via the link provided in the **FTOP RFA Approval Note**.

    1. Click on the **Services** tab.

    1. Click **View Submitted Requests**.

    1. In the **View Service History** tab, select the status from the **Status** column.

    1. In the fly-out window, be sure to append to **Request Approved** from the **Status** dropdown list.

    1. In the **Tenant Assignment** field, add the Referral note and the name of the RFA Processor who approved the RFA (i.e. “RFA approved by [processor name]; Referral assigned to FTC CSS Americas.”).

    1. If an additional queue is being assigned (i.e. split workload assignment), enter that queue name in the **Split Workload Assignment 1** field.

    1. If a second additional queue is being assigned, enter that queue name in the **Split Workload Assignment 2** field.

    1. Select the **Reason(s)** for the assignment(s) from the **Assignment Reason** multi select box. If the appropriate Reason not listed in the drop-down, select a **Other**.

        > [!Note]
        > If more than one assignment reason is required, hold down the **Ctrl** key and select all desired assignment reasons. There is no order to these; all applicable reasons should be included.

1. Update FTOP **Playbook** task:

    > [!Note]
    > The option to update Playbook task is not available for Targeting workloads, however, the Technical Enablement note should still be updated per the reasons above.

    1. Select the requested workload.

    1. In the Search box type 3186 “New FRP Referral.”

        1. Be sure the correct page is loaded.

        1. If unsure, check that “assignment” tab is highlighted.

    1. Set Task status to **Complete**.

    1. Start and finish timer.

    1. Save.

    1. Repeat for each requested workload.

1. Assign the appropriate Regional FTC queue as the Regional Manager in FTOP.

   1. Add FTCQ CSS *Region* to “onboarding” tab under “assignments.”

   1. Select **Primary** at tenant level.

   1. Remove yourself from RFA Manager.

   1. Save.

1. Update FTC Tab of the [FRP Assignments Tracker](https://microsoft.sharepoint.com/:x:/r/teams/FastTrackAssignmentTeamLeads/_layouts/15/Doc.aspx?sourcedoc=%7B64D55DED-0E5B-495A-A3C6-24FB5E328931%7D&file=FRP%20Assignments%20Tracker.xlsx&action=default&mobileredirect=true&cid=a9201250-76a3-4e23-b674-497518cff85f&wdLOR=c228C1E8C-161A-496E-93D4-6CA5A8B7A36F).

    **Note:** We track customers assigned to Delivery and reasons why a customer is assigned to FTC as opposed to Remote Delivery Team or a Referral-Ready FRP.

#### **AADP GTP** Customers

1. AADP GTP Team qualified customers with intent for AADP are Non-EDU/Non-Non-Profit customers with 10,000+ seats of AADP.

    **Note:** They should already be assigned to Kanna Ramasubramanian, as a Primary RM for AADP workload only, by the RFA Processor. The following needs to be completed considering customer meets AADP Team criteria above. If this is not done, follow up with RFA Processor.

    1. In the "Onboarding" Assignments tab, assign Kanna Ramasubramanian as Primary RM for AADP workload only.

    1. Send email to notify Kanna of the assignment using the [AADP Notification email template](https://microsoft.sharepoint.com/teams/FastTrackAssignmentTeamLeads/Shared%20Documents/AiR%20Leads/Gateway%20RFA%20Team%20GitHub%20files/referral-aadp-notification-email-template.msg).

    **Note:** If AADP is the only workload, then the tenant will be assigned to FTC and Kanna. If there are other eligible workloads, the tenant may be assigned to an FRP for those other workloads only, and to Kanna for AADP.

#### **MDATP or OATP** Customers

1. For tenants with 10K+ of **MDATP**, or **OATP**, or both:

    1. **Teresa Santos** will need to be assigned as Primary RM for the respective workload(s).

    1. The Engagement scenario will need to be set to FTC-CXP Led.

1. Tenants with less than 10K seat of MDATP or OATP for the respective workload(s) will be assigned to FTCQ CSS Americas as RM for whichever of these two workloads meet these conditions.

    1. The Engagement scenario will need to be set to CXP Led w/ CSS Assist.

1. Only email Teresa if it is an FTC to FRP transition for awareness.

### 4. [Assigning to Remote Delivery Team (RDT)](#4-assigning-to-remote-delivery-team-rdt)

1. If the tenant does not meet the criteria for being assigned to FRP, check to see if they meet the criteria to be assigned to Remote Delivery Team (RDT). Tenants located outside of a 1,000-mile radius from a Referral-Ready FRP are referred to a regional RDT based on location, language, and round robin criteria.

1. If assigning tenant to RDT due to language requirements, ensure there is an RDT in the Region supporting language from the table below.

   **FastTrack Supported Languages:** the following languages are supported FTC languages: Chinese (simplified), Chinese (traditional), English, French, German, Italian, Japanese, Korean, Portuguese (Brazil), Spanish, Thai, and Vietnamese.

1. Select the appropriate Remote Delivery Team (RDT) from table below based on the Region & Language requested.

    |    RDT Partner Name            |    Region                      |    Countries Covered for Remote   Delivery               |    Languages                    |
    |--------------------------------|--------------------------------|----------------------------------------------------------|---------------------------------|
    |    Avanade US                  |    Americas                    |    Americas                                              |    English                      |
    |    DXC US                      |    Americas                    |    Americas                                              |    Spanish                      |
    |    Dell                        |    Americas                    |    Americas                                              |    English                      |
    |    Sada Systems  (Core BTS)    |    Americas                    |    Americas                                              |    English                      |
    |    Akilon                      |    Americas                    |    Americas                                              |    French                       |
    |    Solutions Victrix           |    Americas                    |    Americas                                              |    French                       |
    |    Avanade UK                  |    EMEA                        |    EMEA                                                  |    English                      |
    |    InfoWAN                     |    EMEA                        |    Germany, Austria, Switzerland                         |    English, German              |
    |    Encamina                    |    EMEA                        |    EMEA                                                  |    Spanish                      |
    |    Prisma                      |    EMEA (Based in Americas)    |    EMEA                                                  |    Spanish                      |
    |    Insentra                    |    APJ                         |    Australia, New Zealand                                |    English                      |
    |    FTP Dell ANZ                |    APJ                         |    Australia, New Zealand                                |    English                      |
    |    Quadra Systems              |    APJ                         |    India Only                                            |    English                      |
    |    Alfa Connections            |    APJ                         |    Vietnam, Thailand, Philippines, Malaysia, Pakistan    |    English, Thai, Vietnamese    |

    | FRPs with Language Support that can be used as RDT for >1,000 mi only |
    |:----------------------------------------------------------------------:|

    |    Exakis                       |    EMEA     |    French        |
    |---------------------------------|-------------|------------------|
    |    Nelite                       |    EMEA     |    French        |
    |    Venha Pra Nuvem (see note **1**)       |    LATAM    |    Portuguese    |
    |    Consolidated Telecoms (see note **2**)     |    EMEA     |    Arabic        |

    **1:** They are not showing in Partner Finder tool; FPM is working on correcting this for endorsements.

    **2:** Only for customers with ≥500 seats

1. Assign the tenant to the appropriate RDT if confirmed eligible for RDT Referral based on the Assignment rules (above), location, language, etc.

1. In the overall status in FTOP, select **Create Notes**.

1. Update **Engagement Management** note:

    1. In the Notes Editor, under Note Category, select **Engagement Management.**

    1. In the Notes section, add “Referral: Assigned to FTP *Partner* as RDT; (Reason).”

    1. If no account team contacts, add “Not a managed account.”

    1. Include any relevant information that may be useful for Delivery.

    1. Under Next Action, add “Complete next steps for RFA Tenant.”

    1. Under Next Action Date, select the next business date.

    1. Under Next Action Owner, add “FM.”

    1. Click **Save**.

1. Update FT Portal with the Assignment details

    1. Go to the customer’s FastTrack Portal record via the link provided in the **FTOP RFA Approval Note**.

    1. Click on the **Services** tab.

    1. Click **View Submitted Requests**.

    1. In the **View Service History** tab, select the status from the **Status** column.

    1. In the fly-out window, be sure to append to **Request Approved** from the **Status** dropdown list.

    1. In the **Tenant Assignment** field, add the Referral note and the name of the RFA Processor who approved the RFA (i.e. “RFA approved by [processor name]; Referral assigned to Avanade.”).

    1. If an additional queue is being assigned (i.e. split workload assignment), enter that queue name in the **Split Workload Assignment 1** field.

    1. If a second additional queue is being assigned, enter that queue name in the **Split Workload Assignment 2** field.

    1. Select the **Reason(s)** for the assignment(s) from the **Assignment Reason** multi select box. If the appropriate Reason not listed in the drop-down, select a **Other**.

        > [!Note]
        > If more than one assignment reason is required, hold down the **Ctrl** key and select all desired assignment reasons. There is no order to these; all applicable reasons should be included.

1. Update [**Engagement Scenario**](#6-updating-engagement-scenario-based-on-where-the-tenant-is-assigned-to).

1. Update FTOP **Playbook** task:

    > [!Note]
    > The option to update Playbook task is not available for Targeting workloads.

    1. Select the requested workload.

    1. In the Search box, type 3186 “New FRP Referral.”

        1. Be sure the correct page is loaded.

        1. If unsure, check that “assignment” tab is highlighted.

    1. Set Task status to **Complete**.

    1. Start and finish timer.

    1. Save.

    1. Repeat for each requested workload.

1. Assign the appropriate RDT as the Regional Manager in FTOP. To assign a customer to partner, we need to assign multiple RM entities in the Onboarding and Partner tab in the Assignments area of FTOP.

    1. Add FTP *Partner* as the Regional Manager to the “onboarding” tab under “assignments.”

    1. Select **Primary** at Tenant level.

    1. Select all boxes under Tenant.

    1. Select Primary for the RFA approved workloads.

    1. Leave Primary for remaining workloads blank.

1. Assign FPM under Partner Success Manager field per the [FastTrack Ready Partners list](https://aka.ms/FRPPBIList).

1. Add Partner name to the RM field in the assignments under **partner** tab.

1. Remove yourself from RFA Manager.

1. Click **Save**.

1. Update the FRP Tab of the [FRP Assignments Tracker](https://microsoft.sharepoint.com/:x:/r/teams/FastTrackAssignmentTeamLeads/_layouts/15/Doc.aspx?sourcedoc=%7B64D55DED-0E5B-495A-A3C6-24FB5E328931%7D&file=FRP%20Assignments%20Tracker.xlsx&action=default&mobileredirect=true&cid=a9201250-76a3-4e23-b674-497518cff85f&wdLOR=c228C1E8C-161A-496E-93D4-6CA5A8B7A36F).

    > [!Note]
    > We track the customers assigned to Delivery and the reasons why a customer is assigned to RDT rather than to a Referral-Ready FRP.

1. Send the Referral Notification email to Customer, Partner, FPM; and the field according the the [Sending Referral Notification Emails](#8-sending-referral-notification-emails) section below.

### 5. [Assigning to FastTrack Ready Partners FRPs](#5-assigning-to-fasttrack-ready-partners-frps)

1. If the Tenant meets the initial eligibility criteria for being assigned to FRP, search for the best match in the [Partner Finder](https://www.microsoft.com/en-us/solution-providers/search?customFilters=curatedlists,fasttrack) tool.

    1. The Partner Finder tool is used to narrow down the search to find the best FastTrack Ready Partner based on selected workloads, partners’ skills, company size, and location.

    1. In cases where several matching FastTrack Ready Partners show up in the search, we will refer to FRP Assignments Tracker (Pivot Tab) to execute Round Robin assignment rules.

        1. Select a partner following the below criteria to ensure balanced assignments are maintained:

            1. Least number of assignments at the time of referral

            1. Closest proximity to the service location

    1. Once the potential Partner is selected, we will confirm that the Partner is marked as Referral-Ready by cross-referencing the [Referral-Ready List](https://aka.ms/FRPPBIList) and filtering “Yes” under the Referral Ready field.

1. Open [Partner Finder](https://www.microsoft.com/en-us/solution-providers/search?customFilters=curatedlists,fasttrack) tool.

1. Sign in using Microsoft Credentials.

1. Select the size of the organization.

1. Enter in customer’s address. (Be sure it gets populated in the box.)

1. Select 100 mi radius initially and check “Only show providers for this country/region.”

1. Click **Apply**.

    :::image type="content" source="media/rfa-find-a-microsoft-solution-provider.png" alt-text="Find as Microsoft solution provider tool":::

1. Under “Product” select RFA approved workloads. If customer has intent for both – Office 365 and Enterprise Mobility + Security select those first, then select individual workloads (if available). Refer to the below table for what to select on Product filter in the Partner Finder.

    | **Products selected on the RFA Form** | **Product filter from Partner Finder** |
    | -------------------------------------- | -------------------------------------- |
    | **EXCHANGE ONLINE**                    | Exchange                               |
    | **SHAREPOINT ONLINE**                  | SharePoint                             |
    | **TEAMS**                              | Microsoft Teams                        |
    | **YAMMER**                             | Yammer                                 |
    | **OFFICEPROPLUS**                      | Office 365                             |
    | **INTUNE**                             | Enterprise Mobility + Security         |
    | **AADP**                               | Enterprise Mobility + Security         |
    | **AIP**                                | Enterprise Mobility + Security         |

    :::image type="content" source="media/rfa-partner-finder-workload-selection.png" alt-text="Solution Finder tool's product selection page":::

1. The results will come back with a list of partners in this Country/Region and additional filter options. Start with an Option, “Nearest to you.”

    :::image type="content" source="media/rfa-find-a-microsoft-solution-provider-partner-selection.png" alt-text="Partner Finder partner selection":::

1. If you need to change company size, click on the, “Number of Employees,” field and update the number to the correct one.

1. If no FastTrack Ready **and** Referral Ready Partners show up in the desired area, confirm the location and increase the search radius to up to 500 miles, then then to 1,000 miles if needed.

    > [!Note]
    > If no Referral Ready FRPs are found, uncheck “Only show providers for this country/region” box. Ensure any FRP identified supports the customers language.

1. If there are no FastTrack Ready **and** Referral Ready Partners within the radius of 1,000 miles from the Customer, assign an appropriate Remote Delivery Team (RDT) according to the [Assigning to Remote Delivery Team (RDT)](#4-assigning-to-remote-delivery-team-rdt) section above.

    :::image type="content" source="media/rfa-find-a-microsoft-solution-provider-services-selection.png" alt-text="Solution provider service selection":::

1. Confirm the Partner is Referral Ready:

   1. Once you narrowed down the list of potential partners to send a referral to, cross-reference [FastTrack-Ready Assignment Team List](https://aka.ms/FRPPBIList) of FastTrack Ready Partners that they are enabled for referrals. To do so, you will need to filter by “Yes” under “Referral Ready” column on this list.

        :::image type="content" source="media/rfa-frp-power-bi-referral-ready-filter.png" alt-text="FRP Power BI Referral Ready filter":::

   1. The list can be sorted by Partner name, Partner Subsidiary (Country), etc.

   1. FPM’s update this list regularly and turn the Referral Ready switch ON/OFF based on Partner’s capacity, performance and availability. Therefore, it is essential to refer to this list every time we make a referral.

1. *If* several Partners match the referral criteria (i.e. location, workloads, size, etc) and are Referral Ready, *then* apply Round Robin to assign a customer to the Partner with the least number of referrals to try to keep our numbers as equal as possible. For this we will refer to the [FRP Assignment Tracker](https://microsoft.sharepoint.com/:x:/r/teams/FastTrackAssignmentTeamLeads/_layouts/15/Doc.aspx?sourcedoc=%7B64D55DED-0E5B-495A-A3C6-24FB5E328931%7D&file=FRP%20Assignments%20Tracker.xlsx&action=default&mobileredirect=true&cid=a9201250-76a3-4e23-b674-497518cff85f&wdLOR=c4C2BE480-D610-48AD-996D-C83B0B738FF5) (Pivot Tab).

1. Once the FastTrack and Referral Ready FRP is identified, proceed with assignment.

1. In the overall status in FTOP, select **Create Notes**.

1. Update **Engagement Management** note:

    1. In the Notes Editor, under Note Category, select **Engagement Management.**

    1. In the Notes section add, “Referral: Assigned to FTP *Partner*.”

    1. If there are no Account Team contacts, add “Not a managed account.”

    1. Include any relevant information that may be useful for Delivery.

    1. Under **Next Action**, add “Complete next steps for RFA Tenant.”

    1. Under **Next Action**, Date select the next business date.

    1. Under **Next Action**, Owner add “FM.”

    1. Click, **Save**.

1. Update FT Portal with the Assignment details.

    1. Go to the customer’s FastTrack Portal record via the link provided in the **FTOP RFA Approval Note**.

    1. Click on the **Services** tab.

    1. Click **View Submitted Requests**.

    1. In the **View Service History** tab, select the status from the **Status** column.

    1. In the fly-out window, be sure to append to **Request Approved** from the **Status** dropdown list.

    1. In the **Tenant Assignment** field, add the Referral note and the name of the RFA Processor who approved the RFA (i.e. “RFA approved by [processor name]; Referral assigned to Avanade.”).

    1. If an additional queue is being assigned (i.e. split workload assignment), enter that queue name in the **Split Workload Assignment 1** field.

    1. If a second additional queue is being assigned, enter that queue name in the **Split Workload Assignment 2** field.

    1. Select the **Reason(s)** for the assignment(s) from the **Assignment Reason** multi select box. If the appropriate Reason not listed in the drop-down, select a **Other**.

        > [!Note]
        > If more than one assignment reason is required, hold down the **Ctrl** key and select all desired assignment reasons. There is no order to these; all applicable reasons should be included.

1. Update [**Engagement Scenario**](#6-updating-engagement-scenario-based-on-where-the-tenant-is-assigned-to).

1. Update FTOP **Playbook** task:

    > [!Note]
    > The option to update Playbook task is not available for Targeting workloads.

    1. Select the requested workload.

    1. In the Search box, type 3186 “New FRP Referral.”

        1. Be sure the correct page is loaded.

        1. If unsure, check that “assignment” tab is highlighted.

    1. Set Task status to **Complete**.

    1. Start and finish timer.

    1. Click **Save**.

    1. Repeat for each requested workload.

1. Assign the appropriate FRP as the Regional Manager in FTOP. To assign a customer to FRP, we need to assign multiple RM entities in the Onboarding and Partner tab in the Assignments area of FTOP.

    1. Add FTP *Partner* as the Regional Manager to the “onboarding” tab under “assignments.”

    1. Select **Primary** at Tenant level.

    1. Select all boxes under Tenant.

    1. Select **Primary** for the RFA approved workloads.

    1. Leave **Primary** for remaining workloads blank.

1. Assign FPM under Partner Success Manager field per the [FastTrack Ready Partners list](https://aka.ms/FRPPBIList).

1. Add Partner name to the RM field in the assignments under the **partner** tab.

1. Remove yourself from RFA Manager.

1. Click **Save**.

1. Update FRP Tab of the [FRP Assignments Tracker](https://microsoft.sharepoint.com/:x:/r/teams/FastTrackAssignmentTeamLeads/_layouts/15/Doc.aspx?sourcedoc=%7B64D55DED-0E5B-495A-A3C6-24FB5E328931%7D&file=FRP%20Assignments%20Tracker.xlsx&action=default&mobileredirect=true&cid=a9201250-76a3-4e23-b674-497518cff85f&wdLOR=c228C1E8C-161A-496E-93D4-6CA5A8B7A36F).

    **Note:** We track customers assigned to Delivery and related details.

1. Send the Referral Notification email to Customer, Partner, FPM; and the field according the [Sending Referral Notification Emails](#8-sending-referral-notification-emails) section below.

### 6. [Updating Engagement Scenario based on where the tenant is assigned to](#6-updating-engagement-scenario-based-on-where-the-tenant-is-assigned-to)

1. Leave the previous value for unselected workloads.

1. For selected workloads, follow the logic below:

    1. FTC-CSS Led: The workload is selected on the RFA form and the tenant meets the criteria for FTC engagement with no Partner involvement for the given workload.

    1. FTC-FTP Led: The FRP eligible workload is selected on the RFA form and the customer is assigned to deploy the workload with an FRP.

        > [!Note]
        > 1. It is not required to update the Engagement Scenario to **FTC-FTP Led** in an FRP Referral scenario because CPOR will update this information for regular paid SKUs.
        > 1. FRP's are *not* enabled to update the Engagement Scenario for products related to the free/trial COVID-19 and will require the user to submit an Engagement Scenario change when assigning tenants to FRPs for free/trial SKUs.
        > [!Important]
        > If the tenant has eligible paid SKUs for any one product, the FTC Help ticket is *not* required for that product.

1. If the Engagement Scenario is being changed from FTC-CSS Led, FTC-FTP Led, or FTC-CXP Led, then go to the [Send Engagement Scenario Escalation](rfa-send-engagement-scenario-escalation.md) article to submit an Engagement Scenario Escalation. Otherwise, proceed to the next step.

1. If the Engagement Scenario has COVID free/trial licenses, is being changed to FTC-FRP Led, and meets the following criteria, then go to the [Send Engagement Scenario Escalation](rfa-send-engagement-scenario-escalation.md) article to submit an Engagement Scenario Escalation; otherwise, proceed to the next step. **Criteria**:

    1. The tenant has **only** COVID free/trial licenses.

        ***OR***

    1. The tenant has a combination of COVID licenses with EMS trials that were provided an exception for assistance.

1. If the **Engagement Scenario** is being changed, select the desired Engagement Scenario from the **Engagement Scenario** dropdown for the workload within the **Services** tab, and then select **Save**.

### 7. [Update Data Migration section](#7-update-data-migration-section)

1. If Data Migration is approved, then the following fields should be updated:

    :::image type="content" source="media/rfa-data-migration-referral.png" alt-text="Data Migration":::

    1. **Microsoft Performing Migration?** checkbox is checked.

    1. **Migration TBD** is selected from the dropdown list.

    1. The "**+**" is selected and the number of entitlements is populated.

    1. The migration notes field has a note indicating that Data Migration assistance was selected on the RFA form. (See example below.)

1. If Data Migration is not selected then the following fields should be updated:

    1. RFA Undetermined is selected from the Migration Rejection Reason dropdown list.

    1. The migration rejection reason has the following note: "Data Migration assistance was not selected on the RFA form."

### 8. [Sending Referral Notification Emails](#8-sending-referral-notification-emails)

1. Send the [Partner Referral Notification template](https://microsoft.sharepoint.com/teams/FastTrackAssignmentTeamLeads/Shared%20Documents/AiR%20Leads/Gateway%20RFA%20Team%20GitHub%20files/referral-notification-email-template.msg) from the shared mailbox for FastTrack Referrals, [frprfrls@microsoft.com](mailto:frprfrls@microsoft.com), to notify the Customer, FRP Referral Contact, and FPM of the assignment. In the **To** line of the email, add:

    1. RFA Customer Contact and/or Business Sponsor – from the RFA form

        **Note:** If Customer contact or Business sponsor are not available, use Customer contacts marked as “Is Engaged” under Contacts Tab in FTOP. Customer contact priority is: RFA Contact, Business Sponsor, “Is Engaged” in FTOP

    1. FRP Referral Contact (Referrals Distribution Lists column) and FPM from [FastTrack-Ready Assignment Team List](https://aka.ms/FRPPBIList)

        **Note:** If Referral DL is not available, use Referral Contact, then Primary Contact. If none of these exist, email the FPM for the correct contact

    1. In the subject line use “Your request for a FastTrack Specialist has been assigned - [Company Name].”

1. Send the [Field Notification Template](https://microsoft.sharepoint.com/teams/FastTrackAssignmentTeamLeads/Shared%20Documents/AiR%20Leads/Gateway%20RFA%20Team%20GitHub%20files/referral-field-notification-email-template.msg) to Account Team:

    1. In FTOP, under Contacts tab select most recent Microsoft contacts added.

    1. In the “To” line, add most recent Account Team contacts based off of date added to FTOP (adhere to RFA processing/approval date).

    1. In the Subject Line use: “Request for a FastTrack Specialist has been assigned - Tenant Name.”

    > [!Note]
    > The partner should reach out to the customer within **2 business days**. If there is no response, the FPM should follow up with Partner. If there is conflict or reassignment to different Delivery team is needed, FPM will work with referral team to provide reason, etc. The tenant can then be reassigned to FRP or FTC, based on the FPM input, email from the customer and recommendation from the Referral Lead.

### 9. [Updating the FRP Assignments Tracker](#9-updating-the-frp-assignments-tracker)

1. Enter assignment details to the [FRP Assignments Tracker](https://microsoft.sharepoint.com/:x:/r/teams/FastTrackAssignmentTeamLeads/_layouts/15/Doc.aspx?action=edit&sourcedoc=%7B64d55ded-0e5b-495a-a3c6-24fb5e328931%7D).

1. Add Tenant Name, Tenant ID, and other required details to the appropriate tab (FTCAssignment vs. FRP).

1. To populate the Number of seats:

    1. Add number of seats to “Seats” column.

    1. Add “Ctrl+D” to Size column to auto populate.

        - XS = 150 – 499

        - S = 500 – 4999

        - M= 5000 – 9999

        - L = 10000+

### 10. [Expediting customers to Delivery](#10-expediting-customers-to-delivery)

1. To Expedite Customers to FTC:

    - Americas - forward the request to Jeff Garrett (FTCAMCSSTM DL lists all Delivery RM’s in Americas), Adam (Assignment Lead?)

    - For APJ - forward the request to Doris Lin

    - For EMEA - forward the request to Valentin Craioveanu

1. To Expedite Customers assigned to FRP, reach out to FastTrack Partner Manager assigned to the FRP Partner per the [FastTrack Ready Partner list](https://aka.ms/FRPPBIList).

### 11. [Email Templates](#11-email-templates)

- Partner Referral Notification: [email template](https://microsoft.sharepoint.com/teams/FastTrackAssignmentTeamLeads/Shared%20Documents/AiR%20Leads/Gateway%20RFA%20Team%20GitHub%20files/referral-notification-email-template.msg)

- Field Notification: [email template](https://microsoft.sharepoint.com/teams/FastTrackAssignmentTeamLeads/Shared%20Documents/AiR%20Leads/Gateway%20RFA%20Team%20GitHub%20files/referral-field-notification-email-template.msg)

- AADP Notification: [email template](https://microsoft.sharepoint.com/teams/FastTrackAssignmentTeamLeads/Shared%20Documents/AiR%20Leads/Gateway%20RFA%20Team%20GitHub%20files/referral-aadp-notification-email-template.msg)

## GDPR Compliance​

FTC General Data Protection Regulation (GDPR) Guidance: [FTC GDPR Guidance](https://microsoft.sharepoint.com/:w:/r/teams/ftccm/_layouts/15/Doc.aspx?sourcedoc=%7BE857ED81-F353-4654-8CEA-5CB410A4D00B%7D&file=General%20Data%20Protection%20Regulation.docx&action=default&mobileredirect=true)

## Next Steps

Keep the guidance current.

[!INCLUDE [rfa-resources-for-footer-of-every-article-include](includes/rfa-resources-for-footer-of-every-article-include.md)]

## Refresh Summary

| Date       | Who Changed       | What Changed                                                                              |
| ---------- | ----------------- | ----------------------------------------------------------------------------------------- |
| 5/18/2020   | Luda Zhuk, author;<br /> Ben Skoropinski, GitHub  | Primary change: Added guidance about FT Portal status note pane release, <br />including split workload, reasons for status, etc.), Removed Technical <br />Enablement Note field instructions. Sections updated: *Assigning to FTC*, <br />*AADP GTP Customers*, *MDATP or OATP Customers*, *Assigning to Remote <br />Delivery Team (RDT)*, *Assigning to FastTrack Ready Partners FRPs*.       |
| 5/5/2020   | Ben Skoropinski   | Created Refresh Summary.                                                                  |
