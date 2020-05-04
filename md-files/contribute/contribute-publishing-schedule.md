---
# required metadata
title: FastTrack Docs Contributor Guide - Publishing Schedule
description: The guide for FastTrack content contributors on FastTrack Docs.
author: Jayme Bowers
ms.author: jaymeb
manager: jwilkes
ms.date: 8/20/2019
ms.topic: contributor-guide
ms.prod: non-product-specific
ms.custom: internal-contributor-guide
ft.audience: internal
ft.owner: jaymeb
---

# Publishing schedule

What happens after you submit a content update or pull request?

The FastTrack Readiness team triages content update submissions weekly. You may be asked to supply additional information and/or changes depending on the content updates you submit. You can check the status of your submissions on the [Microsoft/fasttrack-docs](https://github.com/Microsoft/fasttrack-docs) page, [Pull requests](https://github.com/Microsoft/fasttrack-docs/pulls) tab.

After approval, your changes are merged to the staging branch, which triggers a rebuild of the staging websites:

- Internal staging site [here](https://ftdocs-internal-staging.azurewebsites.net/)
- Partner staging site [here](https://ftdocs-partner-staging.azurewebsites.net/)

Production websites are updated **each business day around 9:30 a.m. PST**:

- Internal production site [here](https://fasttrack-docs.microsoft.com)
- Partner production site [here](https://partner-docs.microsoft.com)

## Pull Request Approval Schedule

Pull requests are approved twice daily per the following schedule:

- 10:00 a.m. (1:00 p.m. EST)
- 3:00 p.m. (6:00 p.m. EST)

All changes submitted and approved will be live in production at approximately 9:30 a.m. (12:30 p.m. EST) the following business day.

Changes submitted after the final 3:00 p.m. cutoff will not be reviewed until the next business day.

The following table provides examples of how this process works.

|Change submitted  |Reviewed |Live  |
|---------|---------|---------|
|8:00 a.m. Tuesday     |  Tuesday 10:00 a.m.     | Wednesday        |
|2:30 p.m. Tuesday     |  Tuesday 3:00 p.m.    | Wednesday        |
|4:00 p.m. Tuesday     |  Wednesday 10:00 a.m.   | Thursday         |

For month-end updates, change or pull requests must be submitted by **Thursday** so they can be reviewed and approved prior to the Friday release.

Monthly system deployments are scheduled for the first **Tuesday** each month. Please expect content publishing delays of up to a few hours on those days.
