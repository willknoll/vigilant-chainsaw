---
# required metadata
title: FTOP Partner User Guide
description: Services Tab
author: Celia Kennedy
ms.author: v-cekenn
manager: pagrim
ms.date: 6/5/2019
ms.topic: ftop-partner-guide
ms.prod: non-product-specific
ms.custom: ftop-partner-guide
ft.audience: partner
ft.owner: pagrim
---

# Services Tab

## Overview

The services tab **provides information and status about the services available to the customer for deployment.** You will spend most of your time working on this tab.

The service tab is divided into four sections: services overview, detailed service overview, and editing services overview.

### Services Overview

Services overview provides a general overview of all the services available.

![service-overview-partner.png](media/power-bi-reporting-guide/detailed-tenant-view-services-tab/service-overview-partner.png "Service overview")

#### List of Services

- Office 365
    - Exchange
    - Exchange: Outlook Mobile
    - SfB (Skype for Business)
    - Teams
    - SharePoint
    - OneDrive
    - Yammer
    - OfficeProPlus
    - Project Professional
    - Project Online Professional/Premium
    - Project Online Essentials
    - Power BI
    - Classroom/SDS
    - Office 365 ATP
- EMS
    - Intune
    - AADP
    - MCAS
    - AIP
    - AzRMS
- Windows
    - Windows 10
    - Microsoft Defender ATP

Select the **name** of a specific service (or the arrow next to the name) to expand the service and display the consumption status (L1) for the service.

![service-entitlement-status-detail-partners.png](media/power-bi-reporting-guide/detailed-tenant-view-services-tab/service-entitlement-status-detail-partners.png "Service entitlement status detail")

### Detailed services overview

You can zoom-in to an individual service to see the detailed service view or service editing sections.

#### To view detailed services view

1. Select **View** to the right of the service to view the detailed service view or edit to open servicing editing.

### Editing services overview

You will complete all work in the editing services tab. The editing services tab is divided into seven sections:

- Entitlement Status
- Adoption Indicators
- Data Migration
- Delivery
- FastTrack Ready Partner Forecasting
- Assignments
- Note History

**Save** and **Cancel** buttons display at the top of the window. The buttons also display at the bottom of the page.

Select **Save** to save changes to the service before leaving the page.

#### Entitlements Status

The Entitlement Status section enables you to **update entitlement status for a service.**

For specific L1 to L3 taxonomy definitions and example scenarios, see [Status and Entitlement Home](../fasttrack-playbook/english-playbook/status-guidance-entitlement-status-notes-partner.md).

> [!NOTE]
> The entitlements must total the available entitlements. If the conditions are not met, you will see an error message.

When you open the Services tab, the services display. Within services you can **add, edit, or delete entitlements** when you have the appropriate permissions to the tenant.

![entitlement-status-services-add-entitlement-status-partner.png](media/power-bi-reporting-guide/detailed-tenant-view-services-tab/entitlement-status-services-add-entitlement-status-partner.png "Service entitlement status detail")

To update the Entitlement Status for a service, select the **add entitlement status** button. Before you enter an Entitlement Status note, make sure that you understand how to write a great note. See [Entitlement Status Notes Guidance](../fasttrack-playbook/english-playbook/status-guidance-entitlement-status-notes-partner.md), which includes examples, note templates for various classifications, and how the notes could be worded in different situations.

> [!NOTE]
> A great note should show a green confidence level. When you write your note, please ensure you have clearly articulated the intent, or lack thereof, and the primary reason (if the customer does not have intent or is blocked).

The following procedures provide step-by-step instructions to add, edit, and delete an entitlement status.

#### To add entitlement status

The following sequence demonstrates how to the add an entitlement status with a status note that generates a high confidence value. Remember, the **Enter Status Note** field is appropriate for capturing intent and reason.

