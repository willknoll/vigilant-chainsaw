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

## Type and use of document

- Topic category: Request for Assistance (RFA)
- Primary role: Gateway RFA FMs
- Use: Starting point of sequential Guide for processing M365 FastTrack Benefit RFAs

## Summary

This article provides step-by-step guidance for Gateway RFA FMs to follow when processing M365 FastTrack Benefit RFAs submitted via the [FastTrack Portal](https://fasttrack.microsoft.com/). Where there are divergent process flows, independent processes applicable only to unique scenarios, or other independent content such as reference articles, this RFA Guide provides links to the articles relevant to each case.

## Escalation instructions

If you encounter any scenarios that are not explicitly described in this document, escalate to your lead for guidance.

If you encounter any technical issues related to the FastTrack Portal or RFA Assignment Dashboard, please reach out to Erin Saville ([v-ersav@microsoft.com](mailto:v-ersav@microsoft.com)), who will triage the issue. If you’re experiencing a blocking issue (for example, tool outages, process blockers) and need to file a help ticket via the FastTrack Portal outside of PST business hours, forward the ticket submission confirmation to Erin for visibility; in this case, be sure to identify the bug as “P0” in the ticket notes.

Going forward all issues related to missing non-Win10 entitlements, missing FTOP Playbooks, and SLT Watchlist flags being reset should be escalated through the [FTC Help](https://aka.ms/ftchelp) process.

## I. Review the RFA

### 1. Select an RFA in the [RFA Assignment Dashboard](https://aka.ms/assignmentdashboard)

1. Select **Submitted** from the **Status** filter dropdown.

1. Click on the row for the RFA with the oldest date in the **Submitted Date** column and no name in the **Assigned To** column.

1. Click on the dropdown in the **Assigned To** column in the row for the selected RFA.

1. Select your name from the dropdown list.

1. Click **Save Assignments**.

### 2. Check for multiple RFAs

1. **RFA Assignment Dashboard**

    1. Search for multiple RFAs using different variations of the customer name in the **Search Customer Name or RFA ID** search box in the top right corner of the page.

1. **FastTrack Portal**

    1. Go to the customer’s FastTrack Portal record via the link provided in the **Request URL** column and click on the **Services** tab.

    1. Click **View submitted requests** on the **Request for Assistance with Microsoft 365** card.

    1. Check to see if any other RFAs have been filed or processed (that is, **Status** does not equal **Available**).

1. If there is more than one RFA, process simultaneously or reach out to the Gateway RFA Manager assigned to the RFA submitted first.

    > [!Note]
    > Duplicate RFAs should be cancelled immediately and the initially submitted RFA processed normally. A duplicate RFA is defined as an RFA submitted by the same requestor for the all of the same RFA details (that is, **all** of the same workloads, intent, contacts, and so forth).

### 3. Open the RFA Form

1. Right click on the link in the **Request URL** column in the [RFA Assignment Dashboard](https://ftop.microsoft.com/rfa/dashboard/#/).

1. Select **Open in new tab**.

### 4. Start Automation in RFA Assignment Dashboard

1. Select **Start Automation** in the **RFA Assignment Dashboard** for the selected RFA.

    Note: *The Validation Pop-up will display the FastTrack Benefit eligibility, contact, intent, and assignment recommendations.*

### 5. Review Tenant Exists line in Validation Pop-Up

Note: *The Validation Pop-up will verify if the RFA Tenant exists and is assigned in FTOP.*

1. Determine if this is a *Net New tenant* scenario (that is, the tenant does not yet exist in FTOP), or an *Already in FTOP tenant* scenario.

1. If the tenant does not exist in FTOP (a *Net New tenant* scenario), skip to the [Determine if request includes Windows 10 or Edge](#3-determine-if-request-includes-windows-10-or-edge) section below.

1. If the tenant does exist, proceed to next step.

### 6. Search for tenant in FTOP and assign yourself

1. In the FTOP dashboard, set **Filter** to **All**.

1. Set **Display** to **Partner Validation**.

1. Search by the tenant ID (listed as **Company** Id in the **Profile** tab in [Viewpoint](https://support.office.net/?modern=0&source=ViewPointV2)).

1. Click the row for the tenant in FTOP to open that tenant's Assignment fly-out window on the right.

1. Select **Assignments** from the side window for the tenant.

1. Select the “**+**" button to add yourself to the tenant.

1. In the search box, type in your name and select the ![RFA - magnifying glass](media/rfa-magnifying-glass.png) icon.

1. Select your name from the dropdown list.

1. Click the **Save Assignments** button at the bottom of the window.

### 7. Determine customer type and branch to Process flow

#### 1. Verify if tenant is marked for Customer Health (S1500 or P800) initiative

1. Search for the tenant domain in [Viewpoint](https://support.office.net/?modern=0&source=ViewPointV2).

1. Copy the tenant ID (that is, **Company ID** in the **Profile** tab of [ViewPoint](https://support.office.net/?modern=0&source=ViewPointV2)).

1. Search for the tenant ID in FTOP by setting the **Filter** to **All** and the **Display** to **Partner Validation**.

1. Open the customer record and review the **Motions** indicator located under the customer name.

    - S1500: Motion Label is **Customer Health** only

    - P800: Motion Label is **Customer Health** and **Targeting**

1. If tenant is either S1500 or P800, continue processing according to the [Customer Health RFA Process Guide](rfa-customer-health-process-guide.md).

1. If tenant is not marked for S1500 or P800, proceed to next step.

#### 2. Determine if tenant has a Targeting Motion

1. Review the tenant’s **Motion** in FTOP.

1. Search for the tenant domain in [Viewpoint](https://support.office.net/?modern=0&source=ViewPointV2).

1. Copy the tenant ID (that is, **Company ID** in the **Profile** tab of [ViewPoint](https://support.office.net/?modern=0&source=ViewPointV2)).

1. Search for the tenant ID in FTOP by setting the **Filter** to **All** and the **Display** to **Partner Validation**.

1. Verify if the tenant’s **Motion** is **Targeting**.

1. If **Motion=Targeting**, open the **Services** tab in FTOP to determine which products are being Targeted. Targeted workloads will have a red target symbol next to them.

    1. If the tenant is targeted for Get Modern (that is, both Windows 10 *and* Office ProPlus), Intune, or AADP (or more than one), then proceed to next step.

    1. If tenant is targeted for any other workload, then escalate to Erin Saville ([v-ersav@microsoft.com](mailto:v-ersav@microsoft.com)).

#### 3. Determine if request includes Windows 10 or Edge

1. Review the **Chosen Products** section of the RFA Form to determine if **Windows 10, Edge, or both** are a requested workloads.

1. If **Windows 10, Edge, or both** are **not** requested, skip to the [Identify potential escalations](#ii-identify-potential-escalations) section below in order to process this RFA according to the Standard RFA Process flow.

1. If **Windows 10, Edge, or both** ***are*** requested workloads, proceed to the [Windows 10 and Edge RFA Process Guide](rfa-windows-10-and-edge-process-guide.md) to continue processing this RFA.

## II. Identify potential escalations

### 1. Check for Skype for Business selection

1. On the RFA form, check to see if **Skype for Business** appears in the **Chosen Products** section.

    1. If no, proceed to the next section, [Check tenant assignments in FTOP](#2-check-tenant-assignments-in-ftop).

    1. If yes, proceed to the article, [Teams First Pitch](rfa-teams-first-pitch-standard.md).

### 2. Check tenant assignments in FTOP

1. If this is a *Net New tenant* scenario, skip to the [Determine if a FastTrack Ready Partner (FRP) conflict exists](#3-determine-if-a-fasttrack-ready-partner-frp-conflict-exists) section. Otherwise, proceed to the next step.

1. In the FTOP dashboard, open the tenant's Assignment fly-out window according to the same guidance found in the [Search for tenant in FTOP and assign yourself](#6-search-for-tenant-in-ftop-and-assign-yourself) section above.

1. Review the **RM, FM,** and **FPM** assignments to determine the type of team that is currently assigned to the RFA tenant.

    Note: *These assignments will impact the routing of your RFA tenant later in the guide.*

### 3. Determine if a FastTrack Ready Partner (FRP) conflict exists

1. Determine if an FRP or Non-FRP is engaged.

    1. If the domain of a non-customer contacts on the RFA form belongs to a Partner company (for example, not a Microsoft or personal email account), a partner is likely engaged.

        > [!Note]
        > If you see a v- Microsoft account, you’ll need to confirm this is not an MCS contact. If confirmed MCS, then this contact should be considered a partner contact.

    1. If the partner can be found in the [FRP List](https://msit.powerbi.com/groups/me/apps/f8dbc5ed-8560-4384-99bb-6486899741e9/reports/0044c4ce-f721-4137-b985-10df1bb7ea17/ReportSection?ctid=72f988bf-86f1-41af-91ab-2d7cd011db47), an FRP is engaged.

        > [!Note]
        > Some FRPs are associated with a specific location, for example, Avanade US verses Avanade UK. Currently, these are regional designations. Avanade US is for the entire Americas region and Avanade UK is for the entire EMEA region. If an Avanade resource filed an RFA for a Canadian customer, the tenant would still be assigned to Avanade US.

    1. If no partner is engaged, skip to [Update Engagement Scenario](#4-update-engagement-scenario). Otherwise, proceed to the next step.

1. Escalate to an FPM via the instructions found in the [FPM Escalation process](rfa-fpm-escalation-process-standard.md) article ***if*** one or more of the following are true:

    - If an FRP is engaged, the customer does not meet the criteria for FRP assignment (outlined in the FRP [Assignment Business Rules](rfa-assignment-business-rules.md)), or the customer is already assigned to another FRP, or both.

    - If a non-FRP is engaged, and the customer is already assigned to another FRP

1. If none of the scenarios in step two (2) above are true, proceed to the next step.

### 4. Update Engagement Scenario

1. If the tenant does not exist in FTOP, skip to the [Review Staging Contacts Tab in RFA Assignment Dashboard](#1-review-staging-contacts-tab-in-rfa-assignment-dashboard) section below. Otherwise, proceed to the next step.

1. Review the [FTOP Assignment Scenarios Guide](rfa-ftop-assignment-scenarios-guide.md) as a reference to determine or confirm where your tenant will be assigned.

1. If the tenant is being assigned or reassigned to **FTCQ All FTC** for possible partner referral, do not update the Engagement Scenario, and skip to the [Review Staging Contacts Tab in RFA Assignment Dashboard](#1-review-staging-contacts-tab-in-rfa-assignment-dashboard) section below. Otherwise, proceed to the next step.

1. Open the Services tab.

1. Update the **Engagement Scenario** based on where the tenant will be assigned to in FTOP.

    1. Leave the previous value for unselected workloads.

    1. For selected workloads, follow the logic below:

        1. **Non-FastTrack Partner-Led:** The workload is selected on the RFA form and the customer has intent to deploy the workload with the Non-FRP. If a partner is listed on the RFA form and they are *not* on the [FRP List](https://msit.powerbi.com/groups/c7c3e56c-a80b-4323-bdb1-402cf94ca2a5/reports/49386223-5d87-4d95-abcf-a18667dbcdcd/ReportSection?ctid=72f988bf-86f1-41af-91ab-2d7cd011db47), they are considered a non-FRP.

        1. **FTC-CSS Led:** The workload is selected on the RFA form and the tenant meets the criteria for CSS assignment.

        1. **FTC-FTP Led:** The FRP eligible workload is selected on the RFA form and the customer has intent to deploy the workload with an FRP.

            > [!Note]
            > We are not required to change the Engagement Scenario for RFAs to **FTC-FTP Led** when an FRP is engaged or in an FRP Referral scenario because CPOR will update this information.

        1. **CXP Led w/CSS Assist:** The workload is AADP and meets **all** AADP CAT Team requirements (see footnote four (4) in the [Assignment Business Rules](rfa-assignment-business-rules.md#footnote-reference) article).

        1. **FTC-CXP Led**: The selected workload is MDATP or OATP, or both, and meets **all** the following MDATP/OATP CAT Team requirements (see footnote three (3) in the [Assignment Business Rules](rfa-assignment-business-rules.md#footnote-reference) article).

    1. If the **Engagement Scenario** is being changed from **FTC-CSS Led**, **FTC-FTP Led**, or **FTC-CXP Led**, then proceed to the [Send Engagement Scenario Escalation](rfa-send-engagement-scenario-escalation.md) article to submit an Engagement Scenario Escalation. Otherwise, proceed to the next step.

    1. If the **Engagement Scenario** is being changed, select the desired Engagement Scenario from the **Engagement Scenario** dropdown for the workload within the **Services** tab, and then select **Save**.

## III. Review RFA Assignment Dashboard

### 1. Review Staging Contacts Tab in RFA Assignment Dashboard

1. If Automation has been closed in the RFA Assignment Dashboard, open your RFA in the [RFA Assignment Dashboard](https://ftop.microsoft.com/rfa/dashboard/#/) and select **Start Automation**.

1. Open the **Staging Contacts Tab** in a separate browser tab to confirm contact automation is correct.

1. Select the row for each contact shown and review the **Update Source** note on the right-hand margin. The note will identify the **Sources** where each contact was pulled from and will also serve as an indication of the type of contact. The **Source** note for the contacts are displayed as follows:

    - Requestor (RFA Form): **RFA_REQUESTOR**

    - Customer Contact (RFA Form): **RFA_CUSTOMER**

    - Account team Contact (CALC): **CALC**

    - TAM Contact (PSR): **PSR**

1. Any older duplicate contacts (that is, contacts existing prior to automation that are the same as what is pulled in from automation) must be deleted from the record after automation is accepted.

### 2. Review Staging Services Tab in RFA Assignment Dashboard

Note: *All eligible, unselected workloads in the RFA form will not be changed and will remain as is. All eligible, selected workloads in the RFA form will update their corresponding fields on the Services Tab as described in this section.*

1. Open the **Staging Services Tab** in a separate browser tab to confirm intent automation is correct.

1. Select **View** for each workload selected on the RFA Form and review the following elements:

    1. **Consumption Status/L1: In Progress**

    1. **Reason/L2** = Will automatically be determined by existing FTOP logic.

    1. **Target Date:** The target date will be updated in the corresponding row for **In Progress** and match the **Product Launch Date** on the RFA form (see example).

    1. **Notes:** “Intent information updated automatically with input from RFA (ID #xxx)” will be added.

    1. **Technical Service Notes:**  For EXO, the note **Current Mail System** is added and the name of the mail system in the RFA form is populated.  There is a known bug that adds the note **Current Mail System** to all workloads other than EXO.

        ![RFA Entitlement Status and Technical Service Note](media/rfa-entitlement-status-and-technical-service-note.png)

    1. **Business Reason:** This should match the Purchase Reason noted on the RFA form.

    1. **Success Owner Role:** This should match the **Business Sponsor** details on the RFA Form.

        1. **Other** should only be selected if the role in RFA is not one of the options in the dropdown list. If there is no match and **Other** is selected, then the **Success Owner Role** should be added to the entitlement notes field.

    1. **Data Migration** is *selected* then the following fields should be updated:

        1. **Microsoft Performing Migration?** checkbox is checked

        1. **Migration TBD** is selected from the dropdown list

        1. The **“+”** is selected and the number of entitlements is populated

        1. The migration notes field has a note **Data Migration assistance was selected on the RFA form** (see example)

        ![RFA - Data Migration](media/rfa-data-migration.png)

    1. **Data Migration** is *unselected* then the following fields should be updated:

        1. **RFA Undetermined** is selected from the **Migration Rejection Reason** dropdown list

        1. The **migration rejection reason** has the following note: “Data Migration assistance was not selected on the RFA form”

## IV. Update RFA Assignment Dashboard

1. If Request is being Approved:

    1. In the [RFA Assignment Dashboard](https://ftop.microsoft.com/rfa/dashboard/#/), fill in the **Final Customer Tenant Domain** field with the final tenant domain.

    1. Fill in the **Final Customer OMS Tenant ID** field with the final tenant ID.

    1. If ***all*** automation is correct in staging, check the **Is Valid** checkbox.

    1. If ***any*** automation is incorrect in staging, ***do not*** check the **Is Valid** checkbox and select all invalid reasons from the **Reason for Invalid** dropdown.

        >[!Note]
        > If the checkbox is left unchecked, then the automation will not populate in the tenant’s FTOP record and manual processing and validation is required.

    1. Select **Request Approved** from the **Status** dropdown.

    1. Select **Save**.

    1. Skip to the next section, [Update FastTrack Portal RFA Status](#v-update-fasttrack-portal-rfa-status).

1. If Request is being set to anything other than approved:

    1. Select desired status from the **Status** dropdown (**On Hold**, **On Hold Pending Requestor Response**, or **Cancelled (closed)**).

    1. Select **Save**.

    1. Proceed to the [Update FastTrack Portal RFA Status](#v-update-fasttrack-portal-rfa-status) section.

## V. Update FastTrack Portal RFA Status

1. **Approve, Cancel,** or place the RFA **On Hold** in the [FastTrack Portal](https://fasttrack.microsoft.com/).

    Note: *If cancelling in the FT Portal due to a duplicate RFA, be sure to use the* **Cancelled(closed)** *note for duplicate RFAs in the [FastTrack Portal Notes Bank](https://microsoft.sharepoint.com/:x:/r/teams/FastTrackAssignmentTeamLeads/_layouts/15/Doc.aspx?sourcedoc=%7BCA587309-09E4-445C-A7CB-28058CE91555%7D&file=FastTrack%20Portal%20Notes%20Bank.xlsx&action=default&mobileredirect=true).*

    1. Return to the customer’s FastTrack Portal record via the link provided in the **Request URL** column in the [RFA Assignment Dashboard](https://ftop.microsoft.com/rfa/dashboard/#/).

    1. Click on the **Services** tab.

    1. Click **View Submitted Requests**.

    1. In the **View Service History** tab, select the status from the **Status** column.

    1. In the fly-out window, scroll down to the **Update Request** section and select **Request Approved**, **On Hold**, **On Hold Pending Requestor Response**, or **Cancelled(closed)** from the **Status** dropdown list.

    1. In the **Status Details** section, record the appropriate status note from the [FastTrack Portal Notes Bank](https://microsoft.sharepoint.com/:x:/r/teams/FastTrackAssignmentTeamLeads/_layouts/15/Doc.aspx?sourcedoc=%7BCA587309-09E4-445C-A7CB-28058CE91555%7D&file=FastTrack%20Portal%20Notes%20Bank.xlsx&action=default&mobileredirect=true).

    1. Click **Save**.

1. If the RFA is being **canceled**, then there are no additional steps necessary for this RFA.

1. If the tenant is **On Hold**, then follow any prescribed steps in the process relevant to the RFA's **On Hold** status. Once that process is complete, return to the step subsequent to that process blocker.

1. When ready for **Approval**, return to the beginning of the [Update RFA Assignment Dashboard](#iv-update-rfa-assignment-dashboard) section and proceed from there.

1. Once the RFA is **Approved**, and the RFA Dashboard and FT Portal have been updated accordingly, then proceed to the [Update FTOP and assign](#vi-update-ftop-and-assign) section below.

## VI. Update FTOP and assign

### 1. Validate Services Tab

1. If the **Is Valid** checkbox was selected when the RFA was approved in the RFA Dashboard, then review the **Services** tab to make sure that it was populated correctly.

1. If automation did not populate the **Services** tab correctly, or the **Is Valid** checkbox was not selected, then populate the services tab with the correct information from the RFA form.

### 2. Update Engagement Scenario (*Net New tenant* scenarios only)

1. If the tenant is an *Already in FTOP tenant* scenario, skip to the [Update Overall Notes History in FTOP](#3-update-overall-notes-history-in-ftop) section below. Otherwise, proceed to the next step.

1. Search for tenant in FTOP and assign yourself

    1. In the FTOP dashboard, set **Filter** to **All**.

    1. Set **Display** to **Partner Validation**.

    1. Search by the tenant ID (listed as **Company** Id in the **Profile** tab in [Viewpoint](https://support.office.net/?modern=0&source=ViewPointV2)).

    1. Click the row for the tenant in FTOP to open that tenant's Assignment fly-out window on the right.

    1. Select **Assignments** from the side window for the tenant.

    1. Select the “**+”** button to add yourself to the tenant.

    1. In the search box, type in your name and select the ![RFA - magnifying glass](media/rfa-magnifying-glass.png) icon.

    1. Select your name from the dropdown list.

    1. Click the **Save Assignments** button at the bottom of the window.

1. Review the FTOP Assignment Scenarios section as a reference to determine or confirm where your tenant will be assigned.

1. If the tenant is being assigned or reassigned to **FTCQ All FTC** for possible partner referral, do not update the Engagement Scenario, and skip to the [Update Overall Notes History in FTOP](#3-update-overall-notes-history-in-ftop) section below. Otherwise, proceed to the next step.

1. Open the Services tab.

1. Update the **Engagement Scenario** for workloads selected on the RFA form based on where the tenant will be assigned to in FTOP.

    1. For selected workloads, follow the logic below:

        1. **Non-FastTrack Partner-Led:** The workload is selected on the RFA form and the customer has intent to deploy the workload with the Non-FRP. If a partner is listed on the RFA form and they are *not* on the [FRP List](https://msit.powerbi.com/groups/c7c3e56c-a80b-4323-bdb1-402cf94ca2a5/reports/49386223-5d87-4d95-abcf-a18667dbcdcd/ReportSection?ctid=72f988bf-86f1-41af-91ab-2d7cd011db47), they are considered a non-FRP.

        1. **FTC-CSS Led:** The workload is selected on the RFA form and the tenant meets the criteria for CSS assignment.

        1. **FTC-FTP Led:** The FRP eligible workload is selected on the RFA form and the customer has intent to deploy the workload with an FRP.

        1. **CXP Led w/CSS Assist:** The workload is AADP and meets **all** AADP CAT Team requirements (see footnote four (4) in the [Assignment Business Rules](rfa-assignment-business-rules.md#footnote-reference) article).

        1. **FTC-CXP Led**: The selected workload is MDATP or OATP, or both, and meets **all** the following MDATP/OATP CAT Team requirements (see footnote three (3) in the [Assignment Business Rules](rfa-assignment-business-rules.md#footnote-reference) article).

    1. If the **Engagement Scenario** is being changed to **FTC-CSS Led** or **FTC-FTP Led**, select the desired scenario from the **Engagement Scenario** dropdown for the workload within the **Services** tab, and then select **Save**.

1. Proceed to the next step, [Update Overall Notes History in FTOP](#3-update-overall-notes-history-in-ftop).

### 3. Update Overall Notes History in FTOP

Update the **Overall Notes History** in FTOP using the following steps.

1. Select the **Status** tab.

1. Change **Overall Status** to **Active**.

1. Select **Include Notes** and complete the following fields as indicated below:

    1. **Status Note**: Copy and Paste the status note template (see [**Template**](#template) below) into the **Status Note** box and add the relevant details from the RFA.

    1. **Next Action:** Complete next steps for RFA tenant

    1. **Next Action Date:** [next business day]

    1. **Next Action Owner:** FM

1. Click **Save**.

#### Notes about Template

- ***[MDATP and/or OATP] are assigned to [CSS and/or Teresa Santos]; all other workloads are assigned to [Delivery Team]:*** This note is only required If MDATP, OATP, or both are being assigned to the FTC or Teresa Santos in addition to existing queues (that is, FRP or Targeting queues).

- ***Information that may impact the project:*** This can include, but is not limited to, additional comments from the RFA Form, information related to FPM escalations, or any other pertinent information related to the RFA.

#### Template

*RFA/WinRoom Hi Pri: [Reason for RFA Approval included in the FastTrack Portal status note]*

*[**Include if relevant**] [MDATP and/or OATP] are assigned to [CSS and/or Teresa Santos]; all other workloads are assigned to [Delivery Team]*

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

### 4. Validate Partners Tab

1. Add partner related details to the **Partners** tab in FTOP as indicated below:

    1. **Partner**: [partner name and competency]

    1. **MPN ID**: [MPNID #]

    1. **Partner Type**: Onboarding Partner

    1. **Notes**: Partner information updated per RFA (RFA ID: [#####])

### 5. Validate Contacts Tab

1. If Automation was accepted in the **RFA Assignment Dashboard**, review existing contacts to ensure automation was successful and remove any duplicate contacts existing prior to automation being run.

1. If Automation was not accepted in the **RFA Assignment Dashboard**, perform manual validation lookups for the customer, account team, and partner.

### 6. Validate Assignment Urgency Flag

1. If Automation was accepted in the **RFA Assignment Dashboard**, skip to the next step, [Validate Priority Wizard](#7-validate-priority-wizard).

1. If Automation was not accepted in the **RFA Assignment Dashboard**, set the **Assignment Urgency** flag in FTOP:

    1. Select the **Flags** tab in tenant’s FTOP record.

    1. Select **High** from the dropdown for **Assignment Urgency**.

    1. Click **Save**.

### 7. Validate Priority Wizard

1. If your tenant is not already assigned or being assigned to a Delivery queue, skip to the next step, [Complete Task 2453](#8-complete-task-2453).

1. If automation was not accepted, and your tenant is already assigned or being assigned to a Delivery queue (that is, an FRP or FTC queue), set the Priority Wizard to **High Priority** using the following steps:

    1. Select the **Wizard Experience** from the **Portfolio View** in FTOP.

    1. Click on the row of the desired tenant from the list.

        Note: *If tenant is not listed, verify all filters are set to **Show All** and the checkbox to **Display only my primary assignments** is unchecked.*

    1. Select **Change priority for my tenant**.

    1. Select **High**.

    1. In the **Change reason** dropdown, select **Other**.

    1. Another free form field will appear; type **RFA Tenant**.

    1. Click **Save Priority**.

### 8. Complete Task 2453

1. Update Task 2453 in FTOP to indicate RFA Completion. This step will be completed individually for every approved workload.

    1. Select the **playbook** tab in the RFA tenant record in FTOP.

    1. Select the approved workload from the available list.

    1. Select the **Assignment** phase.

    1. In the **Search** box, search for **2453**.

        Note: *The task will be auto-filtered after typing it into the **Search** box.*

    1. Check the box to **Complete RFA Process**.

    1. Select **Complete** from the **Status** dropdown.

    1. Complete the task **Note**.

        1. The task **Note** will include the queue the tenant is being assigned or reassigned to (for example, [FTCQ CSS Americas], [FTCQ ALL FTC], or [FTP Dell]).

        1. *If* the tenant is being assigned to CSS, a reason code will need to be included in the task note. Assignment Reason Codes can be found [here](https://microsoft.sharepoint.com/:x:/t/FastTrackAssignmentTeamLeads/ET2oyY1BT99Ei2fyuJPCYeoB-FNfZO-e-t6fDGs8r0bQTg?e=HxnWr8&CID=1E962D6A-5006-4077-80D7-CE8D4D608A69&wdLOR=c6AC4E13F-4407-4293-9361-FB4EFA7020A0).

### 9. Assign to downstream team

1. Review the [FTOP assignment scenarios guide](rfa-ftop-assignment-scenarios-guide.md) to match your tenant’s current assignment in FTOP with the instructions for that assignment scenario.

1. Complete the assignment instructions for that assignment scenario.

1. Proceed to the [Send email notifications](#vii-send-email-notifications) section below.

## VII. Send email notifications

Following the tenant assignment to the appropriate downstream team, select the corresponding approval email scenario below and send the emails included in that scenario.

> [!Note]
> For **Skype for Business** requests, see footnote ([fn](#skype-for-business-footnote)) where indicated below.

### 1. Email to be sent in *all* scenarios

- ***All*** RFAs:

    1. Notify non-Requestor field contacts generated in FTOP through this RFA’s automation. Do *not* include any historical field contacts in FTOP.

        - [Approval notification for generated field contacts](https://microsoft.sharepoint.com/teams/FastTrackAssignmentTeamLeads/Shared%20Documents/AiR%20Leads/Gateway%20RFA%20Team%20GitHub%20files/rfa-approval-notification-for-generated-field-contacts.msg).

### 2. Additional emails needed for your RFA's *specific* scenario

- ***Customer*** submitted RFA ***with*** FRP engaged (assigned or reassigned to tenant in FTOP):

    1. Notify customer requestor:

        - [Approval notification to Requestor - general](https://microsoft.sharepoint.com/teams/FastTrackAssignmentTeamLeads/Shared%20Documents/AiR%20Leads/Gateway%20RFA%20Team%20GitHub%20files/rfa-approval-notification-to-requestor-general.msg) ([fn](#skype-for-business-footnote))

    1. Notify the FRP (Program Contact in the [FRP list](https://msit.powerbi.com/groups/c7c3e56c-a80b-4323-bdb1-402cf94ca2a5/reports/49386223-5d87-4d95-abcf-a18667dbcdcd/ReportSection?ctid=72f988bf-86f1-41af-91ab-2d7cd011db47)) with the [FPM](https://msit.powerbi.com/groups/me/dashboards/2d456979-c0ff-4a19-a2a8-2c92c791ef91) copied:

        - [Approval notification to FRP and FPM (cust Req)](https://microsoft.sharepoint.com/teams/FastTrackAssignmentTeamLeads/Shared%20Documents/AiR%20Leads/Gateway%20RFA%20Team%20GitHub%20files/rfa-approval-and-assignment-notificaton-for-frp-and-fpm-when-cr.msg)

- ***Customer*** submitted RFA ***with*** non-FRP Partner engaged or assigned, *or* no partner engaged or assigned*:

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

#### Skype for Business footnote

If Skype for Business was rejected after an Exception request was sent following the [Teams First Pitch](rfa-teams-first-pitch-standard.md), you will replace the *Approval notification to Requestor - general* email with the [Approval for All Requested Services except Skype for Business](https://microsoft.sharepoint.com/teams/FastTrackAssignmentTeamLeads/Shared%20Documents/AiR%20Leads/Gateway%20RFA%20Team%20GitHub%20files/rfa-approval-notification-to-requestor-sfb-not-approved.msg).

[!INCLUDE [rfa-resources-for-footer-of-every-article-include](includes/rfa-resources-for-footer-of-every-article-include.md)]
