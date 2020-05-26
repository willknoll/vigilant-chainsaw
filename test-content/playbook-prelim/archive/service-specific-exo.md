---  
# required metadata  
title: FastTrack Playbook - Exchange Online (EXO)
description: FastTrack Playbook - Exchange Online
ms.author: danr  
manager: cadenli  
ms.date: 4/05/2019  
ms.topic: playbook  
ms.prod: non-product-specific  
ms.custom: internal-playbook  
ft.audience: internal  
ft.owner: danr
---  
[!INCLUDE [Playbook Feedback](./includes/questions-feedback.md)] 

# Exchange Online (EXO)

Program Manager: **Dan Rowley**  
Phase: **Migration**

## Overview
This guidance is not meant to replace the complete Exchange process, rather only to provide targeted guidance to assure customers acquire the most mailboxes enabled/migrated from the engagement.

## Objectives
 -  FastTrack Center (FTC) has a goal to gain 16.8M active users for Exchange Online and achieve an average active entitlement (AE)/quality entitlement (QE) of 50%. This means each customer FTC works with should end up with greater than 50% active usage (AU) for their Exchange entitlements.  
 -  FastTrack Managers (FM) should understand the active mailbox intention post migration as part of their discussion with the customer. *It is not enough to just know they want to use or migrate to Exchange, we should understand how many licenses they will use by the time we are done with their migration.
 -  Any mailboxes that will be retained on-premises post-migration should be noted in the FastTrack Orchestration Portal (FTOP) and confirmed with the Account Team.  
 -  Refer to the following Driving EXO AU diagram for the basic flow the FM should follow.

 [![Driving EXO AU](media/service-specific-exo-au.png)](media/service-specific-exo-au.png)

## Approach
Primary Role: **FastTrack Manager**  
Applies To: **Exchange**

### Blocked and No Intent Scenarios - Blocked Key Motions
 1. Do not be concerned on split entitlements- if there is a blockage or no intent for a subset of licenses please designate this issue by using L2/L3.
 2. Identify in the Blocked services status any blockers the customer may be hitting that are preventing enablement or migration. 
    -  Refer to [L1/L2/L3 Guidance](l1l2l3-homepage-list.md) for blocker types.
    -  Record in the blocked service status notes any blocker details.
3. For any managed customers who are blocked be sure to reach out to the ATU for help resolving issues.
4. For any non-managed customer or for accounts where the ATU is not able to resolve impediments you should escalate blocked customers to your TM or PSM so we can try to move the customer forward.

