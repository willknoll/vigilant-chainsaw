---  
# required metadata  
title: FastTrack Playbook - Outlook Mobile (OM)
description: FastTrack Playbook - Outlook Mobile 
ms.author: danr  
manager: cadenli  
ms.date: 4/08/2019  
ms.topic: playbook  
ms.prod: non-product-specific  
ms.custom: internal-playbook  
ft.audience: internal  
ft.owner: danr
---   
[!INCLUDE [Playbook Feedback](./includes/questions-feedback.md)]  

# Outlook Mobile (OM)

Program Manager: **Dan Rowley**  
Phase: **Assess and Enable**

## Overview
For all new customers (very early in the engagement stage) and/or any customers currently deploying Exchange Online (EXO) or Enterprise Mobility + Security (EMS) workloads, we must assure each EXO and EMS end-user has the BEST mobile app to access their email, calendar, contacts, and files by delivering the appropriate business value deck.

## Objectives
   -  FTC has a goal to gain 8.1M active users for Outlook Mobile (OM). The year-end total should be 16.8M overall.
   -  We must increase awareness of key differentiating features of the OM app by having Delivery FastTrack Managers (FM) and FastTrack Engineers (FE) present the OM Business Value deck with all new customers entering the FastTrack Center (FTC) and existing customers deploying EXO or EMS.
   -  We must drive active usage (AU) by attaching OM deployment to customers currently deploying EXO and/or EMS. 

## Approach
Primary Role: **FastTrack Manager**  
Applies To: **Exchange**

