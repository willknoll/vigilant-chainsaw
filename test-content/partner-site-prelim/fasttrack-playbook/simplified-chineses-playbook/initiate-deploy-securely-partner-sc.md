---
# required metadata
title: astTrack Partner Playbook - Deploy Securely
description: FastTrack Partner Playbook - Deploy Securely
author: Rosie Arrieta
ms.author: v-cekenn
manager: pagrim
ms.date: 09/27/2019
ms.topic: partner-playbook
ms.prod: non-product-specific
ms.custom: partner-playbook
ft.audience: partner
ft.owner: pagrim
---

# 安全部署

阶段：**启动**
行动：**客户运行状况/RFA/目标设定**

## 概述

"安全部署"流程将启动 FastTrack 中心 (FTC) 与客户之间的合作关系。在此期间，FTC 开始 了解客户的业务和自有服务，客户也开始了解 FTC 可以提供的关于可用 安全功能的支持范围。

## 目标

了解客户的部署要求以及 M365 安全 解决方案如何满足这些要求。评估客户当前的身份、设备和信息安全 知识。

向客户解释：

  - 安全的重要性
  - 为什么要确立安全基准
  - 为什么应安全部署生产力和协作工作 负载

## 方法

### 准备 M365 安全对话

主要角色：**FastTrack 经理**
行动：**客户运行状况/RFA/目标设定**
适用于：**核心入门培训**

查看客户许可，以确定客户拥有哪种许可类型 以及客户是否有任何附加安全功能。知道客户 拥有哪种许可证有助于你讲好故事，吸引他们利用更多的 Microsoft 365 产品套件 从一开始就尽可能安全地部署工作负载。

### 安排和交付 M365 安全对话

主要角色：**FastTrack 经理**
行动：**客户运行状况/RFA/目标设定**
适用于：**核心入门培训**

