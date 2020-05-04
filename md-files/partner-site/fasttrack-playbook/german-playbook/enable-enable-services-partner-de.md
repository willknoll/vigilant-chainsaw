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

# Aktivieren der Dienste

Phase: **Aktivierung**

## Übersicht

Der Prozess zum Aktivieren der Dienste leitet einen Kunden durch die Konfiguration von Diensten für Nutzung, Migration und erste Erfahrungen der Vorteile der Dienstaktivierung.

## Ziele

  - Feststellen, ob Bereitstellung und Synchronisierung konfiguriert und aktiv sind.
  - Berechtigte Arbeitsbereiche sind in Tenant konfiguriert und bereit zur Nutzung.
  - Pilotanwender sind migriert und nutzen Dienste.

## Methode

### Anfordern des Migration Velocity Managers

Primäre Rolle: **FastTrack Manager**  
Gilt für: **Exchange/SharePoint/OneDrive for Business**

Falls noch kein Migration Velocity Manager (MVM) angefordert wurde, fordern Sie in der Analysephase einen MVM gemäß dem unter (Aufgabe 2278 MVM anfordern) beschriebenen Prozess an.

### Unterstützung der Aktivierung

Primäre Rolle: **FastTrack Manager**
Gilt für: **Alle Dienste**

Gegebenenfalls Durchführen von Synchronisierungsgesprächen mit Kunden und Unterstützung bei Aktivierungsaufgaben.
 
#### FTOP-Aufgaben

| Aufgaben-ID | Name der Aufgabe                                                                  | (E)rforderlich/(O)ptional |       FastTrack-Rolle       | Dienste                                      |
| ------- | -------------------------------------------------------------------------- | :----------------------: | :------------------------: | --------------------------------------------- |
| 1126    | Treffen mit Kunden-PM und technischer Leitung des Kunden zur Aktivierung von Core und Diensten  |            E             |     FastTrack Engineer     | Alle Dienste                                  |
| 1672    | Prüfen, Validieren und Bereitstellen des Migrationsfragebogens am Projektstandort |            E             | Migration Velocity Manager | Exchange/OneDrive for Business/SharePoint |

### Durchführen der Aktivierungsaufgaben

Primäre Rolle: **FastTrack Engineer**
Gilt für: **Alle Dienste**

Führen Sie die Aktivierungsaufgaben für alle erforderlichen Dienste durch. Einige Dienstaufgaben können:

  - Mit einem öffentlichen Assistenten verknüpft sein
  - Mit weiteren Hilfedokumenten verknüpft sein
  - Erforderlich sein, falls Migrationsleistung genutzt wird

#### FTOP-Aufgaben

| Aufgaben-ID | Name der Aufgabe                                                                                                | (E)rforderlich/(O)ptional |       FastTrack-Rolle       | Dienste                                                           |
| ------- | -------------------------------------------------------------------------------------------------------- | :----------------------: | :------------------------: | ------------------------------------------------------------------ |
#### FTOP-Aufgaben

