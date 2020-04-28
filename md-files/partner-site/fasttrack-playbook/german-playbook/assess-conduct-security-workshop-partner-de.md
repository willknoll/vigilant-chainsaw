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
# Durchführung von Sicherheitsworkshops

Phase: **Analyse**  

## Übersicht

Im Prozess zur Durchführung von Sicherheitsworkshops wird die Zusammenarbeit
zwischen dem FastTrack Center (FTC) und dem Kunden fortgesetzt, wobei die Sicherheit
im Zentrum der Beteiligung steht. Hier wird die Zusammenarbeit des FTC mit
dem Kunden fortgesetzt, um sicherzustellen, dass der Kunde die gewünschte
Sicherheitslage definiert und erreicht.  

## Ziele

  - Analyse der aktuellen Sicherheitslage des Kunden im Hinblick auf Identitäts-,
    Geräte- und Informationssicherheit.
  - Kunden verstehen, was ihnen zur Verfügung steht, um die
    die digitalen Ressourcen der Organisation zu schützen
    und wie die Sicherheitsbedenken täglich überprüft werden können.  
  - Kunden aktivieren die anwendbaren Sicherheitsfeatures zum Schutz
    ihrer digitalen Ressourcen.  

## Methode

### Identitätsbasierte Sicherheit

Primäre Rolle: **SME**  
Gilt für: **AADP**

Das Sichern von Identitäten ist sehr wichtig und muss bei der Einrichtung einer Sicherheitsbaseline berücksichtigt werden. Wir müssen sicherstellen, dass Kunden die über AADP verfügbaren Arten der identitätsbasierten Sicherheit kennen, um zu verhindern, dass Anmeldeinformationen der Nutzer kompromittiert werden. Diese Benutzer müssen gemäß den Kundenanforderungen und bewährten Methoden der Sicherheit verwaltet werden.  

  - Überprüfen Sie die modernen Authentifizierungsoptionen für den Kunden sowie Szenarien
  - Stellen Sie sicher, dass der Kunde die über AADP-Features verfügbaren Steuerungsmöglichkeiten kennt. Beispiele: Bedingter Zugriff (Conditional Access, CA), Multi-Factor-Authentifizierung (MFA) und Einmaliges Anmelden (Single Sign-on (SSO))  
  - Teilen Sie Übersichten zu AADP-Features, Einführungkits, Demos
  
### Präsentationen von Azure AD Premium-Features

