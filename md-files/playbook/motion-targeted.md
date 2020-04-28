---  
# required metadata  
title: FastTrack Playbook - Targeting Motion
description: FastTrack Playbook - Targeting Motion
author: Mark Eichenberger
ms.author: mareich
manager: eduardod  
ms.date: 3/25/2020  
ms.topic: playbook  
ms.prod: non-product-specific  
ms.custom: internal-playbook  
ft.audience: internal  
ft.owner: mareich
---  
[!INCLUDE [Playbook Feedback](./includes/questions-feedback.md)]
# Targeting Motion

The Targeting Motion will help to ensure we meet our Field and Engineering targets for FY20 by supplementing MAD/MAU growth from targeted customers. Business rules will be applied to FT Eligible customers allowing us to identify the customers (or tenants) with higher propensity for achieving our targets for Get Modern, Intune and AADP.

## Rules

Rules that govern business, workload, and machine learning are weighted and used to create a targeting model. The customers selected for waves (Targeted cohorts) tend to have higher scores, are more successful, and are likely to re-engage.​ 
Scoring is available: [aka.ms/tenanttargeting](http://aka.ms/tenanttargeting)


#### Tenant Prioritization Rule Set – Workload Agnostic  
**Managed vs Unmanaged**
- Managed = 10 points 
  - If S500, W2020, and S1500 = + 10 additional points 
  - If Managed and S1500, S500 = + 7 additional points
  - If Managed and S1500, W2020 = + 5 additional points 
- Unmanaged = 0 points 

**Acceleration required and Healthy**
- Targeted workload AU > 5% and less than or equal to 40% or 80% depending on WL and 3-month growth rate is >= 3% - 10 points 

**Previous experience with FTC**
- One or more workloads greater than 10% AU and Engagement Scenario = FTC Led or Assist in the last year - 10 points 
  - (One or more workloads on Operate and Engagement Scenario FTC Led or Assist) & (more than one year less than three years) - 5 points 

**Recent Transactions**
- New RFA within the last year - 10 points 
- New workload or new subscription 1000 seats or more - 5 points 

**Renewal**
- Renewal within one year - 10 points 

**Tripwire**   
Any of: 
  - AU Gain  
  - Entitlement Gain 
  - Admin Center Login (more than prior period) 
  - Admin Center Wizards aka "Setup Guides" usage 

In the last 3 months - 10 points 

**Tenant Health for Relevant Group**
- Predicted Green - 10 points 
- Predicted Yellow - 5 points 
- Predicted Red - 0 points 
- Predicted Blue (all groups predicted green) - Negative (-10) 

#### Get Modern Rule Set – Workload Specific    

**Windows Version**
- More than 10% fleet with Windows 7 - 10 points  
- More than 80% fleet with Windows 10 - Negative (-10) points 

**OPP deployed**
- Greater than 1000 OPP active users - 10 points 

**Support cases in the last 3 months** 
- Win 7 open cases - 10 points 
- Win 10 open cases - 10 points  
- SCCM open cases - 5 points 
- Desktop App open cases - 5 points 

**Windows MAD** 
- 20% > Windows Mad < 40% and not growing 3% MoM in the last three months – 15 points 
- 5% > Windows Mad < 20% and not growing 3% MoM in the last three months – 5 points 

**Windows Fleet age** 
- 80% of the fleet one-three years - 10 points 
- 80% of the fleet Between three-five years =-5 points 

**AADP and Intune Protect users** 
- More than 60% AADP AU or more than 30% Intune AU – 10 points 

#### Intune Rule Set – Workload Specific     

**O365 Usage**
- If O365 (EXO, Teams, OneDrive and OLM) % AU > 10%  and Intune < 10% and task 994 (for Intune) - Conduct Initiate/Kickoff Meeting was completed  - 15 points 
- If O365 (EXO, Teams, OneDrive and OLM) % AU > 10% and Intune < 10% - 10 points 
- If O365 (EXO, Teams, OneDrive and OLM) workload AU is 2X bigger Intune AU and task 994 (for Intune) was completed - 5 points 

**Intune Usage** 
- Less than 10% AU – 10 points 

**Support cases in the last 3 months** 
- Intune Support cases - 10 points 

**MDM Auth method** 
- If MDM Auth method is SCCM – 10 points 

**App usage** 
- If O365 (EXO, Teams, OneDrive and OLM) % AU > 10% - 10 points 

**E3 or E5 license** 
- If E5 license - 10 points 
- If E3 license - 5 points 

**AADP AU** 
- AADP above AU 10% and Intune below 10% - 10 points  

**EXO Migration**
- If EXO migration is in place - 10 points 

#### AADP Rule Set – Workload Specific    

**O365 Usage**
- If Baseline security tasks (3720, 3736) are not complete - 10 points 
- If only 1 task from baseline security (3720, 3736) was completed - 5 points 
- If O365 (EXO, Teams, SPO and OLM) AU is 25% > AADP AU% - 5 points  
- If O365 AU is 50% > AADP AU% - 10 points 

**Support cases in the last 3 months** 
- AADP Support cases - 10 points 

**Auth method**  
- If 3rd party or ADFS – 10 points 

**AADP readiness workshop** 
- If task 2533 is not started – 10 points 

**App usage** 
- If A310 = "Yes" - 0 points 
- If A310 = "No" - 10 points 

**P2 license** 
- If P2 license - 10 points 

**Intune AU** 
- Intune AU is above AADP AU (at least 10% above) - 10 points 


> [!Note]
> Activities that are unique to this motion are shown in **Bold**

## Targeting Lifecycle

The full Targeting Lifecycle is available below: 

1.  [Presales](phase-presales.md)
    -  [Request FastTrack Architect](presales-request-fasttrack-architect.md)
    -  [Assign FastTrack Architect](presales-assign-fasttrack-architect.md)
    -  [Discovery Workshop](presales-discovery-workshop.md)
    -  [End Customer Incentive Funds / Digital WinRoom Request Review](presales-ecif-dwr.md)
    -  [Migration Exception](presales-migration-exceptions.md)
2.  **[Engagement](phase-engagement.md)**
    - **[Tenant Research](engagement-tenant-research.md)**
    - **[Customer Engagement](engagement-customer-engagement.md)**
    - **[Assign to Delivery](engagement-assign-to-delivery.md)**
    - **[Re-Engagement Team Disengaged](engagement-re-engagement-team-disengaged.md)**
3.  [Assignment](phase-assignment.md)
    - [Assign Delivery Resources](assignment-assign-delivery-resources.md)
4.  [Initiate](phase-initiate.md)
    - [Conduct Customer Kickoff](initiate-conduct-customer-kickoff.md)
    - [Deploy Securely](initiate-deploy-securely.md)
5.  [Assess](phase-assess.md)
    -   [Conduct Technical Assessment](assess-conduct-technical-assessment.md)
    -   [Conduct Security Workshops](assess-conduct-security-workshops.md)
    -   [Conduct Services Workshops](assess-conduct-services-workshops.md)
    -   [Conduct Adoption & Change Management Customer Conversation](assess-conduct-adoption-and-change-management-conversation.md)
6.  [Remediate](phase-remediate.md)
    -  [Address Technical Gaps](remediate-address-technical-gaps.md)
7.  [Enable](phase-enable.md)
    -  [Enable Services](enable-enable-services.md)
9.  [Migrate](phase-migrate.md)
    - [FastTrack Migration Process](migrate-migration.md)