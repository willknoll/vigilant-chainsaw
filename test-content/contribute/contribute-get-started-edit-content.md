---
# required metadata
title: FastTrack Docs Contributor Guide - Edit content
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
# Edit content
This article describes how to make edits to content in your local repository (*repo*) to prepare for submitting content change (or "pull") requests.

## Prerequisites
1. [Set up your GitHub account](contribute-get-started-setup-github.md) to create a profile, join the organization, and establish two-factor authentication (2FA).
2. [Install content authoring tools](contribute-get-started-setup-tools.md) locally on your computer, including GitHub Desktop, Git command-line tools, and Visual Studio Code (*VS Code*).
3. [Set up your local repository](contribute-get-started-setup-local.md) to enable editing of your local content.
4. [Create a branch](contribute-get-started-create-branch.md).

## Edit content locally
If you are a contributor starting with no content to edit, you'll need to create an article and a Table of Contents (TOC) entry to reference the article.
* [How to create an article](#how-to-create-an-article)
* [How to edit a table of contents](#how-to-edit-a-table-of-contents)

Follow these steps to edit existing content:
1. In VS Code, edit and save the files you want to change.

> [!NOTE]
> Be sure to set the **ft.audience** metadata tag for your intended audience. The acceptable values include **internal** and **partner**. You can set the tag for a single or muliple audiences. For example, *ft.audience: internal* or *ft.audience: internal, partner*. **It's important to keep security in mind when setting this value.** For example, any content designated as "Microsoft-CONFIDENTIAL" should only be published for internal audiences.

2. To avoid file save conflicts as a result of changes made by other contributors, make sure your local repo is kept up to date with the upstream staging repo.  
    1. In GitHub Desktop, verify the following settings:  
        1. **Current repository** = your fork.
        2. **Current branch** = the branch you created.  
    2. Select **Fetch origin**.
    3. Select **Branch** > **Merge into current branch** > **upstream/staging** > select the **blue *Merge* button**: Merge upsream/staging into [the branch you created]

        The blue *Merge* button is disabled if your branch is already up to date with upstream/staging. In this case, it is safe to move to the next step.

> [!IMPORTANT] 
> Perform Step 2 **often** in order to keep your branch up to date with upstream changes and to avoid change conflicts with other contributors.

3. To verify your content will appear on the website the way you intend, we **strongly recommend** viewing your changes locally before submitting them for approval. See the article [View content changes locally](contribute-how-to-view-content-changes-locally.md) for more information.

## How to create an article
Follow these steps to create an article:
1. In VS Code, create the markdown (.MD) file in your local repo.
> [!NOTE]
> To create an .MD file, either select **File > New File** or select a current file and then copy/paste it into the folder where you want the file to reside. Use the article style and naming convension ("kabob-case") used in other files. For example, *contribute-get-started-edit-content.md*.

2. Add an entry for the new file in the Table of Contents. See [Edit a table of contents](#edit-a-table-of-contents)

## How to edit a table of contents
A table of contents (TOC) is configured for each folder inside that folder's toc.yml file. If a toc.yml file doesn't exist inside a given folder, the TOC for the parent folder is used.

You can find the toc.yml file in VS Code in the **Explorer** column along with the files you edit and update. To make edits to a toc.yml file:
1. In VS Code, navigate to the folder and toc.yml file you want to edit.
2. To add a TOC entry, use the following format:  

        - name: Title of your page
            href: page-filename.md

3. To add an expandable-collapsible section in the TOC hierarchy, use the following format:  

        - name: Title of your section
            items:
            - name: Title of the first page in your section
                href: first-page-filename.md
            - name: Title of the second page in your section
                href: second-page-filename.md
            (etc.)
4. (Optional) If you want to display an article when the user clicks on the section in the TOC, add a href pointing to the article. For example (see the second line below), 

        - name: Title of your section
            href: title-of-your-section.md
            items:
            - name: Title of the first page in your section
                href: first-page-filename.md
            - name: Title of the second page in your section
                href: second-page-filename.md
            (etc.)

## Additional information
For additional information on how to use the Markdown content editing format, see the Reference article [How to use Markdown](contribute-how-to-write-use-markdown.md).

## Next steps
View your content changes on your local computer before publishing online. See [View content changes locally](contribute-how-to-view-content-changes-locally.md)
