---
# required metadata  
title: FastTrack Partner Playbook - Address Technical Gaps  
description: FastTrack Partner Playbook - Address Technical Gaps  
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

# 技術的なギャップへの対応

フェーズ: **展開準備**

## 概要

技術的なギャップへの対応プロセスでは、展開前の技術的なギャップを特定して対処し、お客様の一貫したタイムリーなワークロードの展開を可能にし、インフラストラクチャやその他の技術的な障害による不満や遅延を回避します。

## 目標

  - 調査中に特定されたすべての不備を修正します。
  - お客様の環境が有効化の最低限の基準に準拠していることを確認します。
  - ID の展開準備や同期を含むコア オンボーディング活動を完了します。

## アプローチ

### 展開準備チェックリストを確認する

主な役割: **FastTrack エンジニア**
適用対象: **すべてのサービス**

お客様と共に展開準備チェックリストを確認します。

### チェックポイントミーティングの実施

主な役割: **FastTrack エンジニア**
適用対象: **すべてのサービス**

チェックポイント ミーティングを (毎週またはその他の頻度で) 実施して、展開準備ステップの進行状況を確認します。

### 展開準備ステップのサポート

主な役割: **FastTrack エンジニア**
適用対象: **すべてのサービス**

必要に応じて、展開準備ステップをサポートします。

#### FTOP タスク

| タスク ID| タスク名| (M) 必須 (O) オプション| FastTrack の役割| サービス|
|---------|---------------|--------------------------|--------------------------|--------------------------|
| 3184| AAD Connect Health - システム要件の確認| O FastTrack エンジニア| コア オンボーディング|
| 2193| SfB - 高度な機能展開準備および長期間| O| FastTrack エンジニア| Skype for Business|
| 3224| EDU: Classroom & SDS の展開準備| O| FastTrack エンジニア| Classroom/SDS|
| 3998| MIP - 前提条件の確認| M| SME| AIP|
| 4073| ネットワーク – ネットワーク オンボーディング ツールから特定されたネットワークの問題に対処する| O| FastTrack エンジニア| コア オンボーディング|
| 4080| [MDATP - URL のホワイトリストへの追加を含むプロキシ構成](https://docs.microsoft.com/en-us/windows/security/threat-protection/microsoft-defender-atp/configure-proxy-internet)|M|  SME| MDATP|
| 4101| セキュリティの既定のポリシーを移行用の CA ポリシーに置き換える - [手順](https://aka.ms/AA75xf0) FRP はオプションのサポートとして [ID SME をリクエスト](https://aka.ms/FRPHubSMERequestProcess)可能| O| FastTrack エンジニア| Exchange/OneDrive for Business/SharePoint|

### エンタープライズ追加のメリットの展開準備

主な役割: **FastTrack エンジニア**
適用対象: **Exchange / Skype for Business**

20,000 シート以上がある、承認されたエンタープライズのお客様のみ、または例外があります。

#### FTOP タスク

| タスク ID| タスク名| (M) 必須 (O) オプション|   FastTrack の役割| サービス|
| -------| -----------------------------------------------------------| :----------------------: | :----------------: | ------------------|
| 3208| Exchange - メールボックスのグループ化と移行プランの計画|            O| FastTrack エンジニア| Exchange|
| 3209| SfB - ユーザー移行の展開準備|            O| FastTrack エンジニア| Skype for Business|
| 3358| Deep Dive 移行計画ワークショップ|            O| FastTrack アーキテクト v2| Exchange/OneDrive for Business/SharePoint|

### 展開準備活動の調整

主な役割: **FastTrack エンジニア**
適用対象: **すべてのサービス**

パートナー、Microsoft Consulting Services (MCS) または Premier が実施する展開準備活動を調整します。

### 展開準備チェックリスト解決済み

主な役割: **FastTrack マネージャー**
適用対象: **すべてのサービス**

有効化フェーズに移動して、展開準備終了プロセスを完了します。

#### FTOP タスク

| タスク ID| タスク名| (M) 必須 (O) オプション|   FastTrack の役割| サービス|
| -------| -------------------------------------------------------------------------------| :----------------------: | :----------------: | ------------|
| 3190| 展開準備チェックリストでお客様のレビューと解決済みのものを確認する|            M| FastTrack エンジニア| すべてのサービス|
| 1700| 展開準備の終了: 展開準備チェックリストのすべての項目が解決|            M| FastTrack マネージャー| すべてのサービス|

##### 未分類のタスク (技術的なギャップに対処する)

主な役割: -
適用対象: **すべてのサービス**

FastTrack プレイブック フローにまだ組み込まれていない、未分類の FastTrack オーケストレーション ポータル (FTOP) タスクがここに表示されます。

#### FTOP タスク

| タスク ID| タスク名| (M) 必須 (O) オプション|   FastTrack の役割| サービス|
| -------| --------------------------------| :----------------------: | :----------------: | --------|
| 2545| AzRMS 展開準備および長期間|            O| FastTrack エンジニア| AIP|

## 重要な情報

  - すべての技術的な調査活動が完了しました (展開準備チェックリスト)。
  - お客様は、展開準備を完了するための追加のリソース (パートナー/MCS/Premier) を特定しました。

## 主な結果

  - 特定されたすべての展開準備ステップが解決され、お客様は有効化フェーズに進みます。
  - お客様の環境が、クラウド サービスの有効化の最低基準を満たしているかまたは超えています。
  - ID は展開準備され、プロビジョニングと同期は、構成され、アクティブです。
  - パイロット ユーザー/グループが特定され、クラウド ワークロードへの移行の準備が整っています。

## 次のステップ

  - パイロット ユーザー/グループを有効化する準備をします。
  - [適切な実行のサポート](success-support-success-execution-partner-jp.md) プロセスに進み、導入を促進します。
  - [サービスを有効にする](enable-enable-services-partner-jp.md) プロセスに進みます。

## 概要の更新

| 日付| 変更者| 変更内容|
| ----------| -----------------| ------------------------|
|04/30/2020| Celia Kennedy| 全般メンテナンス|
| 03/27/2020| Celia Kennedy| 全般メンテナンス|
| 12/18/2019| Celia Kennedy| タスク 4080 および 3358 の追加|
| 09/25/2018| Celia Kennedy| コンテンツの更新|
| 05/02/2018| Celia Kennedy| 廃止されたタスクを削除|
| 03/06/2019| Patric Grimwood| 次のステップのリンクを更新|
| 02/26/2019| Patric Grimwood| パートナー リンクを更新|
| 12/11/2018| Mark Eichenberger| プレイブックの作成|
| 12/7/2018| Ryan Meehan| 簡単な書式設定の変更|

[ホーム](http://partner-docs.microsoft.com)
