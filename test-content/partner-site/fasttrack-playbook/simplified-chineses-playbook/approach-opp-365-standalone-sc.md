---
# required metadata  
title: FastTrack Partner Playbook - Office 365 ProPlus Standalone Deployment
description: FastTrack Partner Playbook - Office 365 ProPlus Standalone Deployment 
ms.author: v-cekenn
manager: pagrim
ms.date: 10/01/2019  
ms.topic: partner-playbook  
ms.prod: non-product-specific  
ms.custom: partner-playbook  
ft.audience: partner
ft.owner: pagrim
---

# Office 365 专业增强版独立部署

## 概述

2020 财年 Office 365 专业增强版 MAU 的主要推动力将会是现代化改造行动，其中包括 Windows 7/8.1 到 Windows 10 的升级，以及使用 System Center 部署 Office 365 专业增强版。

本指南是为 FastTrack 工程师设计的，他们在 FastTrack 经理和 OPP SME 的支持下引导客户在不升级 Windows 的前提下部署 Office 365 专业增强版。

**在某些情况下，如果相关主题已完全解决/改进，可跳过其中的步骤。**

## 目标

下面列出了本行动手册的目标：

  - **采取与客户的 Office 365 专业增强版部署状态相符的步骤。** 在某些情况下，如果相关主题已完全解决/改进，可跳过其中的步骤。
    建议安排试点，以防止未经测试的部署导致的支持案例。

  - **确保客户在组织中部署率达到 70% 以上并使用最新的云连接 Office 客户端应用程序** 至关重要，因为我们要继续支持客户，帮助他们准备好面对 Office 2010 支持终止并走完他们的数字化转型之旅。

  - 随着我们通过 Microsoft 365 将客户迁移到云中，Office 365 专业增强版对于 Microsoft 的竞争力具有战略性的重要意义。

## Office 365 专业增强版工作流

[![office-proplus-complete-processv3](media/office-proplus-complete-processv3.PNG)]

## 行动手册流程

- [举办服务研讨会](assess-conduct-services-workshops-partner.md)
- [开展应用和变更管理客户对话](assess-conduct-adoption-and-change-management-conversation-partner.md)
- [执行技术评估](assess-conduct-technical-assessment-partner.md)
- [启用服务](enable-enable-services-partner.md)

## 部署

主要角色: **FastTrack 工程师**
适用于: **Office 365 专业增强版（不升级 Windows 10）**

