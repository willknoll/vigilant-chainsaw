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

# Adressieren von technischen Lücken

Phase: **Korrektur**

## Übersicht

Der Prozess "Adressieren von technischen Lücken" identifiziert und behandelt technische Lücken vor der Bereitstellung, um Kunden eine konsistente und rechtzeitige Arbeitsbereich-Bereitstellung zu ermöglichen und Frustration oder Verzögerungen aufgrund der Infrastruktur oder anderer technischer Hindernisse zu vermeiden.

##  Ziele

  - Korrektur aller Defizite, die bei der Analyse identifiziert wurden.
  - Sicherstellung, dass die Umgebung des Kunden den Mindeststandards für die Aktivierung entspricht.
  - Abschluss der Aktivitäten des Haupt-Onboarding einschließlich Identitätskorrektur und Synchronisierung.

## Ansatz

### Prüfung der Korrektur-Checkliste

Primäre Rolle: **FastTrack Engineer**  
Gilt für: **Alle Dienste**

Prüfen Sie die Korrektur-Checkliste zusammen mit dem Kunden.

### Durchführung von Prüfpunktbesprechungen

Primäre Rolle: **FastTrack Engineer**  
Gilt für: **Alle Dienste**

Führen Sie eine Prüfpunktbesprechung durch (wöchentlich oder anderes Intervall), um den Fortschritt bezüglich der Korrekturschritte zu prüfen.

### Unterstützung bei Korrekturschritten

Primäre Rolle: **FastTrack Engineer**  
Gilt für: **Alle Dienste**

Geben Sie bei Bedarf Hilfestellung bei Korrekturschritten.

#### FTOP-Aufgaben

