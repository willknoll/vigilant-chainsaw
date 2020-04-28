---  
# required metadata  
title: FastTrack Partner Playbook - Conduct Technical Assessment  
description: FastTrack Partner Playbook - Conduct Technical Assessment  
author: Ryan Meehan
ms.author: v-cekenn
manager: pagrim
ms.date: 10/03/2019  
ms.topic: partner-playbook  
ms.prod: non-product-specific  
ms.custom: partner-playbook  
ft.audience: partner  
ft.owner: pagrim
---  

# Llevar a cabo una evaluación técnica

Fase: **Evaluación**  
Movimientos: **Salud del cliente / RFA / Focalización**  

## Descripción general

El proceso de llevar a cabo la Evaluación técnica permite al equipo de FastTrack desarrollar una comprensión de la infraestructura y las necesidades empresariales del cliente, además de determinar lo que se necesita para realizar una transición sin problemas a la nube. Esta evaluación incluye el entorno local del cliente, el modelo de seguridad del usuario, las restricciones de acceso remoto y cualquier limitación de infraestructura que pudiera potencialmente retraser el proceso de implementación.

Nota: El beneficio de migración es exclusivo para clientes con más de 500 titularidades para servicios especificados (Exchange, SharePoint, OneDrive como el *destino*).  

## Objetivos

  - Identificar el diseño y la capacidad de la infraestructura: 
      - Disposición y capacidad del firewall
      - Conexión de Internet a www o cómo se conectan otros sitios
      - Métodos de implementación de software y versiones actuales 
      - Proceso de creación de la cuenta del usuario
  - Necesidades empresariales:
      - Productos que el cliente desea usar
      - Licencias de software que vencen
      - Infraestructura para comprar
      - Fusiones o cesiones  
      - Programa de implementación
  - Restricciones de seguridad: 
      - Directivas de RAS
      - Directivas de usuario (relacionadas con las necesidades de acceso del equipo de migración)
      - Restricciones de la directiva de firewall
  - Propietarios de la implementación: 
      - Identificar los contactos para un servicio local
      - Contactos responsables de impulsar la implementación  

## Enfoque

### Brindar orientación de principios de conectividad de red

Rol principal: **Ingeniero de FastTrack**  
Movimientos: **Salud del cliente / RFA / Focalización**  
Se aplica a: **Incorporación principal**

El proceso de llevar a cabo la Evaluación de red permite al equipo de FastTrack brindar orientación a los clientes para ayudarlos a entender las recomendaciones de Microsoft con relación a las mejores prácticas de conectividad, además de entender cómo la infraestructura existente del cliente se alinea con esa guía.

Brinde orientación con relación a los principios de conectividad de red de Office 365/Microsoft 365

  - Diferencie el tráfico crítico de SaaS, tratar y confiar en diversas categorías de tráfico de red, de forma diferente  
  - Permita la salida de las conexiones localmente, garantizando una mínima latencia para la infraestructura de Microsoft
  - Optimice la longitud de la ruta hasta el perímetro de la red de Microsoft  
  - ​Evalúe el desvio de dispositivos/procesos de seguridad de red extraños

Asegúrese de que el cliente entienda la dirección de Microsoft a largo plazo para habilitar la alineación de la estrategia de conectividad entre el cliente y Microsoft.

Identifique las rutas de salida desde los sitios del cliente hacia la red global de Microsoft.

Identifique las potenciales configuraciones incorrectas de la infraestructura de red, que pudieran provocar problemas con la experiencia del usuario final.

Determine si los proxis (en especial inspección e interrupción SSL) están en uso con el tráfico de carga de trabajo crítico

La guía de conectividad de red es obligatoria para todos los clientes (al principio de la interacción), y para los clientes que vuelven a interactuar en cargas de trabajo adicionales.  

El propósito de proporcionar una guía de conectividad de red al principio de la interacción es garantizar que los clientes estén configurados adecuadamente para que puedan consumir cualquier servicio de Office 365/Microsoft 365 con un rendimiento y una disponibilidad aceptables.  

Un ingeniero de FastTrack llevará a cabo la conversación en torno a los principios de conectividad de red, utilizando la siguiente presentación:  