无论何时，只要你在接洽过程中遭遇延误、阻碍或你需要额外的支持才能执行此行动手册的要求，请使用 [FastTrack 资源请求工具](https://aka.ms/FRPHubSMERequestProcess) 申请一位 OPP SME。
这个专门的 OPP 主题专家团队可支持大规模行动，但任何时候都不能取代 FastTrack 经理、工程师或架构师的角色。

### 1. Office 365 专业增强版技术评估和规划

此评估研讨会将指导客户了解和规划 Office 365 专业增强版部署。研讨会期间将通知 Office 365 专业增强版部署的重要决策点。研讨会上将围绕客户讨论和确定决策点。请使用 [评估研讨会幻灯片](https://fasttrack-docs.microsoft.com/collateral/M365-O365-O365ProPlus.html#assessment-workshop)。研讨会应邀请负责 Office 365 专业增强版部署的 IT 团队。客户可转到 [Office 部署指南](https://docs.microsoft.com/DeployOffice/deployment-guide-for-office-365-proplus)，并使用一致的结构进一步获取支持资源。

### 2. 应用和变更管理对话

> FastTrack 经理应根据需要使用 ACM 指南 > 确保客户拥有相关的材料，以便为部署 Office 365 专业增强版的最终用户提供信息。使用 OPP BVD 或异议处理程序，解决有关 Office 365 专业增强版相对于以前版本的优势的任何误解。如有需要，可在部署后期进行这一讨论，以便在客户停滞不前时促使其再次行动起来。

### 3. Office Readiness Toolkit 评估
 
### 4. 通过 SCCM 或独立提供的 ORT 应该由客户运行，以评估与 64 位 Office 365 专业增强版不兼容的任何定制/第三方宏指令或插件。FastTrack 工程师应该检查这些结果，以确定可能受到影响的业务关键流程。根据需要咨询 SME，以确保 ORT 工具运行完毕，或帮助确定额外的改进方案。

### 5. 创建改进清单

使用改进调查问卷和清单为客户提供任何/所有 FTC 支持服务的部署指南。对于政府社区云 (GCC) High/美国国防部 (DOD) 客户，应使用 GCC High/DOD 版本。为确保你拥有最新内容，请每次下载新版本。要生成最终清单，请先填写相应服务的调查问卷（选项卡），最终清单中将隐藏范围外的服务指南。为了跟踪使用情况，请通过电子邮件将一份完整的 XLS 发送给: [d4cf4a2d.microsoft.com@amer.teams.ms](mailto:d4cf4a2d.microsoft.com@amer.teams.ms)

### 6. 确认客户评论并解决改进清单中的所有问题

有关更多详细信息，请参阅 [改进](phase-remediate.md)

### 7. 部署 Office 365 专业增强版

在部署阶段，请使用评估结果指导客户构建已确定的包并做好交付准备。

指导客户使用 Office 配置工具 ([https://config.office.com](https://config.office.com/)) 或通过 Office 365 客户端选项（如果客户将使用 Configuration Manager 部署包）构建包配置文件。配置设置将来自评估活动中做出的决策，包括更新渠道、语言等。

构建包后，FastTrack 将指导客户开始向目标用户组部署包。客户负责在自己选择的部署工具中交付包。FastTrack 可提供指导，协助完成这项活动。

FastTrack 将继续在跟进会议中与客户一起跟踪部署和使用进度，以帮助确保客户继续部署工作。

不建议使用部署向导促进此活动。

## 加速

主要角色: **FastTrack 工程师**
次要角色: **FastTrack 经理、SME、GM FTA、OPP 突击队员**
适用于: **Office 365 专业增强版（不升级 Windows 10）**
 
**加速：**客户目前正在部署或已暂停部署，需要 FastTrack 协助才能再继续部署。他们可能有一个部署计划，但是出了问题，或者他们改变了优先顺序。
 
FastTrack 将继续在跟进会议中与客户一起跟踪部署和使用进度，以帮助确保客户继续部署工作。客户 MAU 达到 70%，才能视为“健康”或完全部署。

\*任何客户在 3 个月内增长率掉到 3% 以下（并低于 70%），都会触发 OPP SME 的跟进行动，以确保增长加速。此时，FM、FE 和 SME 应讨论客户的状态，找到让他们回到正轨的方法。

1. 确定 MAU 暂停的原因并遵循相应的行动计划

  - 技术障碍
    
    1. 联系 OPP SME 获得帮助（如果尚未联系）
    
    2. 根据已知的解决方案和现代化改造 SME 社区内容对客户的障碍进行分类
    
    3. 与客户合作消除障碍
        
        -  根据需要建立 FTC 见解
        
        -  联系应用保证团队解决插件或性能问题
    
    4. 如果障碍无法消除，将其记录在接洽管理笔记中，并将 L1 更新为“受阻”

  - 应用/变更管理障碍
    
    1. 组织小型 ACM 研讨会，帮助确定具体障碍并予以解决

  - 客户资源障碍
    
    1. 如果需要更深入的 ACM，参考 ACM 快速销售线索（参见相关的任务指南）

- 恢复客户原来的高优先级
- 
    1. 联系 GM FTA（如果有关联）

    2. 联系 ATS/ATU

2. 更新 Office 365 专业增强版 - OPP 加速器任务（如果执行了加速任务，以使客户走出先前的暂停状态）。该任务将用于跟踪为将 Office 365 专业增强版部署 MAU 保持在 70% 以上而持续付出的努力。

#### FTOP 任务

| 任务 ID| 任务描述| (M) 强制性 (O) 可选| FastTrack 角色|
| ----------------------------------------------| --------------------------------------------------------------------------------| --------------------------| --------------|
| 3080| Office 365 专业增强版评估研讨会| M| FE|
| 3738| Office 365 专业增强版 - 提供推介幻灯片组| M| FM|
| 3070| 创建改进清单| M| FE|
| 3190| 确认客户评论并解决改进清单中的所有问题| M| FE|
| 1247| 部署 Office 365 专业增强版| M| FE|
| 3650| Office 专业增强版 – OPP 加速| O| FM|

## 重要投入

  - 客户有意向部署 Office 365 专业增强版

## 重要成果

  - Office 365 专业增强版部署完成

## 后续步骤

  - 继续支持客户，直到完全部署且 AU \> 70%。

## 收集数据

| 数据字段/通用名称| 此流程必填| 首次输入 FTOP|
| --------------------------------| -------------------------| -----------------------|
| L1 – 使用状态| 是| 是|
| L2 – 权益| 是| 是|
| 接洽场景| 是| 是|
| 接洽管理笔记 (FM)| 是| 是|
| 技术启用笔记 (FE)| 是| 是|
| 企业笔记 (FTA)| 否| 是|

> [!Note]
> *有关具体的许可资格详情，请参见 [FastTrack 服务描述](https://docs.microsoft.com/en-us/fasttrack/m365-eligible-services-and-plans)。

## 刷新摘要

|日期|变更人|变更内容|
|---------|---------------|----------------------------|
|04/30/2020| Celia Kennedy|  常规维护|
|03/25/2020| Celia Kennedy| 常规维护|
|10/01/2019| Celia Kennedy| 常规维护|

[主页](http://partner-docs.microsoft.com)
