---
# required metadata  
title: FastTrack Partner Playbook - Enable Services  
description: FastTrack Partner Playbook - Enable Services  
author: Celia Kennedy  
ms.author: v-cekenn
manager: pagrim
ms.date: 5/2/19
ms.topic: playbook
ms.prod: non-product-specific
ms.custom: partner-playbook
ft.audience: partner
ft.owner: pagrim
---

# 启用服务

阶段: **启用**

## 概述

“启用服务”流程可指导客户配置使用和迁移服务，并开始体验“启用服务“权益。

## 目标

  - 确定设置和同步已配置且处于活动状态。
  - 合格的工作负载已在租户中配置，并可使用。
  - 试点用户已迁移并在使用服务。

## 方法

### 请求迁移高速经理

主要角色: **FastTrack 经理**
适用于: **Exchange/SharePoint/OneDrive for Business**

如果尚未请求迁移高速经理 (MVM)，应遵循评估阶段中（任务 2278 请求 MVM）任务中记录的请求流程请求 MVM。

### 协助启用任务

主要角色: **FastTrack 经理**
行动: **客户运行状况/RFA/目标设定**
适用于: **所有服务**

酌情与客户进行同步会议，并协助完成启用任务。 

**质量投入** 

- 更新 FTOP 中的联系人
- 在技术启用笔记中列出客户名称和参与的角色

**质量产出** 

- （如果适用）更新工作负载的目标日期
- （如果适用）L1/L2 状态更改
- 在接洽启用或接洽管理笔记中记录任何目标日期更改和/或 L1/L2 状态更改
- （如果适用）在技术启用笔记中确认已审查和验证高速迁移调查问卷

#### FTOP 任务

| 任务 ID| 任务名称| (M) 强制性/(O) 可选|       FastTrack 角色| 服务|
| -------| -----------------------------------------------------------------------------------| :----------------------: | :------------------------: | ---------------------------------------------|
| 1126| 与客户 PM 和客户技术主管会面，以启用核心和服务|            M|     FastTrack 工程师| 所有服务|
| 1672| 在迁移协作站点上审查和验证迁移调查问卷 |            M| 迁移高速经理| Exchange/OneDrive for Business/SharePoint|

### 执行启用任务

主要角色: **FastTrack 工程师**
行动: **客户运行状况/RFA/目标设定**
适用于: **所有服务**

根据需要跟踪每个服务的启用任务。一些服务任务可能：

  - 链接到公共向导
  - 链接到其他指南文件
  - 必须执行才能使用迁移权益

**质量投入**

- 技术启用或环境笔记中记录以下内容（如果适用）：
    - 客户的身份决策
    - 确认客户已设置、配置和/或同步身份
    - 客户的网络决策
    - 客户配置了条件访问策略，其中“FTOP 服务”选项卡的“数据迁移”部分中“Microsoft 执行迁移值”为 TRUE
    - 客户的混合、本地移动性和本地联合要求决策与域已相应改进和配置
    - 客户使用 IE 完成了旧版网站的 Microsoft Edge 网站发现分析

**质量产出**

- 技术启用笔记中记录以下内容（如果适用）: 
    - 确认客户执行了适当的 FastTrack 向导 cmdlet（根据环境），以验证任何混合环境自定义域设定与配置
    - 使用了 ViewPoint 验证目录同步，成功完成了 ADFS 配置向导或客户可使用云 ID 访问服务
    - 客户完成了核心服务以及任何确认授权的 M365 服务的配置和验证活动
        - 使用状态 (L1) = 进行中
        - 原因 (L2) = 解决方案或用户应用
        - 使用了 Lynx 确认 RFA 客户已实现 100 个活动用户或 10% 的使用率（如果席位数 < 1,000）
    - 使用客户的试点迁移日程安排成功完成测试迁移并履行了迁移构建请求

#### FTOP 任务