### New Exchange Online or Current Customer with EXO Who Do Not Wwn EMS Licenses
Review the [Power Business Intelligence (BI) Report](http://aka.ms/FTCOutlookMobile) attached to task 3278, particularly if the customer is already using EXO. The idea is to determine if there is any native mobile client usage before discussing OM with the customer and be more prepared for the Business Value Discussion (BVD). 

Encourage new customers and existing customer currently using EXO to deploy OM to access their EXO mailbox and secure their company data. 
1.	FM to deliver “Outlook Mobile Business Value Pitch (EXO Attach)” deck linked to task #3278 in the Assess phase. (FE to assist with security discussion).
    a. Mark the task **COMPLETE** when delivered. 

    b. Update Target Date for the in-progress entitlements.

    c. Update OM In-Progress Entitlement Status Notes to indicate when OM will be implemented in the customer deployment timeline in relation to other services and priority.

    d. Update Service Status (Status > Service Status > OM).

    e. For customers who are blocked or have no intent to deploy OM, update OM [L1/L2/L3](l1l2l3-homepage-list.md) statuses and Entitlement Status Notes after the deck is delivered.

    f. Monitor the enablement of the OM capability in order to know when to engage the Customer Success Manager (CSM) as noted in the “Support Success Execution” playbook and update task 3733: “Outlook Mobile - Post Enablement Field Handshake”.

2.	If customer declines the BVD, the following reasons are tracked and followed up on accordingly:  
    a.	Mark task 3278 **CANCELLED**. 
    b.	In the Entitlement Status Notes, add “Outlook Mobile BVD Declined:” including why the customer may not be moving forward with the workload immediately after the BVD is delivered.

Primary Role: **FastTrack Manager**  
Applies To: **Exchange**

### New Exchange Online or Currently Migrating Customers with EMS Licenses
1. Review the [PowerBI Report](http://aka.ms/FTCOutlookMobile) attached to task 3278, particularly if the customer is already using Exchange Online. The idea is to determine if there is any native mobile client usage before you discuss OM and be more prepared for the BVD discussion. 

Encourage customers deploying EXO with EMS licenses to deploy OM to access their EXO mailbox and secure their company data. 

2.	FM to deliver “Outlook Mobile with EMS Business Value Pitch” deck found in task 3278 in Assess phase. (FE to assist with security discussion).
    a.	Mark the task **COMPLETE** when delivered.

    b.	Update Target Date for the in-progress entitlements (OM, AADP, and Intune). 

    c.	Update OM, Azure Active Directory Premium (AADP), and Intune In-Progress Entitlement Status Notes to indicate when OM will be implemented in the customer deployment timeline in relation to other services and priority.

    d.	Update Service Status (Status > Service Status > (OM, AADP, and Intune).

    e.	For customers who are blocked or have no intent to deploy OM update OM [L1/L2/L3](l1l2l3-homepage-list.md) statuses and Entitlement Status Notes after the pitch is delivered.

    f.	Monitor the enablement of the OM capability in order to know when to engage the CSM as noted in the “Support Success Execution” playbook and update task 3733: “Outlook Mobile - Post Enablement Field Handshake”.

3.	If customer declines the discussion, the following reasons are tracked and followed up on accordingly.  
        a.	Mark task #3278 **CANCELLED**. 
    b.	In the Entitlement Status Notes, add “Outlook Mobile BVD Declined:” including why the customer may not be moving forward with the workload immediately after the BVD is delivered.

Primary Role: **FastTrack Engineer**  
Applies To: **EMS**

### Deploying Outlook Mobile without EMS

For all Non-EMS customers 
1.	FE will direct the customer to follow the configuration instructions for the Public OM Wizard (Office) found in task 3267.
2.	Mark the task 3267 **COMPLETE** when the app is configured.

Primary Role: **FastTrack Engineer**   
Applies To: **EMS**

### Deploying Outlook Mobile with EMS

For EMS customers, use additional guidance to help provide further protection with AADP conditional access and basic Intune app protection policies to help secure Outlook and protect corporate data. The FE will refer to task 3267 for configuration guidance. 
1.	Follow the configuration guidance Public: OM Wizard (Office).  
2.	Follow Additional guidance - Securing OM (using EMS).
3.	Mark the task 3267 **COMPLETE** when app is configured and additional Intune app protection and AADP Conditional access policies are applied.

#### FTOP Tasks

| Task ID| Task Description | (M) Mandatory (O) Optional | FastTrack Role |
| -------| ---------------- | -------------------------- | ---------------| 
|3278| Deliver Outlook mobile BVD |	M | FM |
|3733| Outlook Mobile - Post Enablement Field Handshake | M | FM | 
|3267| Configure Outlook mobile | M | FE |

## Key Inputs
Establish intent to deploy the OM application.

## Key Outputs
Understanding of customers intent to use the OM application and any impediments or blockers to prevent the customer from deployment.

## Next Steps

## Data Collected

| Data Field/Common Name | Required for this Process | First Entered into FTOP |
| ---------------------- | ------------------------- | ----------------------- |
| DIBS                   | Yes                       | Yes                     |
| FM                     | Yes                       | Yes                     |
| Overall Status         | Yes                       | No                      |

## Success Measurements

| KPI Name | Definition | Green/Yellow/Red Thresholds |
| ----- | -------- | -------- |
| AU      |        |        |

## Ring Updates

| CMR# | CMR Name | CMR Link |
| ----- | --------| -------- |
|53886 | Outlook Mobile - Update Scale Guidance and motion |[CMR-53866](https://o365fasttrack.visualstudio.com/Program%20Management/_workitems/edit/53886)|
|60199 | Outlook Mobile with EMS (Intune app protection and AADP CA)|[CMR-60199](https://o365fasttrack.visualstudio.com/Program%20Management/_workitems/edit/60199)|

## Refresh Summary

| Date    | Who Changed     | What Changed     | Notes |
| ------- | --------------- | ---------------- | ----- |
|1/31/19 | Dan Rowley |	Added visibility into task 3733 to perform CSM handoff|
|1/22/19 | Roya Ghorbani | Removed wave scenario and GRT |
|12/11/18 |	Dan Rowley	| Updated to account for wave actions|
|11/01/18 |	Roya Ghorbani	| Created document |




