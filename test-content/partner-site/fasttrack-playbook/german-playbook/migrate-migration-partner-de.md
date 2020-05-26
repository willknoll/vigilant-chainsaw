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

# Migration

Phase: **Migration**

## Übersicht

Stellen Sie eine erfolgreiche Kundenmigration zur Cloud sicher (Exchange Online/OneDrive for Business/SharePoint).

##  Ziele

  - Validierung der technischen Aktivierung und Vorbereitung des Kunden für die Migration
  - Ausführung des Migrationstests
  - Übergabe der Beteiligung an Geschwindigkeitsteam und Durchführung von Geschwindigkeitsmigration
  - Problemmanagement

## Ansatz

### Ausführung der Testmigration

Primäre Rolle: **Migration Velocity Manager**  
Gilt für: **Exchange/OneDrive for Business/SharePoint**

Ausführung der Testmigration und Validierung der Vorbereitung der Kundeninfrastruktur für Geschwindigkeitsmigration.  

####  FTOP-Aufgaben

| Aufgaben-ID | Name der Aufgabe                                                             | (E) Erforderlich (O) Optional |   FastTrack-Rolle   | Dienste |
| ------- | --------------------------------------------------------------------- | :----------------------: | :----------------: | -------- |
| 1330    | Exchange – Validierung der E-Mail-Migration mit Testbatch (FE und Kunde) |            O             | FastTrack Engineer | Exchange |

### Erstellung von Übergangsdokumenten und Übergang des Projekts zu Universal Partner

Primäre Rolle: **Migration Velocity Manager**  
Gilt für: **Exchange/OneDrive for Business/SharePoint**

Erstellung von Dokumenten für den Übergang des Projekts zum Universal Partner Model-Partner (UPM).  

### Verwaltung der Geschwindigkeitsmigration

Primäre Rolle: **Migration Velocity Manager**  
Gilt für: **Exchange/OneDrive for Business/SharePoint**

Planung und Durchführung der Batchmigration zur Beschleunigung der Migration in die Cloud.  

####  FTOP-Aufgaben

