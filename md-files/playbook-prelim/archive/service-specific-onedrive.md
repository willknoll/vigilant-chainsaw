---  
# required metadata  
title: FastTrack Playbook - OneDrive for Business (ODfB)
description: FastTrack Playbook - OneDrive for Business 
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
# OneDrive for Business (ODfB)

Program Manager: **Larry Draper**  
Phase: **Process**

## Overview
This guidance is for all new customers (very early in the engagement), customers re-engaging on additional workloads, and for all High, High (overridden), and Medium priority customers.

## Objectives
Encourage customers to deploy OneDrive to share and work on all files from any device.  

## Approach
Primary Role: **FastTrack Manager**  
Applies To: **OneDrive**

1. FastTrack Managers (FM) deliver the OneDrive pitch/BVD deck linked to task 3718 to **every OneDrive-eligible customer** with whom they work, regardless of previously recorded intent. New capabilities have been added to OneDrive. Refer to the Example 3 below for specific details.
   -  Mark the task **COMPLETE** when delivered.
   -  For customers with intent to deploy OneDrive for Business (ODfB):
        -  Update Target Date and Next Action Date for the in-progress entitlements.
        -  Update OneDrive In-Progress Entitlement Status Notes to indicate when OneDrive will be implemented in the customer deployment timeline, in relation to other services and priority. Refer to Example 2 below for specific details. 
        -  Update Service Status (Status > Service Status > OneDrive).
   -  For customers who are blocked or have no intent to deploy OneDrive, update OneDrive [L1/L2/L3](l1l2l3-homepage-list.md) statuses and Entitlement Status Notes after the pitch is delivered.

Primary Role: **FastTrack Manager***  
Applies To: **OneDrive**

2. If the customer **declines the BVD**, the following reasons are tracked and followed up on accordingly. 
   -  Mark task 3718 **CANCELLED**.
   -  Add “OneDrive BVD Declined:” and the reason why in the Entitlement Status Notes.

Primary Role: **FastTrack Manager***  
Applies To: **OneDrive**

3. (NEW) If the customer is unresponsive to 3 attempts to have the BVD, the following reasons are tracked and followed up on accordingly. 
   - Mark task 3718 **CANCELLED**.
   - Add “#Unresponsive” in the Entitlement Status Notes.

**Example 1:** You have delivered the OneDrive pitch/BVD and the customer is ready to deploy OneDrive immediately. The FM updates the following:
   - Task 3718 is marked **COMPLETE**.
       -  Target Date = (date based on immediate deployment schedule)
       -  Entitlement Notes = “After BVD discussion, customer intends to deploy OneDrive”
       -  Next Action Date = date when the FastTrack Engineer (FE) begins helping customer implement OneDrive
       -  OneDrive Service Status = Initiate

**Example 2:** A customer is in the middle of an Exchange migration and OneDrive was discussed. They declined to hear the pitch, but plan to deploy OneDrive after the Exchange migration is completed. The FM updates the following:
   - Task 3718 is marked **CANCELLED**.
       -  OneDrive In-Progress Entitlement Status Notes = “Serial: Exchange#1, OneDrive#2 (OneDrive BVD Declined)”
       -  OneDrive Service Status = Initiate - Serialized
       
**Example 3:** You have already delivered the OneDrive pitch a few months ago and the customer did not see enough business value to move forward. There is a need to try to re-promote the OneDrive business value based on new product capabilities. 
   - Ask the customer if they have heard about the new [OneDrive Capabilities Shared at the Ignite Event](https://techcommunity.microsoft.com/t5/OneDrive-Blog/OneDrive-Announcements-at-Ignite-2017/ba-p/108533).
   - If the customer is not aware of new capabilities, ask to share the updated BVD with them.
   - Task 3718 is marked **COMPLETE** if shared / **CANCELLED** if declined.
       -  Update [L1/L2/L3](l1l2l3-homepage-list.md) statuses, Target Date, and Next Action Date
       -  Entitlement Status Notes = “Pitched BVD and customer decided to deploy” (or not to deploy), or "Declined updated BVD and customer decided to deploy” (or not to deploy)
       -  OneDrive Service Status = Initiate (if applicable)

#### FTOP Tasks

| Task ID| Task Description | (M) Mandatory (O) Optional | FastTrack Role |
| -------| ---------------- | -------------------------- | ---------------| 
|3718| Deliver OneDrive Business Value Deck |	M | FM |

## Key Inputs
Establish intent to deploy ODfB.

## Key Outputs
Understanding of customer's intent to use ODfB and any impediments or blockers keeping the customer from deploying ODfB.

## Next Steps
After service is deployed, leverage the OneDrive Adoption Program to drive customer active usage (AU).

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
|11/15/18 |	Larry Draper | Updated task information|
|10/10/18 |	Lori Goff	| Playbook created |