| Aufgaben-ID | Name der Aufgabe                                                                                                | (E)rforderlich/(O)ptional |       FastTrack-Rolle       | Dienste                                                           |
| ------- | -------------------------------------------------------------------------------------------------------- | :----------------------: | :------------------------: | ------------------------------------------------------------------ |
| 4024    | Upgrade von Windows 7/8.1 auf Windows 10                                                                 |            E             |     FastTrack Engineer     | Windows 10                                                         |
| 4022    | Bereitstellungen von Office 365 ProPlus mit System Center                                                             |            E             |     FastTrack Engineer     | Windows 10                                                         |
| 4031    | Optimieren von Windows 10 und Office-Updatelieferung mit System Center                                          |            O             |            SME             | Windows 10                                                         |
| 4032    | Phasenweise Windows 10-Bereitstellung mit System Center                                                          |            O             |            SME             | Windows 10                                                         |
| 4033    | Phasenweise Bereitstellung von Office 365 ProPlus mit System Center                                                  |            O             |            SME             | Windows 10                                                         |
| 3992    | MVM für Kunden-Onboarding                                                                                  |            O             | Migration Velocity Manager | Exchange/OneDrive for Business/SharePoint                      |
| 2474    | Validierung der Migrationstoolkonfiguration und Durchführung der Testmigration                                         |            E             | Migration Velocity Manager | Exchange/OneDrive for Business/SharePoint                      |
| 3126    | OneDrive - Falls keine Migration, Installation des ODB-Synchronisierungsclients. Andernfalls Installation des Clients nach der Migration        |            O             |     FastTrack Engineer     | OneDrive for Business                                              |
| 3147    | OneDrive - {Assistent} Konfiguration von OneDrive for Business                                                      |            E             |     FastTrack Engineer     | OneDrive for Business                                              |
| 3125    | SharePoint/OneDrive - Validierten Benutzern wurden Lizenzen für SPO oder ODB zugewiesen                          |            O             |     FastTrack Engineer     | SharePoint/OneDrive for Business                                 |
| 1235    | SharePoint - {Assistent} Konfiguration von SharePoint Online                                                        |            E             |     FastTrack Engineer     | SharePoint                                                         |
| 3222    | SharePoint - {Assistent} Konfiguration von SharePoint Hybrid                                                        |            E             |     FastTrack Engineer     | SharePoint                                                         |
| 1158    | Exchange - Konfiguration von EXO                                                                                 |            E             |     FastTrack Engineer     | Exchange                                                           |
| 3223    | EDU: Aktivierung von Classroom und SDS                                                                              |            O             |     FastTrack Engineer     | Classroom/SDS                                                      |
| 3306    | Anforderung von Migrationsinfrastrukturbuild/-dienst                                                           |            E             | Migration Velocity Manager | Exchange/OneDrive for Business/SharePoint                      |
| 3677    | Exchange - Migration von Gmail/Group Wise: Konfiguration von ODME                                                  |            O             | Migration Velocity Manager | Exchange                                                           |
| 1941    | Exchange - Anwendung der Adressrichtlinie und Validierung neuer/Original-SMTP-Adressen, die als Proxy-Adressen gelistet werden |            O             |     FastTrack Engineer     | Exchange                                                           |
| 1159    | Exchange - {Assistent} Konfiguration des E-Mail-Flusses in EXO                                                           |            O             |     FastTrack Engineer     | Exchange                                                           |
| 3687    | Teams - Core Plus-Unterstützung                                                                             |            E             |            SME             | Teams                                                              |
| 1171    | Exchange - {Assistent} Einrichten der IMAP-Migration                                                                 |            O             |     FastTrack Engineer     | Exchange                                                           |
| 3311    | Exchange - Notes-Migration: Anleitung durch Autoimport-Tool für das Importieren von Planungsbatches                 |            O             | Migration Velocity Manager | Exchange                                                           |
| 3160    | Exchange - {Assistent} Exchange Minimal Hybrid                                                              |            O             |     FastTrack Engineer     | Exchange                                                           |
| 3159    | Exchange - {Assistent} Exchange 2016 Hybrid                                                                 |            O             |     FastTrack Engineer     | Exchange                                                           |
| 3158    | Exchange - {Assistent} Exchange 2013 Hybrid                                                                 |            O             |     FastTrack Engineer     | Exchange                                                           |
| 3157    | Exchange - {Assistent} Exchange 2010 Hybrid                                                                 |            O             |     FastTrack Engineer     | Exchange                                                           |
| 3156    | Exchange - {Assistent} Mehrstufige Exchange-Migration                                                            |            O             |     FastTrack Engineer     | Exchange                                                           |
| 3155    | Exchange - {Assistent} Exchange-Übernahmemigration                                                           |            O             |     FastTrack Engineer     | Exchange                                                           |
| 1240    | Yammer - {Assistent} Konfiguration von Yammer                                                                       |            E             |     FastTrack Engineer     | Yammer                                                             |
| 3727    | Teams - Durchführen des Workshops zum Anrufqualitäts-Dashboard                                                          |            E             |            SME             | Teams                                                              |
| 3725    | Teams - Konfiguration der wichtigsten Zusammenarbeit und Meetings (VoIP)                                                          |            E             |            SME             | Teams                                                              |
| 3724    | Teams - Konfiguration erweiterter Sprachdienste (PSTN)                                                         |            E             |            SME             | Teams                                                              |
| 3728    | Teams - Technische Aktivierung des Teams-Dienstes                                                                 |            E             |     FastTrack Manager      | Teams                                                              |
| 2218    | Intune - Aktivierung von Microsoft Intune                                                                         |            E             |            SME             | Intune                                                             |
| 2217    | Intune - Konfiguration der Verwaltung mobiler Geräte für Office 365                                               |            O             |     FastTrack Engineer     | Intune                                                             |
| 3682    | Intune - Aktivierung der Intune-Co-Verwaltung                                                                     |            O             |     FastTrack Engineer     | Intune                                                             |
| 2415    | AADP - {Assistent} Konfiguration von AADP Core                                                                      |            O             |     FastTrack Engineer     | AADP                                                               |
| 1247    | Bereitstellung von Office 365 ProPlus                                                                                |            E             |     FastTrack Engineer     | Office ProPlus                                                     |
| 1641    | Einrichten der benutzerdefinierten Domäne                                                                                      |            E             |     FastTrack Engineer     | Haupt-Onboarding                                                    |
| 1141    | {Assistent} Einrichten der Verzeichnissynchronisierung (Azure AD Connect)                                             |            O             |     FastTrack Engineer     | Haupt-Onboarding                                                    |
| 1148    | {Assistent} Installation und Konfiguration von ADFS                                                                      |            O             |     FastTrack Engineer     | Haupt-Onboarding                                                    |
| 1134    | Erstellen von Cloud-IDs                                                                                         |            O             |     FastTrack Engineer     | Haupt-Onboarding                                                    |
| 3267    | Outlook Mobile - Konfiguration von Outlook Mobile                                                                |            E             |     FastTrack Engineer     | Outlook Mobile                                                     |
| 3161    | Power BI - Konfiguration von Power BI                                                                            |            O             |     FastTrack Engineer     | PowerBI                                                            |
| 2461    | Umgang mit PowerBI-Kunden während Widget-Beteiligung - Siehe weitere Informationen                                        |            O             |     FastTrack Engineer     | PowerBI                                                            |
| 2570    | Konfiguration von Cloud PBX mit PSTN Calling                                                                    |            O             |     FastTrack Engineer     | Skype for Business - PSTN Calling/Skype for Business - Cloud PBX |
| 2201    | SfB - Konfiguration von SfB Split Domain für Lync 2010/2013 Server                                                   |            O             |     FastTrack Engineer     | Skype for Business                                                 |
| 2567    | SfB - Konfiguration von SfB Split Domain für SfB 2015 Server                                                     |            O             |     FastTrack Engineer     | Skype for Business                                                 |
| 2260    | SfB - Konfiguration von SfB Room System-Konto                                                                  |            O             |     FastTrack Engineer     | Skype for Business                                                 |
| 2980    | SfB - {Assistent} Konfiguration von Skype for Business-Standardfunktionen                                            |            O             |     FastTrack Engineer     | Skype for Business                                                 |
| 3047    | Konfiguration von Cloud PSTN Conferencing                                                                        |            O             |     FastTrack Engineer     | Skype for Business - PSTN Conferencing                             |
| 2483    | Konfiguration von Project Professional                                                                           |            E             |     FastTrack Engineer     | Project                                                            |
| 2266    | SfB - Konfiguration von Skype for Business Core-Funktionen (nur IM/P)                                             |            O             |     FastTrack Engineer     | Skype for Business                                                 |
| 3999    | AIP - Aktivierung des Tenants und Konfiguration des Test-Clients                                                          |            E             |            SME             | AIP                                                                |
| 2491    | Konfiguration von Project Online/Project Lite                                                                  |            E             |     FastTrack Engineer     | Project                                                            |
| 4000    | AIP - Erstellung eines Klassifizierungssystems                                                                     |            O             |            SME             | AIP                                                                |
| 3954    | Erstellung von Übergangsdokumenten und Übergang zum Migrationsteam                                             |            O             | Migration Velocity Manager | Exchange/OneDrive for Business/SharePoint                      |
| 4001    | AIP - Dokumente mit Bezeichnung versehen                                                                                    |            O             |            SME             | AIP                                                                |
| 4002    | AIP - Anwendung von Information Protection                                                                       |            O             |            SME             | AIP                                                                |
| 4003    | AIP - Installation der Clients                                                                                    |            E             |            SME             | AIP                                                                |
| 4004    | AIP - Installation weiterer Funktionen                                                                             |            O             |            SME             | AIP                                                                |
| 4005    | AIP - Prüfung der Zugriffsprotokolle                                                                                 |            O             |            SME             | AIP                                                                |
| 4006    | Arbeit mit Scanner                                                                                        |            O             |            SME             | AIP                                                                |
| 4081    | OATP – Konfiguration von P1-Einstellungen                                                                             |            O             |     FastTrack Engineer     | Exchange/OATP                                                    |
| 4082    | OATP – Prüfung der P2-Funktionen                                                                            |            O             |            SME             | Exchange/OATP                                                    |
| 4083    | MDATP – Konfiguration der Einstellungen                                                                               |            E             |            SME             | MDATP                                                              |

