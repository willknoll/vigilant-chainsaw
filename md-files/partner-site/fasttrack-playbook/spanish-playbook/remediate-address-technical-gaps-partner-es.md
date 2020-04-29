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

# Abordar las brechas técnicas

Fase: **Corrección**

## Descripción general

El proceso de Abordar las brechas técnicas identifica y aborda las brechas técnicas antes de la implementación, con el fin de permitir una implementación coherente y oportuna de la carga de trabajo del cliente y evitar la frustración o los retrasos debido a la infraestructura u otros bloqueadores técnicos.

## Objetivos

  - Corregir todas las deficiencias identificadas durante la evaluación.
  - Asegurarse de que el entorno del cliente cumpla con el estándar mínimo para la habilitación.
  - Llevar a cabo actividades de incorporación, que incluyen la corrección y sincronización de identidades.

## Enfoque

### Revisar la lista de comprobación de correcciones

Rol principal: **Ingeniero de FastTrack**  
Se aplica a: **Todos los servicios**

Revise la lista de comprobación de correcciones con el cliente.

### Realizar reuniones de control

Rol principal: **Ingeniero de FastTrack**  
Se aplica a: **Todos los servicios**

Llevar a cabo una reunión de control (semanalmente o con otra frecuencia) para revisar el progreso de los pasos de corrección.

### Ayudar con los pasos de corrección

Rol principal: **Ingeniero de FastTrack**  
Se aplica a: **Todos los servicios**

Ayudar con los pasos de corrección según sea necesario.

#### Tareas de FTOP

| Id. de tarea | Nombre de la tarea                                                    | (M)andatorio / (O)pcional |   Rol de FastTrack   | Servicios           |
| ------- | ------------------------------------------------------------ | :----------------------: | :----------------: | ------------------ |
| 3988    | AIP - Verificar los prerrequisitos |            M             | SME | AIP |
| 2122    | Exchange - Configurar el acceso a la nube del servidor GroupWise    |            O             | Ingeniero de FastTrack | Exchange           |
| 3184    | AAD Connect Health - Verificar los requisitos del sistema              |            O             | Ingeniero de FastTrack | Incorporación principal    |
| 2193    | SfB - Corrección de características avanzadas y polos largos           |            O             | Ingeniero de FastTrack | Skype Empresarial |
| 2271    | Intune - Pasos de corrección                                   |            M             | Ingeniero de FastTrack | Intune             |
| 3680    | Intune - Llevar a cabo la guía de migración a Intune (híbrido a independiente) |            O             | Ingeniero de FastTrack | Intune             |
| 3681    | Intune - Guía y pasos de corrección de coadministración        |            O             | Ingeniero de FastTrack | Intune             |
| 3224    | EDU: Corregir aulas y SDS                               |            O             | Ingeniero de FastTrack | Aula/SDS      |
| [4080](https://docs.microsoft.com/en-us/windows/security/threat-protection/microsoft-defender-atp/configure-proxy-internet)    | MDATP - Configuración de proxy, incluyendo la creación de una lista blanca de URL           |            M             |        SME         | MDATP              |

### Corrección del beneficio adicional empresarial

Rol principal: **Ingeniero de FastTrack**  
Se aplica a: **Exchange / Skype Empresarial**

Solo para clientes empresariales aprobados con 20 mil puestos o más, o con una excepción.

#### Tareas de FTOP

| Id. de tarea | Nombre de la tarea                                                   | (M)andatorio / (O)pcional |   Rol de FastTrack   | Servicios           |
| ------- | ----------------------------------------------------------- | :----------------------: | :----------------: | ------------------ |
| 3208    | Exchange - Agrupamiento de buzones de correo y planificación de la migración |            O             | Ingeniero de FastTrack | Exchange           |
| 3209    | SfB - Corrección de migración de usuarios                            |            O             | Ingeniero de FastTrack | Skype Empresarial |
| 3358    | Taller de planificación de migración profunda                       |            O             | Arquitecto de FastTrack v2 | Exchange / OneDrive para la Empresa / SharePoint |

### Coordinar actividad de corrección

Rol principal: **Ingeniero de FastTrack**  
Se aplica a: **Todos los servicios**

Coordinar la actividad de corrección llevada a cabo por el socio, Microsoft Consulting Services (MCS) o Premier.

### Lista de comprobación de correcciones resuelta

Rol principal: **Administrador de FastTrack**  
Se aplica a: **Todos los servicios**

Pasar a la fase de habilitación y completar el proceso de salida de corrección.

#### Tareas de FTOP

| Id. de tarea | Nombre de la tarea                                                                       | (M)andatorio / (O)pcional |   Rol de FastTrack   | Servicios     |
| ------- | ------------------------------------------------------------------------------- | :----------------------: | :----------------: | ------------ |
| 3190    | Confirmar las revisiones del cliente y resolver todos los ítems de la lista de comprobación de correcciones |            M             | Ingeniero de FastTrack | Todos los servicios |
| 1700    | Salida de corrección: se resolvieron todos los ítems de la lista de correcciones                     |            M             | Administrador de FastTrack  | Todos los servicios |

##### Tareas no categorizadas (Abordar las brechas técnicas)

Roles principales: -
Se aplica a: **Todos los servicios**

Las tareas del portal de organización de FastTrack no categorizado (FTOP) que todavía no se han incorporado al flujo del Cuaderno de estrategias de FastTrack aparecerán aquí.

#### Tareas de FTOP

| Id. de tarea | Nombre de la tarea                        | (M)andatorio / (O)pcional |   Rol de FastTrack   | Servicios |
| ------- | -------------------------------- | :----------------------: | :----------------: | -------- |
| 2545    | Corrección de AzRMS y polos largos |            O             | Ingeniero de FastTrack | AIP      |

## Entradas claves

  - Todas las actividades de evaluación técnica han finalizado (Lista de comprobación de correcciones).
  - El cliente ha identificado recursos adicionales para finalizar la corrección (Socio/MCS/Premier).

## Resultados claves

  - Todos los pasos de corrección identificados están resueltos, por lo que el cliente continúa con la fase de habilitación.
  - El entorno del cliente cumple o supera los estándares mínimos para la habilitación del servicio en la nube.
  - Se ha corregido la identidad, por lo que el aprovisionamiento y la sincronización están configurados y activos.
  - Se han identificado los usuarios/grupos piloto y están preparados para la migración a cargas de trabajo en la nube.

## Siguientes pasos

  - Preparar a los usuarios/grupos piloto para la habilitación.
  - Continuar con el proceso de [Apoyar la ejecución de éxito](success-support-success-execution-partner-en.md) para impulsar la adopción.
  - Continuar con el proceso de [Habilitar servicios](enable-enable-services-partner-es.md).

## Resumen de actualización

| Fecha       | Quién realizó el cambio       | Qué cambió             |
| ---------- | ----------------- | ------------------------ |
| 12/18/2019 | Celia Kennedy     | Se agregaron las tareas 4080 y 3358                    |
| 09/25/2018 | Celia Kennedy     | Se actualizó el contenido |
| 05/02/2018 | Celia Kennedy     | Se eliminaron las tareas obsoletas |
| 03/06/2019 | Patric Grimwood   | Se actualizaron los vínculos en Siguientes pasos |
| 02/26/2019 | Patric Grimwood   | Se actualizaron los vínculos del socio    |
| 12/11/2018 | Mark Eichenberger | Se creó el Cuaderno de estrategias         |
| 12/7/2018  | Ryan Meehan       | Cambios menores de formato |

[Inicio](http://partner-docs.microsoft.com)
