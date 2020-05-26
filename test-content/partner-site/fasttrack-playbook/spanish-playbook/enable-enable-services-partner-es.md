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

#  Habilitar servicios

Fase: **Habilitar**

## Descripción general

El proceso de habilitación de servicios guía al cliente a través de la configuración de servicios de consumo, migración y para comenzar a experimentar los beneficios del servicio de habilitación.

##  Objetivos

  - Identificar que el aprovisionamiento y la sincronización estén configurados y activos.
  - Las cargas de trabajo elegibles están configuradas como “inquilino” y están disponibles para consumo.
  - Los usuarios piloto han migrado y consumen servicios.

##  Enfoque

###  Solicitar un administrador de velocidad de migración

Rol principal: **Administrador de FastTrack**  
Aplicar a: **Exchange / SharePoint / OneDrive para la Empresa**

Si no se ha solicitado un Administrador de velocidad de migración (MVM), solicitar un MVM al seguir el proceso de solicitud documentado en la asignación (Tarea 2278 solicitar un MVM) en la fase de evaluación.

###  Ayudar con la habilitación

Rol principal: **Administrador de FastTrack**  
Iniciativas: **Salud del cliente / RFA / Focalización**  
Aplicar a: **Todos los servicios**

Llevar a cabo juntas de sincronización con el cliente como corresponda y ayudar con las tareas de habilitación.  

**Entradas de calidad** 

- Los contactos en FTOP están actualizados
- Nota de habilitación técnica que enlista los nombres de los clientes y los roles que participan

**Salidas de calidad** 

- (Si aplica) Fecha(s) objetivo de las cargas de trabajo actualizadas
- (Si aplica) cambios de estado de L1/L2
- Nota de habilitación o administración de la interacción que documente cualquier cambio de fecha objetivo y/o cambios de estado de L1/L2.
- (Si aplica) Nota de habilitación técnica que afirme que se revisó y validó el cuestionario de migración rápida.

####  Tareas de FTOP

| Id. de tarea | Nombre de la tarea      | (M)andatorio / (O)pcional |       Rol de FastTrack       | Servicios                                      |
| ------- | ----------------------------------------------------------------------------------- | :----------------------: | :------------------------: | --------------------------------------------- |
| 1126    | Reunirse con el PM del cliente y los encargados del servicio técnico del cliente para habilitar Core y Servicios           |            M             |     Ingeniero de FastTrack     | Todos los servicios                                  |
| 1672    | Revisar y validar el cuestionario de migración en el sitio de colaboración de migración. |            M             | Administrador de velocidad de migración | Exchange / OneDrive para la Emresa / SharePoint |

###  Realizar las tareas de habilitación

Rol principal: **Ingeniero de FastTrack**  
Iniciativas: **Salud del cliente / RFA / Focalización**  
Aplicar a: **Todos los servicios**

Seguir las tareas de habilitación para cada servicio como sea necesario. Algunas tareas de servicios pueden:

  - Vincular a un asistente público
  - Vincular a documentos de guía adicionales
  - Será requerido si se va a usar el beneficio de migración

**Entradas de calidad**

- Las notas de habilitación técnica o ambiente técnico capturan lo siguiente (si aplica):
    - Decisiones de identidad del cliente 
    - Confirmación de que el cliente ha configurado, ajustado o sincronizado identidades. 
    - Decisiones de red del cliente 
    - El cliente tiene políticas de acceso condicional configuradas donde el "Valor Microsoft realiza migración" = TRUE en la sección Migración de datos de la carga de trabajo de la pestaña Servicios de FTOP. 
    - Las decisiones y dominios de requisitos de federación y movilidad locales se corrigen y configuran en consecuencia
    - El cliente completó el análisis de Edge Site Discovery para sitios de legado utilizando IE

**Salidas de calidad**

- Las notas de habilitación técnica capturan lo siguiente (si aplica): 
    - Confirmación de que el cliente ejecutó el cmdlet apropiado del Asistente de FastTrack (por entorno) para validar cualquier ajuste y configuración de dominio personalizado de entorno híbrido. 
    - Se utilizó ViewPoint para validar la sincronización de directorios, el asistente de configuración de ADFS se completó con éxito o el cliente puede obtener acceso a los servicios con una Id. de nube.
    - El cliente completó las actividades de configuración y validación para los servicios CORE, además de cualquier servicio verificado de M365.
        - Estado de consumo (L1) = En progreso
        - Razón (L2) = Solución o Adopción del usuario
        - Se utilizó Lynx para confirmar que los clientes de RFA lograron 100 usuarios activos o un uso del 10% si se cuentan con menos de 1.000 asientos.
    - Se completó con éxito la migración de prueba utilizando el Programa de migración piloto del cliente y se cumplió con la solicitud de compilación de migración.

