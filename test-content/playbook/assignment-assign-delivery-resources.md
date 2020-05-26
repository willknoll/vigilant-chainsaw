---  
# required metadata  
title: FastTrack Playbook - Assign Delivery Resources  
description: FastTrack Playbook - Assign Delivery Resources  
author: Rosie Arrieta  
ms.author: rosiea  
manager: eduardod  
ms.date: 1/16/2020  
ms.topic: playbook  
ms.prod: non-product-specific  
ms.custom: internal-playbook  
ft.audience: internal  
ft.owner: rosiea  
---  
[!INCLUDE [Playbook Feedback](./includes/questions-feedback.md)]  

# Assign Delivery Resources

Phase: **Assignment**  
Motions: **Customer Health / RFA / Targeting**  
[!INCLUDE [Data Privacy](./includes/playbook-data-privacy.md)]  

## Overview

The Assign Delivery Resources process occurs after it is determined that
the FastTrack Center (FTC) is responsible for a customer's onboarding
activities, and both an available FastTrack Manager (FM) and FastTrack
Engineer (FE) are assigned to work with the customer.

## Objectives

Assign an FM and FE to the customer based on availability.

## Approach

### Filter Assignment Queues

Primary Role: **RM**  
Motions: **Customer Health / Targeting / RFA**  
Applies To: **Core Onboarding**

​From the FastTrack Orchestration Portal (FTOP), check the available
tenants for each region as follows:

  - Select "All Tenants" in the first filter
  - Priority Filter: choose All
  - Display Filter: choose Overview
  - Filter the Regional Manager (RM) column by FTCQ CSS Region; it has 3
    queues:
      - FTCQ CSS EMEA
      - FTCQ CSS Americas
      - FTCQ CSS APJ
  - Check the list of [FTC
    Queues](https://microsoft.sharepoint.com/:p:/r/teams/ftccm/_layouts/15/Doc.aspx?sourcedoc=%7b8BAA29F1-A0C0-4DCC-B31E-43FBBE0137C0%7d&file=Assignment%20Team%20Queue%20Flow.pptx&action=edit&mobileredirect=true&DefaultItemOpen=1)

### Review Customers for Assignment

Primary Role: **RM**  
Motions: **Customer Health / RFA / Targeting**  
Applies To: **Core Onboarding**

​Review customers in the FTOP Portfolio list.

### Review RFA and High flagged Customers

Primary Role: **RM**  
Motions: **Customer Health / RFA / Targeting**  
Applies To: **Core Onboarding**

Review customers flagged as Request for Assistance (RFA); i.e.,
Assignment Urgency Flag and Wizard Experience set to "High".​  

### Review Tenant Information

Primary Role: **RM**  
Motions: **Customer Health / RFA / Targeting**  
Applies To: **Core Onboarding**

​Review active tenants by checking:

  - Information Eligibility section: If missing information or blank,
    review Engagement Management notes and Services tab to obtain as much
    information as possible.
  - If RM, FM, and/or FE is assigned:
      - ​Check with RM, FM, or FE to confirm status.
      - If tenant is invalid, remove name and proceed to the FM/FE
        Assigned step.

### FM/FE Assigned

Primary Role: **RM**  
Motions: **Customer Health / RFA / Targeting**  
Applies To: **Core Onboarding**

A​ssign customers to FM and/or FE, and consider:

  - Availability to accept more customers
  - Size of customers the person can handle
  - Service specific workloads for FE's

## Key Inputs

  - Tenant associated with FTC Delivery Queue

## Key Outputs

  - Assign FM or FE to customer

## Next Steps

  - [Conduct Customer Kickoff](./initiate-conduct-customer-kickoff.md)  

## Refresh Summary

| Date       | Who Changed       | What Changed                 |
| ---------- | ----------------- | ---------------------------- |
| 2/22/2019  | Rosie Arrieta     | Playbook migration to GitHub |
| 10/26/2018 | Mark Eichenberger | Playbook Created             |
