---
# required metadata
title: FastTrack Partner Playbook - Conduct Security Workshops
description: FastTrack Partner Playbook - Conduct Security Workshops
author: Ryan Meehan
ms.author: v-cekenn
manager: pagrim
ms.date: 10/01/2019
ms.topic: partner-playbook
ms.prod: non-product-specific
ms.custom: partner-playbook
ft.audience: partner
ft.owner: pargim
---
# 举办安全研讨会

阶段：**评估**

## 概述

​"举办安全研讨会"流程延续了 FastTrack 中心 (FTC) 与客户之间以安全为中心的 合作关系。此时，FTC 继续与客户合作，确保客户定义并实现他们期望的 安全状态。

## 目标

  - 评估客户的身份、设备和信息安全的 当前安全状态。
  - 客户了解他们可以使用什么保护 组织的数字资产以及如何进行日常的 安全问题调查。
  - 客户启用适用的安全功能以保护他们的 数字资产。

## 方法

### 身份安全

主要角色：**SME**
适用于：**AADP**

身份安全至关重要，需要纳入到安全基准确立过程中。我们需要确保客户清晰认识通过 AADP 提供的防止用户凭据泄露的各种身份安全保障，并确保根据客户需求和安全最佳实践管理这些用户。

  - 查看针对客户和场景的现代身份验证选项
  - 确保客户了解通过 AADP 功能提供的控制，例如条件访问 (CA)、多重身份验证 (MFA) 和单一登录 (SSO)
  - 分享 AADP 功能概述、应用套件、演示
  
### Azure AD Premium 功能幻灯片

单击 [此处](https://aka.ms/FRPFTOPTask2533WorkshopLocalized) 查找 FastTrack 中当前支持的所有 Azure AD Premium 功能的链接，使用这些链接可重点查看 Azure AD Premium 套件中特定功能的价值。

如果你的客户对某个特定功能感兴趣，可展示和/或分享这些功能幻灯片，让客户快速了解整体概况，并访问资源以了解更多信息。

#### FTOP 任务

| 任务 ID | 任务名称                      | (M)强制性/(O)可选 | FastTrack 角色 | 访问 |
| ------- | ------------------------------ | :----------------------:| :------------:| -------- |
| 2533    | Azure AD Premium - 技术研讨会 |            M             |      SME       | AADP     |

### 设备安全

主要角色：**SME**
行动：**客户运行状况/RFA/目标设定**
适用于：**Intune/MDATP/Windows 10**

帮助客户保护其数据，同时保证员工使用选择的 设备和应用高效工作。移动设备管理 (MDM) 可提供集成的数据保护和合规功能，让你精确了解不同用户可以访问哪些数据，以及他们可以对 Office 和其他移动应用中的数据执行
什么操作。

  - 了解客户想要管理和保护的 不同平台
  - 定义保护应用程序、数据和设备的 综合策略

[Microsoft Defender 高级威胁防护 (MDATP)](https://docs.microsoft.com/en-us/windows/security/threat-protection/microsoft-defender-atp/microsoft-defender-advanced-threat-protection)
是统一的终结点安全平台，提供预防性保护、入侵后检测以及自动调查和响应。范围内功能：**威胁漏洞管理 (TVM)** 使用 基于风险的方法发现和补救 终结点漏洞与错误配置并按优先级排列它们。**攻击面 减少 (ASR)** 消除危险或不必要的表面区域，限制危险代码的运行。**新一代保护** 利用机器学习和深度分析来防范 基于文件和无文件的恶意软件。**终结点检测和响应 (EDR)** 监视行为和攻击技术，以检测和响应 高级攻击。**自动调查和改进** 利用 人工智能在几分钟内自动 调查警报并解决复杂的威胁。**安全状态** 提供 实时可见性，并帮助确定多种方法来提高客户的 安全评分。

#### FTOP 任务

| 任务 ID | 任务名称                                               | (M)强制性/(O)可选 |  FastTrack 角色   | 服务   |
| ------- | ------------------------------------------------------- | :----------------------:| :---------------:| ---------- |
| 2460    | Intune - 举办 Microsoft Intune 研讨会              |            M             | FastTrack 经理 | Intune     |
| 4084    | Intune - 执行 Microsoft 现代管理评估 |            M             |        SME        | Intune     |
| 4079    | [MDATP 商业价值幻灯片](https://aka.ms/mdatp-oatp-bvd)                               |            M             | FastTrack 经理 | MDATP      |
| 4078    | MDATP – 推介基于第三方 AV 的 MDATP                |            M             |        SME        | Windows 10 |
| 4085    | 交付 MDATP BVD                                       |            O             |        SME        | Intune     |

### 信息安全

主要角色：**FastTrack 工程师**
适用于：**Exchange/OneDrive for Business/Outlook Mobile /
SharePoint**

保护客户信息或数据是确立安全基准的一个重要要求。在客户将其敏感且最有价值的数字资产迁移至云之前，我们需要确保他们清晰认识信息分类和确保敏感数据安全所需的保护。

  - 确定客户想要保护的信息
  - 确定并建立访问、保留和信息保护策略

#### FTOP 任务

| 任务 ID | 任务名称                                      | (M)强制性/(O)可选 |   FastTrack 角色   | 服务                                      |
| ------- | ---------------------------------------------- | :----------------------:| :----------------:| --------------------------------------------- |
| 3747    | Exchange Online Protection 研讨会            |            M             | FastTrack 工程师 | Exchange                                      |
| 3748    | 数据丢失防护研讨会                  |            O             | FastTrack 工程师 | Exchange/OneDrive for Business/SharePoint |
| 3749    | Office 365 邮件加密研讨会         |            O             | FastTrack 工程师 | Exchange                                      |
| 3750    | [Office 365 高级威胁防护研讨会](https://aka.ms/mdatp-oatp-bvd) |            O             | FastTrack 工程师 | Exchange                                      |
| 3997    | AIP 研讨会                                   |            M             | FastTrack 经理  | AIP                                           |

## 重要投入

  - M365 安全对话完成
  - 安全部署任务完成

## 重要成果

  - 客户根据许可启用相应的 Exchange Online Protection 和 Azure 信息保护、Azure Active Directory 设置和 Azure 信息保护。
  - 客户根据有关安全性与合规性的组织策略启用其他功能。
  - 记录客户不打算启用的领域以及原因。

## 后续步骤

  - 根据已确定的待引进工作负载，继续 [举办服务研讨会](assess-conduct-services-workshops-partner-sc.md)
  - 如果不需要研讨会，请继续 [弥补技术缺口](remediate-address-technical-gaps-partner-sc.md)

## 刷新摘要

| 日期      | 变更人   | 变更内容                    |
| --------- | ------------- | ------------------------------- |
| 2020/01/03 | Celia Kennedy | 更新设备安全，为任务 4079 和 3750 增加了 BVD |
| 2019/10/18 | Celia Kennedy | 更新合作伙伴行动手册 |
| 2019/7/26 | Rosie Arrieta | 增加了设备和身份步骤 |
| 2019/5/31 | Rosie Arrieta | 发布了流程               |

[主页](http://partner-docs.microsoft.com)
