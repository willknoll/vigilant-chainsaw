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

Der Prozess zum Adressieren von technischen Lücken erkennt und adressiert technische Lücken vor der Bereitstellung, damit die Arbeitsbereiche des Kunden konsistent und pünktlich bereitgestellt und Frustration oder Verzögerungen aufgrund von Infrastrukturblockaden oder anderen technischen Hindernissen vermieden werden.

## Ziele

  - Korrektur aller Defizite, die bei der Analyse identifiziert wurden.
  - Sicherstellen, dass die Umgebung des Kunden den Mindeststandards für die Aktivierung entspricht.
  - Abgeschlossene Aktivitäten des Haupt-Onboarding einschließlich Identitätskorrektur und Synchronisierung.

## Methode

### Prüfen der Korrektur-Checkliste

Primäre Rolle: **FastTrack-Entwickler**  
Gilt für: **Alle Dienste**

Prüfen Sie die Korrektur-Checkliste zusammen mit dem Kunden.

### Durchführung von Prüfpunktbesprechungen

Primäre Rolle: **FastTrack-Entwickler**  
Gilt für: **Alle Dienste**

Führen Sie eine Prüfpunktbesprechung (wöchentlich oder nach einem anderen Zeitplan) durch, um den Fortschritt der Korrekturschritte zu prüfen.

### Unterstützung bei Korrekturschritten

Primäre Rolle: **FastTrack-Entwickler**  
Gilt für: **Alle Dienste**

Geben Sie bei Bedarf Hilfestellung bei Korrekturschritten.

#### FTOP-Aufgaben

