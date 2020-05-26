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

Sicherstellen der erfolgreichen Kundenmigration in die Cloud (Exchange Online/OneDrive for Business/SharePoint).

## Ziele

  - Validierung der technischen Aktivierung und Vorbereitung des Kunden für die Migration
  - Ausführung des Migrationstests
  - Übergabe der Beteiligung an Geschwindigkeitsteam und Durchführung von Geschwindigkeitsmigration
  - Problemmanagement

## Methode

### Ausführung der Testmigration

Primäre Rolle: **Geschwindigkeitsmigrationsmanager**  
Gilt für: **Exchange/OneDrive for Business/SharePoint**

Ausführen der Testmigration und Validieren der Vorbereitung der Kundeninfrastruktur für die Geschwindigkeitsmigration.  

#### FTOP-Aufgaben

| Aufgaben-ID | Name der Aufgabe                                                             | (E)rforderlich/(O)ptional |   FastTrack-Rolle   | Dienste |
| ------- | --------------------------------------------------------------------- | :----------------------: | :----------------: | -------- |
| 1330    | Exchange - Validierung der E-Mail-Migration mit Testbatch (FE und Kunde) |            O             | FastTrack Engineer | Exchange |

### Erstellen von Übergangsdokumenten und Übergang des Projekts zu Universal Partner

Primäre Rolle: **Geschwindigkeitsmigrationsmanager**  
Gilt für: **Exchange/OneDrive for Business/SharePoint**

Erstellen von Dokumenten für den Übergang des Projekts zum Universal
Partner Model(UPM)-Partner.  

### Verwaltung der Geschwindigkeitsmigration

Primäre Rolle: **Geschwindigkeitsmigrationsmanager**  
Gilt für: **Exchange/OneDrive for Business/SharePoint**

Planung und Durchführung der Batchmigration zur Beschleunigung der Migration in die Cloud.  

#### FTOP-Aufgaben

| Aufgaben-ID | Name der Aufgabe                                                                                         | (E)rforderlich/(O)ptional |       FastTrack-Rolle       | Dienste                                      |
| ------- | ------------------------------------------------------------------------------------------------- | :----------------------: | :------------------------: | --------------------------------------------- |
| 3234    | Besprechung mit dem Kunden über Start oder Nicht-Start                                                               |            O             |     FastTrack Manager      | SharePoint/Exchange/OneDrive for Business |
| 3135    | Vom Kunden erstellter Migrationsplan                                                                |            O             |     FastTrack Engineer     | OneDrive for Business/Exchange/SharePoint |
| 3143    | Exchange - Validierung von Postfachzugang - Testlauf mit ALLEN geplanten Postfächern durchführen                     |            O             |     FastTrack Engineer     | Exchange                                      |
| 1328    | Exchange - Behebung festgestellter Postfachprobleme                                                  |            O             |     FastTrack Engineer     | Exchange                                      |
| 3629    | Abzug von MVM und pausierter Migrationsprozess                                                     |            E             | Migration Velocity Manager | Exchange/OneDrive for Business/SharePoint |
| 1871    | Leitung der Migrationsaktivitäten                                                                       |            E             | Migration Velocity Manager | Exchange/OneDrive for Business/SharePoint |
| 1874    | Exchange - Kunden anweisen, das Konvertierungsskript für lokale Postfächer für E-Mail-aktivierte Benutzer auszuführen |            O             |     FastTrack Engineer     | Exchange                                      |

### Problemmanagement

Primäre Rolle: **Geschwindigkeitsmigrationsmanager**  
Gilt für: **Exchange/OneDrive for Business/SharePoint**

Verwaltung und Korrektur von Migrationsproblemen.  

#### FTOP-Aufgaben

