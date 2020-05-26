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

# Office 365 ProPlus スタンドアロン展開

## 概要

FY20 の Office 365 ProPlus MAU のプライマリ ドライバーは、Get Modern モーションです。これには、Windows 7/8.1 から Windows 10 への更新と、System Center を使用した Office 365 ProPlus の展開の両方が含まれます。

このガイドは、FastTrack マネージャー と OPP SME のサポートを受けた FastTrack エンジニアを対象に設計されており、Windows の更新を行わずに Office 365 ProPlus を展開する方法をご案内します。

**場合によっては、関連するトピックが完全に対処または展開準備されている場合、手順を省略できます。**

## 目標

このプレイブックの目的を以下に示します。

  - **お客様が Office 365 ProPlus を展開している場所に合わせた手順の使用。** 場合によっては、関連するトピックが完全に対処または展開準備されている場合、手順を省略できます。
    テストされていない展開からのサポート ケースを防ぐために、パイロットをお勧めします。

  - **お客様が組織内の 70% 以上で最新のクラウド接続された Office クライアント アプリケーションを展開して使用することを保証することは**、Office 2010のサポート終了の準備とデジタル変革の過程においてお客様をサポートし続けるために重要です。

  - Microsoft は、Microsoft 365 を使用してお客様をクラウドに移行するため、Office 365 ProPlus は他社と競合するうえで戦略的な重要性を備えています。

## Office 365 ProPlus のワークフロー

