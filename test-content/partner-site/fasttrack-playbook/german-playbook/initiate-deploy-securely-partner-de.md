---  
# required metadata  
title: FastTrack Partner Playbook - Deploy Securely  
description: FastTrack Partner Playbook - Deploy Securely  
author: Rosie Arrieta  
ms.author: v-cekenn
manager: pagrim
ms.date: 09/27/2019
ms.topic: partner-playbook
ms.prod: non-product-specific  
ms.custom: partner-playbook  
ft.audience: partner  
ft.owner: pagrim
--- 

# Sichere Bereitstellung

Phase: **Start**  
Konzepte: **Kundenintegrität/RFA/Adressierung**  

## Übersicht

Mit dem Prozess für die sichere Bereitstellung startet die Zusammenarbeit zwischen FastTrack Center (FTC) und dem Kunden. Hier lernt das FTC das Unternehmen des Kunden und die in seinem Besitz befindlichen Dienste kennen. Und der Kunde lernt den Umfang des Supports kennen, den FTC im Hinblick
auf die verfügbaren Sicherheitsfunktionen bereitstellen kann.  

## Ziele

Verstehen der Bereitstellungsanforderungen des Kunden und wie diese durch M365-Sicherheitslösungen erfüllt werden können.  

Analyse des Kenntnisstandes des Kunden im Hinblick auf Identitäts-, Geräte- und Informationssicherheit.  

Erläutern Sie dem Kunden:

  - Die Bedeutung der Sicherheit
  - Warum eine Sicherheitsrichtlinie erstellt werden sollte
  - Warum die Arbeitsbereiche für Zusammenarbeit und Produktivität sicher bereitgestellt werden
    müssen  

## Methode

### Vorbereitung auf das Gespräch über M365-Sicherheit

Primäre Rolle: **FastTrack Manager**  
Konzepte: **Kundenintegrität/RFA/Adressierung**  
Gilt für: **Haupt-Onboarding**

Prüfen Sie die Lizenzierung des Kunden und stellen Sie fest, welche Art der Lizenzierung der Kunde hat und ob er zusätzliche Sicherheitsfunktionen besitzt. Wenn Sie die Lizenzen eines Kunden kennen, fällt es Ihnen leichter, eine Präsentation zu entwickeln, die den Kunden motiviert, mehr Produkte der Microsoft 365 Suite zu nutzen, um seine Arbeitsbereiche von Anfang an möglichst sicher bereitzustellen.​  

### Planen und Durchführen des Gesprächs über die M365-Sicherheit

Primäre Rolle: **FastTrack Manager**  
Konzepte: **Kundenintegrität/RFA/Adressierung**  
Gilt für: **Haupt-Onboarding**

