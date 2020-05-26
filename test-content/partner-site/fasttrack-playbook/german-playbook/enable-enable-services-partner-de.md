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

# Aktivierung von Diensten

Phase: **Aktivierung**

## Übersicht

Der Prozess "Aktivierung von Diensten" leitet einen Kunden durch die Konfiguration von Diensten für Nutzung, Migration und erste Erfahrungen der Vorteile der Dienstaktivierung.

##  Ziele

  - Feststellen, ob Bereitstellung und Synchronisierung konfiguriert und aktiv sind.
  - Berechtigte Arbeitsbereiche sind im Tenant konfiguriert und bereit zur Nutzung.
  - Pilotanwender sind migriert und nutzen Dienste.

## Ansatz

### Anfordern des Migration Velocity Managers

Primäre Rolle: **FastTrack Manager**  
Gilt für: **Exchange/SharePoint/OneDrive for Business**

Falls noch kein Migration Velocity Manager (MVM) angefordert wurde, fordern Sie in der Analysephase einen MVM gemäß dem unter (Aufgabe 2278 MVM anfordern) beschriebenen Prozess an.

### Unterstützung der Aktivierung

Primäre Rolle: **FastTrack Manager**  
Konzepte: **Kundenintegrität/RFA/Adressierung**  
Gilt für: **Alle Dienste**

Gegebenenfalls Durchführen von Synchronisierungsgesprächen mit Kunden und Unterstützung bei Aktivierungsaufgaben.  

**Qualitätseingaben** 

- Kontakte in FTOP wurden aktualisiert
- Namen von teilnehmenden Kunden und Rollen sind in den Notizen zur technischen Aktivierung aufgeführt

**Qualitätsausgaben** 

- (Gegebenenfalls) Zieldatum() für Aktualisierung von Arbeitsbereichen
- (Gegebenenfalls) L1/L2-Statusänderungen
- In den Notizen zur Beteiligungsaktivierung oder Beteiligungsverwaltung sind alle Zieldatumsänderungen und/oder L1/L2-Statusänderungen dokumentiert
- (Gegebenenfalls) Notizen zur technischen Aktivierung mit Bestätigung, dass der Fragebogen zur Geschwindigkeitsmigration geprüft und validiert wurde

#### FTOP-Aufgaben

| Aufgaben-ID | Name der Aufgabe      | (E) Erforderlich (O) Optional |       FastTrack-Rolle       | Dienste                                      |
| ------- | ----------------------------------------------------------------------------------- | :----------------------: | :------------------------: | --------------------------------------------- |
| 1126    | Treffen mit dem Projektleiter und den technischen Leitern des Kunden zur Aktivierung von Core und Diensten           |            E             |     FastTrack Engineer     | Alle Dienste                                  |
| 1672    | Prüfung und Validierung des Migrationsfragebogens auf der Site für Migrationszusammenarbeit |            E             | Geschwindigkeitsmigrationsmanager | Exchange/OneDrive for Business/SharePoint |

### Durchführen der Aktivierungsaufgaben

Primäre Rolle: **FastTrack Engineer**  
Konzepte: **Kundenintegrität/RFA/Adressierung**  
Gilt für: **Alle Dienste**

Führen Sie die Aktivierungsaufgaben für alle erforderlichen Dienste durch. Mögliche Dienstaufgaben:

  - Mit einem öffentlichen Assistenten verknüpft sein
  - Mit weiteren Hilfedokumenten verknüpft sein
  - Erforderlich sein, falls Migrationsleistung genutzt wird

**Qualitätseingaben**

- In den Notizen zur technischen Aktivierung oder Umgebung ist (gegebenenfalls) Folgendes verzeichnet:
    - Identitätsentscheidungen des Kunden 
    - Bestätigung, dass der Kunde Identitäten eingerichtet, konfiguriert und/oder synchronisiert hat 
    - Netzwerkentscheidungen des Kunden 
    - Kunde hat Richtlinien für bedingten Zugriff konfiguriert, wobei der Wert für die Migrationsdurchführung durch Microsoft im Datenmigrationsabschnitt des Arbeitsbereichs auf der Registerkarte FTOP-Dienste "TRUE" ist. 
    - Kundenentscheidungen zu Hybrid- und lokaler Mobilität sowie zu lokalen Verbundanforderungen und Domänen wurden entsprechend korrigiert und konfiguriert
    - Kunde hat die Edge-Site-Erkennungsanalyse für ältere Sites mit IE abgeschlossen

