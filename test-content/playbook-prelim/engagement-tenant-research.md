---  
# required metadata  
title: FastTrack Playbook - Tenant Research  
description: FastTrack Playbook - Tenant Research  
author: Maria Conceição  
ms.author: maconcei  
manager: eduardod  
ms.date: 1/16/2020  
ms.topic: playbook  
ms.prod: non-product-specific  
ms.custom: internal-playbook  
ft.audience: internal  
ft.owner: maconcei  
---  
[!INCLUDE [Playbook Feedback](./includes/questions-feedback.md)]  

# Tenant Research

Phase: **Engagement**  
Motions: **Customer Health / RFA / Targeting**  
[!INCLUDE [Data Privacy](./includes/playbook-data-privacy.md)]  

## Overview

The Tenant Research process identifies how the Gateway Re-engagement
Team (GRT) gathers historical information from field teams and justifies
whether to pursue a customer.

## Objectives

  - Gather information from both previous FastTrack and field teams to
    validate whether target plays are realistic toward the pursuit of
    historical knowledge and experience.
  - Identify appropriate customer contacts.

## Approach

### Check for New Re-Engagement Customers

Primary Role: **Targeting Manager**  
Motions: **Customer Health / RFA / Targeting**  
Applies To: **All Services**

Check for new customers in FastTrack Orchestration Portal (FTOP) and
email.  

For each new notification, assign yourself to the tenant and add the
Regional Manager (RM) queue: *FTCQ Intent Assigned:*

1.  Select Filter All, Sort by Tenant, and Search for the tenant ID or
    customer name.
2.  Select the tenant and navigate to the right pane to select
    assignments; and under Regional Manager add *FTCQ Intent Assigned*
    for GRT team and the specific Regional Manager for EMS re-engagement
    team. Select the checkbox next to Tenant. Do not remove any existing
    RM or modify anything under the Primary column.
3.  Under FastTrack Manager (FM), add yourself and select the checkbox
    next to Tenant. Do not remove any existing FM or modify anything
    under the Primary column.
4.  Select the Apply Assignments button at the bottom of the Assignments
    tab to save your changes.

Mark Task 3652 GRT Team Assignment task complete. Entry point into
reengagement team processing. Mandatory for all engagements.

#### FTOP Tasks

| Task ID | Task Name           | (M)andatory / (O)ptional |  FastTrack Role   | Services     |
| ------- | ------------------- | :----------------------: | :---------------: | ------------ |
| 3652    | GRT Team Assignment |            M             | Targeting Manager | All Services |

### Research Customer

Primary Role: **Targeting Manager**  
Motions: **Customer Health / RFA / Targeting**  
Applies To: **All Services**

Gather information from previous FastTrack teams to validate whether
target plays are realistic and worth pursuing given historical knowledge
and experience.

