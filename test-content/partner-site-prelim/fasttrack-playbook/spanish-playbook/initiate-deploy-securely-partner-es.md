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

# Implementar de forma segura

Fase: **Iniciar**  
Iniciativas: **Salud del cliente / RFA / Focalización**  

## Información general

El proceso de implementación de forma segura inicia la relación de trabajo entre el FastTrack Center (FTC) y el cliente. Aquí es donde FTC comienza a obtener información acerca de la empresa del cliente, los servicios propios y dónde el cliente comienza a obtener información del ámbito de soporte técnico que FTC puede brindar con respecto a las características de seguridad disponibles.  

## Objetivos

Entender los requisitos de implementación del cliente y cómo las soluciones de seguridad de M365 pueden resolverlas.  

Evaluar el conocimiento actual del cliente sobre la seguridad de la identidad, los dispositivos y la información.  

Explicar al cliente:

  - Importancia de la seguridad
  - Por qué se debe establecer un punto de referencia de seguridad.
  - Por qué las cargas de trabajo de productividad y colaboración se deben implementar de forma segura  

## Enfoque

### Prepararse para la Conversación sobre seguridad M365

Rol principal: **Administrador de FastTrack**  
Iniciativas: **Salud del cliente / RFA / Focalización**  
Aplica a: **Incorporación básica**

Revisar la licencia del cliente y determinar qué tipo de licencia tiene y si tiene alguna característica de seguridad complementaria. Saber qué licencias tiene el cliente le ayudará a tener una versión más completa que
los inste a aprovechar más artículos del conjunto de productos Microsoft 365 para implementar sus cargas de trabajo de la forma más segura posible desde el principio.  

### Programar y entregar la conversación de seguridad de M365

Rol principal: **Administrador de FastTrack**  
Iniciativas: **Salud del cliente / RFA / Focalización**  
Aplica a: **Incorporación básica**

