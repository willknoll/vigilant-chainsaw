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

# サービスを有効にする

フェーズ: **有効にする**

## 概要

[サービスを有効にする] プロセスでは、消費、移行、およびサービスを有効にするメリットを体験するための サービス構成をお客様にガイドします。

## 目標

  - プロビジョニングと同期が構成され、アクティブになっていることを確認します。
  - 対象となるワークロードはテナントで構成され、
    使用可能です。
  - パイロット ユーザーは移行され、サービスを使用します。

## アプローチ

### 移行ヴェロシティー マネージャーをリクエストする

主な役割: **FastTrack マネージャー**
適用対象: **Exchange / SharePoint / OneDrive for Business**

移行ヴェロシティー マネージャー (MVM) がリクエストされていない場合は、調査フェーズの (タスク 2278 のリクエスト MVM) の​割り当てに記載されている要求プロセスに従って、MVM をリクエストします。

### 有効化のサポート

主な役割: **FastTrack マネージャー**
適用対象: **すべてのサービス**

必要に応じてお客様との会議を定期的に実施し、有効化タスクを支援します。

#### FTOP タスク

| タスク ID | タスク名                                                                  | (M)(必須) / (O) (任意) |       FastTrack 役割       | サービス                                      |
| ------- | -------------------------------------------------------------------------- | :----------------------:| :------------------------:| --------------------------------------------- |
| 1126    | コアとサービスを有効にするために、お客様の PM およびテクニカル リードとミーティングする  |            M             |     FastTrack エンジニア     | すべてのサービス                                  |
| 1672    | プロジェクト サイトで移行アンケートを確認、検証、および共有する |            M             | 移行ヴェロシティー マネージャー| Exchange / OneDrive for Business / SharePoint |

### 有効化タスクの実行

主な役割: **FastTrack エンジニア**
適用対象: **すべてのサービス**

必要に応じて、各サービスの有効化タスクに従います。一部のサービス タスク では、

  - パブリック ウィザードにリンクする場合があります
  - 追加のガイド ドキュメントにリンクする場合があります
  - 移行のメリットを利用する場合に 必要な場合があります

#### FTOP タスク

