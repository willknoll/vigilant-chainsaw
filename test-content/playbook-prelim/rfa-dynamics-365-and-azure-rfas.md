---
# required metadata  
title: FastTrack Playbook - Dynamics 365 and Azure RFAs 
description: FastTrack Playbook - Dynamics 365 and Azure RFAs
author: Erin Saville  
ms.author: v-ersav
manager: steveso
ms.date: 12/30/2019  
ms.topic: playbook  
ms.prod: non-product-specific  
ms.custom: internal-playbook  
ft.audience: internal  
ft.owner: alicia.evans
---  
[!INCLUDE [Playbook Feedback](./includes/questions-feedback.md)]  

# Dynamics 365 and Azure Requests for Assistance

## Type and use of document

- Topic category: Request for Assistance (RFA)
- Primary role: Gateway RFA FMs
- Use: Process Guide for Dynamics 365 and Azure RFAs

## Summary

This article provides step-by-step guidance for Gateway RFA FMs to follow when processing RFAs for Dynamics 365 and Azure workloads.

## Resources

- [Azure or Dynamics 365 Handoff Policy Federated Identify](https://microsoft.sharepoint.com/teams/ftccm/_layouts/15/WopiFrame.aspx?sourcedoc=%7BCEF68655-045D-4781-AA23-5BFB50C519C8%7D&file=Azure%20or%20Dynamics%20365%20Handoff%20Policy%20Federated%20Identity.docx&action=default)

## Processing Dynamics 365 and Azure RFAs

An Azure or Dynamics 365 FE will send an email to the Exceptions team alias, [ftcrfa@microsoft.com](mailto:ftcrfa@microsoft.com), including relevant customer information:

- In the subject line, the FE will indicate the workload (Azure or Dynamics 365).

    Note: *If “CRM Online” is indicated, that means Dynamics 365.*

- In the body of the email, the FE will include the customer name, contact information, tenant name, and tenant ID.

### Procedure

1. Respond to let the Requestor know the request is being prioritized.

    Note: *If the Requestor asks for a timeline, defer to Jeff Garrett.*

1. Search for the customer in FTOP first to make sure the tenant doesn’t already exist.

    - **If the customer exists:**

        1. Connect the assigned O365 FM and FE with the Azure or Dynamics 365 FE.

            Note: *Do **not** set the FTOP flag on the customer as “Is Dynamics Fed” or “Is Azure Fed.”*

    - **If the customer does not exist:**

        1. Manually add the customer into FTOP via the Tenant Exception Page.

        1. Assign yourself as FM.

        1. Set the status to “Assess – Active” with a note, such as, *This is a [Dynamics 365 orAzure] exception for federation assistance. Requestor: [Name; Email]. Customer contact: [Name; Email].*

        1. Start the time clock on Task 1415.

        1. Update the Contacts tab with the Requestor and Customer contact information.

        1. Flag the tenant as *“Is Dynamics Fed”* or *“Is Azure Fed.”*

        1. Stop the time clock on Task 1415, mark complete, and add task notes (for example, [NN RFA] [FTCQ CSS Americas]).

        1. Start and stop the time clock on Task 3186, mark complete, and add task notes (for example, [FTCQ CSS Americas]).

        1. Assign the customer to the appropriate region (that is, FTCQ CSS Americas, FTCQ CSS EMEA, *or* FTCQ CSS APJ).

        1. Forward the thread to the regional CSS DL (for example, [FTCAMCSSTM@microsoft.com](mailto:FTCAMCSSTM@microsoft.com)) and let them know that the customer has been processed and reassigned, using the **RFA Approval email template** below.

1. Update the [Special Requests](https://microsoft.sharepoint.com/teams/ftccm/_layouts/15/WopiFrame.aspx?sourcedoc=%7BAFA11563-E13C-439C-B739-BE40BA9A53EB%7D&file=Special%20Requests.xlsx&action=default) spreadsheet with appropriate request information. This report can be found in FTC Documents and must be updated by Friday EOD each week.

### RFA Approval email template

Hi All,

This customer is now in FTOP and has been assigned to FTCQ CSS [region] **here** (*include hyperlink to tenant*). Please let me know if we can provide further assistance with this customer.

Regards,

[!INCLUDE [rfa-resources-for-footer-of-every-article-include](includes/rfa-resources-for-footer-of-every-article-include.md)]

## Refresh Summary

| Date       | Who Changed       | What Changed                                                                              |
| ---------- | ----------------- | ----------------------------------------------------------------------------------------- |
| 4/30/2020  | Ben Skoropinski   | Created Refresh Summary                                                                   |
