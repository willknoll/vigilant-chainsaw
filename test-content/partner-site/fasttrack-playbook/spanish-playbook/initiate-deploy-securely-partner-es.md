---  
# required metadata  
title: FastTrack Partner Playbook - Deploy Securely  
description: FastTrack Partner Playbook - Deploy Securely  
author: Celia Kennedy
ms.author: v-cekenn
manager: pagrim
ms.date: 09/27/2019
ms.topic: partner-playbook
ms.prod: non-product-specific  
ms.custom: partner-playbook  
ft.audience: partner  
ft.owner: pagrim
--- 

#  Implementar de forma segura

Fase: **Iniciar**  
Iniciativas: **Salud del cliente / RFA / Focalización**  

## Descripción general

El proceso de Implementación segura inicia la relación de trabajo entre el FastTrack Center (FTC) y el cliente. Es aquí donde el FTC comienza a conocer el negocio del cliente, los servicios que posee y donde el cliente comienza a conocer el ámbito de apoyo que el FTC puede brindarle con relación a las características de seguridad.  

##  Objetivos

Entender los requisitos de implementación del cliente y cómo las soluciones de seguridad de M365 pueden abordarlos.  

Evaluar el conocimiento actual del cliente sobre la seguridad de la Identidad, del dispositivo y de la información.  

Explicar al cliente:

  - Importancia de la seguridad
  - Por qué se debe establecer un punto de referencia de seguridad.
  - Por qué las cargas de trabajo de colaboración y productividad se deberán implementar de forma segura.  

##  Enfoque

### Prepararse para la Conversación sobre seguridad de M365

Rol principal: **Administrador de FastTrack**  
Iniciativas: **Salud del cliente / RFA / Focalización**  
Aplicar a: **Incorporación básica**

Revisar las licencias del cliente para determinar qué tipo de licencia tiene y si tienen alguna característica de seguridad complementaria. El conocer las licencias del cliente le ayudará a construir la historia que inste al cliente a usar el conjunto de productos de Microsoft 365 para implementar sus cargas de trabajo de la forma más segura posible desde un principio.  

### Programar y entregar la conversación de seguridad de M365

Rol principal: **Administrador de FastTrack**  
Iniciativas: **Salud del cliente / RFA / Focalización**  
Aplicar a: **Incorporación básica**

