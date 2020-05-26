---
# required metadata  
title: FastTrack Partner Playbook - Conduct Technical Assessment  
description: FastTrack Partner Playbook - Conduct Technical Assessment  
author: Ryan Meehan
ms.author: v-cekenn
manager: pagrim
ms.date: 10/03/2019  
ms.topic: partner-playbook  
ms.prod: non-product-specific  
ms.custom: partner-playbook  
ft.audience: partner  
ft.owner: pagrim
---

# 执行技术评估

阶段: **评估**
行动: **客户运行状况/RFA/目标设定**

## 概述

“执行技术评估”流程让 FastTrack 团队能够了解客户的基础结构和业务需求并确定平稳过渡到云所需的技术。该评估包括客户的本地环境、用户安全模型、远程访问限制和可能拖慢部署流程的任何基础结构限制。

注意: 迁移利益仅适用于拥有超 500 项指定服务权利的客户（Exchange、SharePoint、OneDrive 为 *目的地*）。

## 目标

  - 确定基础结构设计和容量： 
      - 防火墙布局和容量
      - 与 www 的互联网连接或其他站点的连接方式
      - 软件部署方法和当前版本 
      - 用户帐户创建过程
  - 业务需求：
      - 客户想要使用的产品
      - 软件许可证即将到期
      - 要购买的基础结构
      - 合并或剥离
      - 实施日程安排
  - 安全限制： 
      - RAS 策略
      - 用户策略（与迁移团队访问需求有关）
      - 防火墙策略限制
  - 实施所有者： 
      - 确定本地服务的联系人
      - 负责推动实施的联系人

## 方法

### 提供网络连接原则指南

主要角色: **FastTrack 工程师**
行动: **客户运行状况/RFA/目标设定**
适用于: **核心入门培训**

“执行网络评估”流程让 FastTrack 团队能够向客户提供指导，以帮助他们了解 Microsoft 有关连接最佳实践的建议，另外还了解客户的现有基础结构与该指南的一致程度。

提供有关 Office 365/Microsoft 365 网络连接原则的指南

  - 区分关键的 SaaS 流量，区别对待和信任各种类别的网络流量
  - 在本地外发连接，确保以极小的延迟到达 Microsoft 的基础结构
  - 优化抵达 Microsoft 网络边缘的路由长度
  - 评估外部网络安全设备/流程的旁路

确保客户了解 Microsoft 的长期发展方向，使客户与 Microsoft 之间的连接战略达成一致

确定从客户站点到 Microsoft 全球网络的出发路径

识别网络基础结构中可能导致最终用户体验出现问题的潜在错误配置

确定是否在使用代理（特别是 SSL 中断和检查）处理关键的工作负载流量

对于所有新客户（接洽早期）和因增加工作负载而再接洽的客户，需要提供网络连接指南。

在接洽早期提供网络连接指南是为了确保客户配置正确，能够使用任何 Office 365/Microsoft 365 服务并且性能和可用性达到可接受的水平。

FastTrack 工程师将利用此处的幻灯片进行网络连接原则对话:  

