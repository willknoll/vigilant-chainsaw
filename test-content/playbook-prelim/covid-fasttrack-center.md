---  
# required metadata  
title: FastTrack Playbook - COVID FastTrack Center 
description: FastTrack Playbook - COVID FastTrack Center
ms.author: ryanme  
manager: eduardod  
ms.date: 4/1/2020  
ms.topic: playbook  
ms.prod: non-product-specific  
ms.custom: internal-playbook  
ft.audience: internal  
ft.owner: ryanme
---   
[!INCLUDE [Playbook Feedback](./includes/questions-feedback.md)]

# FastTrack Center

Microsoft is focused on helping customers in this time of need with Remote Work and Remote Learning in response to COVID-19. Quick onboarding to Teams and OneDrive with baseline security and controls.  

Onboarding to Microsoft 365 usually involves complex Identity synchronization, security configuration, network changes and weeks of remediation. FastTrack is providing guidance on a couple Commercial as well as EDU scenarios that will provide rapid identity implementation and baseline security to quickly enable remote-work for the customer. It is assumed that users will leverage their local internet egress so bandwidth should not be a major topic of conversation unless there is insistence on VPN or other conditional access.  

## Tracking the COVID impact  

- Review the [FTC Info post](https://microsoft.sharepoint.com/teams/ftccm/ftcinfo/Lists/Posts/Post.aspx?ID=1881) for tracking accelerated workloads as well as the [FTC Info post](https://microsoft.sharepoint.com/teams/ftccm/ftcinfo/Lists/Posts/Post.aspx?ID=1888) for decelerated workloads.
- Workload **acceleration, expansion** – add **#covid** to the Notes field with details of the impact, Example ***#covid** customer choosing to prioritize OLM, TEAMS by +40k by XX Date*
- Workload **pause, deprioritized** – update **L1/L2/L3** to Blocked / IT Change Management and Resourcing / COVID

## Pre-requisites – browsers  

Ensure the customer has the basics in place for remote-work. Users will need an **up-to-date browser** to access the Office on the web capabilities. Refer to this [support article](https://support.office.com/en-us/article/which-browsers-work-with-office-for-the-web-ad1303e0-a318-47aa-b409-d3a5eb44e452) for a list of supported browsers across PC, Mac, iOS, and Android platforms.

## Foundation – tenant and domain  

Before moving forward with deployment tasks, ensure that the customer meets some basic criteria.  

- Does the customer already have an Office 365 tenant with the required licenses?
  - Customers should already have a tenant, however, if your customer is not licensed for Teams, use the [new Office 365 E1/G1 offer](https://transform.microsoft.com/customer-trials?tab=o365e1trial) or [Education A1](https://microsoft.sharepoint.com/:w:/r/teams/MicrosoftTeamsCOVID-19Response/_layouts/15/Doc.aspx?sourcedoc=%7b36EEBE2A-A96D-4CB0-9DA4-4A5465176D3D%7d&file=Microsoft%20Teams%20Trial%20Options.docx&action=default&mobileredirect=true) offer to get them started. Coordinate this request with your account team contacts.
  - As part of Microsoft's COVID response, if the business is not currently licensed for Office 365, they are covered with a free Office 365 E1 offer for six months.  
  **Note:** the same offer is available in the Government Cloud, but not available in GCC High and the U.S. Department of Defense.
- Has the customer already configured their own domain in the Office 365 service?
  - If the customer has not already configured their domain in the Office 365 service and wishes to do so, assist the customer with custom domain setup.  

> [!NOTE]
> Task reference: 1641 (Core Onboarding)

## Networking – connectivity, including VPN  

This network guidance is targeted for remote workers, mobility workers connecting to Office 365 remotely, i.e., outside the managed corporate network.  

When connecting from outside the corporate network, it is necessary to understand the user's connection path to Office 365 by asking the following questions:  

1. Is the user connecting from a personal device? If so, chances are they are directly connected to the Internet and no action is required. 
1. Is the user connected via a corporate device (PC, tablet)? If so, is there VPN software installed on the device? 
1. Is the VPN software on by default and/or forced? Or does the user have an option to switch off VPN connection? If yes, they should follow instructions from their administrator to disable VPN connection to connect directly to Office 365
1. The user can use the Netonboard tool (https://connectivity.office.com/) to get an understanding of their connectivity path, e.g., the below is a screen shot that portrays direct connectivity to Office 365 for a remote user based in Dubai.  Notice that the user location and network egress location is aligned with user's physical location.  

![covid-ftc-1](media/covid-ftc-1.png)  

![covid-ftc-2](media/covid-ftc-2.png)  
  
Below is another screen shot that portrays traffic backhaul via a VPN path to the same user in Dubai.  Notice that the user location and egress location (UK) are not aligned with the user's physical location (Dubai).  

![covid-ftc-3](media/covid-ftc-3.png)  

Most customers already have a VPN solution in place for remote connectivity, but the main challenge is with how the VPN is designed to route Office 365 traffic, for example:  

> Route everything locally (including Office 365) on-premises application traffic via VPN  
> or  
> Route everything via VPN, define exceptions for local routing  

If the customer routes everything via the VPN by default, and hasn't defined exceptions for Office 365 traffic, this leads to a bad user experience due to congestion on the VPN path, traffic back haul via central egress, and scalability issues of VPN infrastructure given the increase in load due to COVID-19. The exception needs to be defined on priority for the 'Prioritize' set of endpoints since it accounts for 75-90% of traffic volume with most of the impact on the user experience.  

Customers asking for information about how to implement exceptions or split tunneling for Office 365 traffic should be pointed to the [TechCommunity blog](https://techcommunity.microsoft.com/t5/office-365-blog/how-to-quickly-optimize-office-365-traffic-for-remote-staff-amp/ba-p/1214571).  

> [!NOTE]
> Task reference: 4071 (Core Onboarding), 4072 (Core Onboarding)  

## Identity, Authentication, and Assignment  

### Authentication  

For customers that have not set up authentication for their tenant, work with the customer to determine the correct authentication method based on the infrastructure they currently have configured and/or what they intend to do.  

- Customers that do not have an on-premises Active Directory or do not have the time nor the intent to set up AAD Connect should leverage Managed CloudIDs with separate passwords. 
- Customers that have AAD Connect set up (or are planning to do so) can leverage either:
  1. Password Hash Sync (PHS) - recommended
  1. Pass-through Authentication (PTA) with Password Hash Sync (as backup)
- Some questions that can be used to determine current customer state:
  - Are you using a managed authentication option or federation? If you are using federation, which federation service/provider are you using (ADFS? Ping, Siteminder? SecureAuth? Shibboleth?) Do you also sync your password hashes to AAD (as a backup or for ID protection)?  

For customers that already have authentication set up for their tenant, they can continue to leverage the approach they have implemented.  

- Customers that already have ADFS configured can continue to leverage ADFS, but it is recommended that Password Hash Sync be enabled as a back-up authentication method.  

> [!NOTE]
> Task reference: 3736 (Core Onboarding)  

### Create Identities  

If the customer has not already created or synchronized users, assist the customer with populating user and group objects into the tenant. Leverage existing identities where this has been completed in prior deployments.  

**Create Cloud IDs**  

- Customers that do not have an on-premises Active Directory or do not have time to set it up or do not plan to set up AAD Connect should do a bulk import of CloudIDs. Ensure passwords are captured for later distribution. Refer the next section for license assignment needs.  

**Set Up Directory Synchronization (Azure AD Connect)**  

- Customers that have an on-premises Active Directory or a significant number of objects should sync their objects via AAD Connect (DirSync). (Scenario C2)
- EDU customers that have an on-premises Active Directory have the option to sync their objects via the School Data Sync. (E2)  

**Set Up Microsoft School Data Sync (SDS) for Education Customers**  

- School Data Sync is a free service in Office 365 for Education that reads the school and roster data from a school's Student Information System (SIS). Use this guidance to help your customer [deploy School Data Sync](https://docs.microsoft.com/SchoolDataSync) to make it easier for teachers to automatically create Teams.  You can direct your customer to contact [https://aka.ms/sdssupport](https://aka.ms/sdssupport) for deployment assistance if needed.  

### License Assignment  

If the customer has not yet assigned licenses to their users, **assist the customer with the steps in the article,** [Assign Office 365 licenses to user accounts](https://docs.microsoft.com/office365/enterprise/assign-licenses-to-user-accounts). You may have completed this at time of user setup. The recommendation is to assign all the available apps and services in your plan – excluding Exchange - unless the customer is specifically intending to setup mail in Exchange Online. In many cases, this will be the E1 plan when assisting with this scenario. At minimum, include these apps: **Office for the web; Office 365 ProPlus; Microsoft Teams; SharePoint Online; Yammer.**  

If the customer has additional subscriptions, like EMS, apply the required licenses. Learn more about [how to assign Intune licenses.](https://docs.microsoft.com/en-us/mem/intune/fundamentals/licenses-assign)  

> [!NOTE]
> Task reference: 1134 (Core Onboarding), 1141 (Core Onboarding), 3736 (Core Onboarding)  

## Get Secure    

It is critical for customers to enable security features for their environment. Specific features will depend on the customer's AADP licensing.  

1. Customers that do not own AADP licenses should enable [Security Defaults](https://docs.microsoft.com/azure/active-directory/fundamentals/concept-fundamentals-security-defaults). Security Defaults enable key security features without the need for the customer to configure/customize them. 
1. Customers with AADP licenses should leverage the new "[Secure Foundations](https://aka.ms/ftaadpsecurefoundations)" approach to enable critical security settings and work with the customer to enable the following features:  

   - Self-service Password Reset (SSPR)
   - Multi-Factor Authentication (MFA)
   - Conditional Access (CA)  
For specific feature guidance, see the "[published guidance](https://aka.ms/ftaadpcheatsheet)" that outlines the most critical security features that customers should deploy based on their licensing.  

1. Customers with an Intune license should enroll devices.  

> [!NOTE]
> Task reference: 3720 (Core Onboarding)  

Some suggested questions to help determine the best approach for the customer:  

- Are you using MFA today?
  - If so, are you using Azure MFA Server, Azure MFA or 3rd party?
  - If not, are you open to a simplified, rapid pilot implementation as part of this offering/solution set that you can expand when/as you see fit?
     1. Security Defaults for non-EMS/M365
     1. Simple Azure AD CA Policy for MFA for EMS/M365 customers
     1. More advanced Azure AD CA Policy for adaptive MFA incl device state, location, etc.
- Are you allowing personal or BYO **mobile devices** to access O365 corporate resources today? such as email?  

  If so:
     - What (if any) app restrictions are in place for accessing O365 corporate resources?
     - Do you use Intune MAM and the Office Mobile Apps to control/manage the Apps and O365 data?"  

  If not:
     - Are you open to a simplified, rapid pilot implementation as part of this offering/solution set that you can expand when/as you see fit?

- This can work on personal/BYO, 3rd party MDM or Intune MDM-managed devices.
  - Are you using an MDM today?
  - If so, is it Intune or 3rd party?
  - If not, are you open to a simplified, rapid pilot implementation as part of this offering/solution set that you can expand when/as you see fit.
- Are you interested in limiting web access to SPO/OD/OWA on un-managed devices, such as home Windows PCs, Macs, personal tablets, etc?
  - If so, are you open to a simplified, rapid pilot implementation as part of this offering/solution set that you can expand when/as you see fit?
  - This may require Hybrid AAD Join for your domain-joined PCs – is that setup today?
  - This may be impacted if mobile devices are managed by a 3rd party MDM (such as AirWatch)" &lt;see above question/answer about current MDM&gt;
- Are you interested in enrolling personal un-managed devices such as home Windows PC, Macs, personal tablets, etc., into Intune?
  - There may be some liability or personal privacy concerns – this should be vetted/approved by org management.
  -  Due to this concern, some may want to actively block personal devices from enrolling – and possibly only allow the limited web access mentioned above.
  - [Control Access from Unmanaged Devices](https://docs.microsoft.com/en-us/sharepoint/control-access-from-unmanaged-devices)
- Enable MFA for all users based on customer licensing:
  - Azure AD Free Customers / OFFICE 365 APPS (O365 E1, E3, E5, F1, A1):
     - [Enable Security Defaults](https://docs.microsoft.com/azure/active-directory/fundamentals/concept-fundamentals-security-defaults) (Non-customizable for exclusions).
  -  Premium P1 (AADP P1/ M365 E3/A3, EMS E3) or Premium P2 (AADP P2/ M365 E5/A5, EMS E5): 
     - [Enable combined policy for ALL users](https://docs.microsoft.com/azure/active-directory/authentication/howto-registration-mfa-sspr-combined) - Enables combined MFA and SSPR registration to simplify user registration experience.
     - [Enable policy to allow MFA with Authenticator App](https://docs.microsoft.com/azure/active-directory/authentication/howto-mfa-getstarted) - Configure MFA settings to ensure we can protect accounts from being compromised by bad actors  

## Initial Communication and Readiness Resources  

### Provide Users Access  

If the customer's end users do not know how to sign-in to Office 365 from their remote-work device, the customer may leverage the communication option during user setup or send their own communications.  

It is important that the customer ensures they are using a method to distribute the initial user credentials that meets their company policy. Note that credential distribution only applies to scenarios where they used cloud identities.  

An alternative to using the built-in recommended training content is to leverage the templates available in the [FastTrack Resource Hub](https://www.microsoft.com/fasttrack/resources).  Templates are available to customize and share with users that allow the customer to send from their existing email platforms.  

At this point, users will be technically enabled in the service with Office on the web services.  

### Share user readiness resources  

To help the users begin using the new services, we should provide the recommended user readiness resources. The IT Admin can readily share the resources with ready-to-use templates and training content. The goal of this step is to provide the resources to avoid the customer from having to create their own resources to enable rapid re-use.  

Share the following resources to educate the customers and their end users on our services and aligned business scenarios.  

**Commercial:**  

- [Adopt Microsoft Teams Landing Page](https://docs.microsoft.com/en-us/MicrosoftTeams/adopt-microsoft-teams-landing-page)
- [Teams Training Landing Page for (Admins, Instructor-Led, End User)](https://docs.microsoft.com/en-us/MicrosoftTeams/training-microsoft-teams-landing-page)
- [Office 365 Training Center](https://support.office.com/office-training-center)  

**Education:**  

- [Helping Teachers and Students make the switch to remote learning](https://www.microsoft.com/en-us/microsoft-365/blog/2020/03/11/helping-teachers-students-switch-remote-learning/)
- [Microsoft Teams guide for EDU IT Admins](https://docs.microsoft.com/en-us/microsoftteams/expand-teams-across-your-org/teams-for-education-landing-page)  

In all cases, ensure they are aware of the Office 365 Training center. Here they'll find courses on how to [work together](https://support.office.com/article/best-practices-for-collaborating-with-office-365-5144136b-1ff8-476f-bcba-00de0bdaa600) and use the [Office for the web](https://support.office.com/article/office-for-the-web-training-e315b031-2bd5-40a1-99ca-264ebf2c8f96) solutions and many others.  

Admins can also leverage the admin center communication templates for the easiest way to share the recommended guidance. Further resources to help them share resources, like tips and tricks, are available in the [FastTrack Resource Hub](https://www.microsoft.com/fasttrack/resources).  

Even if the customer's users are knowledgeable about Office apps, we recommend ensuring their users have the training resources in the [Office Training Center](https://support.office.com/office-training-center) as additional content continues to become available.  

As the users transition to the remote-work environment with their new technology, it is important to share best practices on how to be effective from home. Share the [remote-work tips](https://aka.ms/Remote-Work_Tips_FT) for customers to distribute to their users to help them sustain productivity during this change. This includes tips for working from home and using Bing search capabilities to find work content, including Teams conversations, work files on OneDrive for Business, and people info.  

## Teams Enablement  

### Getting Started: (Commercial and Gov)  

Here are some resources available to help your customer plan for their Teams deployment and get them up and running.  

- [How to Roll Out Teams](https://docs.microsoft.com/en-us/MicrosoftTeams/how-to-roll-out-teams) – **Start Here**. Use this guidance to determine your customer's recommended path to Teams. We suggest rolling out Teams in stages, workload by workload, as the customer's organization is ready. **They do not have to wait until they've completed one step before they move to the next.** Some orgs may want to roll out all Teams features at once, while others may prefer a phased approach. Here are the Teams workloads, in the order we recommend rolling them out:  

  1. [Get started](https://docs.microsoft.com/en-us/MicrosoftTeams/get-started-with-teams-quick-start)
  1. [Chat, teams, channels, & apps](https://docs.microsoft.com/en-us/MicrosoftTeams/deploy-chat-teams-channels-microsoft-teams-landing-page)
  1. [Meetings & conferencing](https://docs.microsoft.com/en-us/MicrosoftTeams/deploy-meetings-microsoft-teams-landing-page)
  1. [Cloud voice](https://docs.microsoft.com/en-us/MicrosoftTeams/cloud-voice-landing-page)

- [Quick start guide for Teams](https://docs.microsoft.com/en-us/MicrosoftTeams/get-started-with-teams-quick-start) – If your customer is trying to roll out Microsoft Teams quickly to respond to an increased demand to support remote work, use this Get Started guidance to help them deploy Teams quickly to their entire organization.  This guidance applies even when Teams is their first Office 365 workload.
- [Teams Rollout FAQ](https://docs.microsoft.com/en-us/microsoftteams/use-advisor-teams-roll-out#frequently-asked-questions) – answers to frequently asked questions to help get your customer up and running faster.  

### Teams Advisor: (Commercial and Gov)  

Encourage your customer to take advantage of the in-product experience designed to guide a customer through the steps needed to deploy:  

- Chat, teams, channels, and apps
- Meeting and Conferencing  

The Advisor for Teams (preview) walks the customer through their Microsoft Teams rollout. It assesses their Office 365 tenant environment and identifies the most common configurations that they may need to update or modify before they can successfully roll out Teams. Then, Advisor for Teams creates a Deployment team (in Teams), with channels for each workload they want to roll out. Each workload in the Deployment team comes with a comprehensive Planner plan that includes all the rollout tasks for each workload. Using this Planner plan, they can assign tasks to the people responsible for each phase of the rollout - including the project manager, Teams and Office 365 admins, support people, and their adoption and user readiness team. Each rollout task contains all the guidance and resources they need to successfully complete the task.  

Advisor for Teams is part of the  [Teams admin center](https://admin.teams.microsoft.com/). At a minimum, they will need an Office 365 Business Essentials license so they can take advantage of the Advisor for Teams integration with Forms and Planner. To begin using Advisor for Teams, they need to click the **Start** button in the **Deploying Teams workload** widget on the Dashboard or go to **Planning > Teams Advisor**.  

> [!NOTE]
> Task reference: 3268 (Teams)  

### Getting Started: (Education)  

Teams for Education can create collaborative classrooms, connect in professional learning communities, and communicate with students and teachers. Use the admin resources to help you successfully deploy, adopt, and manage Teams in schools or institutions.  

Encourage your customers' admins to use the following Teams for Education deployment content to:  

- Learn how to quickly get started with [Teams for Education admins](https://docs.microsoft.com/microsoftteams/teams-quick-start-edu)
- Learn how to use [Assignments in Teams for Education](https://docs.microsoft.com/microsoftteams/expand-teams-across-your-org/assignments-in-teams)
- Find additional [resources for Teams for Education admins](https://docs.microsoft.com/microsoftteams/resources-teams-edu)
- Review the [Governance FAQ for Teams for Education admins](https://docs.microsoft.com/microsoftteams/plan-teams-governance-edu)  

### Skype for Business to Teams Transition  

For customers with users in Skype for Business Online as well as any customers who already have started planning their transition from Skype for Business to Teams, we recommend continuing to enable Teams and Skype side-by-side with either overlapping capabilities or select capabilities, determined by the customer's requirements and considerations based on current environment. Then customers can upgrade to Teams Only for all end users once they are ready.  

Leverage [aka.ms/SkypeToTeams](http://aka.ms/SkypetoTeams) for comprehensive set of technical guidance and planning resources, including a proven success framework, best practices and planning documents, to enable upgrade discussions.  

Direct customers to our free, interactive online [Upgrade Planning Workshops](https://aka.ms/SkypeToTeamsPlanning) designed to plan and implement their upgrade to Teams as well as to download the [Upgrade Success Kit](https://aka.ms/UpgradeSuccessKit) featuring customizable assets such as a sample project plan, user communications, feedback surveys, and more.  

For any customers with > 150 seats, [FastTrack](https://www.microsoft.com/FastTrack) is available to help with technical enablement of Teams.  Please refer to the [Teams COVID-19](https://microsoft.sharepoint.com/SitePages/Coronavirus-customer-partner-FAQ.aspx#microsoft-teams) FAQs to find additional guidance on how to address common customer questions related to Skype for Business to Teams Transition assistance.  

## Remote access to apps  

### Integrate SaaS Applications with Azure AD:  

Provides access to corporate SaaS applications remotely and securely with improved user experience (SSO). Does not provide access to legacy on prem application. [Instructions for the following licensing scenarios](https://docs.microsoft.com/azure/active-directory/manage-apps/plan-an-application-integration):  

- Azure AD Free Customers / OFFICE 365 APPS (O365 E1, E3, E5, F1, A1):
- Premium P1 (AADP P1/ M365 E3/A3, EMS E3):
- Premium P2 (AADP P2/ M365 E5/A5, EMS E5):  

### Enable Azure App Proxy for remote access to legacy Apps:  

Enables users to securely access on-premises applications by signing in with their Azure AD account. [Instructions for the following licensing scenarios](https://docs.microsoft.com/azure/active-directory/manage-apps/application-proxy-add-on-premises-application):  

- Premium P1 (AADP P1/ M365 E3/A3, EMS E3):
- Premium P2 (AADP P2/ M365 E5/A5, EMS E5):  

## MDM for Microsoft 365 Business  

Mobile Device Management for Microsoft 365 Business Standard can help
you secure and manage mobile devices like iPhones, iPads, Androids, and
Windows Phones used by licensed Office 365 users in your organization

  - [Access control for Office 365 email and
    documents](https://support.microsoft.com/en-us/office/capabilities-of-built-in-mobile-device-management-for-office-365-a1da44e5-7475-4992-be91-9ccec25905b0?ui=en-us&rs=en-us&ad=us#bkmk_accesscontrol)

  - [Policy settings for mobile
    devices](https://support.microsoft.com/en-us/office/capabilities-of-built-in-mobile-device-management-for-office-365-a1da44e5-7475-4992-be91-9ccec25905b0?ui=en-us&rs=en-us&ad=us#bkmk_policysettings)

  - [Remotely wipe a mobile
    device](https://support.microsoft.com/en-us/office/capabilities-of-built-in-mobile-device-management-for-office-365-a1da44e5-7475-4992-be91-9ccec25905b0?ui=en-us&rs=en-us&ad=us#bkmk_wipedevice)

## Endpoint Manager (Intune)  

Customers with the full suite of Enterprise Mobility Security may want
to enable a broad range of security policies immediately. The policies
listed below help company-owned and bring-your-own (BYO) device
management with staying up to date with flexible control over any
Windows, Apple, and Android devices.

**License requirement**

  - M365 E3/A3, EMS E3):

  - M365 E5/A5, EMS E5):

**Application Protection (MAM) - Prevent data leaks on non-managed devices using Microsoft Intune.**  

If you allow access to company data hosted by Office 365, you can
control how users share and save data without risking intentional or
accidental data leaks Microsoft Intune provides app protection policies
that you set to secure you company data on user-owned devices. The
devices do not need to be enrolled in the Intune service

  - [https://docs.microsoft.com/en-us/mem/intune/apps/app-protection-framework](https://docs.microsoft.com/en-us/mem/intune/apps/app-protection-framework)

  - [https://techcommunity.microsoft.com/t5/intune-customer-success/app-protection-policy-data-protection-framework/ba-p/1211623](https://techcommunity.microsoft.com/t5/intune-customer-success/app-protection-policy-data-protection-framework/ba-p/1211623)

**Device Health: (Intune Enrollment /MDM)**

IT Pros looking to determine device health should enable compliance
policies that ensure devices are healthy prior to allowing access to an
organization’s cloud resource. Intune Compliance policy for Windows
devices allows an administrator to specify that a device should have one
or more of three security-related elements supported and checked by the
Windows Device Health Attestation (DHA) service. These include:

  - Require Code Integrity

  - Require Secure Boot

  - Require BitLocker Encryption

The measured state of these three critical security capabilities are all
written into the Trusted Platform Mobile (TPM) of the device and the
Windows Boot Configuration Logs (also known as TCG logs) very early in
the Windows boot process

  - Require healthy device access - *requires device enrollment into
    Intune\**

  - IT Pro - Setup Intune Compliance policies
    - [Here](https://docs.microsoft.com/en-us/mem/intune/protect/device-compliance-get-started)  

**Control Access (Office 365 Azure AD CA / Session Control)**

IT Pros allowing access to Office 365 via internet access can secure
data stored online by creating read-only access to documents. Limiting
access allows users to remain productive while addressing the risk of
accidental data loss on unmanaged devices. When you limit access, users
on managed devices will have full access (unless they use one of the
browsers and operating system combinations listed below). Users on
unmanaged devices will have browser-only access with no ability to
download, print, or sync files.

  - Limit access to OneDrive and SharePoint 
    
      - Control access to unmanaged devices
        - [Here](https://docs.microsoft.com/en-us/sharepoint/control-access-from-unmanaged-devices)
    
      - Control access based on network location
        - [Here](https://docs.microsoft.com/en-us/sharepoint/control-access-based-on-network-location)
    
      - Sign Out Inactive Users
        - [Here](https://docs.microsoft.com/en-us/sharepoint/sign-out-inactive-users)
    
      - Restrict Sharing of SharePoint and OneDrive between Domains
        - [Here](https://docs.microsoft.com/en-us/sharepoint/restricted-domains-sharing)
    
      - External Sharing
        - [Here](https://docs.microsoft.com/en-us/sharepoint/external-sharing-overview)

**Identity Protection (Require multi-factor authentication)**

IT Pros and end-users both accessing corporate resources remotely should
require two-factor authentication. This provides a base layer of
security org-wide. The authentication app should be coupled with
enablement to help end-user pain points. Below are instructions for
setting up Azure MFA and an end-user experience video.

  - Setup two factor authentication
    - [Here](https://docs.microsoft.com/en-us/microsoft-365/admin/security-and-compliance/secure-your-business-data?view=o365-worldwide#1-set-up-multi-factor-authentication)
    
      - Secure employee account with MFA in Microsoft 365 Business / IT
        Pro  (video)
        - [here](https://support.office.com/en-us/article/secure-employee-accounts-with-mfa-in-microsoft-365-business-e12187b8-216a-4490-9e3b-df34a06fb787?ui=en-US&rs=en-US&ad=US)
    
      - End-User Assistance Video
        - [Here](https://support.office.com/en-us/article/set-up-multi-factor-authentication-in-microsoft-365-business-a32541df-079c-420d-9395-9d59354f7225?ui=en-US&rs=en-US&ad=US)

## Mobile Apps  

Some customers prefer the built-in device management inside Office 365
to allow basic controls on mobile devices connecting to corporate data.
Other customers need stronger security, so they use EMS or
3rd party MDM solutions to control apps and device access.
For those customers that have Intune and AADP, they can configure a much
more secure access model for mobile devices. See “Get Secure” guidance
in task 3720 or engage an EMS SME to help drive these specific
scenarios.

Basic MDM recommendations:

[Set up Mobile Device Management (MDM) in Office 365](https://support.office.com/article/Set-up-Mobile-Device-Management-MDM-in-Office-365-dd892318-bc44-4eb1-af00-9db5430be3cd)

Secured MDM Applications

[Get Started with Intune fundamentals](https://docs.microsoft.com/mem/intune/fundamentals/what-is-intune)

### Outlook Mobile  

If the customer's users do not already have the Outlook mobile app,
recommend the app as an easy way for them to stay connected with email
and calendar. Outlook mobile gives users access to their emails,
calendar appointments, contacts, documents, and more from wherever they
are working. Read the IT admin [FAQ page](https://docs.microsoft.com/exchange/clients-and-mobile-in-exchange-online/outlook-for-ios-and-android/outlook-for-ios-and-android-faq)
for answers about architecture, security, administration, and more.
Leverage the pitch deck in OLM 3278 to have this conversation.

**NOTE:** This is not about moving the mailbox – simply enabling use of
the app.

Users can install and set up any apps included with the Office 365
subscription on Android or iOS devices. Share the following links to
guide users them to setup the Outlook mobile.

  - iOS: [How to install Outlook for
    iOS](https://go.microsoft.com/fwlink/?linkid=2092639)

  - Android: [How to install Outlook for
    Android](https://go.microsoft.com/fwlink/?linkid=2092802)

> [!NOTE]
> Task reference: 3278 (Outlook Mobile), 3267 (Outlook Mobile)

### New Office App

It is recommended to highlight the new Office Mobile app. The new Office
app combines Word, Excel, and PowerPoint into a single app, and
introduces new mobile-centric features to view, edit and share files
without the need to switch between multiple apps. Share the [blog
post](https://www.microsoft.com/en-us/microsoft-365/blog/2020/02/19/new-office-app-android-ios-available/)
introducing this app to the customer here. Note that the app is now
generally available for Android and iOS.

Share the direct install link to the apps to communicate to users for
use. This expects the customer to distribute the recommendation to their
users.

> [Download for Android](https://aka.ms/OfficeAppAndroid)
> 
> [Download for iOS](https://aka.ms/OfficeAppiOS)

If the customer wants to enforce the app and has Intune continue to
Intune.

### Office Mobile Apps  

Ensure the customer is aware their users can install and set up any apps
included with the Office 365 subscription on Android or iOS devices.
Office and Office 365 offer these apps:

  - OneNote

  - Teams

  - Office Lens

  - SharePoint

  - Yammer

> [!NOTE]
> Share this direct install link to end users to install additional apps: [Get more Office productivity apps](https://www.microsoft.com/en-us/microsoft-365/mobile)  
If the customer wants to enforce the app and has Intune continue to Intune

## Windows 10 Updates  

**Patch Tuesday Awareness & Considerations**

It can be challenging to keep Windows 10 updated as users have quickly
transitioned to remote work. Without cloud management capabilities
relying on connectivity to SCCM/WSUS resource can make this difficult to
manage and avoid flooding the VPN with update traffic.

To prepare the customer the considerations share the [Patch Tuesday post
by Rob
York](https://techcommunity.microsoft.com/t5/configuration-manager-blog/managing-patch-tuesday-with-configuration-manager-in-a-remote/ba-p/1269444)
to the customer. This outlines by area, steps a customer can take to
ensure they are able to successfully patch without overwhelming their
VPN. 

Next help prepare the customers using Configuration Manger to implement
cloud management capabilities to prepare for this change. Begin with the
[Cloud Management
Gateway](https://docs.microsoft.com/en-us/configmgr/core/clients/manage/cmg/plan-cloud-management-gateway) (CMG)
information. Utilize the wizard in task 4039 for Intune. Next guide the
customer to apply the recommendations from the [Managing remote machines
with cloud management gateway in Microsoft Endpoint Configuration
Manager blog
post](https://techcommunity.microsoft.com/t5/configuration-manager-blog/managing-remote-machines-with-cloud-management-gateway-in/ba-p/1233895).

With a CMG, the customer can leverage it as a cloud management point,
fully controlling updates, but [allow the clients download the patches
directly from Microsoft as opposed to downloading over their
VPN](https://techcommunity.microsoft.com/t5/configuration-manager-blog/managing-remote-machines-with-cloud-management-gateway-in/ba-p/1233895). 
Refer the Office 365 ProPlus management recommendations in the manage
Office 365 ProPlus task for specific recommendations for the
application.

If a customer does not have SCCM or cannot use a CMG or internet-based
management, they can also consider leveraging [Windows Update for
Business, managed by
Intune](https://docs.microsoft.com/en-us/mem/intune/protect/windows-update-for-business-configure).
This option does provide update control, experience control for
maintenance windows and restarts and even supports deadlines for gaining
patch velocity. As this solution is 100% cloud, with a split tunnel VPN,
it relieves all VPN traffic related to patching.

> [!NOTE]
> Task reference: 4039 (Intune - (Wizard) Conduct Cloud-Attach Assessment), 4032 (Windows 10 Phased Deployment with System Center)  

## Edge

Every customer needs a browser. The new Microsoft Edge allows for
productivity and security right at the customer's fingertips, with
integrated Office experiences and cross-platform support.

Key features:

  - Edge provides **native SSO**. By simply signing on with an AAD
    account, customers can access their corporate content as well as
    Office 365. Additionally, users can **sync** their work and personal
    settings across all their devices.

  - The **Enterprise new tab page** allows customers to access files and
    sites easily every time they open a new tab.

  - With **Microsoft Search in Bing** native to Microsoft Edge, you can
    search files, sites, people, and even acronyms from the Enterprise
    new tab page or Bing.com

  - **SmartScreen** protects users from phishing and malware while they
    are working remote.

  - **Native support for Conditional Access** (Note this is dependent on
    the customer enabling conditional access policies mentioned
    previously)

  - **Windows Information Protection (WIP)** provides separation between
    personal and corporate data, and data protection for existing LOB
    apps. [Learn
    More](https://docs.microsoft.com/en-us/deployedge/microsoft-edge-security-windows-information-protection).

> [!NOTE]
> Task reference: 4097 (Deploy and Configure Edge)

## Office 365 ProPlus  

License Requirement: subscription must include Office 365 ProPlus (not
included in the E1 trial).

### New Installs on unmanaged user devices – PC and Mac  

Customers can support their remote work users by providing the option to
install Office 365 ProPlus on local PC and Mac devices from the Office
365 portal. This allows users to have access to the latest versions of
the Office apps on their local PC or Mac device to create and
collaborate on content with the local apps.

The self-install option from the portal is the recommended method for
customers to deploy Office to remote work users using unmanaged or
personal devices. This option requires that your users have local
administrative rights on their client devices.

In this approach, the customer can control which software and how
frequently your users receive feature updates. Refer to controls
available in the setting, see [Manage user software in
Office 365](https://support.office.com/article/manage-user-software-in-office-365-c13051e6-f75c-4737-bc0d-7685dcedf360).
The package available in the portal will include all the Office apps,
including Teams, and will deploy 64-bit Office.

Ensure customers are aware of the potential challenges including:

  - Existing versions of Office on the user's device will be removed.

  - When a user leaves the organization, as the subscription is removed,
    the app will revert to the read-only reduced functionality mode
    (RFM).

Next, guide the customer to share the steps to their users to install
Office 365 ProPlus from the portal. The easiest path is to leverage the
built-in communication templates available in Office 365 admin center.
The admin can access these templates in the admin center at
[https://admin.microsoft.com/AdminPortal/Home#/emailtemplates](https://admin.microsoft.com/AdminPortal/Home#/emailtemplates)

Select the Microsoft Office apps template to communicate to users how to
self-install from the portal. Use the option to send a preview to review
the details before sending the communication. Select the desired group
to target the communication.

Alternatively, Admins who need further control can download
communication templates from the [FastTrack Resource
Hub](https://www.microsoft.com/fasttrack/resources) to customize the
communication prior to sending. If the admin uses this option, they will
leverage their existing email or other communication platform to
distribute the details to their users.

The service has seen a significant increase in the use of the portal
install scenario as the benefits out-weigh the challenges for many. If
the customer does not want to offer this or is not ready to offer this,
our preference is to keep the ProPlus license assigned so it still can
be deployed in a managed context. Recommend the option to use the admin
center settings controls to remove the portal install options.

Ensure the customer is aware of the Office Cloud Policy Service that
provides them an option to manage many of the user-based policies and
preferences – like the privacy settings and security recommendations.
When a user signs into Office 365 ProPlus on a device, the policy
settings roam to that device. You can also enforce some policy settings
for Office for the web, both for users who are signed in and for users
who access documents anonymously. Learn more about this service in the
[Overview of the Office cloud policy service for Office 365 ProPlus
article](https://docs.microsoft.com/DeployOffice/overview-office-cloud-policy-service)
or go to the Office Cloud Policy Service – [https://config.office.com](https://config.office.com)

### Managed deployment for remote workers  

Customers who want to manage deployments with Configuration Manager for
remote works should take steps to minimize the impacts to impacts to
network and VPN. Customers can offload the content distribution to the
CDN. This process includes the following actions:

1.  Adjust the deployment package
    
    This will remove the source files from Configuration Manager. Don’t
    remove the setup.exe and configuration files. This will result in a
    several GB reduction in size depending on your language selections.

2.  Update the content sources
    
    Sync the package to your Distribution points to sync the smaller
    packages to the locations.

3.  Verify VPN configuration
    
    Apply the network recommendations for remote workers with the
    addition to avoid the traffic on item \#92 in the [Office 365 URLs
    and IP Address
    article](https://docs.microsoft.com/office365/enterprise/urls-and-ip-address-ranges).
    Note that the VPN will need to support URL configurations.
    
Refer to the following [blog post](https://techcommunity.microsoft.com/t5/office-365-blog/deploy-office-365-proplus-to-remote-workers/ba-p/1258514) for additional details.

### Managing Existing ProPlus Users in the remote-work scenario  

If user devices have moved to a remote-work scenario, it may be
beneficial to provide updates to Office 365 ProPlus from the CDN versus
Configuration Manager. This allows you to have users obtain the update
content directly from the internet and minimize impacts to your VPN
connection. Guide the customer to use one of the following options to
make this change. Remind the customer that they remain in control, and
that this option provides a solution to change where the user will
download the Office update bits from.

  - Option 1: Cloud Managed - Get updates directly from the CDN

  - Option 2: Configuration Manager but offload content distribution -
    Deploy with no package and obtains content from the CDN

Both options require Office client updates bypass or use split tunneling
in the VPN. The endpoints in the [Office 365 IP and URL
article](https://docs.microsoft.com/Office365/Enterprise/urls-and-ip-address-ranges)
are items 90 and 92. These are not included in the optimize end points
as they don't fit the optimize profile and the CDN includes some
non-Microsoft endpoints (i.e., Akamai). However, in cases where the VPN
is constrained, it can be recommended to offload the ProPlus update
traffic. Refer to the full recommendations at [Configuring Office 365
ProPlus updates for remote workers using
VPN](https://techcommunity.microsoft.com/t5/office-365-blog/configuring-office-365-proplus-updates-for-remote-workers-using/ba-p/1253491).
Refer to the recommended methods to update the Office 365 ProPlus update
location
[here](https://docs.microsoft.com/deployoffice/manage-office-365-proplus-updates-with-configuration-manager#enable-office-365-clients-to-receive-updates-from-the-office-cdn-instead-of-configuration-manager).

Leverage this in conjunction with the networking recommendations to
avoid VPN constraints in the remote-work scenario.

> [!NOTE]
> Task reference: 3080 (Office ProPlus), 1247 (Office ProPlus)
