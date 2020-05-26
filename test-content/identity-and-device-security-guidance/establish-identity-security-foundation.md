---
# required metadata
title: Identity and Device Security Guidance - Establish Identity Security Foundation
description: Process guidance for internal FTOP users.
author: Connie Brenden
ms.author: v-conbre
manager: jimmuir
ms.date: 5/8/2020
ms.topic: identity-and-device-security-guidance
ms.prod: non-product-specific
ms.custom: identity-and-device-security-guidance
ft.audience: internal
ft.owner: jimmuir
---
# Establish Identity Security Foundation

Meet with the customer to discuss and help them understand the following as applicable to their organization.

Purpose is to discuss:

- Multi-factor authentication (MFA)

    - [MFA adoption kit](https://aka.ms/mfatemplates)

- Conditional Access (CA) policies

    - [Microsoft recommendations for configuring Conditional Access](https://aka.ms/m365goldenconfig)

    - [Conditional Access Common Policy templates](https://docs.microsoft.com/azure/active-directory/conditional-access/plan-conditional-access)

- Non-Microsoft Software as a Service (SaaS) app integration for Single Sign-On (SSO)

    - Discover what non-Microsoft SaaS apps the customer uses

    - Guide the customer to integrate them with Azure AD for SSO and automatic provisioning

    - Apps eligible for FastTrack onboarding are limited to those listed in the [Azure AD App Gallery](https://azuremarketplace.microsoft.com/marketplace/apps/category/azure-active-directory-apps)

Every customer should:

1. Complete the initial identity security steps preceding Azure AD Connect deployment

2. Implement Multi-Factor Authentication for all end users (preferably using conditional access policies, if licensed)

3. Implement a conditional access policy to block legacy authentication protocols.

Next action:

Once you create the required conditional access policies and all users register for MFA, *you may remove the block all conditional access policy enabled prior
to identity synchronization*.

Additionally, the customer should integrate any of their non-Microsoft SaaS apps listed in the Azure AD gallery with Azure AD for SSO capabilities.

## Next step

See [Discuss Device Management](discuss-device-management.md)