| Aufgaben-ID | Name der Aufgabe                                                                                                               | (E)rforderlich/(O)ptional |       FastTrack-Rolle      | Dienste              |
| ------- | ----------------------------------------------------------------------------------------------------------------------- | :----------------------: | :------------------------: | --------------------- |
| 2543    | Exchange - Kunden anweisen, alle nach der Migration auftretenden Probleme innerhalb von T+5 Arbeitstagen ab der Migration zu melden |            O             |     FastTrack Manager      | Exchange              |
| 2481    | OneDrive - Unterstützung des Kunden bei nicht synchronisierten Elementen und anderen Migrationsproblemen                                       |            O             | Migration Velocity Manager | OneDrive for Business |

### Abschluss der Migration

Primäre Rolle: **Geschwindigkeitsmigrationsmanager**  
Gilt für: **Exchange/OneDrive for Business/SharePoint**

Validierung, dass Kundendaten erfolgreich migriert wurden und Fortfahren mit Bereinigungsaktivitäten vor dem Abzug.  

#### FTOP-Aufgaben

| Aufgaben-ID | Name der Aufgabe                                                                   | (E)rforderlich/(O)ptional |        FastTrack-Rolle       | Dienste                                      |
| ------- | --------------------------------------------------------------------------- | :----------------------: | :------------------------: | --------------------------------------------- |
| 2544    | Exchange - Änderung des MX-Eintrags gemäß Mail-Fluss-Plan                     |            O             |     FastTrack Engineer     | Exchange                                      |
| 1386    | Exchange - Zurücksetzen des TTL-Werts des MX-DNS-Eintrags auf den ursprünglichen Wert                        |            O             |     FastTrack Engineer     | Exchange                                      |
| 1370    | Exchange - Aktivitäten nach der E-Mail-Migration (Alle Quellsysteme)   |            O             |     FastTrack Engineer     | Exchange                                      |
| 2561    | OneDrive - OneDrive for Business, Aktivitäten nach der Migration (Umleitung einrichten) |            O             |     FastTrack Engineer     | OneDrive for Business                         |
| 2323    | Exchange - Domino, Aktivitäten nach der Migration                                 |            O             | Migration Velocity Manager | Exchange                                      |
| 1702    | Ende der Migration: Alle im Umfang enthaltenen Migrationen abgeschlossen                             |            E             |     FastTrack Manager      | Exchange/OneDrive for Business/SharePoint |

### Nicht kategorisierte Aufgaben (Migration)

Primäre Rolle: **-**  
Gilt für: **Alle Dienste**

Nicht kategorisierte (FTOP)-Aufgaben, die noch nicht in die FastTrack-Anleitung aufgenommen wurden, werden hier angezeigt.  

## Wichtige Inputs

  - Migrationsworkshop
  - Fragebogen zur Migration
  - Einrichten der Kundeninfrastruktur und Konfiguration abgeschlossen
  - Konnektivitätsanforderungen erfüllt
  - Anmeldeinformationen vom Kunden bereitgestellt
  - Zeitplan für Batches (CSV-Dateien)

## Wichtige Ergebnisse

- Erfolgreiche Migration der Kundendaten

## Nächste Schritte

  - Kunde wird in den Prozess [Unterstützung der Erfolgserzielung](success-support-success-execution-partner-en.md) überführt.
  - Kunde wird in den Prozess [Durchführung der Erfolgsprüfung](success-conduct-success-review-partner-de.md) überführt.


## Zusammenfassung der Aktualisierung

| Datum       | Geändert durch       | Änderung von          |
| ---------- | ----------------- | ----------------      |
| 25.09.2019 | Celia Kennedy     | Partnerinhalt aktualisiert |
| 02.05.2019 | Celia Kennedy     | Veraltete Aufgaben entfernt |
| 06.03.2019 | Patric Grimwood   | Links unter „Nächste Schritte" aktualisiert |
| 26.02.2019 | Patric Grimwood   | Partner-Links aktualisiert |
| 11.12.2018 | Mark Eichenberger | Anleitung erstellt      |

[Startseite](http://partner-docs.microsoft.com)
