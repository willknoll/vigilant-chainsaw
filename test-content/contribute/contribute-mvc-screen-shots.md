---
title: FastTrack Docs Contributor Guide - Screen shot guidelines for MVC content
description: Provides updated MVC guidance for using screen shots in content
author: kriscrider
ms.author: kriscr
manager: erifkin
ms.date: 09/25/2017
ms.topic: contributor-guide
ms.prod: non-product-specific
ms.custom: internal-contributor-guide
ft.audience: internal
---
# Guidance for using screen shots in MVC content

MVC guidance recommends judicious use of screen shots in content.  Content contributors are encouraged to write good, quality technical documentation that is descriptive and can stand alone without additional art to support the message.  

There is some very specific art guidance for all MVC content.  Screen captures (aka: screen shots) are useful for technical content.  The guidelines below include MVC standards as well as Microsoft accessibility requirements.  
Judicious use of screenshots to avoid content bloat is ideal.  Please also **make sure that the first screen shot in any article includes the full browser image.**  

Additionally, images should be from a Safari or Chrome browser, unless the content is addressing core Windows technology (then writers should use Edge).  
- Remove personally identifiable information
- Resize browser to minimize white space (see accessibility requirements below)
- Accessibility instructions for borders/outlines (see below)
- Linux/Safari: consider context in images
- For portal images, use default Azure portal colors and use complete portal blades

Accessibility Requirements for Images on Docs:
- Avoid white space on edges of screen shots.
- If you crop a screen shot in a way that leaves white background at the edges, add a single pixel gray border around the image. If using Paint, use the lighter gray in the default color pallet (0xC3C3C3).
- If using some other graphic app, the RGB color is R195, G195, 195.
- You can easily add a gray border around an image in Visio--to do this, select the image, select Line, and ensure the correct color is set, and then change the line weight to 1 1/2 pt. Screen shots should have a 1-pixel-wide gray border so that white areas of the screen shot do not blur into the web page.

Example of a gray border around whitespace:

![This is an example of a gray border around whitespace.](media/contribute-how-to-write-art/agent.png)  

Calling attention to particular elements in screenshots:
- Use a red outline border (RGB 239, 72,54)
- Use 3px width
- Text should be vertically centered in the outline
- Make the shape fill the layout of the screen shot for consistent design

Example of an MVC square used as a callout:

![This is an example of an MVC square used as a callout.](media/contribute-how-to-write-art/MVCscreenshot1.png)
