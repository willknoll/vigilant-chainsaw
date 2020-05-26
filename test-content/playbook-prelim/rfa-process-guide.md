---  
# required metadata  
title: FastTrack Playbook - RFA Process Guide  
description: FastTrack Playbook - RFA Process Guide 
author: Erin Saville  
ms.author: v-ersav  
manager: steveso
ms.date: 1/3/2020  
ms.topic: playbook  
ms.prod: non-product-specific  
ms.custom: internal-playbook  
ft.audience: internal  
ft.owner: alicia.evans
---  
[!INCLUDE [Playbook Feedback](./includes/questions-feedback.md)]

# RFA Process Guide

## [Type and use of document](#type-and-use-of-document)

- Topic category: Request for Assistance (RFA)
- This article applies to: Gateway RFA FMs
- Use: Starting point of sequential Guide for processing M365 FastTrack Benefit RFAs

## [Summary](#summary)

This article provides step-by-step guidance for Gateway RFA FMs to follow when processing M365 FastTrack Benefit RFAs submitted via the [FastTrack Portal](https://fasttrack.microsoft.com/). Where there are divergent process flows, independent processes applicable only to unique scenarios, or other independent content such as reference articles, this RFA Guide provides links to the articles relevant to each case.

## [Escalation instructions](#escalation-instructions)

If you encounter any scenarios that are not explicitly described in this document, escalate to your lead for guidance.

If you encounter any technical issues related to the FastTrack Portal or RFA Assignment Dashboard, please reach out to Erin Saville ([v-ersav@microsoft.com](mailto:v-ersav@microsoft.com)), who will triage the issue. If you're experiencing a blocking issue (for example, tool outages, process blockers) and need to file a help ticket via the FastTrack Portal outside of PST business hours, forward the ticket submission confirmation to Erin for visibility; in this case, be sure to identify the bug as "P0" in the ticket notes.

Going forward all issues related to missing non-Win10 entitlements, missing FTOP Playbooks, and SLT Watchlist flags being reset should be escalated through the [FTC Help](https://aka.ms/ftchelp) process.

## [I. Review the RFA](#i-review-the-rfa)

### 1. [Select an RFA in the RFA Assignment Dashboard](#1-select-an-rfa-in-the-rfa-assignment-dashboard)

**Link to: [RFA Assignment Dashboard](https://aka.ms/assignmentdashboard)**

1. Select **Submitted** from the **Status** filter dropdown.

1. Click on the row for the RFA with the oldest date in the **Submitted Date** column and no name in the **Assigned To** column.

1. Click on the dropdown in the **Assigned To** column in the row for the selected RFA.

1. Select your name from the dropdown list.

1. Click **Save Assignments**.

### 2. [Check for multiple RFAs](#2-check-for-multiple-rfas)

1. **RFA Assignment Dashboard**

    1. Search for multiple RFAs using different variations of the customer name in the **Search Customer Name or RFA ID** search box in the top right corner of the page.

1. **FastTrack Portal**

    1. Go to the customer's FastTrack Portal record via the link provided in the **Request URL** column and click on the **Services** tab.

    1. Click **View submitted requests** on the **Request for Assistance with Microsoft 365** card.

    1. Check to see if any other RFAs have been filed or processed (that is, **Status** does not equal **Available**).

1. If there is more than one RFA, process simultaneously or reach out to the Gateway RFA Manager assigned to the RFA submitted first.

    > [!Note]
    > Duplicate RFAs should be cancelled immediately and the initially submitted RFA processed normally. A duplicate RFA is defined as an RFA submitted by the same requestor for the all of the same RFA details (that is, **all** of the same workloads, intent, contacts, and so forth).

### 3. [Open the RFA Form](#3-open-the-rfa-form)

1. Right click on the link in the **Request URL** column in the [RFA Assignment Dashboard](https://ftop.microsoft.com/rfa/dashboard/#/).

1. Select **Open in new tab**.

### 4. [Determine COVID-19 Response Related](#4-determine-covid-19-response-related)

1. RFA is a COVID-19 Response if one or more of the following are true:

    1. The **Emergency Covid-19 Request** column is **Yes**

        > [!Note]
        > If eligibility has been bypassed (with or without COVID free/trials licenses) then the tenant’s eligibility will have to be manually determined in ViewPoint.

    1. The **Eligibility Bypassed** column is **True**

    1. The **Non-Paid Com/Gov Products** column has products listed

    1. The **Non-Paid EDU Products** column has products listed

    1. The **Comments** column indicates that the RFA is COVID related

1. If one or more of items **two** (**2.**), **three** (**3.**), or **four** (**4.**) above, are true, then proceed to the [Validate Tenant Eligibility](#5-validate-tenant-eligibility) section below; otherwise, skip to the [Determine customer type and branch to Process flow](#9-determine-customer-type-and-branch-to-process-flow) section.

### 5. [Validate Tenant Eligibility](#5-validate-tenant-eligibility)

#### 1. Determine Eligibility for COVID-19 (free/trial) and Regular Paid licenses

1. If the **Eligibility Bypassed** column is set to **True** and ***no*** products are listed under the **Non-Paid Com/Gov Products** or **Non-Paid EDU Products**, then skip to the section to [Determine Eligibility for Onboarding](#2-determine-eligibility-for-onboarding).

1. If the **Eligibility Bypassed** column is set to **True** and products are listed under the **Non-Paid Com/Gov Products** or **Non-Paid EDU Products** columns, then proceed to the next step.

1. Search for the tenant domain in [Viewpoint](https://support.office.net/?modern=0&source=ViewPointV2) and open the **Subscriptions** tab to review the tenants licenses.

1. Search for the tenant ID in [Lynx](https://lynx.office.net/) and open **Subscriptions** tab to review the **Offer ID’s** associated with each COVID-19 approved SKU.

    :::image type="content" source="media/rfa-lynx-subscriptions.png" alt-text="Lynx: Subscriptions tab":::

    :::image type="content" source="media/rfa-lynx-offer-id.png" alt-text="Lynx: Offer ID column":::

1. The tenant is eligible for assistance and no exception is necessary if the Customer has 150+ seats of any of the following SKUs:

    | **COVID-19 Approved Free/Trial Licenses** |
    |:--------------------------------------------------------------------------------:|

    | Offer Name                | Seat Size | Offer ID |
    |---------------------------|-----------|----------|
    | E1 (Trial)                | 150+      | EC014495-5616-4471-832F-B08FC25BA474 ***or*** <br /> c0c1386f-4a95-466b- 8974-cefd71414def        |
    | G1 (Trial)                | 150+      | 0f9f7d7a-844f-4434-9b7d-06fd82386cba        |
    | Teams Exploratory (Trial) | 150+      | 4BFF55EE-2A32-464C-86A0-3A9155E983F2        |
    | Teams Commercial (Trial)  | 150+      | dd3496ba-a49b-4475- 9f40-8c333709ef87        |
    | A1 (Free)                 | 1+        | *No offer ID requirement*        |
    | A5 (Trial)                | 1+        | 03ee83a5-5cb4-4545-aca9-33ead43f222a ***or*** <br /> fbab967f-0036-4c5c-a396-f7c395af35be        |

1. Eligibility for all regular (i.e. non-COVID-19 approved free/trial licenses) should be based off of what is outlined in the [Eligible Services and Plans](https://docs.microsoft.com/en-us/fasttrack/m365-eligible-services-and-plans).

1. If the tenant has A1 or A5 licenses, verify the Faculty/Staff Users and the Student Users columns in the Assignment Dashboard.

    > [!Important]
    > If these values were not provided on the form (due to a known bug), then manually request this information from the requestor using the Request Faculty/Staff vs. Student users template and skip to the Update RFA Assignment Dashboard section to place the request On Hold Pending Requestor Response.

1. If the Customer has <150 seats E1/G1/Teams Exploratory/Team Commercial trials (with or without other eligible products), then send an exception request to [ft-covid-er@microsoft.com](mailto:ft-covid-er@microsoft.com) using the [Gateway Exception Request template](https://microsoft.sharepoint.com/teams/FastTrackAssignmentTeamLeads/Shared%20Documents/AiR%20Leads/Gateway%20RFA%20Team%20GitHub%20files/COVID-19%20email%20templates/ft-covid-er_exception-request-fewer-than-150.msg); then skip to the [Update RFA Assignment Dashboard](#iv-update-rfa-assignment-dashboard) section to place the request **On Hold**.

    > [!Important]
    > 1. Any customer that is affiliated with Life Sciences (Doctors Offices, Hospitals, Clinics, etc.) can receive an exception without escalation.
    > 1. If you receive an escalation to make an exception for a tenant with <150 seats of any other paid or non-COVID related SKU, send the exception request to [ft-covid-er@microsoft.com](mailto:ft-covid-er@microsoft.com).

1. If the **Has Data Migration?** column is set to **True**, then proceed to the next section to Determine Data Migration Eligibility.

    > [!Note]
    > If workloads are listed in the **Com/Gov Migration Exception Request** or **EDU Migration Exception Request** columns and the tenant is eligible based on the logic outlined in the next section, then no exception approval from the Migration Team is necessary.

1. If none of the above are true, then skip to the [Determine customer type and branch to Process flow](#9-determine-customer-type-and-branch-to-process-flow) section.

#### 2. Determine Eligibility for Onboarding

1. Search for the tenant domain in [Viewpoint](https://support.office.net/?modern=0&source=ViewPointV2) and open the **Subscriptions** tab to review the tenants licenses.

1. Eligibility for all regular (i.e. non-COVID-19 approved free/trial licenses) should be based on what is outlined in the [Eligible Services and Plans](https://docs.microsoft.com/en-us/fasttrack/m365-eligible-services-and-plans).

1. If tenant has A1 or A5 licenses, confirm the Faculty/Staff Users and the Student Users columns in the Assignment Dashboard.

    > [!Important]
    > If these values were not provided on the form (due to a known bug), then manually request this information from the requestor using the Request Faculty/Staff vs. Student users template; then skip to the Update RFA Assignment Dashboard section to place the request On Hold Pending Requestor Response.

1. If the **Has Data Migration?** column is set to **False**, then skip to the [Start Automation in the RFA Assignment Dashboard](#6-start-automation-in-rfa-assignment-dashboard) section.

1. If the **Has Data Migration?** column is set to **True**, then proceed to the Determine Data Migration Eligibility section.

#### 3. Determine Data Migration Eligibility

1. The customer **qualifies** for Data Migration if:

    1. The tenant has 500+ seats of a paid/migration eligible product that is being requested (i.e. SharePoint, Exchange Online, or OneDrive).

        **OR**

    1. Both of the following conditions are met:

        1. The sum of E1/G1/Teams Exploratory trials is 500+ ***or*** the sum of Faculty/Staff + Student users is 500+ for a migration eligible workload that is being requested.

            AND

        1. The request *is **not*** for Lotus Notes migration.

1. Customer *requires an exception* for Data Migration if:

    1. The sum of E1/G1/Teams Exploratory trials are <500 ***or*** the sum of Faculty/Staff + Student users is <500.

        AND/OR

    1. The request *is* a Lotus Notes migration.

1. If the Customer qualifies for Data Migration with no required exception, proceed to the [Start Automation in RFA Assignment Dashboard](#6-start-automation-in-rfa-assignment-dashboard) section below.

1. If the Customer requires an exception for Data Migration, escalate to the Migration Team via the **Migration Requests** channel of the [FastTrack COVID-19 Response Team](https://teams.microsoft.com/l/team/19%3a48480c7af49d4e53bb3e9381e1a1ec8f%40thread.tacv2/conversations?groupId=82650ff5-da27-444f-b7cb-186008e75de5&tenantId=72f988bf-86f1-41af-91ab-2d7cd011db47) using the [Migration Exception/Notification Request template](https://microsoft.sharepoint.com/teams/FastTrackAssignmentTeamLeads/Shared%20Documents/AiR%20Leads/Gateway%20RFA%20Team%20GitHub%20files/COVID-19%20email%20templates/data-migration-template-for-data-migration-team.msg) and skip to the section to [Update RFA Assignment Dashboard](#iv-update-rfa-assignment-dashboard) to place the request **On Hold.**

### 6. [Start Automation in RFA Assignment Dashboard](#6-start-automation-in-rfa-assignment-dashboard)

1. Select **Start Automation** in the **RFA Assignment Dashboard** for the selected RFA.

    Note: *The Validation Pop-up will display the FastTrack Benefit eligibility, contact, intent, and assignment recommendations.*

### 7. [Review Tenant Exists line in Validation Pop-Up](#6-review-tenant-exists-line-in-validation-pop-up)

Note: *The Validation Pop-up will verify if the RFA Tenant exists and is assigned in FTOP.*

1. Determine if this is a *Net New tenant* scenario (that is, the tenant does not yet exist in FTOP), or an *Already in FTOP tenant* scenario.

1. If the tenant does not exist in FTOP (a *Net New tenant* scenario), skip to the [Determine if request includes Windows 10 or Edge](#3-determine-if-request-includes-windows-10-or-edge) section below.

1. If the tenant does exist, proceed to next step.

### 8. [Search for tenant in FTOP and assign yourself](#8-search-for-tenant-in-ftop-and-assign-yourself)

1. In the FTOP dashboard, set **Filter** to **All**.

1. Set **Display** to **Partner Validation**.

1. Search by the tenant ID (listed as **Company** ID in the **Profile** tab in [Viewpoint](https://support.office.net/?modern=0&source=ViewPointV2)).

1. Click the row for the tenant in FTOP to open that tenant's Assignment fly-out window on the right.

1. Select **Assignments** from the side window for the tenant.

1. Select the "**+**" button to add yourself to the tenant.

1. In the search box, type in your name and click the ![RFA - magnifying glass](media/rfa-magnifying-glass.png) icon, or press enter.

1. Select your name from the dropdown list.

1. Click the **Tenant** checkbox.

1. Click the **apply assignments** button at the bottom of the window.

### 9. [Determine customer type and branch to Process flow](#9-determine-customer-type-and-branch-to-process-flow)

#### 1. Verify if tenant is marked for Customer Health (S1500 or P800) initiative

1. Search for the tenant domain in [Viewpoint](https://support.office.net/?modern=0&source=ViewPointV2).

1. Copy the tenant ID (that is, **Company ID** in the **Profile** tab of [ViewPoint](https://support.office.net/?modern=0&source=ViewPointV2)).

1. Search for the tenant ID in FTOP by setting the **Filter** to **All** and the **Display** to **Partner Validation**.

1. Open the customer record and review the **Motions** indicator located under the customer name.

    - S1500: Motion Label is **Customer Health** only

    - P800: Motion Label is **Customer Health** and **Targeting**

1. If tenant is either S1500 or P800, continue processing according to the [Customer Health RFA Process Guide](rfa-customer-health-process-guide.md).

1. If tenant is not marked for S1500 or P800, proceed to next step.

#### 3. Determine if request includes Windows 10 or Edge

1. Review the **Chosen Products** section of the RFA Form to determine if **Windows 10, Edge, or both** are a requested workloads.

1. If **Windows 10, Edge, or both** are **not** requested, skip to the [Identify potential escalations](#ii-identify-potential-escalations) section below in order to process this RFA according to the Standard RFA Process flow.

1. If **Windows 10, Edge, or both** ***are*** requested workloads, proceed to the [Windows 10 and Edge RFA Process Guide](rfa-windows-10-and-edge-process-guide.md) to continue processing this RFA.

## [II. Identify potential escalations](#ii-identify-potential-escalations)

### 1. [Check for Skype for Business selection](#1-check-for-skype-for-business-selection)

1. On the RFA form, check to see if **Skype for Business** appears in the **Chosen Products** section.

    1. If no, proceed to the next section, [Check tenant assignments in FTOP](#2-check-tenant-assignments-in-ftop).

    1. If yes, proceed to the article, [Teams First Pitch](rfa-teams-first-pitch-standard.md).

### 2. [Check tenant assignments in FTOP](#2-check-tenant-assignments-in-ftop)

1. If this is a *Net New tenant* scenario, skip to the [Determine if a FastTrack Ready Partner (FRP) conflict exists](#3-determine-if-a-fasttrack-ready-partner-frp-conflict-exists) section. Otherwise, proceed to the next step.

1. In the FTOP dashboard, open the tenant's Assignment fly-out window according to the same guidance found in the [Search for tenant in FTOP and assign yourself](#6-search-for-tenant-in-ftop-and-assign-yourself) section above.

1. Review the **RM, FM,** and **FPM** assignments to determine the type of team that is currently assigned to the RFA tenant.

    Note: *These assignments will impact the routing of your RFA tenant later in the guide.*

### 3. [Determine if a FastTrack Ready Partner (FRP) conflict exists](#3-determine-if-a-fasttrack-ready-partner-frp-conflict-exists)

1. Determine if an FRP or Non-FRP is engaged.

    Note: "Engaged" means that they are indicated on the RFA form. It is *not* referring to any current assignment status in FTOP.

    1. If the domain of a non-customer contacts on the RFA form belongs to a Partner company (for example, not a Microsoft or personal email account), a partner is likely engaged.

        > [!Note]
        > If you see a v- Microsoft account, you'll need to confirm this is not an MCS contact. If confirmed MCS, then this contact should be considered a partner contact.

    1. If the partner can be found in the [FRP List](https://msit.powerbi.com/groups/me/apps/f8dbc5ed-8560-4384-99bb-6486899741e9/reports/b3b75f94-ac3b-4760-a8c1-a984b0e1a24d/ReportSection286e648ca0a2792b097a?ctid=72f988bf-86f1-41af-91ab-2d7cd011db47), an FRP is engaged.

        > [!Note]
        > Some FRPs are associated with a specific location, for example, Avanade US verses Avanade UK. Currently, these are regional designations. Avanade US is for the entire Americas region and Avanade UK is for the entire EMEA region. If an Avanade resource filed an RFA for a Canadian customer, the tenant would still be assigned to Avanade US.

    1. If no partner is engaged, skip to [Update Engagement Scenario](#4-update-engagement-scenario). Otherwise, proceed to the next step.

1. *If* one or more of the following FRP conflicts are true, *then* escalate to an FPM via the instructions found in the [FPM Escalation process](rfa-fpm-escalation-process-standard.md) article.

    - If an FRP is engaged *and* the customer does not meet the criteria for FRP assignment according to the [Assignment Business Rules](rfa-assignment-business-rules.md))

    - If an FRP is engaged and the customer is already assigned to another FRP

    - If a non-FRP is engaged and the customer is already assigned to another FRP

1. If no FRP conflict exists, proceed to the next section.

### 4. [Update Engagement Scenario](#4-update-engagement-scenario)

1. If the tenant does not exist in FTOP, skip to the [Review Staging Contacts Tab in RFA Assignment Dashboard](#1-review-staging-contacts-tab-in-rfa-assignment-dashboard) section below. Otherwise, proceed to the next step.

1. Review the [FTOP Assignment Scenarios Guide](rfa-ftop-assignment-scenarios-guide.md) as a reference to determine or confirm where your tenant will be assigned.

1. If the tenant is being assigned or reassigned to **FTCQ All FTC** for possible partner referral, do not update the Engagement Scenario, and skip to the [Review Staging Contacts Tab in RFA Assignment Dashboard](#1-review-staging-contacts-tab-in-rfa-assignment-dashboard) section below. Otherwise, proceed to the next step.

1. Open the Services tab.

1. Update the **Engagement Scenario** based on where the tenant will be assigned to in FTOP.

    1. Leave the previous value for unselected workloads.

    1. For selected workloads, follow the logic below:

        1. **Non-FastTrack Partner-Led:** The workload is selected on the RFA form and the customer has intent to deploy the workload with the Non-FRP. If a partner is listed on the RFA form and they are *not* on the [FRP List](https://msit.powerbi.com/groups/me/apps/f8dbc5ed-8560-4384-99bb-6486899741e9/reports/b3b75f94-ac3b-4760-a8c1-a984b0e1a24d/ReportSection286e648ca0a2792b097a?ctid=72f988bf-86f1-41af-91ab-2d7cd011db47), they are considered a non-FRP.

        1. **FTC-CSS Led:** The workload is selected on the RFA form and the tenant meets the criteria for FTC engagement with no Partner involvement for the given workload.

        1. **FTC-FTP Led:** The FRP eligible workload is selected on the RFA form and the customer has intent to deploy the workload with an FRP.

            > [!Note]
            > 1. We are not required to change the Engagement Scenario to **FTC-FTP Led** when an FRP is engaged or in an FRP Referral scenario because CPOR will update this information.
            > 1. FRP's are *not* enabled to update the Engagement Scenario for products related to the free/trial COVID-19 and will require the user to submit an Engagement Scenario change when assigning tenants to FRPs for free/trial SKUs.
            > [!Important]
            > If the tenant has eligible paid SKUs for any one product, the FTC Help ticket is *not* required for that product.

        1. **CXP Led w/CSS Assist:** The workload is AADP and meets **all** AADP CAT Team requirements (see footnote four (4) in the [Assignment Business Rules](rfa-assignment-business-rules.md#footnote-reference) article).

        1. **FTC-CXP Led**: The selected workload is MDATP or OATP, or both, and meets **all** the following MDATP/OATP CAT Team requirements (see footnote three (3) in the [Assignment Business Rules](rfa-assignment-business-rules.md#footnote-reference) article).

    1. If the **Engagement Scenario** is being changed from **FTC-CSS Led**, **FTC-FTP Led**, or **FTC-CXP Led**, then skip to the [Send Engagement Scenario Escalation](rfa-send-engagement-scenario-escalation.md) article to submit an Engagement Scenario Escalation. Otherwise, proceed to the next step.

    1. If the **Engagement Scenario** has COVID free/trial licenses, is being changed to **FTC-FTP Led**, and meets the following **criteria**, then the skip to the [Send Engagement Scenario Escalation](rfa-send-engagement-scenario-escalation.md) article to submit an Engagement Scenario Escalation; otherwise, proceed to the next step. **Criteria:**

        - The tenant has **only** COVID free/trial licenses

          ***OR***

        - An exception has been approved for EMS trials

    1. If the **Engagement Scenario** is being changed, select the desired Engagement Scenario from the **Engagement Scenario** dropdown for the workload within the **Services** tab, and then select **Save**.

1. Proceed to the next step.

## [III. Review RFA Assignment Dashboard](#iii-review-rfa-assignment-dashboard)

### 1. [Review Staging Contacts Tab in RFA Assignment Dashboard](#1-review-staging-contacts-tab-in-rfa-assignment-dashboard)

1. If Automation has been closed in the RFA Assignment Dashboard, open your RFA in the [RFA Assignment Dashboard](https://ftop.microsoft.com/rfa/dashboard/#/) and select **Start Automation**.

1. Open the **Staging Contacts Tab** in a separate browser tab to confirm contact automation is correct.

1. Select the row for each contact shown and review the **Update Source** note on the right-hand margin. The note will identify the **Sources** where each contact was pulled from and will also serve as an indication of the type of contact. The **Source** note for the contacts are displayed as follows:

    - Requestor (RFA Form): **RFA_REQUESTOR**

    - Customer Contact (RFA Form): **RFA_CUSTOMER**

    - Account team Contact (CALC): **CALC**

    - TAM Contact (PSR): **PSR**

1. Any older duplicate contacts (that is, contacts existing prior to automation that are the same as what is pulled in from automation) must be deleted from the record after automation is accepted.

### 2. [Review Staging Services Tab in RFA Assignment Dashboard](#2-review-staging-services-tab-in-rfa-assignment-dashboard)

Note: *All eligible, unselected workloads in the RFA form will not be changed and will remain as is. All eligible, selected workloads in the RFA form will update their corresponding fields on the Services Tab as described in this section.*

1. Open the **Staging Services Tab** in a separate browser tab to confirm intent automation is correct.

1. Select **View** for each workload selected on the RFA Form and review the following elements:

    1. **Consumption Status/L1: In Progress**

    1. **Reason/L2** = Will automatically be determined by existing FTOP logic.

    1. **Target Date:** The target date will be updated in the corresponding row for **In Progress** and match the **Product Launch Date** on the RFA form (see example).

    1. **Notes:** "Intent information updated automatically with input from RFA (ID #xxx)" will be added.

    1. **Technical Service Notes:**  For EXO, the note **Current Mail System** is added and the name of the mail system in the RFA form is populated.  There is a known bug that adds the note **Current Mail System** to all workloads other than EXO.

        ![RFA Entitlement Status and Technical Service Note](media/rfa-entitlement-status-and-technical-service-note.png)

    1. **Business Reason:** This should match the Purchase Reason noted on the RFA form.

    1. **Success Owner Role:** This should match the **Business Sponsor** details on the RFA Form.

        1. **Other** should only be selected if the role in RFA is not one of the options in the dropdown list. If there is no match and **Other** is selected, then the **Success Owner Role** should be added to the entitlement notes field.

    1. **Data Migration** is *selected* then the following fields should be updated:

        1. **Microsoft Performing Migration?** checkbox is checked

        1. **Migration TBD** is selected from the dropdown list

        1. The **"+"** is selected and the number of entitlements is populated

        1. The migration notes field has a note **Data Migration assistance was selected on the RFA form** (see example)

        ![RFA - Data Migration](media/rfa-data-migration.png)

    1. **Data Migration** is *unselected* then the following fields should be updated:

        1. **RFA Undetermined** is selected from the **Migration Rejection Reason** dropdown list

        1. The **migration rejection reason** has the following note: "Data Migration assistance was not selected on the RFA form"

## [IV. Update RFA Assignment Dashboard](#iv-update-rfa-assignment-dashboard)

1. If Request is being Approved:

    1. In the [RFA Assignment Dashboard](https://ftop.microsoft.com/rfa/dashboard/#/), fill in the **Final Customer Tenant Domain** field with the final tenant domain.

    1. Fill in the **Final Customer OMS Tenant ID** field with the final tenant ID.

    1. If the automation is correct in staging, check the **Is Valid** checkbox; otherwise, leave it blank.

        > [!Note]
        > If the checkbox is left unchecked, then automation will not populate in the tenant's FTOP record; manual processing and validation will be required. Unless otherwise noted (for example, in other process flows), the processor can use their best judgement to determine whether it is more efficient to check this box or not.

    1. Select **Request Approved** from the **Status** dropdown.

    1. Select **Save**.

    1. Skip to the next section, [Update FastTrack Portal RFA Status](#v-update-fasttrack-portal-rfa-status).

1. If Request is being set to anything other than approved:

    1. Select desired status from the **Status** dropdown (**On Hold**, **On Hold Pending Requestor Response**, or **Cancelled (closed)**).

    1. Select **Save**.

    1. Proceed to the [Update FastTrack Portal RFA Status](#v-update-fasttrack-portal-rfa-status) section.

## [V. Update FastTrack Portal RFA Status](#v-update-fasttrack-portal-rfa-status)

1. **Approve, Cancel,** or place the RFA **On Hold** in the [FastTrack Portal](https://fasttrack.microsoft.com/).

    > [!Note]
    > If cancelling in the FT Portal due to a duplicate RFA, be sure to use the* **Cancelled(closed)** *note for duplicate RFAs found here in the [**FastTrack Portal Notes Bank**](https://microsoft.sharepoint.com/:x:/r/teams/FastTrackAssignmentTeamLeads/_layouts/15/Doc.aspx?sourcedoc=%7BCA587309-09E4-445C-A7CB-28058CE91555%7D&file=FastTrack%20Portal%20Notes%20Bank.xlsx&action=default&mobileredirect=true).

    1. Return to the customer's FastTrack Portal record via the link provided in the **Request URL** column in the [RFA Assignment Dashboard](https://ftop.microsoft.com/rfa/dashboard/#/).

    1. Click on the **Services** tab.

    1. Click **View Submitted Requests**.

    1. In the **View Service History** tab, select the status from the **Status** column.

    1. In the fly-out window, scroll down to the **Update Request** section and select **Request Approved**, **On Hold**, **On Hold Pending Requestor Response**, or **Cancelled(closed)** from the **Status** dropdown list.

    1. In the **Status Details** section, record the appropriate status note from the [FastTrack Portal Notes Bank](https://microsoft.sharepoint.com/:x:/r/teams/FastTrackAssignmentTeamLeads/_layouts/15/Doc.aspx?sourcedoc=%7BCA587309-09E4-445C-A7CB-28058CE91555%7D&file=FastTrack%20Portal%20Notes%20Bank.xlsx&action=default&mobileredirect=true).

    1. Click **Save**.

1. If the RFA is being **cancelled**, then there are no additional steps necessary for this RFA.

1. If the tenant is **On Hold**, then follow any prescribed steps in the process relevant to the RFA's **On Hold** status. Once that process is complete, return to the step subsequent to that process blocker.

1. When ready for **Approval**, return to the beginning of the [Update RFA Assignment Dashboard](#iv-update-rfa-assignment-dashboard) section and proceed from there.

1. Once the RFA is **Approved**, and the RFA Dashboard and FT Portal have been updated accordingly, then proceed to the [Update FTOP and assign](#vi-update-ftop-and-assign) section below.

## [VI. Update FTOP and assign](#vi-update-ftop-and-assign)

### 1. [Update Services Tab](#1-update-services-tab)

#### 1. Assign yourself to the tenant if necessary

1. If you are not already assigned to the tenant in FTOP, then search for tenant in FTOP and assign yourself to it by completing the following steps; otherwise, skip to step two (2.) below.

    > [!Note]
    > You will need to assign yourself to the tenant in this step in cases where the tenant did not enter FTOP until Automation was completed in the [Update RFA Assignment Dashboard](#iv-update-rfa-assignment-dashboard) section above.

    1. In the FTOP dashboard, set **Filter** to **All**.

    1. Set **Display** to **Partner Validation**.

    1. Search by the tenant ID (listed as **Company** Id in the **Profile** tab in [Viewpoint](https://support.office.net/?modern=0&source=ViewPointV2)).

    1. Click the row for the tenant in FTOP to open that tenant's Assignment fly-out window on the right.

    1. Select **Assignments** from the side window for the tenant.

    1. Select the "**+"** button to add yourself to the tenant.

    1. In the search box, type in your name and click the ![RFA - magnifying glass](media/rfa-magnifying-glass.png) icon, or press enter.

    1. Select your name from the dropdown list.

    1. Click the **Tenant** checkbox.

    1. Click the **apply assignments** button at the bottom of the window.

#### 2. Update the Services tab

**Note:** If a workload is set to **0 Entitlements** after automation is accepted OR if automation is not accepted and a workload is set to **0 Entitlements**, submit a support ticket in [FTC Help](https://o365cxp.microsoftcrmportals.com/FTCChangeRequest/), and override the entitlement to reflect the correct number (see screenshot).

:::image type="content" source="media/rfa-override-entitlements.png" alt-text="Override entitlements field image":::

1. If the **Is Valid** checkbox was selected when the RFA was approved in the RFA Dashboard, then review the **Services** tab to make sure that it was populated correctly.

1. If automation did not populate the **Services** tab correctly, or the **Is Valid** checkbox was not selected, then populate the services tab with the correct information from the RFA form.

#### 3. Determine if the [Update Engagement Scenario (Net New tenant scenarios *only*)](#2-update-engagement-scenario-net-new-tenant-scenarios-only) section is necessary

1. ***If*** the tenant was just populated into FTOP through automation as part of the steps in the [Update RFA Assignment Dashboard](#iv-update-rfa-assignment-dashboard) section (i.e. a *Net New tenant scenario*), ***then*** proceed to the section below to update the Engagement Scenario; otherwise, skip to the [Update Partners Tab](#3-update-partners-tab) section.

### 2. [Update Engagement Scenario (Net New tenant scenarios *only*)](#2-update-engagement-scenario-net-new-tenant-scenarios-only)

> [!Note]
> The steps in this section are ***not*** needed for **Already in FTOP** scenarios because, in those scenarios, the [Update Engagement Scenario](#4-update-engagement-scenario4-update-engagement-scenario) step would have already been completed in the [**Identify potential escalations**](#ii-identify-potential-escalations) section above.

1. Review the FTOP Assignment Scenarios section as a reference to determine or confirm where your tenant will be assigned.

1. If the tenant is being assigned or reassigned to **FTCQ All FTC** for possible partner referral, do not update the Engagement Scenario, and skip to the [Update Partners Tab](#3-update-partners-tab) section below. Otherwise, proceed to the next step.

1. Open the Services tab.

1. Update the **Engagement Scenario** for workloads selected on the RFA form based on where the tenant will be assigned to in FTOP.

    1. For selected workloads, follow the logic below:

        1. **Non-FastTrack Partner-Led:** The workload is selected on the RFA form and the customer has intent to deploy the workload with the Non-FRP. If a partner is listed on the RFA form and they are *not* on the [FRP List](https://aka.ms/FRPPBIList), they are considered a non-FRP.

        1. **FTC-CSS Led:** The workload is selected on the RFA form and the tenant meets the criteria for CSS assignment.

        1. **FTC-FTP Led:** The FRP eligible workload is selected on the RFA form and the customer has intent to deploy the workload with an FRP.

        1. **CXP Led w/CSS Assist:** The workload is AADP and meets **all** AADP CAT Team requirements (see footnote four (4) in the [Assignment Business Rules](rfa-assignment-business-rules.md#footnote-reference) article).

        1. **FTC-CXP Led**: The selected workload is MDATP or OATP, or both, and meets **all** the following MDATP/OATP CAT Team requirements (see footnote three (3) in the [Assignment Business Rules](rfa-assignment-business-rules.md#footnote-reference) article).

    1. If the **Engagement Scenario** is being changed to **FTC-CSS Led** or **FTC-FTP Led**, select the desired scenario from the **Engagement Scenario** dropdown for the workload within the **Services** tab, and then select **Save**.

1. Proceed to the next section.

### 3. [Update Partners Tab](#3-update-partners-tab)

1. If no partner is engaged on the RFA form, skip to the [Update Contacts Tab](#4-update-contacts-tab) section below.

1. To add partner related details to the **Partners** tab in FTOP, first *search for the Partner in [**OCP Insights**](https://ocpinsights.microsoft.com/)* to gather the required Partner related information.

    1. Open **OCP Insights**.

    1. Type the Partner name in the **Search Partner** box.

    1. Select **Go to Advanced Search** from the search list dropdown.

        :::image type="content" source="media/rfa-ocp-insights.png" alt-text="OCP Insights image showing link to Go to Advanced Search":::

    1. Select **MPN** from the following page.

    1. Select the **Partner Name or MPNID** and the affiliated **Region** or **Country** (if known) from the **Partner Geography** from the list of **Filters**.

    1. Select **Apply**.

    1. Select the **Virtual Organization** that matches the name and region for the partner.

        > [!Note]
        > If there is no Virtual Organization, then report the Partner name based on what you know and the MPN ID as **N/A** in the Partner Details within FTOP.

1. In the **Partners** tab in FTOP, fill in the following fields with the appropriate information, as indicated below:

    1. **Partner**: [partner name and competency]

    1. **MPN ID**: [MPNID #]

    1. **Partner Type**: Onboarding Partner

    1. **Notes**: Partner information updated per RFA (RFA ID: [#####])

### 4. [Update Contacts Tab](#4-update-contacts-tab)

1. If Automation was accepted in the **RFA Assignment Dashboard**, review existing contacts to ensure automation was successful and remove any duplicate contacts existing prior to automation being run.

1. If Automation was not accepted in the **RFA Assignment Dashboard**, perform manual validation lookups for the customer, account team, and partner.

1. Make any necessary updates and corrections.

### 5. [Update Assignment Urgency Flag](#5-update-assignment-urgency-flag)

1. If Automation was accepted in the **RFA Assignment Dashboard**, skip to the next [Update Engagement Management note in FTOP](#6-update-engagement-management-note-in-ftop) section.

1. If Automation was not accepted in the **RFA Assignment Dashboard**, set the **Assignment Urgency** flag in FTOP:

    1. Select the **Flags** tab in tenant's FTOP record.

    1. Select **High** from the dropdown for **Assignment Urgency**.

    1. Click **Save**.

### 6. [Update Engagement Management note in FTOP](#6-update-engagement-management-note-in-ftop)

Update the **Engagement Management note** history in FTOP using the following steps.

1. Select the **Status** tab.

1. Select the link to the **Create Notes** tab.

1. In the Notes Editor select **Engagement Management Note** from the **Note Category** dropdown.

1. Select the approved workloads from the **Services** dropdown.

1. Copy and Paste the following status note template (see [**Template**](#template) below) into the large notes box located directly under the dropdown filters.

1. Review the [Notes about Template](#notes-about-template) section below to determine how to populate the Template conditional information specific to certain RFAs; then, add the relevant information from this section and from the RFA to the Template.

1. Complete the remaining fields for the Engagement Management note as follows:

    1. **Next Action:** Complete next steps for RFA tenant

    1. **Next Action Date:** [next business day]

    1. **Next Action Owner:** FM

1. Click **Save**.

#### [Notes about Template](#notes-about-template)

- ***For COVID-19 RFAs:***

    1. If Emergency COVID-19 REQUEST= **yes**, include **#covid** at the beginning of the RFA note.

    1. **If** ***one or more*** of the bulleted factors below is true, ***then*** use this note: **Customer is approved for assistance based on FastTrack's response to COVID-19. [Includes [trial/free] offers]**

        - Emergency COVID-19 REQUEST= **yes**

        - Eligibility Bypassed = **true**

        - There is any mention of COVID in the comments field

        - The customer has COVID APPROVED free/trial licenses ***and*** one or more of their requested workloads is affiliated with those licenses

    1. If an Onboarding or Migration exception was granted for COVID free/trial licenses, include the following note: **An exception was granted for [Services] by [Team]**

       **Note:** Exceptions can be granted by the Migration Team, ft-covid-er DL, and others.

- ***[MDATP and/or OATP] are assigned to [CSS and/or Teresa Santos]; all other workloads are assigned to [Delivery Team]:*** This note is only required If MDATP, OATP, or both are being assigned to the FTC or Teresa Santos in addition to existing queues (that is, FRP or Targeting queues).

- ***Information that may impact the project:*** This can include, but is not limited to, additional comments from the RFA Form, information related to FPM escalations, or any other pertinent information related to the RFA.

#### [Template](#template)

*[**Include if relevant**] #covid*

***[See [Notes about Template](#notes-about-template) section above to determine which of the two following notes to use)]***

*RFA/WinRoom Hi Pri: [Reason for RFA Approval included in the FastTrack Portal status note]*

**OR**

*Customer is approved for assistance based on FastTrack's response to COVID-19. [Includes [trial/free] offers]*

*[**Include if relevant. See [Notes about Template](#notes-about-template).**] An exception was granted for [Services] by [Team]*

***[Also include if relevant]** [MDATP and/or OATP] are assigned to [CSS and/or Teresa Santos]; all other workloads are assigned to downstream teams according to their own respective routing rules.*

*Partner Engaged? [Yes/No]*

*Contacts:*

- *Requestor contact information: [Details]*
- *Customer contact information: [Details]*
- *Partner contact information: [Details]*

*Location and Language:*

- *City:*
- *State: [Details]*
- *Country: [Details]*
- *FT Supported Language: [Details]*

*RFA Approved Workloads (**including percent Active Usage & seat count**): [Details]*

*Information that may impact the project: [Details]*

*RFA Form URL: [URL]*

*[**Include if relevant**] Duplicate RFAs: A duplicate RFA was submitted due to [Reason]*

### 7. [Complete Task 2453 and Technical Enablement Note](#7-complete-task-2453-and-technical-enablement-note)

1. If you are unable to update the Playbook Tasks (for example, as in Customer Health tenants), then skip to step 7.3 below to add the Playbook Task note in the Technical Enablement field. Otherwise, proceed to next step.

1. Update Task 2453 in FTOP to indicate RFA Completion.

    > [!Important]
    > This step will need to be completed individually for every approved workload.

    1. Select the **playbook** tab in the RFA tenant record in FTOP.

    1. Select the approved workload from the available list.

    1. Select the **Assignment** phase.

    1. In the **Search** box, search for **2453**.

        Note: *The task will be auto-filtered after typing it into the **Search** box.*

    1. Add time entry by starting and finishing the time clock.

    1. Check the box to **Complete RFA Process**.

    1. Select **Complete** from the **Status** dropdown.

    1. Click the **Save** button.

    1. Delete 2453 from the **Search** box. Wait a few seconds.

    1. Select next approved workload, and repeat the process, starting at sub-step three (3.) above.

    1. Once all the approved workloads have been updated, proceed to the next step.

1. Complete the task **Note** in the **Technical Enablement** Field.

    1. The task **Note** will include the queue the tenant is being assigned or reassigned to (for example, [FTCQ CSS Americas], [FTCQ ALL FTC], or [FTP Dell]).

    1. *If* the tenant is being assigned to FTC (that is, FTCQ CSS [*Americas, APJ, or EMEA*]), a reason code will need to be included in the task note. Assignment Reason Codes can be found in the [RFA Task Notes](https://microsoft.sharepoint.com/:x:/t/FastTrackAssignmentTeamLeads/ET2oyY1BT99Ei2fyuJPCYeoB-FNfZO-e-t6fDGs8r0bQTg?e=HxnWr8&CID=1E962D6A-5006-4077-80D7-CE8D4D608A69&wdLOR=c6AC4E13F-4407-4293-9361-FB4EFA7020A0) spreadsheet.

        > [!Note]
        > If assigning to FTC and multiple reason codes are applicable, choose the reason code based on the priority order found in the RFA Task Notes spreadsheet.

### 8. [Update Priority in FTOP](#8-update-priority-in-ftop)

1. If your tenant is not already assigned or being assigned to a Delivery queue, skip to the [Assign to downstream team](#9-assign-to-downstream-team) section below.

1. If automation was not accepted, and your tenant is already assigned or being assigned to a Delivery queue (that is, an FRP or FTC queue), set the Priority Wizard to **High Priority** using the following steps:

    1. Assign yourself as the **FastTrack Manager** in FTOP.

    1. Click **Apply Assignments**.

    1. Select the Priority Dropdown from the Priority column for the tenant in the Portfolio View in FTOP.

        :::image type="content" source="media/rfa-setting-priority.png" alt-text="Setting Tenant Priority in FTOP":::

    1. Select High (overridden).

    1. Select Other.

    1. Unassign yourself from the tenant.

### 9. [Assign to downstream team](#9-assign-to-downstream-team)

1. Review the [FTOP assignment scenarios guide](rfa-ftop-assignment-scenarios-guide.md) to match your tenant's current assignment in FTOP with the instructions for that assignment scenario.

1. Complete the assignment instructions for that assignment scenario.

1. Proceed to the [Send email notifications](#vii-send-email-notifications-non-covid-19-rfas) section below.

## [VII. Send email notifications (non-COVID-19 RFAs)](#vii-send-email-notifications-non-covid-19-rfas)

**If tenant has COVID-19 trial/free licenses**, skip to the [Send email notifications (COVID-19 email approvals)](#viii-send-email-notifications-covid-19-email-approvals) section below. Following tenant assignment to downstream team, select the appropriate approval email scenario.

Following the tenant assignment to the appropriate downstream team, select the corresponding approval email scenario below and send the emails included in that scenario.

> [!Note]
> For **Skype for Business** requests, see footnote ([fn](#skype-for-business-footnote)) where indicated below.

### 1. [Email to be sent in *all* scenarios](#1-email-to-be-sent-in-all-scenarios)

- ***All*** RFAs:

    1. Notify non-Requestor field contacts generated in FTOP through this RFA's automation. Do *not* include any historical field contacts in FTOP. Also, do *not* include any CSMs.

        - [Approval notification for generated field contacts](https://microsoft.sharepoint.com/teams/FastTrackAssignmentTeamLeads/Shared%20Documents/AiR%20Leads/Gateway%20RFA%20Team%20GitHub%20files/rfa-approval-notification-for-generated-field-contacts.msg).

### 2. [Additional emails needed for your RFA's *specific* scenario](#2-additional-emails-needed-for-your-rfas-specific-scenario)

- ***Customer*** submitted RFA ***with*** FRP engaged (assigned or reassigned to tenant in FTOP):

    1. Notify customer requestor:

        - [Approval notification to Requestor - general](https://microsoft.sharepoint.com/teams/FastTrackAssignmentTeamLeads/Shared%20Documents/AiR%20Leads/Gateway%20RFA%20Team%20GitHub%20files/rfa-approval-notification-to-requestor-general.msg) ([fn](#skype-for-business-footnote))

    1. Notify the FRP (Program Contact in the [FRP list](https://msit.powerbi.com/groups/me/apps/f8dbc5ed-8560-4384-99bb-6486899741e9/reports/b3b75f94-ac3b-4760-a8c1-a984b0e1a24d/ReportSection286e648ca0a2792b097a?ctid=72f988bf-86f1-41af-91ab-2d7cd011db47) copied:

        - [Approval notification to FRP and FPM (cust Req)](https://microsoft.sharepoint.com/teams/FastTrackAssignmentTeamLeads/Shared%20Documents/AiR%20Leads/Gateway%20RFA%20Team%20GitHub%20files/rfa-approval-and-assignment-notificaton-for-frp-and-fpm-when-cr.msg)

- ***Customer*** submitted RFA ***with*** non-FRP Partner engaged or assigned, *or* no partner engaged or assigned:

    1. Notify customer Requestor:

        - [Approval notification to Requestor - general](https://microsoft.sharepoint.com/teams/FastTrackAssignmentTeamLeads/Shared%20Documents/AiR%20Leads/Gateway%20RFA%20Team%20GitHub%20files/rfa-approval-notification-to-requestor-general.msg) ([fn](#skype-for-business-footnote))

- ***Microsoft*** submitted RFA ***with*** FRP engaged (assigned or reassigned to the tenant in FTOP):

    1. Notify the Requestor and copy the Partner contacts from the RFA form, Primary Customer contact from the RFA form, and the [FPM](https://msit.powerbi.com/groups/me/dashboards/2d456979-c0ff-4a19-a2a8-2c92c791ef91):

        - [Approval notification to Microsoft Requestor, FRP, FPM, and customer](https://microsoft.sharepoint.com/teams/FastTrackAssignmentTeamLeads/Shared%20Documents/AiR%20Leads/Gateway%20RFA%20Team%20GitHub%20files/rfa-approval-and-assignment-notif-microsoft-requestor-frp-fpm-customer.msg)

- ***Microsoft*** submitted RFA ***with*** non-FRP Partner engaged or assigned, *or* no partner engaged or assigned:

    1. Notify field Requestor:

        - [Approval notification to Requestor - general](https://microsoft.sharepoint.com/teams/FastTrackAssignmentTeamLeads/Shared%20Documents/AiR%20Leads/Gateway%20RFA%20Team%20GitHub%20files/rfa-approval-notification-to-requestor-general.msg) ([fn](#skype-for-business-footnote))

    1. Notify the customer:

        - [Approval notification to customer (non-customer Requestor)](https://microsoft.sharepoint.com/teams/FastTrackAssignmentTeamLeads/Shared%20Documents/AiR%20Leads/Gateway%20RFA%20Team%20GitHub%20files/rfa-approval-notification-to-customer-when-non-customer-requestor.msg)

- ***Partner (FRP)*** submitted RFA:

    1. Notify the Partner contacts from the RFA form, and copy the Primary Customer contact from the RFA form and the [FPM](https://msit.powerbi.com/groups/me/dashboards/2d456979-c0ff-4a19-a2a8-2c92c791ef91):

        - [Approval notification to FRP requestor Partner contacts, FPM, and customer](https://microsoft.sharepoint.com/teams/FastTrackAssignmentTeamLeads/Shared%20Documents/AiR%20Leads/Gateway%20RFA%20Team%20GitHub%20files/rfa-approval-and-assignment-notif-partner-requestor-frp-customer-and-fpm.msg)

- ***Partner (non-FRP)*** submitted RFA:

    1. Notify the non-FRP Partner:

        - [Approval notification to Requestor - general](https://microsoft.sharepoint.com/teams/FastTrackAssignmentTeamLeads/Shared%20Documents/AiR%20Leads/Gateway%20RFA%20Team%20GitHub%20files/rfa-approval-notification-to-requestor-general.msg) ([fn](#skype-for-business-footnote))

    1. Notify the customer:

        - [Approval notification to customer (non-customer Requestor)](https://microsoft.sharepoint.com/teams/FastTrackAssignmentTeamLeads/Shared%20Documents/AiR%20Leads/Gateway%20RFA%20Team%20GitHub%20files/rfa-approval-notification-to-customer-when-non-customer-requestor.msg)

## VIII. Send email notifications (COVID-19 email approvals)

Following the tenant assignment to the appropriate downstream team, select the corresponding approval email scenario below and send the emails included in that scenario.

> [!Note]
> For **Skype for Business** requests, see footnote ([fn](#skype-for-business-footnote)) where indicated below.

### 1. [Email to be sent in *all* scenarios](#1-email-to-be-sent-in-all-scenarios)

- ***All*** RFAs:

    1. Notify non-Requestor field contacts generated in FTOP through this RFA's automation. Do *not* include any historical field contacts in FTOP. Also, do *not* include any CSMs.

        - [Approval notification for generated field contacts](https://microsoft.sharepoint.com/teams/FastTrackAssignmentTeamLeads/Shared%20Documents/AiR%20Leads/Gateway%20RFA%20Team%20GitHub%20files/rfa-approval-notification-for-generated-field-contacts.msg).

### 2. [Additional emails needed for your RFA's *specific* scenario](#2-additional-emails-needed-for-your-rfas-specific-scenario)

#### 1. Approved for ***all*** requested services (non-Health Provider Exception related)

##### 1. Notification for ***all*** scenarios where **Data Migration** was approved for COVID-19 licenses without an Exception required

If Data Migration is being approved for COVID-19 licenses and no Exception request was required then notify the Migration Team of the approval in the **FastTrack COVID-19 Response Team / Migration Requests** channel in Teams of using the: [Migration Exception/Notification Request template](https://microsoft.sharepoint.com/teams/FastTrackAssignmentTeamLeads/Shared%20Documents/AiR%20Leads/Gateway%20RFA%20Team%20GitHub%20files/COVID-19%20email%20templates/data-migration-template-for-data-migration-team.msg).

  > [!Note]
  > When entering the notification, use the "**Notification only – Migration approved by Gateway Team**" heading option found in the [**Migration Exception/Notification Request template**](https://microsoft.sharepoint.com/teams/FastTrackAssignmentTeamLeads/Shared%20Documents/AiR%20Leads/Gateway%20RFA%20Team%20GitHub%20files/COVID-19%20email%20templates/data-migration-template-for-data-migration-team.msg). Be sure to "@ mention" Ramakrishnan G and Steven Ngo.

##### 2. Specific scenarios

- ***Customer*** submitted RFA ***with*** FRP engaged (assigned or reassigned to tenant in FTOP):

    1. Notify customer requestor:

        - [Approval notification to Requestor - general](https://microsoft.sharepoint.com/teams/FastTrackAssignmentTeamLeads/Shared%20Documents/AiR%20Leads/Gateway%20RFA%20Team%20GitHub%20files/rfa-approval-notification-to-requestor-general.msg) ([fn](#skype-for-business-footnote))

    1. Notify the FRP (Program Contact in the [FRP list](https://msit.powerbi.com/groups/me/apps/f8dbc5ed-8560-4384-99bb-6486899741e9/reports/b3b75f94-ac3b-4760-a8c1-a984b0e1a24d/ReportSection286e648ca0a2792b097a?ctid=72f988bf-86f1-41af-91ab-2d7cd011db47)) with the [FPM](https://msit.powerbi.com/groups/me/dashboards/2d456979-c0ff-4a19-a2a8-2c92c791ef91) copied:

        - [Approval notification to FRP and FPM (cust Req)](https://microsoft.sharepoint.com/teams/FastTrackAssignmentTeamLeads/Shared%20Documents/AiR%20Leads/Gateway%20RFA%20Team%20GitHub%20files/COVID-19%20email%20templates/FRP%20Notification%20templates%20with%20COVID%20Subject/covid-subject-rfa-approval-and-assignment-notificaton-for-frp-and-fpm-when-cr.msg)

- ***Customer*** submitted RFA ***with*** non-FRP Partner engaged or assigned, *or* no partner engaged or assigned:

    1. Notify customer Requestor:

        - [Approval notification to Requestor - general](https://microsoft.sharepoint.com/teams/FastTrackAssignmentTeamLeads/Shared%20Documents/AiR%20Leads/Gateway%20RFA%20Team%20GitHub%20files/rfa-approval-notification-to-requestor-general.msg) ([fn](#skype-for-business-footnote))

- ***Microsoft*** submitted RFA ***with*** FRP engaged (assigned or reassigned to the tenant in FTOP):

    1. Notify the Requestor and copy the Partner contacts from the RFA form, Primary Customer contact from the RFA form, and the [FPM](https://msit.powerbi.com/groups/me/dashboards/2d456979-c0ff-4a19-a2a8-2c92c791ef91):

        - [Approval notification to Microsoft Requestor, FRP, FPM, and customer](https://microsoft.sharepoint.com/teams/FastTrackAssignmentTeamLeads/Shared%20Documents/AiR%20Leads/Gateway%20RFA%20Team%20GitHub%20files/COVID-19%20email%20templates/FRP%20Notification%20templates%20with%20COVID%20Subject/covid-subject-rfa-approval-and-assignment-notif-microsoft-requestor-frp-fpm-customer.msg)

- ***Microsoft*** submitted RFA ***with*** non-FRP Partner engaged or assigned, *or* no partner engaged or assigned:

    1. Notify field Requestor:

        - [Approval notification to Requestor - general](https://microsoft.sharepoint.com/teams/FastTrackAssignmentTeamLeads/Shared%20Documents/AiR%20Leads/Gateway%20RFA%20Team%20GitHub%20files/rfa-approval-notification-to-requestor-general.msg) ([fn](#skype-for-business-footnote))

    1. Notify the customer:

        - [Approval notification to customer (non-customer Requestor)](https://microsoft.sharepoint.com/teams/FastTrackAssignmentTeamLeads/Shared%20Documents/AiR%20Leads/Gateway%20RFA%20Team%20GitHub%20files/rfa-approval-notification-to-customer-when-non-customer-requestor.msg)

- ***Partner (FRP)*** submitted RFA:

    1. Notify the Partner contacts from the RFA form, and copy the Primary Customer contact from the RFA form and the [FPM](https://msit.powerbi.com/groups/me/dashboards/2d456979-c0ff-4a19-a2a8-2c92c791ef91):

        - [Approval notification to FRP requestor Partner contacts, FPM, and customer](https://microsoft.sharepoint.com/teams/FastTrackAssignmentTeamLeads/Shared%20Documents/AiR%20Leads/Gateway%20RFA%20Team%20GitHub%20files/COVID-19%20email%20templates/FRP%20Notification%20templates%20with%20COVID%20Subject/covid-subject-rfa-approval-and-assignment-notif-partner-requestor-frp-customer-and-fpm.msg)

- ***Partner (non-FRP)*** submitted RFA:

    1. Notify the non-FRP Partner:

        - [Approval notification to Requestor - general](https://microsoft.sharepoint.com/teams/FastTrackAssignmentTeamLeads/Shared%20Documents/AiR%20Leads/Gateway%20RFA%20Team%20GitHub%20files/rfa-approval-notification-to-requestor-general.msg) ([fn](#skype-for-business-footnote))

    1. Notify the customer:

        - [Approval notification to customer (non-customer Requestor)](https://microsoft.sharepoint.com/teams/FastTrackAssignmentTeamLeads/Shared%20Documents/AiR%20Leads/Gateway%20RFA%20Team%20GitHub%20files/rfa-approval-notification-to-customer-when-non-customer-requestor.msg)

#### 2. Approved for Onboarding but ***not*** Data Migration

- ***Customer*** submitted RFA ***with*** FRP engaged (assigned or reassigned to tenant in FTOP):

    1. Notify customer requestor:

        - [Approved but not for Data Migration](https://microsoft.sharepoint.com/teams/FastTrackAssignmentTeamLeads/Shared%20Documents/AiR%20Leads/Gateway%20RFA%20Team%20GitHub%20files/COVID-19%20email%20templates/approved-but-not-data.msg)

    1. Notify the FRP (Program Contact in the [FRP list](https://msit.powerbi.com/groups/me/apps/f8dbc5ed-8560-4384-99bb-6486899741e9/reports/b3b75f94-ac3b-4760-a8c1-a984b0e1a24d/ReportSection286e648ca0a2792b097a?ctid=72f988bf-86f1-41af-91ab-2d7cd011db47)) with the [FPM](https://msit.powerbi.com/groups/me/dashboards/2d456979-c0ff-4a19-a2a8-2c92c791ef91) copied:

        - [Approval notification to FRP and FPM (cust Req)](https://microsoft.sharepoint.com/teams/FastTrackAssignmentTeamLeads/Shared%20Documents/AiR%20Leads/Gateway%20RFA%20Team%20GitHub%20files/COVID-19%20email%20templates/FRP%20Notification%20templates%20with%20COVID%20Subject/covid-subject-rfa-approval-and-assignment-notificaton-for-frp-and-fpm-when-cr.msg)

- ***Customer*** submitted RFA ***with*** non-FRP Partner engaged or assigned, *or* no partner engaged or assigned:

    1. Notify customer Requestor:

        - [Approved but not for Data Migration](https://microsoft.sharepoint.com/teams/FastTrackAssignmentTeamLeads/Shared%20Documents/AiR%20Leads/Gateway%20RFA%20Team%20GitHub%20files/COVID-19%20email%20templates/approved-but-not-data.msg)

- ***Microsoft*** submitted RFA ***with*** FRP engaged (assigned or reassigned to the tenant in FTOP):

    1. Notify the Requestor and copy the Partner contacts from the RFA form, Primary Customer contact from the RFA form, and the [FPM](https://msit.powerbi.com/groups/me/dashboards/2d456979-c0ff-4a19-a2a8-2c92c791ef91):

        - [Approval notification to Microsoft Requestor, FRP, FPM, and customer](https://microsoft.sharepoint.com/teams/FastTrackAssignmentTeamLeads/Shared%20Documents/AiR%20Leads/Gateway%20RFA%20Team%20GitHub%20files/COVID-19%20email%20templates/FRP%20Notification%20templates%20with%20COVID%20Subject/covid-subject-rfa-approval-but-not-data-notif-micro-requestor-frp-fpm-customer.msg)

- ***Microsoft*** submitted RFA ***with*** non-FRP Partner engaged or assigned, *or* no partner engaged or assigned:

    1. Notify field Requestor:

        - [Approved but not for Data Migration](https://microsoft.sharepoint.com/teams/FastTrackAssignmentTeamLeads/Shared%20Documents/AiR%20Leads/Gateway%20RFA%20Team%20GitHub%20files/COVID-19%20email%20templates/approved-but-not-data.msg)

    1. Notify the customer:

        - [Approval notification to customer (non-customer Requestor)](https://microsoft.sharepoint.com/teams/FastTrackAssignmentTeamLeads/Shared%20Documents/AiR%20Leads/Gateway%20RFA%20Team%20GitHub%20files/rfa-approval-notification-to-customer-when-non-customer-requestor.msg)

- ***Partner (FRP)*** submitted RFA:

    1. Notify the Partner contacts from the RFA form, and copy the Primary Customer contact from the RFA form and the [FPM](https://msit.powerbi.com/groups/me/dashboards/2d456979-c0ff-4a19-a2a8-2c92c791ef91):

        - [Onboarding Approved, but not Data - notification to FRP Requestor, FPM, and customer](https://microsoft.sharepoint.com/teams/FastTrackAssignmentTeamLeads/Shared%20Documents/AiR%20Leads/Gateway%20RFA%20Team%20GitHub%20files/COVID-19%20email%20templates/FRP%20Notification%20templates%20with%20COVID%20Subject/covid-subject-frp-submitted-approval-notification-but-not-for-data-migration.msg)

- ***Partner (non-FRP)*** submitted RFA:

    1. Notify the non-FRP Partner:

        - [Approved but not for Data Migration](https://microsoft.sharepoint.com/teams/FastTrackAssignmentTeamLeads/Shared%20Documents/AiR%20Leads/Gateway%20RFA%20Team%20GitHub%20files/COVID-19%20email%20templates/approved-but-not-data.msg)

    1. Notify the customer:

        - [Approval notification to customer (non-customer Requestor)](https://microsoft.sharepoint.com/teams/FastTrackAssignmentTeamLeads/Shared%20Documents/AiR%20Leads/Gateway%20RFA%20Team%20GitHub%20files/rfa-approval-notification-to-customer-when-non-customer-requestor.msg)

#### 3. Approved for Onboarding when Exception was granted due to Health Provider status

- ***Customer*** submitted RFA ***with*** FRP engaged (assigned or reassigned to tenant in FTOP):

    1. Notify customer requestor:

        - [Approval notification to Requestor - general](https://microsoft.sharepoint.com/teams/FastTrackAssignmentTeamLeads/Shared%20Documents/AiR%20Leads/Gateway%20RFA%20Team%20GitHub%20files/rfa-approval-notification-to-requestor-general.msg) ([fn](#skype-for-business-footnote))

    1. Notify the FRP (Program Contact in the [FRP list](https://msit.powerbi.com/groups/me/apps/f8dbc5ed-8560-4384-99bb-6486899741e9/reports/b3b75f94-ac3b-4760-a8c1-a984b0e1a24d/ReportSection286e648ca0a2792b097a?ctid=72f988bf-86f1-41af-91ab-2d7cd011db47)) with the [FPM](https://msit.powerbi.com/groups/me/dashboards/2d456979-c0ff-4a19-a2a8-2c92c791ef91) copied:

        - [Approval notification to FRP and FPM (cust Req)](https://microsoft.sharepoint.com/teams/FastTrackAssignmentTeamLeads/Shared%20Documents/AiR%20Leads/Gateway%20RFA%20Team%20GitHub%20files/COVID-19%20email%20templates/FRP%20Notification%20templates%20with%20COVID%20Subject/covid-subject-rfa-approval-and-assignment-notificaton-for-frp-and-fpm-when-cr.msg)

    1. Notify [ft-covid-er@microsoft.com](mailto:ft-covid-er@microsoft.com) of the approval:

        - [FastTrack COVID ER Approval notification for health providers fewer than 150 seats](https://microsoft.sharepoint.com/teams/FastTrackAssignmentTeamLeads/Shared%20Documents/AiR%20Leads/Gateway%20RFA%20Team%20GitHub%20files/COVID-19%20email%20templates/ft-covid-er-notification-approved-for-health-providers-fewer-than-150.msg)

- ***Customer*** submitted RFA ***with*** non-FRP Partner engaged or assigned, *or* no partner engaged or assigned:

    1. Notify customer Requestor:

        - [Approval notification to Requestor - general](https://microsoft.sharepoint.com/teams/FastTrackAssignmentTeamLeads/Shared%20Documents/AiR%20Leads/Gateway%20RFA%20Team%20GitHub%20files/rfa-approval-notification-to-requestor-general.msg) ([fn](#skype-for-business-footnote))

    1. Notify [ft-covid-er@microsoft.com](mailto:ft-covid-er@microsoft.com) of the approval:

        - [FastTrack COVID ER Approval notification for health providers fewer than 150 seats](https://microsoft.sharepoint.com/teams/FastTrackAssignmentTeamLeads/Shared%20Documents/AiR%20Leads/Gateway%20RFA%20Team%20GitHub%20files/COVID-19%20email%20templates/ft-covid-er-notification-approved-for-health-providers-fewer-than-150.msg)

- ***Microsoft*** submitted RFA ***with*** FRP engaged (assigned or reassigned to the tenant in FTOP):

    1. Notify the Requestor and copy the Partner contacts from the RFA form, Primary Customer contact from the RFA form, and the [FPM](https://msit.powerbi.com/groups/me/dashboards/2d456979-c0ff-4a19-a2a8-2c92c791ef91):

        - [Approval notification to Microsoft Requestor, FRP, FPM, and customer](https://microsoft.sharepoint.com/teams/FastTrackAssignmentTeamLeads/Shared%20Documents/AiR%20Leads/Gateway%20RFA%20Team%20GitHub%20files/COVID-19%20email%20templates/FRP%20Notification%20templates%20with%20COVID%20Subject/covid-subject-rfa-approval-and-assignment-notif-microsoft-requestor-frp-fpm-customer.msg)

    1. Notify [ft-covid-er@microsoft.com](mailto:ft-covid-er@microsoft.com) of the approval:

        - [FastTrack COVID ER Approval notification for health providers fewer than 150 seats](https://microsoft.sharepoint.com/teams/FastTrackAssignmentTeamLeads/Shared%20Documents/AiR%20Leads/Gateway%20RFA%20Team%20GitHub%20files/COVID-19%20email%20templates/ft-covid-er-notification-approved-for-health-providers-fewer-than-150.msg)

- ***Microsoft*** submitted RFA ***with*** non-FRP Partner engaged or assigned, *or* no partner engaged or assigned:

    1. Notify field Requestor:

        - [Approval notification to Requestor - general](https://microsoft.sharepoint.com/teams/FastTrackAssignmentTeamLeads/Shared%20Documents/AiR%20Leads/Gateway%20RFA%20Team%20GitHub%20files/rfa-approval-notification-to-requestor-general.msg) ([fn](#skype-for-business-footnote))

    1. Notify the customer:

        - [Approval notification to customer (non-customer Requestor)](https://microsoft.sharepoint.com/teams/FastTrackAssignmentTeamLeads/Shared%20Documents/AiR%20Leads/Gateway%20RFA%20Team%20GitHub%20files/rfa-approval-notification-to-customer-when-non-customer-requestor.msg)

    1. Notify [ft-covid-er@microsoft.com](mailto:ft-covid-er@microsoft.com) of the approval:

        - [FastTrack COVID ER Approval notification for health providers fewer than 150 seats](https://microsoft.sharepoint.com/teams/FastTrackAssignmentTeamLeads/Shared%20Documents/AiR%20Leads/Gateway%20RFA%20Team%20GitHub%20files/COVID-19%20email%20templates/ft-covid-er-notification-approved-for-health-providers-fewer-than-150.msg)

- ***Partner (FRP)*** submitted RFA:

    1. Notify the Partner contacts from the RFA form, and copy the Primary Customer contact from the RFA form and the [FPM](https://msit.powerbi.com/groups/me/dashboards/2d456979-c0ff-4a19-a2a8-2c92c791ef91):

        - [Approval notification to FRP requestor Partner contacts, FPM, and customer](https://microsoft.sharepoint.com/teams/FastTrackAssignmentTeamLeads/Shared%20Documents/AiR%20Leads/Gateway%20RFA%20Team%20GitHub%20files/COVID-19%20email%20templates/FRP%20Notification%20templates%20with%20COVID%20Subject/covid-subject-rfa-approval-and-assignment-notif-partner-requestor-frp-customer-and-fpm.msg)

    1. Notify [ft-covid-er@microsoft.com](mailto:ft-covid-er@microsoft.com) of the approval:

        - [FastTrack COVID ER Approval notification for health providers fewer than 150 seats](https://microsoft.sharepoint.com/teams/FastTrackAssignmentTeamLeads/Shared%20Documents/AiR%20Leads/Gateway%20RFA%20Team%20GitHub%20files/COVID-19%20email%20templates/ft-covid-er-notification-approved-for-health-providers-fewer-than-150.msg)

- ***Partner (non-FRP)*** submitted RFA:

    1. Notify the non-FRP Partner:

        - [Approval notification to Requestor - general](https://microsoft.sharepoint.com/teams/FastTrackAssignmentTeamLeads/Shared%20Documents/AiR%20Leads/Gateway%20RFA%20Team%20GitHub%20files/rfa-approval-notification-to-requestor-general.msg) ([fn](#skype-for-business-footnote))

    1. Notify the customer:

        - [Approval notification to customer (non-customer Requestor)](https://microsoft.sharepoint.com/teams/FastTrackAssignmentTeamLeads/Shared%20Documents/AiR%20Leads/Gateway%20RFA%20Team%20GitHub%20files/rfa-approval-notification-to-customer-when-non-customer-requestor.msg)

    1. Notify [ft-covid-er@microsoft.com](mailto:ft-covid-er@microsoft.com) of the approval:

        - [FastTrack COVID ER Approval notification for health providers fewer than 150 seats](https://microsoft.sharepoint.com/teams/FastTrackAssignmentTeamLeads/Shared%20Documents/AiR%20Leads/Gateway%20RFA%20Team%20GitHub%20files/COVID-19%20email%20templates/ft-covid-er-notification-approved-for-health-providers-fewer-than-150.msg)

## Non-approval related emails

- ***Inconsistent country or customer name***: [Inconsistent Country or Customer email template](https://microsoft.sharepoint.com/teams/FastTrackAssignmentTeamLeads/Shared%20Documents/AiR%20Leads/Gateway%20RFA%20Team%20GitHub%20files/rfa-inconsistent-country-customer-name.msg)

- ***Response to Requestor's inquiry about timeline or status*** (for when an FM has already been assigned): [Requestor status inquiry response template](https://microsoft.sharepoint.com/:u:/t/FastTrackAssignmentTeamLeads/EfXzfHDE-GZPvszkOd4paBMBpmweEtKyVQ8Ogd7b8ovLYg?e=teVulP)

## Skype for Business footnote

If Skype for Business was rejected after an Exception request was sent following the [Teams First Pitch](rfa-teams-first-pitch-standard.md), you will replace the *Approval notification to Requestor - general* email with the [Approval for All Requested Services except Skype for Business](https://microsoft.sharepoint.com/teams/FastTrackAssignmentTeamLeads/Shared%20Documents/AiR%20Leads/Gateway%20RFA%20Team%20GitHub%20files/rfa-approval-notification-to-requestor-sfb-not-approved.msg).

[!INCLUDE [rfa-resources-for-footer-of-every-article-include](includes/rfa-resources-for-footer-of-every-article-include.md)]

## Refresh Summary

| Date       | Who Changed       | What Changed                                                                              |
| ---------- | ----------------- | ----------------------------------------------------------------------------------------- |
| 4/30/2020  | Ben Skoropinski   | Created Refresh Summary                                                                   |