####  Tareas de FTOP

| Id. de Tareas | Nombre de la tarea                                                                                                | (M)andatorio / (O)pcional |       Rol de FastTrack       | Servicios                                                           |
| ------- | -------------------------------------------------------------------------------------------------------- | :----------------------: | :------------------------: | ------------------------------------------------------------------ |
| 3992    | MVM a Incorporación del cliente                                                                                  |            O             | Administrador de velocidad de migración | Exchange / OneDrive para la Emresa / SharePoint                      |
| 2474    | Validar la configuración de la herramienta de migración o ejecutar la migración de prueba                                         |            M             | Administrador de velocidad de migración | Exchange / OneDrive para la Emresa / SharePoint                      |
| 3126    | OneDrive - Si no hay migración, instalar el cliente de sincronización ODB. De otra manera, instalar el cliente después de la migración        |            O             |     Ingeniero de FastTrack     | OneDrive para la Empresa                                              |
| 3147    | OneDrive - {Asistente} Configurar OneDrive para la Empresa                                                      |            M             |     Ingeniero de FastTrack     | OneDrive para la Empresa                                              |
| 3125    | SharePoint/OneDrive - Validar que se hayan asignado licencias a los usuarios para SPO u ODB.                          |            O             |     Ingeniero de FastTrack     | SharePoint/OneDrive para la Empresa                                 |
| 1235    | SharePoint - {Asistente} Configurar SharePoint Online                                                        |            M             |     Ingeniero de FastTrack     | SharePoint                                                         |
| 3222    | SharePoint - {Asistente} Configurar SharePoint Hybrid                                                        |            O             |     Ingeniero de FastTrack     | SharePoint                                                         |
| 1158    | Exchange - Configurar EXO                                                                                 |            M             |     Ingeniero de FastTrack     | Exchange                                                           |
| 3223    | EDU: Habilitar aulas y SDS                                                                              |            O             |     Ingeniero de FastTrack     | Aulas y SDS                                                      |
| 3306    | Solicitud de servicio/Servicio de infraestructura de migración                                                           |            M             | Administrador de velocidad de migración | Exchange / OneDrive para la Emresa / SharePoint                      |
| 3677    | Exchange - Migración en grupo: Configurar ODME                                                  |            O             | Administrador de velocidad de migración | Exchange                                                           |
| 1941    | Exchange - Aplicar política de direcciones y validar las direcciones nuevas u originales SMTP están listadas como una dirección Proxy |            O             |     Ingeniero de FastTrack     | Exchange                                                           |
| 3687    | Teams - Asistencia de Core Plus                                                                             |            M             |            SME             | Teams                                                                                     |
| 1159    | Exchange - {Asistente} Configurar flujo de correo en EXO                                                           |            O             |     Ingeniero de FastTrack     | Exchange                                                           |
| 1171    | Exchange - {Asistente} Configuración de migración IMAP                                                                 |            O             |     Ingeniero de FastTrack     | Exchange                                                           |
| 3311    | Exchange - Notas de migración: Guía de la "Herramienta de auto importación" para importar lotes de programación                 |            O             | Administrador de velocidad de migración | Exchange                                                           |
| 3160    | Exchange - {Asistente} Exchange Minimal Hybrid                                                              |            O             |     Ingeniero de FastTrack     | Exchange                                                           |
| 3159    | Exchange - {Asistencia} Exchange 2016 Hybrid                                                                 |            O             |     Ingeniero de FastTrack     | Exchange                                                           |
| 3158    | Exchange - {Asistente} Exchange 2013 Hybrid                                                                 |            O             |     Ingeniero de FastTrack     | Exchange                                                           |
| 3157    | Exchange - {Asistente} Exchange 2010 Hybrid                                                                 |            O             |     Ingeniero de FastTrack     | Exchange                                                           |
| 3156    | Exchange - {Asistente} Exchange Migración Gradual                                                            |            O             |     Ingeniero de FastTrack     | Exchange                                                           |
| 3155    | Exchange - {Asistente} Transición de migración de Exchange                                                           |            O             |     Ingeniero de FastTrack     | Exchange                                                           |
| 1240    | Yammer - {Asistente} Configurar Yammer                                                                       |            M             |     Ingeniero de FastTrack     | Yammer                                                             |
| 3727    | Teams - Imparta el taller del panel de calidad de llamada                                                          |            M             |            SME             | Teams                                                                                     |
| 3725    | Teams - Configurar colaboración y juntas centrales (VOIP)                                                          |            M             |            SME             | Teams                                                                                     |
| 3724    | Teams - Configurar servicios avanzados de voz (PSTN)                                                         |            M             |            SME             | Teams                                                              |
| 3728    | Teams - Habilitar técnicamente el servicio de Teams                                                                 |            M             |     Administrador de FastTrack      | Teams                                                              |
| 2218    | Habilitar Microsoft Intune                                                                                  |            M             |     SME     |  Intune                                                             |
| 2415    | AADP - {Asistente} Configurar AADP Core                                                                      |            O             |     Ingeniero de FastTrack     |  AADP                                                               |
| 1641    | Configurar dominio personalizado                                                                                      |            M             |     Ingeniero de FastTrack     | Incorporación básica                                                    |
| 1141    | {Asistente} Configurar el Directorio de sincronización (Azure AD Connect)                                             |            O             |     Ingeniero de FastTrack     | Incorporación básica                                                    |
| 1134    | Crear Id de nube                                                                                         |            O             |     Ingeniero de FastTrack     | Incorporación básica                                                    |
| 1148    | {Asistente} Instalar y configurar ADFS                                                                      |            O             |     Ingeniero de FastTrack     | Incorporación básica                                                    |
| 3267    | Outlook Mobile - Configurar Outlook Mobile                                                                |            M             |     Ingeniero de FastTrack     |  Outlook Mobile                                                     |
| 3161    | Power BI - Configurar Power BI                                                                            |            O             |     Ingeniero de FastTrack     | Power BI                                                            |
| 2461    | Administrar el cliente de Power BI durante la interacción del Widget - Ver Obtener más información                                        |            O             |     Ingeniero de FastTrack     | Power BI                                                            |
| 2570    | Configurar Cloud PBX con Llamadas PSTN                                                                    |            O             |     Ingeniero de FastTrack     | Skype Empresarial - Llamadas PSTN / Skype Empresarial - Cloud PBX |
| 2201    | SfB - Configurar el Servidor Lync 2010/2013 de dominio dividido de SfB                                                   |            O             |     Ingeniero de FastTrack     | Skype Empresarial                                                 |
| 2567    | SfB - Configurar el Servidor Lync 2015 de dominio dividido de SfB                                                     |            O             |     Ingeniero de FastTrack     | Skype Empresarial                                                 |
| 2260    | SfB - Configurar la cuenta del sistema de del cuarto SfB                                                                  |            O             |     Ingeniero de FastTrack     | Skype Empresarial                                                 |
| 2980    | SfB - {Asistente} Configurar las características estándar de Skype Empresarial                                            |            O             |     Ingeniero de FastTrack     | Skype Empresarial                                                 |
| 3047    | Configurar Conferencias PSTN en la Nube                                                                        |            O             |     Ingeniero de FastTrack     | Skype Empresarial - Conferencias PSTN                             |
| 2483    | Configurar Project Professional                                                                           |            M             |     Ingeniero de FastTrack     | Project                                                            |
| 2266    | SfB - Configurar las características centrales de Skype Empresarial (IM/P solamente)                                             |            O             |     Ingeniero de FastTrack     | Skype Empresarial                                                 |
| 2491    | Configurar Project Online / Project Lite                                                                  |            M             |     Ingeniero de FastTrack     | Project                                                            |
|| 3999    | [Activar inquilino y configurar el cliente de prueba](https://aka.ms/PartnerMIPAdoptionGuide)                                                           |            M             |            SME             | AIP                                                                |
| 3954    | Crear documentos de transición y transferir al equipo de migración                                             |            O             | Administrador de velocidad de migración | Exchange / OneDrive para la Emresa / SharePoint                      |
| 4000    | MIP – Configurar etiquetas de sensibilidad                                                                   |            O             |            SME             | AIP                                                                |
| 4001    | MIP – Etiquetado de documento de prueba                                                                                 |            O             |            SME             | AIP                                                                |
| 4002    | MIP – Crear políticas de protección                                                                   |            O             |            SME             | AIP                                                                |
| 4003    | MIP – Instalar clientes                                                                                  |            O             |            SME             | AIP                                                                |
| 4004    | MIP – Proporcionar guía sobre BYOK                                                                             |            O             |            SME             | AIP                                                                |
| 4006    | MIP – Trabajar con un escáner de etiquetado unificado                                                                                 |            O             |            SME             | AIP                                                                |
| 4081    | OATP – Configurar la configuración P1                                                                             |            O             |     Ingeniero de FastTrack     | Exchange / OATP                                                    |
| 4082    | OATP – Revisar la funcionalidad de P2                                                                            |            O             |            SME             | Exchange / OATP                                                    |
| 4083    | MDATP – Establecer la configuración                                                                               |            M             |            SME             | MDATP                                                              |
| 4087    | Degradación del agente de Intune PC                                                                              |            O             |            SME             |  Intune                                                             |
| 4097    | Implementar y configurar Microsoft Edge                                                                      |            M             |      Ingeniero de FastTrack    | Edge                                                               |
| 4098    | Revisar política y configurar Microsoft Edge                                                               |            M             |            SME             | Edge                                                               |

### Realizar las tareas de habilitación de Get Modern  

Rol principal: **Ingeniero de FastTrack**  
Iniciativas: **Salud del cliente / RFA / Focalización**  
Aplica a: **Office ProPlus / Windows 10**

Finalizar las tareas para realizar la habilitación Get Modern  

####  Tareas de FTOP

| Id. de Tarea | Nombre de la tarea                                     | (M)andatorio / (O)pcional | Rol de FastTrack | Servicios |
| ------- | --------------------------------------------- | :----------------------: | :------------: | -------- |
| 4024    | Actualizar de Windows 7/8.1 a Windows 10                                                                 |            M             |     Ingeniero de FastTrack     | Windows 10                                                         |
| 4031    | Optimizar la realización de la actualización de Windows 10 y Office con System Center                                          |            O             |            SME             | Windows 10                                                         |
| 4032    | Implementación en etapas de Windows 10 con System Center                                                          |            O             |            SME             | Windows 10                                                         |
| 1247    | Implementar Office 365 ProPlus                                                                                |            M             |     Ingeniero de FastTrack     | Office ProPlus                                                     |
| 4033    | Implementación por etapas de Office 365 ProPlus con System Center                                                  |            O             |            SME             | Office ProPlus                                                         |
| 3650    | Office ProPlus - Aceleración de OPP |            O             | Administrador de FastTrack | Office ProPlus |

### Teams - Transición de Skype a Teams

Rol principal: **SME**  
Aplica a: **Teams**

Si el cliente recibe ayuda para la transición de Skype a Teams de un SME de Teams o de un Socio listo para usar FastTrack en **interacciones proactivas de contacto intermedio (clientes con 2.000 a 10.000 usuarios de SfBO activos)**, utilizar las tareas a continuación para capturar el estado actual de la interacción.

**Para clientes con menos de 2.000 o 10.000 usuarios de SfBO activos**, consultar la guía adicional de los roles y las responsabilidades de SfBO de las actividades de transición de SfBO a Team, ver diapositiva 6 en el archivo adjunto de la [**presentación de Roles y responsabilidades**.](https://aka.ms/FTCTeamsRnRs)  

**Socios listos para FastTrack**​​ – si está dirigiendo la transición del cliente, continúe a informar a su SME asignado los detalles de su interacción para que puedan dar seguimiento al estado de la tarea en su nombre. Proporcione la fecha objetivo solo de Teams y el resumen del estado del cliente. ​
 
####  Tareas de FTOP

| Id. de Tareas | Nombre de la tarea                                     | (M)andatorio / (O)pcional |   Rol de FastTrack   | Servicios |
| ------- | --------------------------------------------- | :----------------------: | :----------------: | -------- |
| 3685    | Teams - Evaluación interna de preparación         |            M             | Ingeniero de FastTrack | Teams    |
| 3716    | Teams - Información general del cliente             |            M             |        SME         | Teams    |
| 3688    | Teams - Estrategia y planificación del cliente        |            M             |        SME         | Teams    |
| 3689    | [Teams - Actualización del cliente](https://aka.ms/AA6vhy4)                    |            M             |        SME         | Teams    |
| 3722    | Teams - Soporte técnico para la transición reactiva de contacto intermedio |            M             |        SME         | Teams    |

###  Elegibilidad de encuesta del cliente

Rol principal: **Administrador de FastTrack**  
Iniciativas: **Salud del cliente / RFA / Focalización**  
Aplicar a: **Todos los servicios**

Actualizar la información de la Encuesta del cliente para la elegibilidad y contactos en las tareas correspondientes.  

**Entradas de calidad**

- Se actualizan los contactos en FTOP y se eliminan los contactos obsoletos  

**Salidas de calidad**

- Ninguna

####  Tareas de FTOP

| Id. de Tareas | Nombre de la tarea               | (M)andatorio / (O)pcional |  Rol de FastTrack   | Servicios     |
| ------- | ----------------------- | :----------------------: | :---------------: | ------------ |
| 3690    | Identificar contacto de encuesta |            M             | Administrador de FastTrack | Todos los servicios |

###  Todos los servicios en el ámbito habilitados

Rol principal: **Administrador de FastTrack**  
Iniciativas: **Salud del cliente / RFA / Focalización**  
Aplicar a: **Todos los servicios**

Traslade al cliente a la fase de migración y complete la tarea correspondiente.

####  Tareas de FTOP

| Id. de Tarea | Nombre de la tarea                                                                      | (M)andatorio / (O)pcional |  Rol de FastTrack   | Servicios     |
| ------- | ------------------------------------------------------------------------------ | :----------------------: | :---------------: | ------------ |
| 1701    | Habilitación finalizada: Se habilitaron todos los servicios en el ámbito; se configuraron las herramientas de migración |            M             | Administrador de FastTrack | Todos los servicios |

##  Entradas clave

  - Todas las tareas requeridas de la lista de comprobación de correcciones se han finalizado. 
  - El cliente entiende la identidad y finaliza cualquier corrección. 
  - Se corrigió/configuró el entorno local del cliente para permitir el consumo de servicios en la nube (incluyendo la coexistencia híbrida).
  - El cliente está listo para comenzar a consumir los servicios. 

##  Resultados clave

  - Todas las cargas de trabajo deseadas están configuradas y disponibles para el consumo. 
  - Los usuarios piloto están habilitados y migrados. 

##  Siguientes pasos

  - Fomente la adopción/consumo de cargas de trabajo adicional como corresponda en el proceso de [Apoyar la ejecución de éxito](success-support-success-execution-partner-es.md).
  - Actualizar el estado del servicio a **Adopción** o **Migración**.  

###  Habilitación del beneficio adicional de Enterprise

Rol principal: **Ingeniero de FastTrack**  
Iniciativas: **Focalización / RFA / Salud del cliente**  
Aplicar a: **Todos los servicios**

Solo para clientes de enterprise aprobados con 20.000 puestos o más, o con una excepción.  

**Entradas de calidad**

- Las notas de habilitación técnica o ambiente técnico capturan lo siguiente (si aplica):
    - Configuración de cliente elegible y decisiones de identidad después de finalizar las actividades de corrección que aplican únicas para: 
        - Granjas de ADFS georredundantes
        - Exchange híbrido complejo u otros escenarios híbridos centrales
        - Requisitos de seguridad, cumplimiento y regulatorios (por ejemplo, carpetas públicas, retenciones, administración de grupo, etc.)
        - Administrador de identidad, incluyendo políticas de acceso al cliente/web o Alt-id 
- Las notas de administración de la interacción capturan lo siguiente:
    - El cliente elegible ha desarrollado una estrategia de migración y/o tiene políticas de copias de seguridad de datos donde "El valor Microsoft realiza la migración" = TRUE en la sección Migración de datos de la carga de trabajo de la pestaña Servicios de FTOP.
    - Método de migración y requisitos de programación para generar los calendarios de migración  

**Salidas de calidad** 

- Las notas de habilitación técnica capturan lo siguiente (si aplica):
    - El cliente elegible valida la configuración de ADF georredundantes y de las políticas de acceso del cliente y web 
        - Se probaron los asistentes o las reglas de reclamos personalizados en la lista de Autorización de emisión
    - El cliente elegible valida la integración de aplicaciones habilitadas de correo y la finalización del enrutamiento de correo
        - Confirmar que ninguna aplicación del cliente está habilitada para correo o, para las que sí, el correo está enrutado como se esperaba
    - Se confirmó el uso del cliente calificado de las Carpetas públicas locales y las configuró y sincronizó de Exchange a O365 si deben coexistir o las migró a buzones de correo compartidos en O365
    - Si se cuenta con autorización, se configuró la mensajería unificada híbrida de Exchange para los usuarios habilitados de Skype/LYNX.
    - Se re-involucró al FTA de Get Modern para la asistencia de implementación de Windows 10. 

####  Tareas de FTOP

| Id. de Tareas | Nombre de la tarea                                                 | (M)andatorio / (O)pcional |   Rol de FastTrack   | Servicios        |
| ------- | --------------------------------------------------------- | :----------------------: | :----------------: | --------------- |
| 4037    | Nueva interacción del Arquitecto de FastTrack de Get Modern              |            O             |   FTA de GetModern    | Windows 10      |
| 3212    | Exchange - Guía para la integración de aplicaciones habilitadas para correo |            O             | Ingeniero de FastTrack | Exchange        |
| 3213    | Exchange - Habilitación de coexistencia de carpeta pública de Exchange  |            O             | Ingeniero de FastTrack | Exchange        |
| 3238    | Exchange - Habilitar integración de Lync/SfB                    |            O             | Ingeniero de FastTrack | Exchange        |
| 3241    | Configurar las Políticas de acceso del cliente AD FS                    |            O             | Ingeniero de FastTrack | Incorporación básica |
| 3243    | Guía de configuración de ADFS georredundante                 |            O             | Ingeniero de FastTrack | Incorporación básica |

### Tareas no categorizadas (Habilitar servicios)

Rol principal: **-**  
Aplicar a: **Todos los servicios**

Las tareas no categorizadas que todavía no se han incorporado al flujo del cuaderno de estrategias de FastTrack aparecerán en esta sección.

####  Tareas de FTOP

| Id. de Tarea | Nombre de la tarea                | (M)andatorio / (O)pcional |   Rol de FastTrack   | Servicios |
| ------- | ------------------------ | :----------------------: | :----------------: | -------- |
| 2550    | {Asistente} Configurar AzRMS |            O             | Ingeniero de FastTrack | AIP      |

##  Entradas clave

  - Todas las tareas requeridas de la lista de comprobación de correcciones se han finalizado. 
  - El cliente entiende la identidad y finaliza cualquier corrección. 
  - Se corrigió/configuró el entorno local del cliente para permitir el consumo de servicios en la nube (incluyendo la coexistencia híbrida).
  - El cliente está listo para comenzar a consumir los servicios. 

##  Resultados clave

  - Todas las cargas de trabajo deseadas están configuradas y disponibles para el consumo. 
  - Los usuarios piloto están habilitados y migrados. 

##  Siguientes pasos

  - Fomente la adopción/consumo de cargas de trabajo adicional como corresponda en el proceso de [Apoyar la ejecución de éxito](success-support-success-execution-partner-es.md).
  - Actualizar el estado del servicio a Adopción o Migración
  
[Inicio](http://partner-docs.microsoft.com)

##  Resumen de actualización

| Fecha       | Quién realizó el cambio       | Qué cambió          |
| ---------- | ----------------- | ----------------      |
| 10/25/2020  | Celia Kennedy | Mantenimiento general |
| 2/28/2020  | Celia Kennedy | Se agregó el paso Realizar las tareas de habilitación de Get Modern  |
| 1/31/2020  | Celia Kennedy | Se degradó la tarea 1910, se cambió la tarea 3690 a Mandatorio, se renombró la tarea 3685 |
| 1/31/2020  | Celia Kennedy | Se agregaron las tareas 4097, 4098 |
| 12/6/2019  | Celia Kennedy | Se degradó la tarea 4022, se agregó la tarea 4087 |
| 10/25/2019 | Celia Kennedy | Se agregaron las tareas 4081, 4082,4083 |
| 09/25/2019 | Celia Kennedy | Contenido de socio actualizado  |
| 05/03/2019 | Celia Kennedy | Se eliminaron las tareas obsoletas  |
| 03/06/2019 | Patric Grimwood   | Se actualizaron enlaces en Pasos siguientes |
| 02/26/2019 | Patric Grimwood   | Se actualizaron enlaces de socios |
| 10/26/2018 | Mark Eichenberger | Se creó el cuaderno de estrategias      |

[Inicio](http://partner-docs.microsoft.com)
