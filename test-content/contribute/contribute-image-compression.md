---
title: FastTrack Docs Contributor Guide - Optimizing Image Files
description: Compressing image files
authors: Jeff Wilkes
ms.author: jwilkes
manager: jkenerso
ms.date: 12/18/2019
ms.topic: contributor-guide
ms.prod: non-product-specific
ms.custom: internal-contributor-guide
ft.audience: internal
ft.owner: jwilkes
---
# Optimizing Images

Images used on our sites should be optimized to save space and reduce client download times. This is especially true for files smaller than 1MB, as they are stored in GitHub rather than the BCM system.

To maintain consistency and ensure lossless compression, we will use a web image optimizer called [pingo](https://css-ig.net/pingo). Pingo is free and outperforms most other popular image optimization tools.
 
It is recommended that image optimization be run against a copy of your original files— the operation cannot be undone

## One-time Setup

[Download](https://css-ig.net/bin/pingo-win64.zip) the pingo commandline executable (zip file) and extract to your desired location, e.g. c:\pingo

To easily run pingo from any directory, add the executable location to your system Path environment variable.

1. Open the *Run* command window by pressing *Windows-Key + R*.
2. Type `sysdm.cpl` and select *OK* to open *System Properties*.
3. Select the *Advanced* tab and then select *Environment Variables*.
4. In the *System variables* list, double-click *Path*.
5. Select *New* and type the full path to where you extracted the pingo executable.
6. Select *OK* to save the change, and then *OK* again to close the environment variables window. 

## Simple Optimization Flow

Please see the pingo documentation for a full list of [usage examples](https://css-ig.net/articles/pingo-examples).

1. Copy the files you wish to optimize to a temporary folder, e.g. c:\optimize
2. Open a Windows command prompt.
    - Press *Windows-Key + R* to open the *Run* command window.
    - Type `cmd` and select *OK* to open a command prompt window.
    - Change to the directory where your image files exist, e.g. `cd c:\optimize` 
3. Run the following pingo command to optimize your images for web usage:

    `c:\optimize> pingo.exe -s5 *.png`

4. Copy the optimized files to their final usage location.


## What is Pingo Doing?

The pingo command we utilize performs a lossless image transformation which decreases the overall file size of an image without losing any visual quality. Simply put, pingo looks for information in the image file which is unnecessary or otherwise duplicated, and removes it.

We are using the simplest image transformation at a middle-of-the-road compression level (-s5). This strikes a good balance between image size reduction and speed of processing. Valid compression level values range from 0 to 9, however, for most images, increasing beyond 5 does not show a drastic difference in final file size and processing takes significantly longer. Using the level 5 compression, image size is reduced by 30% on average, but can vary greatly from file to file. Running larger images through pingo may allow them to be hosted in Git rather than BCM if the optimized result falls below the 1MB threshold.