Primary Role: **FastTrack Engineer**  
Applies To: **Exchange**

 ### Escalation Process in Detail
 When a customer is trying to prepare to use a service the FE should be able to help the customer move forward through FTC onboarding process. If there are issues that come up please assure you use the following resources to keep the customer moving forward. We should not allow a customer to “go dark” while they work on a support issue.
 1. If the FE is having issues with finding solutions to any asks from the customer, confirm they are engaging Exchange SMEs. 
    -  User [FTC Resource Request Tool](https://microsoft.sharepoint.com/teams/ftccm/SitePages/FTC%20Resource%20Request.aspx) to get a SME
    -  Stay aware of any challenges the customer may be having issues with in case a support case is needed. 
    -  For errors or questions regarding batches during migration the assigned MVM should be engaged to assist in those errors. (Only after the prerequisites to migration are completed.)
 2. If the FM/FE/MVM cannot find a solution to help a customer work through an unexpected error while onboarding or there is a problem with FTC process, there are two options:
3. Open a CSS support ticket for technical issues
    -  Work with the TAM or customer to open a CSS support ticket if they already have this capability. 
    -  If the customer does not have an account team or cannot open a case- work with the FE to engage an FE LEAD to see if we can help the customer by following the [FTC Support Escalation Procedure](https://microsoft.sharepoint.com/:w:/r/teams/ftccm/_layouts/15/WopiFrame.aspx?sourcedoc=%7b4A1A8115-AF94-4A3B-B7D5-DF01FDCF9E40%7d&file=FTC%20Escalation%20Procedure.docx&action=default).
4. Open [FTC Insight](https://microsoft.sharepoint.com/teams/ftci/SitePages/Home.aspx) for problems with FTC process.
    -  This will generally be something FE can drive but should be done in partnership between FM and FE.
    -  Issues that need advanced support get escalated weekly to CXP OPS team to try to find out of process solutions. 
5. For FTC migration process related insights please use “FTC Migration” as the issue type.

Primary Role: **FastTrack Manager**  
Applies To: **Exchange**

### New Exchange Online or Current Customer with EXO <10%

AU should be driven consistently above 50% AU, which means we need to make sure we enable Exchange for all customers and identify any challenges to their enablement and migration to Exchange Online.

Follow typical FTC processes for these customers. If a customer has an impediment blocking their ability to move forward, refer to the Escalation Process or escalate to your TM or a Lead.

Primary Role: **FastTrack Manager**  
Applies To: **Exchange**

### New Exchange Online or Currently Migrating Customers (10-40%) AU

For Exchange specifically, AU should be driven consistently above 50% AU. As most Exchange engagements involve migration, the key is to drive migration to highest number of mailboxes possible to Exchange online. 

For any customers that wish to retain any mailboxes on premises the reasons should be surfaced in Entitlement Status (In-progress) notes.

While having regular migration meetings, ask the decision maker or IT Pro: 
How many of your user licenses do you intend to enable and/or migrate with our assistance? (Determine the total # activated licenses post-migration)
1.	If the customer will use less than 50% of their licenses:

    a.	Check with the FTA FIRST (If attached) or   account team to confirm if they are aware of any reason why they are going to use so few seats.

       - If no account team is attached, try to gather details on the reasoning to see if there is a misconception on product capability.

    b.	Ask the customer if they would be anything we are missing or if a SME could help them with understanding their challenges (If it is something on our side).

    c.	Use “Expecting<50” in service notes.

2.	If customer is firm on their decision despite urging:
    a.	Ask the customer if they would be anything we are missing or if a SME could help them with understanding their challenges (If it is something on our side).

    b.	Enter the details of the usage expectation in the service notes as well as the reasoning.

    c.	Use “Expecting<50” in service notes.
3.	For customers that will use > 50% expected, add “Expecting>50” in service notes to designate this customer as expected to drive beyond 50%.
4.	For escalation or any issues, refer to the Escalation Process for specific details.
5.	*Don’t forget to discuss the OM BVD with your customer as it is the preferred device app for end users post migration.

Primary Role: **FastTrack Manager**  
Applies To: **Exchange**

### New Exchange Online or Currently Migrating Customers >40% AU

Customers that are moving well to Exchange should not need anything at this point, but FMs should assure they still intend to use >50% and identify any mailboxes they intend to retain on-premises while still engaged with MVMs. 

Scenario 2 guidance still applies to these customers as well.

Do not forget to discuss the OM BVD with your customer as it is the preferred device app for end users post migration.

Primary Role: **FastTrack Manager**  
Applies To: **Exchange**

### Opportunity Review Customers (Blocked or Not Moving Forward)

**Opportunity Review**

As part of your regular sync with the customer, make sure that you understand any Impediment that is causing a delay for the customer, as you could be asked to share details as part of the FastTrack Opportunity Reviews. 

**Summary:**

 - Monthly cohort of hand-picked customers
 - Meet weekly, by region, 45 minutes
 - Discuss specific customers and what we are doing to move them out of a focus area
 
**Preparation and Facilitation:**
 - Advance notice of customer list: Static each month to allow focus throughout the month, will provide 3-day notice of customer changes
 - Action items tracked in Teams channel
 
**Discussion Sequence:** 
1.	Completed action items
2.	Open action items
3.	Specific customers
4.	Meeting facilitation and Other questions

**Focus Areas:** 
1. Large customer (10k+)
   - Large customers with poor AE/QE ratio, under 20%

2. Velocity
    - Days to kickoff meeting (Gateway included)
    - Time between kickoff meeting and service enablement (definition\measurement TBD)
    - Time from service enablement to 10%, 40%, 70% for core workloads

3. Plateau customers
    - Stuck in a +/-5% growth window for more than 3 months
    - “Biggest Losers”
#### FTOP Tasks

OM attachment push with EXO (*can secure data through EMS)       

### Key Inputs
Intent to use EXO and if Migration Velocity Manager (MVM) will be used.

### Key Outputs
Understanding of the amount of Exchange licenses will be in use by the end of the migration or engagement.

### Next Steps

### Data Collected

| Data Field/Common Name | Required for this Process | First Entered into FTOP |
| ---------------------- | ------------------------- | ----------------------- |
| DIBS                   | Yes                       | Yes                     |
| FM                     | Yes                       | Yes                     |
| Overall Status         | Yes                       | No                      |

### Success Measurements

| KPI Name | Definition | Green/Yellow/Red Thresholds |
| ----- | -------- | -------- |
| AU      | All Up        |51+/          |

### Ring Updates

| CMR# | CMR Name | CMR Link |
| ----- | --------| -------- |
| N/A  | N/A      | N/A      |

### Refresh Summary

| Date    | Who Changed     | What Changed     | Notes |
| ------- | --------------- | ---------------- | ----- |
| 10/16/18 | Dan Rowley| Updated content based on feedback  |       |
| 10/03/18 | Lori Goff   | Playbook Created |       |