Links zu allen Azure AD Premium-Features, die zurzeit in FastTrack unterstützt werden und die Sie nutzen können, um den Wert bestimmter Features in der Azure AD Premium-Suite hervorzuheben, finden Sie [hier](https://aka.ms/FRPFTOPTask2533WorkshopLocalized).

Falls der Kunde Interesse an einem bestimmten Feature zeigt, können Sie diese Feature-Präsentationen zeigen und/oder teilen, um eine Kurzüberblick und Zugang zu weiteren Ressourcen bereitzustellen.

#### FTOP-Aufgaben

| Aufgaben-ID | Name der Aufgabe    | (E)rforderlich / (O)ptional | FastTrack-Rolle | Dienste |
| ------- | ------------------------------ | :----------------------: | :------------: | -------- |
| 2533    | Azure AD Premium - Technischer Workshop |            M             |      SME       | AADP     |

### Gerätesicherheit

Primäre Rolle: **SME**  
Konzepte: **Kundenintegrität / RFA / Adressierung**  
Gilt für: **Intune / MDATP / Windows 10**

Unterstützen Sie Kunden beim Schutz ihrer Daten, während ein hohes Produktivitätsniveau
für Mitarbeiter auf den ausgewählten Geräten und Apps beibehalten wird. Verwaltung mobiler Geräte
(MDM) kann integrierten Datenschutz und Compliance-Funktionen
bereitstellen, mit deren Hilfe Sie präzise angeben können, auf welche Daten verschiedene Benutzer zugreifen
können und was sie mit diesen Daten innerhalb von Office- und anderen mobilen
Apps tun können.  

  - Lernen Sie die verschiedenen Plattformen kennen, die der Kunde
    verwalten und schützen möchte.
  - Definieren Sie umfassende Richtlinien zum Schutz von Anwendungen, Daten
    und Geräten.

[Microsoft Defender Advanced Threat Protection
(MDATP)](https://docs.microsoft.com/en-us/windows/security/threat-protection/microsoft-defender-atp/microsoft-defender-advanced-threat-protection)
ist eine einheitliche Endpunktsicherheitsplattform für präventiven Schutz,
das Erkennen der Folgen von Angriffen und die automatisierte Untersuchung und Korrektur.
Enthaltene Features: **Bedrohungs- und Sicherheitsrisikoverwaltung (TVM)**
verwendet einen risikobasierten Ansatz zum Erkennen, Priorisieren und Korrigieren
von Schwachstellen und Fehlern in der Konfiguration von Endpunkten. **Attack Surface
Reduction (ASR)** eliminiert riskante oder unnötige Oberflächenbereiche und
schränkt die Ausführung von gefährlichem Code ein. **Schutz der nächsten Generation**
nutzt Machine Learning und detaillierte Analysen zum Schutz vor
dateibasierter und dateiloser Schadsoftware. **Endpoint Detection and Response
(EDR)** überwacht Verhaltensweisen und Angriffstechniken, um komplexe
Angriffe zu entdecken und darauf zu reagieren. **Automatisierte Untersuchung und Korrektur** nutzt
künstliche Intelligenz, um Warnungen automatisch zu untersuchen
und komplexe Bedrohungen in Minuten zu korrigieren. **Sicherheitslage** stellt
Sichtbarkeit in Echtzeit bereit und hilft beim Erkennen von Möglichkeiten,
mit denen die Sicherheitsbewertung eines Kunden verbessert werden kann.  

#### FTOP-Aufgaben

| Aufgaben-ID | Name der Aufgabe                             | (E)rforderlich / (O)ptional |  FastTrack-Rolle | Dienste    |
| ------- | ------------------------------------------------------- | :----------------------: | :---------------: | ---------- |
| 2460    | Intune - Durchführung des Microsoft Intune-Workshops |            E             | FastTrack Manager | Intune     |
| 4084    | Intune - Durchführung der modernen Verwaltungsanalyse von Microsoft |            E             | SME  | Intune     |
| 4079    | [MDATP Unternehmenswert-Präsentation](https://aka.ms/mdatp-oatp-bvd)              |            E             | FastTrack Manager | MDATP      |
| 4078    | MDATP – Positionierung von MDATP im Vergleich zu AV von Drittanbietern |            E             |        SME        | Windows 10 |
| 4085    | Führen des MDATP BVD                                 |            O             |        SME        | Intune     |

### Informationssicherheit

Primäre Rolle: **FastTrack-Entwickler**  
Gilt für: **Exchange / OneDrive for Business / Outlook Mobile /
SharePoint**

Das Sichern von Kundendaten ist eine wichtige Voraussetzung für das Einrichten einer Sicherheitsbaseline. ​Bevor der Kunde seine kritischen und wertvollsten digitalen Ressourcen in die Cloud überträgt, müssen wir sicherstellen, dass der Kunde mit der Datenklassifizierung und dem Schutz vertraut ist, der zum Sichern von kritischen Daten erforderlich ist.

  - Ermitteln Sie, welche Daten der Kunde schützen möchte.
  - Sorgen Sie für die Festlegung und Einrichtung von Richtlinien für den Zugriff, die Aufbewahrung und den Datenschutz.  

#### FTOP-Aufgaben

| Aufgaben-ID | Name der Aufgabe                    | (E)rforderlich / (O)ptional |   FastTrack-Rolle   | Services                                      |
| ------- | ---------------------------------------------- | :----------------------: | :----------------: | --------------------------------------------- |
| 3747    | Workshop zu Exchange Online Protection        |            E             | FastTrack Engineer | Exchange                                      |
| 3748    | Workshop zur Verhinderung von Datenverlusten |            O             | FastTrack Engineer | Exchange / OneDrive for Business / SharePoint |
| 3749    | Workshop zur Office 365-Nachrichtenverschlüsselung |   O             | FastTrack Engineer | Exchange                                      |
| 3750    | [Workshop zu Office 365 Advanced Threat Protection](https://aka.ms/mdatp-oatp-bvd) |        O             | FastTrack Engineer | Exchange                                      |
| 3997    | AIP Workshop                                   |            E              | FastTrack Manager  | AIP                                           |

## Wichtige Inputs

  - Die Unterhaltung zur M365-Sicherheit ist abgeschlossen
  - Die Aufgaben für sicheres Bereitstellen sind abgeschlossen  

## Wichtige Ergebnisse

  - Der Kunde aktiviert Exchange Online Protection und Azure Information Protection, Azure Active Directory-Einstellungen und Azure Information Protection, je nach vorhandener Lizenzierung.
  - Der Kunde aktiviert zusätzliche Features gemäß seiner Organisationsrichtlinie in Bezug auf Sicherheit und Compliance.
  - Dokumentieren Sie die Bereiche, die der Kunde nicht aktivieren möchte, zusammen mit den entsprechenden Gründen.

## Nächste Schritte

  - Basierend auf den ermittelten Arbeitsbereichen für das Onboarding fahren Sie fort mit der [Durchführung von Dienst-Workshops](assess-conduct-services-workshops-partner.md)  
  - Falls keine Workshops erforderlich sind, fahren Sie fort mit dem [Adressieren von technischen Lücken](remediate-address-technical-gaps-partner.md)  

## Zusammenfassung der Aktualisierung

| Datum   | Geändert durch | Änderung von                     |
| --------- | ------------- | ------------------------------- |
| 03.01.2020  | Celia Kennedy | Gerätesicherheit aktualisiert, BVD für Aufgabe 4079 und 3750 hinzugefügt |
| 18.10.2019 | Celia Kennedy | Partneranleitung aktualisiert |
| 26.7.2019 | Rosie Arrieta | Schritte für Gerät und Identität hinzugefügt |
| 31.05.2019 | Rosie Arrieta | Prozess veröffentlicht               |

[Startseite](http://partner-docs.microsoft.com)