| 任务 ID| 任务名称| (M) 强制性/(O) 可选|       FastTrack 角色| 服务|
| -------| --------------------------------------------------------------------------------------------------------| :----------------------: | :------------------------: | ------------------------------------------------------------------|
| 3992| MVM 对接客户|            O| 迁移高速经理| Exchange/OneDrive for Business/SharePoint|
| 2474| 验证迁移工具配置并执行测试迁移|            M| 迁移高速经理| Exchange/OneDrive for Business/SharePoint|
| 3126| OneDrive - 如果没有迁移，请安装 ODB 同步客户端。否则，在迁移后安装客户端|            O|     FastTrack 工程师| OneDrive for Business|
| 3147| OneDrive - {向导} 配置 OneDrive for Business|            M|     FastTrack 工程师| OneDrive for Business|
| 3125| SharePoint/OneDrive - 验证是否为用户分配了 SPO 或 ODB 许可证|            O|     FastTrack 工程师| SharePoint/OneDrive for Business|
| 1235| SharePoint - {向导} 配置 SharePoint Online|            M|     FastTrack 工程师| SharePoint|
| 3222| SharePoint - {向导} 配置 SharePoint Hybrid|            O|     FastTrack 工程师| SharePoint|
| 1158| Exchange - 配置 EXO|            M|     FastTrack 工程师| Exchange|
| 3223| EDU: 启用 Classroom 和 SDS|            O|     FastTrack 工程师| Classroom/SDS|
| 3306| 迁移基础结构构建/服务请求|            M| 迁移高速经理| Exchange/OneDrive for Business/SharePoint|
| 3677| Exchange - Group Wise 迁移: 配置 ODME|            O| 迁移高速经理| Exchange|
| 1941| Exchange - 应用地址策略并进行验证 新/原始 SMTP 地址列为代理地址|            O|     FastTrack 工程师| Exchange|
| 3687| Teams - 核心增强版协助|            M|            SME| Teams|
| 1159| Exchange - {向导} 在 EXO 中配置邮件流|            O|     FastTrack 工程师| Exchange|
| 1171| Exchange - {向导} 设置 IMAP 迁移|            O|     FastTrack 工程师| Exchange|
| 3311| Exchange - Notes 迁移: “自动导入工具”计划批次导入指南|            O| 迁移高速经理| Exchange|
| 3160| Exchange - {向导} Exchange 最小混合|            O|     FastTrack 工程师| Exchange|
| 3159| Exchange - {向导} Exchange 2016 混合|            O|     FastTrack 工程师| Exchange|
| 3158| Exchange - {向导} Exchange 2013 混合|            O|     FastTrack 工程师| Exchange|
| 3157| Exchange - {向导} Exchange 2010 混合|            O|     FastTrack 工程师| Exchange|
| 3156| Exchange - {向导} Exchange 分阶段迁移|            O|     FastTrack 工程师| Exchange|
| 3155| Exchange - {向导} Exchange 直接转换迁移|            O|     FastTrack 工程师| Exchange|
| 1240| Yammer - {向导} 配置 Yammer|            M|     FastTrack 工程师| Yammer|
| 3727| Teams - 举办通话质量仪表板研讨会|            M|            SME| Teams|
| 3725| Teams - 配置核心协作和会议 (VOIP)|            M|            SME| Teams|
| 3724| Teams - 配置高级语音服务 (PSTN)|            M|            SME| Teams|
| 3728| Teams - 技术性启用 Teams 服务|            M|     FastTrack 经理| Teams|
| 2218| 启用 Microsoft Intune|            M|     SME| Intune|
| 2415| AADP - {向导} 配置 AADP Core|            O|     FastTrack 工程师| AADP|
| 1641| 设置自定义域|            M|     FastTrack 工程师| 核心入门培训|
| 1141| {向导} 设置目录同步 (Azure AD Connect)|            O|     FastTrack 工程师| 核心入门培训|
| 1134| 创建云 ID|            O|     FastTrack 工程师| 核心入门培训|
| 1148| {向导} 安装和配置 ADFS|            O|     FastTrack 工程师| 核心入门培训|
| 3267| Outlook Mobile - 配置 Outlook Mobile|            M|     FastTrack 工程师| Outlook Mobile|
| 3161| Power BI - 配置 Power BI|            O|     FastTrack 工程师| PowerBI|
| 2461| 在小组件接洽期间处理 PowerBI 客户 - 参见“了解更多信息”|            O|     FastTrack 工程师| PowerBI|
| 2570| 配置 Cloud PBX 与 PSTN Calling|            O|     FastTrack 工程师| Skype for Business - PSTN Calling/Skype for Business - Cloud PBX|
| 2201| SfB - 配置 SfB 拆分域 Lync 2010/2013 Server|            O|     FastTrack 工程师| Skype for Business |
| 2567| SfB - 为 SfB 2015 Server 配置 SfB 拆分域|            O|     FastTrack 工程师| Skype for Business |
| 2260| SfB - 配置 SfB Room System 帐户|            O|     FastTrack 工程师| Skype for Business |
| 2980| SfB - {向导} 配置 Skype for Business 标准功能|            O|     FastTrack 工程师| Skype for Business |
| 3047| 配置 Cloud PSTN 会议|            O|     FastTrack 工程师| Skype for Business - PSTN 会议|
| 2483| 配置 Project Professional|            M|     FastTrack 工程师| Project|
| 2266| SfB - 配置 Skype for Business 核心功能（仅 IM/P）|            O|     FastTrack 工程师| Skype for Business |
| 2491| 配置 Project Online/Project Lite|            M|     FastTrack 工程师| Project|
|| 3999| [MIP - 激活租户和配置测试客户端](https://aka.ms/PartnerMIPAdoptionGuide)|            M|            SME| AIP|
| 3954| 创建过渡文档并过渡到迁移团队|            O| 迁移高速经理| Exchange/OneDrive for Business/SharePoint|
| 4000| MIP – 配置敏感度标签|            O|            SME| AIP|
| 4001| MIP – 测试文档标签|            O|            SME| AIP|
| 4002| MIP – 创建保护策略|            O|            SME| AIP|
| 4003| MIP – 安装客户端|            O|            SME| AIP|
| 4004| MIP – 提供有关 BYOK 的指南|            O|            SME| AIP|
| 4006| MIP – 使用统一标签扫描仪|            O|            SME| AIP|
| 4081| OATP – 配置 P1 设置|            O|     FastTrack 工程师| Exchange/OATP|
| 4082| OATP – 查看 P2 功能|            O|            SME| Exchange/OATP|
| 4083| MDATP – 配置设置|            M|            SME| MDATP|
| 4087| Intune PC 代理弃用|            O|            SME| Intune|
| 4097| Microsoft Edge 部署和配置|            M|      FastTrack 工程师| Microsoft Edge|
| 4098| Microsoft Edge 策略审查和配置|            M|            SME| Microsoft Edge|

### 执行现代化改造启用任务

主要角色: **FastTrack 工程师**
行动: **客户运行状况/RFA/目标设定**
适用于: **Office 专业增强版/Windows 10**

完成现代化改造启用任务。

#### FTOP 任务

| 任务 ID| 任务名称| (M) 强制性/(O) 可选| FastTrack 角色| 服务|
| -------| ---------------------------------------------| :----------------------: | :------------: | --------|
| 4024| 从 Windows 7/8.1 升级到 Windows 10|            M|     FastTrack 工程师| Windows 10|
| 4031| 使用 System Center 优化 Windows 10 和 Office 更新交付|            O|            SME| Windows 10|
| 4032| 使用 System Center 分阶段部署 Windows 10|            O|            SME| Windows 10|
| 1247| 部署 Office 365 专业增强版|            M|     FastTrack 工程师| Office 专业增强版|
| 4033| 使用 System Center 分阶段部署 Office 365 专业增强版|            O|            SME| Office 专业增强版|
| 3650| Office 专业增强版 - OPP 加速|            O| FastTrack 经理| Office 专业增强版|

### Teams - Skype 过渡到 Teams

主要角色: **SME**
适用于: **Teams**

如果客户从 Skype 过渡到 Teams 时得到 Teams SME 或 FastTrack 就绪合作伙伴的**半接触主动式接洽（客户拥有 2,000 到 10,000 个活动 SfBO 用户）**协助，使用以下任务获取当前接洽状态。

**对于活动 SfBO 用户不到 2,000 或 10,000 的客户**，请参阅有关 SfBO 向 Teams 过渡活动的其他角色和职责指南，具体参见附加的 [**角色和职责幻灯片**](https://aka.ms/FTCTeamsRnRs) 中的幻灯片 6。

**FastTrack 就绪合作伙伴**​​ – 如果你领导客户过渡工作，请继续将接洽详情通知给分配的 SME，以便他们代表你跟踪任务状态。提供仅 Teams 的目标日期和客户状态摘要。​
 
#### FTOP 任务

| 任务 ID| 任务名称| (M) 强制性/(O) 可选|   FastTrack 角色| 服务|
| -------| ---------------------------------------------| :----------------------: | :----------------: | --------|
| 3685| Teams - 内部就绪性评估|            M| FastTrack 工程师| Teams|
| 3716| Teams - 客户升级概述|            M|        SME| Teams|
| 3688| Teams - 客户策略与规划|            M|        SME| Teams|
| 3689| [Teams - 客户升级](https://aka.ms/AA6vhy4)|            M|        SME| Teams|
| 3722| Teams - 半接触反应式过渡支持|            M|        SME| Teams|

### 客户调查资格

主要角色: **FastTrack 经理**
行动: **客户运行状况/RFA/目标设定**
适用于: **所有服务**

更新客户调查信息以确定执行相应任务的资格和联系人。

**质量投入**

- FTOP 中的联系人已更新，并且过时的联系人已删除

**质量产出**

- 无

#### FTOP 任务

| 任务 ID| 任务名称| (M) 强制性/(O) 可选|  FastTrack 角色| 服务|
| -------| -----------------------| :----------------------: | :---------------: | ------------|
| 3690| 确定调查联系人|            M| FastTrack 经理| 所有服务|

### 范围内所有服务已启用

主要角色: **FastTrack 经理**
行动: **客户运行状况/RFA/目标设定**
适用于: **所有服务**

让客户进入迁移阶段并完成适当的任务。

#### FTOP 任务

| 任务 ID| 任务名称| (M) 强制性/(O) 可选|  FastTrack 角色| 服务|
| -------| ------------------------------------------------------------------------------| :----------------------: | :---------------: | ------------|
| 1701| 启用完成: 范围内所有服务已启用；迁移工具已配置|            M| FastTrack 经理| 所有服务|

## 重要投入

  - 改进清单中的所有必需任务均已完成。 
  - 客户了解身份并完成所有改进。 
  - 客户的本地环境已改进/配置，以支持使用云服务（包括任何混合共存）。
  - 客户准备开始使用服务。 

## 重要成果

  - 需要的所有工作负载均已配置并可供使用。 
  - 试点用户已启用并已迁移。 

## 后续步骤

  - 在 [支持成功执行](success-support-success-execution-partner.md) 流程中酌情鼓励应用/使用其他工作负载。
  - 将服务状态更新为**应用**或**迁移**。

### 企业附加权益启用

主要角色: **FastTrack 工程师**
行动: **目标设定/RFA/客户运行状况**
适用于: **所有服务**

仅适用于拥有 20,000 个或更多席位的已批准企业客户，或例外客户。

**质量投入**

- 技术启用或环境笔记中记录以下内容（如果适用）：
    - 完成特定于以下方面的适用改进活动后，符合条件客户的配置和身份决策: 
        - 地域冗余 ADFS 场
        - 复杂的混合 Exchange 或其他核心混合场景
        - 安全、合规、监管要求（例如 GPO、公共文件夹、保留、组管理等）
        - 身份管理，包括客户端/Web 访问策略或替代身份
- 接洽管理笔记中记录以下内容：
    - 符合条件客户已制定迁移战略和/或用户数据备份策略，其中“FTOP 服务”选项卡的“数据迁移”部分中“Microsoft 执行迁移值”为 TRUE
    - 迁移方法和生成迁移日程表的日程要求

**质量产出** 

- 技术启用笔记中记录以下内容（如果适用）：
    - 符合条件客户验证地域冗余 ADFS 和客户端/Web 访问策略的配置
        - 发行授权列表中的向导和/或定制声明规则已经测试
    - 符合条件客户验证支持邮件的应用程序集成并完成邮件路由
        - 确认没有支持邮件的客户端应用；对于支持邮件的那些应用，邮件正常路由
    - 符合条件客户已确认使用了本地公用文件夹，并已配置且将其从 Exchange 同步到 O365（如果二者要共存），或已将它们迁移到 O365 中的共享邮箱
    - 如果获得授权，为启用的 Skype/LYNX 用户配置 Exchange 混合统一消息
    - 再联系现代化改造 FTA 以获取 Windows 10 部署协助

#### FTOP 任务

| 任务 ID| 任务名称| (M) 强制性/(O) 可选|   FastTrack 角色| 服务|
| -------| ---------------------------------------------------------| :----------------------: | :----------------: | ---------------|
| 4037| 现代化改造 FastTrack 架构师再接洽工作|            O|   现代化改造 FTA| Windows 10|
| 3212| Exchange - 支持邮件的应用程序集成指南|            O| FastTrack 工程师| Exchange|
| 3213| Exchange - Exchange 公共文件夹共存启用|            O| FastTrack 工程师| Exchange|
| 3238| Exchange - 启用 Lync/SfB 集成|            O| FastTrack 工程师| Exchange|
| 3241| 配置 AD FS 客户端访问策略|            O| FastTrack 工程师| 核心入门培训|
| 3243| 地域冗余 ADFS 配置指南|            O| FastTrack 工程师| 核心入门培训|

### 未分类任务（启用服务）

主要角色: **-**  
适用于: **所有服务**

尚未纳入 FastTrack 行动手册流程的未分类任务将显示在此部分。

#### FTOP 任务

| 任务 ID| 任务名称| (M) 强制性/(O) 可选|   FastTrack 角色| 服务|
| -------| ------------------------| :----------------------: | :----------------: | --------|
| 2550| {向导} 配置 AzRMS|            O| FastTrack 工程师| AIP|

## 重要投入

  - 改进清单中的所有必需任务均已完成。 
  - 客户了解身份并完成所有改进。 
  - 客户的本地环境已改进/配置，以支持使用云服务（包括任何混合共存）。
  - 客户准备开始使用服务。 

## 重要成果

  - 需要的所有工作负载均已配置并可供使用。 
  - 试点用户已启用并已迁移。 

## 后续步骤

  - 在 [支持成功执行](success-support-success-execution-partner-sc.md) 流程中酌情鼓励应用/使用其他工作负载。
  - 将服务状态更新为“应用”或“迁移”
  
[主页](http://partner-docs.microsoft.com)

## 刷新摘要

| 日期| 变更人| 变更内容|
| ----------| -----------------| ----------------|
|04/30/2020| Celia Kennedy|  常规维护|
| 10/25/2020| Celia Kennedy| 常规维护|
| 2/28/2020| Celia Kennedy| 添加了步骤“执行现代化改造启用任务”|
| 1/31/2020| Celia Kennedy| 弃用了任务 1910，将任务 3690 更改为强制性，重命名了任务 3685|
| 1/31/2020| Celia Kennedy| 增加了任务 4097、4098|
| 12/6/2019| Celia Kennedy| 弃用了任务 4022，添加了任务 4087|
| 10/25/2019| Celia Kennedy| 增加了任务 4081、4082、4083|
| 09/25/2019| Celia Kennedy| 更新了合作伙伴内容|
| 05/03/2019| Celia Kennedy| 删除了弃用的任务|
| 03/06/2019| Patric Grimwood| 更新了后续步骤中的链接|
| 02/26/2019| Patric Grimwood| 更新了合作伙伴链接|
| 10/26/2018| Mark Eichenberger| 创建了行动手册|

[主页](http://partner-docs.microsoft.com)