Tener una junta que incluya a todas las partes interesadas (BDM, analista de seguridad, arquitecto de seguridad, directorio de seguridad, TI, etc.) en la organización del cliente para discutir la importancia de crear un punto de referencia de seguridad para la implementación ayudará asegurar que el cliente aproveche la seguridad integrada en la estructura de nuestros productos y soluciones. La presentación de la [Conversación de seguridad M365](https://aka.ms/frp-sandcconversation) configura la conversación acerca de la implementación de sus servicios de forma segura.  

#### Tareas de FTOP

| Id. de tarea | Nombre de tarea                  | (M)andatorio / (O)pcional |  Rol de FastTrack   | Servicios        |
| ------- | -------------------------- | :----------------------: | :---------------: | --------------- |
| 4017    | Conversación de seguridad de M365 |            M             | Administrador de FastTrack | Incorporación básica |

### Preparar identidad

Rol principal: **Ingeniero de FastTrack**  
Iniciativas: **Salud del cliente / RFA / Focalización**  
Aplica a: **Incorporación básica**

**Identificar bosques y limpiar UPN malformados**

Esta será la primera discusión que guiará al cliente por hacia la configuración de unos cimientos seguros para la transición a la nube. Al terminar la discusión el FE debería tener un buen entendimiento del entorno y la infraestructura actuales y ayudará a desarrollar una ruta hacia el progreso. Reunirse con el cliente para tener una conversación para entender su entorno y la estructura actuales. Use el conjunto de herramientas para limpiar el
entorno del cliente para preparar la sincronización de identidad  

  - [Conjunto de herramientas](https://docs.microsoft.com/en-us/office365/enterprise/install-and-run-idfix)  

**Finalizar el método de autenticación**

Sostener una conversación con el cliente para discutir y elegir el método de autenticación. Esto solo puede suceder después de que haya identificado los bosques existentes y que el cliente haya limpiado el entorno para preparar la sincronización de identidad. 

  - [Elija Azure AD Autenticación](https://go.microsoft.com/fwlink/?linkid=873173)

**Configurar AAD Connect**

Usar [Tareas prescritas de AAD Connect](https://docs.microsoft.com/en-us/office365/enterprise/set-up-directory-synchronization) para configurar AAD Connect. No sincronizar las identidades en este momento.

Antes de sincronizar las identidades, configure dos cuentas en la nube solamente, de romper el cristal para mitigar los escenarios donde no pueda iniciar sesión en la cuenta administrativa normal. Después, configure una Política de acceso condicional que bloquee el acceso de forma predeterminada . Asegúrese de excluir las cuentas de romper cristal para evitar que los administradores se queden fuera del portal.
Por último, habilite la Política de punto de referencia: MFA para administradores para asegurar que los usuarios privilegiados sean registrados por MFA y protegidos de forma predeterminada. 

  - [Cuentas de romper el cristal](https://docs.microsoft.com/en-us/azure/active-directory/users-groups-roles/directory-emergency-access)
  - [Política de punto de referencia:MFA para administradores](https://docs.microsoft.com/en-us/azure/active-directory/conditional-access/baseline-protection)
  - [¿Qué son las políticas de punto de referencia?](https://docs.microsoft.com/en-us/azure/active-directory/conditional-access/baseline-protection)
  
**Sincronización de identidad**

El cliente no debe sincronizar las identidades hasta:  

  - que las cuentas de romper cristal estén creadas
  - Está configura una Política de acceso condicional de Bloquear todo
  - Política de punto de referencia: MFA para administradores esté habilitado

Al concluir este paso, el marco de trabajo de seguridad del punto de referencia alrededor de la identidad quedará establecido. La sincronización de identidad con AAD Connect configurada previamente ocurrirá en la Tarea 1141: Configurar la sincronización del directorio de (Azure AD Connect) en la face de habilitación.  

#### Tareas de FTOP

| Id. de tarea | Nombre de tarea        | (M)andatorio / (O)pcional |   Rol de FastTrack   | Servicios        |
| ------- | ---------------------------------------------- | :----------------------: | :----------------: | --------------- |
| 3736    | Guía para elegir un método de autenticación |            M             | Ingeniero de FastTrack | Incorporación básica |

### Identidad y seguridad del dispositivo

Rol principal: **Ingeniero de FastTrack**  
Iniciativas: **Salud del cliente / RFA / Focalización**  
Aplica a: **Incorporación básica**

La presentación de Identidad y seguridad del dispositivo es obligatoria para todos los clientes. Aliente a los clientes a planificar una base de seguridad sólida para la administración de la identidad, los dispositivos y la aplicación móvil.

Como resultado del taller, usted ayudará a los clientes a elegir y habilitar las características de seguridad adecuadas para la organización con respecto al aseguramiento de las identidades y los dispositivos.  

  - Los FE imparten el Taller de prácticas recomendadas de seguridad de la identidad y los dispositivos y completan el formulario de transferencia
  - Para las reinteracciones de EMS, los FM deben considerar la [Presentación de valor empresarial EMS](https://aka.ms/AA54548) para llevar a cabo una discusión de alto nivel (de versiones localizadas [aquí](https://aka.ms/FRPDeploySecurelyGuidance)
  - Usar la [Guía de seguridad de la identidad y los dispositivos dispositivos](https://aka.ms/idsapproach) para información sobre la ejecución de este paso  

#### Tareas de FTOP

| Id. de tarea | Nombre de tarea     | (M)andatorio / (O)pcional |   Rol de FastTrack   | Servicios        |
| ------- | --------------------------------------------------------- | :----------------------: | :----------------: | --------------- |
| 3720    | [Taller de prácticas recomendadas de seguridad de la identidad y los dispositivos](https://aka.ms/FRPDeploySecurelyGuidance)      |            M             | Ingeniero de FastTrack | Incorporación básica |
| 3721    | Taller de prácticas recomendadas de seguridad de la identidad y los dispositivos |            O             |        SME         | Incorporación básica |

## Entradas clave

  - Llamada de arranque del cliente finalizada.  

## Resultados clave

  - El cliente tiene un entendimiento sólido de las características de seguridad disponibles para implementar sus cargas de trabajo de la forma más segura.  
  - documente las áreas que el cliente no tiene planificado habilitar junto con las razones.
  - El cliente ha elegido el método de autenticación y habilitó las características de seguridad adecuadas para la organización con respecto a la identidad y los dispositivos.​  

## Siguientes pasos

  - El FM programa junta(s) de seguimiento adicionales con el equipo del proyecto y las partes interesadas relevantes para discutir servicios y escenarios específicos para cerrar la brecha de conocimiento como sea necesario (por ej., BVD, talleres de servicios, junta(s) con los SME de tecnología y adopción, etc.)  
  - Una vez que se completen los resultados enumerados anteriormente, vaya a [Llevar a cabo talleres de éxito del cliente](assess-conduct-technical-assessment-partner-es.md),
    [Llevar a cabo talleres de seguridad](assess-conduct-security-workshops-partner-es.md) y [Llevar a cabo talleres de servicios](assess-conduct-services-workshops-partner-es.md)

### Resumen de actualización

|Fecha|Quién realizó el cambio|Qué cambió|Notas|
|---------|---------------|----------------------------|-------------|
|10/018/2019| Celia Kennedy| Cuaderno de estrategias del socio actualizado| |

[Inicio](http://partner-docs.microsoft.com)
