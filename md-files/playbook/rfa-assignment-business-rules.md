---
# required metadata  
title: FastTrack Playbook - Assignment Business Rules  
description: FastTrack Playbook - Assignment Business Rules 
author: Alicia Evans  
ms.author: alicia.evans
manager: steveso
ms.date: 12/27/2019  
ms.topic: playbook  
ms.prod: non-product-specific  
ms.custom: internal-playbook  
ft.audience: internal  
ft.owner: alicia.evans

---

[!INCLUDE [Playbook Feedback](./includes/questions-feedback.md)]  

# Assignment Business Rules

## Type and use of document

- Motion: RFA
- Primary role: Gateway RFA FMs and Gateway Assignment FMs

## Summary

Assignment Business Rules are used by the Gateway Request for Assistance (RFA) Team to determine when to assign, or reassign, a customer to a FastTrack Ready Partner (FRP), the FastTrack Center (FTC), or another downstream team. For RFA process details, see the [RFA Process Guide](rfa-process-guide.md).

## Definitions

- **Direct FRP Assignment [(footnote 1)](#footnote-reference) –** When a customer is assigned directly to an FRP because the RFA Requestor has indicated that the FRP is engaged.
- **Existing FRP Assignment [(footnote 1)](#footnote-reference) –** When an FRP is already assigned to the customer in FTOP at the time of RFA submission.
- **FRP Referral –** When the customer has no existing relationship to a Partner and is assigned to an FRP through the Referral process.

### Business Rules

#### Criteria affecting assignment rules for *all* Assignment scenarios

If met, the following criteria will result in:

- *FTC assignment (unless otherwise noted)* for: Referral scenarios

- *FPM escalation* for: Existing FRP Assignment scenarios

- *FPM escalation prior to assignment* for: Direct FRP Assignment scenarios

| **Region**   | **Criteria**                                                                                      | 
| ------------ | ------------------------------------------------------------------------------------------------- | 
| **All**      | <150 seats <br /> Is S1500/Customer Health <br /> Is Get Modern Targeting [(footnote 2)](#footnote-reference) <br /> Is approved for Win 10 [(footnote 2)](#footnote-reference) <br /> Is approved for Edge <br /> Is approved for MDATP or OATP [(footnote 3)](#footnote-reference) <br /> No intent for any FRP Eligible Workloads <br /> MCS Led engagements <br /> Non-FastTrack Partner Led engagements <br /> Non-Profit Subscriptions <br /> >=10,000 licenses of Microsoft Intune <br /> >=10,000 licenses of AADP only [(footnote 4)](#footnote-reference) <br /> Start date for E1/G1/A5 trials or Teams Exploratory trials is before Feb 1, 2020 |        
| **EMEA**     | "BlackForest" Customers                                                                                          |

#### Criteria that only applies to *Referral scenarios*

If any of the bulleted **criteria** below are met, the tenant *will be assigned to FTC in* **Referral scenarios** (see scenario [Definitions](#definitions) above).

**Criteria:**

- Gov Subscriptions (US Only)

- Does not have intent for *at least one FRP eligible workload that meets the Active Usage & Seat Threshold requirements* (see table below)

| **FRP eligible workloads and respective Active Usage & Seat Threshold requirements** |
|:--------------------------------------------------------------------------------:|

| **FRP eligible workloads**  | Active Usage requirement for FRP Referral for <br /> 150-499 Seats              | Active Usage requirement for FRP Referral for <br /> >=500Seats |
| -------------------------- | :-----------------------------------------------------------------------------: | :-------------------------------------------------------------: |
| **Exchange Online**        | <20%                                                                            | <10%                                                            |
| **SharePoint Online**      | <20%                                                                            | <10%                                                            |
| **Teams**                  | <20%                                                                            | <20%                                                            |
| **Yammer**                 | <20%                                                                            | <10%                                                            |
| **Office ProPlus**         | <20%                                                                            | <20%                                                            |
| **Intune**                 | <20%                                                                            | <20%                                                            |
| **Azure AD Premium**       | <20%                                                                            | <10%                                                            |
| **AIP**                    | <20%                                                                            | <20%                                                            |

#### Footnote Reference

- **1**: If the customer meets any of the applicable criteria in Table 1, an FPM escalation will be required prior to assignment. The tenant will be assigned as instructed by the FPM.

- **2**: Tenants with an approved Win10 RFA may still be assigned to, or remain with, an FRP if the customer has an existing relationship with that FRP. Otherwise, they will be assigned to FTC.

- **3**: If a Requestor submits an RFA for MDATP or OATP, or both, and has 10K or more seats of MDATP or OATP, or both, then the RFA Manager assigns **Teresa Santos** as RM for the respective workload. If a Requestor submits an RFA for MDATP or OATP, or both, and has less than 10K seats of the respective workload(s), then the RFA Manager assigns **FTCQ CSS Americas** as RM for whichever of these two workloads meet these conditions.

- **4**: AADP CAT Team qualified customers should be assigned to **Kanna Ramasubramanian** as a Primary RM for AADP workload only. If AADP is the only workload, then the tenant will be assigned to FTC and Kanna. If there are other eligible workloads, the tenant may be assigned to an FRP for those other workloads only and to Kanna for AADP. To qualify for AADP CAT Team, the customer must have intent for AADP, own 10,000 or more seats of AADP, and not be an EDU or non-profit customer.

### Resources and related links

- [Gateway RFA Process Guide](rfa-process-guide.md)
- [Gateway Referral Process](https://microsoft.sharepoint.com/:w:/r/teams/ftccm/opsplaybook/_layouts/15/Doc.aspx?sourcedoc=%7B5ABAB4ED-DE9A-40EF-BA5B-B11A3B5ECCA6%7D&file=Assignment%20Business%20Rules.docx&action=default&mobileredirect=true)