[Office 365 网络指南](https://aka.ms/O365NetworkGuidanceLocalized)

如果因基础结构复杂或要求特别而需要专业协助来为客户提供指导，可通过正常的 FastTrack 资源请求流程来申请网络 SME。

#### FTOP 任务

| 任务 ID| 任务名称| (M) 强制性/(O) 可选|   FastTrack 角色| 服务|
| -------| ---------------------------------------------------| :----------------------: | :----------------: | ---------------|
| 4071| 提供网络连接原则指南|            M| FastTrack 工程师| 核心入门培训|

### 运行网络入门培训工具

主要角色: **FastTrack 工程师**
行动: **客户运行状况/RFA/目标设定**
适用于: **核心入门培训**

对于所有新客户（接洽早期）和因增加工作负载而再接洽的客户，需要提供网络连接指南。

在接洽早期提供网络连接指南是为了确保客户配置正确，能够使用任何 Office 365/Microsoft 365 服务并且性能和可用性达到可接受的水平。

FE 应利用此处的幻灯片进行网络连接原则对话: [Office 365 网络指南](https://aka.ms/O365NetworkGuidanceLocalized)

如果因基础结构复杂或要求特别而需要专业协助来为客户提供指导，可通过正常的 FastTrack 资源请求流程来申请网络 SME。

在提供网络连接原则指南后应使用网络入门培训工具。该工具将有助于评估客户的网络是否符合我们的指南，并将为客户提供具体的改进建议。

该工具应从每个客户站点运行（或至少一个代表集，基于对客户整体网络体系结构的理解）。​客户可以在以下位置访问该工具：[http://aka.ms/netonboard](http://aka.ms/netonboard)。​

在帮助客户运行该工具的过程中，FastTrack 工程师必须避免存储该工具的输出，因为它包含客户内部网络配置的详细信息。为帮助客户利用该工具提供的建议，客户可以在浏览器中将输出保存为 PDF 并使用安全方法共享，也可以通过屏幕共享会话分享产出内容，以便与 FastTrack 工程师讨论。

如果因基础结构复杂或要求特别而需要专业协助来帮客户运行网络入门培训工具，可通过正常的 FastTrack 资源请求流程来申请网络 SME。
  
#### FTOP 任务

| 任务 ID| 任务名称| (M) 强制性/(O) 可选|   FastTrack 角色| 服务|
| -------| ---------------------------| :----------------------: | :----------------: | ---------------|
| 4072| 运行网络入门培训工具|            M| FastTrack 工程师| 核心入门培训|

### 创建改进清单

主要角色: **FastTrack 工程师**
行动: **客户运行状况/RFA/目标设定**
适用于: **所有服务**

创建改进清单： 

  - 下载 [**改进清单**](https://aka.ms/PartnerRemediationChecklist) 并删除客户不会部署的任何服务

在评估阶段，如果发现项目风险，例如阻碍因素、范围外事项、客户任务约束等，那么正好可以讨论是否引入 FastTrack 就绪合作伙伴来补充 FastTrack 权益。如果客户想使用合作伙伴，请执行 Quickleads 任务 983 向合作伙伴发送引荐。你可以在[此处](https://ftdocs-bcm.azureedge.net/public/referrals-training-v1.pptx) 找到 Quickleads 上的内容，要启用该请求，请联系你的 FastTrack 合作伙伴经理 (FPM)。
  
示例：

- 身份 - 清理或依赖关系
- 网络
- 超出 FastTrack 权益范围
- 需要亲手输入/配置复杂

#### FTOP 任务

| 任务 ID| 任务名称| (M) 强制性/(O) 可选|   FastTrack 角色| 服务|
| -------| -----------------------------------------------------------| :----------------------: | :----------------: | ------------|
| 3070| 创建改进清单|            M| FastTrack 工程师| 所有服务|
| 1049| 与客户一起查看改进清单中的行动项目|            M| FastTrack 工程师| 所有服务|

### 与客户一起创建 EMS 改进清单以确定行动项目

主要角色: **SME**
行动: **客户运行状况/RFA/目标设定**
适用于: **AADP/Intune**

创建 EMS 改进清单：

  - 下载 [**EMS 改进清单**](https://aka.ms/frp-EMS-Remediation-Checklist) 并删除客户不会利用的任何任务

在评估阶段，如果发现项目风险，例如阻碍因素、范围外事项、客户任务约束等，那么正好可以讨论是否引入 FastTrack 就绪合作伙伴来补充 FastTrack 权益。如果客户想使用合作伙伴，请执行 Quickleads 任务 983 向合作伙伴发送引荐。你可以在[**此处**](https://aka.ms/AA5ctuy) 找到 Quickleads 上的内容，要启用该请求，可发送电子邮件给 FPM。

示例:  

  - 身份 - 清理或依赖关系
  - 网络
  - 超出 FastTrack 权益范围
  - 需要亲手输入/配置复杂

#### FTOP 任务

| 任务 ID| 任务名称| (M) 强制性/(O) 可选| FastTrack 角色| 服务|
| -------| ---------------------------------------------------------------| :----------------------: | :------------: | -------------|
| 4075| 与客户一起创建 EMS 改进清单以确定行动项目|            M|      SME| AADP/Intune|

### 迁移评估

主要角色: **FastTrack 经理**
行动: **客户运行状况/RFA/目标设定**
适用于: **Exchange/OneDrive for Business/SharePoint**

如果客户打算使用迁移利益，需要执行其他活动。迁移调查问卷（任务 2050 向客户提供迁移调查问卷）应该提供给客户，并且应提交迁移高速经理 (MVM) 请求（任务 2278 请求分配 MVM）。

#### FTOP 任务

| 任务 ID| 任务名称| (M) 强制性/(O) 可选| FastTrack 角色| 服务|
|---------|-----------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------|----------------------------|-----------------------------------------------|
| 2050| 向客户提供迁移调查问卷| O| FastTrack 经理| Exchange/OneDrive for Business/SharePoint|
| 2278| 请求分配 MVM| O| FastTrack 经理| Exchange/OneDrive for Business/SharePoint|
| [4099](https://ftdocs-bcm.azureedge.net/public/partner-customer-awareness-security-defaults-impact-mig-v1.docx)| 迁移前确认租户是否已启用 AAD 安全默认值[查看文档](https://go.microsoft.com/fwlink/?linkid=2114497&clcid=0x409)| M| FastTrack 经理| Exchange/OneDrive for Business/SharePoint|
| 4100| 申请 AADP P2 试用版迁移许可证 – FRP 与 MVM 合作| O| FastTrack 经理| Exchange/OneDrive for Business/SharePoint|
| 3217| 申请执行迁移所需的临时企业许可证| O| 迁移高速经理| Exchange/OneDrive for Business/SharePoint|
| 3312| 分享和讨论 FT 迁移远程连接| O| 迁移高速经理| Exchange/OneDrive for Business/SharePoint|
| 3308| Exchange - Notes 迁移: 请求 BT 资源以求完整共存并分享部署清单（可选）| O| 迁移高速经理| Exchange|
| 1034| Exchange - 更新和上传源系统迁移调查问卷| M| FastTrack 工程师| Exchange|

### 执行评估

主要角色: **FastTrack 工程师**
行动: **客户运行状况/RFA/目标设定**
适用于: **所有服务**

  - 根据需要评估服务的任务。
  - 一些服务任务可能：
      - 链接到公共向导。
      - 链接到其他指南文件。
      - 使用迁移权益时需要执行。
      - 仅指定给企业客户；向 FastTrack 工程师 (FE) 同事或主题专家 (SME) 咨询关于服务任务的问题。

#### FTOP 任务

| 任务 ID| 任务名称| (M) 强制性/(O) 可选|   FastTrack 角色| 服务|
| -------| -----------------------------------------------------------------------------------| :----------------------: | :----------------: | ------------------|
| 3268| [Teams - 评估 Microsoft Teams](https://aka.ms/FRPTeamsDiscoveryDiscussion)|            M| FastTrack 工程师| Teams|
| 3226| EDU: 评估 Classroom 和 SDS 同步|            O| FastTrack 工程师| Classroom/SDS|
| 2121| Exchange - 如适用，向客户提供 GroupWise 客户端发现实用工具|            O| FastTrack 工程师| Exchange|
| 2393| SfB - 查看多林 Skype for Business 高级功能/Lync 要求|            O| FastTrack 工程师| Skype for Business |
| 2455| SfB - 运行 Office 365 网络分析工具|            O| FastTrack 工程师| Skype for Business |
| 2456| SfB - 运行远程连接分析器|            O| FastTrack 工程师| Skype for Business |
| 2457| SfB - 运行 Lync Bandwidth Calculator 2.50|            O| FastTrack 工程师| Skype for Business |

### 技术评估完成

主要角色: **FastTrack 经理**
行动: **客户运行状况/RFA/目标设定**
适用于: **所有服务**

完成范围内的所有技术评估后，将“任务 1699 技术评估完成”标记为完成。

#### FTOP 任务

| 任务 ID| 任务名称| (M) 强制性/(O) 可选|  FastTrack 角色| 服务|
| -------| ----------------------------------------------------------------------------------------------------| :----------------------: | :---------------: | ------------|
| 1699| 技术评估完成: 部署计划（包括改进清单）交付给客户|            M| FastTrack 经理| 所有服务|

### 进行云关联评估

主要角色: **FastTrack 经理**
行动: **客户运行状况/RFA/目标设定**
适用于: **Intune**

进行云关联评估

#### FTOP 任务

| 任务 ID| 任务名称| (M) 强制性/(O) 可选|  FastTrack 角色| 服务|
| -------| -------------------------------------------------| :----------------------: | :---------------: | --------|
| 4039| Intune - (向导) 进行云关联评估|            M| FastTrack 经理| Intune|

## 重要投入

  - 客户了解 FastTrack 中心 (FTC) 提供的服务。
  - 客户有兴趣启用一项或多项服务。 
  - 客户确定与 FastTrack 合作的资源。

## 重要成果

  - 全面了解客户的基础结构：
      -  要迁移的源环境
      -  可能减慢或阻碍部署的约束
  - 与客户一起创建并审查了改进清单
  - 确定特定于服务的客户联系人

## 后续步骤

  - 根据已确定的待引进工作负载，继续 [举办服务研讨会](assess-conduct-services-workshops-partner-sc.md)。
  - 如果不需要研讨会，请继续 [弥补技术缺口​](remediate-address-technical-gaps-partner-sc.md)。

## 刷新摘要

|日期|变更人|变更内容|
|---------|---------------|----------------------------|
|04/30/2020| Celia Kennedy|  常规维护|
|10/03/2019| Celia Kennedy| 更新了合作伙伴行动手册|

[主页](http://partner-docs.microsoft.com)
