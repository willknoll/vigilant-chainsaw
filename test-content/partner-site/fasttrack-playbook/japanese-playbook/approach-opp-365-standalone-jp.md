---
# required metadata
title: FastTrack Partner Playbook - Office 365 ProPlus Standalone Deployment
description: FastTrack Partner Playbook - Office 365 ProPlus Standalone Deployment
ms.author: maconcei
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

Office 365 ProPlus (OPP) の毎月のアクティブな使用量のプライマリ ドライバー
FY20 の (MAU) は Get Modern モーションになり、これには Windows 
7/8.1 から Windows 10* へのアップグレードおよび System Center を使用した Office 365 ProPlus の展開の両方が
含まれます。追加情報については、[Get Modern アプローチ](approach-get-modern-jp.md)を
ご覧ください。

FastTrack エンジニア向けに設計されたこのガイドは、
FastTrack マネージャーおよび OPP 専門家 (SME) のサポートを受けており、
**Windows 10​ への**アップグレードを行わずに*​ Office 365 ProPlus を展開する際の
指針となるものです。

## 目標 

このガイドの目的を以下に示します。

  - **お客様が組織内で最新のクラウド接続された
    Office クライアント アプリケーション**を展開して使用することを保証することは
    Office 2010の
    **サポート終了**の準備と**デジタル変革の過程において
    お客様のサポートを継続するために重要です。**

  - Microsoft は、Microsoft 365 を使用してお客様をクラウドに移行するため、
    Office 365 ProPlus は他社と競合するうえで戦略的な重要性を
    備えています。

## アプローチ

主な役割: **FastTrack エンジニア**
適用対象: **Office 365 ProPlus (Windows 10 へのアップグレードなし)**

エンゲージメントが遅延したり、ブロックされたり、
このプレイブックを実行するための追加のサポートが必要になった場合は、
[FastTrack リソース リクエスト ツール](https://aka.ms/FRPHubSMERequestProcess) を使用して、OPP SME をリクエストしてください。
専任の OPP 専門家によるこのチームは、
スケール モーションをサポートしますが、
FastTrack マネージャー、エンジニア、アーキテクトの役割に代わるものではありません。

### Office 365 ProPlus 技術調査と計画

調査ワークショップは、お客様が
Office 365 ProPlus の展開を検討し、計画できるようガイドします。ワークショップでは、
Office 365 ProPlus の展開にあたって考慮すべき重要なポイントをご説明します。この
ワークショップでは、お客様が考慮すべきポイントを特定するためのディスカッションを
行います。以下の調査ワークショップ デッキをご参照ください。
[https://aka.ms/FTAssessmentWorkshop](https://ftdocs-bcm.azureedge.net/public/en-us-o365-proplus-assessment-workshop-v1.pptx)。ワークショップの提供には、
Office 365 ProPlus の展開を担当する IT チームを含める必要があります。
お客様は、[Office 展開
ガイド](https://docs.microsoft.com/DeployOffice/deployment-guide-for-office-365-proplus) を参照することができ、
さらなるサポート リソースのために一貫性のある構造を使用できます。

### 展開準備チェックリストの作成

展開準備のアンケートとチェックリストを使用して、
FTC がサポートしているすべてのサービスの展開ガイドをお客様に提供します。
Government Community Cloud (GCC) High/Department of Defense (DOD)
バージョンは、GCC High/DOD のお客様に使用する必要があります。最新のコンテンツがあることを確認するには、
毎回新しいコピーをダウンロードしてください。最終的な
チェックリストを生成するには、まず適切なサービスの アンケート (タブ)に入力します。
対象範囲内にないサービスのガイドは、
最終的なチェックリストには表示されません。使用状況を追跡するには、
XLS の完成したコピーを以下にメールで送信してください。[d4cf4a2d.microsoft.com@amer.teams.ms](mailto:d4cf4a2d.microsoft.com@amer.teams.ms)

### 展開準備チェックリストでお客様のレビューと解決済みのものを確認する

詳細については、以下をご確認ください
[展開準備](phase-remediate-jp.md)。

### Office 365 ProPlus の展開

展開フェーズでは、調査の結果を使用して、識別されたパッケージを構築し、これらのパッケージを配信用に準備するようにお客様にガイドします。

お客様が Configuration Manager を使用してパッケージを展開する場合は、
Office 構成ツール ([https://config.office.com](https://config.office.com/)) または
Office 365 クライアント オプションを使用してパッケージ構成ファイルを
構築するようにお客様をガイドします。構成の設定は、
更新チャネル、言語など、調査アクティビティで行われた決定から
利用できます。

パッケージが構築された後、FastTrack は
お客様がターゲットとするユーザー グループにパッケージを展開する際のガイドを提供します。
お客様は、選択した展開ツールでパッケージを配布する責任が
あります。FastTrackは、このアクティビティを支援するためのガイドを提供
することができます。

FastTrack は引き続き展開を追跡し、
その後行われるセッションでお客様と共に進捗状況を確認して、
展開を継続できるようサポートします。

このアクティビティを円滑に進めるために展開ウィザードを使用することは
お勧めしません。

> [!NOTE]
> 特定のライセンス資格の詳細については
[FastTrack サービスの説明](https://docs.microsoft.com/en-us/fasttrack/m365-eligible-services-and-plans) をご覧ください。

## 概要の更新

| **日付**  | **変更者** | **変更内容** |
| --------- | --------------- | ---------------- |
| 2019 年 10 月 1 日 | Celia Kennedy       | プレイブック コンテンツ更新日 |

[ホーム](http://partner-docs.microsoft.com)
