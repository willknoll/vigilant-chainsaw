---
title: FastTrack Docs Contributor Guide - Media handling recommendations
description: The FTCMS recommendations for handling media files for security and performance
authors: Jeff Wilkes
ms.author: jwilkes
manager: jkenerso
ms.date: 06/21/2019
ms.topic: contributor-guide
ms.prod: non-product-specific
ms.custom: internal-contributor-guide
ft.audience: internal
ft.owner: jwilkes
---
# Security considerations for media files
Much of the content in FT-CMS is intented for internal or partner audiences only. As such, we need to limit content access to the [appropriate audiences](contribute-get-started-edit-content.md). Media content (such as a PNG image) that is not customer-ready should be stored in a subfolder named "media" under the content directory, such as `./fasttrack-docs/playbook/media`.

Files in the these locations will only be available to authenticated users.

# Performance considerations
Customer-ready media can be stored in a location that will improve the page load times. Recommended options are:

- Store the items in the FT-CMS [Binary Content Management system](contribute-how-to-use-bcm.md) and use that URL to link to the content
- Store the item in the root media folder of the fasttrack-docs repository (`./fasttrack-docs/media`)

Media files tend to be larger than static HTML content and take longer to download from the server, slowing down the page load times for users. Content in these locations is cached in edge servers located physically close to the users which improves the page load times and customer experience.

> [!IMPORTANT]
> Content stored in BCM and the root media folder are available to any user, even if they have not logged in.

# Video content

Video content benefits from being hosted in specialized environements. If you have video contenat that is customer ready, consider hosting the content on [YouTube](https://www.youtube.com/). Video content that is internal only should be hosted on [Microsoft Stream](https://products.office.com/en-us/microsoft-stream).