Tener una reunión que incluya a todas las partes interesadas en la organización del cliente (BDM, analista de seguridad, arquitecto de seguridad, directorio de seguridad, TI, etc.) para discutir la importancia de crear un punto de referencia para la implementación ayudará a asegurar que el cliente esté aprovechando la seguridad integrada en la estructura de nuestros productos y soluciones. La [Presentación de la conversación sobre seguridad de M365](https://aka.ms/frp-sandcconversation) prepara la conversación acerca de la implementación de los servicios de forma segura.   

####  Tareas de FTOP

| Id. de tarea | Nombre de la tarea                  | (M)andatorio / (O)pcional |  Rol de FastTrack   | Servicios        |
| ------- | -------------------------- | :----------------------: | :---------------: | --------------- |
| 4017    | Conversación de seguridad M365 |            M             | Administrador de FastTrack | Incorporación básica |

###  Preparar identidad

Rol principal: **Ingeniero de FastTrack**  
Iniciativas: **Salud del cliente / RFA / Focalización**  
Aplicar a: **Incorporación básica**

**Identificar bosques y limpiar UPN malformados**

Esta será la primera discusión para guiar al cliente hacia el establecimiento de una base segura para la transición hacia la nube. Al finalizar este paso el FE debería tener un buen entendimiento del entorno y la infraestructura actuales y ayudará a desarrollar el camino a seguir. Reunirse con el cliente para tener una conversación para entender su estructura y entorno actuales. Utilizar el conjunto de herramientas para limpiar el entorno del cliente para preparar la sincronización de identidad.

  - [Conjunto de herramientas](https://docs.microsoft.com/en-us/office365/enterprise/install-and-run-idfix)

**Finalizar el método de autenticación**

Sostener una conversación con el cliente para discutir y elegir el método de autenticación. Esto solo puede suceder después de que haya identificado los bosques existentes y el cliente haya limpiado el entorno para preparar la sincronización de identidad. 

  - [Elija la autenticación de Azure AD](https://go.microsoft.com/fwlink/?linkid=873173)

**Configurar AAD Connect**

Usar [Tareas prescritas de AAD Connect](https://docs.microsoft.com/en-us/office365/enterprise/set-up-directory-synchronization) para configurar el contenido de AAD. No sincronizar las identidades en este momento.

Antes de sincronizar las identidades, configure dos cuentas de romper cristal en la nube solamente para mitigar escenarios donde no pueda ingresar a una cuenta de administración normal. A continuación, configure una Política de acceso condicional que bloquear todo acceso de forma predeterminada. Asegúrese de excluir sus cuentas de romper el cristal para evitar que los administradores se queden fuera del portal.

Por último, habilite la Política de punto de referencia: MFA para administradores para asegurar que los usuarios privilegiados serán registrados por MFA y protegidos de forma predeterminada. 

  - [Cuentas de romper el cristal](https://docs.microsoft.com/en-us/azure/active-directory/users-groups-roles/directory-emergency-access)
  - [Política de punto de referencia: MFA para administradores](https://docs.microsoft.com/en-us/azure/active-directory/conditional-access/baseline-protection)
  - [¿Qué son las políticas de punto de referencia?](https://docs.microsoft.com/en-us/azure/active-directory/conditional-access/baseline-protection)
  
**Sincronización de identidad**

El cliente no debe sincronizar las identidades hasta:  

  - Que las cuentas de romper cristal estén creadas
  - Esté configura una Política de acceso condicional de Bloquear todo
  - Política de punto de referencia: MFA para administradores esté habilitado

Al concluir este paso, el marco de trabajo de seguridad del punto de referencia alrededor de la identidad quedará establecido. La sincronización de identidad con AAD Connect configurado previamente ocurrirá en la Tarea 1141: Configurar el Directorio de sincronización (Azure AD Connect) en la fase de habilitación.  

####  Tareas de FTOP

| Id. de tarea | Nombre de la tarea                                      | (M)andatorio / (O)pcional |   Rol de FastTrack   | Servicios        |
| ------- | ---------------------------------------------- | :----------------------: | :----------------: | --------------- |
| 3736    | Guía para elegir un método de autenticación |            M             | Ingeniero de FastTrack | Incorporación básica |

###  Identidad y seguridad del dispositivo

Rol principal: **Ingeniero de FastTrack**  
Iniciativas: **Salud del cliente / RFA / Focalización**  
Aplicar a: **Incorporación básica**

La presentación de Identidad y seguridad del dispositivo es obligatoria para todos los clientes. Inste a todos los clientes a planificar una base de seguridad sólida alrededor de la administración de la identidad, el dispositivo y la aplicación móvil.

Como resultado del taller, usted podrá ayudar a los clientes a elegir y habilitar las características de seguridad apropiadas para su organización con respecto al aseguramiento de las identidades y los dispositivos.  

  - Los FE imparten el Taller de prácticas recomendadas de seguridad de la identidad y los dispositivos y completan el formulario de transferencia
  - Para las reinteracciones de EMS, los FM deben considerar la [Presentación de valor empresarial](https://aka.ms/AA54548) para una discusión de alto nivel.
  - Usar la [Guía de seguridad de la identidad y los dispositivos](https://aka.ms/FRPDeploySecurelyGuidance) para información sobre la ejecución de este paso.

#### Tareas de FTOP

| Id. de tarea | Nombre de la tarea     | (M)andatorio / (O)pcional |   Rol de FastTrack   | Servicios        |
| ------- | --------------------------------------------------------- | :----------------------: | :----------------: | --------------- |
| 3720    | [Taller de prácticas recomendadas de seguridad de la identidad y los dispositivos](https://aka.ms/FRPDeploySecurelyGuidance)      |            M             | Ingeniero de FastTrack | Incorporación básica |
| 3721    | Seguridad de los dispositivos e identidad completó el trabajo del formulario de transferencia |            O             |        SME         | Incorporación básica |

##  Entradas clave

  - Llamada de arranque del cliente finalizada.  

##  Resultados clave

  - El cliente tiene un entendimiento sólido de las características de seguridad disponibles para implementar las cargas de trabajo de la forma más segura posible.  
  - Documentar las áreas en las que el cliente no tiene planificado realizar una habilitación, además de los motivos.
  - El cliente ha elegido el método de autenticación y habilitó las características de seguridad apropiadas para su organización con respecto al aseguramiento de la identidad y los dispositivos.  

##  Siguientes pasos

  - El FM calendariza una(s) reunión(es) de seguimiento con el equipo del proyecto y los accionistas relevantes para discusiones acerca de servicios y escenarios específicos para cerrar las brechas de conocimiento según sea necesario (por ejemplo BVD, talleres de servicios reunión(es) con SME técnicos/de adopción etc.)  
  - Una vez que se completen los resultados enumerados anteriormente, prosiga a [Llevar a cabo una evaluación técnica](assess-conduct-technical-assessment-partner-es.md),
    [Llevar a cabo talleres de seguridad](assess-conduct-security-workshops-partner-es.md), y [Llevar a cabo un Taller de servicios](assess-conduct-services-workshops-partner-es.md)

###  Resumen de actualización

|Fecha|Quién realizó el cambio|Qué cambió|
|---------|---------------|----------------------------|
|03/25/2020| Celia Kennedy| Mantenimiento general|
|10/018/2019| Celia Kennedy| Cuaderno de estrategias del socio actualizado|

[Inicio](http://partner-docs.microsoft.com)
