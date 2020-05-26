---  
# required metadata  
title: FastTrack Partner Playbook - Office 365 ProPlus Standalone Deployment
description: FastTrack Partner Playbook - Office 365 ProPlus Standalone Deployment 
ms.author: v-cekenn
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

Primärer Antrieb für Office 365 ProPlus MAU im GJ 2020 wird Get Modern sein, das sowohl das Upgrade von Windows 7/8.1 auf Windows 10 als auch die Bereitstellung von Office 365 ProPlus mit System Center umfasst.

Dieser Leitfaden richtet sich an FastTrack Engineers, die Kunden mit Unterstützung durch FastTrack Manager und OPP SMEs bei der Bereitstellung von Office 365 ProPlus ohne Windows-Upgrade anleiten.

**In einigen Fällen können Schritte übersprungen werden, wenn das betreffende Thema vollständig behandelt/korrigiert wurde.**

## Ziele

Die folgende Liste enthält Ziele dieser Anleitung:

  - **Verwendung der Schritte gemäß der Phase, in der der Kunde sich bei der Bereitstellung von Office 365 ProPlus befindet.** In einigen Fällen können Schritte übersprungen werden, wenn das betreffende Thema vollständig behandelt/korrigiert wurde.
    Die Durchführung von Pilotprojekten wird empfohlen, um Support-Fälle aus nicht getesteten Bereitstellungen zu verhindern.

  - **Es ist wichtig sicherzustellen, dass Kunden die aktuellen mit der Cloud verbundenen Office-Clientanwendungen zu mindestens 70 % im Unternehmen bereitstellen und auch nutzen**, während wir unsere Kunden weiterhin bei der Vorbereitung auf das Ende des Supports für Office 2010 und bei der Reise durch die digitale Transformation unterstützen.

  - Office 365 ProPlus ist von strategischer Bedeutung für Microsoft im Hinblick auf den Wettbewerb, da wir unsere Kunden mit Microsoft 365 in die Cloud wechseln lassen.

## Office 365 ProPlus-Workflow  

[![office-proplus-complete-processv3](media/office-proplus-complete-processv3.PNG)]

## Prozesse der Anleitung

- [Durchführung von Dienst-Workshops](assess-conduct-services-workshops-partner-de.md)
- [Durchführung des Kundengesprächs zu Einführungs- und -Änderungsmanagement](assess-conduct-adoption-and-change-management-conversation-partner-de.md)
- [Durchführung der technischen Analyse](assess-conduct-technical-assessment-partner-de.md)
- [Aktivierung von Diensten](enable-enable-services-partner-de.md)

## Bereitstellung

Primäre Rolle: **FastTrack Engineer**  
Gilt für: **Office 365 ProPlus (ohne Windows 10-Upgrade)**