| タスク ID | タスク名                                                                                                | (M) (必須) / (O)  (任意) |       FastTrack 役割       | サービス   |
| ------- | ----------------------------------------------- | :----------------------:| :------------------------:| ------------------------------------------------------------------ |
| 4024    | Windows 7/8.1 から windows 10 へのアップグレード  |            M             |     FastTrack エンジニア     | Windows 10                                   |
| 4022    | System Centerを 使用した Office 365 ProPlus の展開      |            M             |     FastTrack エンジニア     | Windows 10        |
| 4031    | System Center を使用して Windows 10 および Office の更新プログラムの配信を最適化する     |            O             |            SME             | Windows 10     |
| 4032    | System Center を使用した Windows 10 の段階的な展開    |            O             |            SME             | Windows 10                 |
| 4033    | System Centerを 使用した Office 365 ProPlusの段階的な展開     |            O             |            SME             | Windows 10         |
| 3992    | MVM からオンボードのお客様へ   |            O             | 移行ヴェロシティー マネージャー | Exchange / OneDrive for Business / SharePoint   |
| 2474    | 移行ツールの構成を検証し、テスト移行を実行する    |            M             | 移行ヴェロシティー マネージャー | Exchange / OneDrive for Business / SharePoint    |
| 3126    | OneDrive - 移行しない場合は、ODB 同期クライアントをインストールする。それ以外の場合は、移行後にクライアントをインストールする|   O     |     FastTrack エンジニア     | OneDrive for Business   |
| 3147    | OneDrive - {ウィザード} OneDrive for Business を構成する  |            M             |     FastTrack エンジニア     | OneDrive for Business                                             |
| 3125    | SharePoint/OneDrive - ユーザーに SPO または ODB のライセンスが割り当てられていることを確認する       |            O             |     FastTrack エンジニア     | SharePoint / OneDrive for Business     |
| 1235    | SharePoint - {ウィザード} 構成 SharePoint Online   |            M             |     FastTrack エンジニア     | SharePoint   |
| 3222    | SharePoint - {ウィザード} SharePoint Hybrid を構成する      |            O             |     FastTrack エンジニア     | SharePoint   |
| 1158    | Exchange - EXO を構成する  |            M             |     FastTrack エンジニア     | Exchange     |
| 3223    | EDU:Classroom & SDS の有効化    |            O             |     FastTrack エンジニア     | Classroom/SDS     |
| 3306    | 移行インフラストラクチャの構築/サービスのリクエスト   |            M             | 移行ヴェロシティー マネージャー | Exchange / OneDrive for Business / SharePoint     |
| 3677    | Exchange - Gmail / GroupWise の移行:ODME を構成する   |            O             | 移行ヴェロシティー マネージャー | Exchange       |
| 1941    | Exchange - アドレス ポリシーを適用し、新規 / オリジナルの SMTP アドレスがプロキシ アドレスとしてリストされていることを検証する |   O    |     FastTrack エンジニア     | Exchange        |
| 1159    | Exchange - {ウィザード} 構成 EXO のメール フロー   |            O             |     FastTrack エンジニア     | Exchange    |
| 3687    | Teams - Core Plus のサポート  |            M             |     SME      | Teams      |
| 1171    | Exchange - {ウィザード} IMAP 移行のセットアップ   |            O             |     FastTrack エンジニア     | Exchange      |
| 3311    | Exchange - Notes の移行:バッチのスケジュールのインポートに関する「自動インポート ツール」のガイド  |   O   | 移行ヴェロシティー マネージャー | Exchange     |
| 3160    | Exchange - {ウィザード} Exchange 最小ハイブリッド    |            O             |     FastTrack エンジニア     | Exchange |
| 3159    | Exchange - {ウィザード} Exchange 2016 ハイブリッド   |            O             |     FastTrack エンジニア     | Exchange       |
| 3158    | Exchange - {ウィザード} Exchange 2013 ハイブリッド  |            O             |     FastTrack エンジニア     | Exchange     |
| 3157    | Exchange - {ウィザード} Exchange 2010 ハイブリッド    |            O             |     FastTrack エンジニア     | Exchange      |
| 3156    | Exchange - {ウィザード} Exchange 段階的移行    |            O             |     FastTrack エンジニア     | Exchange   |
| 3155    | Exchange - {ウィザード} Exchange カットオーバー移行   |            O             |     FastTrack エンジニア     | Exchange      |
| 1240    | Yammer - {ウィザード} Yammer を構成する  |            M             |     FastTrack エンジニア     | Yammer     |
| 3727    | Teams - 通話品質ダッシュボード ワークショップの提供 |            M             |            SME             | Teams      |
| 3725    | Teams - コア共同作業と会議を構成する (VOIP)  |            M             |            SME             | Teams  |
| 3724    | Teams - 高度な音声サービスを構成する (PSTN)   |            M             |            SME             | Teams     |
| 3728    | Teams - Teams のサービスを技術的に有効化する  |            M             |     FastTrack マネージャー      | Teams    |
| 2218    | Intune - Microsoft Intune を有効化する  |            M             |            SME             | Intune   |
| 2217    | Intune - Office 365 のモバイル デバイス管理を構成する                                               |            O             |     FastTrack エンジニア     | Intune    |
| 3682    | Intune - Intune の共同管理を有効にする    |            O             |     FastTrack エンジニア     | Intune       |
| 2415    | AADP - {ウィザード} AADP コアを構成する  |            O             |     FastTrack エンジニア     | AADP         |
| 1247    | Office 365 ProPlus の展開   |            M             |     FastTrack エンジニア     | Office ProPlus    |
| 1641    | カスタム ドメインのセットアップ   |            M             |     FastTrack エンジニア     | コア オンボーディング   |
| 1141    | {ウィザード} ディレクトリ同期のセットアップ (Azure AD Connect)    |            O             |     FastTrack エンジニア     | コア オンボーディング   |
| 1148    | {ウィザード} ADFS のインストールと構成    |            O             |     FastTrack エンジニア     |  コア オンボーディング    |
| 1134    | クラウド ID の作成  |            O             |     FastTrack エンジニア     | コア オンボーディング |
| 3267    | Outlook Mobile - Outlook Mobile を構成する |            M             |     FastTrack エンジニア     | Outlook Mobile   |
| 3161    | Power BI - Power BI を構成する   |            O             |     FastTrack エンジニア     | PowerBI    |
| 2461    | ウィジェットにエンゲージメント中に PowerBI のお客様に対処する - 詳細を確認する   |            O             |     FastTrack エンジニア     | PowerBI   |
| 2570    | PSTN 通話を持つクラウド PBX を構成する  |            O             |     FastTrack エンジニア     | Skype for Business - PSTN 通話 / Skype for Business - クラウド PBX |
| 2201    | SfB - SfB 分割ドメイン Lync 2010/2013 サーバーを構成する   |            O             |     FastTrack エンジニア     | Skype for Business    |
| 2567    | SfB - SfB 2015 サーバーの SfB 分割ドメインを構成する   |            O             |     FastTrack エンジニア     | Skype for Business    |
| 2260    | SfB - SfB Room System アカウントを構成する   |            O             |     FastTrack エンジニア     | Skype for Business   |
| 2980    | SfB - {ウィザード} Skype for Business の標準機能を構成する     |            O             |     FastTrack エンジニア     | Skype for Business   |
| 3047    | クラウド PSTN 会議を構成する  |            O             |     FastTrack エンジニア     | Skype for Business - PSTN 会議    |
| 2483    | Project Professional を構成する |            M             |     FastTrack エンジニア     | Project       |
| 2266    | SfB - Skype for Business のコア機能を構成する (IM/P のみ)     |            O             |     FastTrack エンジニア     | Skype for Business   |
| 3999    | MIP - テナントを有効にし、テスト クライアントを構成する  |            M             |            SME             | AIP    |
| 2491    | Project Online / Project Lite を構成する  |            M             |     FastTrack エンジニア     | Project    |
| 4000    | MIP - 分類システムを作成する   |            O             |            SME             | AIP  |
| 3954    | 移行ドキュメントの構成を検証し、テスト移行を実行する  |            O             | 移行ヴェロシティー マネージャー | Exchange / OneDrive for Business / SharePoint |
| 4001    | MIP - ドキュメントにラベル付けする   |            O             |            SME             | AIP  |
| 4002    | MIP - 情報保護を適用する     |            O             |            SME             | AIP   |
| 4003    | MIP - クライアントをインストールする   |            M             |            SME             | AIP   |
| 4004    | MIP - その他の機能をインストールする |            O             |            SME             | AIP   |
| 4005    | MIP - アクセス ログを確認する  |            O             |            SME             | AIP  |
| 4006    | スキャナーを操作する   |            O             |            SME             | AIP  |
| 4081    | OATP – P1 設定を構成する  |            O             |     FastTrack エンジニア     | Exchange / OATP   |
| 4082    | OATP – P2 の機能を確認する  |            O             |            SME             | Exchange / OATP  |
| 4083    | MDATP – 設定を構成する  |            M             |            SME             | MDATP   |