**Qualitätsausgaben**

- In den Notizen zur technischen Aktivierung ist (gegebenenfalls) Folgendes verzeichnet:: 
    - Bestätigung, dass der Kunde das entsprechende FastTrack-Assistenten-Cmdlet (pro Umgebung) ausgeführt hat, um etwaige benutzerdefinierte Domäneneinrichtung und Konfiguration in Hybrid-Umgebungen zu validieren 
    - Mit ViewPoint wurde die Verzeichnissynchronisierung validiert, dass der ADFS-Konfigurationsassistent erfolgreich abgeschlossen wurde oder der Kunde mit Cloud-IDs auf Dienste zugreifen kann
    - Kunde hat die Konfigurations- und Validierungsaktivitäten für Hauptdienste sowie eventuelle verifizierte berechtigte M365-Dienste abgeschlossen
        - Nutzungsstatus (L1) = In Bearbeitung
        - Grund (L2) = Lösung oder Benutzereinführung
        - Mit Lynx wurde bestätigt, dass RFA-Kunden entweder 100 aktive Benutzer oder 10 % Nutzung bei weniger als 1.000 Lizenzen erreicht haben
    - Testmigration wurde erfolgreich mit dem Pilotmigrationsplan des Kunden abgeschlossen und die Anforderung von Migrationsbuild wurde erfüllt

#### FTOP-Aufgaben

