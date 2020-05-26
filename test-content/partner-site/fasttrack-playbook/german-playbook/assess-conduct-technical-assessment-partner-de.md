---  
# required metadata  
title: FastTrack Partner Playbook - Conduct Technical Assessment  
description: FastTrack Partner Playbook - Conduct Technical Assessment  
author: Ryan Meehan
ms.author: v-cekenn
manager: pagrim
ms.date: 10/03/2019  
ms.topic: partner-playbook  
ms.prod: non-product-specific  
ms.custom: partner-playbook  
ft.audience: partner  
ft.owner: pagrim
---  

# Durchführung der technischen Analyse

Phase: **Analyse**  
Konzepte: **Kundenintegrität/RFA/Adressierung**  

## Übersicht

Im Prozess "Durchführung der technischen Analyse" kann das FastTrack-Team ein Verständnis der Infrastruktur und der geschäftlichen Anforderungen des Kunden erhalten und ermitteln, was für einen reibungslosen Wechsel zur Cloud benötigt wird. Diese Analyse schließt die lokale Umgebung des Kunden, das Benutzersicherheitsmodell, Beschränkungen des Fernzugriffs und mögliche Einschränkungen der Infrastruktur ein, durch die der Bereitstellungsprozess verlangsamt werden kann.

Hinweis: Das Migrationsleistungsangebot steht nur für Kunden mit mehr als 500 Berechtigungen für bestimmte Dienste zur Verfügung (Exchange, SharePoint, OneDrive als *Ziel*).  

##  Ziele

  - Ermitteln des Infrastruktur-Designs und der Kapazität: 
      - Layout und Kapazität der Firewall
      - Internetverbindung zum WWW oder Art der Verbindung zu anderen Sites
      - Softwarebereitstellungsmethoden und aktuelle Versionen 
      - Prozess zur Benutzerkontoerstellung
  - Geschäftsanforderung:
      - Produkte, die der Kunde einsetzen möchte
      - Ablaufende Softwarelizenzen
      - Zu kaufende Infrastruktur
      - Fusionen oder Veräußerungen  
      - Implementierungszeitplan
  - Sicherheitsbeschränkungen: 
      - RAS-Richtlinien
      - Benutzerrichtlinien (in Bezug auf Zugriffsanforderungen des Migrationsteams)
      - Firewall-Richtlinieneinschränkungen
  - Implementierungsinhaber: 
      - Ermitteln von Kontakten für einen lokalen Dienst
      - Kontakte, die Verantwortung für das Voranbringen der Implementierung verantwortlich sind​  

##  Methode

###  Bereitstellen des Leitfadens zu den Prinzipien der Netzwerkkonnektivität

Primäre Rolle: **FastTrack Engineer**  
Konzepte: **Kundenintegrität/RFA/Adressierung**  
Gilt für: **Haupt-Onboarding**

Mithilfe des Prozesses zur Durchführung der Netzwerkanalyse kann das FastTrack-Team Kunden die Empfehlungen von Microsoft zu den bewährten Methoden für Konnektivität vermitteln. Zudem wird nachvollzogen, wie die vorhandene Infrastruktur des Kunden auf diese Anleitung ausgerichtet werden kann.

Hilfestellung zu den Prinzipien von Office 365/Microsoft 365 bezüglich der Netzwerkkonnektivität

  - Differenzieren des kritischen SaaS-Datenverkehrs, unterschiedliche Behandlung und Vertrauensstellung für verschiedene Kategorien des Netzwerkverkehrs  
  - Lokaler Abgang von Verbindungen, um eine minimale Latenz zur Infrastruktur von Microsoft sicherzustellen
  - Optimieren der Routenlänge zum Rand des Microsoft-Netzwerks  
  - Prüfen des Umgehens von externen Geräten/Prozessen der Netzwerksicherheit

Sicherstellen, dass der Kunde die langfristige Ausrichtung von Microsoft versteht, um eine Abstimmung der Konnektivitätsstrategie zwischen Kunde und Microsoft zu ermöglichen*

Ermitteln von Abgangspfaden von Kundenstandorten zum globalen Microsoft-Netzwerk

Ermitteln potenzieller Konfigurationsfehler in der Netzwerkinfrastruktur, die zu Problemen bei der Endbenutzererfahrung führen können