### Teams - Skype から Teams への移行

主な役割: **SME**
適用対象: **Teams**

お客様が Teams SME または FastTrack 対応パートナーから **ミッドタッチのプロアクティブなエンゲージメントのために Skype から Teams への移行のサポートを受けている場合、(2,000 から 10,000 人のアクティブな SfBO ユーザーをお持ちのお客様)** は、
以下のタスクを使用してエンゲージメントの現在のステータスを確認してください。

**アクティブな SfBO ユーザーが 2,000 人未満または 10,000 人のお客様については**、SfBO から Team への移行に関する役割と責任に関する以下の追加ガイドの スライド ６ をご確認ください [**役割と 責任に関するデッキ**。](https://aka.ms/FTCTeamsRnRs)

**FastTrack 対応パートナー様**​​ – お客様の 移行をリードしている場合は、担当の SME に引き続き エンゲージメントの詳細を通知し、SME がお客様に代わってタスクのステータスを追跡できるようにします。対象の Teams のみに日付とお客様のステータスを提供します。​
 
#### FTOP タスク

| タスク ID | タスク名                                     | (M)(必須) / (O)(任意) |   FastTrack 役割   | サービス |
| ------- | --------------------------------------------- | :----------------------:| :----------------:| -------- |
| 3685    | Teams - 内部準備調査         |            M             | FastTrack エンジニア | Teams    |
| 3716    | Teams - お客様のアップグレードの概要             |            M             |        SME         | Teams    |
| 3688    | Teams - お客様戦略および計画        |            M             |        SME         | Teams    |
| 3689    | Teams - お客様のアップグレード                    |            M             |        SME         | Teams    |
| 3722    | Teams - MIDタッチのリアクティブな移行サポート |            M             |        SME         | Teams    |

### お客様アンケートの資格要件

主な役割: **FastTrack マネージャー**
適用対象: **すべてのサービス**

該当するタスクの利用資格および連絡先について、お客様アンケート情報を 更新します。

#### FTOP タスク

| タスク ID | タスク名               | (M) (必須) / (O) (任意) |  FastTrack 役割   | サービス     |
| ------- | ----------------------- | :----------------------:| :---------------:| ------------ |
| 3690    | アンケート担当者の特定      |            O             | FastTrack マネージャー | すべてのサービス |

### すべての対象となるサービスが有効

主な役割: **FastTrack マネージャー**
適用対象: **すべてのサービス**

お客様を移行フェーズに移動し、適切なタスクを完了します。

#### FTOP タスク

| タスク ID | タスク名                                                                      | (M) (必須) / (O) (任意) |  FastTrack 役割   | サービス     |
| ------- | ------------------------------------------------------------------------------ | :----------------------:| :---------------:| ------------ |
| 1701    | 有効化の完了:スコープに含まれるすべてのサービスが有効;移行ツールが構成済み                      |            M             | FastTrack マネージャー | すべてのサービス |

### エンタープライズ追加のメリットの有効化

主な役割: **FastTrack エンジニア**
適用対象: **すべてのサービス**

20,000以上の座席を持つ承認されたエンタープライズのお客様の場合のみ、または 例外があります。

#### FTOP タスク

| タスク ID | タスク名                                                 | (M) (必須) / (O) (任意) |   FastTrack 役割   | サービス        |
| ------- | --------------------------------------------------------- | :----------------------:| :----------------:| --------------- |
| 3241    | AD FS のクライアント アクセス ポリシーを構成する                    |            O             | FastTrack エンジニア | コア オンボーディング |
| 3243    | 地理的冗長性 ADFS 構成ガイド                 |            O             | FastTrack エンジニア | コア オンボーディング |
| 3212    | Exchange - メール対応アプリケーション統合ガイド |            O             | FastTrack エンジニア | Exchange        |
| 3213    | Exchange - Exchange パブリック フォルダーの共存の有効化  |            O             | FastTrack エンジニア | Exchange        |
| 3238    | Exchange - Lync/SfB 統合の有効化                    |            O             | FastTrack エンジニア | Exchange        |

### お客様アンケートの資格要件

主な役割: **FastTrack マネージャー**
適用対象: **すべてのサービス**

該当するタスクの利用資格および連絡先について、お客様アンケート情報を 更新します。

#### FTOP タスク

| タスク ID | タスク名               | (M) (必須) / (O) (任意) |  FastTrack 役割   | サービス     |
| ------- | ----------------------- | :----------------------:| :---------------:| ------------ |
| 3690    | アンケート担当者の特定      |            O             | FastTrack マネージャー | すべてのサービス |

### すべての対象となるサービスが有効

主な役割: **FastTrack マネージャー**
適用対象: **すべてのサービス**

お客様を移行フェーズに移動し、適切なタスクを 完了します。

#### FTOP タスク

| タスク ID | タスク名                                                                      | (M) (必須) / (O) (任意) |  FastTrack 役割   | サービス     |
| ------- | ------------------------------------------------------------------------------ | :----------------------:| :---------------:| ------------ |
| 1701    | 有効化の完了:スコープに含まれるすべてのサービスが有効;移行ツールが構成済み                      |            M             | FastTrack マネージャー | すべてのサービス |

### 未分類タスク ( サービスの有効化)

主な役割: **-**
適用対象: **すべてのサービス**

FastTrack プレイブック フローにまだ組み込まれていない 未分類タスクはこのセクションに 表示されます。

#### FTOP タスク

| タスク ID | タスク名                | (M) (必須) / (O) (任意) |   FastTrack 役割   | サービス |
| ------- | ------------------------ | :----------------------:| :----------------:| -------- |
| 2550    | {ウィザード} AzRMS を構成する |            O             | FastTrack エンジニア | AIP      |

## 重要な情報

  - 展開準備チェックリストからの必要なタスクはすべて完了してしました。 
  - お客様は ID を理解し、展開準備を完了します。 
  - お客様のオンプレミス環境は、クラウド サービス (ハイブリッドの共存環境を含む) を使用できるように修正/構成されます。
  - お客様はサービスの利用を始める準備ができています。 

## 主な結果

  - 必要なすべてのワークロードが構成され、使用できるようになります。 
  - パイロット ユーザーが有効になり、移行されます。 

## 次のステップ

  - 必要に応じて [適切な実行のサポート​](success-support-success-execution-partner.md) プロセスで追加のワークロードの導入/使用を促進します。
  - [サービス ステータスを導入または移行に更新する
  
[ホーム](http://partner-docs.microsoft.com)

## 概要の更新

| 日付       | 変更者       | 変更内容          |
| ---------- | ----------------- | ----------------      |
| 2019 年 09 月 5 日  | Celia Kennedy     | パートナー コンテンツを更新  |
| 2018 年 5 月 3 日  | Celia Kennedy     | 廃止されたタスクを削除  |
| 2019 年 3 月 6 日 | Patric Grimwood   | 次のステップのリンクを更新 |
| 2019 年 2 月 26 日 | Patric Grimwood   | パートナー リンクを更新 |
| 2018 年 10 月 26 日 | Mark Eichenberger | プレイブックを作成      |

[ホーム](http://partner-docs.microsoft.com)