[Guía de red de Office 365​](https://aka.ms/O365NetworkGuidanceLocalized)  

Si se requiere asistencia personalizada para ofrecer orientación a un cliente debido a una infraestructura compleja o a requisitos únicos, puede solicitar un SME de red mediante el proceso de solicitud de recursos normal de FastTrack.  

#### Tareas de FTOP

| Id. de tarea | Nombre de la tarea                                           | (M)andatorio / (O)pcional |   Rol de FastTrack   | Servicios        |
| ------- | --------------------------------------------------- | :----------------------: | :----------------: | --------------- |
| 4071    | Brindar orientación de principios de conectividad de red |            M             | Ingeniero de FastTrack | Incorporación principal |

### Ejecutar la herramienta de incorporación a la red

Rol principal: **Ingeniero de FastTrack**  
Movimientos: **Salud del cliente / RFA / Focalización**  
Se aplica a: **Incorporación principal**

La guía de conectividad de red es obligatoria para todos los clientes (al principio de la interacción), y para los clientes que vuelven a interactuar en cargas de trabajo adicionales.  

El propósito de proporcionar una guía de conectividad de red al principio de la interacción es garantizar que los clientes estén configurados adecuadamente para que puedan consumir cualquier servicio de Office 365/Microsoft 365 con un rendimiento y una disponibilidad aceptables.  

Un FE debe llevar a cabo la conversación de principios de conectividad de red, utilizando la siguiente presentación:

[Guía de red de Office 365​](https://aka.ms/O365NetworkGuidanceLocalized)

Si se requiere asistencia personalizada para ofrecer orientación a un cliente debido a una infraestructura compleja o a requisitos únicos, puede solicitar un SME de red mediante el proceso de solicitud de recursos normal de FastTrack.  

El uso de la herramienta de incorporación a la red debe ser posterior a la orientación de principios de conectividad de red. La herramienta ayudará a evaluar si la red del cliente está bien alineada con nuestra guía
y proporcionará sugerencias de corrección específicas al cliente.  

La herramienta debe ejecutarse desde cada sitio de cliente (o se debe establecer al menos un representante que comprenda la arquitectura de red general del cliente). Los clientes pueden acceder a la herramienta en [http://aka.ms/netonboard](http://aka.ms/netonboard).  

Como parte de ayudar a los clientes a pasar por el proceso de ejecución de la herramienta, los ingenieros de FastTrack deben evitar el almacenamiento de los resultados de la herramienta, ya que estos contienen detalles de la configuración de red interna del cliente. Para ayudar al cliente a utilizar las recomendaciones producidas por la herramienta, el cliente puede guardar el resultado en formato PDF dentro del navegador y luego compartirlo 
usando un método seguro, o como alternativa, el cliente puede compartir el resultado a través de una sesión de pantalla compartida para analizarlo con un ingeniero de FastTrack.  

Si se requiere asistencia personalizada para ayudar al cliente a ejecutar la herramienta de incorporación a la red debido a una infraestructura compleja o a requisitos únicos, puede solicitar un SME de red mediante el proceso
de solicitud de recursos normal de FastTrack.  
  
#### Tareas de FTOP

| Id. de tarea | Nombre de la tarea                   | (M)andatorio / (O)pcional |   Rol de FastTrack   | Servicios        |
| ------- | --------------------------- | :----------------------: | :----------------: | --------------- |
| 4072    | Ejecutar la herramienta de incorporación a la red |            M             | Ingeniero de FastTrack | Incorporación principal |

### Crear una lista de comprobación de correcciones

Rol principal: **Ingeniero de FastTrack**  
Movimientos: **Salud del cliente / RFA / Focalización**  
Se aplica a: **Todos los servicios**

Crear una lista de comprobación de correcciones: 

  - Descargar la [lista de comprobación de correcciones](https://aka.ms/PartnerRemediationChecklist) y eliminar los servicios que el cliente no implementará

En la fase de evaluación debe ver los riesgos del proyecto, como bloqueadores, elementos que están fuera del ámbito, limitaciones de tareas del cliente, etc. Este es un buen momento para analizar la posibilidad de contar con un socio preparado para FastTrack que complemente el beneficio de FastTrack. Si el cliente desea usar socios, ejecute la tarea 983 de Quickleads para enviar una recomendación a un socio. Puede encontrar contenido en Quickleads [aquí](https://ftdocs-bcm.azureedge.net/public/referrals-training-v1.pptx), y habilitar la solicitud de contacto de su administrador de socio de FastTrack (FPM).
  
Ejemplos:

- Identidad - Limpiar o dependencias
- Red
- Fuera del ámbito de beneficio de FastTrack
- Necesidades prácticas de teclado / configuración compleja  

#### Tareas de FTOP

| Id. de tarea | Nombre de la tarea                                                   | (M)andatorio / (O)pcional |   Rol de FastTrack   | Servicios     |
| ------- | ----------------------------------------------------------- | :----------------------: | :----------------: | ------------ |
| 3070    | Crear lista de comprobación de correcciones                                |            M             | Ingeniero de FastTrack | Todos los servicios |
| 1049    | Revisar la lista de comprobación de correcciones con el cliente para los elementos de acción |            M             | Ingeniero de FastTrack | Todos los servicios |

### Crear una lista de comprobación de correcciones de EMS con el cliente para los elementos de acción

Rol principal: **SME**  
Movimientos: **Salud del cliente / RFA / Focalización**  
Se aplica a: **AADP / Intune**

Crear una lista de comprobación de correcciones:

  - Descargue la [lista de comprobación de correcciones de EMS](https://aka.ms/frp-EMS-Remediation-Checklist) y elimine las tareas que el cliente no implementará

En la fase de evaluación debe ver los riesgos del proyecto, como bloqueadores, elementos que están fuera del ámbito, limitaciones de tareas del cliente, etc. Este es un buen momento para analizar la posibilidad de contar con un socio preparado para FastTrack que complemente el beneficio de FastTrack. Si el cliente desea usar socios, ejecute la tarea 983 de Quickleads para enviar una recomendación a un socio. Puede encontrar contenido sobre Quickleads [aquí](https://aka.ms/AA5ctuy), y para habilitar la solicitud, puede enviar un correo electrónico a su FPM.

Ejemplos:  

  - Identidad - Limpiar o dependencias
  - Red
  - Fuera del ámbito de beneficio de FastTrack
  - Necesidades prácticas de teclado / configuración compleja  

#### Tareas de FTOP

| Id. de tarea | Nombre de la tarea                                                       | (M)andatorio / (O)pcional | Rol de FastTrack | Servicios      |
| ------- | --------------------------------------------------------------- | :----------------------: | :------------: | ------------- |
| 4075    | Crear una lista de comprobación de correcciones de EMS con el cliente para los elementos de acción |            M             |      SME       | AADP / Intune |

### Evaluación de migración

Rol principal: **Administrador de FastTrack**  
Movimientos: **Salud del cliente / RFA / Focalización**  
Se aplica a: **Exchange/OneDrive para la Empresa/SharePoint**

Si el cliente tiene la intención de usar el beneficio de migración, es necesario realizar actividades adicionales. Se debe proporcionar al cliente el cuestionario de migración (Tarea 2050, Proporcionar al cliente un cuestionario de migración) y se debe presentar una solicitud de Administrador de velocidad de la migración (MVM) (Tarea 2278, Solicitar asignación de un MVM).

#### Tareas de FTOP

| Id. de tarea | Nombre de la tarea                                                                                                               | (M)andatorio / (O)pcional |       Rol de FastTrack       | Servicios                                      |
| ------- | ----------------------------------------------------------------------------------------------------------------------- | :----------------------: | :------------------------: | --------------------------------------------- |
| 2050    | Proporcionar al cliente un cuestionario de migración                                                                             |            O             |     Administrador de FastTrack      | Exchange / OneDrive para la Empresa / SharePoint |
| 2278    | Solicitar asignación de un MVM                                                                                                  |            O             |     Administrador de FastTrack      | Exchange / OneDrive para la Empresa / SharePoint |
| 3217    | Solicitar las licencias empresariales temporales necesarias para realizar las migraciones                                                      |            O             | Administrador de velocidad de la migración | Exchange / OneDrive para la Empresa / SharePoint |
| 3312    | Compartir y analizar la conectividad remota de migración de FT                                                                      |            O             | Administración de velocidad de la migración | Exchange / OneDrive para la Empresa / SharePoint |
| 3308    | Exchange - Migración de notas: Solicitar los recursos de BT para la coexistencia enriquecida y compartir la listad e comprobación de implementación (opcional) |            O             | Administrador de velocidad de la migración | Exchange                                      |
| 1034    | Exchange - Actualizar y cargar el cuestionario de migración del sistema de origen                                                      |            M             |     Ingeniero de FastTrack     | Exchange                                      |

### Realizar evaluaciones

Rol principal: **Ingeniero de FastTrack**  
Movimientos: **Salud del cliente / RFA / Focalización**  
Se aplica a: **Todos los servicios**

  - Evaluar las tareas para un servicio según sea necesario.
  - Algunas tareas de servicios pueden:
      - Vincular a un asistente público.
      - Vincular a documentos de guía adicionales.
      - Ser necesarias cuando se usa el beneficio de migración.
      - Estar diseñadas solo para el cliente empresarial, consulte al ingeniero de FastTrack (FE) o al experto en la materia (SME) en caso de preguntas relacionadas con las tareas de servicios.

#### Tareas de FTOP

| Id. de tarea | Nombre de la tarea                                                                           | (M)andatorio / (O)pcional |   Rol de FastTrack   | Servicios           |
| ------- | ----------------------------------------------------------------------------------- | :----------------------: | :----------------: | ------------------ |
| [3268](https://aka.ms/FRPTeamsDiscoveryDiscussion)    | Teams - Evaluar Microsoft Teams                                                      |            M             | Ingeniero de FastTrack | Teams              |
| 3226    | EDU: Evaluar aula y sincronización de SDS                                                  |            O             | Ingeniero de FastTrack | Aula/SDS      |
| 2121    | Exchange - Si corresponde, proporcionar al cliente la herramienta Discovery del cliente GroupWise   |            O             | Ingeniero de FastTrack | Exchange           |
| 2393    | SfB - Revisar múltiples requisitos de características avanzadas de bosques de Skype Empresarial/Lync |            O             | Ingeniero de FastTrack | Skype Empresarial |
| 2455    | SfB - Ejecutar la herramienta de análisis de red de Office 365                                          |            O             | Ingeniero de FastTrack | Skype Empresarial |
| 2456    | SfB - Ejecutar el analizador de conectividad remota                                              |            O             | Ingeniero de FastTrack | Skype Empresarial |
| 2457    | SfB - Ejecutar la calculadora de ancho de banda de Lync 2.50                                            |            O             | Ingeniero de FastTrack | Skype Empresarial |

### Evaluación técnica finalizada

Rol principal: **Administrador de FastTrack**  
Movimientos: **Salud del cliente / RFA / Focalización**  
Se aplica a: **Todos los servicios**

Una vez realizadas todas las Evaluaciones técnicas, marque la (Tarea 1699, Evaluación técnica finalizada) como finalizada.

#### Tareas de FTOP

| Id. de tarea | Nombre de la tarea                                                                                            | (M)andatorio / (O)pcional |  Rol de FastTrack   | Servicios     |
| ------- | ---------------------------------------------------------------------------------------------------- | :----------------------: | :---------------: | ------------ |
| 1699    | Evaluación técnica finalizada: plan de implementación que incluye la entrega al cliente de la Lista de comprobación de correcciones |            M             | Administrador de FastTrack | Todos los servicios |

### Llevar a cabo una evaluación de Cloud Attach

Rol principal: **Administrador de FastTrack**  
Movimientos: **Salud del cliente / RFA / Focalización**  
Se aplica a: **Intune**

Llevar a cabo una evaluación de Cloud Attach  

#### Tareas de FTOP

| Id. de tarea | Nombre de la tarea                                         | (M)andatorio / (O)pcional |  Rol de FastTrack   | Servicios |
| ------- | ------------------------------------------------- | :----------------------: | :---------------: | -------- |
| 4039    | Intune - (asistente) Llevar a cabo una evaluación de Cloud Attach |            M             | Administrador FastTrack | Intune   |

## Entradas clave

  - El cliente entiende lo que proporciona FastTrack Center (FTC).
  - El cliente tiene interés en habilitar uno o más servicios. 
  - El cliente identifica los recursos para trabajar con FastTrack.

## Resultados clave

  - Comprensión total de la infraestructura del cliente:
      -  Migración de los entornos de origen
      -  Limitaciones que pueden desacelerar o bloquear la implementación
  - Creación y revisión de una lista de comprobación de correcciones con el cliente
  - Identificación de contactos del cliente específicos para un servicio

## Siguientes pasos

  - Basándose en las cargas de trabajo identificadas que se incorporarán, proceda a [Llevar a cabo un Taller de servicios](assess-conduct-services-workshops-partner-es.md).
  - Si no se requieren talleres, proceda a [Abordar brechas técnicas](remediate-address-technical-gaps-partner-es.md).

## Resumen de actualización

|Fecha|Quién realizó el cambio|Qué cambió|Notas|
|---------|---------------|----------------------------|-------------|
|10/03/2019| Celia Kennedy| Se actualizó el Cuaderno de estrategias del socio| |

[Inicio](http://partner-docs.microsoft.com)
