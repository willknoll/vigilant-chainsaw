---
# required metadata
title: FastTrack Docs Contributor Guide - How to export articles with ft.audience values
description: This article describes how to export article file names with their ft.audience values to a CSV file.
author: Jayme Bowers
ms.author: jaymeb
manager: jwilkes
ms.date: 04/03/2019
ms.topic: contributor-guide
ms.prod: non-product-specific
ms.custom: internal-contributor-guide
ft.audience: internal
ft.owner: jaymeb
---
# Export ft.audience values
This article describes how to export article file names with their ft.audience values to a CSV file.

## Prerequisites
A local clone of [Microsoft/fasttrack-docs](https://github.com/Microsoft/fasttrack-docs)

## Export using Powershell
Follow these steps to export using Powershell:
1. Open Windows Powershell desktop app.
2. Change directories to your root repository directory (the folder in your file system above fasttrack-docs). For example, cd c:\users\alias\github-repos
3. Run the following powershell command:
```powershell
Get-ChildItem -Path .\fasttrack-docs\*.md -Recurse | Select-String -Pattern 'ft.audience' | Export-Csv -Path .\ftaudience.csv -NoTypeInformation
```

This command creates a CSV file named **ftaudience.csv** in the root repository directory. Within the CSV file, you can filter the **Line** column on ft.audience: internal | ft.audience: partner | ft.audience: internal, partner.