### Teams - Übergang von Skype zu Teams

Primäre Rolle: **SME**  
Gilt für: **Teams**

Wenn der Kunde beim Übergang von Skype zu Teams Unterstützung durch einen Teams-SME oder einen qualifizierten FastTrack-Partner für **proaktive Beteiligungen für die mittlere Ebene (Kunden mit 2.000 bis 10.000 aktiven Benutzern in allen Arbeitsbereichen)** erhält, nutzen Sie die folgenden Aufgaben, um den aktuellen Status der Beteiligung zu erfassen.

**Ziehen Sie für Kunden mit weniger als 2.000 bis 10.000 aktiven SfBO-Benutzern** den ergänzenden Leitfaden zu Rollen und Zuständigkeiten für den Übergang von SfBO zu Teams zurate. Sehen Sie hierzu Folie 6 im angehängten [**Foliensatzzu Rollen und Verantwortungsbereichen**.](https://aka.ms/FTCTeamsRnRs)  

**Qualifizierte FastTrack-Partner**​​ – Wenn Sie die Leitung des Übergangs des Kunden inne haben, informieren Sie weiterhin Ihren zugewiesenen SME über die Details Ihrer Beteiligung, damit er den Aufgabenstatus für Sie verfolgen kann. Liefern Sie das anvisierte Datum für den kompletten Wechsel zu Teams und eine Zusammenfassung des Kundenstatus. ​
 
#### FTOP-Aufgaben

| Aufgaben-ID | Name der Aufgabe                                     | (E)rforderlich/(O)ptional |   FastTrack-Rolle   | Dienste |
| ------- | --------------------------------------------- | :----------------------: | :----------------: | -------- |
| 3685    | Teams - Analyse der internen Vorbereitung         |            E             | FastTrack Engineer | Teams    |
| 3716    | Teams - Übersicht des Kunden-Upgrades             |            E             |        SME         | Teams    |
| 3688    | Teams - Strategie und Planung des Kunden        |            E             |        SME         | Teams    |
| 3689    | Teams - Upgrade des Kunden                    |            E             |        SME         | Teams    |
| 3722    | Teams - Reaktive Unterstützung beim Übergang für die mittlere Ebene |            E             |        SME         | Teams    |

### Berechtigung zur Kundenumfrage

Primäre Rolle: **FastTrack Manager**  
Gilt für: **Alle Dienste**

Aktualisieren Sie die Informationen der Kundenumfrage im Hinblick auf Berechtigung und Kontakte in den entsprechenden Aufgaben.

#### FTOP-Aufgaben

| Aufgaben-ID | Name der Aufgabe               | (E)rforderlich/(O)ptional |  FastTrack-Rolle   | Dienste     |
| ------- | ----------------------- | :----------------------: | :---------------: | ------------ |
| 3690    | Identifizierung des Umfragekontakts |            O             | FastTrack Manager | Alle Dienste |

### Alle im Umfang enthaltenen Dienste aktiviert

Primäre Rolle: **FastTrack Manager**  
Gilt für: **Alle Dienste**

Verschieben Sie den Kunden in die Migrationsphase und schließen Sie die entsprechende Aufgabe ab.

#### FTOP-Aufgaben

| Aufgaben-ID | Name der Aufgabe                                                                      | (E)rforderlich/(O)ptional |  FastTrack-Rolle   | Dienste     |
| ------- | ------------------------------------------------------------------------------ | :----------------------: | :---------------: | ------------ |
| 1701    | Aktivierung abgeschlossen: Alle im Umfang enthaltenen Dienste sind aktiviert; Migrationstools sind konfiguriert |            E             | FastTrack Manager | Alle Dienste |

### Aktivierung zusätzlicher Enterprise-Leistungsangebote

Primäre Rolle: **FastTrack-Entwickler**
Gilt für: **Alle Dienste**

Nur für genehmigte Enterprise-Kunden mit mindestens 20.000 Arbeitsplatzlizenzen oder mit einer Ausnahme.  

#### FTOP-Aufgaben

| Aufgaben-ID | Name der Aufgabe                                                 | (E)rforderlich/(O)ptional |   FastTrack-Rolle   | Dienste        |
| ------- | --------------------------------------------------------- | :----------------------: | :----------------: | --------------- |
| 3241    | Konfiguration von AD FS Client-Zugriffsrichtlinien                    |            O             | FastTrack Engineer | Haupt-Onboarding |
| 3243    | Georedundante AD FS-Konfigurationsanleitung                 |            O             | FastTrack Engineer | Haupt-Onboarding |
| 3212    | Exchange - Leitfaden für die Integration von E-Mail-fähigen Anwendungen |            O             | FastTrack Engineer | Exchange        |
| 3213    | Exchange - Leitfaden für die Koexistenz von öffentlichen Exchange-Ordnern  |            O             | FastTrack Engineer | Exchange        |
| 3238    | Exchange - Aktivierung der Lync/SfB-Integration                    |            O             | FastTrack Engineer | Exchange        |

### Berechtigung zur Kundenumfrage

Primäre Rolle: **FastTrack Manager**
Gilt für: **Alle Dienste**

Aktualisieren Sie die Informationen der Kundenumfrage im Hinblick auf Berechtigung und Kontakte in den entsprechenden Aufgaben.

#### FTOP-Aufgaben

| Aufgaben-ID | Name der Aufgabe               | (E)rforderlich/(O)ptional |  FastTrack-Rolle   | Dienste     |
| ------- | ----------------------- | :----------------------: | :---------------: | ------------ |
| 3690    | Identifizierung des Umfragekontakts |            O             | FastTrack Manager | Alle Dienste |

### Alle im Umfang enthaltenen Dienste aktiviert

Primäre Rolle: **FastTrack Manager**
Gilt für: **Alle Dienste**

Verschieben Sie den Kunden in die Migrationsphase und schließen Sie die entsprechende Aufgabe ab.

#### FTOP-Aufgaben

| Aufgaben-ID | Name der Aufgabe                                                                      | (E)rforderlich/(O)ptional |  FastTrack-Rolle   | Dienste     |
| ------- | ------------------------------------------------------------------------------ | :----------------------: | :---------------: | ------------ |
| 1701    | Aktivierung abgeschlossen: Alle im Umfang enthaltenen Dienste sind aktiviert; Migrationstools sind konfiguriert |            E             | FastTrack Manager | Alle Dienste |

### Nicht kategorisierte Aufgaben (Aktivierung von Diensten)

Primäre Rolle: **-**  
Gilt für: **Alle Dienste**

Nicht kategorisierte Aufgaben, die noch nicht in die FastTrack-Anleitung aufgenommen wurden, werden in diesem Abschnitt angezeigt.

#### FTOP-Aufgaben

| Aufgaben-ID | Name der Aufgabe                | (E)rforderlich/(O)ptional |   FastTrack-Rolle   | Dienste |
| ------- | ------------------------ | :----------------------: | :----------------: | -------- |
| 2550    | {Assistent} Konfiguration von AzRMS |            O             | FastTrack Engineer | AIP      |



## Wichtige Inputs

  - Alle in der Checkliste für die Korrektur aufgeführten Aufgaben sind abgeschlossen. 
  - Der Kunde ist mit Identitäten vertraut und schließt alle Korrekturen ab. 
  - Die lokale Umgebung des Kunden wird korrigiert/konfiguriert, um die Nutzung von Clouddiensten zu ermöglichen (einschließlich Hybridkoexistenz).
  - Der Kunde ist bereit, Dienste zu nutzen. 

## Wichtige Ergebnisse

  - Alle gewünschten Arbeitsbereiche sind konfiguriert und bereit zur Nutzung. 
  - Pilotanwender wurden aktiviert und migriert. 

## Nächste Schritte

  - Ermutigen Sie zur Einführung/Nutzung zusätzlicher Arbeitsbereiche im Rahmen des Prozesses zur [Unterstützung der Erfolgserzielung](success-support-success-execution-partner-en.md).
  - Aktualisierung des Dienststatus zur Einführung oder Migration
  
[Startseite](http://partner-docs.microsoft.com)

## Zusammenfassung aktualisieren

| Datum       | Geändert durch       | Änderung von          |
| ---------- | ----------------- | ----------------      |
| 25.09.2019  | Celia Kennedy     | Partnerinhalt aktualisiert  |
| 03.05.2019  | Celia Kennedy     | Veraltete Aufgaben entfernt  |
| 06.03.2019 | Patric Grimwood   | Links unter „Nächste Schritte" aktualisiert |
| 26.02.2019 | Patric Grimwood   | Partner-Links aktualisiert |
| 26.10.2018 | Mark Eichenberger | Anleitung erstellt      |

[Startseite](http://partner-docs.microsoft.com)
