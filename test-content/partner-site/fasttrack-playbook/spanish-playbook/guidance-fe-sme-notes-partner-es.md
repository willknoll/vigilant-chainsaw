---  
# required metadata  
title: FastTrack Partner Playbook - FE/SME Notes Guidance 
description: FastTrack Partner Playbook - FTOP Notes Guidance 
author: Celia Kennedy
ms.author: v-cekenn
manager: pagrim
ms.date: 10/03/2019  
ms.topic: partner-playbook  
ms.prod: non-product-specific
ms.custom: partner-playbook  
ft.audience: partner
ft.owner: partner
--- 

#  Guía Notas de FE / SME

> [!IMPORTANT]
> Con el fin de rastrear y monitorear a todos los clientes de M365 que soliciten ayuda con la implementación o acelerar planes de implementación debido al COVID-19, todas las notas deberán incluir el hashtag **#covid**. Además, hemos emitido las siguientes notas de orientación:  
>
>Para clientes que expresamente necesitan una **pausa o detener la implementación, no añadir #covid** y en vez de eso, actualizar el Estado de titularidad (L1/L2/L3) para reflejar este cambio.  

>**Rol** Administrador de FastTrack  
>**Acción requerida:** Actualizar las notas de **Administración de interacciones** y/o **Intención de servicio** para los clientes que hayan acelerado sus prioridades de implementación/adopción debido al COVID19. **Incluir el hashtag #covid**  

>**Rol** FE/SME/GMFTA/MVM  
>**Acción requerida:** Actualizar las notas de **Habilitación técnica** para los clientes que hayan acelerado sus prioridades de implementación/migración/adopción debido al COVID19. **Incluir el hashtag #covid**  

>**Rol** Arquitecto de FastTrack  
>**Acción requerida:** Actualizar las notas de **Estado de Enterprise** utilizando la **Sección de resumen ejecutivo de la plantilla** para los clientes que hayan acelerado sus prioridades de implementación/adopción debido al COVID19. **Incluir el hashtag #covid**  

>**Rol** Administrador de Gateway  
>**Acción requerida:** Actualizar las notas de **Administración de interacciones** cuando hayamos identificado clientes que hayan acelerado una implementación del servicio debido a COVID19. **Incluir el hashtag #covid**

La guía se realiza para asegurar que seguimos un proceso coherente a lo largo de todas las regiones. Esto mejorará la previsibilidad y reducirá la confusión de cuáles notas van dónde y con qué frecuencia necesitan registrarse.

Rol principal: **Ingeniero de FastTrack; SME ingeniero de Ingeniero de FastTrack**  
Aplicar a: **Todos los servicios**

## Objetivos
Los roles de FE y FE SME deben registrar notas en el Portal de organización de FastTrack (FTOP) a lo largo de toda la interacción con el cliente. Las notas se deben registrar al llevar a cabo las Discusiones del valor empresarial (BVD), talleres técnicos, talleres de éxito, actividades de corrección, actividades de habilitación y otras actividades delimitadas específicas para capturar el estado de la interacción. Este documento detalla las expectativas puestas en los FE/SME con relación a la frecuencia, la ubicación y el contenido y formato de la nota.

##  Frecuencia
La notas se deben registrar en FTOP cada vez que un FE/SME tenga una interacción con un cliente, personal de la compañía o lleve a cabo una actividad relacionada con la interacción. Estos constituyen algunos ejemplos:

- junta de arranque
- Discusiones BVD
- Talleres técnicos
- Actividades de evaluación
- juntas de corrección y acciones de seguimiento
- juntas de habilitación
- Pruebas o reproducciones durante la implementación del cliente y actividades relacionadas

##  Ubicación
El FE/SME registrará los detalles de la nota bajo la sección de entradas **Tiempo** en el FTOP usando la tarea de seguimiento de tiempo de la carga de trabajo que mejor se alinee con las actividades del cuaderno de estrategias que estén realizando.

Si no corresponde ninguna carga de trabajo de la lista, usar la tarea de tiempo de incorporación básica. Si corresponden varias cargas de trabajo (es decir, Centro de cumplimiento, Outlook Mobile en Intune), registrar una nota y usar el prefijo en la entrada de la nota para reflejar las otras notas.

[![Entrada de tiempo de servicio](media/resources-core-onboarding-time.png)](media/resources-core-onboarding-time.png)

**Ejemplos:**

- Las notas de las discusiones BVD se registrarán bajo la tarea de seguimiento de tiempo de la carga de trabajo. 
- Las notas de los talleres técnicos y actividades de corrección que aplican a una carga de trabajo específica se registrarán bajo la tarea de seguimiento del tiempo de la carga de trabajo.
- Las notas de actividades que no se alinean directamente con una carga de trabajo específica como, pero no limitado a, inquilinos y licencias, red de contactos, autenticación y sincronización del cliente y el directorio, se registrarán bajo la tarea de tiempo de incorporación básica.

