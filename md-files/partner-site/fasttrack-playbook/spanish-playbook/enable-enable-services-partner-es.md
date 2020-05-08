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

# Habilitar servicios

Fase: **Habilitar**

## Información general

El proceso de habilitación de servicios guía al cliente a través de la configuración de servicios para consumo, migración y comenzar a experimentar los beneficios del servicio de habilitación.

## Objetivos

  - Identificar que el aprovisionamiento y la sincronización estén configurados y activos.
  - Las cargas de trabajo elegibles están configuradas como "inquilino" y están disponibles para su consumo.
  - Los usuarios piloto han migrado y consumen servicios.

## Enfoque

### Solicitar un administrador de velocidad de migración

Rol principal: **Administrador de FastTrack**  
Aplica a: **Exchange / SharePoint / OneDrive para la Empresa**

Si no se ha solicitado un administrador de velocidad de migración (MVM), solicitar un MVM al seguir el proceso de solicitud documentado en (Tarea 2278 solicitar asignación de un MVM) en la fase de evaluación.

### Ayudar con la habilitación

Rol principal: **Administrador de FastTrack**
Aplica a: **Todos los servicios**

Llevar a cabo juntas de sincronización con el cliente como corresponda y ayudar con las tareas de habilitación.

#### Tareas de FTOP

| Id. de tarea | Nombre de tarea                                                                  | (M)andatorio / (O)pcional |       Rol de FastTrack       | Servicios                                      |
| ------- | -------------------------------------------------------------------------- | :----------------------: | :------------------------: | --------------------------------------------- |
| 1126    | Realiza una junta con los PM y líderes de tecnología del cliente para habilitar Core y servicios  |            M             |     Ingenieros de FastTrack     | Todos los servicios                                  |
| 1672    | Revisar, validar y compartir el Cuestionario de migración en el sito del proyecto |            M             | Administrador de velocidad de migración | Exchange / OneDrive para la Empresa / SharePoint |

### Realizar las tareas de habilitación

Rol principal: **Ingeniero de FastTrack**
Aplica a: **Todos los servicios**

Seguir las tareas de habilitación para cada servicio como sea necesario. Algunas tareas de servicios pueden:

  - Vincular a un asistente público
  - Vincular a documentos de guía adicionales
  - Será requerido si se va a usar el beneficio de migración

#### Tareas de FTOP

