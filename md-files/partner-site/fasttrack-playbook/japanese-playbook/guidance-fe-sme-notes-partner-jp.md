---
# required metadata
title: FastTrack Partner Playbook - FE/SME Notes Guidance
description: FastTrack Partner Playbook - FTOP Notes Guidance
author: Celia Kennedy
ms.author: v-cekenn
manager: pagrim
ms.date: 10/03/2019
ms.topic: partner-playbook
ms.prod: non-product-specific
ms.custom: partner-playbook
ft.audience: partner
ft.owner: partner
---

# FE / SME メモ ガイド

主な役割: **FastTrack エンジニア; FastTrack エンジニア SME**
適用対象: **すべてのサービス**

## 目標

FE および FE SME の役割は、お客様とのエンゲージメントの期間中、FastTrack オーケストレーション ポータル (FTOP) にメモを記録するために必要です。ビジネス価値についての話し合い (BVD)、技術的なワークショップ、サクセス ワークショップ、展開準備活動、有効化活動、およびその他のリングフェンス固有の活動を提供してエンゲージメントのステータスを確認する場合には、メモを記録する必要があります。このドキュメントでは、メモの頻度、場所、内容、および形式に関して、FE/SME に必要とされる内容について詳しく説明します。

## 頻度

メモは、FE/SME がお客様や社内の利害関係者とやり取りを行うたび、またはエンゲージメント関連の活動を行うたびに、FTOP に記録する必要があります。以下に例を示します。

- キックオフ ミーティング
- ビジネス価値についての話し合い
- 技術ワークショップ
- 調査活動
- 展開準備会議およびフォローアップの対策
- 有効化会議
- お客様への展開および関連する活動中のテストまたは再現

## 場所

FE/SME は、作業中のプレイブックの活動に最も貢献するワークロード追跡タスクを使用して、FTOP の**時間**入力セクションにメモの詳細を記録します。

リストに該当するワークロードがない場合は、コア オンボーディング時間タスクを使用します。複数のワークロードが適用される場合 (コンプライアンス センター、Outlook Mobile on Intuneなど) は、いずれかのメモを記録し、メモ エントリのプレフィックスを使用して他のメモを反映します。

[![サービス時間の入力](media/resources-core-onboarding-time.png)](media/resources-core-onboarding-time.png)

**例**

- ビジネス価値についての話し合いメモは、ワークロードの時間追跡タスクの下に記録されます。
- 特定のワークロードに適用される技術ワークショップおよび展開準備活動に関するメモは、ワークロードの時間追跡タスクの下に記録されます。
- テナントとライセンス、ネットワーク、クライアントとディレクトリの同期/認証など、特定のワークロードに直接関連しない活動に関するメモは、コア オンボーディング時間タスクの下に記録されます。

##メモ コンテンツと形式

各 FE/SME メモには、次の内容が含まれる必要があります。

**メモ エントリのテンプレート**

- 影響を受けるワークロード
- ステータス:エンゲージメントのステータスに関する簡潔な要約文
- 概要:やりとりの最中に行われた活動の概要を含める
- 次のアクション:次の活動とその実行が実施されるようスケジュール設定されている日時を定める
- 懸念事項:該当する場合、ここに懸念事項を挿入する

1. 影響を受けるワークロード各メモ エントリの先頭に、メモ エントリの最初の行で説明されているワークロードを追加します。

   **予想される形式**

   -  [EXO] Exchange Online
   -  [SPO] SharePoint Online
   -  [OD] OneDrive for Business
   -  [YAM] Yammer Enterprise
   -  [OPP] Office ProPlus
   -  [TEAMS] Teams	
   -  [INTUNE] Intune
   -  [AADP] Azure Active Directory Premium
   -  [MCAS] Microsoft Cloud App Security
   -  [AIP] Azure Information Protection
   -  [OLM] Outlook Mobile
   -  [PROJ] Project Online
   -  [WDATP] Windows Defender ATP
   -  [WIN10] Windows 10
   -  [SDS] Classroom / School Data Sync (SDS)
   -  [IDSEC] Identity Security
   -  [CORE] 上記のワークロードに該当しない場合
   -  [OLM+INTUNE] 複数の影響を受けるワークロードの例

2. ワークロードの技術ステータス:次のステータス選択のいずれかを含めます。

   **予想される形式**

- ステータス:エンゲージメントのステータスに関する簡潔な説明
   - 進行中
   - 一時停止
   - 保留中のお客様フィードバック
   - 保留中の FastTrack Center (FTC) または内部フィードバック

3. 活動の詳細の概要

   **予想される形式**

- 概要:活動の相互作用中に行われた活動の概要を含める

4. 次の活動 / 次の活動の日付

   **予想される形式**

- 次のアクション:予想される次の活動とその実行が実施されるようスケジュール設定されている日時

5. 懸念事項

   **予想される形式**

- 懸念事項:懸念事項の性質に関する詳細 (ファースト パーティのソフトウェア、サード パーティのソフトウェアまたはハードウェア、ビジネス 上の懸案事項、セキュリティ、プロジェクト リソース、または支援金)。

  注:ファースト パーティのソフトウェアに関する懸念事項が特定された場合は、対応する FTC Insight ID を参照する必要があります。

**メモの例**

- [コア]
- ステータス:展開プロセスを継続し、展開準備チェックリストのフォローアップ活動に現在取り組んでいます。
- 概要:展開準備チェックリストが提供された後、お客様との最初の会議を実施しました。ネットワーク チームが提供されたユニフォーム リソース ロケーター (URL) / インターネット プロトコル (IP) リストを確認して許可規則を作成していること、Active Directory (AD) 管理者がオンプレミスの AD でルーティング可能なユーザー プリンシパル名 (UPN) サフィックスをアドレス指定していること、サーバー チームが Azure AD Connect サーバー用の新しい仮想マシン (VM) をプロビジョニングしていることを、顧客が示すアクションアイテムの第一弾として確認しました。
- 次のアクション:毎週のタッチポイント会議をスケジュール設定して進捗を確認し、展開準備アイテムのステータスを同期しました。次回は 2019 年 4 月 30 日です。
- 懸念事項:お客様のネットワーク チームは、サードパーティのファイアウォールがワイルドカード URL ベースのルールセットをサポートしていない可能性があると報告しています。これは、広範なルールセット要件に基づく要件です。お客様は、アップグレード オプションが利用できない場合、支援金、調達、および展開を必要な入れ替えが必要になるため、展開が遅れると回答しています。

[![新しいメモ](media/resources-new-note.png)](media/resources-new-note.png)

### 概要の更新

|日付|変更者|変更内容|メモ|
|---------|---------------|----------------------------|-------------|
|2019 年 9 月 27 日| Celia Kennedy| パートナー プレイブック更新| |

[ホーム](http://partner-docs.microsoft.com)