##  Contenido y formato de las notas

Cada nota de un FE/SME debe incluir el siguiente contenido:

**Plantilla para entradas de notas**

- CARGA DE TRABAJO AFECTADA
- ESTADO: Breve resumen de la declaración sobre el estado de la interacción
- RESUMEN: incluir una sinopsis de las actividades realizadas durante la interacción
- PRÓXIMA ACCIÓN: Establecer la próxima acción y su fecha de programación para ser ejecutada
- PREOCUPACIONES: Ingrese las preocupaciones aquí, si corresponde

1. Carga de trabajo afectada: Incluya un prefijo en cada nota con la carga de trabajo en discusión en la primera línea de la entrada de nota.

   **Formato esperado**
   -  [EXO] Exchange Online
   -  [SPO] SharePoint Online
   -  [OD] OneDrive para la Empresa
   -  [YAM] Yammer Enterprise
   -  [OPP] Office 365 ProPlus
   -  [TEAMS] Teams    
   -  [INTUNE] Intune
   -  [AADP] Azure Active Directory Premium
   -  [MCAS] Microsoft Cloud App Security
   -  [AIP] Protección de la información de Azure
   -  [OLM] Outlook Mobile
   -  [PROJ] Project Online
   -  [WDATP] Windows Defender ATP
   -  [WIN10] Windows 10
   -  [SDS] Aula / Sincronización de datos escolares (SDS)
   -  [IDSEC] Identity Security
   -  [CORE] Para aquellos que no correspondan a las cargas de trabajo anteriores
   -  [OLM+INTUNE] Ejemplo de varias cargas de trabajo afectadas

2. Estado técnico de la carga de trabajo: Incluir una de las selecciones de estado siguientes:

   **Formato esperado**

- ESTADO: Breve oración sobre el estado de la interacción
   - En curso
   - Pausado
   - Pendiente a los comentarios del cliente
   - Pendiente a FastTrack Center (FTC) o comentarios internos

3. Resumen de los detalles de la actividad
   **Formato esperado**

- RESUMEN: Incluir una sinopsis de las actividades realizadas durante la interacción de actividades

4. Próxima acción y fecha de ejecución
   **Formato esperado**

- PRÓXIMA ACCIÓN: Próximos pasos esperados y fecha programada de realización

5. Preocupaciones
   **Formato esperado**

- PREOCUPACIONES: Ofrece detalles sobre la naturaleza de la preocupación (software de origen, software o hardware de terceros, preocupación de negocios, seguridad, recursos del proyecto o financiación).   

  Nota: Cuando se identifiquen preocupaciones del software de origen, se debe hacer referencia al Id. de FTC Insight.

**Ejemplos de notas**

- CORE
- ESTADO: En curso para continuar el proceso de implementación y trabajando actualmente en acciones de seguimiento de la lista de comprobación de correcciones.
- RESUMEN: Se realizó la primera junta con el cliente después de la entrega de la lista de comprobación de corrección. Se revisó la primera ola de elementos de acción, el cliente indica que el equipo de red está revisando la lista suministrada de localizador de recursos uniforme (URL) (URL) / Protocolo de Internet (IP) para crear la regla de permiso, el administrador de Active Directory (AD) está direccionando el sufijo de nombre principal de usuario enrutable (UPN) en el AD en las premisas, el equipo del servidor está provisionando una nueva máquina virtual (VM) para el servidor Azure AD Connect.
- PRÓXIMA ACCIÓN: Se programó una junta de punto de contacto semanal para revisar el progreso y la sincronización en la corrección de los estados de artículos. El próximo evento será el 30 de abril, 2019.
- PREOCUPACIONES: El equipo de la red del cliente informa que es posible que el firewall de terceros no admita los conjuntos de reglas basados en la URL comodín, lo cual afirman es un requisito basado en los múltiples requisitos del conjunto de reglas. El cliente indica que su implementación se retrasará si no hay una opción de actualización disponible, ya que será necesario un reemplazo que requerirá financiación, adquisición e implementación.

[![Nueva nota](media/resources-new-note.png)](media/resources-new-note.png)

###  Resumen de actualización

|Fecha|Quién realizó el cambio|Qué cambió|
|---------|---------------|----------------------------|
|03/25/2020| Celia Kennedy| Mantenimiento general|
|09/27/2019| Celia Kennedy| Cuaderno de estrategias del socio actualizado|

[Inicio](http://partner-docs.microsoft.com)
