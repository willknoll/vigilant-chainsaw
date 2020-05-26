---  
# required metadata  
title: FastTrack Partner Playbook - Address Technical Gaps  
description: FastTrack Partner Playbook - Address Technical Gaps  
author: Celia Kennedy
ms.author: v-cekenn
manager: pagrim
ms.date: 5/02/2019
ms.topic: playbook
ms.prod: non-product-specific
ms.custom: partner-playbook
ft.audience: partner
ft.owner: pagrim
---  

#  Abordar las brechas técnicas

Fase: **Corrección**

## Descripción general

El proceso de abordar las brechas técnicas identifica y aborda las brechas técnicas antes de la implementación, con el fin de permitir al cliente una implementación de carga de trabajo coherente y oportuna y evitar frustración y retrasos a causa de infraestructura o bloqueadores técnicos.

##  Objetivos

  - Corregir todas las deficiencias identificadas durante la evaluación.
  - Asegurarse de que el entorno del cliente cumpla con el estándar mínimo para la habilitación.
  - Llevar a cabo actividades de incorporación, que incluyen la corrección y sincronización.

##  Enfoque

###  Revisar la lista de comprobación de correcciones

Rol principal: **Ingeniero de FastTrack**  
Aplicar a: **Todos los servicios**

Revise la lista de comprobación de correcciones con el cliente.

###  Realizar reuniones de control

Rol principal: **Ingeniero de FastTrack**  
Aplicar a: **Todos los servicios**

Llevar a cabo una reunión de control (semanalmente o con otra frecuencia) para revisar el progreso en los pasos de corrección.

###  Ayudar con los pasos de corrección

Rol principal: **Ingeniero de FastTrack**  
Aplicar a: **Todos los servicios**

Ayudar con los pasos de corrección como sea requerido.

####  Tareas de FTOP