| Id de tarea | Nombre de tarea                      | (M)andatorio / (O)pcional |       Rol de FastTrack       | Servicios                                                           |
| ------- | ------------------------------------------------- | :----------------------: | :------------------------: | ------------------------------------------------------------------ |
| 4024    | Actualizar Windows 7/8.1 a Windows 10    |            M             |     Ingeniero de FastTrack     | Windows 10                                                         |
| 4022    | Implementar Office 365 ProPlus con System Center    |            M             |     Ingeniero de FastTrack     | Windows 10                                                         |
| 4031    | Entrega de Optimización de Windows 10 y actualización de Office con System Center    |            O             |            SME             | Windows 10                                                         |
| 4032    | Implementación en fases de Windows 10 con System Center     |            O             |            SME             | Windows 10                                                         |
| 4033    | Implementación en fases de Office 365 ProPlus con System Center     |            O             |            SME             | Windows 10                                                         |
| 3992    | MVM para incorporar al cliente     |            O             | Administración de velocidad de migración | Exchange / OneDrive para la Empresa / SharePoint                      |
| 2474    | Validar la configuración de la herramienta de migración y ejecutar la prueba de migración   |            M             | Administrador de velocidad de migración | Exchange / OneDrive para la Empresa / SharePoint                      |
| 3126    | OneDrive - Si no hay migración, instalar el cliente de sincronización ODB. De lo contrario, instalar el cliente post-migración        |            O             |     Ingeniero de FastTrack     | OneDrive para la Empresa                                              |
| 3147    | OneDrive - {Asistente} Configurar OneDrive para la Empresa      |            M             |     Ingeniero de FastTrack     | OneDrive para la Empresa                                              |
| 3125    | SharePoint/OneDrive - Validar que los usuarios tengan licencias asignadas de SPO o ODB   |            O             |     Ingeniero de FastTrack     | SharePoint / OneDrive para la Empresa                                 |
| 1235    | SharePoint - {Asistente} Configurar SharePoint Online  |            M             |     Ingeniero de FastTrack     | SharePoint                                                         |
| 3222    | SharePoint - {Asistente} Configurar SharePoint Hybrid  |            O             |     Ingeniero de FastTrack     | SharePoint                                                         |
| 1158    | Exchange - Configure EXO         |            M             |     Ingeniero de FastTrack     | Exchange                                                           |
| 3223    | EDU: Habilitar aulas y SDS       |            O             |     Ingeniero de FastTrack     | Aulas/SDS                                                      |
| 3306    | Construcción de infraestructura de migración/Solicitud de servicio        |            M             | Administrador de la velocidad de migration | Exchange / OneDrive para la Empresa / SharePoint                      |
| 3677    | Exchange - Gmail / Migración en Grupo: Configurar un ODME    |            O             | Administración de velocidad de migración | Exchange                                                           |
| 1941    | Exchange - Aplicar política de direcciones y validar nuevas direcciones originales SMTP están listadas como una dirección Proxy |            O             |     Ingeniero de FastTrack     | Exchange     |
| 1159    | Exchange - {Asistente} Configurar el flujo de correo en EXO   |            O             |     Ingeniero de FastTrack     | Exchange       |
| 3687    | Equipos - Ayuda de Core Plus     |            M             |            SME             | Equipos     |
| 1171    | Exchange - {Asistente} Configurar migración IMAP     |            O             |     Ingeniero FastTrack     | Exchange     |
| 3311    | Exchange - Notas de migración: Guía de la "Herramienta de importación automática" para importar lotes de programación     |      O       | Administrador de velocidad de migración | Exchange                                                           |
| 3160    | Exchange - {Asistente} Híbrido mínimo de Exchange  |            O             |     Ingeniero de FastTrack     | Exchange            |
| 3159    | Exchange - {Asistente} Exchange 2016 Hybrid  |            O             |     Ingeniero de FastTrack     | Exchange              |
| 3158    | Exchange - {Asistente} Exchange 2013 Hybrid       |            O             |     Ingeniero de FastTrack     | Exchange     |
| 3157    | Exchange - {Asistente} Exchange 2010 Hybrid      |            O             |     Ingeniero de FastTrack     | Exchange                                                           |
| 3156    | Exchange - {Asistente} Migración gradual de Exchange       |            O             |     Ingeniero de FastTrack     | Exchange                    |
| 3155    | Exchange - {Asistente} Transición de migración de Exchange    |            O             |     Ingeniero de FastTrack     | Exchange       |
| 1240    | Yammer - {Asistente} Configurar Yammer      |            M             |     Ingeniero de FastTrack     | Yammer         |
| 3727    | Equipos - Imparta el taller del panel de calidad de llamada   |            M             |            SME             | Equipos          |
| 3725    | Teams - Configurar colaboración y juntas centrales (VOIP)  |            M             |            SME             | Teams     |
| 3724    | Teams - Configurar servicios avanzados de voz (PSTN)   |            M             |            SME             | Teams             |
| 3728    | Teams - Habilitar técnicamente el servicio de equipos   |            M             |     Administrador de FastTrack      | Teams       |
| 2218    | Intune - Habilitar Microsoft Intune   |            M             |            SME             | Intune   |
| 2217    | Intune - Configurar el Administrador de dispositivos móviles de Office 365  |            O             |     Ingeniero de FastTrack     | Intune     |
| 3682    | Intune - Habilitar coadministración de Intune     |            O             |     Ingeniero de FastTrack     | Intune     |
| 2415    | AADP - {Asistente} Configurar AADP Core    |            O             |     Ingeniero de FastTrack     | AADP    |
| 1247    | Implementar Office 365 ProPlus    |            M             |     Ingeniero de FastTrack     | Office ProPlus      |
| 1641    | Configurar dominio personalizado    |            M             |     Ingeniero de FastTrack     | Incorporación básica     |
| 1141    | {Asistente} Configurar sincronización de directorio (Azure AD Connect)    |            O             |     Ingeniero de FastTrack     | Core Onboarding    |
| 1148    | {Asistente} Instalar y configurar ADFS  |            O             |     Ingeniero de FastTrack     | Incorporación base     |
| 1134    | Crear Id. de nube     |            O             |     Ingeniero de FastTrack     | Incorporación base      |
| 3267    | Outlook Mobile - Configurar Outlook Mobile    |            M             |     Ingeniero de FastTrack     | Outlook Mobile      |
| 3161    | Power BI - Configurar Power BI      |            O             |     Ingeniero de FastTrack     | PowerBI         |
| 2461    | Administrar el cliente de PowerBI durante la interacción del Widget - Ver Obtener más información    |            O             |     Ingeniero de FastTrack     | PowerBI     |
| 2570    | Configurar Cloud PBX con Llamada PSTN    |            O             |     Ingeniero de FastTrack     | Skype for Business - Llamadas PSTN / Skype for Business - Cloud PBX |
| 2201    | SfB - Configurar el servidor Lync 2010/2013 de dominio dividido SfB       |            O             |     Ingeniero de FastTrack     | Skype for Business   |
| 2567    | SfB - Configurar servidor 2015 de SfB de dominio dividido   |            O             |     Ingeniero de FastTrack     | Skype for Business   |
| 2260    | SfB - Configurar cuenta del sistema del cuarto SfB  |            O             |     Ingeniero de FastTrack     | Skype for Business    |
| 2980    | SfB - {Asistente} Configurar características estándar de Skype for Business      |            O             |     Ingeniero de FastTrack     | Skype for Business   |
| 3047    | Configurar Conferencias PSTN en la nube     |            O             |     Ingeniero de FastTrack     | Skype for Business - Conferencias PSTN                             |
| 2483    | Configurar Project Professional   |            M             |     Ingeniero de FastTrack     | Project       |
| 2266    | SfB - Configurar características centrales de Skype for Business (IM/P solamente)      |            O             |     Ingeniero de FastTrack     | Skype for Business   |
| 3999    | AIP - Activar inquilino y configurar el cliente de prueba    |            M             |            SME             | AIP       |
| 2491    | Configurar Project Online / Project Lite                                                                  |            M             |     Ingeniero de FastTrack     | Project      |
| 4000    | AIP - Crear un sistema de clasificación  |            O             |            SME             | AIP     |
| 3954    | Crear documentos de transición y haga la transición al equipo de migración   |            O             | Administrador de velocidad de migración | Exchange / OneDrive para la Empresa / SharePoint  |
| 4001    | AIP - Etiquetar documentos  |            O             |            SME             | AIP   |
| 4002    | AIP - Aplicar protección de información  |            O             |            SME             | AIP   |
| 4003    | AIP - Instalar clientes   |            M             |            SME             | AIP      |
| 4004    | AIP - Install otras características   |            O             |            SME             | AIP    |
| 4005    | AIP - Revisar registros de acceso  |            O             |            SME             | AIP    |
| 4006    | Trabajar con escáner            |            O             |            SME             | AIP     |
| 4081    | OATP – Configurar configuración P1      |            O             |     Ingeniero de FastTrack     | Exchange / OATP      |
| 4082    | OATP – Revisar funcionalidades P2      |            O             |            SME             | Exchange / OATP      |
| 4083    | MDATP – Establecer la configuraciön    |            M             |            SME             | MDATP     |