| Aufgaben-ID | Name der Aufgabe                                   | (E)rforderlich / (O)ptional |  FastTrack-Rolle   | Dienste |
| ------- | ------------------------------------------------------------ | :----------------------: | :----------------: | ------------------ |
| 3988    | AIP - Prüfen der Voraussetzungen |            E             | SME | AIP |
| 2122    | Exchange - Konfigurieren des Cloudzugriffs auf den GroupWise-Server    |            O             | FastTrack Engineer | Exchange           |
| 3184    | AAD Connect Health - Überprüfen der Systemanforderungen |            O             | FastTrack Engineer | Haupt-Onboarding    |
| 2193    | SfB - Korrektur von erweiterten Features und längerfristige Planung |            O             | FastTrack Engineer | Skype for Business |
| 2271    | Intune - Korrekturschritte                                     |            E             | FastTrack Engineer | Intune             |
| 3680    | Intune - Hilfestellung beim Wechsel zu Intune (Von Hybrid zur eigenständigen Version) |            O             | FastTrack Engineer | Intune             |
| 3681    | Intune - Hilfestellung und Schritte zur Korrektur der Co-Verwaltung |            O             | FastTrack Engineer | Intune             |
| 3224    | EDU: Korrektur von Classroom & SDS                           |            O             | FastTrack Engineer | Classroom/SDS      |
| [4080](https://docs.microsoft.com/en-us/windows/security/threat-protection/microsoft-defender-atp/configure-proxy-internet)    | MDATP - Proxykonfiguration einschließlich URL-Whitelist-Erstellung |            E             |        SME         | MDATP              |

### Korrektur zusätzlicher Enterprise-Leistungsangebote

Primäre Rolle: **FastTrack-Entwickler**  
Gilt für: **Exchange / Skype for Business**

Nur für genehmigte Enterprise-Kunden mit mindestens 20.000 Arbeitsplatzlizenzen oder einer Ausnahme.

#### FTOP-Aufgaben

| Aufgaben-ID | Name der Aufgabe                                 | (E)rforderlich / (O)ptional |  FastTrack-Rolle   | Dienste          |
| ------- | ----------------------------------------------------------- | :----------------------: | :----------------: | ------------------ |
| 3208    | Exchange - Migrationsplanung für Postfachgruppierung und -planung |            O             | FastTrack Engineer | Exchange           |
| 3209    | SfB - Korrektur der Benutzermigration                      |            O             | FastTrack Engineer | Skype for Business |
| 3358    | Ausführlicher Migrationsplanungsworkshop                   |            O             | FastTrack Architect v2 | Exchange / OneDrive for Business / SharePoint |

### Koordinieren der Korrekturaktivitäten

Primäre Rolle: **FastTrack-Entwickler**  
Gilt für: **Alle Dienste**

Koordininieren Sie die Korrekturaktivitäten, die vom Partner, Microsoft Consulting Services (MCS) oder Premier ausgeführt werden.

### Korrektur-Checkliste behoben

Primäre Rolle: **FastTrack-Manager**  
Gilt für: **Alle Dienste**

Wechseln Sie zur Aktivierungsphase, und schließen Sie den Prozess des Korrekturabschlusses ab.

#### FTOP-Aufgaben

| Aufgaben-ID | Name der Aufgabe                                                     | (E)rforderlich / (O)ptional |  FastTrack-Rolle   | Dienste      |
| ------- | ------------------------------------------------------------------------------- | :----------------------: | :----------------: | ------------ |
| 3190    | Bestätigen der Prüfung durch den Kunden und des Behebens aller Punkte der Korrektur-Checkliste |            E             | FastTrack Engineer | Alle Dienste |
| 1700    | Korrekturabschluss: Alle Elemente in der Korrektur-Checkliste behoben          |            E             | FastTrack Manager  | Alle Dienste |

##### Nicht kategorisierte Aufgaben (Adressieren von technischen Lücken)

Primäre Rollen: -
Gilt für: **Alle Dienste**

Hier sind nicht kategorisierte Aufgaben im FastTrack-Orchestrierungsportal (FTOP) aufgeführt, die noch nicht in den Fluss der FastTrack-Anleitung integriert sind.

#### FTOP-Aufgaben

| Aufgaben-ID | Name der Aufgabe      | (E)rforderlich / (O)ptional |  FastTrack-Rolle   | Dienste |
| ------- | -------------------------------- | :----------------------: | :----------------: | -------- |
| 2545    | AzRMS-Korrektur und längerfristige Planung |            O             | FastTrack Engineer | AIP      |

## Wichtige Inputs

  - Alle Aktivitäten der technischen Analyse sind abgeschlossen (Korrektur-Checkliste).
  - Der Kunde hat zusätzliche Ressourcen zum Abschließen der Korrektur erkannt. (Partner/MCS/Premier).

## Wichtige Ergebnisse

  - Alle erkannten Korrekturschritte wurden ausgeführt, und der Kunde fährt mit der Aktivierungsphase fort.
  - Die Umgebung des Kunden erfüllt oder überschreitet die Mindeststandards für die Aktivierung des Clouddienstes.
  - Identität ist korrigiert und die Bereitstellung und Synchronisierung sind konfiguriert und aktiv.
  - Pilotbenutzer/-gruppen sind identifiziert und auf die Migration zu Cloudarbeitsbereichen vorbereitet.

## Nächste Schritte

  - Vorbereiten von Pilotbenutzern/-gruppen auf die Aktivierung.
  - Fortfahren mit dem Prozess zur [Unterstützung der Erfolgserzielung](success-support-success-execution-partner-en.md), um die Einführung voranzubringen.
  - Fortfahren mit dem Prozess zum [Aktivieren von Diensten​](enable-enable-services-partner-de.md).

## Zusammenfassung der Aktualisierung

| Datum    | Geändert durch     | Änderung von              |
| ---------- | ----------------- | ------------------------ |
| 18.12.2019 | Celia Kennedy     | Aufgaben 4080 und 3358 hinzugefügt      |
| 25.09.2018 | Celia Kennedy     | Inhalt aktualisiert |
| 02.05.2018 | Celia Kennedy     | Veraltete Aufgaben entfernt |
| 06.03.2019 | Patric Grimwood   | Links unter „Nächste Schritte" aktualisiert |
| 26.02.2019 | Patric Grimwood   | Partner-Links aktualisiert |
| 11.12.2018 | Mark Eichenberger | Anleitung erstellt          |
| 04.12.2018  | Ryan Meehan       | Kleinere Formatierungsänderungen |

[Startseite](http://partner-docs.microsoft.com)