| Aufgaben-ID | Name der Aufgabe     | (E) Erforderlich (O) Optional | FastTrack-Rolle | Dienste |
|---------|---------------|--------------------------|--------------------------|--------------------------|
| 3184    | AAD Connect Health – Prüfung der Systemanforderungen | O FastTrack Engineer | Haupt-Onboarding       |
| 2193    | SfB – Erweiterte Featurekorrektur und längerfristige Planung | O  | FastTrack Engineer | Skype for Business |
| 3224    | EDU: Korrektur Classroom & SDS  | O | FastTrack Engineer | Classroom/SDS    |
| 3998    | MIP – Prüfung der Voraussetzungen     | E                        | SME                | AIP |
| 4073    | Netzwerk – Behandlung identifizierter Netzwerkprobleme über NetOnboard-Tool  | O  | FastTrack Engineer | Haupt-Onboarding  |
| 4080  | [MDATP – Proxykonfiguration einschließlich URL-Whitelist-Erstellung](https://docs.microsoft.com/en-us/windows/security/threat-protection/microsoft-defender-atp/configure-proxy-internet)  |E |  SME | MDATP              |
| 4101    | Ersetzung von Standard-Sicherheitsrichtlinien durch CA-Richtlinien für Migrationen – [Anweisungen](https://aka.ms/AA75xf0) FRP: [Anforderung eines Identitäts-SME](https://aka.ms/FRPHubSMERequestProcess) für optionale Unterstützung | O  | FastTrack Engineer | Exchange/OneDrive for Business/SharePoint |

### Korrektur zusätzlicher Enterprise-Leistungsangebote

Primäre Rolle: **FastTrack Engineer**  
Gilt für: **Exchange/Skype for Business**

Nur für genehmigte Enterprise-Kunden mit mindestens 20.000 Arbeitsplatzlizenzen oder einer Ausnahme.

####  FTOP-Aufgaben

| Aufgaben-ID | Name der Aufgabe                                                   | (E) Erforderlich (O) Optional |   FastTrack-Rolle   | Dienste           |
| ------- | ----------------------------------------------------------- | :----------------------: | :----------------: | ------------------ |
| 3208    | Exchange – Postfachgruppierung und Migrationsplanung |            O             | FastTrack Engineer | Exchange           |
| 3209    | SfB – Benutzermigrationskorrektur                            |            O             | FastTrack Engineer | Skype for Business |
| 3358    | Detailanalyse – Migrationsplanungsworkshop                       |            O             | FastTrack Architect v2 | Exchange/OneDrive for Business/SharePoint |

### Koordination der Korrekturaktivitäten

Primäre Rolle: **FastTrack Engineer**  
Gilt für: **Alle Dienste**

Koordinieren Sie die Korrekturaktivitäten, die vom Partner, Microsoft Consulting Services (MCS) oder Premier ausgeführt werden.

### Korrektur-Checkliste behoben

Primäre Rolle: **FastTrack Manager**  
Gilt für: **Alle Dienste**

Wechseln Sie zur Aktivierungsphase, und schließen Sie den Prozess des Korrekturabschlusses ab.

####  FTOP-Aufgaben

| Aufgaben-ID | Name der Aufgabe                                                                       | (E) Erforderlich (O) Optional |   FastTrack-Rolle   | Dienste     |
| ------- | ------------------------------------------------------------------------------- | :----------------------: | :----------------: | ------------ |
| 3190    | Bestätigung der Prüfung durch den Kunden und Behebung aller Punkte der Korrektur-Checkliste |            E             | FastTrack Engineer | Alle Dienste |
| 1700    | Korrekturabschluss: Alle Punkte in Korrektur-Checkliste behoben                     |            E             | FastTrack Manager  | Alle Dienste |

##### Nicht kategorisierte Aufgaben (Adressieren von technischen Lücken)

Primäre Rollen: -
Gilt für: **Alle Dienste**

Hier sind nicht kategorisierte Aufgaben im FastTrack-Orchestrierungsportal (FTOP) aufgeführt, die noch nicht in den Fluss der FastTrack-Anleitung integriert sind.

####  FTOP-Aufgaben

| Aufgaben-ID | Name der Aufgabe                        | (E) Erforderlich (O) Optional |   FastTrack-Rolle   | Dienste |
| ------- | -------------------------------- | :----------------------: | :----------------: | -------- |
| 2545    | AzRMS-Korrektur und längerfristige Planung |            O             | FastTrack Engineer | AIP      |

##  Wichtige Inputs

  - Alle Aktivitäten der technischen Analyse sind abgeschlossen (Korrektur-Checkliste).
  - Der Kunde hat zusätzliche Ressourcen zum Abschließen der Korrektur identifiziert (Partner/MCS/Premier).

##  Wichtige Ergebnisse

  - Alle identifizierten Korrekturschritte wurden ausgeführt, und der Kunde fährt mit der Aktivierungsphase fort.
  - Die Umgebung des Kunden erfüllt oder überschreitet die Mindeststandards für die Aktivierung des Clouddienstes.
  - Identität ist korrigiert und Bereitstellung und Synchronisierung sind konfiguriert und aktiv.
  - Pilotbenutzer/-gruppen sind identifiziert und auf die Migration zu Cloudarbeitsbereichen vorbereitet.

## Nächste Schritte

  - Vorbereiten von Pilotbenutzern/-gruppen auf die Aktivierung.
  - Fortfahren mit Prozess "[Unterstützung der Erfolgserzielung](success-support-success-execution-partner.md)", um Einführung voranzubringen.
  - Fortfahren mit Prozess "[Aktivierung von Diensten](enable-enable-services-partner.md)".

## Zusammenfassung der Aktualisierung

| Datum       | Geändert durch       | Änderung an             |
| ---------- | ----------------- | ------------------------ |
| 03/27/2020 | Celia Kennedy     | Allgemeine Aktualisierung |
| 12/18/2019 | Celia Kennedy     | Hinzugefügte Aufgaben 4080 und 3358                    |
| 09/25/2018 | Celia Kennedy     | Aktualisierter Inhalt |
| 05/02/2018 | Celia Kennedy     | Veraltete Aufgaben entfernt |
| 03/06/2019 | Patric Grimwood   | Links unter "Nächste Schritte" aktualisiert |
| 02/26/2019 | Patric Grimwood   | Partnerlinks aktualisiert    |
| 12/11/2018 | Mark Eichenberger | Anleitung erstellt         |
| 12/7/2018  | Ryan Meehan       | Kleinere Formatierungsänderungen |

[Startseite](http://partner-docs.microsoft.com)