[![office-proplus-complete-processv3](media/office-proplus-complete-processv3.png)

## プレイブックのプロセス

- [サービス ワークショップの実施](assess-conduct-services-workshops-partner-jp.md)
- [導入と変更管理に関するお客様との会話の実施](assess-conduct-adoption-and-change-management-conversation-partner-jp.md)
- [技術調査の実施](assess-conduct-technical-assessment-partner-jp.md)
- [サービスを有効にする](enable-enable-services-partner-jp.md)

## 展開

主な役割: **FastTrack エンジニア**
適用対象: **Office 365 ProPlus (Windows 10 へのアップグレードなし)**

エンゲージメントが遅延したり、ブロックされたり、このプレイブックを実行するために追加のサポートが必要になった場合は、いつでも [FastTrack リソース リクエスト ツール](https://aka.ms/FRPHubSMERequestProcess) を使用して OPP SME をリクエストしてください。
この専任の OPP 専門家チームは、スケール モーションをサポートしますが、FastTrack マネージャー、エンジニア、アーキテクトの役割に代わるものではありません。

### 1. Office 365 ProPlus 技術調査と計画

調査ワークショップでは、Office 365 ProPlus の展開を把握して計画できるようお客様をガイドします。ワークショップでは、Office 365 ProPlus の展開にあたり考慮すべき重要なポイントについて説明します。ワークショップでは、お客様が考慮すべきポイントを特定するための話し合いを行います。[調査ワークショップ デッキ](https://fasttrack-docs.microsoft.com/collateral/M365-O365-O365ProPlus.html#assessment-workshop) を使用します。このワークショップには、Office 365 ProPlus の展開を担当する IT チームを含める必要がありますお客様は [Office 365 展開ガイド](https://docs.microsoft.com/DeployOffice/deployment-guide-for-office-365-proplus) に移動し、さらなるサポート リソースのための一貫性のある構造を使用できます。

### 2. 導入と変更管理の会話

FastTrack マネージャーは、必要に応じて ACM ガイドを使用して、お客様が Office 365 ProPlus を展開しているエンド ユーザーに通知するための関連資料を確実に入手できるようにする必要があります。OPP BVD またはオブジェクト ハンドラーを使用して、以前のバージョンと比較した Office 365 ProPlus の利点に関する誤解に対処します。このディスカッションは、必要に応じて、展開の後半で使用して、お客様が行き詰まった場合に再び先に進めることができます。

### 3. Office 向け Readiness Toolkit の調査
 
### 4. SCCM またはスタンドアロンを介した ORTは、お客様が実行して、64 ビット Office 365 ProPlus と互換性のないカスタムまたはサードパーティのマクロまたはアドインを評価する必要があります。FastTrack エンジニアは、これらの結果を確認して、影響を受ける可能性のある ビジネス クリティカル プロセスを特定する必要があります。必要に応じて SME に相談し、ORT ツールが完了したことを確認したり、追加の展開準備オプションを特定したりします。

### 5. 展開準備チェックリストの作成

展開準備のアンケートとチェックリストを使用して、FTC がサポートしているすべてのサービスの展開ガイドをお客様に提供します。GCC High/DOD のお客様には、Government Community Cloud (GCC) High/Department of Defense (DOD) バージョンを使用する必要があります。最新のコンテンツがあることを確認するには、毎回新しいコピーをダウンロードしてください。最終的なチェックリストを生成するには、まず適切なサービスのアンケート (タブ) に入力します。対象範囲内にないサービスのガイドは、最終的なチェックリストには表示されません。使用状況を追跡するには、XLS の完成したコピーを以下のアドレスにメールで送信してください。: [d4cf4a2d.microsoft.com@amer.teams.ms](mailto:d4cf4a2d.microsoft.com@amer.teams.ms)

### 6. 展開準備チェックリストでお客様のレビューと解決済みのものを確認する

詳細については、[展開準備](phase-remediate-jp.md) をご確認ください

### 7. Office 365 ProPlus の展開

展開フェーズでは、調査の結果を使用して、識別されたパッケージを構築し、これらのパッケージを配信用に準備するようにお客様にガイドします。

お客様が Configuration Manager を使用してパッケージを展開する場合は、Office 構成ツール ([https://config.office.com](https://config.office.com/)) または Office 365 クライアント オプションを使用してパッケージ構成ファイルを構築するようにお客様をガイドします。構成の設定は、更新チャネル、言語など、調査アクティビティで行われた決定から使用できます。

パッケージが構築された後、FastTrack はお客様が対象ユーザー グループにパッケージを展開する際のガイドを提供します。お客様は、選択した展開ツールでパッケージを提供する責任があります。FastTrack は、このアクティビティを支援するためのガイドを提供できます。

FastTrack は引き続き展開を追跡し、その後行われるセッションでお客様と共に進捗状況を確認して、展開を継続できるようサポートします。

このアクティビティを円滑に進めるために展開ウィザードを使用することはお勧めしません。

## 時間の短縮

主な役割: **FastTrack エンジニア**
セカンダリ役割: **FastTrack マネージャー、SME、GM FTA、OPP Ranger**
適用対象: **Office 365 ProPlus (Windows 10 へのアップグレードなし)**
 
**加速:** 現在展開中のお客様、または展開を停止しているお客様、および FastTrack のサポートが必要なお客様です。お客様はおそらく展開計画を持っていましたが、何かがうまくいかなかったか、優先順位を変更しました。
 
FastTrack は引き続き展開を追跡し、その後行われるセッションでお客様と共に進捗状況を確認して、展開を継続できるようサポートします。70% MAU に達するまで、お客様は「正常」または完全に展開されているとは見なされません。

\*3 か月で成長率が 3% 未満 (および 70% 未満) に低下した顧客は、OPP SME からのフォローアップをトリガーして、成長が加速されるようにすることができます。この時点で、FM、FE、および SME はお客様のステータスについて話し合って、お客様を軌道に戻す方法を理解する必要があります。

1.MAU が停止した理由を特定し、対応するアクションプランに従ってください

  - 技術的障害
    
    1. まだ関与していない場合は、OPP SME を開始してサポートします
    
    2. 既知のソリューションと Get Modern SME コミュニティに対する顧客の障害を選別します
    
    3. お客様と協力して障害を解決します
        
        -  必要に応じて FTC インサイトを作成します
        
        -  アドインまたはパフォーマンスの問題について App Assure を利用します
    
    4. 障害を解決できない場合は、エンゲージメント管理のメモに障害を記録し、L1 をブロックに更新します

  - 導入/変更管理の障害
    
    1. 特定の障害の特定と解決に役立つミニ ACM ワークショップ

  - お客様のリソースの障害
    
    1. より詳細な ACM が必要な場合は、ACM クイックリードにルーティングします (関連するタスク ガイドを参照)。

- 低下した優先度をお客様から回復します
    1. 接続されている場合は GM FTA を利用します

    2. ATS/ATU のエンゲージメント

1. Office 365 ProPlus の更新 - 以前に停止した状態からお客様を先に進めるために加速作業が実行された場合の OPP アクセラレーター タスク。このタスクは、Office 365 ProPlus の展開を 70% 以上の MAU に維持するための継続的な取り組みを追跡するのに使用されます。

#### FTOP タスク

| タスク ID| タスク説明| (M) 必須 (O) オプション| FastTrack の役割|
| ----------------------------------------------| --------------------------------------------------------------------------------| --------------------------| --------------|
| 3080| Office 365 ProPlus 調査ワークショップ| M| FE は|
| 3738| Office 365 ProPlus - ピッチ デッキの提供| M| FM|
| 3070| 展開準備チェックリストの作成| M| FE は|
| 3190| 展開準備チェックリストでお客様のレビューと解決済みのものを確認する| M| FE は|
| 1247| Office 365 ProPlus の展開| M| FE は|
| 3650| Office 365 ProPlus – OPP の加速| O| FM|

## 重要な情報

  - お客様に Office 365 ProPlus を展開する意思がある

## 主な結果

  - Office 365 ProPlus の展開の完了

## 次のステップ

  - AU が 70% を超えるまで、引き続きお客様をサポートします。

## 収集されたデータ

| データ フィールド/共通名| このプロセスに必要| 最初に FTOP に入る|
| --------------------------------| -------------------------| -----------------------|
| L1 – 使用ステータス| する| する|
| L2 – 利用可能者数| する| する|
| エンゲージメント シナリオ| する| する|
| エンゲージメント管理メモ (FM)| する| する|
| 技術有効化メモ (FE)| する| する|
| エンタープライズ メモ (FTA)| しない| する|

> [!NOTE]
> 特定のライセンス資格の詳細については [FastTrack サービスの説明](https://docs.microsoft.com/en-us/fasttrack/m365-eligible-services-and-plans) をご覧ください。

## 概要の更新

|日付|変更者|変更内容|
|---------|---------------|----------------------------|
|04/30/2020| Celia Kennedy| 全般メンテナンス|
|03/25/2020| Celia Kennedy| 全般メンテナンス|
|10/01/2019| Celia Kennedy| 全般メンテナンス|

[ホーム](http://partner-docs.microsoft.com)