**Identify the targeted wave**  
Understand in which wave the assigned customer is:

  - Find customer in [FTOP](https://ftop.microsoft.com/), change display
    to "Overview" and find the information in the TAGS columns.
  - Re-Engagement waves have the following naming format
    FY19-Reengagement-WaveName+NumberOfTenants-Workload.
  - TOP400 or TOP400FY19 TAGS indicate the customer is part of S400.

**Understand the prioritization score​​**  

Check the prioritization model score for the customer and understand
w​hy the specific tenants are targeted. The link for the wave
prioritization report will be provided by the GRT Program Manager (PM)
for each targeted wave.

**Check previous activities**  
Review information in FTOP:  

  - Check previous activities.  
  - Check previous owner: FM, FastTrack Engineer (FE), FastTrack
    Architect (FTA), subject matter expert (SME).

**Check if customer is s400**  
If the customer is part of S400, the GRT team disengages:

- Check:  
  - ​Open FTOP, change Display to Overview, search for customer. In the
    results under Tags column, look for Top400Fy19 - this indicates
    customer is s400.
  - Open FTOP - Assignments - Enterprise tab - Check if the FastTrack
    Architect v2 field is populated - this is the FastTrack Architect
    (FTA) assigned to the customer.  

If the customer is s400 AND has an assigned FastTrack Architect the GRT
Team will disengage.

If the customer is s400 AND does NOT have a FastTrack Architect
assigned, reach out to your GRT PM for additional guidance.

> Please Note: Here we will check if the FTA is involved by reaching out
> to our FTA contacts. The other way is to check the customer Top Parent
> ID (TPID) and search for FTA under top parent of child accounts and
> the reach out to that FTA.  

- Action:  
  - Capture disengagement notes (notes must start with "Re-engaged
    Customer") in FTOP.
  - Reason: Disengaged in GRT Validation
  - Proceed to the [GRT
    Disengaged](./engagement-re-engagement-team-disengaged.md) process.

**Check if tenant is FRP**  
If Tenant is managed by FastTrack Partner (FRP), the GRT/EMS team
disengages:

  - Check:
      - If RM field in FTOP contains FTP\_partner\_name and PSM field is
        populated, this is clearly FRP.
      - If P-RM, P-FM, P-FE are populated but no indication of FRP
        partner in RM field and no PSM set, reach out to GRT PM for next
        action.
      - If in the Engagement Management notes it is mentioned that a partner is
        managing the deployment and the RM, PSM, P-RM, P-FM, P-FE fields
        are blank, check if the partner is FRP from the list FastTrack
        Partner List. If yes, reach out to PSM found in the partner list
        for confirmation and disengage.
  - Action:
      - Capture disengagement notes (notes must start with "Re-engaged
        Customer") in FTOP.
      - Reason: Disengaged in GRT Validation
      - Proceed to the [GRT
        Disengaged](./engagement-re-engagement-team-disengaged.md)
        process.

**Check if tenant is active (by CSS)**  
If the tenant is actively managed by Customer Support Service (CSS),
the GRT team disengages:

- Check:  
  - If there is assigned FM and Engagement Management notes show activity in
    the last 60 days, this is clearly managed by CSS

- Action:  
  - Capture disengagement notes (notes must start with
    "Re-engaged Customer") in FTOP.
  - Reason: Disengaged in GRT Validation
  - Proceed to the [GRT
    Disengaged](./engagement-re-engagement-team-disengaged.md)
    process.  

If Tenant customer language is not supported, the GRT team disengages:

- Check:  
  - Customer Language (using the country in the eligibility tab).

- Action:  
  - Capture disengagement notes (notes must start with "re-engaged
    Customer") in FTOP.
  - Reason: ​Customer requires assistance in unsupported language.
    Mandatory to specify language in Technical Enablement notes.
  - Proceed to the [GRT
    Disengaged​](./engagement-re-engagement-team-disengaged.md)
    process.​  
      

#### FTOP Tasks

| Task ID | Task Name                  | (M)andatory / (O)ptional |  FastTrack Role   | Services     |
| ------- | -------------------------- | :----------------------: | :---------------: | ------------ |
| 3654    | Internal customer research |            O             | Targeting Manager | All Services |
| 4028    | CAT Triaged                |            O             | FastTrack Manager | Intune       |
| 4029    | GTP Triaged                |            O             | FastTrack Manager | AADP         |

### After Validation Completion

Primary Role: **Targeting Manager**  
Motions: **Customer Health / RFA / Targeting**  
Applies To: **All Services**

**After completing validation** and confirming that the tenant is not
actively worked on by CSS, FRP or any other group

- Revert back to the FTOP assignment page.  
- In the RM field, expand "FTCQ Intent Assigned"  
  - If the existing primary RM is a queue (starts with FTCQ) - **Select
    "Primary"** for FTCQ Intent Assigned
  - If the existing primary RM is a person name - **Do not select
    "Primary"** for FTCQ Intent Assigned
  - For any other undocumented combination (like multiple RMs) please
    consult with your **GRT Lead**

- In the FM Field, expand your name.  
  - **Select "Primary"**  
- Click "Apply Assignments" (scroll​ down to the bottom of the page).  
  

**Preform other checks**  

  - Check Status Notes:
      - If last status note by person/system is over 60 days,
        cross-check of the information with the FM is optional.
      - If last status note by person/system is under 60 days,
        cross-check information with FM is mandatory.
  - If available, consult FM, FE, FTA, and SME to ensure the goals:
      - Obtain customer insights (e.g., status, technical details and
        business needs).
      - Prove scenarios.
      - Gather relevant information to prepare Account Team
        conversation, including prior Discovery Notes from FTA
        assessment.
  - Check Usage tab in FTOP.
  - Check Lynx tab subscriptions to validate subscription type, size and
    renewal date.
  - Conduct customer profile research (now or after talking with account
    team).

**Complete customer research**  

  - Mark task 3654: Internal customer research complete - Researching
    customer background and mapping scenarios.

### Account Team Research (Managed)

Primary Role: **Targeting Manager**  
Motions: **Customer Health / RFA / Targeting**  
Applies To: **All Services**

Check for a managed or un-managed account. For an **unmanaged account,**
FTOP has no information about Microsoft Account Team Unit (ATU), proceed
to Customer Contact Research (Unmanaged). For a **managed account**,
obtain historical knowledge, experience and valid customer contacts from
the Account Team, and confirm if account is Managed:

  - Open [https://ftop.microsoft.com](https://ftop.microsoft.com) and search for customer name
  - Select customer
  - Check contacts (has information about Microsoft ATU contacts);
    account Team Contacts = All FTOP contacts with the following roles:
      - AM = Account Manager
      - AE = Account Executive  
      - ATS = Account Techology Strategist
      - CSM = Modern Workplace Customer Success Manager
      - TAM = Technical Account Manager

Note: View FTOP contact page's Modified Date for each contact. If
multiple contacts have the same title, use the most recent Account Team
contact per title. CALC Tool can be used to re-validate ATU contacts.  

  - Mark Task 3653 Account Team Engagement in progress
  - Contact AM, AE, ATS, CSM and TAM
  - Use email [Account Team Outreach
    Templates](https://microsoft.sharepoint.com/teams/ftccm/FTC%20Documents/Gateway/ReEngagement/Process/GRT%20-%20ATU%20contact%20templates)
      - If CSM is available
          - To: CSM and TAM
          - CC: remaining ATU members
      - If ATS is available
          - To: ATS and TAM
          - CC: remaining ATU members
      - If no ATS neither CSM are available
          - To: AE and TAM
          - CC: remaining ATU members
  - Mark Task 3655 Account Team 1st Contact complete
  - Wait 2 Business days. If no reply, then:
      - Send a second email.
      - Include usage screenshots from FTOP and ensure email is
        Information Rights Management (IRM) - protected with
        Confidential - Microsoft Extended.
      - ​Follow-up with instant messaging (IM) conversation in Teams or
        Skype.
      - Mark Task 3730 Account Team 2nd Contact complete.
      - No reply to IM/email escalates to GRT PM's who escalate to ATU
        manager CC and GRT manager.
      - If still no reply from Account Team, proceed to [Customer
        Engagement](./engagement-customer-engagement.md).
  - If account team replies, the goal is to:
      - Understand customer workload status and baseline security
        configuration.
      - Understand any partner ecosystem.
      - Get customer contacts and secure account team introduction with
        customer.
      - Update FTOP with suggested contacts for scenario delivery.
      - Mark Task 3656 Validate target Play and customer contacts
        complete.
  - Mark Task 3653 Account Team Engagement complete.

If account team requests additional active usage (AU) information, refer
to [FastTrack Portal](http://fasttrack.microsoft.com/). ATU can add
themselves as an account member for customer and view usage. Refer to
[FastTrack Web Portal Quick Reference – Internal
Users](https://prodfasttrackstorage.blob.core.windows.net/guidance-docs/Field%20Quick%20Reference.pdf)
for details. If Account team feedback is that customer is engaged with
FRP partner:

  - Confirm the partner is listed in FTOP Assignments tab under RM and
    PSM field is populated.
  - If information **not** populated in FTOP, contact the Partner
    Success Manager (PSM) to confirm the partner is engaged with
    customer. Make sure PSM updates info in FTOP. FRP partner status and
    PSM name can be found [FastTrack Partner
    List](http://aka.ms/fasttrackreadypartners).
  - After confirmation from PSM, proceed with disenagement. Choose
    appropriate reason and capture notes in FTOP. Notes must start with
    "Re-engaged Customer" in FTOP.
      - Reason: FRP is taking over.  
      - Proceed to the [GRT
        Dise​ngaged](./engagement-re-engagement-team-disengaged.md)
        process.

If Account Team provided information that leads to GRT team being
disengaged, choose an appropriate reason and capture notes (notes must
start with "Re-engaged Customer") in FTOP.

  - Reason:
      - Account Team Declined
      - Out of Scope
      - Customer requires assistance in unsupported language
      - Other Please specify
      - Non-FRP engaged
      - FRP is taking over
  - Proceed to the [GRT
    Disengaged](./engagement-re-engagement-team-disengaged.md) process.

#### FTOP Tasks

| Task ID | Task Name                  | (M)andatory / (O)ptional |  FastTrack Role   | Services     |
| ------- | -------------------------- | :----------------------: | :---------------: | ------------ |
| 3653    | Account Team Engagement    |            O             | Targeting Manager | All Services |
| 3655    | Account Team 1st Contact   |            O             | Targeting Manager | All Services |
| 3730    | Account Team 2nd Contact   |            O             | Targeting Manager | All Services |
| 3656    | DIBS Conversation with ATU |            O             | Targeting Manager | All Services |
| 4086    | {Wizard} Advanced Security and Compliance Assessment |            O             | Targeting Manager | AADP / MIP / MCAS / MDATP / OATP |

### Customer Contact Research (Unmanaged)

Primary Role: **Targeting Manager**  
Motions: **Customer Health / RFA / Targeting**  
Applies To: **All Services**

For **unmanaged accounts**, review customer contacts in ViewPoint (link
from FTOP) ​and find the Tenant Admin as primary contact person. Perform
customer outreach for Tenant Admin. 

If outreach is unsuccessful then, use LinkedIn to identify customer
stakeholders who can potentially drive success. Research and contact
additional customer contacts internally. 

  - Leverage [LinkedIn Sales
    Navigator](https://teams.microsoft.com/_#/pptx/viewer/teams/https:~2F~2Fmicrosoft.sharepoint.com~2Fteams~2FCXPFastTrackPrograms~2FShared%20Documents~2FFastTrack%20Intent%20v3~2FIncubation%20Release%201.3%20BOM~2FUnresponsive%20Playbook~2FSalesNav%20Guide.pptx?threadId=19:df48d36b028544d4872e)
  - Refer to [Unresponsive Playbook
    vE-1.3](https://microsoft.sharepoint.com/:w:/t/CXPFastTrackPrograms/EXZLeRenGExHleCuIJ0h2JABmQe5trjR-m7x_aFKhFvibg?e=ca6liD)
    for guidance; Recommended example Roles and Title for search:
      - Information Technology Decision Makers (ITDM)
          - Chief Technology Officer (CTO)
          - IT Director
          - Chief Architect  

Contacts for unmanaged accounts:

  - Reach out to customers using the LinkedIn [Customer Contact Template
    message 1](https://microsoft.sharepoint.com/teams/ftccm/FTC%20Documents/Gateway/ReEngagement/Process/GRT%20-%20CUSTOMER%20contact%20templates).
  - One week later, reach out to customers using the LinkedIn [Customer
    Contact Template
    message 2](https://microsoft.sharepoint.com/teams/ftccm/FTC%20Documents/Gateway/ReEngagement/Process/GRT%20-%20CUSTOMER%20contact%20templates):
      - Mark the Account Team Engagement task complete.
      - If contacts not obtained, proceed to the [GRT
        Dis​engaged](./engagement-re-engagement-team-disengaged.md)
        process.
      - Reason: Customer outreach unsuccessful

If contacts obtained, proceed to the [Customer
Engagement](./engagement-customer-engagement.md) process.

## Key Inputs

- Customer contacts

## Key Outputs

- Customer contacts

## Next Steps

- [Customer
Engagement](./engagement-customer-engagement.md)  

## Refresh Summary

| Date       | Who Changed       | What Changed                                             |
| ---------- | ----------------- | -------------------------------------------------------- |
| 12/6/2019  | Ryan Meehan       | Updated roles to Targeting Manager, added task 4086      |
| 7/26/2019  | Maria Conceição   | Added tasks 4028, 4029                                   |
| 5/31/2019  | Maria Conceição   | Updated outreach template links                          |
| 5/24/2019  | Maria Conceição   | Updated Research Tenant step                             |
| 4/26/2019  | Maria Conceição   | Added text in "Check for New Re-Engagement Customers"    |
| 4/5/2019   | Maria Conceição   | Modified "Check for New Re-Engagement Customers" section |
| 3/22/2019  | Maria Conceição   | Re-wrote section of "research customer" approach step    |
| 2/22/2019  | Maria Conceição   | Playbook migration to GitHub                             |
| 12/7/2018  | Maria Conceição   | Minor formatting changes                                 |
| 10/26/2018 | Mark Eichenberger | Playbook Created                                         |
