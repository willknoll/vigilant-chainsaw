---  
# required metadata  
title: FastTrack Playbook - L1 L2 L3 Homepage List 
description: FastTrack Playbook - L1 L2 L3 Homepage List Overview
author: Elliot Szutz 
ms.author: szutea  
manager: eduardod  
ms.date: 2/28/2019  
ms.topic: playbook  
ms.prod: non-product-specific  
ms.custom: internal-playbook  
ft.audience: internal  
ft.owner: elszut  
---
[!INCLUDE [Playbook Feedback](./includes/questions-feedback.md)]
# L1 - Status Unknown
​The customer has not been successfully contacted to determine intent for eligible service entitlements.​
### [L2 - Customer Unresponsive](l1l2l3-status-unknown-customer-unresponsive.md)
Customer (and partner) is unresponsive after initial due diligence to try and contact them (multiple attempts to contact through different channels). Intent is unknown.
### [L2 - New Subscription or Workload](l1l2l3-status-unknown-new-subscription-or-workload.md)
Customer intent for specific subscription or workload is currently unknown. Customer may have purchased a new subscription, or a workload has been added to their subscription.

Automation: Any new service entitlements within FastTrack scope are added. 
# L1 - In Progress
Customer declares intent and are deploying and/or adopting the service, regardless of engagement scenario. This includes long running customers or customers who aren't planning on deploying for X amount of days. **Be sure​ to set a valid target date for all In Progress entitlements; refer to L2 definitions for target date below.**
### [L2 - Technical Onboarding and Deployment​​](l1l2l3-in-progress-technical-onboarding-deployment.md)
Setting up infrastructure and workload to prepare for use. Ends when workload is usable.
### [L2 - Migration](l1l2l3-in-progress-migration.md)
​Workload is enabled for use and any necessary migration (data, applications, virtual machines, etc.) is occurring.​​
### [L2 - Solution or User Adoption​​​​](l1l2l3-in-progress-solution-or-user-adoption.md)
Workload is enabled for use and focus is on driving adoption/consumption (for per user) or the solution has moved into production and is expanding consumption (Azure).  Occurs after workload is usable.​
# [​L1 - No Intent​](l1l2l3-no-intent.md)
Customer has no intent to deploy the service at **any time**.​ 
### [​L2 - Using Competitive Solution](l1l2l3-no-intent-using-competitive-solution.md)
The customer has no intent to use the service because they are using a competitive solution. The case to use the Microsoft service is not compelling or has not been made to the customer. Selling of economic or business value, or a better value proposition is needed.
### [L2 - ​Using Microsoft On-Premises Solution](l1l2l3-no-intent-using-microsoft-on-premises-solution.md)
The customer has no intent to use the service because they are using a Microsoft on-premises solution. The case to use the Microsoft cloud service is not compelling or has not been made to the customer. Selling of economic or business value, or a better value proposition is needed.
### [L2 - Executive Sponsorship](l1l2l3-no-intent-executive-sponsorship.md)
Lack of awareness, conviction or sponsorship at the decision-making levels in the company to move to the cloud, or to prioritize implementation and usage. Customer may also lack intent due to business decision or reorganization.  Selling of business value is needed.
# [L1 - Blocked​](l1l2l3-blocked.md)
​Customer has intent to use the workload but there are some blocking issues that need to be removed with assistance from the Account or Engineering teams.
### [L2 - Customer IT Infrastructure and Remediation​](l1l2l3-blocked-customer-it-infrastructure-remediation.md)
Dependencies with surrounding IT infrastructure components in a customer's environment (e.g. VPN devices not compatible, hardware updates, AD Complexities, Hybrid Scenario's, Client, Browser, etc.) block adoption.

*For this L2, the problem must be related to a **Technology***. *It is **NOT related to people or processes**.*
​​​
### [L2 - IT Change Management and Resourcing](l1l2l3-blocked-it-change-management-resourcing.md)
Service maintenance or updates are causing existing Customer IT processes and policies (e.g., IT process, monitoring, incident handling, issue discovery, home use policy, etc.) to break, blocking adoption. Requires process or policy redesign to manage the change. Customer may be blocked by lack of resourcing (budget/people) to remediate.

*For this L2, the problem must be related **to the Technical Administrators or IT Teams**.  It is NOT directly related to the underlying technology, user readiness, or business rules.*

### [​L2 - Legal/Regulatory​​](l1l2l3-blocked-legal-regulatory.md)
Customer is specifically prohibited from using the cloud service by legal or regulatory requirements and thus has no intent to use the servic
### [L2 - Security/Privacy (Non-Product/Feature)](l1l2l3-blocked-security-privacy-non-product-feature.md)
Customer is blocked from deployment and adoption of the service due to issues with security or privacy compliance, including service configuration or documentation issues. Customer can be unblocked using existing product features and capabilities.  
### [L2 - Adoption Readiness​](l1l2l3-blocked-adoption-readiness.md)
Customer is blocked from adopting the service due to issues with internal change management, including end user readiness or business processes. Do not use this for IT change management issues. 

*For this L2, the problem is almost always related to **user readiness** or **user training**.  In some cases, it can be related to **business rule** or **decision**.  It is NOT related to ​IT people, IT teams or technology.*

### [L2 - Product Feature/Capability](l1l2l3-blocked-product-feature-capability.md)
Core Product/Service features and functionality (including security/privacy settings, features and certifications) are missing or contain bugs. Resolved primarily through GetHelp or OneList.
### [L2 - Service Reliability](l1l2l3-blocked-service-reliability.md)
Diminished customer confidence due to service performance, including latency and/or unplanned service incidents (outages). 
### [L2 - App Compatibility](l1l2l3-blocked-app-compatibility.md)​
Customer Line of Business (LOA) applications are not compatible or certified compatible with Cloud Services and are holding up deployment or usage.
### [L2 - Partner Engagement​](l1l2l3-blocked-partner-engagement.md)
Delay in partner selection/contracting or the partner is blocked with Technical Deployment and/or Adoption Support (Scope Limitation, limited experience, etc.).​
### [L2 - Billing, Licensing and Subscription​​](l1l2l3-blocked-billing-licensing-subscription.md)
Implementation is blocked until subscription issues are resolved (e.g., application of licenses, transfer of licenses, incorrect SKU, or subtraction of seats). Requires seller, LSS and /or LSA to engage.
# [L1 - Duplicate/Invalid](l1l2l3-duplicate-invalid.md)
This L1 status should be used in case of a duplicate/invalid tenant in order to remove their entitlements from all FastTrack Center (FTC) reporting; for which all service entitlements should be set to this status. This status may also be used to classify Outlook Mobile entitlements for tenants with Office ProPlus and Outlook Mobile but no Exchange.

​
​

​
