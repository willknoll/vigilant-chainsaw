---  
# required metadata  
title: FastTrack Playbook - Windows 10 and Edge RFA Process Guide  
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

# Windows 10 and Edge RFA Process Guide

## [Type and use of document](#type-and-use-of-document)

- Topic category: Request for Assistance (RFA)
- This article applies to: Gateway RFA FMs
- Use: The branch of the RFA Process Guide for processing *relevant* **Windows 10** *and* **Edge** *tenants*

## [Summary](#summary)

This article provides step-by-step guidance for Gateway RFA FMs to follow when processing M365 FastTrack Benefit RFAs submitted via the [FastTrack Portal](https://fasttrack.microsoft.com/) for *relevant* **Windows 10** *and* **Edge** *tenants*. To determine if this process flow is applicable to your RFA tenant, follow the guidance found in the main [RFA Process Guide](rfa-process-guide.md), paying special attention to the [Determine customer type and branch to Process flow](rfa-process-guide.md#7-determine-customer-type-and-branch-to-process-flow) section.

## [I. Check qualifications and identify Reference tenant](#i-check-qualifications-and-identify-reference-tenant)

### 1. [Determine if Windows 10 and Edge qualify for FastTrack Support](#1-determine-if-windows-10-and-edge-qualify-for-fasttrack-support)

> [!Note]
> "Qualified" indicates the requestor answered the RFA Form questions correctly, in turn qualifying the tenant for FastTrack Assistance with that product. "Eligible" indicates the eligibility determined tenant was eligible for the product to be selected on the RFA Form.
> [!Important]
> If **Edge** is showing as an **Attempted Workload** on the RFA Form, then the customer *does not* qualify for FastTrack Assistance with **Edge**.
> [!Note]
> If neither **Windows 10** nor **Edge** qualify for FastTrack assistance, and no other workloads were selected on the RFA form, then this is considered a ***standalone disqualified Windows10/Edge request***.

#### 1. Determine qualification status via Automation check

1. If Dashboard eligibility is broken, skip to the [Manually determine qualification](#2-manually-determine-qualification-applies-if-dashboard-eligibility-is-not-functioning) section below to check the qualification status of Windows 10 and Edge; otherwise, proceed to the next step.

1. Customer *does **not*** qualify for Windows 10 *unless* the Validation pop-up indicates the Tenant qualifies for assistance with that workload.

1. Customer *does **not*** qualify for Edge *unless* the Validation pop-up indicates the Tenant qualifies for assistance with that workload.

1. If Edge is showing as an Attempted Workload on the RFA Form, then the customer *does not* qualify for FastTrack Assistance with Edge.

1. Skip to the [Identify the Reference Tenant](#2-identify-the-reference-tenant) section.

#### 2. Manually determine qualification (applies if Dashboard eligibility is not functioning)

1. To qualify for **Windows 10**, ***both*** of the following conditions must be met:

    1. Condition one: *Are you planning to deploy Windows 10 Enterprise?* = **Yes** on the RFA Form under **Windows 10**

        *AND*

    1. Condition two: *If you plan to use System Center Configuration Manager to deploy Windows 10, are you on or able to update to Current Branch?* = **Yes** on the RFA Form under Windows 10

1. To qualify for **Edge**, ***one*** of the following conditions must be met:

    1. Condition one:

        - *Do you have Windows 10 Enterprise?* = **Yes** on the RFA Form under **Edge**

          *OR*

    2. Condition two:

       - *Are you planning to deploy Windows 10 Enterprise?* = **Yes** on the RFA Form under **Edge**

            *AND*

       - *If you plan to use System Center Configuration Manager to deploy Windows 10, are you on or able to update to Current Branch?* = **Yes** on the RFA Form under **Windows 10**

1. Proceed to next step.

### 2. [Identify the Reference Tenant](#2-identify-the-reference-tenant)

> [!Important]
> If the SLT Watchlist flag is already set in the RFA tenant **and** the tenant has Windows 10 or Edge entitlements, or entitlements for both, showing in the FTOP services tab, the RFA tenant is most likely the Reference tenant. Do not set the SLT Watchlist Flag until you are on the [Set the SLT Watchlist Flag](#7-set-the-slt-watchlist-flag) step.

1. In the FTOP dashboard, set **Filter** to **All Customers**.

1. Set **Display** to **Customer Engagement**.

1. Search by the customer's TPID (listed in the customer name card in the FastTrack Portal for your RFA tenant).

1. If there is a ***predetermined* Reference Tenant** affiliated with the TPID, then it will show up in the **Customer Engagement** display.

    - If the tenant ID for the Reference tenant matches the tenant ID for the RFA tenant, then only one tenant will need to be updated.

    - If the tenant ID for the Reference tenant does NOT match the tenant ID for the RFA tenant, then the Windows 10 or Edge workload, or both, will be updated in the Reference tenant and the rest of the workloads will be updated in the RFA tenant.

1. If there *is* a Reference tenant, assign yourself to the Reference tenant (See the [Search for tenant in FTOP and assign yourself](rfa-process-guide.md#6-search-for-tenant-in-ftop-and-assign-yourself) section in the [RFA Process Guide](rfa-process-guide.md) article for guidance, if needed); otherwise, proceed to the next step.

1. If there is not a **predetermined Reference Tenant** in the **Customer Engagement** display, default to the RFA tenant. This then becomes the **Reference Tenant**. Then proceed to the next step.

1. If this is a standalone disqualified Windows 10/Edge request, skip to the [Update RFA Assignment Dashboard](#iv-update-rfa-assignment-dashboard) section to cancel this RFA.

1. If this is a qualifying request for Windows 10, Edge, or both, or other workloads were also selected on the form, proceed to the next step.

## [II. Identify potential escalations](#ii-identify-potential-escalations)

### 1. [Check for Skype for Business selection](#1-check-for-skype-for-business-selection)

1. On the RFA form, check to see if **Skype for Business** appears in the **Chosen Products** section.

    1. If no, proceed to the next section, [Check tenant assignments in FTOP](#2-check-tenant-assignments-in-ftop).

    1. If yes, proceed to the article, [Teams First Pitch](rfa-teams-first-pitch-win-10-and-edge.md).

### 2. [Check tenant assignments in FTOP](#2-check-tenant-assignments-in-ftop)

1. If this is a *Net New tenant* scenario, skip to the [Determine if a FastTrack Ready Partner (FRP) conflict exists](#3-determine-if-a-fasttrack-ready-partner-frp-conflict-exists) section. Otherwise, proceed to the next step.

1. In the FTOP dashboard, open the tenant's Assignment fly-out window.

    1. In FTOP's dashboard, set **Filter** to **All**.

    1. Set **Display** to **Partner Validation**.

    1. Search by the tenant ID (listed as **Company ID** in the **Profile tab** of [ViewPoint](https://support.office.net/?modern=0&source=ViewPointV2)).

    1. Click the row of your tenant to allow the assignment flyout window to appear.

1. Review the **RM, FM,** and **FPM** assignments to determine the type of team that is currently assigned to the RFA tenant.

    Note: *These assignments will impact the routing of your RFA tenant later in the guide.*

### 3. [Determine if a FastTrack Ready Partner (FRP) conflict exists](#3-determine-if-a-fasttrack-ready-partner-frp-conflict-exists)

1. Determine if an FRP or Non-FRP is engaged.

    > [!Note]
    > *Engaged* means that they are indicated on the RFA form. It is not referring to any current assignment status in FTOP.

    1. If the domain of a non-customer contacts on the RFA form belongs to a Partner company (for example, not a Microsoft or personal email account), a partner is likely engaged.

        > [!Note]
        > If you see a v- Microsoft account, you'll need to confirm this is not an MCS contact. If confirmed MCS, then this contact should be considered a partner contact.

    1. If the partner can be found in the [FRP List](https://msit.powerbi.com/groups/me/apps/f8dbc5ed-8560-4384-99bb-6486899741e9/reports/b3b75f94-ac3b-4760-a8c1-a984b0e1a24d/ReportSection286e648ca0a2792b097a?ctid=72f988bf-86f1-41af-91ab-2d7cd011db47), an FRP is engaged.

        > [!Note]
        > Some FRPs are associated with a specific location, for example, Avanade US verses Avanade UK. Currently, these are regional designations. Avanade US is for the entire Americas region and Avanade UK is for the entire EMEA region. If an Avanade resource filed an RFA for a Canadian customer, the tenant would still be assigned to Avanade US.

    1. If no partner is engaged, skip to the [Review RFA Assignment Dashboard](#iii-review-rfa-assignment-dashboard) section. Otherwise, proceed to the next step.

1. *If* one or more of the following FRP conflicts are true, *then* escalate to an FPM via the instructions found in the [FPM Escalation process](rfa-fpm-escalation-process-win-10-and-edge.md) article.

    - If an FRP is engaged *and* the customer does not meet the criteria for FRP assignment according to the [Assignment Business Rules](rfa-assignment-business-rules.md))

    - If an FRP is engaged and the customer is already assigned to another FRP

    - If a non-FRP is engaged and the customer is already assigned to another FRP

1. If no FRP conflict exists, proceed to the next section.

### 4. [Update Engagement Scenario](#4-update-engagement-scenario)

1. Review the [FTOP Assignment Scenarios Guide](rfa-ftop-assignment-scenarios-guide.md) as a reference to determine or confirm where your tenant will be assigned.

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

1. If Automation has been closed in the [RFA Assignment Dashboard](https://ftop.microsoft.com/rfa/dashboard/#/), open your RFA in the Dashboard and select **Start Automation**.

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

>[!Important]
> If the **Is Valid** checkbox is left unchecked per guidance below, then the automation will not populate in the tenant's FTOP record and manual processing and validation is required.

1. If Request is being Approved:

    1. In the [RFA Assignment Dashboard](https://ftop.microsoft.com/rfa/dashboard/#/), fill in the **Final Customer Tenant Domain** field with the final tenant domain.

    1. Fill in the **Final Customer OMS Tenant ID** field with the final tenant ID.

    1. If *both* of the following are true, ***then** proceed to the next step (sub-step 4)*.

        - The Reference tenant *is* the RFA tenant

            ***AND***

        - The Reference tenant *was **not*** found in the **All Customers** filter in FTOP

        ***Otherwise, skip to sub-step five (5.) below.***

        > [!Important]
        > If ***either*** of these ***two*** conditions are not met, then it is important that you ***do not*** check the **Is Valid** checkbox. Also, *leave the **Reason for Invalid** dropdown blank.*

    1. If the automation is correct in staging, check the **Is Valid** checkbox; otherwise, leave it blank.

        > [!Note]
        > For tenants where this step (sub-step 4) applies, the processor can use their best judgement to determine whether it is more efficient to check this box or not.

    1. If ***any*** automation is incorrect in staging, ***do not*** check the **Is Valid** checkbox and select all invalid reasons from the **Reason for Invalid** dropdown.

    1. Select **Request Approved** from the **Status** dropdown.

    1. Select **Save**.

    1. Skip to the next section, [Update FastTrack Portal RFA Status](#v-update-fasttrack-portal-rfa-status).

1. If Request is being set to anything other than approved:

    1. Select desired status from the **Status** dropdown (**On Hold**, **On Hold Pending Requestor Response**, or **Cancelled (closed)**).

    1. Select **Save**.

    1. Proceed to the [Update FastTrack Portal RFA Status](#v-update-fasttrack-portal-rfa-status) section.

## [V. Update FastTrack Portal RFA Status](#v-update-fasttrack-portal-rfa-status)

1. **Approve, Cancel,** or place the RFA **On Hold** in the [FastTrack Portal](https://fasttrack.microsoft.com/).

    Note: *If cancelling in the FT Portal due to a duplicate RFA, be sure to use the* **Cancelled(closed)** *note for duplicate RFAs in the [FastTrack Portal Notes Bank](https://microsoft.sharepoint.com/:x:/r/teams/FastTrackAssignmentTeamLeads/_layouts/15/Doc.aspx?sourcedoc=%7BCA587309-09E4-445C-A7CB-28058CE91555%7D&file=FastTrack%20Portal%20Notes%20Bank.xlsx&action=default&mobileredirect=true).*

    1. Return to the customer's FastTrack Portal record via the link provided in the **Request URL** column in the [RFA Assignment Dashboard](https://aka.ms/assignmentdashboard).

    1. Click on the **Services** tab.

    1. Click **View Submitted Requests**.

    1. In the **View Service History** tab, select the status from the **Status** column.

    1. In the fly-out window, scroll down to the **Update Request** section and select **Request Approved**, **On Hold**, **On Hold Pending Requestor Response**, or **Cancelled(closed)** from the **Status** dropdown list.

    1. In the **Status Details** section, record the appropriate status note from the [FastTrack Portal Notes Bank](https://microsoft.sharepoint.com/:x:/r/teams/FastTrackAssignmentTeamLeads/_layouts/15/Doc.aspx?sourcedoc=%7BCA587309-09E4-445C-A7CB-28058CE91555%7D&file=FastTrack%20Portal%20Notes%20Bank.xlsx&action=default&mobileredirect=true).

    1. Click **Save**.

1. If the RFA is being **cancelled** and it ***is*** a ***standalone disqualified Windows 10/Edge RFA*** or an ***Edge Attempted RFA***, or both, then proceed to the [Update Engagement Management note in FTOP](#7-update-engagement-management-note-in-ftop) section below.

1. If the RFA is being **cancelled** and it *is **not*** a ***standalone disqualified Windows 10/Edge RFA*** or an ***Edge Attempted RFA***, or both, then there are no additional steps necessary for this RFA.

1. If the tenant is **On Hold**, then follow any prescribed steps in the process relevant to the RFA's **On Hold** status. Once that process is complete, return to the step subsequent to that process blocker.

1. When ready for **Approval**, return to the beginning of the [Update RFA Assignment Dashboard](#iv-update-rfa-assignment-dashboard) section and proceed from there.

1. Once the RFA is **Approved**, and the RFA Dashboard and FT Portal have been updated accordingly, then proceed to the [Update FTOP](#vi-update-ftop) section below.

## [VI. Update FTOP](#vi-update-ftop)

> [!Important]
> **Windows 10 and Edge RFAs:** If the Reference Tenant was determined to be separate from the RFA tenant, you will need to populate both the Reference Tenant and the RFA tenant where noted below.

### 1. [Completed the Get Modern Assessment for Windows 10](#1-completed-the-get-modern-assessment-for-windows-10)

1. If this is a standalone disqualified Windows 10 request, skip to the [Send email notifications](#non-approval-related-emails-including-windows-and-edge-emails) section.

1. If Windows 10 is not requested, skip to the [Complete Edge Deployment Wizard](#2-complete-edge-deployment-wizard) section below.

1. In the **playbook** tab of the designated Reference tenant, select the **Initiate** phase and the **Windows 10** workload.

1. Search for Task ID **4021**.

1. Expand the **Conduct Specific Workshops** phase and select the **Get Modern Assessment Workshop**.

1. Select the link for the **Wizard - Get Modern Deployment**.

1. Update the following fields for Windows 10 using the information provided in the RFA Form for **Windows 10**.

    1. When requestor selects **Yes** to the question, *If you plan to use System Center Configuration Manager to deploy Windows 10, are you able to update to ConfigMgr Current Branch?*

        1. **Device management** = System Center Configuration Manager

        1. *If using Configuration Manager for device management, is it on Current Branch?* = Yes

### 2. [Complete Edge Deployment Wizard](#2-complete-edge-deployment-wizard)

1. If this is a standalone disqualified Edge request, skip to the section to [Send email notifications](#non-approval-related-emails-including-windows-and-edge-emails).

1. If Edge is not requested, skip to the [Update Services Tab](#3-update-services-tab) section below.

1. In the **playbook** tab of the designated Reference tenant, select the **Initiate** phase and the **Edge** workload.

1. Search for Task ID **4095**.

1. Expand the **Conduct Workshops** phase and select the **Wizard-Edge Deployment Wizard**.

1. Update the following fields for Edge using the mapping logic below based on the information provided on the RFA Form for Edge. Then select **Save**.

    :::image type="content" source="media/rfa-edge-deployment-mapping-logic.png" alt-text="Edge deployment mapping logic":::

### 3. [Update Services Tab](#3-update-services-tab)

#### Guidance for Entitlement overrides

> [!Important]
> This section does ***not*** apply to ***predetermined Reference Tenants***

If a workload is set to **0 Entitlements** after automation is accepted OR if automation is not accepted and a workload is set to **0 Entitlements**, submit a support ticket in [FTC Help](https://o365cxp.microsoftcrmportals.com/FTCChangeRequest/), and override the entitlement to reflect the correct number (see screenshot).

:::image type="content" source="media/rfa-override-entitlements.png" alt-text="Override entitlements field image":::

#### Both RFA tenant *and* Reference tenant

1. If the **Is Valid** checkbox was selected when the RFA was approved in the RFA Dashboard, then review the **Services** tab to make sure that it was populated correctly.

1. If automation did not populate the **Services** tab correctly, or the **Is Valid** checkbox was not selected, then populate the services tab with the correct information from the RFA form.

### 4. [Update Partners Tab](#4-update-partners-tab)

> [!Note]
> **Windows 10 and Edge RFAs:** If the Reference Tenant was determined to be separate from the RFA tenant, you will need to report the Partners in the Reference Tenant (in addition to the RFA tenant) by following the same steps.

1. If no partner is engaged on the RFA form, skip to the [Update Contacts Tab](#5-update-contacts-tab) section below.

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

### 5. [Update Contacts Tab](#5-update-contacts-tab)

> [!Note]
> **Windows 10 and Edge RFAs:** If the Reference Tenant was determined to be separate from the RFA tenant, you will need to report all RFA related contacts in the Reference Tenant (in addition to the RFA tenant) by following the same steps.

1. If Automation was accepted in the **RFA Assignment Dashboard**, review existing contacts to ensure automation was successful and remove any duplicate contacts existing prior to automation being run.

1. If Automation was not accepted in the **RFA Assignment Dashboard**, perform manual validation lookups for the customer, account team, and partner.

1. Make any necessary updates and corrections.

### 6. [Update Assignment Urgency Flag](#6-update-assignment-urgency-flag)

> [!Note]
> **Windows 10 and Edge RFAs:** If the Reference Tenant was determined to be separate from the RFA tenant, you will need to set the Assignment Urgency Flag in the Reference Tenant (in addition to the RFA tenant) by following the same steps.

1. If Automation was accepted in the **RFA Assignment Dashboard**, skip to the [Update Engagement Management note in FTOP](#7-update-engagement-management-note-in-ftop) section below; otherwise, proceed to the next step.

1. If Automation was not accepted in the **RFA Assignment Dashboard**, set the **Assignment Urgency** flag in FTOP:

    1. Select the **Flags** tab in tenant's FTOP record.

    1. Select **High** from the dropdown for **Assignment Urgency**.

    1. Click **Save**.

### 7. [Set the SLT Watchlist Flag](#7-set-the-slt-watchlist-flag)

1. If this is a **pre-determined Reference Tenant** found in the **All Customers** filter, skip to the [Update Engagement Management note in FTOP](#7-update-engagement-management-note-in-ftop) section below; otherwise, proceed to the next step.

1. Navigate to the **flags** tab in FTOP.

1. Select **True** for the **SLT Watchlist** flag.

1. Select **Save**.

    1. If the entitlements do not update after 4 hours, override the entitlements to what is staged in the Assignment Dashboard for Windows 10.

    1. If staging is inaccurate, confirm tenant is eligible for one or more of the following: Exchange Online, SharePoint Online, or Office ProPlus. Once confirmed, override the Windows 10 entitlements to 150.

### 8. [Update Engagement Management note in FTOP](#8-update-engagement-management-note-in-ftop)

> [!Note]
> **Windows 10 and Edge RFAs:** If the Reference tenant was determined to be separate from the RFA tenant, you will need to update the Engagement Management note for the Reference tenant (in addition to the RFA tenant) by following the same steps.

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

1. If the RFA is a *standalone disqualified Windows 10/Edge* RFA, skip to the [Non-approval related emails (including Windows and Edge emails)](#non-approval-related-emails-including-windows-and-edge-emails) section; otherwise proceed to next step.

#### Notes about Template

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

- ***The RFA tenant [tenant domain] is separate from the Reference tenant [tenant domain]:*** This note is necessary if the Reference tenant was determined to be separate from the RFA tenant. If the Reference tenant and RFA tenant are one in the same, do not include this note in the overall status.

- ***Information that may impact the project:*** This can include, but is not limited to, additional comments from the RFA Form, information related to FPM escalations, or any other pertinent information related to the RFA.

#### Template

*[**Include if relevant**] #covid*

***[See [Notes about Template](#notes-about-template) section above to determine which of the two following notes to use)]***

*RFA/WinRoom Hi Pri: [Reason for RFA Approval included in the FastTrack Portal status note]*

**OR**

*Customer is approved for assistance based on FastTrack's response to COVID-19. [Includes [trial/free] offers]*

*[**Include if relevant. See [Notes about Template](#notes-about-template).**] An exception was granted for [Services] by [Team]*

***[Also include if relevant]** [MDATP and/or OATP] are assigned to [CSS and/or Teresa Santos]; all other workloads are assigned to [Delivery Team]*

***[If relevant, populate and include one of the following two "Reference tenant" options:]***

*[Option one:]*

*Reference tenant:*

- *TPID: xxx*
- *RFA tenant and Reference tenant are the same:*
- *Tenant ID: xxx*

*[Option two:]*

*Reference tenant:*

- *TPID: xxx*
- *RFA Tenant and Reference tenant are NOT the same:*
- *RFA tenant : [tenant ID]*
- *Reference tenant : [tenant ID]*

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

*[**Include if a Duplicate RFA was submitted**] A duplicate RFA was submitted due to [Reason].*

*[**RFAs where Windows 10 was disqualified. In scenarios where this is a standalone disqualified Windows 10 request, this will be the only note used.**] Requestor expressed interest in Win10 on the RFA form; however, they do not qualify for Win10 assistance from FastTrack because [they don't intend to deploy Win10 Enterprise or they don't intend to deploy Win10 Enterprise using SCCM Current Branch]*

*[**Include for Edge Attempted RFAs**] Requestor expressed interest in Edge on the RFA form; however, they do not qualify for Edge assistance from FastTrack because they don't intend to deploy Win10 Enterprise.*

### 9. [Complete Task 2453 and Technical Enablement Note](#9-complete-task-2453-and-technical-enablement-note)

> [!Note]
> **Windows 10 and Edge RFAs:** If the Reference Tenant was determined to be separate from the RFA tenant, you will need to complete Task 2453 and the Technical Enablement Note in the Reference Tenant (in addition to the RFA tenant) by following the same steps.

1. If you are unable to update the **Playbook Tasks** (for example, as in Customer Health tenants), then skip to step 8.3 below to add the Playbook Task note in the **Technical Enablement** field. Otherwise, proceed to next step.

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
        > If assigning to FTC and multiple reason codes are applicable, choose the reason code based on the priority order found in the [**RFA Task Notes**](https://microsoft.sharepoint.com/:x:/t/FastTrackAssignmentTeamLeads/ET2oyY1BT99Ei2fyuJPCYeoB-FNfZO-e-t6fDGs8r0bQTg?e=HxnWr8&CID=1E962D6A-5006-4077-80D7-CE8D4D608A69&wdLOR=c6AC4E13F-4407-4293-9361-FB4EFA7020A0) spreadsheet.

### 10. [Update Priority Wizard](#10-update-priority-wizard)

> [!Note]
> **Windows 10 and Edge RFAs:** If the Reference Tenant was determined to be separate from the RFA tenant, you will need to set the Priority Wizard in the Reference Tenant (in addition to the RFA tenant) by following the same steps.

1. If your tenant is not already assigned or being assigned to a Delivery queue, skip to the [Assign to downstream team](#vii-assign-to-downstream-team) section below..

1. If automation was not accepted, and your tenant is already assigned or being assigned to a Delivery queue (that is, an FRP or FTC queue), set the Priority Wizard to **High Priority** using the following steps:

    1. Assign yourself as the **FastTrack Manager** in FTOP.

    1. Click **Apply Assignments**.

    1. Select the Priority Dropdown from the Priority column for the tenant in the Portfolio View in FTOP.

        :::image type="content" source="media/rfa-setting-priority.png" alt-text="Setting Tenant Priority in FTOP":::

    1. Select High (overridden).

    1. Select Other.

    1. Unassign yourself from the tenant.

## [VII. Assign to downstream team](#vii-assign-to-downstream-team)

***Note:** The following instructions outline the most common FTOP Assignment Scenarios related to Customer Type. Corner case scenarios that are not covered here may occur; in which case you may need to consult your leads for next steps.*

### [Select customer type, and follow the instructions for that type ***only***](#select-customer-type-and-follow-the-instructions-for-that-type-only)

#### Customer Type one: Windows 10 disqualified or 3652 Complete, or both

1. Refer to [FTOP Assignment Scenarios Guide](rfa-ftop-assignment-scenarios-guide.md) article to match your tenant's current assignment in FTOP, completing assignment instructions according to that Guide.

1. Then, skip to the [Send email notifications](#viii-send-email-notifications) section below.

#### Customer Type two: Windows 10 qualified ***and*** 3652 Not Started or In Progress

Reviewing the scenarios below to find the scenario that matches your tenant's current assignment in FTOP, completing the assignment for that scenario.

##### 1. For all Windows 10 qualified scenarios where 3652 is Not Started or In Progress

- If MDATP, OATP, or both workloads were selected on the RFA form, they will be assigned as primary at the workload level to FTCQ CSS [Americas, EMEA, or APJ] unless the tenant meets MDATP/OATP CAT Team requirements.

##### 2. RM specific scenarios: Identify the Assignment scenario below that matches your RFA tenant and follow the instructions below for that scenario

- RM = *[Gateway Queue](rfa-ftc-leads-contact-list-and-queue-information.md#gateway-queues)*

    *FM = Gateway FM or N/A; FE = N/A*

    1. Assign to **FTCQ Targeting RFA** as RM in addition to all currently assigned RM's.

    1. Then, proceed to the [Send email notifications](#viii-send-email-notifications) section below.

- RM = *[FTC Regional Delivery Queues](rfa-ftc-leads-contact-list-and-queue-information.md#ftc-regional-queues)* or *[FTC Holding Queue](rfa-ftc-leads-contact-list-and-queue-information.md#ftc-holding-queues)*

    *FM = FTC Delivery FM or N/A; FE = FTC Delivery FE or N/A*

    1. Assign to **FTCQ Targeting RFA** as RM in addition to all currently assigned RM's.

    1. Then, proceed to the [Send email notifications](#viii-send-email-notifications) section below.

- RM = *FRP Delivery Queue*

    *FM = FRP Delivery FM or N/A; FE = FTC Delivery FE or N/A*

    1. If the FPM confirmed that the assigned FRP will be handling the Windows 10 engagement, then leave the tenant assigned as is.

    1. If the FPM confirmed that the assigned FRP will not be handling the Windows 10 engagement, then assign the tenant to FTCQ Targeting RFA as RM in addition to all currently assigned RM's.

    1. Then, proceed to the [Send email notifications](#viii-send-email-notifications-non-covid-19-rfas) section below.

## [VIII. Send email notifications (non-COVID-19 RFAs)](#viii-send-email-notifications-non-covid-19-rfas)

**If tenant has COVID-19 trial/free licenses**, skip to the [Send email notifications (COVID-19 email approvals)](#ix-send-email-notifications-covid-19-email-approvals) section below. Following tenant assignment to downstream team, select the appropriate approval email scenario.

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

    1. Notify the FRP (Program Contact in the [FRP list](https://msit.powerbi.com/groups/me/apps/f8dbc5ed-8560-4384-99bb-6486899741e9/reports/b3b75f94-ac3b-4760-a8c1-a984b0e1a24d/ReportSection286e648ca0a2792b097a?ctid=72f988bf-86f1-41af-91ab-2d7cd011db47)) with the [FPM](https://msit.powerbi.com/groups/me/dashboards/2d456979-c0ff-4a19-a2a8-2c92c791ef91) copied:

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

## [IX. Send email notifications (COVID-19 email approvals)](#ix-send-email-notifications-covid-19-email-approvals)

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

## Non-approval related emails (including Windows and Edge emails)

- *Standalone Disqualified **Windows 10*** RFA:

  - Notify the Requestor: [Rejection of Windows 10 Request – Answered "No" to Win10 Enterprise Deployment](https://microsoft.sharepoint.com/teams/FastTrackAssignmentTeamLeads/Shared%20Documents/AiR%20Leads/Gateway%20RFA%20Team%20GitHub%20files/rfa-rejection-win10-no-to-win10-enterprise.msg)

    ***OR***

  - Notify the Requestor: [Rejection of Windows 10 Request – Answered "No" to use of SCCM](https://microsoft.sharepoint.com/teams/FastTrackAssignmentTeamLeads/Shared%20Documents/AiR%20Leads/Gateway%20RFA%20Team%20GitHub%20files/rfa-rejection-win10-no-to-sccm-current-branch.msg)

- *Standalone Disqualified **Edge*** RFA:

  - Notify the Requestor: [Rejection of Edge Request – Answered "No" to "Do you have Windows 10 Enterprise?"](https://microsoft.sharepoint.com/teams/FastTrackAssignmentTeamLeads/Shared%20Documents/AiR%20Leads/Gateway%20RFA%20Team%20GitHub%20files/rfa-rejection-edge-no-to-win10-enterprise.msg)

    ***OR***

  - Notify the Requestor: [Rejection of Edge Request – Does not plan to deploy Windows 10 Enterprise using SCCM Current Branch](https://microsoft.sharepoint.com/teams/FastTrackAssignmentTeamLeads/Shared%20Documents/AiR%20Leads/Gateway%20RFA%20Team%20GitHub%20files/rfa-rejection-edge-no-to-win10-via-sccm-cb.msg)

- ***Inconsistent country or customer name***: [Inconsistent Country or Customer email template](https://microsoft.sharepoint.com/teams/FastTrackAssignmentTeamLeads/Shared%20Documents/AiR%20Leads/Gateway%20RFA%20Team%20GitHub%20files/rfa-inconsistent-country-customer-name.msg)

- ***Response to Requestor's inquiry about timeline or status*** (for when an FM has already been assigned): [Requestor status inquiry response template](https://microsoft.sharepoint.com/:u:/t/FastTrackAssignmentTeamLeads/EfXzfHDE-GZPvszkOd4paBMBpmweEtKyVQ8Ogd7b8ovLYg?e=teVulP)

## Skype for Business footnote

If Skype for Business was rejected after an Exception request was sent following the [Teams First Pitch](rfa-teams-first-pitch-win-10-and-edge.md), you will replace the *Approval notification to Requestor - general* email with the [Approval for All Requested Services except Skype for Business](https://microsoft.sharepoint.com/teams/FastTrackAssignmentTeamLeads/Shared%20Documents/AiR%20Leads/Gateway%20RFA%20Team%20GitHub%20files/rfa-approval-notification-to-requestor-sfb-not-approved.msg).

[!INCLUDE [rfa-resources-for-footer-of-every-article-include](includes/rfa-resources-for-footer-of-every-article-include.md)]