> [!NOTE]
> If you want to provide additional status about the service, use the Overall Status Note on the Status tab. For instructions, see [Status tab](detailed-tenant-view-status-tab.md), and review the procedure [To Create Notes or Review Notes History](notes-library.md).

1. Enter **Status Note**.

![entitlement-status-services-add-entitlement-status.png](media/power-bi-reporting-guide/detailed-tenant-view-services-tab/entitlement-status-services-add-entitlement-status.png "Add Entitlement Status")

2. Select **Suggest**. The screen refreshes based on the information you entered in the Status Note.

The following screen shows an example of a great note.

![entitlement-status-services-add-entitlement-status-enter-status-note-suggest.png](media/power-bi-reporting-guide/detailed-tenant-view-services-tab/entitlement-status-services-add-entitlement-status-enter-status-note-suggest.png "Add Entitlement Status Suggest")

3. Select **Add**.

4. Move the Entitlements.

5. Select **Owner**.

![entitlement-status-services-add-entitlement-status-save.png](media/power-bi-reporting-guide/detailed-tenant-view-services-tab/entitlement-status-services-add-entitlement-status-save.png "Entitlement Status Services Add Entitlement Status Save")

6. Select **Save**.

![entitlement-status-services-saved.png](media/power-bi-reporting-guide/detailed-tenant-view-services-tab/entitlement-status-services-saved.png "Entitlement Status Services Saved")

In the next scenario, the screen shows an example of a marginal note, this note is marginal because a reason was not provided.

![entitlement-status-services-marginal-note.png](media/power-bi-reporting-guide/detailed-tenant-view-services-tab/entitlement-status-services-marginal-note.png "Marginal Note")

The following screen shows an example of a poor note. You can tell it is a poor note because of the confidence level indicator and because you cannot select Add. The status note does not provide enough information.

![entitlement-status-services-poor-note.png](media/power-bi-reporting-guide/detailed-tenant-view-services-tab/entitlement-status-services-poor-note.png "Poor Note")

#### To edit entitlement status

1. Select **Edit**.

2. Update your status note.

3. Select **Suggest**.

4. Select **Update**.

5. Select **Confirm**.

#### To delete entitlement status

The following example shows how to delete an entitlement status.

1. Select **Delete**.

The entitlements grid shows the five possible **consumption statuses** (typically referred to as L1 indicators or L1 statuses) with the number of entitlements assigned to each one (if any) and any relevant target date, reason, engineering reason, owner, notes, and next action date.

Review the table below for descriptions of the consumption (L1) status:

| Consumption (L1) status | Description  |
| ----------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Status Unknown          | Customer has not been successfully contacted to determine intent for eligible service entitlements. ​                                                                                                                                                                                                                      |
| In Progress             | Customer declares intent and are deploying and/or adopting the service, regardless of engagement scenario. This includes long running customers or customers who aren't planning on deploying for X amount of days.                                                                                                        |
| Blocked                 | Customer has intent to use the workload but there are some blocking issues that need to be removed with assistance from the Account or Engineering teams.                                                                                                                                                                  |
| No Intent               | Customer has no intent to deploy the service at any time.                                                                                                                                                                                                                                                                  |
| Duplicate/Invalid       | If there is a duplicate/invalid tenant, use this L1 status to remove their entitlements from all FTC reporting; for which, all service entitlements should be set to this status. You can also use this status to classify Outlook Mobile entitlements for tenants with Office ProPlus and Outlook Mobile but not Exchange |

For specific L1 to L3 taxonomy definitions and example scenarios, see [Status and Entitlement Home](l1l2l3-homepage-list.md).

For each consumption (L1) status, the following fields are available. Not all fields are available at all times.