召开一次会议，其中包括客户组织中的所有相关的利益相关者（BDM、安全 分析师、安全架构师、安全总监、IT 等）​，一起讨论建立部署安全基准的 重要性，这有助于确保客户 利用我们产品和解决方案结构中内置的 安全性。[M365 安全对话 幻灯片](https://aka.ms/frp-sandcconversation) 引发有关安全部署服务的对话。

#### FTOP 任务

| 任务 ID | 任务名称                  | (M)强制性/(O)可选 |  FastTrack 角色   | 服务        |
| ------- | -------------------------- | :----------------------:| :---------------:| --------------- |
| 4017    | M365 安全对话 |            M             | FastTrack 经理 | 核心入门培训 |

### 准备身份

主要角色：**FastTrack 工程师**
行动：**客户运行状况/RFA/目标设定**
适用于：**核心入门培训**

**认识现有林并清理格式错误的 UPN**

这是第一次引导客户 为云过渡建立安全基础的讨论会。FE 应从中良好地认识客户当前的 环境和基础结构，并帮助制定发展路线。与客户见面沟通，了解他们 当前的环境/结构。利用工具集清理 客户的环境，以准备进行身份同步

  - [工具集](https://docs.microsoft.com/en-us/office365/enterprise/install-and-run-idfix)

**敲定身份验证方法**

与客户交谈，以讨论和选择 身份验证方法。只有在认识现有林而且 客户已清理环境并准备好身份同步后 才能这样做。 

  - [选择 Azure AD 身份验证](https://go.microsoft.com/fwlink/?linkid=873173)

**配置 AAD Connect**

利用 [AAD Connect 指定任务](https://docs.microsoft.com/en-us/office365/enterprise/set-up-directory-synchronization) 配置 AAD Connect。此时不要同步身份。

在同步身份之前，设置两个仅限云的 Break Glass 帐户，以缓解无法登录 普通管理员帐户的风险。接下来，配置一个条件访问策略，默认情况下阻止所有访问。务必排除 Break Glass 帐户，以避免管理员被锁定在门户网站之外。最后，启用基准策略：面向管理员的 MFA，以确保 特权用户注册到 MFA 中并默认受到保护。 

  - [Break Glass 帐户](https://docs.microsoft.com/en-us/azure/active-directory/users-groups-roles/directory-emergency-access)
  - [基准策略：面向管理员的 MFA](https://docs.microsoft.com/en-us/azure/active-directory/conditional-access/baseline-protection)
  - [什么是基准策略？](https://docs.microsoft.com/en-us/azure/active-directory/conditional-access/baseline-protection)
  
**身份同步**

客户满足以下条件后才能同步身份：

  - Break Glass 帐户已创建
  - 配置了"阻止所有条件访问"策略
  - 基准策略：面向管理员的 MFA 已启用

在此步骤结束时，围绕身份的基准安全 框架将落实到位。以前配置的使用 AAD Connect 进行的身份同步 将发生在启用阶段的"任务 1141：设置目录 同步 (Azure AD Connect)"中。

#### FTOP 任务

| 任务 ID | 任务名称                                      | (M)强制性/(O)可选 |   FastTrack 角色   | 服务        |
| ------- | ---------------------------------------------- | :----------------------:| :----------------:| --------------- |
| 3736    | 身份验证方法选择指南 |            M             | FastTrack 工程师 | 核心入门培训 |

### 身份和设备安全性

主要角色：**FastTrack 工程师**
行动：**客户运行状况/RFA/目标设定**
适用于：**核心入门培训**

对于所有客户，都需要进行"身份和设备安全性"演示/讨论。鼓励客户围绕身份、设备和移动应用管理 规划好牢固的安全基础。研讨会结束后，你将帮助客户为其组织选择和启用 合适的安全功能，因为这关系到 身份和设备的安全。

  - FE 举办身份和设备安全性最佳实践研讨会 并完成交接表格
  - 对于 EMS 再接洽，FM 应该考虑演示 [EMS 商业价值幻灯片](https://aka.ms/AA54548)以展开高级别 讨论（本地化版本 [在此处](https://aka.ms/FRPDeploySecurelyGuidance)）
  - 使用 [身份和设备安全性 指南](https://aka.ms/idsapproach)获取有关执行此步骤的
    详细信息

#### FTOP 任务

| 任务 ID | 任务名称     | (M)强制性/(O)可选 |   FastTrack 角色   | 服务        |
| ------- | --------------------------------------------------------- | :----------------------:| :----------------:| --------------- |
| 3720    | [身份和设备安全性最佳实践研讨会](https://aka.ms/FRPDeploySecurelyGuidance)      |            M             | FastTrack 工程师 | 核心入门培训 |
| 3721    | 身份和设备安全性完结交接表单工作 |            O             |        SME         | 核心入门培训 |

## 重要投入

  - 启动电话会议结束

## 重要成果

  - 客户深入了解了能 尽可能安全部署工作负载的可用安全功能。
  - 记录客户不打算启用的领域以及 原因。
  - 客户选择了他们的身份验证方法并为其组织 启用了合适的安全功能，因为这关系到 身份和设备安全。

## 后续步骤

  - FM 安排额外的跟进会议，与项目团队 和相关的利益相关者讨论特定的服务和 场景，根据需要弥补缺口（例如 BVD、服务研讨会、与技术/应用 SME 的会议等）
  - 取得上面列出的成果后，转到 [执行技术评估](assess-conduct-technical-assessment-partner-sc.md)、[举办安全研讨会](assess-conduct-security-workshops-partner-sc.md) 和 [举办服务研讨会](assess-conduct-services-workshops-partner-sc.md)

### 刷新摘要

|日期|变更人|变更内容|备注|
|---------|---------------|----------------------------|-------------|
|2019/10/18| Celia Kennedy| 更新了合作伙伴行动手册| |

[主页](http://partner-docs.microsoft.com)
