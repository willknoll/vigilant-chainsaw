---  
# required metadata  
title: FastTrack Partner Playbook - Conduct Technical Assessment  
description: FastTrack Partner Playbook - Conduct Technical Assessment  
author: Ryan Meehan
ms.author: v-cekenn
manager: pagrim
ms.date: 10/03/2019  
ms.topic: partner-playbook  
ms.prod: non-product-specific  
ms.custom: partner-playbook  
ft.audience: partner  
ft.owner: pagrim
---  

# Conduct Technical Assessment

Phase: **Assess**  
Motions: **Customer Health / RFA / Targeting**  

## Overview

The Conduct Technical Assessment process allows the FastTrack team to
develop an understanding of the customer's infrastructure and business
needs and determine what is needed for a smooth transition to the cloud.
This assessment includes the customer's on-premise environment, user
security model, remote access restrictions and any infrastructure
constraints that may potentially slow the deployment process.

Note: The Migration Benefit is only for customers with over 500 entitlements for specified services (Exchange, SharePoint, OneDrive as the *destination*).  

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

The Conduct Network Assessment process allows the FastTrack team to deliver guidance to customers to help them understand Microsoft's recommendations on connectivity best practices, and additionally understand how the customer's existing infrastructure aligns with that guidance.

Provide guidance on Office 365/Microsoft 365 Principles of Network Connectivity

  - Differentiate critical SaaS traffic, treat & trust various categories of network traffic differently  
  - Egress connections locally, ensuring minimal latency to Microsoft's infrastructure
  - Optimize route length to edge of Microsoft's network  
  - ​Evaluate bypass of extraneous network security devices/processes

Ensure customer understands Microsoft's long-term direction to enable alignment of connectivity strategy between customer and Microsoft*

Identify egress paths from customer sites to Microsoft's global network

Identify potential misconfigurations of network infrastructure which might cause issues with end-user experience

Determine whether proxies (particularly SSL break & inspect) are in use with critical workload traffic

Network connectivity guidance is required for all new customers (early in the engagement), and for customers re-engaging on additional workloads.  

The purpose of providing network connectivity guidance early in the engagement is to ensure that customers are properly configured to be able to consume any Office 365/Microsoft 365 service with acceptable performance and availability.  

A FastTrack Engineer will deliver the Principles of Network Connectivity conversation, utilizing the deck here:  

