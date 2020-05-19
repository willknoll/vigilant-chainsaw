---  
# required metadata  
title: FastTrack Playbook - Teams Deployment Playbook  
description: FastTrack Playbook - Teams Deployment Playbook  
author: Rosie Arrieta  
ms.author: ryanme  
manager: eduardod  
ms.date: 1/17/2020  
ms.topic: playbook  
ms.prod: non-product-specific  
ms.custom: internal-playbook  
ft.audience: internal  
ft.owner: ryanme   
---  
[!INCLUDE [Playbook Feedback](./includes/questions-feedback.md)]  

# FastTrack Teams Deployment Playbook

## Overview

The Teams Deployment Playbook will provide all of the necessary details to handle the technical deployment of Teams. For details around how to educate your customer on all the necessary steps to Enable Teams and the expectations for managing the customer relationship please refer to the following supplementary Playbooks.  

- FastTrack General Customer Engagement Playbook
- FastTrack Teams Customer Education Playbook

## Approach

### Deploy Securely

### Prepare Identity

Primary Role: **FastTrack Engineer**  
Motions: **Customer Health / RFA / Targeting**  
Applies To: **Core Onboarding**

**Identify Existing Forests and Clean Up Malformed UP​Ns**

This will be the first discussion to lead the customer down the path of
setting up a secure foundation for their transition to the cloud. FE
should come out of this with a good understanding of their current
environment and infrastructure and will help develop a path forward.
Meeting with the customer to have a conversation to understand their
current environment/structure. Utilize the Toolset to clean up the
customer's environment to prepare for identity synchronization  

  - [Toolset](https://docs.microsoft.com/en-us/office365/enterprise/install-and-run-idfix)  

**Finalize Authentication Method**

Have a conversation with the customer to discuss and choose the
authentication method. This can only happen after you have identified
the existing forests and the customer has cleaned up their environment
to prepare for identity synchronization. 

  - [Choose Azure AD
    Authentication](https://go.microsoft.com/fwlink/?linkid=873173)

**Configure AAD Connect**

Utilize [AAD Connect Prescribed
Tasks](https://docs.microsoft.com/en-us/office365/enterprise/set-up-directory-synchronization)
to configure AAD Connect. Do not synchronize identities at this time.

Before synchronizing identities, set up two cloud-only, break glass
accounts to mitigate scenarios where you may be unable to sign into a
regular admin account. Next, configure a Conditional Access Policy that
blocks all access by default. Be sure to exclude your break glass
accounts to avoid administrators getting locked out of the portal.
Finally, enable the Baseline Policy: MFA for Admins to ensure your
privileged​ users will be registered for MFA and protected by default. 

  - [Break glass
    accounts](https://docs.microsoft.com/en-us/azure/active-directory/users-groups-roles/directory-emergency-access)
  - [Baseline Policy: MFA for
    admins](https://docs.microsoft.com/en-us/azure/active-directory/conditional-access/baseline-protection)

[](https://docs.microsoft.com/en-us/azure/active-directory/conditional-access/baseline-protection)**Identity
Synchronization**

The customer​ should not synchronize identities until:  

  - Break glass accounts are created
  - A Block All conditional access policy is configured
  - Baseline policy: MFA for admins is enabled

​At the conclusion of this step, the baseline security framework around
identity will be in place. Identity synchronization using AAD Connect
configured previously will occur in Task 1141: Set Up Directory
Synchronization (Azure AD Connect) in the enable phase.  

  

#### FTOP Tasks

| Task ID | Task Name                                      | (M)andatory / (O)ptional |   FastTrack Role   | Services        |
| ------- | ---------------------------------------------- | :----------------------: | :----------------: | --------------- |
| 3736    | Guidance for Choosing an Authentication Method |            M             | FastTrack Engineer | Core Onboarding |

### Conduct Technical Assessment

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
assess whether the customer’s network is well aligned to our guidance
and will provide specific remediation suggestions to the customer.  The tool should be run from each customer site (or at least a
representative set given an understanding of the customer’s overall
network architecture).  Customers can access the tool at [aka.ms/netonboard](http://aka.ms/netonboard).  

As part of helping customers go through the process of running the tool,
FastTrack Engineers must avoid storing the output from the tool, as it
contains details of the customer’s internal network configuration. To
help the customer utilize the recommendations produced by the tool, the
output can be saved to PDF within the browser by the customer and shared
using a secure method, or alternatively the customer can share the
output via a screen sharing session to discuss with a FastTrack
Engineer.  

If specialized assistance is required to assist the customer with
running the Network Onboarding tool due to complex infrastructure or
unique requirements, a Networking SME may be requested via the normal
FastTrack resource request process.  
  

#### FTOP Tasks

| Task ID | Task Name                   | (M)andatory / (O)ptional |   FastTrack Role   | Services        |
| ------- | --------------------------- | :----------------------: | :----------------: | --------------- |
| 4072    | Run Network Onboarding Tool |            M             | FastTrack Engineer | Core Onboarding |


### Create Remediation Checklist

Primary Role: **FastTrack Engineer**  
Motions: **Customer Health / RFA / Targeting**  
Applies To: **All Services**

Create Remediation checklist: 

  - Download [remediation
    checklist](https://microsoft.sharepoint.com/teams/ftccm/FTOP/Migration/Deployment%20Remediation%20Checklist/en-us_DeploymentRemediationChecklist.xlsx?d=w79abaae0fa6d43c0aa30fa2d82507fe2)
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

#### FTOP Tasks

| Task ID | Task Name                                                   | (M)andatory / (O)ptional |   FastTrack Role   | Services     |
| ------- | ----------------------------------------------------------- | :----------------------: | :----------------: | ------------ |
| 3070    | Create Remediation Checklist                                |            M             | FastTrack Engineer | All Services |
| 1049    | Review Remediation Checklist with customer for action items |            M             | FastTrack Engineer | All Services |


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

#### FTOP Tasks

| Task ID | Task Name                                                                           | (M)andatory / (O)ptional |   FastTrack Role   | Services           |
| ------- | ----------------------------------------------------------------------------------- | :----------------------: | :----------------: | ------------------ |
| 3268    | Teams - Assess Microsoft Teams                                                      |            M             | FastTrack Engineer | Teams              |
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

#### FTOP Tasks

| Task ID | Task Name                                                                                            | (M)andatory / (O)ptional |  FastTrack Role   | Services     |
| ------- | ---------------------------------------------------------------------------------------------------- | :----------------------: | :---------------: | ------------ |
| 1699    | Technical Assessment Complete: Deployment Plan including Remediation Checklist delivered to customer |            M             | FastTrack Manager | All Services |

### Address Technical Gaps
### Conduct Checkpoint Meetings

Primary Role: **FastTrack Engineer**  
Motions: **Customer Health / RFA / Targeting**  
Applies To: **All Services**

Conduct a checkpoint meeting (weekly or other frequency) to review
progress on remediation steps.

### Assist with Remediation Steps

Primary Role: **FastTrack Engineer**  
Motions: **Customer Health / RFA / Targeting**  
Applies To: **All Services**

Assist with remediation steps as required.

#### FTOP Tasks

| Task ID | Task Name                                                        | (M)andatory / (O)ptional |   FastTrack Role   | Services           |
| ------- | ---------------------------------------------------------------- | :----------------------: | :----------------: | ------------------ |
| 3184    | AAD Connect Health - Verify System requirements                  |            O             | FastTrack Engineer | Core Onboarding    |
| 2193    | SfB - Advanced features remediation and long poles               |            O             | FastTrack Engineer | Skype for Business |
| 4073    | Network – Address identified network issues from netonboard tool |            O             | FastTrack Engineer | Core Onboarding    |

### Enterprise Additional Benefit Remediation

Primary Role: **FastTrack Engineer**  
Motions: **Customer Health / RFA / Targeting**  
Applies To: **Exchange / Skype for Business**

For approved enterprise customers only with 20,000 seats or more, or
with an exception.

#### FTOP Tasks

| Task ID | Task Name                                                   | (M)andatory / (O)ptional |     FastTrack Role     | Services                                      |
| ------- | ----------------------------------------------------------- | :----------------------: | :--------------------: | --------------------------------------------- |
| 3209    | SfB - User Migration Remediation                            |            O             |   FastTrack Engineer   | Skype for Business                            |

### Remediation Checklist Resolved

Primary Role: **FastTrack Manager**  
Motions: **Customer Health / RFA / Targeting**  
Applies To: **All Services**

Move to the enable phase and complete the Remediate Exit process.

#### FTOP Tasks

| Task ID | Task Name                                                                       | (M)andatory / (O)ptional |   FastTrack Role   | Services     |
| ------- | ------------------------------------------------------------------------------- | :----------------------: | :----------------: | ------------ |
| 3190    | Confirm the customer reviews and resolves anything in the remediation checklist |            M             | FastTrack Engineer | All Services |
| 1700    | Remediate Exit: All items in Remediation Checklist resolved                     |            M             | FastTrack Manager  | All Services |

### Enable Services

### Assist with Enablement

Primary Role: **FastTrack Manager**  
Motions: **Customer Health / RFA / Targeting**  
Applies To: **All Services**

Conduct sync meetings with customer as appropriate and assist with
enablement tasks.  

#### FTOP Tasks

| Task ID | Task Name                                                                           | (M)andatory / (O)ptional |       FastTrack Role       | Services                                      |
| ------- | ----------------------------------------------------------------------------------- | :----------------------: | :------------------------: | --------------------------------------------- |
| 1126    | Meet with Customer PM and Customer Tech Leads to enable Core and Services           |            M             |     FastTrack Engineer     | All Services                                  |

### Perform Enablement Tasks

Primary Role: **FastTrack Engineer**  
Motions: **Customer Health / RFA / Targeting**  
Applies To: **All Services**

Follow the Enable tasks for each service as needed. Some service tasks
may:

  - Link to public wizard
  - Link to additional guidance documents
  - Be required if migration benefit is to be used

#### FTOP Tasks

| Task ID | Task Name                                                                                                | (M)andatory / (O)ptional |       FastTrack Role       | Services                                                           |
| ------- | -------------------------------------------------------------------------------------------------------- | :----------------------: | :------------------------: | ------------------------------------------------------------------ |
| 3727    | Teams - Deliver Call Quality Dashboard Workshop                                                          |            M             |            SME             | Teams                                                              |
| 3725    | Teams - Configure Core Collab & Meetings (VOIP)                                                          |            M             |            SME             | Teams                                                              |
| 3724    | Teams - Configure Advanced Voice Services (PSTN)                                                         |            M             |            SME             | Teams                                                              |
| 3728    | Teams - Technically Enable Teams Service                                                                 |            M             |     FastTrack Manager      | Teams                                                              |
| 1641    | Setup custom domain                                                                                      |            M             |     FastTrack Engineer     | Core Onboarding                                                    |
| 1141    | {Wizard} Set Up Directory Synchronization (Azure AD Connect)                                             |            O             |     FastTrack Engineer     | Core Onboarding                                                    |
| 1134    | Create Cloud IDs                                                                                         |            O             |     FastTrack Engineer     | Core Onboarding                                                    |
| 1148    | {Wizard} Install and configure ADFS                                                                      |            O             |     FastTrack Engineer     | Core Onboarding                                                    |
| 2570    | Configure Cloud PBX with PSTN Calling                                                                    |            O             |     FastTrack Engineer     | Skype for Business - PSTN Calling / Skype for Business - Cloud PBX |
| 2201    | SfB - Configure SfB Split Domain Lync 2010/2013 Server                                                   |            O             |     FastTrack Engineer     | Skype for Business                                                 |
| 2567    | SfB - Configure SfB Split Domain for SfB 2015 Server                                                     |            O             |     FastTrack Engineer     | Skype for Business                                                 |
| 2260    | SfB - Configure SfB Room System Account                                                                  |            O             |     FastTrack Engineer     | Skype for Business                                                 |
| 2980    | SfB - {Wizard} Configure Skype for Business Standard Features                                            |            O             |     FastTrack Engineer     | Skype for Business                                                 |
| 3047    | Configure Cloud PSTN Conferencing                                                                        |            O             |     FastTrack Engineer     | Skype for Business - PSTN Conferencing                             |
| 2266    | SfB - Configure Skype for Business Core Features (IM/P only)                                             |            O             |     FastTrack Engineer     | Skype for Business                                                 |

### Teams - Skype to Teams Transition

Primary Role: **SME**  
Motions: **Customer Health / RFA / Targeting**  
Applies To: **Teams**

If the customer is receiving assistance for Skype to Teams transition
from a Teams SME or FastTrack Ready Partner for **mid-touch proactive
engagements (customers with 2,000 to 10,000 active SfBO users)**, use
the tasks below to capture the current status of the engagement.

**For customers with less than 2,000 or 10,000 active SfBO users**,
please see additional guidance around roles and responsibilities for
SfBO to Team transition activities see slide 6 in th​e attached [**Roles
and Responsibilities deck**.](https://aka.ms/FTCTeamsRnRs)  

**FastTrack Ready Partners**​​ – if you are leading the customer
transition, please continue to inform your assigned SME of your
engagement details so they can track task status on your behalf. 
Provide targeted Teams Only date and summary of customer status. ​

​​  

#### FTOP Tasks

| Task ID | Task Name                                     | (M)andatory / (O)ptional | FastTrack Role | Services |
| ------- | --------------------------------------------- | :----------------------: | :------------: | -------- |
| 3685    | Teams - Internal Readiness Assessment         |            M             |      SME       | Teams    |
| 3716    | Teams - Customer Upgrade Overview             |            M             |      SME       | Teams    |
| 3688    | Teams - Customer Strategy and Planning        |            M             |      SME       | Teams    |
| 3689    | Teams - Customer Upgrading                    |            M             |      SME       | Teams    |
| 3722    | Teams - Mid-touch Reactive Transition Support |            M             |      SME       | Teams    |

### Enterprise Additional Benefit Enablement

Primary Role: **FastTrack Engineer**  
Motions: **Targeting / RFA / Customer Health**  
Applies To: **All Services**

For approved enterprise customers only with 20,000 seats or more, or
with an exception.  

#### FTOP Tasks

| Task ID | Task Name                                                 | (M)andatory / (O)ptional |   FastTrack Role   | Services        |
| ------- | --------------------------------------------------------- | :----------------------: | :----------------: | --------------- |
| 3241    | Configure AD FS Client Access Policies                    |            O             | FastTrack Engineer | Core Onboarding |
| 3243    | Geo-redundant ADFS Configuration Guidance                 |            O             | FastTrack Engineer | Core Onboarding |

### All Scoped Services Enabled

Primary Role: **FastTrack Manager**  
Motions: **Customer Health / RFA / Targeting**  
Applies To: **All Services**

Move customer to Migrate phase and complete the appropriate task.

#### FTOP Tasks

| Task ID | Task Name                                                                      | (M)andatory / (O)ptional |  FastTrack Role   | Services     |
| ------- | ------------------------------------------------------------------------------ | :----------------------: | :---------------: | ------------ |
| 1701    | Enablement Complete: All in-scope services enabled; migration tools configured |            M             | FastTrack Manager | All Services |