Falls sich Ihre Beteiligung jedoch irgendwann verzögert oder ins Stocken gerät oder wenn Sie bei der Ausführung dieser Anleitung zusätzliche Unterstützung benötigen, fordern Sie mit dem [FastTrack-Ressourcenanforderungstool](https://aka.ms/FRPHubSMERequestProcess) einen OPP SME an.
Dieses Team aus dedizierten OPP-Experten steht für die Skalierung zur Verfügung. Es stellt aber zu keiner Zeit einen Ersatz für die Rollen FastTrack Manager, Engineer oder Architect dar.

### 1. Technische Analyse und Planung für Office 365 ProPlus

Der Analyseworkshop dient dazu, dem Kunden die Bereitstellung von Office 365 ProPlus vorzustellen und ihm die Planung zu ermöglichen. Während des Workshops werden wichtige Entscheidungspunkte für die Bereitstellung von Office 365 ProPlus vorgestellt. Im Workshop findet eine Diskussion zur Erkennung der Entscheidungspunkte für den Kunden statt. Verwenden Sie den [Foliensatz zum Analyseworkshop](https://fasttrack-docs.microsoft.com/collateral/M365-O365-O365ProPlus.html#assessment-workshop). Zu den Ergebnissen des Workshops gehört auch das für die Office 365 ProPlus-Bereitstellung zuständige IT-Team. Kunden können auf die [Office-Bereitstellungsanleitung](https://docs.microsoft.com/DeployOffice/deployment-guide-for-office-365-proplus) verwiesen werden, damit sie für künftige unterstützende Ressourcen eine konsistente Struktur anwenden.

### 2. Gespräch zu Einführungs- und -Änderungsmanagement

Der FastTrack Manager sollte den ACM-Leitfaden nach Bedarf nutzen, um sicherzustellen, dass der Kunde über die relevanten Materialien verfügt, um Endbenutzer über die Bereitstellung von Office 365 ProPlus zu informieren. Die OPP BVD und die Handhabung von Einwänden sollten genutzt werden, um Missverständnisse über die Vorteile von Office 365 ProPlus gegenüber früheren Versionen auszuräumen. Diese Diskussion kann bei Bedarf später während der Bereitstellung verwendet werden, um den Kunden wieder in Bewegung zu bringen, falls er ins Stocken gerät.

### 3. Analyse mit dem Vorbereitungstoolkit für Office
 
### 4. Das Vorbereitungstoolkit für Office (Office Readiness Toolkit, ORT) sollte vom Kunden entweder über SCCM oder eigenständig ausgeführt werden, um alle benutzerdefinierten/Drittanbieter-Makros oder -Add-ins auszuwerten, die nicht mit Office 365 ProPlus 64-Bit kompatibel sind. Der FastTrack Engineer sollte die Ergebnisse überprüfen, um die geschäftskritischen Prozesse zu ermitteln, die eventuell betroffen sind. Wenden Sie sich ggf. an einen SME, um sicherzustellen, dass das ORT-Tool richtig ausgeführt wurde, oder um zusätzliche Korrekturoptionen aufzuzeigen.

### 5. Erstellen einer Korrektur-Checkliste

Nutzen Sie den Korrektur-Fragebogen und die Checkliste, um dem Kunden Hilfestellung bei der Bereitstellung einzelner/aller von FTC unterstützten Dienste zu geben. Für GCC High/DOD-Kunden sollte die Government Community Cloud (GCC) High/Department of Defense (DOD)-Version verwendet werden. Laden Sie jedes Mal eine neue Kopie herunter, damit sichergestellt ist, dass Sie über den aktuellen Inhalt verfügen. Beginnen Sie das Generieren der endgültigen Checkliste, indem Sie zuerst die (Registerkarte) "Fragebogen” für den/die entsprechenden Dienst(e) ausfüllen. Anleitungen für nicht im Umfang enthaltene Dienste werden in der endgültigen Checkliste ausgeblendet. Damit die Nutzung verfolgt werden kann, schicken Sie bitte eine ausgefüllte Kopie der XLS-Datei per E-Mail an: [d4cf4a2d.microsoft.com@amer.teams.ms](mailto:d4cf4a2d.microsoft.com@amer.teams.ms)

### 6. Bestätigung der Prüfung und Behebung aller Punkte der Korrektur-Checkliste durch den Kunden

Weitere Informationen finden Sie unter [Korrektur](phase-remediate-de.md).

### 7. Bereitstellung von Office 365 ProPlus

Verwenden Sie in der Bereitstellungsphase die Ergebnisse der Analyse, um den Kunden beim Erstellen der ermittelten Pakete und deren Vorbereitung für die Bereitstellung anzuleiten.

Unterstützen Sie den Kunden beim Erstellen der Paketkonfigurationsdatei mit dem Office-Konfigurationstool ([https://config.office.com](https://config.office.com/)) oder über die Office 365-Clientoption, sofern der Kunde das Paket mit Configuration Manager bereitstellen möchte. Die Einstellungen für die Konfiguration ergeben sich aus den bei den Analyseaktivitäten getroffenen Entscheidungen, einschließlich Updatekanal, Sprachen usw.

Nachdem die Pakete erstellt wurden, bietet FastTrack jetzt Hilfestellung, sobald der Kunde mit der Bereitstellung der Pakete für die anvisierten Benutzergruppen beginnt. Der Kunde ist für die Bereitstellung der Pakete für seine ausgewählten Bereitstellungswerkzeuge verantwortlich. FastTrack kann hierbei Hilfestellung anbieten.

FastTrack wird die Bereitstellung weiter verfolgen und den Fortschritt gemeinsam mit dem Kunden in Nachfolgesitzungen besprechen, um sicherzustellen, dass der Kunde die Einführung fortsetzt.

Es wird nicht empfohlen, für diese Aktivität den Bereitstellungsassistenten zu verwenden.

## Beschleunigen

Primäre Rolle: **FastTrack Engineer**  
Sekundäre Rollen: **FastTrack Manager, SME, GM FTA, OPP Ranger**  
Gilt für: **Office 365 ProPlus (ohne Windows 10-Upgrade)**
 
**Beschleunigung:** Kunden, die die Bereitstellung gerade durchführen oder ihre Bereitstellungen unterbrochen haben und Unterstützung durch FastTrack benötigen, um wieder in Bewegung zu kommen. Vermutlich hatten sie einen Bereitstellungsplan, aber ein Problem ist aufgetreten, oder ihre Prioritäten haben sich geändert.
 
FastTrack wird die Bereitstellung weiter verfolgen und den Fortschritt gemeinsam mit dem Kunden in Nachfolgesitzungen besprechen, um sicherzustellen, dass der Kunde die Einführung fortsetzt. Der Kunde gilt erst dann als "stabil" bzw. vollständig bereitgestellt, wenn er eine MAU von 70 % erreicht.

\*Alle Kunden, deren Wachstum über drei Monate unter 3 % sinkt (und unter 70 %) kann ein Nachfassen durch OPP SMEs auslösen, um sicherzustellen, dass das Wachstum beschleunigt wird. An diesem Punkt sollten FM, FE und SME den Status des Kunden erörtern, um zu ermitteln, wie sie ihn wieder auf Kurs bringen können.

1. Ermittlung des Grunds für unterbrochene MAU und Umsetzen des entsprechenden Maßnahmenplans

  - Technisches Hindernis
    
    1.  Beteiligung eines OPP SME zur Unterstützung, sofern nicht bereits beteiligt
    
    2.  Untersuchen des Kundenhindernisses anhand bekannter Lösungen und der Get Modern SME-Community
    
    3.  Beseitigung des Hindernisses in Zusammenarbeit mit dem Kunden
        
        -  Erstellung von FTC-Erkenntnissen nach Bedarf
        
        -  Beteiligung von App Assure für Add-In- oder Leistungsprobleme
    
    4.  Wenn das Hindernis nicht beseitigt werden kann: Dokumentieren des Hindernisses in Notizen zur Beteiligungsverwaltung und Aktualisieren von L1 auf "Blockiert"

  - Hindernis beim Einführungs-/Änderungsmanagement
    
    1. ACM-Mini-Workshop zur Ermittlung und Beseitigung des spezifischen Hindernisses

  - Hindernis bei Kundenressourcen
    
    1. Wenn umfassenderes ACM erforderlich ist: Weiterleitung zu ACM QuickLeads (siehe relevanter Aufgabenleitfaden)

- Geminderte Priorität des Kunden wiederherstellen
- 
    1. GM FTA beteiligen, falls eingebunden

    2. ATS/ATU beteiligen

2.  Office 365 ProPlus – OPP-Beschleunigeraufgabe aktualisieren, wenn Beschleunigungsbemühungen durchgeführt werden, um den Kunden aus einer Unterbrechung wieder in Bewegung zu bringen. Dieses Aufgabe wird verwendet, um laufende Bemühungen nachzuverfolgen, für Office 365 ProPlus-Bereitstellung eine MAU von mindestens 70 % aufrechtzuerhalten.

#### FTOP-Aufgaben

| Aufgaben-ID                                        | Aufgabenbeschreibung                                                                 | (E) Erforderlich (O) Optional | FastTrack-Rolle |
| ---------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------- | -------------- |
| 3080   | Office 365 ProPlus-Analyseworkshop  | E    | FE             |
| 3738   | Office 365 ProPlus – Präsentation | E    | FM             |
| 3070   | Erstellen einer Korrektur-Checkliste            | E    | FE             |
| 3190   | Bestätigung der Prüfung und Behebung aller Punkte der Korrektur-Checkliste durch den Kunden    | E  | FE  |
| 1247   | Bereitstellung von Office 365 ProPlus               | E    | FE             |
| 3650   | Office ProPlus – OPP-Beschleunigung      | O    | FM             |

## Wichtige Inputs

  - Der Kunde beabsichtigt die Bereitstellung von Office 365 ProPlus.

## Wichtige Ergebnisse

  - Office 365 ProPlus-Bereitstellung abgeschlossen

## Nächste Schritte

  - Unterstützen Sie den Kunden weiter, bis die vollständige Bereitstellung mit AU \> 70 % erreicht ist.

## Gesammelte Daten

| Datenfeld/Allgemeiner Name           | Für diesen Prozess erforderlich | Erste Eingabe in FTOP |
| -------------------------------- | ------------------------- | ----------------------- |
| L1 – Nutzungsstatus          | Ja                       | Ja                     |
| L2 – Berechtigungen                | Ja                       | Ja                     |
| Beteiligungsszenario              | Ja                       | Ja                     |
| Notizen zur Beteiligungsverwaltung (FM) | Ja                       | Ja                     |
| Notizen zur technischen Aktivierung (FE)  | Ja                       | Ja                     |
| Enterprise-Notizen (FTA)           | Nein                        | Ja                     |

> [!Note]
> *Weitere Informationen zu Lizenzberechtigungen finden Sie in der [FastTrack-Dienstbeschreibung](https://docs.microsoft.com/en-us/fasttrack/m365-eligible-services-and-plans).

## Zusammenfassung der Aktualisierung

|Datum|Geändert durch|Änderung an|
|---------|---------------|----------------------------|
|03/25/2020| Celia Kennedy| Allgemeine Aktualisierung|
|10/01/2019| Celia Kennedy| Allgemeine Aktualisierung|

[Startseite](http://partner-docs.microsoft.com)
