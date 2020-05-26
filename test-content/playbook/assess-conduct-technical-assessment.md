---  
# required metadata  
title: FastTrack Playbook - Conduct Technical Assessment  
description: FastTrack Playbook - Conduct Technical Assessment  
author: Ryan Meehan  
ms.author: ryanme  
manager: eduardod  
ms.date: 4/29/2020  
ms.topic: playbook  
ms.prod: non-product-specific  
ms.custom: internal-playbook  
ft.audience: internal  
ft.owner: ryanme  
---  
[!INCLUDE [Playbook Feedback](./includes/questions-feedback.md)]  

# Conduct Technical Assessment

Phase: **Assess**  
Motions: **Customer Health / RFA / Targeting**  
[!INCLUDE [Data Privacy](./includes/playbook-data-privacy.md)]  

## Overview

The Conduct Technical Assessment process allows the FastTrack team to
develop an understanding of the customer's infrastructure and business
needs and determine what is needed for a smooth transition to the cloud.
This assessment includes the customer's on-premise environment, user
security model, remote access restrictions and any infrastructure
constraints that may potentially slow the deployment process. 

Note: The Migration Benefit is only for customers with over 500
entitlements for specified services (Exchange, SharePoint, OneDrive as
the *destination*).  

## Objectives

  - Identify infrastructure design and capacity: 
      - Firewall layout and capacity
      - Internet connection to www or how other sites are connected
      - Software deployment methods and current versions 
      - User account creation process
  - Business needs:
      - Products the customer wants to use
      - Software licenses expiring
      - Infrastructure to purchase
      - Mergers or Divestitures  
      - Implementation schedule
  - Security restrictions: 
      - RAS policies
      - User policies (related to migration team access needs)
      - Firewall policy restrictions
  - Implementation owners: 
      - Identify contacts for an on-premises service
      - Contacts responsible for driving implementation​  

## Approach

### Deliver Principles of Network Connectivity Guidance

Primary Role: **FastTrack Engineer**  
Motions: **Customer Health / RFA / Targeting**  
Applies To: **Core Onboarding**

The Conduct Network Assessment process allows the FastTrack team to
deliver guidance to customers to help them understand Microsoft's
recommendations on connectivity best practices, and additionally
understand how the customer's existing infrastructure aligns with that
guidance.

- Provide guidance on Office 365/Microsoft 365 Principles of Network Connectivity
- Differentiate critical SaaS traffic, treat & trust various categories of network traffic differently  
- Egress connections locally, ensuring minimal latency to Microsoft's infrastructure
- Optimize route length to edge of Microsoft's network  
- ​Evaluate bypass of extraneous network security devices/processes
- Ensure customer understands Microsoft's long-term direction to enable alignment of connectivity strategy between customer and Microsoft
- Identify egress paths from customer sites to Microsoft's global network
- Identify potential misconfigurations of network infrastructure which might cause issues with end-user experience
- Determine whether proxies (particularly SSL break & inspect) are in use with critical workload traffic

Network connectivity guidance is required for all new customers (early in the engagement), and for customers re-engaging on additional workloads.  

The purpose of providing network connectivity guidance early in the engagement is to ensure that customers are properly configured to be able to consume any Office 365/Microsoft 365 service with acceptable performance and availability.  

A FastTrack Engineer will deliver the Principles of Network Connectivity conversation, utilizing the deck here:  

