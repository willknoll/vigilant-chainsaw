---
# required metadata
title: FTOP User Guide - Detailed Tenant View Contacts Tab
description: Process guidance for internal FTOP users.
author: Connie Brenden
ms.author: v-conbre
manager: jimmuir
ms.date: 5/14/2019
ms.topic: ftop-user-guide
ms.prod: non-product-specific
ms.custom: ftop-user-guide
ft.audience: internal
ft.owner: jimmuir
---
# Contacts Tab

## Overview

The Contacts tab tracks customer, partner, and Microsoft contacts related to the customer deployment.

Most of the contacts are automatically fed into FTOP from other systems. This does not mean FTOP has all required contacts. Some contacts (e.g., customer contacts for a specific service) may need to be added and maintained manually.

> [!NOTE]
>Contacts can be deleted manually, but any contact that is synchronized from another system will be repopulated unless that contact is removed from the upstream system. To assist with identifying the most current contacts, the contact grid provides a modified date. When there are multiple contacts for the same role or title, the modified date should be a good indicator as to which contact is correct.

When contacts are added or edited, the timezone displays the UTC time with locations.

The following diagram shows the contacts tab.

![Contacts page](media/detailed-tenant-view-contacts-tab/contacts-page.png "Contacts page")

### Viewing additional contact details

#### To view additional details of an existing contact

1. Click the **name** of the user. All available details (including information not seen in the grid) about the contact appears.

![Contact details screen](media/detailed-tenant-view-contacts-tab/contact-details-screen.png "contact details screen")

> [!NOTE]
> Phone numbers and e-mail addresses are hyperlinks that open a Microsoft Teams call (phone number) or Outlook message (e-mail address).

#### FM Requirements
The following values must be set:
- Country
- Survey eligible = "Yes"
- Survey language
- Services Deployed/Migrated

> [!NOTE]
> If you try to save the contact with survey eligible set to "Yes", you must set a survey language and you must set services deployed / migrated.

The following screen highlights the required fields and displays the error message you will see if all survey requirements are not met.

![error-while-saving-contact.png](media/detailed-tenant-view-contacts-tab/error-while-saving-contact.png "error while saving contact")

#### To add a contact

1. Click **Add** under the appropriate section (i.e., customer contacts are added under customers, partner contacts are added under partners, and Microsoft contacts are added under Microsoft).

> [!NOTE]
> FTOP assignments are not automatically added as Microsoft contacts.

The information available for each contact type is the same except for one field. The customer contact has a *do not call* option, the partner contact replaces that with a skill type drop-down list and the Microsoft contact replaces it with an MS role text box.

![Add-customer-contact-dialog.png](media/detailed-tenant-view-contacts-tab/add-customer-contact-dialog.png "Add customer contact dialog")

|Icon  |Description  |
|---------|---------|
|Floppy Disk   |Click the floppy disk to save the contact information.         |
|Pencil    |Click the pencil to edit the contact information. The contact information dialog appears.         |
|Garbage Can     |Click the garbage can to delete the contact.           |

## Next steps

To learn about the next tab, see the [**Partners tab**](detailed-tenant-view-partners-tab.md).