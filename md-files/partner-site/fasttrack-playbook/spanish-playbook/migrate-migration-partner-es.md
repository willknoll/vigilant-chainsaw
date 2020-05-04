---  
# required metadata  
title: FastTrack Partner Playbook - Migration
description: FastTrack Partner Playbook - Migration
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

# Migración

Fase: **Migrar**

## Información general

Asegure la migración exitosa a (Exchange en la nube Online/OneDrive para la Empresa/SharePoint).

## Objetivos

  - Valide la habilitación técnica y la preparación del cliente para la migración
  - Ejecute la migración de prueba
  - Transferir la interacción a velocidad y ejecutar migraciones rápidas
  - Administración de problemas

## Enfoque

### Ejecute la migración de prueba

Rol principal: **Administrador de velocidad de migración**  
Aplica a: **Exchange/OneDrive para la Empresa/SharePoint**

Ejecutar la migración de prueba y validar que la estructura del cliente esté preparada para la migración rápida.  

#### Tareas de FTOP

| Id. de tarea | Nombre de tarea                                                             | (M)andatorio / (O)pcional |   Rol de FastTrack   | Servicios |
| ------- | --------------------------------------------------------------------- | :----------------------: | :----------------: | -------- |
| 1330    | Exchange - Validar migración por correo electrónico con el lote de prueba (FE y cliente) |            O             | Ingeniero de FastTrack | Exchange |

### Crear documentos de transición y el proyecto de transición para el socio universal

Rol principal: **Administrador de velocidad de migración**  
Aplica a: **Exchange/OneDrive para la Empresa/SharePoint**

Crear documentos de transición para realizar la transición de la interacción hacia el Modelo de socio universal (UPM)  

### Administrar migración rápida

Rol principal: **Administrador de velocidad de migración**  
Aplica a: **Exchange/OneDrive para la Empresa/SharePoint**

Programar y procesar la migración de lote del cliente para acelerar la migración a la nube.  

#### Tareas de FTOP

| Id. de tarea | Nombre de tarea                                                                                         | ((M)andatorio / (O)pcional |       Rol de FastTrack       | Servicios                                      |
| ------- | ------------------------------------------------------------------------------------------------- | :----------------------: | :------------------------: | --------------------------------------------- |
| 3234    | Dirija juntas Go-NoGo con el cliente                                                               |            O             |     Administrador de FastTrack      | SharePoint / Exchange / OneDrive para la Empresa |
| 3135    | Cliente crea programación de la migración                                                                |            O             |     Ingeniero de FastTrack     | OneDrive para la Empresa / Exchange / SharePoint |
| 3143    | Exchange - Validar acceso a buzón de correo - Ejecutar vuelo previo en TODOS los buzones programados                     |            O             |     Ingeniero de FastTrack     | Exchange                                      |
| 1328    | Exchange - Corregir problemas de buzón de correo identificados                                                  |            O             |     Ingeniero de FastTrack     | Exchange                                      |
| 3629    | Proceso de pausa de migración y desconexión MVM                                                     |            M             | Administrador de velocidad de migración | Exchange / OneDrive para la Empresa / SharePoint |
| 1871    | Actividades de migración directas                                                                       |            M             | Administrador de velocidad de migración | Exchange / OneDrive para la Empresa / SharePoint |
| 1874    | Exchange - Sugiera al cliente ejecutar el buzón de correo local para el guión de conversión de usuarios con correo habilitado |            O             |     Ingeniero de FastTrack     | Exchange                                      |

### Administración de problemas

Rol principal: **Administrador de velocidad de migración**  
Aplica a: **Exchange/OneDrive para la Empresa/SharePoint**

Administrar y resolver los problemas de la migración.  

#### Tareas de FTOP

| Id. de tarea | Nombre de tarea                                                                                                               | (M)andatorio / (O)pcional |       Rol de FastTrack       | Servicios              |
| ------- | ----------------------------------------------------------------------------------------------------------------------- | :----------------------: | :------------------------: | --------------------- |
| 2543    | Exchange - Sugerir al cliente informar cualquier problema posmigración dentro de un plazo de T+5 días hábiles a partir de la fecha del evento de migración |            O             |     Administrador de FastTrack      | Exchange              |
| 2481    | OneDrive - Ayudar al cliente con los artículos que no estén sincronizados y otros problemas de migración                                       |            O             | Administración de velocidad de migración | OneDrive para la Empresa |

### Finalizar migración

Rol principal: **Administrador de velocidad de migración**  
Aplica a: **Exchange/OneDrive para la Empresa/SharePoint**

Validar que los datos del cliente han migrado correctamente y continuar con cualquier actividad de limpieza antes de desconectarse.  

#### Tareas de FTOP

| Id. de tarea | Nombre de tarea                                                                   | (M)andatorio / (O)pcional |       Rol de FastTrack       | Servicios                                      |
| ------- | --------------------------------------------------------------------------- | :----------------------: | :------------------------: | --------------------------------------------- |
| 2544    | Exchange - Cambiar el registro MX con base en el plan de flujo de correo                     |            O             |     Ingeniero de FastTrack     | Exchange                                      |
| 1386    | Exchange - Restablecer el registro MX DNS TTL al valor original                        |            O             |     Ingeniero de FastTrack     | Exchange                                      |
| 1370    | Exchange - Enviar por correo electrónico las actividades posmigración (Todos los sistemas de recursos)   |            O             |     Ingeniero de FastTrack     | Exchange                             |
| 2561    | OneDrive - Actividades posmigración de OneDrive para la Empresa (Redirigir la configuración) |            O             |     Ingeniero de FastTrack     | OneDrive para la Empresa                         |
| 2323    | Exchange - Actividades de cierre de migración                        |            O             | Administrador de velocidad de la migración | Exchange / OneDrive para la Empresa / SharePoint             |
| 1702    | Salida de migración: Todas las migraciones en el ámbito finalizadas                             |            M             |     Administrador de FastTrack      | Exchange / OneDrive para la Empresa / SharePoint |

### Tareas no categorizadas (Migración)

Rol principal: **-**  
Aplica a: **Todos los servicios**

Las tareas del portal de organización de FastTrack no categorizado (FTOP) que todavía no se han incorporado al flujo del cuaderno de estrategias de FastTrack aparecerán aquí.  

## Entradas claves

  - Taller de migración
  - Cuestionario de migración
  - Configuración de infraestructura del cliente y configuración finalizadas
  - Requisitos de conectividad cumplidos
  - Credencial proporcionada por el cliente
  - Programar lotes (archivos CSV)

## Resultados claves

- Datos del cliente de migración exitosa

## Siguientes pasos

  - Promueva al cliente al proceso [Apoyar ejecución de éxito](success-support-success-execution-partner-en.md).
  - Promueva al cliente al proceso [Apoyar análisis de éxito](success-conduct-success-review-partner-es.md).

## Resumen de actualización

| Fecha       | Quién realizó el cambio       | Qué cambió          |
| ---------- | ----------------- | ----------------      |
| 09/25/2019 | Celia Kennedy     | Actualizar contenido del socio |
| 05/02/2019 | Celia Kennedy     | Tareas obsoletas eliminadas |
| 03/06/2019 | Patric Grimwood   | Actualizó vínculos en Próximos pasos |
| 02/26/2019 | Patric Grimwood   | Vínculos del socio actualizados |
| 12/11/2018 | Mark Eichenberger | Cuaderno de estrategias creado      |

[Inicio](http://partner-docs.microsoft.com)
