---
title: Status Definitions
description: FTC Insights Status/State represents the current progress of an item through triage
author: Wendy Wilkes
ms.author: wwilkes
manager: jeffmeal
ms.date: 01/23/2020
ft.audience: internal
ft.owner: wwilkes
---
# Status Definitions
The FTC Insights Status represents the current progress of an item through triage.   
Status in the submission portal maps to State for the Triage Team.
## Active
| Status names | Definition |
| :-------------- | :---------------- |
| Emerging Issue | The default state when a new FTC Insight is created |
| More details/clarification required | For use by Tier 1 triage SMEs only - the expectation is that the Tier 1 triage SME will facilitate reaching out to the submitter to obtain the necessary information and updating the item to take further action |
| Escalated | The item has passed Tier 1 Triage and found to be eligible for escalation to Tier 2 |
| Assigned | A triage FE or workload owner is assigned to this issue to work on it (repro, get more info from submitter, research, etc.) |
| Building Impact (more evidence needed) | The triage team is aware of this item but the occurrence or impact is not at the level required by the workload to be escalated outside of the FTC for resolution |
| Pending Resolution | Resolution of the item has been accepted for follow up by each organizational owner (this does not mean the item was approved, it means there is a plan for managing the feedback and no further action is required of the triage team) |

## Completed
Selecting ***Resolved*** or ***Closed*** in the submission portal filter will show all sub-types

| Status names | Definition |
| :-------------- | :---------------- |
| Resolved (Deployed) | Solution delivered or issue addressed in production |
| Resolved (Accepted) | Solution has been agreed to by the external action owner and will be accomplished at a later date (provide rough timelines if available) |
| Resolved (Education) | Submitter has been provided documentation, training, or direction to resolve the item (known issue) |
| Resolved (Workaround) | Workaround has been found |
| Resolved (SPO) | Item was resolved prior to backend migration to Azure DevOps |
| Closed | Not used for reporting |
| Closed (Denied) | Escalation has been rejected and the reason should be clear |
| Closed (Duplicate) | Insight was not unique (if original item is still active then the +1 occurrences for the new item will be reassigned - if original item is completed the new item will be closed) |
| Closed (UserVoice) | Submitter has been instructed to refer the customer to UserVoice |
| Closed (Refer to CSS) | Redirected to Support - break/fix issue or not related to onboarding |
| Closed (Low Impact) | The minimum impact required for external escalation has not been met |