Ermitteln, ob Proxys (insbesondere SSL-Unterbrechung und Inspektion) für Datenverkehr von kritischen Arbeitsbereichen verwendet werden

Der Leitfaden für Netzwerkkonnektivität wird für alle neuen Kunden (sehr früh während der Beteiligung) und für Kunden mit erneuter Beteiligung für zusätzliche Arbeitsbereiche benötigt.  

Der Leitfaden für Netzwerkkonnektivität wird sehr früh während der Beteiligung bereitstellt. Damit soll sichergestellt werden, dass die Infrastruktur des Kunden ordnungsgemäß konfiguriert ist, um jeden Dienst von Office 365/Microsoft 365 mit einer akzeptablen Leistung und Verfügbarkeit nutzen zu können.  

Ein FastTrack Engineer erläutert die Prinzipien der Netzwerkkonnektivität, wobei diese Präsentation eingesetzt wird:  

[Office 365 Netzwerkleitfaden​](https://aka.ms/O365NetworkGuidanceLocalized)  

Falls eine besondere Unterstützung erforderlich ist, um einem Kunden aufgrund einer komplexen Infrastruktur oder besonderer Anforderungen Hilfestellung zu geben, kann ein Networking SME über den normalen FastTrack-Prozess für die Anforderung von Ressourcen angefordert werden.  

####  FTOP-Aufgaben

| Aufgaben-ID | Name der Aufgabe                                           | (E) Erforderlich (O) Optional |   FastTrack-Rolle   | Dienste        |
| ------- | --------------------------------------------------- | :----------------------: | :----------------: | --------------- |
| 4071    |  Bereitstellen des Leitfadens zu den Prinzipien der Netzwerkkonnektivität |            E             | FastTrack Engineer | Haupt-Onboarding |

###  Ausführen des Tools Network Onboarding

Primäre Rolle: **FastTrack Engineer**  
Konzepte: **Kundenintegrität/RFA/Adressierung**  
Gilt für: **Haupt-Onboarding**

Der Leitfaden für Netzwerkkonnektivität wird für alle neuen Kunden (sehr früh während der Beteiligung) und für Kunden mit erneuter Beteiligung für zusätzliche Arbeitsbereiche benötigt.  

Der Leitfaden für Netzwerkkonnektivität wird sehr früh während der Beteiligung bereitstellt. Damit soll sichergestellt werden, dass die Infrastruktur des Kunden ordnungsgemäß konfiguriert ist, um jeden Dienst von Office 365/Microsoft 365 mit einer akzeptablen Leistung und Verfügbarkeit nutzen zu können.  

Ein FE sollte die Prinzipien der Netzwerkkonnektivität anhand dieser Präsentation erläutern: [Office 365 Netzwerkleitfaden​](https://aka.ms/O365NetworkGuidanceLocalized)

Falls eine besondere Unterstützung erforderlich ist, um einem Kunden aufgrund einer komplexen Infrastruktur oder besonderer Anforderungen Hilfestellung zu geben, kann ein Networking SME über den normalen FastTrack-Prozess für die Anforderung von Ressourcen angefordert werden.  

Die Verwendung des Tools Network Onboarding sollte nach dem Leitfaden zu den Prinzipien der Netzwerkkonnektivität erfolgen. Mit dem Tool kann analysiert werden, ob das Netzwerk des Kunden auf unsere Richtlinien abgestimmt ist. Außerdem stellt es dem Kunden bei Bedarf Vorschläge zur Korrektur bereit.  

Das Tool sollte von jedem Kundenstandort aus ausgeführt werden (oder zumindest von einer repräsentativen Gruppe, sodass die gesamte Netzwerkarchitektur des Kunden deutlich wird). Kunden können unter [http://aka.ms/netonboard](http://aka.ms/netonboard) auf das Tool zugreifen.  

Wenn Kunden beim Ausführen des Tools geholfen wird, müssen FastTrack Engineers das Speichern der Ausgabe des Tools vermeiden, da diese Details zur internen Netzwerkkonfiguration des Kunden enthält. Um dem Kunden beim Umsetzen der durch das Tool bereitgestellten Empfehlungen zu helfen, kann die Ausgabe vom Kunden in einer PDF-Datei im Browser gespeichert und über eine sichere Methode geteilt werden. Alternativ kann der Kunde die Ausgabe über eine Bildschirmfreigabesitzung mit einem FastTrack Engineer teilen.  

Falls besondere Unterstützung erforderlich ist, um einem Kunden bei der Ausführung des Tools Network Onboarding aufgrund einer komplexen Infrastruktur oder besonderer Anforderungen Hilfestellung zu geben, kann ein Networking SME über den normalen FastTrack-Prozess für die Anforderung von Ressourcen angefordert werden.  
  
####  FTOP-Aufgaben

| Aufgaben-ID | Name der Aufgabe                   | (E) Erforderlich (O) Optional |   FastTrack-Rolle   | Dienste        |
| ------- | --------------------------- | :----------------------: | :----------------: | --------------- |
| 4072    |  Ausführen des Tools Network Onboarding |            E             | FastTrack Engineer | Haupt-Onboarding |

### Erstellen einer Korrektur-Checkliste

Primäre Rolle: **FastTrack Engineer**  
Konzepte: **Kundenintegrität/RFA/Adressierung**  
Gilt für: **Alle Dienste**

Erstellen Sie eine Korrektur-Checkliste: 

  - Laden Sie die [**Korrektur-Checkliste**](https://aka.ms/PartnerRemediationChecklist) herunter, und entfernen Sie alle Dienste, die der Kunde nicht bereitstellt.

Sollten Sie in der Analysephase Projektrisiken wie Blockaden, Elemente außerhalb des Umfangs, eingeschränkte Kundenaufgaben usw. entdecken, ist dies eine gute Gelegenheit, die Möglichkeit der Ergänzung eines qualifizierten FastTrack-Partners zum FastTrack-Leistungsangebot vorzustellen. Wenn der Kunde auf einen Partner zurückgreifen möchte, führen Sie die QuickLeads-Aufgabe 983 aus, um eine Empfehlung an einen Partner zu senden. Inhalte zu QuickLeads finden Sie [hier](https://ftdocs-bcm.azureedge.net/public/referrals-training-v1.pptx). Um die Anforderung zu aktivieren, wenden Sie sich bitte an Ihren FastTrack Partner Manager (FPM).
  
Beispiele:

- Identität - Bereinigung oder Abhängigkeiten
- Netzwerk
- Außerhalb des FastTrack-Angebotsumfangs
- Praktische Tastaturanforderungen / komplexe Konfiguration  

####  FTOP-Aufgaben

| Aufgaben-ID | Name der Aufgabe                                                   | (E) Erforderlich (O) Optional |   FastTrack-Rolle   | Dienste     |
| ------- | ----------------------------------------------------------- | :----------------------: | :----------------: | ------------ |
| 3070    | Erstellen einer Korrektur-Checkliste                                |            E             | FastTrack Engineer | Alle Dienste |
| 1049    | Prüfen der Korrektur-Checkliste mit dem Kunden auf Handlungselemente |            E             | FastTrack Engineer | Alle Dienste |

###  Erstellen der EMS-Korrektur-Checkliste zusammen mit dem Kunden im Hinblick auf Handlungselemente

Primäre Rolle: **SME**  
Konzepte: **Kundenintegrität/RFA/Adressierung**  
Gilt für: **AADP/Intune**

Erstellen Sie die EMS-Korrektur-Checkliste:

  - Laden Sie die [**EMS-Korrektur-Checkliste**](https://aka.ms/frp-EMS-Remediation-Checklist) herunter, und entfernen Sie alle Aufgaben, die der Kunde nicht nutzt.

Sollten Sie in der Analysephase Projektrisiken wie Blockaden, Elemente außerhalb des Umfangs, eingeschränkte Kundenaufgaben usw. entdecken, ist dies eine gute Gelegenheit, die Möglichkeit der Ergänzung eines qualifizierten FastTrack-Partners zum FastTrack-Leistungsangebot vorzustellen. Wenn der Kunde auf einen Partner zurückgreifen möchte, führen Sie die QuickLeads-Aufgabe 983 aus, um eine Empfehlung an einen Partner zu senden. Inhalte zu QuickLeads finden Sie [**hier**](https://aka.ms/AA5ctuy). Um die Anforderung zu aktivieren, können Sie eine E-Mail an Ihren FPM senden.

Beispiele:  

  - Identität - Bereinigung oder Abhängigkeiten
  - Netzwerk
  - Außerhalb des FastTrack-Angebotsumfangs
  - Praktische Tastaturanforderungen / komplexe Konfiguration  

####  FTOP-Aufgaben

| Aufgaben-ID | Name der Aufgabe                                                       | (E) Erforderlich (O) Optional | FastTrack-Rolle | Dienste      |
| ------- | --------------------------------------------------------------- | :----------------------: | :------------: | ------------- |
| 4075    |  Erstellen der EMS-Korrektur-Checkliste zusammen mit dem Kunden im Hinblick auf Handlungselemente |            E             |      SME       | AADP/Intune |

###  Migrationsanalyse

Primäre Rolle: **FastTrack Manager**  
Konzepte: **Kundenintegrität/RFA/Adressierung**  
Gilt für: **Exchange/OneDrive for Business/SharePoint**

Falls der Kunde das Migrationsleistungsangebot nutzen möchte, sind zusätzliche Aktivitäten erforderlich. Der Fragebogen zur Migration (Aufgabe 2050 Bereitstellen des Fragebogens zur Migration für den Kunden) muss dem Kunden bereitgestellt werden, und es muss eine Anforderung für einen Geschwindigkeitsmigrationsmanager (MVM) übermittelt werden (Aufgabe 2278 MVM-Zuweisung anfordern).

####  FTOP-Aufgaben

| Aufgaben-ID | Name der Aufgabe                                                                                                                                                 | (E) Erforderlich (O) Optional | FastTrack-Rolle             | Dienste                                      |
|---------|-----------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------|----------------------------|-----------------------------------------------|
| 2050    | Bereitstellen des Fragebogens zur Migration für den Kunden                                                                                                               | O                        | FastTrack Manager          | Exchange/OneDrive for Business/SharePoint |
| 2278    | MVM-Zuweisung anfordern                                                                                                                                    | O                        | FastTrack Manager          | Exchange/OneDrive for Business/SharePoint |
| [4099](https://ftdocs-bcm.azureedge.net/public/partner-customer-awareness-security-defaults-impact-mig-v1.docx)    | Prüfen Sie vor der Migration, ob AAD-Sicherheitsstandards auf dem Tenant aktiviert sind [Artikel in Dokumentation anzeigen](https://go.microsoft.com/fwlink/?linkid=2114497&clcid=0x409) | E                        | FastTrack Manager          | Exchange/OneDrive for Business/SharePoint |
| 4100    | Anfordern von AADP P2-Testlizenzen für Migrationen – FRP zusammen mit MVM                                                                                         | O                        | FastTrack Manager          | Exchange/OneDrive for Business/SharePoint |
| 3217    | Anfordern der zum Durchführen von Migrationen erforderlichen temporären Enterprise-Lizenzen                                                                                        | O                        | Geschwindigkeitsmigrationsmanager | Exchange/OneDrive for Business/SharePoint |
| 3312    | Teilen und Erläutern der Remote-Konnektivität bei der FT-Migration                                                                                                        | O                        | Geschwindigkeitsmigrationsmanager | Exchange/OneDrive for Business/SharePoint |
| 3308    | Exchange - Notes-Migration: Anfordern von BT-Ressourcen für umfangreiche Koexistenz und Teilen der Bereitstellungsprüfliste (optional)                                   | O                        | Geschwindigkeitsmigrationsmanager | Exchange                                      |
| 1034    | Exchange - Aktualisieren und Hochladen des Fragebogens für die Quellsystemmigration                                                                                        | E                        | FastTrack Engineer         | Exchange                                      |

###  Durchführung von Analysen

Primäre Rolle: **FastTrack Engineer**  
Konzepte: **Kundenintegrität/RFA/Adressierung**  
Gilt für: **Alle Dienste**

  - Analysieren Sie bei Bedarf die Aufgaben für einen Dienst.
  - Mögliche Dienstaufgaben:
      - Verknüpfen mit einem öffentlichen Assistenten.
      - Verknüpfen mit weiteren Hilfedokumenten.
      - Dies kann erforderlich sein, falls die Migrationsleistung genutzt wird.
      - Sie können nur für Enterprise-Kunden entwickelt sein. Fragen Sie FastTrack Engineers (FE) oder Subject Matter Expert (SME) nach den relevanten Dienstaufgaben.

####  FTOP-Aufgaben

| Aufgaben-ID | Name der Aufgabe                                                                           | (E) Erforderlich (O) Optional |   FastTrack-Rolle   | Dienste           |
| ------- | ----------------------------------------------------------------------------------- | :----------------------: | :----------------: | ------------------ |
| [3268](https://aka.ms/FRPTeamsDiscoveryDiscussion)    | Teams - Analyse von Microsoft Teams                                                      |            E             | FastTrack Engineer | Teams              |
| 3226    | EDU: Analyse von Classroom und SDS Sync                                                  |            O             | FastTrack Engineer | Classroom/SDS      |
| 2121    | Exchange - Falls zutreffend: Bereitstellen des Dienstprogramms zur GroupWise-Client-Erkennung   |            O             | FastTrack Engineer | Exchange           |
| 2393    | SfB - Überprüfen der erweiterten Skype for Business-Features/Lync-Anforderungen mit mehreren Gesamtstrukturen |            O             | FastTrack Engineer | Skype for Business |
| 2455    | SfB - Ausführen des Office 365-Netzwerkanalysetools                                          |            O             | FastTrack Engineer | Skype for Business |
| 2456    | SfB - Ausführen von Remote Connectivity Analyzer                                              |            O             | FastTrack Engineer | Skype for Business |
| 2457    | SfB - Ausführen von Lync Bandwidth Calculator 2.50                                            |            O             | FastTrack Engineer | Skype for Business |

###  Technische Analyse abgeschlossen

Primäre Rolle: **FastTrack Manager**  
Konzepte: **Kundenintegrität/RFA/Adressierung**  
Gilt für: **Alle Dienste**

Sobald alle im Umfang enthaltenen technischen Analysen ausgeliefert wurden, markieren Sie (Aufgabe 1699 Technische Analyse abgeschlossen) als abgeschlossen.

####  FTOP-Aufgaben

| Aufgaben-ID | Name der Aufgabe                                                                                            | (E) Erforderlich (O) Optional |  FastTrack-Rolle   | Dienste     |
| ------- | ---------------------------------------------------------------------------------------------------- | :----------------------: | :---------------: | ------------ |
| 1699    |  Technische Analyse abgeschlossen: Bereitstellungsplan einschließlich Korrektur-Checkliste dem Kunden ausgehändigt |            E             | FastTrack Manager | Alle Dienste |

###  Durchführung der Analyse zur Cloudanfügung

Primäre Rolle: **FastTrack Manager**  
Konzepte: **Kundenintegrität/RFA/Adressierung**  
Gilt für: **Intune**

Durchführen der Analyse zur Cloudanfügung​  

#### FTOP-Aufgaben

| Aufgaben-ID | Name der Aufgabe                                         | (E) Erforderlich (O) Optional |  FastTrack-Rolle   | Dienste |
| ------- | ------------------------------------------------- | :----------------------: | :---------------: | -------- |
| 4039    | Intune - (Assistent) Durchführung der Analyse zur Cloudanfügung |            E             | FastTrack Manager | Intune   |

##  Wichtige Inputs

  - Der Kunde versteht die vom FastTrack Center (FTC) bereitstellten Dienste.
  - Der Kunde ist an der Aktivierung von mindestens einem Dienst interessiert. 
  - Der Kunde erkennt Ressourcen für die Zusammenarbeit mit FastTrack.

##  Wichtige Ergebnisse

  - Vollständiges Verständnis der Infrastruktur des Kunden:
      -  Migrierte Quellumgebungen
      -  Einschränkungen, welche die Bereitstellung möglicherweise verlangsamen oder blockieren können
  - Die Korrektur-Checkliste wurde mit dem Kunden erstellt und überprüft
  - Ermitteln von Dienst-spezifischen Kundenkontakten

## Nächste Schritte

  - Basierend auf den ermittelten Arbeitsbereichen für das Onboarding fahren Sie mit der [Durchführung von Dienst-Workshops](assess-conduct-services-workshops-partner-de.md) fort.
  - Falls keine Workshops erforderlich sind, fahren Sie mit dem [Adressieren von technischen Lücken](remediate-address-technical-gaps-partner-de.md) fort.

##  Zusammenfassung der Aktualisierung

|Datum|Geändert durch|Änderung an|Notizen|
|---------|---------------|----------------------------|-------------|
|10/03/2019| Celia Kennedy| Partneranleitung aktualisiert| |

[Startseite](http://partner-docs.microsoft.com)
