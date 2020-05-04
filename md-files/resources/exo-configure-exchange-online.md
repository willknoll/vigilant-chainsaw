---
# required metadata
title: Resources - Configure Exchange Online
description: How to Configure Exchange Online
author: Dan Rowley
ms.author: danr  
manager: cadenli  
ms.date: 5/30/2019  
ms.topic: resources  
ms.prod: non-product-specific  
ms.custom: internal-resources  
ft.audience: internal
ft.owner: danr
---
# Configure Exchange Online
\* **If NO MIGRATION follow the steps below.** Otherwise follow migration setup steps in that section. 

| **1.	License and enable Exchange Online users, confirm that mailboxes are functioning** | **Responsible** |
| ---------------------------------------------------------------------------------------- | --------------- |
|                                                                                          | Customer        |
| **2.	Point MX record to Office 365**                                                    | **Responsible** |
| Until you change your MX record, email sent to users is still routed to their on-premises Exchange mailboxes and then forwarded to the corresponding Exchange Online mailbox. [Learn More](http://go.microsoft.com/fwlink/?LinkID=524207)                                                                                                                                           | Customer        |
| **3.	Reset MX DNS Record TTL to original value**                                        | **Responsible** |
| Change the TTL back to the original value that the customer had. This should only be done AFTER the MX record is switched over to flow email to the cloud.                                                                                 | Customer        |
|                                                                                          |                 |

## Related FTOP Tasks

| Task ID | Task Name                 |
| ------- | ------------------------- |
| 1158    | Configure Exchange Online |

## Refresh Summary

| Date       | Who Changed       | What Changed                 |
| ---------- | ----------------- | ---------------------------- |
| 1/1/1019   | Dan Rowley        | CMR XXXXX                    |

