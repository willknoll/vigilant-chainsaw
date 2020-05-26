---
# required metadata
title: FTOP Partner User Guide
description: Contacts Tab
author: Celia Kennedy
ms.author: v-cekenn
manager: pagrim
ms.date: 1/27/2019
ms.topic: ftop-partner-user-guide
ms.prod: non-product-specific
ms.custom: ftop-partner-user-guide
ft.audience: partner
ft.owner: pagrim
---
# Contacts Tab

## Overview

The Contacts Tab tracks **customer, partner, and Microsoft contacts** related to the customer deployment.

Most of the contacts are automatically fed into FTOP from other systems. This does *not* mean FTOP has all required contacts. Some contacts (e.g., customer contacts for a specific service) may need to be added and maintained manually.

> [!NOTE]
> Contacts can be deleted manually, but any contact that is synchronized from another system will be repopulated unless that contact is removed from the upstream system. To assist with identifying the most current contacts, the contact grid now includes a modified date. When there are multiple contacts for the same role or title, the modified date should be a good indicator as to which contact is correct.

When contacts are added or edited, the timezone displays the UTC time with locations.

The following diagram shows the Contacts Tab.

![Contacts page](media/power-bi-reporting-guide/detailed-tenant-view-contacts-tab/contacts-page-partner.png "Contacts page")

### Viewing additional contact details

#### To view additional details of an existing contact

1. Click the **name** of the user. All available details (including information not seen in the grid) about the contact appears.

![Contact details screen](media/power-bi-reporting-guide/detailed-tenant-view-contacts-tab/contact-details-screen.jpg "contact details screen")

> [!NOTE]
> Phone numbers and e-mail addresses are hyperlinks that open a Skype for Business/Microsoft Teams call (phone number) or Outlook message (e-mail address).

#### To Add a Contact

1. Click **Add** under the appropriate section (i.e., customer contacts are added under customers, partner contacts are added under partners, and Microsoft contacts are added under Microsoft).

> [!NOTE]
> FTOP assignments are not automatically added as Microsoft contacts.

The information available for each contact type is the same except for one field. The customer contact has a *do not call* option, the partner contact replaces that with a skill type drop-down list and the Microsoft contact replaces it with an MS role text box.

![Add-customer-contact-dialog.png](media/power-bi-reporting-guide/detailed-tenant-view-contacts-tab/add-customer-contact-dialog.jpg "Add customer contact dialog")

|Icon  |Description  |
|---------|---------|
|Floppy Disk   |Click the floppy disk to save the contact information. |
|Pencil    |Click the pencil to edit the contact information. The contact information dialog appears.|
|Garbage Can     |Click the garbage can to delete the contact.  |

## Next Steps

- To learn about the next tab, see the [Partners tab](detailed-tenant-view-partners-tab.md).

[Home](http://partner-docs.microsoft.com)
