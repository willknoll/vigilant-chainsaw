---  
# required metadata  
title: FastTrack Partner Playbook - Office 365 ProPlus Standalone Deployment
description: FastTrack Partner Playbook - Office 365 ProPlus Standalone Deployment 
ms.author: maconcei
manager: pagrim
ms.date: 10/01/2019  
ms.topic: partner-playbook  
ms.prod: non-product-specific  
ms.custom: partner-playbook  
ft.audience: partner
ft.owner: pagrim
---   

# Eigenständige Office 365 ProPlus-Bereitstellung

## Übersicht

Primärer Antrieb für Office 365 ProPlus (OPP) Monthly Active Usage
(MAU) wird im Geschäftsjahr 2020 Get Modern sein, das sowohl ein Upgrade von Windows
7/8.1 auf Windows 10* und die Bereitstellung von Office 365 ProPlus 10-Apps mit System
Center umfasst. Beachten Sie die [Get Modern-Methode](approach-get-modern.md)
für weitere Informationen.

Diese Anleitung richtet sich an FastTrack Engineers, die vom
FastTrack Manager und von OPP-Experten (SMEs) unterstützt werden,
um Kunden durch die Bereitstellung von Office 365 ProPlus **ohne** Windows 10*-
Upgrade zu begleiten.

## Ziele 

Die folgende Liste enthält Ziele dieser Anleitung:

  - **Sicherzustellen, dass Kunden die aktuellen, mit der Cloud verbundenen
    Office-Clientanwendungen** im Unternehmen bereitstellen und nutzen, ist wichtig,
    da wir unsere Kunden weiterhin bei der Vorbereitung des
    **Endes des Office 2010-Supports** und **bei ihrer digitalen Transformation
    ** unterstützen.

  - Office 365 ProPlus ist für Microsoft von strategischer Bedeutung im
    Wettbewerb, da wir unsere Kunden in die Cloud von Microsoft wechseln lassen
    365.

## Methode 

Primäre Rolle: **FastTrack Engineer**  
Gilt für: **Office 365 ProPlus (ohne Windows 10-Upgrade)**

Falls sich Ihre Beteiligung zu irgendeinem Zeitpunkt verzögert, blockiert wird oder
wenn Sie aus anderen Gründen weitere Unterstützung brauchen, fordern Sie
mit dem [FastTrack-Ressourcenanforderungstool](https://aka.ms/FRPHubSMERequestProcess) einen OPP SME an.
Dieses Team aus dedizierten OPP-Experten steht während der
Skalierung unterstützend bereit, ersetzt aber zu keiner Zeit die Rollen
FastTrack Manager, Engineer oder Architect.

### Technische Analyse und Planung für Office 365 ProPlus

Der Analyseworkshop dient dazu, dem Kunden die Bereitstellung von
Office 365 ProPlus zu erläutern und ihm die Planung zu ermöglichen. Während des Workshops werden die wichtigen
Entscheidungspunkte für die Bereitstellung von Office 365 ProPlus vorgestellt. Im
Workshop findet die Diskussion zur Erkennung der Entscheidungspunkte des
Kunden statt. Benutzen Sie den Foliensatz zum Analyseworkshop unter
[https://aka.ms/FTAssessmentWorkshop](https://ftdocs-bcm.azureedge.net/public/en-us-o365-proplus-assessment-workshop-v1.pptx). Ergebnis des Workshops ist außerdem das IT-Team,
das für die Office 365 ProPlus-Bereitstellung zuständig ist.
Kunden können auf den [Leitfaden für die Office-
Bereitstellung](https://docs.microsoft.com/DeployOffice/deployment-guide-for-office-365-proplus)
und die Verwendung einer konsistenten Struktur für weitere Unterstützungsressourcen verwiesen werden.

### Erstellen der Korrektur-Checkliste

Benutzen Sie den Korrekturfragebogen und die -Checkliste, um den Kunden
bei der Bereitstellung aller von FTC unterstützten Dienste zu unterstützen. Die Version
Government Community Cloud (GCC) High/Department of Defense (DOD)
sollte für GCC High/DOD-Kunden verwendet werden. Laden Sie jedes Mal
eine neue Kopie herunter, damit sichergestellt ist, dass Sie über den aktuellen Inhalt verfügen. Beginnen Sie das Generieren
der endgültigen Checkliste, indem Sie zuerst den Fragebogen (Registerkarte) für den
entsprechenden Dienst (die entsprechenden Dienste) ausfüllen. Anleitungen für
nicht im Umfang enthaltene Dienste werden in der endgültigen Checkliste ausgeblendet. Damit die Nutzung verfolgt werden kann, schicken Sie bitte per E-Mail
eine ausgefüllte Kopie der XLS-Datei an: [d4cf4a2d.microsoft.com@amer.teams.ms](mailto:d4cf4a2d.microsoft.com@amer.teams.ms)

### Bestätigung der Prüfung durch den Kunden und des Behebens aller Punkte der Korrektur-Checkliste

Weitere Informationen finden Sie unter
[Korrektur](phase-remediate.md).

### Bereitstellung von Office 365 ProPlus

Verwenden Sie in der Bereitstellungsphase die Analyseergebnisse, um den Kunden beim Erstellen der ermittelten Pakete und deren Vorbereitung für die Bereitstellung anzuleiten.

Unterstützen Sie den Kunden beim Erstellen der Paketkonfigurationsdatei mit dem
Office-Konfigurationstool ([https://config.office.com](https://config.office.com/)) oder über die
Office 365-Clientoption, sofern der Kunde das Paket mit Configuration
Manager bereitstellen wird. Die Einstellungen für die Konfiguration
ergeben sich aus den bei den Analyseaktivitäten getroffenen Entscheidungen,
einschließlich Updatekanal, Sprachen usw.

Nachdem die Pakete erstellt wurden, bietet FastTrack jetzt Hilfestellung,
sobald der Kunde mit der Bereitstellung der Pakete für die anvisierten Benutzergruppen beginnt.
Der Kunde ist für die Bereitstellung der Pakete in seinen ausgewählten
Bereitstellungswerkzeugen verantwortlich. FastTrack kann hierbei Hilfestellung
anbieten.

FastTrack wird die Bereitstellung weiter verfolgen und den Fortschritt
gemeinsam mit dem Kunden in Nachfolgesitzungen besprechen, um sicherzustellen,
dass der Kunde die Einführung fortsetzen kann.

Es wird nicht empfohlen, für diese Aktivität den Bereitstellungsassistenten
zu verwenden.

> [!Note]
> *Weitere Informationen zu Lizenzberechtigungen finden Sie in der [FastTrack-Dienstbeschreibung](https://docs.microsoft.com/en-us/fasttrack/m365-eligible-services-and-plans).

## Zusammenfassung aktualisieren

| **Datum**  | **Geändert durch** | **Änderung von** |
| --------- | --------------- | ---------------- |
| 01.10.2019 | Celia Kennedy       | Partneranleitung aktualisiert |

[Startseite](http://partner-docs.microsoft.com)