[Office 365 Network Guidance​](https://aka.ms/AA75mhp)  

If specialized assistance is required to deliver guidance to a customer due to complex infrastructure or unique requirements, a Networking SME may be requested via the normal FastTrack resource request process.  

**Step Inputs (the checklist of items you should collect to be successful with this step)**  
- Engagement Management note documenting the following: 
    - DIBS for workloads and services in-scope
    - Resources customer needs regarding network connectivity to get started with Office 365 / Microsoft 365 or with deploying a new workload  

**Step Outputs (the set of items you should make sure are documented to successfully exit this step)**
- Environment note documenting the following:
    - Egress paths from customer sites to Microsoft's global network – if relevant  
    - Potential misconfigurations of network infrastructure which might cause issues with end-user experience – if relevant 
    - Proxies (particularly SSL break & inspect) are in use within customers environment with critical workload traffic – if relevant
- Technical Enablement note documenting the following: 
    - Delivered Network Guidance deck to customer
    - (If applicable) A networking SME was requested for customers needing specialized assistance to complex infrastructure or unique requirements


#### FTOP Tasks

| Task ID | Task Name                                           | (M)andatory / (O)ptional |   FastTrack Role   | Services        |
| ------- | --------------------------------------------------- | :----------------------: | :----------------: | --------------- |
| 4071    | Deliver Principles of Network Connectivity Guidance |            M             | FastTrack Engineer | Core Onboarding |

### Run Network Onboarding Tool

Primary Role: **FastTrack Engineer**  
Motions: **Customer Health / RFA / Targeting**  
Applies To: **Core Onboarding**

Network connectivity guidance is required for all new customers (early in the engagement), and for customers re-engaging on additional workloads.  

The purpose of providing network connectivity guidance early in the
engagement is to ensure that customers are properly configured to be
able to consume any Office 365/Microsoft 365 service with acceptable
performance and availability.  

An FE should deliver the Principles of Network Connectivity
conversation, utilizing the deck here:  [Office 365 Network Guidance​](https://fasttrack-docs.microsoft.com/collateral/O365-content.html). 

If specialized assistance is required to deliver guidance to a customer due to complex infrastructure or unique requirements, a Networking SME
may be requested via the normal FastTrack resource request process. 

Usage of the Network Onboarding Tool should follow delivery of the
Principles of Network Connectivity guidance. The tool will help to
assess whether the customer's network is well aligned to our guidance
and will provide specific remediation suggestions to the customer.  The tool should be run from each customer site (or at least a
representative set given an understanding of the customer's overall
network architecture).  Customers can access the tool at [aka.ms/netonboard](http://aka.ms/netonboard).  

As part of helping customers go through the process of running the tool,
FastTrack Engineers must avoid storing the output from the tool, as it
contains details of the customer's internal network configuration. To
help the customer utilize the recommendations produced by the tool, the
output can be saved to PDF within the browser by the customer and shared
using a secure method, or alternatively the customer can share the
output via a screen sharing session to discuss with a FastTrack
Engineer.  

If specialized assistance is required to assist the customer with
running the Network Onboarding tool due to complex infrastructure or
unique requirements, a Networking SME may be requested via the normal
FastTrack resource request process.  

**Step Inputs (the checklist of items you should collect to be successful with this step)**
- Technical Enablement note documenting the following: 
    - Delivered Network Guidance deck to customer
    - (If applicable) A networking SME was requested for customers needing specialized assistance to complex infrastructure or unique requirements

**Step Outputs (the set of items you should make sure are documented to successfully exit this step)**
- Environment note documenting the following:
    - Confirmed Network onboarding tool was run by the customer
    - Remediation steps surfaced via the Network Onboarding Tool for the customer to address 
- Technical Enablement note documenting the following: 
    - A networking SME was requested for customers needing specialized assistance to run the Networking Onboarding Tool due to complex infrastructure or unique requirements


#### FTOP Tasks

| Task ID | Task Name                   | (M)andatory / (O)ptional |   FastTrack Role   | Services        |
| ------- | --------------------------- | :----------------------: | :----------------: | --------------- |
| 4072    | Run Network Onboarding Tool |            M             | FastTrack Engineer | Core Onboarding |

### Conduct Cloud-Attach Assessment

Primary Role: **FastTrack Manager**  
Motions: **Customer Health / RFA / Targeting**  
Applies To: **Intune**

Conduct Cloud-Attach Assessment​  

**Step Inputs (the checklist of items you should collect to be successful with this step)** 
- L1 status for Intune is In Progress
- System Center Configuration Manager version
- Count of Windows 10 devices to be co-managed  

**Step Outputs (the set of items you should make sure are documented to successfully exit this step)**
- Engagement Management Note containing the following:
    - (If Applicable) Verification that EMS SME was requested



#### FTOP Tasks

| Task ID | Task Name                                         | (M)andatory / (O)ptional |  FastTrack Role   | Services |
| ------- | ------------------------------------------------- | :----------------------: | :---------------: | -------- |
| 4039    | Intune - (Wizard) Conduct Cloud-Attach Assessment |            M             | FastTrack Manager | Intune   |

### Create Remediation Checklist

Primary Role: **FastTrack Engineer**  
Motions: **Customer Health / RFA / Targeting**  
Applies To: **All Services**

Create Remediation checklist: 

  - Download [remediation
    checklist](https://aka.ms/AA7628g)
    and remove any services the customer will not deploy

In the assess phase should you see project risks such as blockers, out
of scope items, customer task constraints, etc., this is a good time to
discuss the possibility of a FastTrack Ready Partner to compliment the
FastTrack benefit.  If the customer would like to use partners, execute
Quickleads task 983 to send a referral to a partner.  You can find
content on Quickleads [here](https://aka.ms/AA5ctuy), and to enable the
request you can find the email [here](https://aka.ms/AA6cav5).


> Examples:
> 
>   - Identity - Clean up or dependencies
>   - Network
>   - Out of FastTrack benefit scope
>   - Hands on keyboard needs / complex configuration  

**Step Inputs (the checklist of items you should collect to be successful with this step)**
- L1 status for each In Progress workload
- Technical Enablement note documenting the following:
    - (If applicable) Verification that a partner was requested and selected by the customer  

**Step Outputs (the set of items you should make sure are documented to successfully exit this step)**
- Technical Enablement note documenting the following:
    - List of blockers, constraints, out of scope items
    - List of customer and (if applicable) partner resources receiving the remediation checklist


#### FTOP Tasks

| Task ID | Task Name                                                   | (M)andatory / (O)ptional |   FastTrack Role   | Services     |
| ------- | ----------------------------------------------------------- | :----------------------: | :----------------: | ------------ |
| 3070    | Create Remediation Checklist                                |            M             | FastTrack Engineer | All Services |
| 1049    | Review Remediation Checklist with customer for action items |            M             | FastTrack Engineer | All Services |

### Create EMS Remediation Checklist with Customer for Action Items

Primary Role: **SME**  
Motions: **Customer Health / RFA / Targeting**  
Applies To: **AADP / Intune**

Create EMS Remediation checklist:

  - Download [EMS remediation
    checklist​](https://aka.ms/AA75mh1) and remove
    any tasks the customer will not utilize

In the assess phase should you see project risks such as blockers, out
of scope items, customer task constraints, etc., this is a good time to
discuss the possibility of a FastTrack Ready Partner to compliment the
FastTrack benefit.  If the customer would like to use partners, execute
Quickleads task 983 to send a referral to a partner.  You can find
content on Quickleads [here](https://aka.ms/AA5ctuy), and to enable the
request you can find the email [here](https://aka.ms/AA6cav5).

Examples:  

  - Identity - Clean up or dependencies
  - Network
  - Out of FastTrack benefit scope
  - Hands on keyboard needs / complex configuration  

**Step Inputs (the checklist of items you should collect to be successful with this step)**
- L1 status for EMS is set to In Progress
- Completed Security Best Practice Hand-off form 
- Technical Enablement note documenting the following:
    - (If applicable) Verification that a partner was requested and selected by the customer  

**Step Outputs (the set of items you should make sure are documented to successfully exit this step)** 
- Technical Enablement note documenting the following:
    - List of blockers, constraints, out of scope items
    - List of customer and (if applicable) partner resources receiving the remediation checklist


#### FTOP Tasks

| Task ID | Task Name                                                       | (M)andatory / (O)ptional | FastTrack Role | Services      |
| ------- | --------------------------------------------------------------- | :----------------------: | :------------: | ------------- |
| 4075    | Create EMS Remediation Checklist with Customer for Action Items |            M             |      SME       | AADP / Intune |

### Migration Assessment

Primary Role: **FastTrack Manager**  
Motions: **Customer Health / RFA / Targeting**  
Applies To: **Exchange / OneDrive for Business / SharePoint**

If customer intends to use Migration benefit, additional activities are
required. The Migration Questionnaire (Task 2050 Provide migration
questionnaire to customer) should be provided to customer and a
Migration Velocity Manager (MVM) request (Task 2278 Request MVM
assignment) should be submitted.

**Step Inputs (the checklist of items you should collect to be successful with this step)** 
- Engagement Management note documenting the following:
    - Migration Questionnaire delivered to customer
    - Migration Velocity Manager (MVM) has been requested

**Step Outputs (the set of items you should make sure are documented to successfully exit this step)**
- Engagement Management note documenting the following:
    - (If applicable) Verification that Exchange source system migration questionnaire was uploaded  


#### FTOP Tasks

| Task ID | Task Name                                                                                                               | (M)andatory / (O)ptional |       FastTrack Role       | Services                                      |
| ------- | ----------------------------------------------------------------------------------------------------------------------- | :----------------------: | :------------------------: | --------------------------------------------- |
| 2050    | Provide migration questionnaire to customer                                                                             |            O             |     FastTrack Manager      | Exchange / OneDrive for Business / SharePoint |
| 2278    | Request MVM assignment                                                                                                  |            O             |     FastTrack Manager      | Exchange / OneDrive for Business / SharePoint |
| 4099    | Verify if AAD Security Defaults are Enabled on Tenant Prior to Migration |            M             |     FastTrack Manager      | Exchange / OneDrive for Business / SharePoint |
| 4100    | Request AADP P2 Trial Licenses for Migrations |            O             |     FastTrack Manager      | Exchange / OneDrive for Business / SharePoint |
| 3217    | Request Temporary Enterprise Licenses needed to perform Migrations                                                      |            O             | Migration Velocity Manager | Exchange / OneDrive for Business / SharePoint |
| 3312    | Share and discuss FT migration remote connectivity                                                                      |            O             | Migration Velocity Manager | Exchange / OneDrive for Business / SharePoint |
| 3308    | Exchange - Notes Migration: Request BT resources for the Rich Coexistence and share the deployment checklist (optional) |            O             | Migration Velocity Manager | Exchange                                      |
| 1034    | Exchange - Update and upload source system migration questionnaire                                                      |            M             |     FastTrack Engineer     | Exchange                                      |

### Perform Assessments

Primary Role: **FastTrack Engineer**  
Motions: **Customer Health / RFA / Targeting**  
Applies To: **All Services**

  - Assess tasks for a service as needed.
  - Some service tasks may:
      - Link to public wizard.
      - ​Link to additional guidance documents.
      - Be required when migration benefit is used.
      - Be designated for only Enterprise customer; check with FastTrack
        Engineer (FE) peers or Subject Matter Expert (SME) for questions
        relevant service tasks.   

**Step Inputs (the checklist of items you should collect to be successful with this step)**
- L1 status for every In Progress workload
- (If Applicable) Teams Discovery Deck
- Technical Enablement note or Engagement Management note containing:
    - Customer environment details (source systems, network configurations, etc.)
    - (If applicable) Relevant service tasks for Enterprise customers  

**Step Outputs (the set of items you should make sure are documented to successfully exit this step)**
- Technical Enablement note documenting the following:
    - (If applicable) Verification that Exchange source system migration questionnaire was uploaded  


#### FTOP Tasks

| Task ID | Task Name                                                                           | (M)andatory / (O)ptional |   FastTrack Role   | Services           |
| ------- | ----------------------------------------------------------------------------------- | :----------------------: | :----------------: | ------------------ |
| 3268    | Teams - Assess Microsoft Teams                                                      |            M             | FastTrack Engineer | Teams              |
| 3226    | EDU: Assess Classroom and SDS Sync                                                  |            O             | FastTrack Engineer | Classroom/SDS      |
| 2393    | SfB - Review multiple forests Skype for Business advance features/Lync requirements |            O             | FastTrack Engineer | Skype for Business |
| 2455    | SfB - Run Office 365 Network Analysis Tool                                          |            O             | FastTrack Engineer | Skype for Business |
| 2456    | SfB - Run Remote Connectivity Analyzer                                              |            O             | FastTrack Engineer | Skype for Business |
| 2457    | SfB - Run Lync Bandwidth Calculator 2.50                                            |            O             | FastTrack Engineer | Skype for Business |

### Technical Assessment Complete

Primary Role: **FastTrack Manager**  
Motions: **Customer Health / RFA / Targeting**  
Applies To: **All Services**

Once all scoped Technical Assessments are delivered, mark (Task 1699
Technical Assessment Complete) as complete.  

**Step Inputs (the checklist of items you should collect to be successful with this step)**
- Technical Enablement note documenting the following:
    - (If applicable) Verification that Exchange source system migration questionnaire was uploaded  

**Step Outputs (the set of items you should make sure are documented to successfully exit this step)**
- Engagement Management note documenting the following:
    - Remediation Checklist delivered to customer


#### FTOP Tasks

| Task ID | Task Name                                                                                            | (M)andatory / (O)ptional |  FastTrack Role   | Services     |
| ------- | ---------------------------------------------------------------------------------------------------- | :----------------------: | :---------------: | ------------ |
| 1699    | Technical Assessment Complete: Deployment Plan including Remediation Checklist delivered to customer |            M             | FastTrack Manager | All Services |


## Key Inputs

  - Customer understands what the FastTrack Center (FTC) provides.
  - Customer is interested in enabling one or more services. 
  - Customer identifies resources to work with FastTrack.

## Key Outputs

  - Full understanding of customer's infrastructure:
      -  Source environments being migrated
      -  Constraints that may slow or block deployment
  - Remediation Checklist created and reviewed with customer
  - Identify any service-specific customer contacts

## Next Steps

  - Based on identified workloads to onboard, proceed to [Conduct
    Services
    Workshop](./assess-conduct-services-workshops.md).
  - If no workshops are required, proceed to [Address Technical
    Gaps](./remediate-address-technical-gaps.md).

## Refresh Summary

| Date       | Who Changed       | What Changed                                                                               |
| ---------- | ----------------- | ------------------------------------------------------------------------------------------ |
| 1/31/2020  | Ryan Meehan | Added tasks 4099, 4100 |
| 10/25/2019 | Ryan Meehan       | Reordered Conduct Cloud-Attach Assessment step                                             |
| 9/25/2019  | Rosie Arrieta     | Added steps Create EMS Remediation Checklist and Run Network Onboarding Tools              |
| 9/25/2019  | Rosie Arrieta     | Added steps Conduct Cloud-Attach Assessment and Deliver Principles of Network Connectivity |
| 6/28/2019  | Maria Conceição   | Modified step "Create Remediation Checklist"                                               |
| 4/26/2019  | Ryan Meehan       | Removed Deprecated Tasks                                                                   |
| 4/5/2019   | Ryan Meehan       | Changed seat count requirement to 500                                                      |
| 2/22/2019  | Ryan Meehan       | Playbook migration to GitHub                                                               |
| 10/26/2018 | Mark Eichenberger | Playbook Created                                                                           |