| Aufgaben-ID | Name der Aufgabe                | (E) Erforderlich (O) Optional |       FastTrack-Rolle       | Dienste      |
| ------- | -----------------------------------------| :----------------------: | :------------------------: | ---------------|
| 3234    | Leitung von Go-NoGo-Besprechungen mit dem Kunden  |         O             |     FastTrack Manager      | SharePoint/Exchange/OneDrive for Business |
| 3135    | Erstellung des Migrationsplans für den Kunden   |         O             |     FastTrack Engineer     | OneDrive for Business/Exchange/SharePoint |
| 3143    | [Leitfaden zum Testlauf der Exchange Hybrid-Migration](https://aka.ms/FTCPreflight) Kunden müssen ihre Postfächer vor der Planung prüfen, um Fehler während der Migration zu mindern|  O  |  FastTrack Engineer | Exchange|| 1328    | Exchange – Korrektur identifizierter Postfachprobleme |   O         |     FastTrack Engineer     | Exchange                                       |
| 3629    | Abzug von MVM und pausierter Migrationsprozess  |   E        | Geschwindigkeitsmigrationsmanager | Exchange/OneDrive for Business/SharePoint |
| 1871    | Leitung der Migrationsaktivitäten|            E             | Geschwindigkeitsmigrationsmanager | Exchange/OneDrive for Business/SharePoint |
| 1874    | Exchange – Anweisung an Kunden, das Konvertierungsskript für lokale Postfächer für E-Mail-aktivierte Benutzer auszuführen |          O             |     FastTrack Engineer     | Exchange |

### Problemmanagement

Primäre Rolle: **Migration Velocity Manager**  
Gilt für: **Exchange/OneDrive for Business/SharePoint**

Verwaltung und Korrektur von
Migrationsproblemen.  

####  FTOP-Aufgaben

| Aufgaben-ID | Name der Aufgabe                                                                                                               | (E) Erforderlich (O) Optional |       FastTrack-Rolle       | Dienste              |
| ------- | ----------------------------------------------------------------------------------------------------------------------- | :----------------------: | :------------------------: | --------------------- |
| 2543    | Exchange – Anweisung an Kunden, alle Probleme nach der Migration innerhalb von T+5 Werktagen ab dem Tag des Migrationsereignisses zu melden |            O             |     FastTrack Manager      | Exchange              |
| 2481    | OneDrive – Unterstützung des Kunden bei nicht synchronisierten Elementen und anderen Migrationsproblemen                                       |            O             | Geschwindigkeitsmigrationsmanager | OneDrive for Business |

### Abschluss der Migration

Primäre Rolle: **Migration Velocity Manager**  
Gilt für: **Exchange/OneDrive for Business/SharePoint**

Validierung, dass Kundendaten erfolgreich migriert wurden, und Fortsetzung von Bereinigungsaktivitäten vor dem Abzug.  

####  FTOP-Aufgaben

| Aufgaben-ID | Name der Aufgabe               | (E) Erforderlich (O) Optional | FastTrack-Rolle             | Dienste                                      |
|---------|---------------------------------------------------|--------------------------|----------------------------|-----------------------------------------------|
| 2544    | Exchange – Änderung des MX-Eintrags basierend auf Mail-Fluss-Plan     | O                        | FastTrack Engineer         | Exchange                                      |
| 1386    | Exchange – Zurücksetzung des TTL-Werts des MX-DNS-Eintrags auf ursprünglichen Wert          | O                        | FastTrack Engineer         | Exchange                                      |
| 1370    | Exchange – Aktivitäten nach der E-Mail-Migration (Alle Quellsysteme)          | O                        | FastTrack Engineer         | Exchange                                      |
| 2561    | OneDrive – Aktivitäten nach der Migration für OneDrive for Business (Umleitung einrichten)         | O                        | FastTrack Engineer         | OneDrive for Business                         |
| 2323    | Aktivitäten zum Migrationsabschluss               | E                        | Geschwindigkeitsmigrationsmanager | Exchange/OneDrive for Business/SharePoint |
| 4102    | Entfernung von CA-Richtlinien und Aktivieren von Sicherheitsstandards nach der Migration – [Anweisungen](https://aka.ms/AA75m9r) FRP: [Anforderung eines Identitäts-SME](https://aka.ms/FRPHubSMERequestProcess) für optionale Unterstützung | O                        | FastTrack Engineer         | Exchange/OneDrive for Business/SharePoint |
| 1702    | Ende der Migration: Alle im Umfang enthaltenen Migrationen abgeschlossen     | E                        | FastTrack Manager          | Exchange/OneDrive for Business/SharePoint |

### Nicht kategorisierte Aufgaben (Migration)

Primäre Rolle: **-**  
Gilt für: **Alle Dienste**

Hier sind nicht kategorisierte Aufgaben im FastTrack-Orchestrierungsportal (FTOP) aufgeführt, die noch nicht in den Fluss der FastTrack-Anleitung integriert sind.  

##  Wichtige Inputs

  - Migrationsworkshop
  - Fragebogen zur Migration
  - Einrichten der Kundeninfrastruktur und Konfiguration abgeschlossen
  - Konnektivitätsanforderungen erfüllt
  - Anmeldeinformationen vom Kunden bereitgestellt
  - Zeitplan für Batches (CSV-Dateien)

##  Wichtige Ergebnisse

- Erfolgreiche Migration der Kundendaten

## Nächste Schritte

  - Kunde wird in den Prozess "[Unterstützung der Erfolgserzielung](success-support-success-execution-partner-de.md)" überführt.
  - Kunde wird in den Prozess "[Durchführung der Erfolgsprüfung](success-conduct-success-review-partner-de.md)" überführt.


## Zusammenfassung der Aktualisierung

| Datum       | Geändert durch       | Änderung an        |
| ---------- | ----------------- | ----------------    |
| 03/27/2019 | Celia Kennedy     | Allgemeine Aktualisierung |
| 1/31/2020  | Celia Kennedy | Aufgabe 4102 hinzugefügt, Aufgabe 3143 umbenannt |
| 09/25/2019 | Celia Kennedy     | Update Partnerinhalt |
| 05/02/2019 | Celia Kennedy     | Veraltete Aufgaben entfernt |
| 03/06/2019 | Patric Grimwood   | Links unter "Nächste Schritte" aktualisiert |
| 02/26/2019 | Patric Grimwood   | Partnerlinks aktualisiert |
| 12/11/2018 | Mark Eichenberger | Anleitung erstellt      |

[Startseite](http://partner-docs.microsoft.com)
