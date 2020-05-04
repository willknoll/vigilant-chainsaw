---
# required metadata
title: Blocked - Product / Feature Capability
description: Blocked - Product / Feature Capability
author: Peter Boulos
ms.author: pboulos
manager: eduardod 
ms.date: 10/23/2019
ms.topic: playbook 
ms.prod: non-product-specific 
ms.custom: internal-playbook 
ft.audience: internal 
ft.owner: pboulos
---
[!INCLUDE [Playbook Feedback](./includes/questions-feedback.md)] 

# Product / Feature Capability

> [!IMPORTANT]
> **Definition:** Core Product/Service features and functionality (including security/privacy settings, features and certifications) are missing or contain bugs. Resolved primarily through GetHelp or OneList.

## Valid Example Scenarios:
| Valid Example Scenario | Scenario Status |
| :--: | :--: |
| Customer cannot deploy until feature X (e.g., Multi-Geo) is added. | Product / Feature Capability |
| Customer cannot deploy until service has specific feature added to meet compliance needs. | Product / Feature Capability |
| Customer is not moving to OD4B because they are on Windows 7 and not able to move to Windows 10 yet, because the new sync client does not support Windows 7. | Product / Feature Capability |
| Customer needs Microsoft Online Product to perform specific function which is currently unavailable. | Product / Feature Capability |


