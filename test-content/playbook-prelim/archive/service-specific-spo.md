---  
# required metadata  
title: FastTrack Playbook - SharePoint Online (SPO)
description: FastTrack Playbook - SharePoint Online
ms.author: larryd  
manager: cadenli  
ms.date: 4/10/2019  
ms.topic: playbook  
ms.prod: non-product-specific  
ms.custom: internal-playbook  
ft.audience: internal  
ft.owner: larryd
---  
[!INCLUDE [Playbook Feedback](./includes/questions-feedback.md)]  

# SharePoint Online (SPO) Delivery Process

Program Manager: **Larry Draper**  
Phase: **Engagement**

## Overview
This guidance is for all new customers (very early in the engagement), customers re-engaging on additional workloads, and for all High, High (overridden), and Medium priority customers.

## Objectives
Encourage customers to deploy SharePoint to share and work on all files from any device.  

## Approach
Primary Role: **FastTrack Manager**  
Applies To: **SharePoint**

1. Encourage customers to deploy SharePoint to share and work on all files. FastTrack Managers (FM) deliver the SharePoint pitch/BVD deck linked to task 3737 to **every SharePoint eligible customer** that does NOT have Active Usage (AU) with whom they work, regardless of previously recorded intent.
   -  Mark the task **COMPLETE** when delivered.
   -  For customers with intent to deploy SharePoint:
        -  Update Target Date and Next Action Date for the in-progress entitlements.
        -  Update SharePoint In-Progress Entitlement Status Notes to indicate when SharePoint will be implemented in the customer deployment timeline, in relation to other services and priority. Refer to Example 2 below for specific details. 
        -  Update Service Status (Status > Service Status > SharePoint).
   -  For customers who are blocked or have no intent to deploy OneDrive, update SharePoint [L1/L2/L3](l1l2l3-homepage-list.md) statuses and Entitlement Status Notes after the pitch is delivered.

Primary Role: **FastTrack Engineer**  
Applies To: **SharePoint**

2. If the customer **declines the BVD**, the following reasons are tracked and followed up on accordingly. 
   -  Mark task 3737 **CANCELLED**.
   -  Add “SharePoint BVD Declined:” and the reason why in the Entitlement Status Notes.

Primary Role: **FastTrack Manager**  
Applies To: **SharePoint**

3. (NEW) If the customer is unresponsive to 3 attempts to have the BVD, the following reasons are tracked and followed up on accordingly. 
   - Mark task 3737 **CANCELLED**.
   - Add “Unresponsive” in the Entitlement Status Notes.

**Example 1:** You have delivered the SharePoint pitch/BVD and the customer is ready to deploy SharePoint immediately. The FM updates the following:
   - Task 3737 is marked **COMPLETE**.
       -  Target Date = (date based on immediate deployment schedule)
       -  Entitlement Notes = “After BVD discussion, customer intends to deploy SharePoint”
       -  Next Action Date = date when the FastTrack Engineer (FE) begins helping customer implement SharePoint
       -  SharePoint Service Status = Initiate

**Example 2:** A customer is in the middle of an Exchange migration and SharePoint was discussed. They declined to hear the pitch, but plan to deploy SharePoint after the Exchange migration is completed. The FM updates the following:
   - Task 3737 is marked **CANCELLED**.
       -  SharePoint In-Progress Entitlement Status Notes = “Serial: Exchange#1, SharePoint#2 (SharePoint BVD Declined)”
       -  SharePoint Service Status = Initiate - Serialized 

### FastTrack Center (FTC) SharePoint FAO
This Frequently Asked Questions (FAQ) is meant to be a fast-simple means to surface all the questions around “SharePoint First” and the reasoning on the data point requirements. SharePoint success is critical to FTC success, so we need to take steps to assure we can get significant gains in usage of the product to gain momentum with our customers.

**Question:** Why is there a need to perform the big push and re-discuss SharePoint with customers that I have already spoken to?

**Answer:** Previously there was not a formal, standardized SharePoint BVD. This new SharePoint BVD may provide new/additional insight to the customer.

**Question**: Do I need to update task 3737 if I am working on scheduling the BVD?

**Answer**: If scheduling of the BVD meeting is more than a few days or a week out, please update the task to “in progress” so there is an indication as to the effort being performed. Once you deliver the BVD, mark “complete” or “cancelled” if the customer declines the discussion. Continue to follow previous examples on notes and other required fields.

**Question**: What do I do if my customer already has **AU greater than 10%?

**Answer**: If AU > 10%, mark task 3737 **CANCELLED** and include "AU > 10%" in the Entitlement Status Notes.

