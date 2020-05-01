---
ft.audience: internal
---

# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/).

This changelog covers multiple projects with each change tagged with a correspoding project code.

|Project|Description|Code
|---|---|---|
|fasttrack-docs|The documentation content|DOCS|
|fasttrack-docs-app|Website used to serve content|APP|
|fasttrack-docs-template|Template files controlling site layout|TMPL|
|fasttrack-uhf-updater|Updates the header and footer|UHF|
|fasttrack-audience-parser|Ensured content is filtered by audience|AP|

[Some safelink](https://nam06.safelinks.protection.outlook.com/?url=https%3A%2F%2Fmicrosoft.sharepoint.com%2Fteams%2FFastTrackCollaborationPM%2FShared%2520Documents%2FFastTrack%2520Content%2520Management&data=02%7C01%7Cv-wiknol%40microsoft.com%7Cd01700b79e134185b88408d7ebc94455%7C72f988bf86f141af91ab2d7cd011db47%7C1%7C0%7C637237122579493042&sdata=EOKcpGSx9FP27zwtXxrViQt40iZoXS4v%2BNMs85yj9YY%3D&reserved=0)

[Some non safelink](https://mysite.com)

<br />

---

<br>

<hr>

> ## March 2020
>
> ### Added
>
> - Added Synonym mapping for search results. (APP)
> - Created search index of BCM content for Dev use. (BCM)
> - Added Privacy link to BCM site. (BCM)
>
> ### Fixed
>
> - Security Issue - Disabled unused HTTP Request Verbs in BCM. (BCM)
> - Resolved pipeline issues with production search content. (APP)
>
> ### Changed
>
> - Updated workload list in BCM. (BCM)
> - Updated text in left nav filter box. (TMPL)
> - Enhanced logging scenarios around unauthorized access requests. (APP)
>
> ## February 2020
>
> ### Added
>
> - Added full text searching for markdown content. (APP) (DOCS) (TMPL) (UHF)
> - Added new step to build process for uploading search content to Azure blob storage. (APP)
> - New content and BCM environment for security testing. (APP)
> - Created ARM templates and PowerShell scripts for deploying search and other Azure resources. (APP)
> - Require Authorization to access Content Rating and Search endpoints. (APP)
> - Now specifying charset for supported MIME types. (APP)
>
> ### Fixed
>
> - Header and footer display issues on 404 page. (APP)
> - Fixed URL endpoint for *FastTrack* top navigation item. (UHF)
>
> ### Changed
>
> - Updated text displayed on 404 page. (APP)
> - Enabled Web Application Firewall prevention mode. (APP)
> - SDL tools will now fail on error when running build pipeline. (APP)
