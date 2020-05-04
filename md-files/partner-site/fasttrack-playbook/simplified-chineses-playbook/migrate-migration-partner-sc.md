---
# required metadata
title: FastTrack Partner Playbook - Migration
description: FastTrack Partner Playbook - Migration
author: Celia Kennedy
ms.author: v-cekenn
manager: pagrim
ms.date: 5/02/2019
ms.topic: playbook
ms.prod: non-product-specific
ms.custom: partner-playbook
ft.audience: partner
ft.owner: pagrim
---

# 迁移

阶段：**迁移**

## 概述

确保客户成功迁移到云 (Exchange Online/OneDrive for Business/SharePoint)。

## 目标

  - 验证技术启用和客户迁移就绪性
  - 执行迁移测试
  - 从接洽转移到高速并执行高速迁移
  - 问题管理

## 方法

### 执行测试迁移

主要角色：**迁移高速经理**

适用于：**Exchange/OneDrive for Business/SharePoint**

执行测试迁移并验证客户基础结构是否准备好 高速 迁移。

#### FTOP 任务

| 任务 ID | 任务名称                                                             | (M)强制性/(O)可选 |   FastTrack 角色   | 服务 |
| ------- | --------------------------------------------------------------------- | :----------------------:| :----------------:| -------- |
| 1330    | Exchange - 使用测试批次验证电子邮件迁移（FE 和客户）|            O             | FastTrack 工程师 | Exchange |

### 创建过渡文档并将项目过渡给通用合作伙伴

主要角色：**迁移高速经理**

适用于：**Exchange/OneDrive for Business/SharePoint**

创建文档以将接洽工作过渡给通用 合作伙伴模型 (UPM) 合作伙伴。

### 管理高速迁移

主要角色：**迁移高速经理**

适用于：**Exchange/OneDrive for Business/SharePoint**

安排和处理客户批量迁移，以加速迁移 到 云。

#### FTOP 任务

| 任务 ID | 任务名称                                                                                         | (M)强制性/(O)可选 |       FastTrack 角色       | 服务                                      |
| ------- | ------------------------------------------------------------------------------------------------- | :----------------------:| :------------------------:| --------------------------------------------- |
| 3234    | 领导与客户的 Go-NoGo 会议                                                               |            O             |     FastTrack 经理      | SharePoint/Exchange/OneDrive for Business |
| 3135    | 客户创建迁移日程安排                                                                |            O             |     FastTrack 工程师     | OneDrive for Business/Exchange/SharePoint |
| 3143    | Exchange - 验证邮箱访问 - 在所有安排的邮箱上运行预检                     |            O             |     FastTrack 工程师     | Exchange                                      |
| 1328    | Exchange - 修复发现的邮箱问题                                                  |            O             |     FastTrack 工程师     | Exchange                                      |
| 3629    | MVM 退出和迁移暂停流程                                                     |            M             | 迁移高速经理 | Exchange/OneDrive for Business/SharePoint |
| 1871    | 直接迁移活动                                                                       |            M             | 迁移高速经理 | Exchange/OneDrive for Business/SharePoint |
| 1874    | Exchange - 建议客户将本地邮箱之行为启用邮件的用户转换脚本 |            O             |     FastTrack 工程师     | Exchange                                      |

### 问题管理

主要角色：**迁移高速经理**

适用于：**Exchange/OneDrive for Business/SharePoint**

管理和解决迁移 问题。

#### FTOP 任务

| 任务 ID | 任务名称                                                                                                               | (M)强制性/(O)可选 |       FastTrack 角色       | 服务              |
| ------- | ----------------------------------------------------------------------------------------------------------------------- | :----------------------:| :------------------------:| --------------------- |
| 2543    | Exchange - 建议客户在迁移事件发生之日起的 T+5 个工作日内报告所有迁移后的问题 |            O             |     FastTrack 经理      | Exchange              |
| 2481    | OneDrive - 协助客户解决不同步项和其他迁移问题                                       |            O             | 迁移高速经理 | OneDrive for Business |

### 完成迁移

主要角色：**迁移高速经理**

适用于：**Exchange/OneDrive for Business/SharePoint**

验证客户数据已成功迁移，并继续进行任何 清理活动，之后再 退出。

#### FTOP 任务

| 任务 ID | 任务名称                                                                   | (M)强制性/(O)可选 |       FastTrack 角色       | 服务                                      |
| ------- | --------------------------------------------------------------------------- | :----------------------:| :------------------------:| --------------------------------------------- |
| 2544    | Exchange - 根据邮件流计划更改 MX 记录                     |            O             |     FastTrack 工程师     | Exchange                                      |
| 1386    | Exchange - 将 MX DNS 记录 TTL 重置为原始值                        |            O             |     FastTrack 工程师     | Exchange                                      |
| 1370    | Exchange - 电子邮件迁移后活动（所有源系统）   |            O             |     FastTrack 工程师     | Exchange                                      |
| 2561    | OneDrive - OneDrive for Business 迁移后活动（设置重定向）|            O             |     FastTrack 工程师     | OneDrive for Business                         |
| 2323    | Exchange - Domino 迁移后活动                                 |            O             | 迁移高速经理 | Exchange                                      |
| 1702    | 迁移结束：范围内的所有迁移已完成                             |            M             |     FastTrack 经理      | Exchange/OneDrive for Business/SharePoint |

### 未分类任务（迁移）

主要角色：**-**

适用于：**所有服务**

尚未纳入 FastTrack 行动手册流程的未分类 FastTrack 编排门户 (FTOP) 任务 将显示在此处。

## 重要投入

  - 迁移研讨会
  - 迁移调查问卷
  - 完成的客户基础结构设置和配置
  - 达到连接要求
  - 客户提供的凭据
  - 日程安排批次（CSV 文件）

## 重要成果

- 成功迁移客户数据

## 后续步骤

  - 将客户推进到 [支持成功执行](success-support-success-execution-partner-en.md) 流程。
  - 将客户推进到 [举办成功评审会](success-conduct-success-review-partner-sc.md) 流程。

## 刷新摘要

| 日期       | 变更人       | 变更内容          |
| ---------- | ----------------- | ----------------      |
| 2019/09/25 | Celia Kennedy     | 更新合作伙伴内容 |
| 2019/05/02 | Celia Kennedy     | 删除了弃用的任务 |
| 2019/03/06 | Patric Grimwood   | 更新了后续步骤中的链接 |
| 2019/02/26 | Patric Grimwood   | 更新了合作伙伴链接 |
| 2018/12/11 | Mark Eichenberger | 创建了行动手册      |

[主页](http://partner-docs.microsoft.com)