**Question**: Do I still need to deliver and update the task if the Account Team has already delivered a SharePoint pitch to the customer?

**Answer**: It depends. If you participated and know the new pitch resonated with the customer, then it is probably not necessary. However, you should update the task as delivered and notate "who and results" in the entitlement notes. If you are uncertain, re-deliver the message if the customer agrees and make appropriate updates to the FastTrack Orchestration Portal (FTOP).

**Question**: Do I need to deliver the BVD again if my customer is already piloting SharePoint?

**Answer**: No, if some other kind of pitch deck was delivered. Simply mark the task as **COMPLETE**. If no other pitch deck was delivered, the SharePoint BVD should be delivered if the FM feels it will benefit the customer. Otherwise, simply mark the task as **CANCELLED**.

**Question**: Are the Next Action Date field and Entitlement Status Notes field required to be updated? Why are we not able to use other Notes fields and the Next Action Date field in the Overall Status section?

**Answer**: The Entitlement Status Notes are the only notes fields that flow to the reporting database. The Next Action Date in the SharePoint section of the Services tab is conveniently located next to the Entitlement Status Notes field, is service-specific, and is the field we will be tracking for appropriate status updates. 

#### FTOP Tasks
| Task ID| Task Description | (M) Mandatory (O) Optional | FastTrack Role |
| -------| ---------------- | -------------------------- | ---------------| 
|3737| Data Points (SharePoint Service)|	M | FM |
### Task 3737 Statuses
| Status | (M) Mandatory (O) Optional | FastTrack Role |
| -------| ---------------- | -------------------------- |
| Service Target Date |	M | FM |
| Service Next Action Date | M | FM |
| Service Entitlement Notes | M | FM |
| Service Status |	M | FM |
| Hashtags | O | FM |

Only use the status values provided in the following table.
### Task 3718 Status Explained
| Status Value| Description | 
| -------| ---------------- |
| Not Started | Default- no FM action has been performed for this task |
| In Progress | FM is performing activities against the task, or has scheduled a discussion with the customer. |
| Complete    | FM has completed the actions required in this task. |
| Cancelled   | FM has tried to deliver the actions required, but the actions were declined by the customer or they do not apply. |

The following hashtags are to help identify customers in certain scenarios. More than one hashtag in notes is sufficient. These hashtags are specific to SharePoint service reporting tasks. 
### Hashtags Explained
| Hashtag |  Description | 
| -------| ---------------- |
| #SPOblocker – no intent | If the customer would otherwise like to use SharePoint, but a specific issue prevents them from moving forward, use this hashtag (not related to serialized deployments). |
| #Compete | If the customer is looking to compare SharePoint to another product they already, use this hashtag. |
| #Pilot | If the customer will deploy a pilot to get users to leverage SharePoint as part of their business process or to find areas where SharePoint will help with business process, use this hashtag. |
| #Unresponsive | If the customer does not respond to 3 attempts to discuss SharePoint BVD. |
| #Compliance | The customer will not use SharePoint due to compliance considerations. |
| #FieldDeliveringBVD | If the customer’s Account Team wishes to deliver the BVD or already delivered the BVD. |

## Key Inputs
Establish intent to deploy SharePoint Online (SPO).

## Key Outputs
Understanding of customer's intent to use SPO and any impediments or blockers keeping the customer from deploying SPO.

## Next Steps
After service is deployed, leverage SPO to drive customer AU.

## Data Collected

| Data Field/Common Name | Required for this Process | First Entered into FTOP |
| ---------------------- | ------------------------- | ----------------------- |
| Consumption Status / L1 | Yes | Yes |
| Entitlements	| Yes |	Yes |
| Reason / L2 | Yes | Yes |
| Engineering Reason / L3	| Blocked & No Intent only |	Yes |
| Next Action Date | Yes	| Yes |
| Service Entitlement Notes	| Yes	| Yes |
| Engagement Scenario |	Yes	| Yes |
| DIBS |	Yes	| Yes |
| Adoption Indicators | Yes | Yes |

## Success Measurements

| KPI Name | Definition | Green/Yellow/Red Thresholds |
| ----- | -------- | -------- |
| AU	| All up	| Green: >40%, Yellow: 20%-40%, Red <20% |  

## Ring Updates

| CMR# | CMR Name | CMR Link |
| ----- | --------| -------- |
| None  |     N/A    |    N/A     |

## Refresh Summary

| Date    | Who Changed     | What Changed     | Notes |
| ------- | --------------- | ---------------- | ----- |
|12/05/18 |	Lori Goff 	| Formatting and editing pass |
|12/05/18 | Larry Draper| Playbook created |