## Invalid Example Scenarios for this L2:
| Invalid Example Scenario | Scenario Status |
| :--: | :--: |
| If an existing application Line of Business (LOB), third party or add-in needs to work (usually Office Pro-Plus (OPP) and SharePoiont Online (SPO), and is not able to. | App Compatibility |
| Service does not work with specific hardware architecture currently in place | Customer IT Infrastructure, Remediation |
| Customer has concerns that product is not mature enough and may not work well in organization. | Service Reliability |


> [!TIP]
> If you are still unsure about using this L2, here are some questions to ask the customer to confirm if this is the appropriate L2 to be used:
>    1. What are the customer requirements for functionality?
>        a. How does not having this functionality
>        b. What competitive advantage can they gain with this feature?
>       c. Is the feature available in competitive products?
>    2. Has this issue been added to OneList?
>    3. Have you received any feedback from the Program Group (PG) or via GetHelp?
>    4. Is it a security issue holding back the onboarding?
>    5. What is being used currently? Is there a workaround in place?
>    6. ​Are competitive products in use now? What do you like/dislike about that particular product that the Microsoft equivalent does not have?​
>    

## Workload-Specific Questions
### Intune
    1. What applications do they need to manage?




## List of L3s by Service Name:

### All Services
- **Other**
### AADP
- **AAD Connect: "Do not setup SSO now" option does not give customer the choice to come back and set it up later.**
- **AAD Connect: Groups to support 50k users in Azure**
- **AAD Connect: Need Writeback sizing guidelines for Azure AD Writeback scenarios**
- **AAD Connect: Unable to manage all UPN changes through Azure AD Connect**
- **App Proxy: managing the required IP data ranges that app proxy/service bus uses, on firewall is not manageable**
- **Apps: Ability to hide tiles from MyApps Portal**
- **Apps: Rename custom BYOA apps**
- **Custom Branding: "Sign-in Page Text" only allows 256 characters**
- **Licensing: Customers require an "opt-in experience" for Azure AD Premium licenses for Azure AD Premium scenarios**
- **MFA: Ability to add more than 50 IPs for MFA exemption**
- **MFA: Ability to specify exception rules for Azure MFA**
- **MFA: Migration capability between MFA on-prem to Azure MFA cloud service**
- **SSPR/MFA: Consent and Terms of Use prompt before collecting personal information**
- **SSPR/MFA: End users expect "successful registration" notification**
- **SSPR: Customer wants ability to customize banned password list**
- **SSPR: Feature Request -Self Service user name retrieval**
- **SSPR: Notifications when a user's password is about to expire**
- **SSPR: SSPR registration and reset UX is not mobile friendly**
### AzRMS
- **Using incompatible software (Lotus Notes, Open Office, Mac Office 2011 etc.)**
- **Technical Fit: Currently on AD RMS**
- **Technical Fit: Using Office 2010 or older**
- **Technical Fit: Using Vista or older version of Windows**
- **Technical Fit: Waiting for Bring Your Own Key**
- **Using 3rd party DLP solution**
- **Using non MS Rights Management solution**
- **Using non-Exchange mail solution**
### Classroom/SDS
- **Classroom/SDS: Bug associated with Beta status blocks deployment**
- **Classroom/SDS: Customer loses interest or determines that it doesn't provide a benefit**
- **Classroom/SDS: Exposing class rostering data and their respective O365 Groups is a blocker to moving forward**
- **Classroom/SDS: The admin does not have a license with both EXO and SPO enabled**
- **Classroom/SDS: The admin does not have Global Administrator role/rights**
- **Classroom/SDS: The customer cannot extract SIS data to CSVs and does not have Clever or PowerSchool as their source directory**
- **Classroom/SDS: The customer can't meet the timeline to effectively deploy the solution**
- **Classroom/SDS: The customer does not want their data stored outside of their country**
- **Classroom/SDS: The customer doesn't have appropriate LDAP attribute integration required for sync and doesn't want to or cannot deploy with CSV files**
- **Classroom/SDS: The deployment goal is Microsoft Classroom and students and/or teachers do not meet EXO or SPO licensing requirements**
- **Classroom/SDS: The tenant does not contain a valid paid or non-trial EDU subscriptions**
- **Classroom/SDS: The tenant is not a verified EDU tenant**
- **Classroom/SDS: Too difficult to deploy**
- **Classroom/SDS: Too difficult to manage**
- **Classroom/SDS:The customer requires localization**
- **Classroom/SDS:The tenant is a partner test tenant**
- **Classroom/SDS:The tenant is in a non-compliant region**
### Exchange: Outlook Mobile
- **Outlook mobile doesn't have an ability to block content attachment from unmanaged locations** - Outlook mobile, in conjunction with Intune App Protection Policies, ensures that corporate data cannot be saved to unmanaged locations, however, Outlook mobile (and Intune) doesn't provide a way to ensure data from unmanaged locations cannot be inserted into email messages or calendar events.
- **Outlook mobile doesn't provide OneNote integration** - Microsoft's strategic direction with note taking is OneNote, however, Outlook mobile does not provide any integration with OneNote mobile.
- **Outlook mobile doesn't provide To-Do integration** - Microsoft's strategic direction with task management is To-Do, however, Outlook mobile does not provide any integration with To-Do mobile.
- **Outlook mobile doesn't provide visual differentation between corporate and personal accounts** - Outlook mobile supports multiple messaging profiles so that users can utilize a single app for all of their email and calendar needs for both their personal and corporate personas. However, the app doesn't do a good job of providing visual cues that highlight which account the user is working in, which leads to inadvertant data leakage scenarios.
- **Outlook mobile doesn't support app configuration deployment policies** - Outlook mobile has a number of settings available for the end user to configure, however, IT admins have no ability to set those defaults. This prevents IT from providing a consistent experience to their end users.
- **Outlook mobile doesn't support Create/Join Teams calendar events** - Outlook mobile supports creating and joining Skype for Business events, however, Outlook mobile doesn't provide the same support for Microsoft Teams.
- **Outlook mobile doesn't support new mail notifications from subfolders** - Outlook mobile only provides new mail notifications for the Inbox (or Focused Inbox). It does not provide any notification support for other folders. This is a problem when the user has Inbox rules that move new messages as they arrive into folders other than the Inbox for workflow scenarios.
- **Outlook mobile doesn't support O365 for US Government within DoD**
- **Outlook mobile doesn't support O365 in China (21ViaNet)**
- **Outlook mobile doesn't support O365 in Germany**
- **Outlook mobile doesn't support sync windows** - Unlike traditional Exchange ActiveSync clients, Outlook mobile doesn't support admin or user configurable sync windows that defines how much data is downloaded. Instead, Outlook roughly keeps a 30 day window of email content.
### Intune
- **Allow Only Managed Browser**
- **Full App Inventory**
- **Limited Reporting Capability**
- **Limited Troubleshooting Capability**
- **Minimum OS Required**
- **Remote Assistance**
- **Reporting**
- **Services Architecture - Scale**
- **Windows 10 - Endpoint Protection Management**
- **Windows 10 Enrollment Issues**
- **5-device limit per user**
- **Allow Only Specific Email Apps**
- **Allow/Deny for iOS and Android**
- **Android Feature Gaps**
- **Android for Work Support**
- **Barcode-based enrollment**
- **Conditional Access - App-based Conditional Access**
- **Conditional access - Enable Conditional Access through Azure App Proxy**
- **Conditional Access - Extend to Cisco ISE**
- **Conditional Access and On-Prem Exchange/Dedicated Exchange**
- **Conditional Access and On-Prem SharePoint**
- **Conditional Access:  Allow Only Specific Email Apps**
- **Conditional Access:  Outlook and Dedicated Exchange**
- **Conditional enrollment to allow only corp-provided Windows devices to enroll**
- **Data roaming management**
- **Datacenters**
- **Don't allow jailbroken/rooted devices to enroll**
- **Dynamic Groups**
- **Enable connecting to multiple CAS**
- **Enroll Based on IMEI**
- **Enroll on Behalf Of User**
- **Feature Gap - Geo data storage requirements:  US**
- **Geo data storage requirements:  Australia**
- **Geo data storage requirements:  China**
- **Geofencing**
- **Geofencing / Geolocation**
- **Hybrid Parity**
- **iOS Feature Gaps**
- **MAM - App Encryption Without Device Pin (iOS)**
- **MAM - App Store without Device Enrollment**
- **MAM - LOB Support**
- **MAM - Multiple Managed Identities**
- **MAM - Support when OD4B is not deployed**
- **MAM support in 3rd Party Apps**
- **MAM support in Microsoft Apps**
- **MAM Support on Windows**
- **Management – PowerShell Support**
- **Mobile Content Management**
- **Mobile Content Management (Skylark)**
- **Outlook and On-Prem Exchange**
- **Outlook Feature Gaps**
- **Preconfigured bookmarks**
- **Prevent unenrollment**
- **Pushing of Android Google Play Apps**
- **RBAC**
- **Security - PIN/Password Reset by End User Instead of IT**
- **Timefencing**
### MDATP
- **Next Generation Protection - Quarantine Issues**
- **Endpoint Detection and Response - Lack of ability to assign to Systems Operations Center (SOC)**
- **Advanced Hunting – Locks out multiple users**
- **Endpoint Detection and Response – Produces False positives**
- **Only Allow Managed Browser**
- **Full App Inventory**
- **Endpoint Detection and Response – Lack of Granular RBAC Permissions**
- **Larger team support**
- **Limited Reporting Capability**
- **Limited Troubleshooting Capability**
- **Minimum OS Required**
- **Next Generation Protection – DATP Offboarding when wiped in Intune**
- **Remote Assistance**
- **Secure Score – Unable to Customize Components**
- **Secure Score – Unable to build a Community View for Reporting**
- **Services Architecture - Scale**
- **Using incompatible software (Lotus Notes, Open Office, Mac Office 2011 etc.)**
- **Windows 10 - Endpoint Protection Management**
- **Windows 10 - Enrollment Issues**
- **Windows 10 - Updates required for the IP data ranges on the customer firewall**
### Teams
- **Larger team support**
- **Guest access**
- **Migration**
- **Phone dialing (dial-out PSTN)**
- **Skype for Business interop**
- **Slack compatibility**
- **Surface Hub / room system**
- **Teleconferencing (dial-in conferencing for meetings)**
### Windows 10
- **Allow Only Managed Browser**
- **Full App Inventory**
- **Larger team support**
- **Limited Reporting Capability**
- **Limited Troubleshooting Capability**
- **Minimum OS Required**
- **Remote Assistance**
- **Reporting**
- **Services Architecture - Scale**
- **Using incompatible software (Lotus Notes, Open Office, Mac Office 2011 etc.)**
- **Windows 10 - Endpoint Protection Management**
- **Windows 10 Enrollment Issues**
- **Windows 10: Updates required for the IP data ranges on the customer firewall**
