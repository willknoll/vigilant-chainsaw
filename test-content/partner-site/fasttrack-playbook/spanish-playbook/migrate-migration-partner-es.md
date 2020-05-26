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

#  Migración

Fase: **Migrar**

## Descripción general

Asegure la migración exitosa a la nube (Exchange Online/OneDrive para la Empresa/Sharepoint).

##  Objetivos

  - Valide la habilitación técnica y la preparación del cliente para la migración
  - Ejecute la migración de prueba
  - Transferir la interacción a velocidad y ejecutar migraciones rápidas
  - Administración de problemas

##  Enfoque

###  Ejecute la migración de prueba

Rol principal: **Administrador de velocidad de migración**  
Aplicar a: **Exchange/OneDrive para la Empresa/SharePoint**

Ejecutar la migración de prueba y validar que la estructura del cliente esté preparada para una migración rápida.  

####  Tareas de FTOP

| Tareas de Id. | Nombre de la tarea                                                             | (M)andatorio / (O)pcional |   Rol de FastTrack   | Servicios |
| ------- | --------------------------------------------------------------------- | :----------------------: | :----------------: | -------- |
| 1330    | Exchange - Validar migración por correo electrónico con el lote de prueba (FE y cliente) |            O             | Ingeniero de FastTrack | Exchange |

### Crear documentos de transición y realice la transición del proyecto al socio universal

Rol principal: **Administrador de velocidad de migración**  
Aplicar a: **Exchange/OneDrive para la Empresa/SharePoint**

Crear documentos para la transición de la interacción hacia el Modelo de socio universal (UPM).  

###  Administrar migración rápida

Rol principal: **Administrador de velocidad de migración**  
Aplicar a: **Exchange/OneDrive para la Empresa/SharePoint**

Programar y procesar la migración de lote del cliente para acelerar la migración a la nube.  

####  Tareas de FTOP