| Aufgaben-ID | Name der Aufgabe                                                                                                | (E) Erforderlich (O) Optional |       FastTrack-Rolle       | Dienste                                                           |
| ------- | -------------------------------------------------------------------------------------------------------- | :----------------------: | :------------------------: | ------------------------------------------------------------------ |
| 3992    | MVM für Kunden-Onboarding                                                                                  |            O             | Geschwindigkeitsmigrationsmanager | Exchange/OneDrive for Business/SharePoint                      |
| 2474    | Validierung der Migrationstoolkonfiguration und Durchführung der Testmigration                                         |            E             | Geschwindigkeitsmigrationsmanager | Exchange/OneDrive for Business/SharePoint                      |
| 3126    | OneDrive - Falls keine Migration, Installation des ODB-Synchronisierungsclients. Andernfalls Installation des Clients nach der Migration        |            O             |     FastTrack Engineer     | OneDrive for Business                                              |
| 3147    | OneDrive - {Assistent} Konfiguration von OneDrive for Business                                                      |            E             |     FastTrack Engineer     | OneDrive for Business                                              |
| 3125    | SharePoint/OneDrive - Validierung, dass Benutzern Lizenzen für SPO oder ODB zugewiesen wurden                          |            O             |     FastTrack Engineer     | SharePoint/OneDrive for Business                                 |
| 1235    | SharePoint - {Assistent} Konfiguration von SharePoint Online                                                        |            E             |     FastTrack Engineer     | SharePoint                                                         |
| 3222    | SharePoint - {Assistent} Konfiguration von SharePoint Hybrid                                                        |            O             |     FastTrack Engineer     | SharePoint                                                         |
| 1158    | Exchange - Konfiguration von EXO                                                                                 |            E             |     FastTrack Engineer     | Exchange                                                           |
| 3223    | EDU: Aktivierung von Classroom und SDS                                                                              |            O             |     FastTrack Engineer     | Classroom/SDS                                                      |
| 3306    | Anforderung von Migrationsinfrastrukturbuild/-dienst                                                           |            E             | Geschwindigkeitsmigrationsmanager | Exchange/OneDrive for Business/SharePoint                      |
| 3677    | Exchange - GroupWise-Migration: Konfiguration von ODME                                                  |            O             | Geschwindigkeitsmigrationsmanager | Exchange                                                           |
| 1941    | Exchange - Anwendung der Adressrichtlinie und Validierung neuer/Original-SMTP-Adressen, die als Proxy-Adressen gelistet werden |            O             |     FastTrack Engineer     | Exchange                                                           |
| 3687    | Teams - Core Plus-Unterstützung                                                                             |            E             |            SME             | Teams                                                              |
| 1159    | Exchange - {Assistent} Konfiguration des E-Mail-Flusses in EXO                                                           |            O             |     FastTrack Engineer     | Exchange                                                           |
| 1171    | Exchange - {Assistent} Einrichten der IMAP-Migration                                                                 |            O             |     FastTrack Engineer     | Exchange                                                           |
| 3311    | Exchange - Notes-Migration: Leitfaden durch Autoimport-Tool für das Importieren von Planungsbatches                 |            O             | Geschwindigkeitsmigrationsmanager | Exchange                                                           |
| 3160    | Exchange - {Assistent} Exchange Minimal Hybrid                                                              |            O             |     FastTrack Engineer     | Exchange                                                           |
| 3159    | Exchange - {Assistent} Exchange 2016 Hybrid                                                                 |            O             |     FastTrack Engineer     | Exchange                                                           |
| 3158    | Exchange - {Assistent} Exchange 2013 Hybrid                                                                 |            O             |     FastTrack Engineer     | Exchange                                                           |
| 3157    | Exchange - {Assistent} Exchange 2010 Hybrid                                                                 |            O             |     FastTrack Engineer     | Exchange                                                           |
| 3156    | Exchange - {Assistent} Mehrstufige Exchange-Migration                                                            |            O             |     FastTrack Engineer     | Exchange                                                           |
| 3155    | Exchange - {Assistent} Exchange-Übernahmemigration                                                           |            O             |     FastTrack Engineer     | Exchange                                                           |
| 1240    | Yammer - {Assistent} Konfiguration von Yammer                                                                       |            E             |     FastTrack Engineer     | Yammer                                                             |
| 3727    | Teams - Durchführen des Workshops zum Anrufqualitäts-Dashboard                                                          |            E             |            SME             | Teams                                                              |
| 3725    | Teams - Konfiguration der wichtigsten Zusammenarbeit und Meetings (VOIP)                                                          |            E             |            SME             | Teams                                                              |
| 3724    | Teams - Konfiguration erweiterter Sprachdienste (PSTN)                                                         |            E             |            SME             | Teams                                                              |
| 3728    | Teams - Technische Aktivierung des Teams-Dienstes                                                                 |            E             |     FastTrack Manager      | Teams                                                              |
| 2218    | Aktivierung von Microsoft Intune                                                                                  |            E             |     SME     | Intune                                                             |
| 2415    | AADP - {Assistent} Konfiguration von AADP Core                                                                      |            O             |     FastTrack Engineer     | AADP                                                               |
| 1641    | Einrichten der benutzerdefinierten Domäne                                                                                      |            E             |     FastTrack Engineer     | Haupt-Onboarding                                                    |
| 1141    | {Assistent} Einrichten der Verzeichnissynchronisierung (Azure AD Connect)                                             |            O             |     FastTrack Engineer     | Haupt-Onboarding                                                    |
| 1134    | Erstellen von Cloud-IDs                                                                                         |            O             |     FastTrack Engineer     | Haupt-Onboarding                                                    |
| 1148    | {Assistent} Installation und Konfiguration von ADFS                                                                      |            O             |     FastTrack Engineer     | Haupt-Onboarding                                                    |
| 3267    | Outlook Mobile - Konfiguration von Outlook Mobile                                                                |            E             |     FastTrack Engineer     | Outlook Mobile                                                     |
| 3161    | Power BI - Konfiguration von Power BI                                                                            |            O             |     FastTrack Engineer     | PowerBI                                                            |
| 2461    | Umgang mit PowerBI-Kunden während Widget-Beteiligung - Siehe weitere Informationen                                        |            O             |     FastTrack Engineer     | PowerBI                                                            |
| 2570    | Konfiguration von Cloud PBX mit PSTN Calling                                                                    |            O             |     FastTrack Engineer     | Skype for Business - Festnetzanruf/Skype for Business - Cloud PBX |
| 2201    | SfB - Konfiguration von SfB Split Domain für Lync 2010/2013 Server                                                   |            O             |     FastTrack Engineer     | Skype for Business                                                 |
| 2567    | SfB - Konfiguration von SfB Split Domain für SfB 2015 Server                                                     |            O             |     FastTrack Engineer     | Skype for Business                                                 |
| 2260    | SfB - Konfiguration von SfB Room System-Konto                                                                  |            O             |     FastTrack Engineer     | Skype for Business                                                 |
| 2980    | SfB - {Assistent} Konfiguration von Skype for Business-Standardfunktionen                                            |            O             |     FastTrack Engineer     | Skype for Business                                                 |
| 3047    | Konfiguration von Cloud PSTN Conferencing                                                                        |            O             |     FastTrack Engineer     | Skype for Business - PSTN Conferencing                             |
| 2483    | Konfiguration von Project Professional                                                                           |            E             |     FastTrack Engineer     | Projekt                                                            |
| 2266    | SfB - Konfiguration von Skype for Business Core-Funktionen (nur IM/P)                                             |            O             |     FastTrack Engineer     | Skype for Business                                                 |
| 2491    | Konfiguration von Project Online/Project Lite                                                                  |            E             |     FastTrack Engineer     | Projekt                                                            |
|| 3999    | [MIP - Aktivieren des Tenants und Konfigurieren des Testclients](https://aka.ms/PartnerMIPAdoptionGuide)                                                          |            E             |            SME             | AIP                                                                |
| 3954    | Erstellung von Übergangsdokumenten und Übergang zum Migrationsteam                                             |            O             | Geschwindigkeitsmigrationsmanager | Exchange/OneDrive for Business/SharePoint                      |
| 4000    | MIP – Konfiguration von Vertraulichkeitsbezeichnungen                                                                   |            O             |            SME             | AIP                                                                |
| 4001    | MIP – Testdokument-Kennzeichnung                                                                                 |            O             |            SME             | AIP                                                                |
| 4002    | MIP – Erstellung von Schutzrichtlinien                                                                   |            O             |            SME             | AIP                                                                |
| 4003    | MIP – Installation von Clients                                                                                  |            O             |            SME             | AIP                                                                |
| 4004    | MIP – Hilfestellung zu BYOK                                                                             |            O             |            SME             | AIP                                                                |
| 4006    | MIP – Arbeit mit Scanner für einheitliche Bezeichnungen                                                                                 |            O             |            SME             | AIP                                                                |
| 4081    | OATP – Konfiguration von P1-Einstellungen                                                                             |            O             |     FastTrack Engineer     | Exchange/OATP                                                    |
| 4082    | OATP – Prüfung von P2-Funktionen                                                                            |            O             |            SME             | Exchange/OATP                                                    |
| 4083    | MDATP – Konfiguration von Einstellungen                                                                               |            E             |            SME             | MDATP                                                              |
| 4087    | Intune-PC-Agent - Einstellung als veraltet                                                                              |            O             |            SME             | Intune                                                             |
| 4097    | Microsoft Edge - Bereitstellung und Konfiguration                                                                      |            E             |      FastTrack Engineer    | Edge                                                               |
| 4098    | Microsoft Edge - Richtlinienprüfung und Konfiguration                                                               |            E             |            SME             | Edge                                                               |

### Durchführen der Get Modern-Aktivierungsaufgaben  

Primäre Rolle: **FastTrack Engineer**  
Konzepte: **Kundenintegrität/RFA/Adressierung**  
Gilt für: **Office ProPlus/Windows 10**

Schließen Sie die Aufgaben der Get Modern-Aktivierung ab.  

#### FTOP-Aufgaben

| Aufgaben-ID | Name der Aufgabe                                     | (E) Erforderlich (O) Optional | FastTrack-Rolle | Dienste |
| ------- | --------------------------------------------- | :----------------------: | :------------: | -------- |
| 4024    | Upgrade von Windows 7/8.1 auf Windows 10                                                                 |            E             |     FastTrack Engineer     | Windows 10                                                         |
| 4031    | Optimieren von Windows 10 und der Office-Updatebereitstellung mit System Center                                          |            O             |            SME             | Windows 10                                                         |
| 4032    | Phasenweise Windows 10-Bereitstellung mit System Center                                                          |            O             |            SME             | Windows 10                                                         |
| 1247    | Bereitstellung von Office 365 ProPlus                                                                                |            E             |     FastTrack Engineer     | Office ProPlus                                                     |
| 4033    | Phasenweise Bereitstellung von Office 365 ProPlus mit System Center                                                  |            O             |            SME             | Office ProPlus                                                         |
| 3650    | Office ProPlus - OPP-Beschleunigung |            O             | FastTrack Manager | Office ProPlus |

### Teams - Übergang von Skype zu Teams

Primäre Rolle: **SME**  
Gilt für: **Teams**

Wenn der Kunde beim Übergang von Skype zu Teams Unterstützung durch einen Teams-SME oder einen qualifizierten FastTrack-Partner für **proaktive Beteiligungen für die mittlere Ebene (Kunden mit 2.000 bis 10.000 aktiven SfBO-Benutzern)** erhält, nutzen Sie die folgenden Aufgaben, um den aktuellen Status der Beteiligung zu erfassen.

**Ziehen Sie für Kunden mit weniger als 2.000 bis 10.000 aktiven SfBO-Benutzern** den ergänzenden Leitfaden zu Rollen und Zuständigkeiten für den Übergang von SfBO zu Teams zurate. Sehen Sie hierzu Folie 6 im angehängten [**Foliensatz zu Rollen und Verantwortungsbereichen**.](https://aka.ms/FTCTeamsRnRs)  

**Qualifizierte FastTrack-Partner**​​ – Wenn Sie die Leitung des Übergangs des Kunden inne haben, informieren Sie weiterhin Ihren zugewiesenen SME über die Details Ihrer Beteiligung, damit er den Aufgabenstatus für Sie verfolgen kann. Liefern Sie das anvisierte Datum für den kompletten Wechsel zu Teams und eine Zusammenfassung des Kundenstatus. ​
 
####  FTOP-Aufgaben

| Aufgaben-ID | Name der Aufgabe                                     | (E) Erforderlich (O) Optional |   FastTrack-Rolle   | Dienste |
| ------- | --------------------------------------------- | :----------------------: | :----------------: | -------- |
| 3685    | Teams - Analyse der internen Vorbereitung         |            E             | FastTrack Engineer | Teams    |
| 3716    | Teams - Übersicht des Kunden-Upgrades             |            E             |        SME         | Teams    |
| 3688    | Teams - Strategie und Planung des Kunden        |            E             |        SME         | Teams    |
| 3689    | [Teams - Upgrade des Kunden](https://aka.ms/AA6vhy4)                    |            E             |        SME         | Teams    |
| 3722    | Teams - Reaktive Unterstützung beim Übergang für die mittlere Ebene |            E             |        SME         | Teams    |

### Berechtigung zur Kundenumfrage

Primäre Rolle: **FastTrack Manager**  
Konzepte: **Kundenintegrität/RFA/Adressierung**  
Gilt für: **Alle Dienste**

Aktualisieren Sie die Informationen der Kundenumfrage im Hinblick auf Berechtigung und Kontakte in den entsprechenden Aufgaben.  

**Qualitätseingaben**

- Kontakte in FTOP werden aktualisiert, und veraltete Kontakte werden entfernt  

**Qualitätsausgaben**

- Keine

#### FTOP-Aufgaben

| Aufgaben-ID | Name der Aufgabe               | (E) Erforderlich (O) Optional |  FastTrack-Rolle   | Dienste     |
| ------- | ----------------------- | :----------------------: | :---------------: | ------------ |
| 3690    | Identifizierung des Umfragekontakts |            E             | FastTrack Manager | Alle Dienste |

### Alle im Umfang enthaltenen Dienste aktiviert

Primäre Rolle: **FastTrack Manager**  
Konzepte: **Kundenintegrität/RFA/Adressierung**  
Gilt für: **Alle Dienste**

Verschieben Sie den Kunden in die Migrationsphase und schließen Sie die entsprechende Aufgabe ab.

####  FTOP-Aufgaben

| Aufgaben-ID | Name der Aufgabe                                                                      | (E) Erforderlich (O) Optional |  FastTrack-Rolle   | Dienste     |
| ------- | ------------------------------------------------------------------------------ | :----------------------: | :---------------: | ------------ |
| 1701    | Aktivierung abgeschlossen: Alle im Umfang enthaltenen Dienste sind aktiviert; Migrationstools sind konfiguriert |            E             | FastTrack Manager | Alle Dienste |

## Wichtige Inputs

  - Alle in der Korrektur-Checkliste aufgeführten Aufgaben sind abgeschlossen. 
  - Der Kunde ist mit Identitäten vertraut und schließt alle Korrekturen ab. 
  - Die lokale Umgebung des Kunden wird korrigiert/konfiguriert, um die Nutzung von Clouddiensten zu ermöglichen (einschließlich Hybridkoexistenz).
  - Der Kunde ist bereit, Dienste zu nutzen. 

##  Wichtige Ergebnisse

  - Alle gewünschten Arbeitsbereiche sind konfiguriert und bereit zur Nutzung. 
  - Pilotanwender wurden aktiviert und migriert. 

## Nächste Schritte

  - Ermutigen Sie zur Einführung/Nutzung zusätzlicher Arbeitsbereiche im Rahmen des Prozesses zur [Unterstützung der Erfolgserzielung](success-support-success-execution-partner-de.md).
  - Aktualisieren Sie den Dienststatus in **Einführung** oder **Migration**.  

### Aktivierung zusätzlicher Enterprise-Leistungsangebote

Primäre Rolle: **FastTrack Engineer**  
Konzepte: **Adressierung/RFA/Kundenintegrität**  
Gilt für: **Alle Dienste**

Nur für genehmigte Enterprise-Kunden mit mindestens 20.000 Arbeitsplatzlizenzen oder einer Ausnahme.  

**Qualitätseingaben**

- In den Notizen zur technischen Aktivierung oder Umgebung ist (gegebenenfalls) Folgendes verzeichnet:
    - Qualifizierte Konfigurations- und Identitätsentscheidungen des Kunden nach Abschluss der anwendbaren Korrekturaktivitäten speziell für: 
        - Georedundante ADFS-Farmen
        - Komplexe Hybrid-Exchange- oder andere Kern-Hybrid-Szenarien
        - Sicherheit, Compliance, behördliche Vorschriften (z. B. GPO, öffentliche Ordner, Sperren, Gruppenverwaltung usw.)
        - Identitätsverwaltung, einschließlich Client-/Web-Zugriffsrichtlinien oder alternative Identitäten 
- In den Notizen zur Beteiligungsverwaltung ist Folgendes verzeichnet:
    - Es wurde sichergestellt, dass der Kunde eine Migrationsstrategie und/oder Sicherungsrichtlinie für Benutzerdaten aufgestellt hat, wobei der Wert für die Migrationsdurchführung durch Microsoft im Datenmigrationsabschnitt des Arbeitsbereichs auf der Registerkarte FTOP-Dienste "TRUE" ist.
    - Migrationsmethode und Planungsanforderungen zum Generieren von Migrationsplänen  

**Qualitätsausgaben** 

- In den Notizen zur technischen Aktivierung ist (gegebenenfalls) Folgendes verzeichnet:
    - Es wurde sichergestellt, dass der Kunde die Konfiguration georedundanter ADFS- und Client-/Web-Zugriffsrichtlinien validiert hat 
        - Assistenten und/oder angepasste Anspruch-Regeln in der Ausstellungsautorisierungsliste wurden getestet
    - Es wurde sichergestellt, dass der Kunde die Integration von E-Mail-fähigen Anwendungen validiert und das E-Mail-Routing abgeschlossen hat
        - Es wird bestätigt, dass keine Client-Apps E-Mail-fähig sind oder dass andernfalls das E-Mail-Routing wie erwartet erfolgt
    - Die Nutzung von lokalen öffentlichen Ordnern durch den Kunden wurde bestätigt. Außerdem wurde sichergestellt, dass der Kunde diese bei gewünschter Koexistenz von Exchange zu O365 synchronisiert oder in freigegebene Postfächer in O365 migriert hat
    - Bei Berechtigung wurde Exchange Hybrid Unified Messaging für aktivierte Skype/LYNX-Benutzer konfiguriert
    - Erneute Beteiligung von Get Modern FTA für Unterstützung bei der Windows 10-Bereitstellung 

#### FTOP-Aufgaben

| Aufgaben-ID | Name der Aufgabe                                                 | (E) Erforderlich (O) Optional |   FastTrack-Rolle   | Dienste        |
| ------- | --------------------------------------------------------- | :----------------------: | :----------------: | --------------- |
| 4037    | Erneute Beteiligung eines Get Modern FastTrack Architects              |            O             |   GetModern FTA    | Windows 10      |
| 3212    | Exchange - Leitfaden für die Integration von E-Mail-fähigen Anwendungen |            O             | FastTrack Engineer | Exchange        |
| 3213    | Exchange - Leitfaden für die Koexistenz von öffentlichen Exchange-Ordnern  |            O             | FastTrack Engineer | Exchange        |
| 3238    | Exchange - Aktivierung der Lync/SfB-Integration                    |            O             | FastTrack Engineer | Exchange        |
| 3241    | Konfiguration von AD FS Client-Zugriffsrichtlinien                    |            O             | FastTrack Engineer | Haupt-Onboarding |
| 3243    | Leitfaden für georedundante ADFS-Konfiguration                 |            O             | FastTrack Engineer | Haupt-Onboarding |

### Nicht kategorisierte Aufgaben (Aktivierung von Diensten)

Primäre Rolle: **-**  
Gilt für: **Alle Dienste**

In diesem Abschnitt sind nicht kategorisierte Aufgaben aufgeführt, die noch nicht in den Fluss der FastTrack-Anleitung integriert sind.

####  FTOP-Aufgaben

| Aufgaben-ID | Name der Aufgabe                | (E) Erforderlich (O) Optional |   FastTrack-Rolle   | Dienste |
| ------- | ------------------------ | :----------------------: | :----------------: | -------- |
| 2550    | {Assistent} Konfiguration von AzRMS |            O             | FastTrack Engineer | AIP      |

## Wichtige Inputs

  - Alle in der Korrektur-Checkliste aufgeführten Aufgaben sind abgeschlossen. 
  - Der Kunde ist mit Identitäten vertraut und schließt alle Korrekturen ab. 
  - Die lokale Umgebung des Kunden wird korrigiert/konfiguriert, um die Nutzung von Clouddiensten zu ermöglichen (einschließlich Hybridkoexistenz).
  - Der Kunde ist bereit, Dienste zu nutzen. 

##  Wichtige Ergebnisse

  - Alle gewünschten Arbeitsbereiche sind konfiguriert und bereit zur Nutzung. 
  - Pilotanwender wurden aktiviert und migriert. 

## Nächste Schritte

  - Ermutigen Sie zur Einführung/Nutzung zusätzlicher Arbeitsbereiche im Rahmen des Prozesses zur [Unterstützung der Erfolgserzielung](success-support-success-execution-partner-de.md).
  - Aktualisierung des Dienststatus zur Einführung oder Migration
  
[Startseite](http://partner-docs.microsoft.com)

## Zusammenfassung der Aktualisierung

| Datum       | Geändert durch       | Änderung an          |
| ---------- | ----------------- | ----------------      |
| 03/25/2020  | Celia Kennedy | Allgemeine Aktualisierung |
| 2/28/2020  | Celia Kennedy | Schritt Durchführen der Get Modern-Aktivierungsaufgaben hinzugefügt  |
| 1/31/2020  | Celia Kennedy | Aufgabe 1910 als veraltet eingestellt, Aufgabe 3690 in Obligatorisch geändert, Aufgabe 3685 umbenannt |
| 1/31/2020  | Celia Kennedy | Aufgaben 4097, 4098 hinzugefügt |
| 12/6/2019  | Celia Kennedy | Aufgabe 4022 als veraltet eingestellt, Aufgabe 4087 hinzugefügt |
| 10/25/2019 | Celia Kennedy | Aufgaben 4081, 4082, 4083 hinzugefügt |
| 09/25/2019 | Celia Kennedy | Partnerinhalt aktualisiert  |
| 05/03/2019 | Celia Kennedy | Veraltete Aufgaben entfernt  |
| 03/06/2019 | Patric Grimwood   | Links unter "Nächste Schritte" aktualisiert |
| 02/26/2019 | Patric Grimwood   | Partnerlinks aktualisiert |
| 10/26/2018 | Mark Eichenberger | Anleitung erstellt      |

[Startseite](http://partner-docs.microsoft.com)