|Field  |Definition  |
|---------|---------|
|Entitlements     |This is the number of entitlements assigned to that specific consumption (L1) status. The total number of entitlements assigned must match the total number of entitlements (including override) reported for the tenant.         |
|Target date     |This is the expected completion/end date for the consumption status. NOTE: Only In progress and blocked have target dates available.         |
|Reason (L2)    |This is the customers reason for the entitlements being assigned to the consumption status. NOTE: Only Status Unknown, Blocked, and No Intent have L2 reasons available to them.         |
|Engineering Reason (L3     |This is the more detailed reason that engineering has determined for the blockage. Only consumption statuses with a L2 reason set have an engineering reason available.         |
|Owner    |Person (contact or FTC role) that is responsible for owning the blockage. (Not available for in progress.)         |
|Notes    |Available space for notes that specific to the consumption status (available for all L1s).         |
|Next Action Date |Date defined for the next action on that consumption status.         |
|Engagement Start Date    |Displays the date the customer provided to specify when the customer is ready to engage with the FastTrack Manager to start the FastTrack process for deployment of a workload(s).         |

#### Technical Service Notes

Use the tools in [Create Notes](notes-library-notes-editor.md) to create notes for **Add new Technical Enablement note** and [Notes History](notes-library-latest-notes.md) to **View Technical Enablement note history**. Directly below the entitlements grid is a section called the *Technical Service Notes*. These notes are designed to provide the FM/FE with a place to include technical notes about the service that do not impact the consumption status.

![technical-service-notes-partners.png](media/power-bi-reporting-guide/detailed-tenant-view-services-tab/technical-service-notes-partners.png "Technical service notes")

> [!NOTE]
> Technical Service Notes should not be used for notes that impact the consumption status for the service. Impacts to consumption status should still go in the relevant consumption note section.

#### Add new Technical Enablement Note

1. When you select the **Add new Technical Enablement Note** option, you will go to the Notes Editor to [create a notes](notes-library-notes-editor.md).

![overall-notes-history-create-notes-partner.png](media/power-bi-reporting-guide/detailed-tenant-view-status-tab/overall-notes-history-create-notes-partner.png "Create Notes")

1. Add new note, then click **save**.

#### View Technical Enablement Notes

This section displays a history of **all** available notes for the tenant. The history shows **all** the notes by default. You can change the date range of notes displayed from the date range drop-down list. You can also filter the notes history by type of note category and by service.

1. If you wish edit notes for this customer, select **Notes History** to view all available [notes](notes-library-latest-notes.md).

![overall-notes-history-tab-partner.png](media/power-bi-reporting-guide/detailed-tenant-view-status-tab/overall-notes-history-tab-partner.png "Notes History")

>[!NOTE]
> The Overall Notes History section is now a consolidated display of all notes for the tenant (not just overall status notes).

#### Adoption Indicators

The Adoption Indicators are used to capture D.I.B.S. and S.S.A.T. data for the service.

Each field is a pre-defined set of options you can select.

![adoption-indicators-showing-editing.png](media/detailed-tenant-view-services-tab/adoption-indicators-showing-editing.png "Adoption indicators showing editing")

For specific guidance on capture D.I.B.S. and S.S.A.T. see the [guidance document](https://microsoft.sharepoint.com/teams/ftccm/FTOP/OneAdoptionWizard/Guidance_when_4+4_not_present.docx?web=1).

#### Data Migration

For services that are eligible for data migration, use Data Migration section to determine whether Microsoft will be responsible for migrating the service.

If the *Microsoft performing migration?* box is not checked, the dialog provides a drop-down list to define the reason Microsoft is not performing the migration as well as a notes field.

![data-migration-microsoft-not-performing-migration.png](media/power-bi-reporting-guide/detailed-tenant-view-services-tab/data-migration-microsoft-not-performing-migration.png "Data migration microsoft not performing migration")

If the *Microsoft performing migration?* box is checked, a new table appears that enables the user to define the type of migration and number of entitlements.

![data-migration-showing-no-scenario-selected.png](media/power-bi-reporting-guide/detailed-tenant-view-services-tab/data-migration-showing-no-scenario-selected.png "Data migration showing no scenario selected")

Select a scenario from the **Please Select** drop-down list and select **+ plus icon**. The scenario is added to the table and additional fields appear.

![data-migration-showing-migration-scenario.png](media/power-bi-reporting-guide/detailed-tenant-view-services-tab/data-migration-showing-migration-scenario.png "Data-migration showing migration scenario")

> [!NOTE]
> You can add multiple scenarios, but the total number of entitlements must exactly match the number of In Progress entitlements for the service.

#### Delivery

The Delivery section defines the Engagement Scenario and defines Delivery teams (members or groups). For Engagement Scenario, FTOP defaults to **Customer-Led with FTP Assist**.

![delivery.png](media/power-bi-reporting-guide/detailed-tenant-view-services-tab/delivery.png "Delivery")

Locate the name of the delivery team member from the **Delivery teams** drop-down list and select **+** plus icon.

> [!NOTE]
> The engagement scenario field is controlled by security role.

If the delivery team member is not authorized, he or she will see the following message. You do not have permission to modify the current Engagement Scenario. To update Engagement Scenario please make a request through FTC Help [https://aka.ms/FTCHelp](https://aka.ms/FTCHelp) and select category Engagement Scenario Change.

![engagement-scenario-with-drop-down-menu-expanded.png](media/power-bi-reporting-guide/detailed-tenant-view-services-tab/engagement-scenario-with-drop-down-menu-expanded.png "Engagement scenario with drop-down menu expanded")

#### FastTrack-ready partner forecasting

The following fields capture the dates for when the service it planned to meet the milestones for 10% and 40% active use. The Max AU date is not currently used.

1. Enter the dates from the date picker, if available, for the Target Date for 10% AU and Target Date for 40% AU.

1. Select **Save**. If there is no Submitted Date (RFA) visible, then the forecast dates cannot be saved, and an error will appear. The dates entered need to be in chronological order. For example, the Target Date for 10% AU cannot be earlier that the Submitted Date (RFA) and the same is true for Target Date for 40% AU, etc.

![fasttrack-partner-forecast-showing-no-submitted-date-rfa.png](media/power-bi-reporting-guide/detailed-tenant-view-services-tab/fasttrack-partner-forecast-showing-no-submitted-date-rfa.png "FastTrack partner forecast showing no submitted date rfa")

3. Select **Save**. You will return to the services list.

Each time you save a new date in either of these fields, the history of this change records in the History table.

![fasttrack-partner-showing-no-submitted-date-rfa.png](media/power-bi-reporting-guide/detailed-tenant-view-services-tab/fasttrack-partner-showing-no-submitted-date-rfa.png "FastTrack partner showing no submitted date rfa")

#### Assignments

Assignments are managed through the contextual menu in Portfolio View. See [Assignment](portfolio-view-summary-view.md).

![assignments-editing.png](media/power-bi-reporting-guide/detailed-tenant-view-services-tab/assignments-editing.png "Assignments editing")

#### Note History

At the bottom of the page is a new note history section. This section displays a running history of service entitlement and technical service notes related to the service. The most recent notes are displayed at the top.

![service-note-history.png](media/power-bi-reporting-guide/detailed-tenant-view-services-tab/service-note-history.png "Service note history")

### Viewing service details

When View is selected, the service detail information opens in a read-only format. This is the only option available to users that are not assigned to the tenant.

The view page is divided in seven sections: entitlement status details, technical service notes, adoption indicators, data migration, delivery, assignments, and notes history.

This section will not go into detail about this page because it is a read-only version of the service editing page.

![service-entitlement-status-detail.png](media/power-bi-reporting-guide/detailed-tenant-view-services-tab/service-entitlement-status-detail.png "Service entitlement status detail")

## Next Steps

- To learn about the next tab, see the [Contacts tab](detailed-tenant-view-contacts-tab.md).

[Home](http://partner-docs.microsoft.com)
  