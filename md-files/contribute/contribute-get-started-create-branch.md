---
title: FastTrack Docs Contributor Guide - Create a branch
description: This article provides guidance to create a branch in a local repository.
author: Jayme Bowers
ms.author: jaymeb
manager: jwilkes
ms.date: 8/20/2019
ms.prod: non-product-specific
ms.topic: contributor-guide
ms.custom: internal-contributor-guide
ft.audience: internal
ft.owner: jaymeb
---

# Create a branch
Use branches to compartmentalize work on content updates. Branches are especially useful when you are managing more than one body of work. You can create a branch for each body of work and avoid having to finsh all works before you submit your changes. 

To create a new branch, do the following:

1. In the **Current branch** drop-down menu, select **New branch**.
2. Name the branch using the same format as the following example. We suggest using your GitHub user name and specific work deliverable. For example, *v-rberg-Contributor-Guide*.
3. Select **Create branch**.
4. Select **Publish branch**.
5. Open VS Code.
6. Select **File > Open Folder**.
7. On your computer, navigate to your local repo path and select **Select Folder**. For example, **C:\Users\v-rberg.REDMOND\Documents\GitHub\fasttrack-docs**.

### Optional Command-line Procedure
The procedure outlined in this section can be used as an **alternative** to using the graphical user interface (GUI) tools, such as the GitHub Desktop app. You do **not** have to use this procedure if you've already peformed the steps using the desktop app.

Follow these steps to **create** a branch:
1. Create a new branch from ```upstream/staging``` (substitute your branch name for *newbranch*):
    ```git
    git checkout -b newbranch upstream/staging
    ```
2. Publish the branch in your forked repo online:
    ```git
    git push origin
    ```

Follow these steps to **delete** a branch:
1. Switch to another branch. For example, the ```staging``` branch (you can't delete the branch that's checked out).
    ```git
    git checkout staging
    ```
2. Delete the branch in the local repo (substitute your branch name for *newbranch*):
    ```git
    git branch -d newbranch
    ```
3. Delete the branch in your forked repo:
    ```git
    git push origin --delete newbranch
    ```

## Next steps
To learn how to edit content in your local repository, see [Edit content](contribute-get-started-edit-content.md).
