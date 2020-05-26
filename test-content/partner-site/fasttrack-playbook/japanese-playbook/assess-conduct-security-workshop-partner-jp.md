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
# セキュリティ ワークショップの実施

フェーズ: **調査**

## 概要

セキュリティワークショップの実施プロセスは、FastTrack Center (FTC) とお客様との間で、エンゲージメントの中心にセキュリティのある状態で関係を継続します。これは FTC が引き続きお客様と連携して、お客様が望むセキュリティ態勢を定義し、達成できるようにする場所です。

## 目標

  - ID、デバイス、および情報セキュリティに関してお客様の現在のセキュリティ態勢を調査します。
  - お客様は、組織のデジタル資産をセキュリティで保護するために何が利用できるか、また、セキュリティの懸念に関して日常的に調査を実施する方法を理解します。
  - お客様は、適用可能なセキュリティ機能を有効にして、デジタル資産を保護します。

## アプローチ

### ID セキュリティ

主な役割: **SME**
適用対象: **AADP**

ID のセキュリティ保護は非常に重要であり、セキュリティ ベースラインの確立の一環として対処する必要があります。AADP を介して利用できる ID セキュリティの種類をお客様が明確に理解し、ユーザーの資格情報の侵害を回避し、それらのユーザーがお客様のニーズとセキュリティのベスト プラクティスに従って管理されるようにする必要があります。

  - お客様およびシナリオの最新の認証オプションを確認する
  - お客様が、条件付きアクセス (CA)、多要素認証 (MFA)、シングル サインオン (SSO) などの AADP 機能を使用して利用できるコントロールを理解していることを確認します。  
  - AADP 機能の概要、導入キット、デモを共有する
  
### Azure AD Premium 機能デッキ

