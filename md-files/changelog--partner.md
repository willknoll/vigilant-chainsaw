---
ft.audience: partner
---

# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/).

This changelog covers multiple projects with each change tagged with a correspoding project code.

|Project|Description|Code
|---|---|---|
|fasttrack-docs|The documentation content|DOCS|
|partner-docs-app|Website used to serve content|APP|
|fasttrack-docs-template|Template files controlling site layout|TMPL|
|fasttrack-uhf-updater|Updates the header and footer|UHF|
|fasttrack-audience-parser|Ensured content is filtered by audience|AP|

> ## March 2020
>
> ### Added
>
> - Added Synonym mapping for search results. (APP)
> - Covid Response - Added new submission form for Covid Response RFA Requests. (App)
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
>
> ### Changed
>
> - Updated text displayed on 404 page. (APP)
> - Enabled Web Application Firewall prevention mode. (APP)
> - SDL tools will now fail on error when running build pipeline. (APP)
>
> ## January 2020
>
> ### Added
>
> - Added Content-Language header "en" for all site responses. (APP)
> - Added a ContentRatingType field for all Content Rating Azure table entries. (APP)
> - Enabled population of META tag data for all content markdown file metadata fields. (TMPL)
>
> ### Fixed
>
> - Removed reference to CSS file which was producing 404 errors. (TMPL)
>
> ### Changed
>
> - Updated backend infrastructure to allow development and testing of site Search features. (APP) (TMPL) (UHF)
> - Updated text on Partner sign in page [Issue #740](https://github.com/microsoft/fasttrack-docs/issues/740). (APP)

> ## December 2019
>
> ### Added
>
> - Now including a calculated Cache Control header for Content Rating feature (APP)
> - Added PDF Download link to to all pages with a TOC (TMPL)
> - Added `CODEOWNERS` file for granular PR review control (DOCS)
>
> ### Fixed
>
> - Fixed Roslyn analyzer errors in build pipeline (APP)
> - Fixed pipeline to only execute content build and deploy when the Content Master build runs (DOCS)
> - Sign-in page wording updated [Issue #651](https://github.com/microsoft/fasttrack-docs/issues/651) (APP)
> - Fixed truncated right-nav on smaller displays [Issue #561](https://github.com/microsoft/fasttrack-docs/issues/561) (TMPL)
>
> ### Changed
>
> - Content is now auto-swapped into production following a successful daily build (DOCS)
> - Layout of Internal index page updated (DOCS)
> - Removed duplicate script references from Template files (TMPL)
> - Finalized PDF build (APP)
> - Disabled Breadcrumbs across the site (DOCS)

> ## November 2019
>
> ### Added
>
> - Now capturing TenantId as part of content ratings (APP)
> - Now installing wkhtmltopdf in build pipeline for PDF generation (APP)
>
> ### Fixed
>
> - Fixed various authentication flow issues (APP)
> - Fixed infinite loop ajax requests for toc.html files (APP)
> - Fixed CSS and JS issues on static login page [Issue #547](https://github.com/microsoft/fasttrack-docs/issues/547) (APP)
> - Fixed header retrieval logic for client IP when accessing development site (APP)
>
> ### Changed
>
> - Expanded logging for application debugging (APP)
> - Removed unnecessary exceptions from app startup pipeline - redirect to error controller instead (APP)
> - Cleanup of startup auth/comments/logging (APP)

> ## October 2019
>
> ### Added
>
> - New Content Rating feature (APP)
>
> ### Changed
>
> - Updated template to support new Content Rating feature (TEMPL)


> ## July 2019
>
> ### Added
>
> - Redirect to originating page/URL after login (APP)
>
> ### Changed
>
> - Updated to .NET Core 2.2 for added security and updated features (APP)
> - Persisted login credentials so that users do not have to login every hour (APP)

> ## June 2019
>
> ### Added
>
> - Added Robots.txt to prevent Web Crawlers from indexing the app and content (APP)
> - Implimented changes to arcitecture to support Azure Front Door (APP)
> - Added Web Application Firewall at the Front Door to provide centralized protection (APP)
>
> ### Changed
>
> - Updated SignOn page to match the rest of the Docs site (APP/TMPL)
> - Merged application code for Internal and Partner apps to use a single codebase (APP)
> - Updated Security Headers (APP)

> ## May 2019
>
> ### Added
>
> - Added additional server logging to track app functionality and usage (APP)
>
> ### Changed
>
> - Modified template to more closely match TOC fonts in docs.microsoft.com styles - [Issue #225](https://github.com/microsoft/fasttrack-docs/issues/231) (APP)

> ## April 2019
>
> ### Added
>
> - Added Automated Nightly Merge from staging to master/prod (3am PT) (APP)
> - Added additional server logging to track app functionality and usage (APP)
>
> ### Fixed
>
> - Fixed Web Security Headers to whitelist UHF locations for scripts and styles - [Issue #225](https://github.com/Microsoft/fasttrack-docs/issues/225) (APP)
>
> ### Changed
>
> - Modified template to more closely match docs.microsoft.com styles (APP)
> - Modified Web Security Headers to reduce specificity with site names (APP)

> ## March 2019
>
> ### Added
>
> - Added Web.config to include Security Headers (APP)
> - Added Key Vault Storage and moved Azure Secrets (APP)
> - Added nightly-merge.bat to handle merging of new docs content at 3am PST (DOCS)
> - Added fasttrack-uhf-updater to modify the fasttrack docs template with the Microsoft UHF (UHF)
>
> ### Fixed
>
> - Fixed IE11 bug that was locking up the browser which also improved performance on all browsers, [issue #197](https://github.com/Microsoft/fasttrack-docs/issues/197) (TMPL)
>
> ### Changed
>
> - Modified UHF Updater for inclusion of Application Insights (UHF)
> - Modified template for inclusion of UHF (TMPL)
> - Modified template for inclusion of Application Insights (TMPL)
> - Modified template to more closely match Microsoft Docs site (TMPL)
> - Modified Local template build Powershell to include Application Insights. This feature is available but does not track local builds as the Instrumentation Key is not set locally. _tools/ft-templateupdate-local.ps1 (DOCS)
