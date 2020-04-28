--- 
# required metadata 
title: FastTrack Partner Playbook - Entitlement Status Notes Guidance
description: FastTrack Partner Playbook - Entitlement Status Notes Overview
ms.author: v-cekenn
manager: pagrim
ms.date: 10/03/2019 
ms.topic: partner-playbook 
ms.prod: non-product-specific 
ms.custom: partner-playbook 
ft.audience: partner
ft.owner: pagrim
--- 

# Entitlement Status Notes Guidance

Entitlement status notes should be used by the FastTrack Manager (FM) and certain subject matter expert (SME) teams to provide a current picture of the entitlements in each workload. Entitlement Status Notes are **concise** statements that describe a customer's intent or lack thereof to consume the service. When summarizing the current entitlement status, please make sure to include the **"why"** or **"reason"** method. This is one of the key components in your statement. Only a sentence or two is needed to sufficiently state the status. Updates should be provided as needed so that the workload entitlements have a clear and up to date description that accurately reflects workload intent.

Here are a few questions to consider when writing your note:

  - Is the customer successfully moving forward with onboarding? Does your note clearly convey that?
  - Is your customer blocked? If so, what is the **primary** blocker keeping them from moving forward?
  - Does your customer have intent? If the answer is no, have you stated why they lack intent for the service?
  - If you need assistance concisely describing the technical aspects of the note, you should work with your FastTrack Engineers (FE) to make sure the technical detail required is included.

When crafting your note, **please use unambiguous language**. Words and phrases like "*unable*", "*problem*", "*blocked*", "*do not have intent*", "*issues*", "*no value*" or "*lack of features*" help clarify the intent for the service. Conversely, words and phrases like "*for now*", "*currently*", or "*yet*" should be avoided as they do not clarify the service intent. 

**In summary, a note should state the intent or lack thereof and include the "**why**" behind it.**

## Note Template Guides

**In Progress:**

  - Customer is moving forward with deployment. They are in the adoption phase.
  - Onboarding to service. Customer at \[**phase of deployment**\]. \[**additional details**\].
  - Company will onboard to service after \[**current focus workload**\] is finished. \[**additional details**\].
  - Onboarding underway, focusing on \[**details**\].

**Blocked:**

In a concise statement, provide detail as to why the entitlements are blocked, whether it be a technical feature gap, a license issue or a lack of resource. It is critical to convey the blocker so the feature engineering and other Microsoft teams can identify an opportunity to take action in order to remediate the issue.

  - Customer will not deploy workload due to \[**primary issue**\] surrounding \[**technical details**\], \[**specific limitations**\] and \[**additional important details**\].
  - Unable to deploy because of \[**primary issue**\] and \[**technical details**\] due to \[**specific limitations**\].
  - Customer blocked because of \[**primary issue**\] until \[**potential resolution**\] is implemented.

**No Intent:**

Provide a clear and concise description as to why the customer has no intent to deploy those entitlements. 

  - Customer does not have intent to use service because of \[**primary issue**\] and \[**specifics**\].
  - Customer not interested in deploying workload due to \[**primary issue**\] and \[**details surrounding**\].
  - No need for this workload as \[**primary issue**\] is a limiting factor of \[**specifics**\].

**Status Unknown:**

  - Unable to gather intent from customer on this workload.
  - Customer unresponsive to multiple contact attempts. Managed account.

**Duplicate/Invalid:**

Provide description as to why the entitlements are called out as duplicate or invalid (double license count etc). 

## Examples of Notes

**Situation 1:**

A company recently purchased Office 365 (O365) licenses. The Account Team believes that the FastTrack Center (FTC) might be able to assist with getting the customer onboarded and reaches out to the FTC. While trying to connect with the customer and gather Due date Intent Business reason Success owners (DIBS), they learned that the company is currently in the process of acquiring another company; and combining companies is the focus, not onboarding to O365. A moratorium on all IT projects has been issued by management until the details of the acquisition are realized; and thus onboarding will have to wait.

  - **Great Note:** Customer does not intend to onboard workload due to an ongoing acquisition of another company that must be handled before any onboarding activities can occur.
  - **Marginal Note**: Until the merger is complete, customer will not deploy.
  - **Poor Note**: Customer has no intent.

**Situation 2:**

