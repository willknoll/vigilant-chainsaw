---  
# required metadata  
title: FastTrack Playbook - Get Modern Gateway Wave
description: FastTrack Playbook - Get Modern Gateway Wave
ms.author: maconcei  
manager: cadenli  
ms.date: 11/25/2019  
ms.topic: playbook  
ms.prod: non-product-specific  
ms.custom: internal-playbook  
ft.audience: internal  
ft.owner: mikelamb
---   
[!INCLUDE [Playbook Feedback](./includes/questions-feedback.md)]

# Get Modern Gateway Targeting Approach

Program Manager: **Dan Rowley**

## Overview

Proactive outreach to account teams, partners, and/or customers across priority Get Modern & RFA customers to validate if the customer is eligible for the FY20 FastTrack Get Modern offer.

Eligible customers will be assigned to a Delivery team (CSS or FRP) according to the prerequisites. Ineligible customers will be provided guidance and/or referred to a non-FastTrack Partner for assistance.

## Objectives 

The following is a list of objectives for this playbook:

  - Understand the current customer environment and assess if it’s
    eligible for the Get Modern FastTrack engagement

  - For eligible customers, present Get Modern Through FastTrack. A
    program designed to provide guidance to help on-prem customers
    deploy and maintain Windows 10 (Win10) & Office 365 ProPlus (OPP)
    leveraging System Center Configuration Manager and Intune. This will
    ensure customers are ready for the available FastTrack benefit and
    fit the engagement expectations which include:
    
    - Target client OS: Windows 10 Enterprise
    
    - Source client OS: Windows 7 or Windows 8.1, supporting an
        in-place upgrade scenario
    
    - System Center Configuration Manager Current Branch 1902
        (FastTrack can’t assist the customer upgrading Configuration
        Manager to Current Branch)

## Approach 

Primary Role: **FastTrack Targeting Manager**  
Applies To: **Get Modern (Windows & Office 365 ProPlus)**

For all customers being assigned to either the GM FTA or FTC, a Get
Modern SME should be attached to assist the FE in executing the remote
benefit.

At any point during your engagement you come across a reason the
customer is dropping out of our funnel that is not already documented in
a task, reach out to a lead for guidance.

**Pausing the engagement**

Engagement can be paused with one of the following two tasks:

  - 3985 ATU Requested delay

  - 3996 Customer Requested delay

Engagement can be paused if the requested duration is less than 30 days. For more than 30 days please consult your Targeting Lead.
 
To pause customer engagement:

  - Update Engagement Management notes
    
    - Who requested delay
    
    - Reason for requesting delay
    
    - Delay duration

  - Complete Task (3985 or 3996)

After the paused period expires:
  
  - Reset Task 3985 or 3996 to "Not Started"

  - Follow the playbook for completing the Get Modern validation

### 1.  Get familiar with the [Get Modern IP](https://aka.ms/ftgetmodernvalidation) to obtain all the information regarding this wave.
  
  - Windows Scope

  - Windows Prerequisites

  - Windows Probing questions

  - Compatibility issues

  - OPP probing questions

  - Benefit description

  - Onsite benefit qualification

### 2.  Assign yourself to the tenants received from Targeting Lead

Identify the correct reference tenant  
Select the tenant and navigate to the right pane to select assignments

  - Do not remove any existing RM or modify anything under the Primary column

  - Under FastTrack Manager (FM), add yourself as secondary FM. Do not remove any existing FM or modify anything under the Primary column

  - Select the Apply Assignments button at the bottom of the Assignments tab to save your changes

  - Mark Task 3652 GRT Team Assignment task complete. Entry point into Targeting team processing. This is Mandatory for all engagements

### 3. If the customer is already managed by a FastTrack Ready Partner (FRP) 

- If you find an FRP is engaged in any of the following scenarios: 
  - FTOP Assignment Fields > Onboarding RM field contains partner name
  - FTOP Assignment Fields > PFM field is populated
  -	Any other indication partner is involved from FTC/ATU