[ここ](https://aka.ms/FRPFTOPTask2533WorkshopLocalized) をクリックして、Azure AD Premium スイートの特定の機能の価値に焦点を当てるために使用できる、FastTrack で現在サポートされているすべての Azure AD Premium 機能へのリンクを検索します。

お客様が特定の機能に関心を持っている場合は、これらの機能デッキを提示または共有して、すばやく大まかな概要を確認し、リソースにアクセスして詳細を確認できます。

#### FTOP タスク

| タスク ID| タスク名| (M) 必須 (O) オプション| FastTrack の役割| サービス|
| -------| ------------------------------| :----------------------: | :------------: | --------|
| 2533| Azure AD Premium 技術的なワークショップ|            M|      SME| AADP|

### デバイス セキュリティ

主な役割: **SME**
モーション: **お客様の状態 / RFA / ターゲティング**
適用対象: **Intune / MDATP / Windows 10**

お客様がデータを保護できるように支援しながら、選択したデバイスとアプリで従業員の生産性を維持します。モバイル デバイス管理 (MDM) は統合されたデータ保護とコンプライアンス機能を提供して異なるユーザーがどのデータにアクセスできるか、また Office やその他のモバイル アプリ内のデータに対してどのような操作を実行できるかを正確に処理します。

  - お客様が管理および保護しようとしているさまざまなプラットフォームを理解する
  - アプリケーション、データ、およびデバイスを保護する包括的なポリシーを定義する

[Microsoft Defender Advanced Threat Protection (MDATP)](https://docs.microsoft.com/en-us/windows/security/threat-protection/microsoft-defender-atp/microsoft-defender-advanced-threat-protection) は、統合されたエンドポイント セキュリティ プラットフォームで、予防的保護、侵害後の検出、および自動調査と対応を目的としています。

対象範囲内の機能: **脅威脆弱性管理 (TVM)** では、リスクベースのアプローチを使用して、発見、優先順位付け、展開準備を行ってエンドポイントの脆弱性と誤った構成に対応します。**攻撃面の減少 (ASR)** により、危険または不要な面を排除し、危険なコードの実行を制限します。**次世代の保護**は、機械学習と詳細解析を活用してファイルベースおよびファイルレスのマルウェアから保護します。**エンドポイントでの検出と対応 (EDR)** は、動作と攻撃者の手法を監視し、高度な攻撃を検出して対応します。**自動調査と展開準備** では、人工知能を活用して、アラートを自動的に調査し複雑な脅威を数分で修正できます。**セキュリティ態勢** では、リアルタイムの可視性が得られ、お客様のセキュリティ スコアを向上します。

#### FTOP タスク

| タスク ID| タスク名| (M) 必須 (O) オプション|  FastTrack の役割| サービス|
| -------| -------------------------------------------------------| :----------------------: | :---------------: | ----------|
| 2460| Intune - Microsoft Intune ワークショップの実施|            M| FastTrack マネージャー| Intune|
| 4084| Intune - Microsoft の最新の管理調査の実施|            M|        SME| Intune|
| 4079| [MDATP ビジネス価値デッキ](https://aka.ms/mdatp-oatp-bvd)|            M| FastTrack マネージャー| MDATP|
| 4078| MDATP – MDATP をサードパーティの AV の上に配置|            M|        SME| Windows 10|
| 4085| MDATP BVD の提供|            O|        SME| Intune|

### 情報セキュリティ

主な役割: **FastTrack エンジニア**
適用対象: **Exchange / OneDrive for Business / Outlook Mobile /
SharePoint**

顧客情報またはデータのセキュリティ保護は、セキュリティ ベースラインを確立するための重要な要件です。お客様は、機密性の高い最も価値のあるデジタル資産をクラウドに移行する前に、機密データのセキュリティを確保するために必要な情報の分類と保護について明確に理解しておく必要があります。

  - お客様が保護する情報を特定する
  - アクセス、保存、情報保護ポリシーを決定し確立する

#### FTOP タスク

| タスク ID| タスク名| (M) 必須 (O) オプション|   FastTrack の役割| サービス|
| -------| ----------------------------------------------| :----------------------: | :----------------: | ---------------------------------------------|
| 3747| Exchange Online Protection ワークショップ|            M| FastTrack エンジニア| Exchange|
| 3748| データ損失の防止ワークショップ|            O| FastTrack エンジニア| Exchange/OneDrive for Business/SharePoint|
| 3749| Office 365 O365 Message Encryption ワークショップ|            O| FastTrack エンジニア| Exchange|
| 3750| [Office 365 Advanced Threat Protection ワークショップ](https://aka.ms/mdatp-oatp-bvd)|            O| FastTrack エンジニア| Exchange|
| 3997| [MIP ワークショップ](https://aka.ms/PartnerMIPWorkshopDeck)|            M| FastTrack マネージャー| AIP|

## 重要な情報

  - M365 のセキュリティに関する会話が完了
  - 安全に展開するタスクが完了

## 主な結果

  - お客様は、ライセンスに該当する、Exchange Online Protection および Azure Information Protection、Azure Active Directory 設定および Azure Information Protection を有効にします。
  - お客様は、セキュリティとコンプライアンスに関連する組織ポリシーに従って、追加機能を有効にします。
  - お客様が有効にする予定のない領域とその理由を文書化します。

## 次のステップ

  - オンボードする特定のワークロードに基づいて、[サービス ワークショップの実施](assess-conduct-services-workshops-partner-jp.md) に進みます。  
  - ワークショップが不要な場合は、[技術的なギャップに対処する​](remediate-address-technical-gaps-partner-jp.md) に進みます。

## 概要の更新

| 日付| 変更者| 変更内容|
| ---------| -------------| -------------------------------|
| 04/30/2020| Celia Kennedy| 全般メンテナンス|
| 01/03/2020| Celia Kennedy| デバイスのセキュリティを更新、タスク 4079 および 3750 の BVD を追加|
| 10/18/2019| Celia Kennedy| パートナー プレイブックの更新|
| 7/26/2019| Rosie Arrieta| デバイスと ID のステップを追加|
| 5/31/2019| Rosie Arrieta| プロセス公開|

[ホーム](http://partner-docs.microsoft.com)