After engaging with the FTC, the customer starts to pilot Exchange Online (EXO). During the pilot, users are constantly observing mailboxes that fail to send/receive messages and they are experiencing general performance issues. The IT Team identifies that the cause is an incompatible firewall that is handling traffic correctly by design. Unfortunately, it cannot be replaced at this time because of specific security parameters. Until a solution is found, must be migrated back to on-premises Exchange and the deployment will halt.

  - **Great Note:** Due to a firewall not properly forwarding traffic, the customer will not deploy service because they are unable to connect to mailboxes.
  - **Marginal Note:** Customer will not deploy due to specific infrastructure on-prem.
  - **Poor Note:** Customer cannot deploy right now.

**Situation 3:**

Customer is currently engaged with FTC and is working through remediation steps. A few issues have been identified around user groups, but no hard blockers. The On-site Team is pushing forward.

  - **Great Note:** Customer continuing the deployment process and currently working on remediation steps.
  - **Marginal Note:** In Progress.
  - **Poor Note:** (blank)

**Situation 4:**

A new tenant is being processed through Gateway. The FM contacts the Account Team Unit (ATU), who is not currently engaged or has any knowledge about customer intentions to deploy. They do, however, provide contacts inside the organization. Multiple failed attempts to contact the customer are made. No additional information is provided.

  - **Great Note:** Customer unresponsive to 3 contact attempts. Managed customer.
  - **Marginal Note:** Customer unresponsive to contact attempts.
  - **Poor Note:** Customer unresponsive.

**Situation 5:**

While exploring deployment options, the customer starts to encounter issues surrounding data residency. Upon further investigation, the specific workload in question cannot be deployed for the customer because of legal regulations prohibiting the storage of regulated data outside of the country.

  - **Great Note:** Service will not be deployed because of legal restrictions on data residency. Customer is prohibited from storing regulated data outside country due to X regulation.
  - **Marginal Note:** Service will not be deployed because of X regulation, prohibiting data from being stored outside country at rest or in transit. ATU is involved to find a solution however unlikely. Roadmap is being explored for possible feature resolution for data requirements. The FM continues to meet with customer regularly for sync calls. If no solution is found, it is likely that a competitive solution will be leveraged. Microsoft Consulting Services (MCS) may be used, but dependent on funding.
  **(this is too much unneeded information; it's not helpful)\**
  - **Poor Note:** Cannot deploy because of cloud/data/legal issues.

## Common Mistakes

**Not enough information**
Recording information about usage or L1 status is not enough information for an Entitlement Status note.
**Example:** Customer has no intent for this workload or usage 0.0%.

**The wrong type of information**
Entitlement Status notes are not the appropriate area to record information about the engagement. That information should be shared in the Overall notes.
**Example:** Scheduling kickoff meeting to gather intent of workload.

**Can we copy and paste the same note for each workload(s)?**  
Copying and pasting the same note for each workload(s) is generally discouraged as the same note is frequently not applicable to multiple workloads e.g., migration is not applicable to Office ProPlus (OPP). There are situations, however, where the same note would apply to all workloads, such as an unresponsive customer.  
  
**When a customer declines the FTC benefit, is that a "no intent" situation?**  
No, intent to leverage FTC is not the same as intent to utilize the service.

**What if I am unsure about what status to put the customer in?**
You can visit the [Status and Entitlement](l1l2l3-homepage-list.md) page for a better clarification or understanding about which status and reason to use for the customer.

## Frequently Asked Questions (FAQ)

**Why is recording a great note important?**
The O365 Product and Business Groups use this data to make business decisions, such as: enhancing existing features, new product roadmap development, identifying gaps or bugs, and/or transforming business processes. Quality notes also help bring visibility on next steps that need to be taken to move the customer forward, by either aligning resources or providing customer best practices.

**What information needs to be captured in a note?**
When a great note is broken down, one can derive L1-L3, along with the specific details that provide additional insight to help Microsoft better understand the reasoning behind the intent of the customer. It may be helpful to ask yourself the following questions about your note:

  - Does your note clearly articulate if there is blocker? Does it provide the details of a blocker?
  - Does your note clearly convey the customer's intent or lack thereof? Did you differentiate between the customer's intent to consume the service and the customer's intent to leverage FTC for assistance?
  - Have you captured all the pertinent information in roughly 2 sentences?
  - For unresponsive tenants, did you document how many attempts were made and to whom you attempted contact? Is this a managed or unmanaged account?

### Refresh Summary

|Date|Who Changed|What Changed|
|---------|---------------|----------------------------|
|03/27/2020| Celia Kennedy| General Maintenance|
|10/01/2019| Celia Kennedy| Partner Playbook Updated|

[Home](http://partner-docs.microsoft.com)