- Validate with PFM FRP engagement on Get Modern workloads  
  - [PFM contact template](https://microsoft.sharepoint.com/teams/ftccm/FTC%20Documents/Gateway/ReEngagement/Process/GRT%20-%20FRP%20related%20contact%20templates/FRP%20PARTNER_NAME%20covering%20Get%20Modern%20for%20CUSTOMER_NAME.msg)
- Provide 2 weeks for PFM/FRP to validate Get Modern workload engagement  
  - If no response, move forward with the understanding the FRP is **not** engaged for Get Modern
  - If PFM/FRP confirm engagement for Get Modern, offer to assign GM FTA to support customer deployment efforts 
  - Do not wait for a response to move forward with next steps. We are doing the FRP validation in parallel to FTC/ATU contact attempts
    - If FPM/FRP accept offer to assign GM FTA – complete task 3729 “Send to Delivery” 
    - If FPM/FRP decline offer to assign GM FTA – disengage as task 3715 “Other – Please specify” and include in your notes that FPM/FRP declined offer to assign GM FTA   
 

### 4. Perform internal customer research 

- Find all tenants for the TPID 
- Check Usage tab in FTOP for targeted workloads 
  -	In the scenario where Win 10 and OPP are >70% AU:  
    *Areas to check usage:*    
    Windows 10: Go to FTOP Usage on reference tenant   
    OPP: Customer Health Dashboard can be accessed by going to [this link](https://msit.powerbi.com/groups/217ac1bb-ec5c-40e7-adad-ec8f0287909f/list/dashboards) (Reports tab) and searching for, "OPS – FY20 Customer Health Dashboard".    
    Follow [these instructions](https://microsoft.sharepoint.com/:w:/t/astTrackCustomerRe-engagementFMs/EeaDSSFM2yVHmD0K2SMxnwYBZh5BauYyOp3Yai4Ja831Fg?e=lmxG5D) on how to navigate the dashboard. 
     - Complete Task 3652 GRT Team Assignment 
     - Complete Task 3654 Internal Customer Research  
     - Update Service Intent (L1/L2/L3) on both Win10 and OPP if needed  
     - Update Engagement Management notes with:  
      -	Exact usage on both Win10 and OPP and note that Targeting team is disengaging because of high usage 
        - Example if **both** Win10 and OPP are over 70%. “Gateway Targeting Get Modern: Customer has XX% on Win10 and YY% on OPP and is **considered GREEN for Customer Health Group 2**.  Gateway Targeting team disengaging” 
        - Example if ATU request disengaging for high AU. “Gateway Targeting Get Modern: Customer has XX% on Win10 and YY% on OPP and Gateway Targeting team disengaging for high AU per ATU request” 
        *For XX% and YY% use the values from the table in this email  
     - Complete Task 3715 “Other – Please specify” 
     - Remove yourself as FM  


- Check Lynx tab subscriptions to validate subscription type, size and renewal date 
- Check previous activities 
  -  Check previous activities in the Engagement Management notes – look for Win10/OPP related comments 
  -   Check internal FTC team members: Get Modern FastTrack Architect (GM FTA), FastTrack Manager (FM), FastTrack Engineer (FE), FastTrack Architect v2 (FTA), Subject Matter Expert (SME), App Assure Manager (AAM) & Partner Success Manager (PSM)… 
- Complete task 3654 “Internal Customer Research” 

### 5. If the customer is already managed by FastTrack begin internal outreach to understand customer status before engaging the account team or customer. 

  -  If the customer is already managed by FastTrack reach out to the FTA v2, GM FTA, FM, Get Modern SME, App Assure Manager ([Example 1](https://microsoft.sharepoint.com/teams/ftccm/FTC%20Documents/Gateway/ReEngagement/Process/GRT%20-%20FTC%20contact%20templates%20(FMs%2C%20FEs%2C%20FTAs...)/Get%20Modern%20-%20Reachout%20to%20FTC%20Internal%20(FTA%2C%20GM%20FTA%20%2C%20FM%2C%20Get%20Modern%20SME%2C%20AAM)%20v2.msg)).    
  **Be sure to send RMS protected as "Highly Confidential - Microsoft Extended"**       
   The goal is to: 

      -  Inform them you are starting the Get Modern eligibility assessment 
  
      -  Avoid multiple people reaching out to the ATU at the same time 
  
      -  Confirm the ATS name 
  
      -  Get any relevant input on the assessment questions 
  
  -  Give the internal FastTrack resources 24 hours to respond prior to reaching out to the ATU 
 
        -  Document any responses from the internal FastTrack Resources - if you have all the assessment data and DIBS collected you can skip to step 8 (Document the answers to the Get Modern eligibility assessment…)

### 6. Leveraging the information from internal research & outreach, contact the account team (ATS, TAM, then AE) to coordinate the Get Modern motion. 

  -  Set task 3653 “Account Team Engagement” to In Progress 
  -  Reach out to the ATS ([Example 2](https://microsoft.sharepoint.com/teams/ftccm/FTC%20Documents/Gateway/ReEngagement/Process/GRT%20-%20ATU%20contact%20templates/Get%20Modern%20-%20Reachout%20to%20ATS%20v2.msg)).        
  **Be sure to send RMS protected as "Highly Confidential - Microsoft Extended"**

      -  Complete task 3655 “Reaching out to ATU - 1st contact” 

  -  Wait for 48 hours for the response, reach out via Teams 

      -  Complete task 3730 “Reaching out to ATU – 2nd contact” 

  -  If account team is unresponsive use existing escalation process

  -  Collect all assessment data on the meeting with ATS and follow-up until the eligibility assessment is complete. If the account team can complete the Get Modern eligibility assessment, complete steps 8 & 9 with the account team. If not, ask the account team to introduce the offer & schedule a meeting to deliver the Get Modern IP 

  -  Complete task 3653 “Account Team Engagement” 

### 7. During the customer meeting follow the [Get Modern IP](https://aka.ms/ftgetmodernvalidation) deck and determine customer eligibility. 

**Customer Eligibility criteria**: 
  
  -  Own at least 150 licenses of Windows 10 Enterprise 
  
  -  Intent to deploy Windows 10 Enterprise 
  
  -  If on Configuration Manager infrastructure, running or ready to upgrade to Configuration Manager Current Branch 1902 

### 8. Document the answers to the Get Modern Eligibility Assessment from the Get Modern IP using the Get Modern Deployment Wizard in task 4021 of the Windows 10 Playbook (Assess Phase) 

>[!Note] 
>Leave task 4021 set to Not Started, this is a delivery FE task 

### 9. Capture & update the following FTOP data fields:

  -  Windows 10 Service Intent (L1/L2/L3) 

      -  For Blocked L1, use L3 of Other & provide detailed notes in Engagement Management notes field
      - DIBS


  -  Engagement Management Notes ([Example 3](https://microsoft.sharepoint.com/:w:/r/teams/ftccm/FTC%20Documents/Gateway/ReEngagement/Process/GRT%20-%20Overall%20status%20notes%20guidelines%20and%20examples/Get%20Modern%20-%20Overall%20Status%20Note%20Example.docx?d=w815db82f66fa49cc907bd4cab65728d0&csf=1))

  -  Get Modern Deployment Wizard attached to task 4021 (Windows 10 playbook, assess phase) 

  -  Standard Re-engagement tasks 

  -  Assignment 

## 10. If the customer is eligible request delivery assignment: 

-  a. Request Get Modern FTA (GM FTA) assignment if needed: 

      -  i. Check customer eligibility for GM FTA: [Get Modern Onsite Coverage](https://microsoft.sharepoint.com/:x:/r/teams/ftccm/FTC%20Documents/Gateway/ReEngagement/Windows/Get%20Modern%20Onsite%20Coverage.xlsx?d=w87d72eacf888489b93143a4d6ad260d1&csf=1) 

      -  ii. Depending on the region send an email to the GM FTA manager; Nathan Winters (EMEA), Caden Li (AMER/APJ), Troy Norman (AMER), Wai Ee Pan (APJ) indicating the need for GM FTA assignment 

          -  [Request GM FTA Template](https://microsoft.sharepoint.com/teams/ftccm/FTC%20Documents/Gateway/ReEngagement/Process/GRT%20-%20ASSIGNMENT%20email%20templates/GM%20FTA%20assignment%20request%20for%20CUSTOMER%20NAME%20(TPID%20XXXXXX).msg)

      -  iii. If GM FTA is requested, set task 4034: GRT Team Disengaged - Send to GMFTA 

-  b. If no delivery FM is currently assigned, request delivery FM assignment by: 

      -  i. Add notes to the **Overall Status** field regarding the scope of the request.  Leverage [Engagement Management Note](https://microsoft.sharepoint.com/:w:/r/teams/ftccm/_layouts/15/Doc.aspx?sourcedoc=%7B815DB82F-66FA-49CC-907B-D4CAB65728D0%7D&file=Get%20Modern%20-%20Overall%20Status%20Note%20Example.docx&action=default&mobileredirect=true) template.
         - Minimum information: 
           - Resource requested (FM/FE) 
           - Any language requirements 
           - Workloads in scope 
           - Any other relevant information for assignment 


      - ii. Make sure the Overall status is set to **Active**.
      - iii. Add **FTCQ CSS \<region\>** to the RM field, set as primary 
      - iv. Complete Task 3701 “Request Delivery FM” 
      - v. Targeting FM stays assigned until handoff is complete (whether call or email), and the Delivery FM confirms they have what they need to move forward. Remove Targeting FM thereafter.
        - *SLA:* 
           - *AMERICAS: 1 business day turnaround*
           - *EMEA: 1 business day turnaround*
           - *APJ: 1 business day turnaround* 

-  c. Request a Get Modern SME, if one is not already assigned. 

      Click on [New Item](https://microsoft.sharepoint.com/teams/ftccm/SitePages/FTC%20Resource%20Request.aspx): from the [Resource Request Tool](https://microsoft.sharepoint.com/teams/ftccm/SitePages/FTC%20Resource%20Request.aspx): 

     -  i. Enter the information requested: 

          1.  Tenant ID 

          2.  Tenant Name 

          3.  Tenant Segment: Enterprise 

          4.  Seat Count 

          5.  Delivery Team: AMER Other (Americas), EMEA Other (EMEA), APJ Other (APJ)

          6.  Role Requested: FastTrack Engineer SME 

          7.  Requested Workload: Windows 10 or OPP 

          8.  Primary Language 

-  d. If a delivery FM is currently assigned (or after an FM is assigned): 
     -  i. Contact delivery FM, SME, AAM, GM FTA (if applicable) for handover process (complete task 3676) 

-  e. Complete task 3729 “Sent to Delivery” and remove yourself as FM 

## 11. If the customer is ineligible, provide a the Get Modern Deployment Guidance and leverage the QuickLeads process to refer the customer to a partner for assistance. 

- Verify with the account team that they agree with submitting a Windows 10 Partner Referral is appropriate next action. 
- Send the completed email request to FTCpartnerassist@microsoft.com 
  -	[Windows 10 Partner Referral email template](https://ftop.microsoft.com/redirect/?sourceUri=https%3A%2F%2Fftop.microsoft.com%2FApp%23%2Ftenant%2F9f2b180d-0a5a-45e8-b814-7bd8d67d42e0%2Fdetail%2Fplaybook&taskId=983&targetUri=https%3A%2F%2Fmicrosoft.sharepoint.com%2Fteams%2Fftccm%2FFTOP%2FLocalized%2FFTCTask_983%2FFastTrack%2520Partner%2520Referral%2520request.oft) 
- Complete task 3705 Out of FTC Scope 
- Complete task 4023 Windows 10 Partner Referral 
  - If the ATU does not agree with the Windows 10 Partner Referral, do not complete this task and do not send email.  Notate this in the Engagement Management notes  
-	Disengage – remove yourself as FM 

## FTOP Tasks 

| **Task ID**	| **Task Description** | **(M) Mandatory (O) Optional** |	**FastTrack Role** |
| - | - | - | -|
| 3652 | GRT Team Assignment | M | FastTrack Targeting Manager |
| 3654 | Internal customer research |	O | FastTrack Targeting Manager |
| 3653 | Account Team Engagement | O |	FastTrack Targeting Manager |
| 3655 | Account Team 1st Contact	| O |	FastTrack Targeting Manager |
| 3730 | Account Team 2nd Contact	| O	| FastTrack Targeting Manager |
| 3692 | Account Team Set the meeting | O	| FastTrack Targeting Manager |
| 3663 | Send Email Outreach #1 | O | FastTrack Targeting Manager |
| 3664 | Send Email Outreach #2	| O	| FastTrack Targeting Manager |
| 3693 | Unsubscribe requested	| O	| FastTrack Targeting Manager |
| 3701 | Request Delivery FM	| O	| FastTrack Targeting Manager |
| 4023 | Windows 10 Partner Referral | O |	FastTrack Targeting Manager |
| 3729 | GRT Team Disengaged – Send to Delivery | O | FastTrack Targeting Manager |
| 4034 | GRT Team Disengaged - Send to GMFTA | O | FastTrack Targeting Manager |
| 3676 | Customer Handoff Meeting | O | FastTrack Targeting Manager |
| 3711 | Non-FRP engaged	| O | FastTrack Targeting Manager |
| 3712 | Account Team Declined | O | FastTrack Targeting Manager |
| 3713 | Customer Declined	| O	|FastTrack Targeting Manager |
| 4077 | Get Modern Wizard Complete | O | FastTrack Targeting Manager |
| 3985 | ATU Request Delay | O | FastTrack Targeting Manager |
| 3996 | Customer Request Delay | O |FastTrack Targeting Manager |




## Key Inputs
Customer has been identified as an FY20 Get Modern priority and has been tagged for execution or customer has submitted an RFA for Windows. 

## Key Outputs 
Customer is either qualified for FastTrack Get Modern benefit and assigned to delivery or they do not qualify and are referred to a Partner. 

## Next Steps
Assignment to delivery team or redirect to partner through QuickLeads process.  

| **Data Field/Common Name**	| **Required for this Process** | **First Entered into FTOP** |
| - | - | - |
| Service Engagement Scenario | Yes | Yes |
| Engagement Management Notes | Yes | Yes |
| Enterprise Notes (FTA) | No | Yes |
| Reason for customer decline or partner referral | Yes | Yes |