Eine Besprechung beim Kunden, an der alle relevanten Interessenvertreter (BDM, Security Analyst, Security Architect, Directory of Security, IT usw.) teilnehmen, um über die Bedeutung einer Sicherheitsrichtlinie für die Bereitstellung zu sprechen. Diese stellt sicher, dass der Kunde die in unseren Produkten
und Lösungen integrierte Sicherheit nutzen kann. Der [Foliensatz für das Gespräch über die M365-Sicherheit](https://aka.ms/frp-sandcconversation) unterstützt das Gespräch über die sichere Dienstbereitstellung.​  

#### FTOP-Aufgaben

| Aufgaben-ID | Name der Aufgabe                  | (E)rforderlich/(O)ptional |  FastTrack-Rolle   | Dienste        |
| ------- | -------------------------- | :----------------------: | :---------------: | --------------- |
| 4017    | Gespräch über M365-Sicherheit |            E             | FastTrack Manager | Haupt-Onboarding |

### Identität vorbereiten

Primäre Rolle: **FastTrack Engineer**  
Konzepte: **Kundenintegrität/RFA/Adressierung**  
Gilt für: **Haupt-Onboarding**

**Identifizieren vorhandener Gesamtstrukturen und Bereinigen falsch formatierter UPNs**

Dies ist das erste Gespräch, das den Kunden auf dem Weg zur Einrichtung einer sicheren Grundlage für seinen Wechsel in die Cloud anleitet. Der FE sollte anschließend eine gute Kenntnis der aktuellen Umgebung und Infrastruktur besitzen und an der Entwicklung eines Zukunftswegs mitwirken. Ein Treffen mit dem Kunden, um ein Gespräch über seine aktuelle Umgebung/Infrastruktur zu führen. Nutzen Sie das Toolset, um die Umgebung des Kunden zu bereinigen und für die Identitätssynchronisierung vorzubereiten.  

  - [Toolset](https://docs.microsoft.com/en-us/office365/enterprise/install-and-run-idfix)  

**Fertigstellen der Authentifizierungsmethode**

Führen Sie ein Gespräch mit dem Kunden, um über die Authentifizierungsmethode zu sprechen und eine Wahl zu treffen. Dieses kann erst stattfinden, nachdem Sie die vorhandenen Gesamtstrukturen identifiziert und der Kunde seine Umgebung zur Vorbereitung auf die Identitätssynchronisierung bereinigt hat. 

  - [Auswahl der Azure AD-Authentifizierung](https://go.microsoft.com/fwlink/?linkid=873173)

**Konfiguration von AAD Connect**

Nutzen Sie die [Vorgegebenen AAD Connect-Aufgaben](https://docs.microsoft.com/en-us/office365/enterprise/set-up-directory-synchronization), um AAD Connect zu konfigurieren. Synchronisieren Sie zu diesem Zeitpunkt noch keine Identitäten.

Bevor Sie Identitäten synchronisieren, müssen Sie zwei Notfallkonten nur für die Cloud konfigurieren, um sich auf Szenarios vorzubereiten, in denen Sie sich nicht bei einem regulären Administratorkonto anmelden können. Konfigurieren Sie als Nächstes eine Richtlinie für den bedingten Zugriff, die 
standardmäßig jeden Zugriff blockiert. Schließen Sie davon unbedingt Ihre Notfallkonten aus, damit Administratoren nicht vom Portal ausgesperrt werden. Aktivieren Sie abschließend die Basisrichtlinie: MFA für Administratoren, um sicherzustellen, dass Ihre berechtigten Benutzer für MFA registriert und standardmäßig geschützt werden. 

  - [Notfallkonten](https://docs.microsoft.com/en-us/azure/active-directory/users-groups-roles/directory-emergency-access)
  - [Basisrichtlinie: MFA für Administratoren](https://docs.microsoft.com/en-us/azure/active-directory/conditional-access/baseline-protection)
  - [Was sind Basisrichtlinien?](https://docs.microsoft.com/en-us/azure/active-directory/conditional-access/baseline-protection)
  
**Identitätssynchronisierung**

Der Kunde sollte Identitäten erst synchronisieren, nachdem:  

  - Notfallkonten erstellt wurden
  - Eine Richtlinie für den bedingten Zugriff konfiguriert wurde, die jeden Zugriff blockiert
  - Basisrichtlinie: MFA für Administratoren aktiviert wurde

Nach Abschluss dieser Schritte ist der grundlegenden Sicherheitsrahmen für die Identität eingerichtet. Die Identitätssynchronisierung mit dem zuvor konfigurierten AAD Connect findet in Aufgabe 1141: Einrichten der Verzeichnissynchronisierung (Azure AD Connect) in der Aktivierungsphase statt.  

#### FTOP-Aufgaben

| Aufgaben-ID | Name der Aufgabe                                      | (E)rforderlich/(O)ptional |   FastTrack-Rolle   | Dienste        |
| ------- | ---------------------------------------------- | :----------------------: | :----------------: | --------------- |
| 3736    | Unterstützung zur Auswahl einer Authentifizierungsmethode |            E             | FastTrack Engineer | Haupt-Onboarding |

### Identitäts- und Gerätesicherheit

Primäre Rolle: **FastTrack Engineer**  
Konzepte: **Kundenintegrität/RFA/Adressierung**  
Gilt für: **Haupt-Onboarding**

Die Diskussion/Präsentation zur Identitäts- und Gerätesicherheit ist für alle Kunden erforderlich. Ermutigen Sie Kunden, ein solides Sicherheitsfundament für die Identitäts-, Geräte- und Mobil-App-Verwaltung zu errichten.

Als Ergebnis dieses Workshops helfen Sie dem Kunden bei der Auswahl und Aktivierung der für sein Unternehmen geeigneten Sicherheitsfunktionen im Hinblick aufden Schutz von Identitäten und Geräten.  

  - Der FE führt den Workshop zu den bewährten Methoden für Identitäts- und Gerätesicherheit durch und füllt das Übergabeformular aus.
  - Für erneute EMS-Beteiligungen sollten FMs gegebenenfalls den [Foliensatz zum EMS-Unternehmenswert](https://aka.ms/AA54548) präsentieren, um ein anspruchsvolle Diskussion zu ermöglichen (lokalisierte Versionen [sind hier beschrieben](https://aka.ms/FRPDeploySecurelyGuidance)
  - Nutzen Sie den Leitfaden zur [Identitäts- und Gerätesicherheit](https://aka.ms/idsapproach), der weitere Informationen zur Ausführung dieses Schritts enthält  

#### FTOP-Aufgaben

| Aufgaben-ID | Name der Aufgabe     | (E)rforderlich/(O)ptional |   FastTrack-Rolle   | Dienste        |
| ------- | --------------------------------------------------------- | :----------------------: | :----------------: | --------------- |
| 3720    | [Workshop zu bewährten Methoden für Identitäts- und Gerätesicherheit](https://aka.ms/FRPDeploySecurelyGuidance)      |            E             | FastTrack Engineer | Haupt-Onboarding |
| 3721    | Übergabeformular zum Abschluss von Identitäts- und Gerätesicherheit |            O             |        SME         | Haupt-Onboarding |

## Wichtige Inputs

  - Kick-off-Gespräch abgeschlossen  

## Wichtige Ergebnisse

  - Der Kunde verfügt über eine fundierte Kenntnis der verfügbaren Sicherheitsfunktionen, um Arbeitsbereiche möglichst sicher bereitzustellen.  
  - Dokumentieren der Bereiche, die der Kunde nicht aktivieren möchte, zusammen mit den jeweiligen Gründen.
  - Der Kunde hat seine Authentifizierungsmethode ausgewählt und die für sein Unternehmen geeigneten Sicherheitsfunktionen im Hinblick auf Identität und Geräte aktiviert.​  

## Nächste Schritte

  - Der FM plant weitere(s) Folgegespräch(e) mit dem Projektteam und relevanten Beteiligten für die Besprechung bestimmter Dienste und Szenarios zur eventuellen Beseitigung von Wissenslücken (z. B. BVD, Dienst-Workshops, Besprechung(en) mit technischen/Einführungs-SMEs usw.)  
  - Sobald die oben aufgeführten Ergebnisse vollständig sind, fahren Sie mit [Durchführen der technischen Analyse](assess-conduct-technical-assessment-partner-de.md), [Durchführen von Sicherheitsworkshops](assess-conduct-security-workshops-partner-de.md) und [Durchführen von Dienst-Workshops](assess-conduct-services-workshops-partner-de.md) fort.

### Zusammenfassung der Aktualisierung

|Datum|Geändert durch|Änderung von|Notizen|
|---------|---------------|----------------------------|-------------|
|18.10.2019| Celia Kennedy| Partneranleitung aktualisiert| |

[Startseite](http://partner-docs.microsoft.com)
