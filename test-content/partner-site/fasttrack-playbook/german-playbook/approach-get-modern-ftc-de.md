---  
# required metadata  
title: FastTrack Partner Playbook - Get Modern FTC Engagement
description: FastTrack Partner Playbook - Get Modern FTC Engagement
author: Celia Kennedy
ms.author: v-cekenn 
manager: pagrim
ms.date: 9/06/2019  
ms.topic: partner-playbook  
ms.prod: non-product-specific  
ms.custom: partner-playbook  
ft.audience: partner
ft.owner: pagrim
---   
# Get Modern – FastTrack Center-Beteiligung

## Übersicht

Das Get Modern-Konzept im GJ 2020 wurde für FastTrack Engineers entwickelt, die von FastTrack Managern und Get Modern Subject Matter Experts (SMEs) dabei unterstützt werden, qualifizierte Kunden durch das Upgrade von Windows 7/8.1 auf Windows 10 zu führen und beim Bereitstellen von Office 365 ProPlus mit System Center zu unterstützen.  

Kunden, die interessiert daran sind oder um Unterstützung dabei gebeten haben, stets auf dem neuesten Stand von Windows 10 und Office 365 ProPlus zu bleiben, stehen unsere Get Modern Subject Matter Experts gerne bei den optionalen Schritten dieses Konzepts (Schritte 7 bis 9) zur Seite.  

Kunden, die Unterstützung bei der Migration von Daten nach OneDrive for Business benötigen, können schon vor dem Windows 10-Upgrade Anleitung beim Einrichten und Nutzen von OneDrive for Business erhalten.

## Ziele

Die folgende Liste enthält Ziele dieser Methode:

- **Es ist entscheidend, dass wir die Sicherheit unserer Kunden aufrechterhalten und ihnen bei der Umstellung auf Windows 10** helfen.
- Da wir unseren Kunden helfen, sich mit Microsoft 365 zu modernisieren, ist auch der Schutz von Endpunkten mit Windows 10 für Microsoft von strategischer Bedeutung, um wettbewerbsfähig zu bleiben.
- **Während wir unsere Kunden weiterhin bei ihrer Vorbereitung auf das Ende des Supports** für Office 2010 und bei der Reise durch die digitale Transformation unterstützen, müssen wir unbedingt **sicherstellen, dass die Kunden die aktuellen mit der Cloud verbundenen Office-Clientanwendungen im Unternehmen bereitstellen und nutzen.**
- Office 365 ProPlus ist von strategischer Bedeutung für Microsoft im Hinblick auf den Wettbewerb, da wir unsere Kunden mit Microsoft 365 in die Cloud wechseln lassen.

## Methode

Primäre Rolle: **FastTrack Engineer, SME**  
Gilt für: **Windows 10, Office 365 ProPlus**

## Methode

Primäre Rollen: **FastTrack Manager, FastTrack Engineer, SME**  
Gilt für: **Windows 10 und Office 365 ProPlus**