| Id. de Tareas | Nombre de la tarea                | (M)andatorio / (O)pcional |       Rol de FastTrack       | Servicios      |
| ------- | -----------------------------------------| :----------------------: | :------------------------: | ---------------|
| 3234    | Dirija reuniones Go-NoGo con el cliente  |         O             |     Administrador de FastTrack      | SharePoint / Exchange / OneDrive para la empresa |
| 3135    | Cliente crear programación de la migración   |         O             |     Ingeniero de FastTrack     | OneDrive para la Empresa / Exchange / SharePoint |
| 3143    | [Guía previa al vuelo de la migración de Exchange Hybrid](https://aka.ms/FTCPreflight) Los clientes deben marcar sus buzones antes de programar la mitigación de errores en curso durante la migración|  O  |  Ingeniero de FastTrack | Exchange|| 1328    | Exchange - Corregir problemas de buzón de correo identificados |   O         |     Ingeniero de FastTrack     | Exchange                                       |
| 3629    | Procesos de pausa de migración y de desconexión MVM.  |   M        | Administrador de velocidad de migración | Exchange / OneDrive para la Emresa / SharePoint |
| 1871    | Actividades de migración directa|            M             | Administrador de velocidad de migración | Exchange / OneDrive para la Emresa / SharePoint |
| 1874    | Exchange - Sugiera al cliente ejecutar el buzón de correo local para el guión de conversión de usuarios de correo habilitado |          O             |     Ingeniero de FastTrack     | Exchange |

###  Administración de problemas

Rol principal: **Administrador de velocidad de migración**  
Aplicar a: **Exchange/OneDrive para la Empresa/SharePoint**

Administrar y resolver los problemas de
la migración.  

####  Tareas de FTOP

| Tareas de Id. | Nombre de la tarea                                                                                                               | (M)andatorio / (O)pcional |       Rol de FastTrack       | Servicios              |
| ------- | ----------------------------------------------------------------------------------------------------------------------- | :----------------------: | :------------------------: | --------------------- |
| 2543    | Exchange - Sugerir al cliente informar sobre cualquier problema posterior a la migración dentro de un plazo de T+5 días hábiles a partir de la fecha del evento de migración |            O             |     Administrador de FastTrack      | Exchange              |
| 2481    | OneDrive - Ayudar al cliente con los artículos que no estén sincronizados y otros problemas de migración                                       |            O             | Administrador de velocidad de migración | OneDrive para la Empresa |

###  Finalizar migración

Rol principal: **Administrador de velocidad de migración**  
Aplicar a: **Exchange/OneDrive para la Empresa/SharePoint**

Validar que los datos del cliente han migrado correctamente y continuar con cualquier actividad de limpieza antes de desconectarse.  

####  Tareas de FTOP

| Id. de Tareas | Nombre de la tarea               | (M)andatorio / (O)pcional | Rol de FastTrack             | Servicios                                      |
|---------|---------------------------------------------------|--------------------------|----------------------------|-----------------------------------------------|
| 2544    | Exchange - Cambiar el registro MX según el plan de flujo de correos     | O                        | Ingeniero de FastTrack         | Exchange                                      |
| 1386    | Exchange - Restablecer el registro MX DNS TTL al valor adicional          | O                        | Ingeniero de FastTrack         | Exchange                                      |
| 1370    | Exchange - Enviar por correo electrónico las actividades posmigración (Todos los sistemas de recursos)          | O                        | Ingeniero de FastTrack         | Exchange                                      |
| 2561    | OneDrive - Actividades posmigración de OneDrive para la Empresa (Redirigir la configuración)         | O                        | Ingeniero de FastTrack         | OneDrive para la Empresa                         |
| 2323    | Actividades cierre de migración               | M                        | Administrador de velocidad de migración | Exchange / OneDrive para la Emresa / SharePoint |
| 4102    | Eliminar las políticas CA y habilitar los valores predeterminados de seguridad posmigración - [Instrucciones](https://aka.ms/AA75m9r) Los FRP pueden [Solicitar un SME de identidad](https://aka.ms/FRPHubSMERequestProcess) para obtener asistencia opcional | O                        | Ingeniero de FastTrack         | Exchange / OneDrive para la Emresa / SharePoint |
| 1702    | Salida de migración: Todas las migraciones en el ámbito finalizadas     | M                        | Administrador de FastTrack          | Exchange / OneDrive para la Emresa / SharePoint |

### Tareas no categorizadas (Migración)

Rol principal: **-**  
Aplicar a: **Todos los servicios**

Las tareas del portal de organización de FastTrack no categorizado (FTOP) que todavía no se han incorporado al flujo del Cuaderno de estrategias de FastTrack aparecerán aquí.  

##  Entradas clave

  - Taller de migración
  - Cuestionario de migración
  - Configuración de infraestructura del cliente y configuración finalizadas
  - Requisitos de conectividad cumplidos
  - Credencial proporcionada por el cliente
  - Programar lotes (archivos CSV)

##  Resultados clave

- Datos del cliente de migración exitosa

##  Siguientes pasos

  - Promueva al cliente al proceso [Apoyar ejecución de éxito](success-support-success-execution-partner-es.md).
  - Promueva al cliente al proceso [Llevar a cabo un análisis del éxito](success-conduct-success-review-partner-es.md).


##  Resumen de actualización

| Fecha       | Quién realizó el cambio       | Qué cambió        |
| ---------- | ----------------- | ----------------    |
| 03/27/2019 | Celia Kennedy     | Mantenimiento general |
| 1/31/2020  | Celia Kennedy | Tarea 4102 agregada, cambio de nombre de la tarea 3143 |
| 09/25/2019 | Celia Kennedy     | Contenido de socio actualizado |
| 05/02/2019 | Celia Kennedy     | Se eliminaron las tareas obsoletas |
| 03/06/2019 | Patric Grimwood   | Se actualizaron enlaces en Pasos siguientes |
| 02/26/2019 | Patric Grimwood   | Se actualizaron enlaces de socios |
| 12/11/2018 | Mark Eichenberger | Se creó el cuaderno de estrategias      |

[Inicio](http://partner-docs.microsoft.com)
