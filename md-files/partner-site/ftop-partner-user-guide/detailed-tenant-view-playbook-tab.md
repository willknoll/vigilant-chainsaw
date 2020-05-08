---
# required metadata
# required metadata
title: FTOP Partner User Guide
description: Playbook Tab
author: Celia Kennedy
ms.author: v-cekenn
manager: pagrim
ms.date: 1/28/2020
ms.topic: ftop-partner-user-guide
ms.prod: non-product-specific
ms.custom: ftop-partner-user-guide
ft.audience: partner
ft.owner: pagrim
---
# Playbook Tab

## Overview

Use the Playbook Tab to view playbook processes, steps, and to update tasks that occur during customer engagement. You can filter on services, search for key words, view work items, view role and status, and set status directly on tasks.

> [!NOTE]
> When you first open the Playbook tab the display is filtered on your role.

![playbook-tab-detail-when-opened-partner.png](media/detailed-tenant-view-playbook-tab/playbook-tab-detail-when-opened-partner.png "Playbook Tab Detail")

### Services

The default service is set to **Core Onboarding**. Core Onboarding is done one time for a tenant and it applies to every service. You can change to another service to see additional playbook content.

![playbook-tab-detail-core-onboarding-partner.png](media/detailed-tenant-view-playbook-tab/playbook-tab-detail-core-onboarding-partner.png "Playbook Tab Detail Core Onboarding")

For example, if you wanted to set the assigned role to FastTrack Engineer for the Exchange Service, in the Assess phase, you would do the following:

1. Select **Exchange**
2. Select **Assess phase**
3. Set assigned role to **FastTrack Engineer**

![playbook-tab-detail-exchange-access-fe-partner.png](media/detailed-tenant-view-playbook-tab/playbook-tab-detail-exchange-access-fe-partner.png "Playbook Tab Detail Exchange Access FE")

### Assigned Role

The page displays **tasks that are associated with** your assigned role. In the following diagram, the assigned role is Regional Manager.

![playbook-tab-detail-assigned-role-partner.png](media/detailed-tenant-view-playbook-tab/playbook-tab-detail-assigned-role-partner.png "Playbook Tab Detail Assigned Role")

If you wanted to see more playbook items, you could set the assigned role filter to **All Roles**.

### Status

When you are viewing the Playbook Tab, you can filter on **status.**

![playbook-tab-detail-status-partner.png](media/detailed-tenant-view-playbook-tab/playbook-tab-detail-status-partner.png "Playbook Tab Detail Status")

The work performed is divided into phases.

### Search Criteria

Search covers **all tasks and filters in the view of the tasks** to those that match the search criteria. You can search within the current selected services. For example, you could search for tasks about authentication.

#### To search for tasks that relate to authentication

1. Select Service, for example, Core Onboarding
2. Search for *authentication*

![playbook-tab-search-partner.png](media/detailed-tenant-view-playbook-tab/playbook-tab-search-partner.png "Search")

> [!NOTE]
> If the first task found is in a different phase than what is selected, the display moves to the *next* phase that contains a visible task. For example, if you are in the Initiate tab when you search for the word migrate, the **Migrate** Tab appears as the first task with the word migrate in the name.

## Playbook Structure

The Playbook structure consists of a playbook process, playbook step, and tasks, and it displays in a hierarchical order.

![playbook-tab-detail-playbook-structure.png](media/detailed-tenant-view-playbook-tab/playbook-tab-detail-playbook-structure.png "Playbook Tab Detail Playbook Structure")  

### Playbook Process

The highest level group is a process.

![playbook-tab-process-partner.png](media/detailed-tenant-view-playbook-tab/playbook-tab-process-partner.png)

A process has an arrow with book icon ![playbook-arrow-and-book-icon](media/detailed-tenant-view-playbook-tab/playbook-arrow-and-book-icon.png "arrow and book icon") expand the arrow to display the step.

### Playbook Step

Steps with arrows![playbook-tab-arrow-icon.png](media/detailed-tenant-view-playbook-tab/playbook-tab-arrow-icon.png "Arrow Icon") to the left of them have tasks. Expand the arrow to display the task. Some steps require attention, you can hover over the tooltip to see the required task. Steps are not used for tracking purposes.

![media](media/detailed-tenant-view-playbook-tab/playbook-tab-step-partner.png)

### Tasks

Task are used to provide status.

![media](media/detailed-tenant-view-playbook-tab/playbook-tab-task-partner.png)

Tasks with a red asterisk ![red-star.png](media/detailed-tenant-view-playbook-tab/red-star.png "Red-star") are mandatory and must be completed when applicable to a tenant or specific service. You can quickly find mandatory tasks if you expand the parent task that displays the red information icon ![red-information-icon.png](media/detailed-tenant-view-playbook-tab/red-information-icon.png "Red-information-icon").

When you select a task, a dialog appears displaying task details. This dialog is divided into three sections: *Task*, *Assigned Role*, and *Status*.

The task overview displays:

- The tasks required

- A drop-down Status list for the task:

    - Not Started
    - Not Required
    - In Progress
    - Complete
    - Paused-Customer Delay
    - Deferred-Customer Extended Delay
    - Warning
    - Blocked-Pending Remediation
    - Blocked-Technical-Customer
    - Blocked-Business
    - Blocked-Other
    - Blocked-Technical-MS
    - Cancelled

- A drop down list for Assigned Role:
    - All Roles
    - App Assure Manager
    - FastTrack Architect v2
    - FastTrack Manager
    - FastTrack Partner Manager
    - FastTrack Solution Architect
    - Get Modern FTA
    - Migration Engagement Lead
    - Migration Velocity Manager
    - Regional Manager
    - SME

![playbook-tab-create-remediation-checklist-partner.png](media/detailed-tenant-view-playbook-tab/playbook-tab-create-remediation-checklist-partner.png "Create ")

#### To save your updated task

1. Update the task status, percentage complete, or responsible role, click **Save**

![media](media/detailed-tenant-view-playbook-tab/playbook-tab-task-update-status.png)

Tasks may also include links to wizards or external files. These links display at the top of the task overview section.

#### To save your updated tasks using checkbox

1. Select the checkbox

![media](media/detailed-tenant-view-playbook-tab/playbook-tab-task-use-status-drop-down-to-save-partner.png)

#### To save your updated tasks using status drop-down menu

1. Select the status from the drop-down menu

![media](media/detailed-tenant-view-playbook-tab/playbook-tab-task-use-status-drop-down-to-save-partner.png)

#### To view time entry

1. Expand Time Entry
2. You will be prompted to start time entry, click **Start**

![playbook-tab-detail-task-detail-window-time-entry.png](media/detailed-tenant-view-playbook-tab/playbook-tab-detail-task-detail-window-time-entry.png "Playbook Tab Detail Task Detail Window Time Entry")

## Next Steps

- To learn about time entry, wizard results, and notes, see the [Time tab](detailed-tenant-view-time-tab.md "Time Tab").

[Home](http://partner-docs.microsoft.com)