### Equipos - Transición de Skype a Teams

Rol principal: **SME**  
Aplica a: **Equipos**

Si el cliente recibe ayuda para la transición de Skype a Teams de un SME de Teams o de un Socio preparado para FastTrack para **interacciones de contacto intermedio (clientes con 2.000 a 10.000 usuarios SfBO activos)**, usar
las tareas a continuación para capturar el estado actual de la interacción.

**Para clientes con menos de 2.000 o 10.000 usuarios SfBO activos**, consultar la guía adicional de los roles y responsabilidades para las actividades de transición de SfBO a Equipo ver diapositiva 6 en el archivo adjunto de la [**presentación de Roles y responsabilidades**.](https://aka.ms/FTCTeamsRnRs)  

**Socios preparados para FastTrack**​​ – Si está dirigiendo la transición del cliente, siga informando a su SME asignado los detalles de la interacción para que puedan dar seguimiento al estado en su representación. Proporcione únicamente a los equipos objetivo la fecha y el resumen del estado del cliente. ​
 
#### Tareas de FTOP

| Id.de tarea | Nombre de tarea                                     | (M)andatorio / (O)pcional |   Rol de FastTrack   | Servicios |
| ------- | --------------------------------------------- | :----------------------: | :----------------: | -------- |
| 3685    | Equipos - Evaluación de preparación interna         |            M             | Ingeniero de FastTrack | Equipos    |
| 3716    | Equipos - Información general de la actualización del cliente             |            M             |        SME         | Equipos    |
| 3688    | Equipos - Estrategia y planificación del cliente        |            M             |        SME         | Equipos    |
| 3689    | Equipos - Actualización del cliente                    |            M             |        SME         | Equipos    |
| 3722    | Equipos - Soporte técnico para la transición reactiva de contacto intermedio |            M             |        SME         | Equipos    |

### Elegibilidad de encuesta del cliente

Rol principal: **Administrador de FastTrack**  
Aplica a: **Todos los servicios**

Actualizar la información de la encuesta del cliente para conocer la elegibilidad y los contactos en
las tareas correspondientes.

#### Tareas de FTOP

| Id. de tarea | Nombre de tarea               | (M)andatorio / (O)pcional |  Rol de FastTrack   | Servicios     |
| ------- | ----------------------- | :----------------------: | :---------------: | ------------ |
| 3690    | Identificar contacto de encuesta |            O             | Administrador de FastTrack | Todos los servicios |

### Todos los servicios en el ámbito habilitados

Rol principal: **Administrador de FastTrack**  
Aplica a: **Todos los servicios**

Traslade al cliente a la fase de migración y complete la tarea correspondiente.

#### Tareas de FTOP

| Id. de tarea | Nombre de tarea                                                                      | (M)andatorio / (O)pcional |  Rol de FastTrack   | Servicios     |
| ------- | ------------------------------------------------------------------------------ | :----------------------: | :---------------: | ------------ |
| 1701    | Habilitación finalizada: Todos los servicios en el ámbito habilitados; herramientas de migración configuradas |            M             | Administrador de FastTrack | Todos los servicios |

### Habilitación del beneficio adicional de Enterprise

Rol principal: **Ingeniero de FastTrack**
Aplica a: **Todos los servicios**

Para clientes aprobados de enterprise solamente con 20.000 puestos o más, o con una excepción.  

#### Tareas de FTOP

| Id. de tarea | Nombre de tarea                                                 | (M)andatorio / (O)pcional |   Rol de FastTrack   | Servicios        |
| ------- | --------------------------------------------------------- | :----------------------: | :----------------: | --------------- |
| 3241    | Configurar las políticas de acceso del cliente AD FS                    |            O             | Ingeniero de FastTrack | Incorporación principal |
| 3243    | Guía de configuración de ADFS georedundante                 |            O             | Ingeniero de FastTrack | Incorporación básica |
| 3212    | Exchange - Guía de Integración de aplicaciones con correo habilitado |            O             | Ingeniero de FastTrack | Exchange        |
| 3213    | Exchange - Habilitación de coexistencia de carpeta pública de Exchange  |            O             | Ingeniero de FastTrack | Exchange        |
| 3238    | Exchange - Habilitar integración Lync/SfB                    |            O             | Ingeniero de FastTrack | Exchange        |

### Elegibilidad de encuesta del cliente

Rol principal: **Administrador de FastTrack**
Aplica a: **Todos los servicios**

Actualizar la información de la Encuesta del cliente para la elegibilidad y contactos en las tareas correspondientes.

#### Tareas de FTOP

| Id. de tarea | Nombre de tarea               | (M)andatorio / (O)pcional |  Rol de FastTrack   | Servicios     |
| ------- | ----------------------- | :----------------------: | :---------------: | ------------ |
| 3690    | Contacto de encuesta de identidad |            O             | Administrador de FastTrack | Todos los servicios |

### Todos los servicios en el ámbito habilitados

Rol principal: **Administrador de FastTrack**
Aplica a: **Todos los servicios**

Pase al cliente a la fase de migración y complete la tarea correspondiente.

#### Tareas de FTOP

| Id. de tarea | Nombre de tarea                                                                      | (M)andatorio / (O)pcional |  Rol de FastTrack   | Servicios     |
| ------- | ------------------------------------------------------------------------------ | :----------------------: | :---------------: | ------------ |
| 1701    | Habilitación finalizada: Todos los servicios en el ámbito habilitados; herramientas de migración configuradas |            M             | Administrador de FastTrack | Todos los servicios |

### Tareas no categorizadas (Habilitar servicios)

Rol principal: **-**  
Aplica a: **Todos los servicios**

Las tareas no categorizadas que no han sido incorporadas al flujo del Libro de estrategias de FastTrack aparecerán en esta sección.

#### Tareas de FTOP

| Id. de tarea | Nombre de tarea                | (M)andatorio / (O)pcional |   Rol de FastTrack   | Servicios |
| ------- | ------------------------ | :----------------------: | :----------------: | -------- |
| 2550    | {Asistente} Configurar AzRMS |            O             | Ingeniero de FastTrack | AIP      |

## Entradas claves

  - Todas las tareas requeridas de la lista de comprobación de correcciones se han finalizado. 
  - El cliente entiende la identidad y finaliza cualquier corrección. 
  - El entorno local del cliente se ha configurado/corregido para permitir el consumo de servicios en la nube (incluyendo cualquier coexistencia híbrida)
  - El cliente está listo para comenzar a consumir los servicios. 

## Resultados claves

  - Todas las cargas de trabajo deseadas están configuradas y disponibles para el consumo. 
  - Los usuarios piloto están habilitados y migrados. 

## Siguientes pasos

- Fomente la adopción y el consumo de cargas de trabajo adicionales como corresponda en el proceso de [Ejecución de éxito de soporte técnico](success-support-success-execution-partner-en.md)
  - Actualizar el estado del servicio a Adopción o Migración
  
[Inicio](http://partner-docs.microsoft.com)

## Resumen de actualización

| Fecha       | Quién realizó el cambio       | Qué cambió          |
| ---------- | ----------------- | ----------------      |
| 09/25/2019  | Celia Kennedy     | Contenido del socio actualizado  |
| 05/03/2019  | Celia Kennedy     | Tareas obsoletas eliminadas  |
| 03/06/2019 | Patric Grimwood   | Actualizó vínculos en Próximos pasos |
| 02/26/2019 | Patric Grimwood   | Vínculos del socio actualizados |
| 10/26/2018 | Mark Eichenberger | Se creó el libro de estrategias      |

[Inicio](http://partner-docs.microsoft.com)
