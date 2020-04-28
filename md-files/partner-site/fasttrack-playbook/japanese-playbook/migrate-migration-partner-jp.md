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

# 移行

フェーズ: **移行**

## 概要

お客様がクラウドの (Exchange Online/OneDrive for Business/SharePoint) に正常に移行できるようにします。​

## 目標

  - 移行の技術的な有効化とお客様の準備状態の検証
  - 移行テストを実行する
  - エンゲージメントをヴェロシティーに転送し、ヴェロシティー移行を実行する
  - 問題の管理

## アプローチ

### テスト移行を実行する

主な役割: **移行ヴェロシティー マネージャー**
適用対象: **Exchange / OneDrive for Business / SharePoint**

テスト移行を実行し、お客様のインフラストラクチャがヴェロシティー移行に向けて 準備できているかどうかを 検証します。

#### FTOP タスク

| タスク ID | タスク名                                                             | (M) (必須) / (O) (任意) |   FastTrack 役割   | サービス |
| ------- | --------------------------------------------------------------------- | :----------------------:| :----------------:| -------- |
| 1330    | Exchange - テスト バッチによるメール移行の検証 (FE およびお客様) |            O             | FastTrack エンジニア | Exchange |

### 移行ドキュメントおよび移行プロジェクトをユニバーサル パートナーに作成する

主な役割: **移行ヴェロシティー マネージャー**
適用対象: **Exchange / OneDrive for Business / SharePoint**

エンゲージメントをユニバーサル パートナーモデル (UPM) パートナーに 移行するためのドキュメントを作成します。

### ヴェロシティー移行の管理

主な役割: **移行ヴェロシティー マネージャー**
適用対象: **Exchange / OneDrive for Business / SharePoint**

お客様のバッチ移行をスケジュールおよび処理して、クラウドへの移行を 促進 します。

#### FTOP タスク

| タスク ID | タスク名     | (M) (必須) / (O) (任意) |       FastTrack 役割       | サービス                                      |
| ------- | ------------------------------------------------ | :----------------------:| :------------------------:| --------------------------------------------- |
| 3234    | お客様との実行するかどうかを決定する会議をリードする   |            O             |     FastTrack マネージャー      | SharePoint / Exchange / OneDrive for Business |
| 3135    | お客様が移行スケジュールを作成する      |            O             |     FastTrack エンジニア     | OneDrive for Business / Exchange / SharePoint |
| 3143    | Exchange - Validate メールボックスのアクセスの検証 - スケジュールされたすべてのメールボックスで Preflight を実行する    |            O             |     FastTrack エンジニア     | Exchange       |
| 1328    | Exchange - 特定されたメールボックスの問題の展開準備   |            O             |     FastTrack エンジニア     | Exchange      |
| 3629    | MVM の解約および移行の一時停止プロセス    |            M             | 移行ヴェロシティー マネージャー | Exchange / OneDrive for Business / SharePoint |
| 1871    | 直接移行活動        |            M             | 移行ヴェロシティー マネージャー | Exchange / OneDrive for Business / SharePoint |
| 1874    | Exchange - オンプレミスのメールボックスをメールが有効なユーザーに変換するスクリプトを実行するようにお客様に提案する |            O             |     FastTrack エンジニア     | Exchange                                      |

### 問題の管理

主な役割: **移行ヴェロシティー マネージャー**
適用対象: **Exchange / OneDrive for Business / SharePoint**

移行の問題を管理し、解決します。

#### FTOP タスク

| タスク ID | タスク名                                                                                                               | (M) (必須) / (O) (任意) |       FastTrack 役割       | サービス              |
| ------- | ----------------------------------------------------------------------------------------------------------------------- | :----------------------:| :------------------------:| --------------------- |
| 2543    | Exchange - 移行イベントが発生した日から 5 営業日以内に移行後の問題を報告するようお客様に提案する |            O             |     FastTrack マネージャー      | Exchange              |
| 2481    | OneDrive - 同期されていない項目や移行に関するその他の問題についてお客様を支援する                                       |            O             | 移行ヴェロシティー マネージャー | OneDrive for Business |

### 移行の完了

主な役割: **移行ヴェロシティー マネージャー**
適用対象: **Exchange / OneDrive for Business / SharePoint**

お客様のデータが正常に移行されたことを検証し、撤退する前に クリーンアップ作業を 続行します。

#### FTOP タスク

| タスク ID | タスク名                                                                   | (M) (必須) / (O) (任意) |       FastTrack 役割       | サービス     |
| ------- | ------------------------ | :----------------------:| :------------------------:| --------------------------------------------- |
| 2544    | Exchange - メールフロー計画に基づいて MX レコードを変更する                     |            O             |     FastTrack エンジニア     | Exchange  |
| 1386    | Exchange - MX DNS レコード TTL を元の値にリセットする                        |            O             |     FastTrack エンジニア     | Exchange    |
| 1370    | Exchange - メール移行後の作業 (すべてのソース システム)   |            O             |     FastTrack エンジニア     | Exchange    |
| 2561    | OneDrive - OneDrive for Business の移行後の作業 (設定をリダイレクト) |            O             |     FastTrack エンジニア     | OneDrive for Business   |
| 2323    | Exchange - Domino の移行後の作業     |            O             | 
移行ヴェロシティー マネージャー | Exchange  |
| 1702    | 移行の終了:対象範囲内のすべての移行が完了しました    |            M             |     FastTrack マネージャー      | Exchange / OneDrive for Business / SharePoint |

### 未分類のタスク (移行)

主な役割: **-**
適用対象: **すべてのサービス**

FastTrack プレイブック フローに組み込まれていない、未分類の FastTrack オーケストレーション ポータル (FTOP)​ タスクがここに表示されます。

## 重要な情報

  - 移行ワークショップ
  - 移行のアンケートを参照してください。
  - お客様のインフラストラクチャの設定と構成が完了
  - 接続要件が満たされている
  - お客様から提供された認証情報
  - バッチ (CSV ファイル) をスケジュールしている​

## 主な結果

- お客様のデータの正常な移行

## 次のステップ

  - お客様を [適切な実行のサポート](success-support-success-execution-partner.md) に進めます。​
  - お客様を [適切なレビューの実施](success-conduct-success-review-partner-jp.md) に進めます。​

## 概要の更新

| 日付       | 変更者       | 変更内容          |
| ---------- | ----------------- | ----------------      |
| 2019 年 9 月 25 日 | Celia Kennedy     | パートナー コンテンツを更新 |
| 2018 年 5 月 2 日 | Celia Kennedy     | 廃止されたタスクを削除 |
| 2019 年 3 月 6 日 | Patric Grimwood   | 次のステップのリンクを更新 |
| 2019 年 2 月 26 日 | Patric Grimwood   | パートナー リンクを更新 |
| 12/11/2018 | Mark Eichenberger | プレイブックを作成      |

[ホーム](http://partner-docs.microsoft.com)