| Id. de tarea | Nombre de la tarea     | (M)andatorio / (O)pcional | Rol de FastTrack | Servicios |
|---------|---------------|--------------------------|--------------------------|--------------------------|
| 3184    | AAD Connect Health - Verificar los requisitos del sistema | O |Ingeniero de FastTrack | Incorporación básica       |
| 2193    | SfB - Corrección de características avanzadas y polos largos | O  | Ingeniero de FastTrack | Skype Empresarial |
| 3224    | EDU: Corregir aulas y SDS  | O | Ingeniero de FastTrack | Aulas y SDS    |
| 3998    | MIP - Requisitos previos de verificación     | M                        | SME                | AIP |
| 4073    | Red - Abordar los problemsa de red identificados desde la herramienta netonboard  | O  | Ingeniero de FastTrack | Incorporación básica  |
| 4080  | [MDATP - Configuración de proxy, incluyendo la creación de una lista blanca de URL](https://docs.microsoft.com/en-us/windows/security/threat-protection/microsoft-defender-atp/configure-proxy-internet)  |M |  SME | MDATP              |
| 4101    | Reemplazar políticas de seguridad predeterminadas con las políticas CA para migraciones - [Instrucciones](https://aka.ms/AA75xf0) Los FRP pueden [Solicitar un SME de identidad](https://aka.ms/FRPHubSMERequestProcess) para obtener asistencia opcional | O  | Ingeniero de FastTrack | Exchange / OneDrive para la Emresa / SharePoint |

###  Corrección del beneficio adicional empresarial

Rol principal: **Ingeniero de FastTrack**  
Aplicar a: **Exchange / Skype Empresarial**

Solo para clientes de enterprise aprobados con 20.000 puestos o más, o con una excepción.

####  Tareas de FTOP

| Id. de tarea | Nombre de la tarea                                                   | (M)andatorio / (O)pcional |   Rol de FastTrack   | Servicios           |
| ------- | ----------------------------------------------------------- | :----------------------: | :----------------: | ------------------ |
| 3208    | Exchange - Agrupamiento de buzones de correo y planificación de la migración |            O             | Ingeniero de FastTrack | Exchange           |
| 3209    | SfB - Corrección de migración de usuarios                            |            O             | Ingeniero de FastTrack | Skype Empresarial |
| 3358    | Taller profundización de planificación de la migración                       |            O             | Arquitecto de FastTrack v2 | Exchange / OneDrive para la Emresa / SharePoint |

###  Coordinar actividad de corrección

Rol principal: **Ingeniero de FastTrack**  
Aplicar a: **Todos los servicios**

Coordinar la actividad de corrección llevada a cabo por el socio, Servicios de consultoría de Microsoft (MCS) o Premier.

###  Lista de comprobación de correcciones resuelta

Rol principal: **Administrador de FastTrack**  
Aplicar a: **Todos los servicios**

Pasar a la fase de habilitación y completar el proceso de salida de correcciones.

####  Tareas de FTOP

| Id. de tarea | Nombre de la tarea                                                                       | (M)andatorio / (O)pcional |   Rol de FastTrack   | Servicios     |
| ------- | ------------------------------------------------------------------------------- | :----------------------: | :----------------: | ------------ |
| 3190    | Confirmar los análisis del cliente y resolver cualquier pendiente de la lista de comprobación de corrección. |            M             | Ingeniero de FastTrack | Todos los servicios |
| 1700    | Salida de corrección: Se resolvieron todos los artículos en la lista de comprobación de correcciones                     |            M             | Administrador de FastTrack  | Todos los servicios |

##### Tareas no categorizadas (Abordar las brechas técnicas)

Roles principales: -
Aplicar a: **Todos los servicios**

Las tareas del portal de organización de FastTrack no categorizado (FTOP) que todavía no se han incorporado al flujo del Cuaderno de estrategias de FastTrack aparecerán aquí.

####  Tareas de FTOP

| Id. de Tarea | Nombre de la tarea                        | (M)andatorio / (O)pcional |   Rol de FastTrack   | Servicios |
| ------- | -------------------------------- | :----------------------: | :----------------: | -------- |
| 2545    | Corrección de AzRMS y polos largos |            O             | Ingeniero de FastTrack | AIP      |

##  Entradas clave

  - Todas las actividades de evaluación técnica han finalizado (Lista de comprobación).
  - El cliente ha identificado recursos adicionales para finalizar la corrección
(Socio, MCS, Premier).

##  Resultados clave

  - Todos los pasos de corrección identificados están resueltos, por lo que el cliente pasa a la fase de habilitación.
  - El entorno del cliente cumple o supera los estándares mínimos para la habilitación del servicio de nube.
  - Se ha corregido la identidad, por lo que el aprovisionamiento y la sincronización están configurados y activos.
  - Se han identificado los usuarios/grupos piloto y están preparados para la migración a las cargas de trabajo en la nube.

##  Siguientes pasos

  - Preparar a los usuarios/grupos piloto para la habilitación.
  - Continuar con el proceso de [Apoyar la ejecución de éxito](success-support-success-execution-partner-es.md) para impulsar la adopción.
  - Continuar con el proceso de [Habilitar servicios](enable-enable-services-partner-es.md).

##  Resumen de actualización

| Fecha       | Quién realizó el cambio       | Qué cambió             |
| ---------- | ----------------- | ------------------------ |
| 03/27/2020 | Celia Kennedy     | Mantenimiento general |
| 12/18/2019 | Celia Kennedy     | Se agregaron las tareas 4080 y 3358                    |
| 09/25/2018 | Celia Kennedy     | Contenido actualizado |
| 05/02/2018 | Celia Kennedy     | Se eliminaron las tareas obsoletas |
| 03/06/2019 | Patric Grimwood   | Se actualizaron enlaces en Pasos siguientes |
| 02/26/2019 | Patric Grimwood   | Se actualizaron enlaces de socios    |
| 12/11/2018 | Mark Eichenberger | Se creó el cuaderno de estrategias         |
| 12/7/2018  | Ryan Meehan       | Cambios mínimos de formato |

[Inicio](http://partner-docs.microsoft.com)