[Office 365 Network Guidance​](https://aka.ms/O365NetworkGuidanceLocalized)  

If specialized assistance is required to deliver guidance to a customer due to complex infrastructure or unique requirements, a Networking SME may be requested via the normal FastTrack resource request process.  

#### FTOP Tasks

| Task ID | Task Name                                           | (M)andatory / (O)ptional |   FastTrack Role   | Services        |
| ------- | --------------------------------------------------- | :----------------------: | :----------------: | --------------- |
| 4071    | Deliver Principles of Network Connectivity Guidance |            M             | FastTrack Engineer | Core Onboarding |

### Run Network Onboarding Tool

Primary Role: **FastTrack Engineer**  
Motions: **Customer Health / RFA / Targeting**  
Applies To: **Core Onboarding**

Network connectivity guidance is required for all new customers (early in the engagement), and for customers re-engaging on additional workloads.  

The purpose of providing network connectivity guidance early in the engagement is to ensure that customers are properly configured to be able to consume any Office 365/Microsoft 365 service with acceptable performance and availability.  

An FE should deliver the Principles of Network Connectivity conversation, utilizing the deck here: [Office 365 Network Guidance​](https://aka.ms/O365NetworkGuidanceLocalized)

If specialized assistance is required to deliver guidance to a customer due to complex infrastructure or unique requirements, a Networking SME may be requested via the normal FastTrack resource request process.  

Usage of the Network Onboarding Tool should follow delivery of the Principles of Network Connectivity guidance. The tool will help to assess whether the customer's network is well aligned to our guidance and will provide specific remediation suggestions to the customer.  

The tool should be run from each customer site (or at least a representative set given an understanding of the customer's overall network architecture). Customers can access the tool [here](http://aka.ms/netonboard).  

As part of helping customers go through the process of running the tool, FastTrack Engineers must avoid storing the output from the tool, as it contains details of the customer's internal network configuration. To help the customer utilize the recommendations produced by the tool, the output can be saved to PDF within the browser by the customer and shared using a secure method, or alternatively the customer can share the output via a screen sharing session to discuss with a FastTrack Engineer.  

If specialized assistance is required to assist the customer with running the Network Onboarding tool due to complex infrastructure or unique requirements, a Networking SME may be requested via the normal FastTrack resource request process.  
  
#### FTOP Tasks

| Task ID | Task Name                   | (M)andatory / (O)ptional |   FastTrack Role   | Services        |
| ------- | --------------------------- | :----------------------: | :----------------: | --------------- |
| 4072    | Run Network Onboarding Tool |            M             | FastTrack Engineer | Core Onboarding |

### Create Remediation Checklist

Primary Role: **FastTrack Engineer**  
Motions: **Customer Health / RFA / Targeting**  
Applies To: **All Services**

Create Remediation checklist: 

  - Download [**remediation checklist**](https://aka.ms/PartnerRemediationChecklist) and remove any services the customer will not deploy

In the assess phase should you see project risks such as blockers, out of scope items, customer task constraints, etc., this is a good time to discuss the possibility of a FastTrack Ready Partner to compliment the FastTrack benefit.  If the customer would like to use partners, execute Quickleads task 983 to send a referral to a partner.  You can find content on Quickleads [here](https://ftdocs-bcm.azureedge.net/public/referrals-training-v1.pptx), and to enable the request contact your FastTrack Partner Manager (FPM).
  
Examples:

- Identity - Clean up or dependencies
- Network
- Out of FastTrack benefit scope
- Hands on keyboard needs / complex configuration  

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

  - Download [**EMS remediation checklist​**](https://aka.ms/frp-EMS-Remediation-Checklist) and remove any tasks the customer will not utilize

In the assess phase should you see project risks such as blockers, out of scope items, customer task constraints, etc., this is a good time to discuss the possibility of a FastTrack Ready Partner to compliment the FastTrack benefit.  If the customer would like to use partners, execute Quickleads task 983 to send a referral to a partner.  You can find content on Quickleads [**here**](https://aka.ms/AA5ctuy), and to enable the request you can email your FPM.

Examples:  

  - Identity - Clean up or dependencies
  - Network
  - Out of FastTrack benefit scope
  - Hands on keyboard needs / complex configuration  

#### FTOP Tasks

| Task ID | Task Name                                                       | (M)andatory / (O)ptional | FastTrack Role | Services      |
| ------- | --------------------------------------------------------------- | :----------------------: | :------------: | ------------- |
| 4075    | Create EMS Remediation Checklist with Customer for Action Items |            M             |      SME       | AADP / Intune |

### Migration Assessment

Primary Role: **FastTrack Manager**  
Motions: **Customer Health / RFA / Targeting**  
Applies To: **Exchange / OneDrive for Business / SharePoint**

If customer intends to use Migration benefit, additional activities are required. The Migration Questionnaire (Task 2050 Provide migration questionnaire to customer) should be provided to customer and a Migration Velocity Manager (MVM) request (Task 2278 Request MVM assignment) should be submitted.

#### FTOP Tasks

| Task ID | Task Name                                                                                                                                                 | (M)andatory / (O)ptional | FastTrack Role             | Services                                      |
|---------|-----------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------|----------------------------|-----------------------------------------------|
| 2050    | [Provide migration questionnaire to customer](https://aka.ms/AA6s1qw)                                                                                                               | O                        | FastTrack Manager          | Exchange / OneDrive for Business / SharePoint |
| 2278    | Request MVM assignment                                                                                                                                    | O                        | FastTrack Manager          | Exchange / OneDrive for Business / SharePoint |
| [4099](https://ftdocs-bcm.azureedge.net/public/partner-customer-awareness-security-defaults-impact-mig-v1.docx)    | Verify if AAD Security Defaults are Enabled on Tenant Prior to Migration [View Docs article](https://go.microsoft.com/fwlink/?linkid=2114497&clcid=0x409) | M                        | FastTrack Manager          | Exchange / OneDrive for Business / SharePoint |
| 4100    | Request AADP P2 Trial Licenses for Migrations – FRP work with MVM                                                                                         | O                        | FastTrack Manager          | Exchange / OneDrive for Business / SharePoint |
| 3217    | Request Temporary Enterprise Licenses needed to perform Migrations                                                                                        | O                        | Migration Velocity Manager | Exchange / OneDrive for Business / SharePoint |
| 3312    | Share and discuss FT migration remote connectivity                                                                                                        | O                        | Migration Velocity Manager | Exchange / OneDrive for Business / SharePoint |
| 3308    | Exchange - Notes Migration: Request BT resources for the Rich Coexistence and share the deployment checklist (optional)                                   | O                        | Migration Velocity Manager | Exchange                                      |
| 1034    | Exchange - Update and upload source system migration questionnaire                                                                                        | M                        | FastTrack Engineer         | Exchange                                      |

### Perform Assessments

Primary Role: **FastTrack Engineer**  
Motions: **Customer Health / RFA / Targeting**  
Applies To: **All Services**

  - Assess tasks for a service as needed.
  - Some service tasks may:
      - Link to public wizard.
      - ​Link to additional guidance documents.
      - Be required when migration benefit is used.
      - Be designated for only Enterprise customer; check with FastTrack Engineer (FE) peers or Subject Matter Expert (SME) for questions relevant service tasks.

#### FTOP Tasks

| Task ID | Task Name                                                                           | (M)andatory / (O)ptional |   FastTrack Role   | Services           |
| ------- | ----------------------------------------------------------------------------------- | :----------------------: | :----------------: | ------------------ |
| [3268](https://aka.ms/FRPTeamsDiscoveryDiscussion)    | Teams - Assess Microsoft Teams                                                      |            M             | FastTrack Engineer | Teams              |
| 3226    | EDU: Assess Classroom and SDS Sync                                                  |            O             | FastTrack Engineer | Classroom/SDS      |
| 2121    | Exchange - If applicable, provide customer the GroupWise client Discovery utility   |            O             | FastTrack Engineer | Exchange           |
| 2393    | SfB - Review multiple forests Skype for Business advance features/Lync requirements |            O             | FastTrack Engineer | Skype for Business |
| 2455    | SfB - Run Office 365 Network Analysis Tool                                          |            O             | FastTrack Engineer | Skype for Business |
| 2456    | SfB - Run Remote Connectivity Analyzer                                              |            O             | FastTrack Engineer | Skype for Business |
| 2457    | SfB - Run Lync Bandwidth Calculator 2.50                                            |            O             | FastTrack Engineer | Skype for Business |

### Technical Assessment Complete

Primary Role: **FastTrack Manager**  
Motions: **Customer Health / RFA / Targeting**  
Applies To: **All Services**

Once all scoped Technical Assessments are delivered, mark (Task 1699 Technical Assessment Complete) as complete.

#### FTOP Tasks

| Task ID | Task Name                                                                                            | (M)andatory / (O)ptional |  FastTrack Role   | Services     |
| ------- | ---------------------------------------------------------------------------------------------------- | :----------------------: | :---------------: | ------------ |
| 1699    | Technical Assessment Complete: Deployment Plan including Remediation Checklist delivered to customer |            M             | FastTrack Manager | All Services |

### Conduct Cloud-Attach Assessment

Primary Role: **FastTrack Manager**  
Motions: **Customer Health / RFA / Targeting**  
Applies To: **Intune**

Conduct Cloud-Attach Assessment​  

#### FTOP Tasks

| Task ID | Task Name                                         | (M)andatory / (O)ptional |  FastTrack Role   | Services |
| ------- | ------------------------------------------------- | :----------------------: | :---------------: | -------- |
| 4039    | Intune - (Wizard) Conduct Cloud-Attach Assessment |            M             | FastTrack Manager | Intune   |

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

  - Based on identified workloads to onboard, proceed to [Conduct Services Workshop](assess-conduct-services-workshops-partner.md).
  - If no workshops are required, proceed to [Address Technical Gaps](remediate-address-technical-gaps-partner.md).

## Refresh Summary

|Date|Who Changed|What Changed|Notes|
|---------|---------------|----------------------------|-------------|
|10/03/2019| Celia Kennedy| Partner Playbook Updated| |

[Home](http://partner-docs.microsoft.com)