Sofern ein beteiligter FE über ein sicheres Verständnis und die Fähigkeiten verfügt, Get Modern zu liefern, sollte der FE befähigt werden, die Beteiligung fortzusetzen. Wenn sich die Beteiligung jedoch verzögert oder ins Stocken gerät oder wenn der FE bei der Ausführung dieser Anleitung zusätzliche Unterstützung benötigt, dann sollte der FE mit dem [FastTrack-Ressourcenanforderungstool](https://aka.ms/FRPHubSMERequestProcess) einen Get Modern-SME (OPP und/oder Windows SME) anfordern.

Das Get Modern-SME-Team ist ein spezielles Team aus Windows- und OPP-SMEs, das skalierende Unterstützung anbietet. Bei den SMEs handelt es sich um zusätzliche Ressourcen für die FastTrack-Bereitstellung, die aber zu keiner Zeit einen Ersatz für die Rollen FastTrack Manager, Engineer oder Architect darstellen.

### 1. Durchführen des Start-/Kick-off-Meetings 

Nutzen Sie für neue/erneut beteiligte Kunden, die noch nicht an einem Kick-off-Meeting teilgenommen haben, den Kick-off-Foliensatz, um die richtigen Erwartungen im Hinblick auf das FastTrack-Leistungsangebot, den sichereren modernen Arbeitsplatz als Ausgangsbasis für den Erfolg, festzulegen und um zu ermitteln, welche Dienste der Kunde bereitstellen möchte.

- Kunden der Enterprise-Stufe besitzen womöglich bereits einen detaillierten Plan für mehrere Abteilungen von FA/FTA.

- Prüfen der allgemeinen Statusnotizen, um zu ermitteln, ob die Details im FTOP-Dokumente-Repository erfasst sind. 

- Dieses zusätzliche Detail wird die allgemeinen Details aus Aufgabe 4021 ergänzen 

Benutzen Sie für bestehende Kunden, die die Berechtigung für die Windows 10-Bereitstellungsunterstützung erworben haben, den Kick-off-Foliensatz (in verkleinertem Umfang), um die richtigen Erwartungen im Hinblick auf das FastTrack-Leistungsangebot, den sichereren modernen Arbeitsplatz als Ausgangsbasis für den Erfolg, festzulegen und um zu ermitteln, welche Dienste der Kunde bereitstellen möchte. 

- Nutzen Sie den Prozess für die Anforderung von Ressourcen, um einen SME für die Bereitstellung von Windows 10 zu Ihrer Beteiligung hinzuzufügen. 

- Für die Windows 10-Bereitstellung über FastTrack ist SCCM Current Branch erforderlich. Dieses SCCM-Upgrade ist allerdings nicht im Umfang unseres Leistungsangebots enthalten. Nutzen Sie für das SCCM-Upgrade den Partner-Empfehlungsprozess.

- Der Kick-off-Foliensatz enthält unterstützende Folien zum Umfang von Windows 10 und den durch Partner verfügbaren Diensten für Windows 10.

### 2.  [Get Modern – Technische Analyse und Planung](http://aka.ms/ftgetmodernassessment)

Führen Sie den Get Modern-Workshop für die technische Analyse und Planung durch, um das Desktop-Bereitstellungsprojekt der Kunden mit einer Bestandsaufnahme der Geräte und Apps zu beginnen, Kunden damit bei der Priorisierung der Bereiche zu unterstützen, in denen sie Fortschritte erzielen möchten, die priorisierten Apps und Geräte zu testen und dann alle zur Vorbereitung der Bereitstellung erforderlichen Schritte auszuführen. Kunden können ihre App-Analyse mithilfe ihrer aktuellen System Center-Prozesse und -Tools inklusive Softwareinventur (Discovery), Softwaremessung (Nutzung) usw. durchführen. Ebenfalls wichtig ist es, festzustellen, wer den App- und Vendor-Support besitzt. Denken Sie daran, dass es sich bei der Zuweisung von App-Besitzern und dem Testen NICHT um Wegwurfarbeit handelt. Diese sollte die operative Grundlage für die Verwaltung der zukünftigen Windows 10- und Office 365 ProPlus-Updates bilden, wodurch das Risiko verringert und die Effizienz der Tests erhöht wird.

Aktivieren Sie das Office 365 ProPlus-Upgradebereitschafts-Dashboard in Configuration Manager, um Kunden in die Lage zu versetzen, eine Analyse für Office zu erhalten.

Vorbereitung von Add-Ins, Add-In-Support-Anweisungen, Add-In-Inventar, Inventar der Geräte mit Makros sowie Vorbereitung für Makro-Upgrades.

### 3. Aktivieren von Desktop Analytics

Die folgenden Aktionen müssen im Rahmen der FTOP-Aufgabe "Get Modern – Aktivieren von Desktop Analytics” ausgeführt werden: 

- A. Einführen des Kunden in Desktop Analytics. 

    - i. In dieser Aktivität führen Sie den Kunden in Desktop Analytics ein und vermitteln die Vorteile von DA und wie diese eingesetzt wird, um Informationen für die Planung der Bereitstellung von Windows 10 zu liefern. Nutzen Sie für diese Aktion die Folie unter [https://aka.ms/FTDesktopAnalytics](https://aka.ms/FTDesktopAnalytics). Wenn möglich, ist eine Live-Demo vorzuziehen. Oder Sie nutzen das Demo-Video unter [https://aka.ms/FTDADemo](https://aka.ms/FTDADemo) (Demo-Video der Schulung), um die Produktfunktionen vorzuführen. Falls der Kunde bereits Windows Analytics nutzt, kann diese Aktion beschleunigt werden, indem DA als Weiterentwicklung von Windows Analytics positioniert wird. 

    - ii. Ergebnis: Zustimmung, mit der Aktivierung von Desktop Analytics fortzufahren. 

- B. Anleiten des Kunden beim Registrieren und Einrichten von Desktop Analytics

    - i. Halten Sie sich an die schrittweise Einrichtungsanleitung für FastTrack DA unter [https://aka.ms/sbsDASetup](https://aka.ms/sbsDASetup), um den Administrator des Kunden durch die Schritte zur Aktivierung von Desktop Analytics für die Verwendung von Get Modern (öffentliche URL zur Dokumentation angeben [https://docs.microsoft.com/sccm/desktop-analytics/set-up](https://docs.microsoft.com/sccm/desktop-analytics/set-up) zu führen. Verweisen Sie für die Voraussetzungen für die Bereitstellung und die bei der Bereitstellung erwartete Unterstützung auf die schrittweise Anleitung. Hinweis: Bei Bedarf können Sie auch die interaktive Anleitung bereitstellen, in der das Einrichten von Desktop Analytics erläutert wird (siehe: [https://content.cloudguides.com/guides/Setting%20up%20Desktop%20Analytics](https://content.cloudguides.com/guides/Setting%20up%20Desktop%20Analytics)). 

    - ii. **Ergebnis**: Das Ergebnis dieser Aktivität besteht in der erfolgreichen Vorschau der Registrierung und in der Initiierung der Datensammlung in DA.

- C. Anleiten des Kunden beim Erstellen eines ersten Desktop Analytics-Bereitstellungsplans

    - i. Unterstützen Sie den Kunden nach der Aktivierung und Datensammlung beim Erstellen seines ersten [Desktop Analytics-Bereitstellungsplans](https://docs.microsoft.com/en-us/sccm/desktop-analytics/about-deployment-plans). Nutzen Sie die in der [Anleitung für den DA-Bereitstellungsplan](https://docs.microsoft.com/sccm/desktop-analytics/create-deployment-plans) beschriebenen Schritte, um den Umfang der erwarteten Aktivitäten festzulegen. Es liegt in der Verantwortung des Kunden wird, die Wichtigkeit der ermittelten Anwendungen festzulegen und zu übernehmen. 

    - ii. **Ergebnis**: Kunden verfügen über einen funktionierenden Desktop Analytics-Bereitstellungsplan sowie über einen Satz festgelegter Pilotgeräte für Windows 10. 

### 4.  Erstellen einer Korrektur-Checkliste

Nutzen Sie den Korrektur-Fragebogen und die Checkliste, um dem Kunden Hilfestellung bei der Bereitstellung einzelner/aller von FTC unterstützten Dienste zu geben. Für GCC High/DOD-Kunden muss die GCC High/DOD-Version verwendet werden. Laden Sie jedes Mal eine neue Kopie herunter, damit sichergestellt ist, dass Sie über den aktuellen Inhalt verfügen. Beginnen Sie das Generieren der endgültigen Checkliste, indem Sie zuerst den [Fragebogen](https://ftdocs-bcm.azureedge.net/public/playbook-remediation-checklist-v1) für den entsprechenden Dienst (die entsprechenden Dienste) ausfüllen. Anleitungen für nicht im Umfang enthaltene Dienste werden in der endgültigen Checkliste ausgeblendet. Damit die Nutzung verfolgt werden kann, schicken Sie bitte per E-Mail eine ausgefüllte Kopie der XLS-Datei an [Microsoft](d4cf4a2d.microsoft.com@amer.teams.ms).

### 5. Prüfen der Korrektur-Checkliste zusammen mit dem Kunden im Hinblick auf Handlungselemente

Halten Sie sich an das Standardverfahren.

### 6. Bestätigung der Prüfung und Behebung aller Punkte der Korrektur-Checkliste durch den Kunden

Halten Sie sich an das Standardverfahren.

### 7. Treffen mit dem Projektleiter und den technischen Leitern des Kunden zur Aktivierung von Core und Diensten 

Halten Sie sich an das Standardverfahren.

### 8.  Upgrade von Windows 7/8.1 auf Windows 10 Enterprise

Für ein Upgrade der Windows 7/8.1-Geräte auf Windows 10 empfehlen wir Kunden, ihre bestehenden Prozesse zu nutzen, um Konsistenz und Vorhersehbarkeit aufrechtzuerhalten. Falls bei ihnen noch keine Prozesse vorhanden sind, wird für die Bereitstellung von Windows 10 das Windows-Installationsprogramm (Setup.exe) empfohlen, das ein In-Place-Upgrade durchführt, bei dem automatisch alle Daten, Einstellungen, Anwendungen und Treiber der vorherigen Betriebssystemversion erhalten bleiben. Dies erfordert sehr geringen IT-Aufwand, da keine komplexe Bereitstellungsinfrastruktur erforderlich ist.

**Prozess für die Bereitstellung:**

Führen Sie den Kunden mithilfe von Schritt 1c der [Implementierungsanleitung für die Get Modern-Bereitstellung und -Wartung](https://aka.ms/GetModernEnglishDeployandMaintainGuidance) durch die Bereitstellung von Windows 10.

Für ein Upgrade der Windows 7/8.1-Geräte auf Windows 10 empfehlen wir Kunden, ihre bestehenden Prozesse zu nutzen, um Konsistenz und Vorhersehbarkeit aufrechtzuerhalten. Falls bei ihnen noch keine Prozesse vorhanden sind, wird für die Bereitstellung von Windows 10 das Windows-Installationsprogramm (Setup.exe) empfohlen, das ein In-Place-Upgrade durchführt, bei dem automatisch alle Daten, Einstellungen, Anwendungen und Treiber der vorherigen Betriebssystemversion erhalten bleiben. Dies erfordert sehr geringen IT-Aufwand, da keine komplexe Bereitstellungsinfrastruktur erforderlich ist. Die [Dokumentation zu schrittweisen In-Place-Upgrades](https://aka.ms/GetModernStepbyStepIn-PlaceUpgrades) führt den Kunden durch folgende Schritte:

1. Planen der Tasksequenz
2. Konfigurieren der Upgrade-Bedingungen
3. Bereitstellungsoptionen
4. Überwachen der Bereitstellung

### 10. Bereitstellen von Office 365 ProPlus mit System Center

Configuration Manager skaliert für große Umgebungen und bietet umfangreiche Kontrolle über Installation, Updates und Einstellungen. Darüber hinaus verfügt es über integrierte Funktionen, welche die Bereitstellung und Verwaltung von Office 365 ProPlus einfacher und effizienter machen. Wir empfehlen die Bereitstellung von Office 365 ProPlus, um sicherzustellen, dass Sie immer über die neusten und modernsten Produktivitätstools von Microsoft verfügen. Bei der Bereitstellung mit dem Office Client Management-Dashboard in Configuration Manager und dem integrierten Office 365-Installationsassistenten können Sie Updates über Configuration Manager verwalten.

**Prozess für die Bereitstellung:**

Benutzen Sie die während der Analysephase gesammelten erforderlichen Daten, um dem Kunden beim Zusammenstellen seines Bereitstellungspakets zu helfen. *Die bevorzugte Bereitstellungsmethode ist SCCM, die Installation/das Upgrade von SCCM ist jedoch nicht im Umfang enthalten.

1. Weisen Sie Endbenutzerlizenzen über das O365-Benutzerverwaltungsportal oder die PowerShell zu. [PowerShell-Leitfaden](https://docs.microsoft.com/en-us/office365/enterprise/powershell/assign-licenses-to-user-accounts-with-office-365-powershell)
2. Unterstützen Sie den Kunden beim Erstellen des OPP-Bereitstellungspakets über eine lokale oder eine Cloudverteilung.
    
    a. SCCM-Paket [SCCM-Leitfaden](https://docs.microsoft.com/en-us/DeployOffice/deploy-office-365-proplus-with-system-center-configuration-manager#step-3---create-and-deploy-the-office-application-to-the-pilot-group)
    
    b. Bereitstellung aus lokaler Quelle mit dem Office 365-Bereitstellungstool [ODT-Leitfaden für lokale Quelle](https://docs.microsoft.com/en-us/deployoffice/deploy-office-365-proplus-from-a-local-source)
    
    c. Bereitstellung aus der Cloud mit dem Office 365-Bereitstellungstool [ODT-Leitfaden für die Cloud](https://docs.microsoft.com/en-us/DeployOffice/deploy-office-365-proplus-from-the-cloud)
    
    d. Selbstinstallation aus der Cloud [Office aus der Cloud](https://support.office.com/en-us/article/download-and-install-or-reinstall-office-365-or-office-2019-on-a-pc-or-mac-4414eaaf-0478-48be-9c42-23adc4716658?ui=en-US&rs=en-US&ad=US)

3. Testen Sie die Paketbereitstellung mit **Pilotgeräten.**
4. Sobald die Bereitstellung auf **Geräten für allgemeine Zwecke** oder **geschäftskritische Geräte** angewendet wird- was bedeutet, dass die breite Bereitstellung gestartet wurde – **ist die Aktivierung abgeschlossen** und die Aufgabe sollte entsprechend als abgeschlossen gekennzeichnet werden.

### 11.  Cloud Management

Für Get Modern-Kunden, die die Absicht oder das Interesse äußern, für die Verwaltung ihrer Windows-Geräte auf Cloud Management oder das Intune Co-Management "Cloudanfügung” umzusteigen, gilt: Wenn die Bestätigung durch FE/FTA vorliegt, dass der Kunde bereits Configuration Manager Current Branch nutzt oder dass gerade ein entsprechendes Upgrade der Umgebung durchgeführt wird, kann der FM/FE über das [FastTrack-Ressourcenanforderungstool](https://aka.ms/FRPHubSMERequestProcess) eine EMS SME-Unterstützung anfordern.

### 12. Optimieren von Windows 10 und der Office-Updatebereitstellung mit System Center

Ein erfolgreicher Weg, um mit Windows 10 und Office 365 ProPlus immer auf dem neusten Stand zu bleiben, beginnt mit einer guten Strategie für die Verteilung von Inhalten. Microsoft hat sehr viel investiert, um Bedenken hinsichtlich der Größe der Updates zu besprechen. Es stehen mehrere Technologien zur Verfügung, mit denen die Bandbreiten- und Netzwerklast verringert werden können, um die Bereitstellung von Updates zu optimieren. In diesem Schritt werden diese Technologien erklärt, verglichen und Empfehlungen gegeben, mit denen Sie Ihrem Kunden bei der Entscheidung über die zu verwendende Technologie helfen können. 

### 13. Phasenweise Windows 10-Bereitstellung mit System Center

Anstelle eines disruptiven Wechsels der Technologie, der alle paar Jahre stattfindet, stellen Sie für Ihre Benutzer kontinuierlich **neue Funktionen, Lösungen und Schutzmaßnahmen** bereit. Halbjährliche Funktionsupdates liefern im Frühjahr und im Herbst neue Funktionen und monatliche, kumulative Qualitätsupdates enthalten Sicherheitsfixes, Zuverlässigkeitsfixes und Fehlerbehebungen. **Kunden, die keine halbjährlichen Updates abwickeln können, empfehlen wir, das jährliche Herbst-Update durchzuführen**. 

### 14. Phasenweise Bereitstellungen von Office 365 ProPlus mit System Center

Wie Windows erhalten auch die in Office 365 enthaltenen Clientanwendungen regelmäßige Updates, die neue Features und Funktionen sowie Sicherheits- und andere Updates enthalten. Sie können Configuration Manager nutzen, um Office 365 ProPlus zu aktualisieren. System Center Configuration Manager kann Office 365-Clientupdates verwalten, indem der Verwaltungsworkflow für die Softwareaktualisierung angewendet wird. 

Das Get Modern-SME-Team ist ein spezielles Team aus Windows- und OPP-SMEs, das skalierende Unterstützung anbietet. Bei den SMEs handelt es sich um zusätzliche Ressourcen für die FastTrack-Bereitstellung, die aber zu keiner Zeit einen Ersatz für die Rollen FastTrack Manager, Engineer oder Architect darstellen.

## FTOP-Aufgaben  

| **Aufgaben-ID** | **Aufgabenbeschreibung** | **(E) Erforderlich (O) Optional** | **FastTrack-Rolle** |
| - | - | - | -|
| 994  | Durchführen des Start-/Kick-off-Meetings() | E | FM |
| 4021 | [Get Modern-Analyseworkshop](https://aka.ms/frpgetmodernassessmentworkshop) | E | FE |
| 4068 | Aktivieren von Desktop Analytics | E | FE |
| 3070 | Erstellen einer Korrektur-Checkliste | E | FE |
| 1049 | Prüfen der Korrektur-Checkliste mit dem Kunden auf Handlungselemente | E | FE |
| 1699 |  Technische Analyse abgeschlossen: Bereitstellungsplan einschließlich Korrektur-Checkliste dem Kunden ausgehändigt | E  | FM |
| 3190 | Bestätigung der Prüfung und Behebung aller Punkte der Korrektur-Checkliste durch den Kunden | E | FE |
| 1700 | Korrekturabschluss: Alle Punkte in Korrektur-Checkliste behoben | E | FM |
| 1126 | Treffen mit dem Projektleiter und den technischen Leitern des Kunden zur Aktivierung von Core und Diensten | E | FE |
| 4024 | Upgrade von Windows 7/8.1 auf Windows 10 | E | FE |
| 1247 | Bereitstellung von Office 365 ProPlus | E | FE |
| 4031 | Optimieren von Windows 10 und der Office-Updatebereitstellung mit System Center | O | SME |
| 4032 | Phasenweise Windows 10-Bereitstellung mit System Center | O | SME |
| 4033 | Phasenweise Bereitstellungen von Office 365 ProPlus mit System Center | O | SME |
| 3690 | Identifizierung des Umfragekontakts | E | FM |
| 1701 | Aktivierung abgeschlossen: Alle im Umfang enthaltenen Dienste sind aktiviert; Migrationstools sind konfiguriert | E | FM |

## Wichtige Inputs  

- Kunde hat Anspruch auf das FastTrack Get Modern-Leistungsangebot  
- Kunde beabsichtigt ein Upgrade auf Windows 10  

## Wichtige Ergebnisse  

- Windows 10-Upgrade abgeschlossen  
- Office 365 ProPlus-Bereitstellung abgeschlossen  
- Phasenweise Bereitstellungen von Windows 10 und Office 365 ProPlus mit System Center vorhanden  

## Nächste Schritte  

Unterstützen Sie den Kunden weiter, bis die vollständige Bereitstellung mit AU > 70 % erreicht ist.  

## Gesammelte Daten

| Datenfeld/Allgemeiner Name | Für diesen Prozess erforderlich | Erste Eingabe in FTOP |
| - | - | - |
| Beteiligungsszenario | Ja | Ja |
| Notizen zur Beteiligungsverwaltung (FM) | Ja | Ja |
| Notizen zur technischen Aktivierung (FE) | Ja | Ja |
| Enterprise-Notizen (FTA) | Nein | Ja |
| Account Team-Kontakte | Ja | Ja |
| Kundenkontakte | Ja | Ja |

### Zusammenfassung der Aktualisierung

|Datum|Geändert durch|Änderung an|
|---------|---------------|----------------------------|
|03/25/2020| Celia Kennedy| Allgemeine Aktualisierung|
|10/01/2019| Celia Kennedy| Allgemeine Aktualisierung|

[Startseite](http://partner-docs.microsoft.com)
