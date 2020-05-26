--- 
# required metadata 
title: FastTrack Partner Playbook - Entitlement Status Notes Guidance
description: FastTrack Partner Playbook - Entitlement Status Notes Overview
ms.author: v-cekenn
manager: pagrim
ms.date: 10/03/2019 
ms.topic: partner-playbook 
ms.prod: non-product-specific 
ms.custom: partner-playbook 
ft.audience: partner
ft.owner: pagrim
--- 

# Guía para las Notas de estado de derechos

Las notas de estado de derechos deben ser utilizadas por el administrador de FastTrack (FM) y ciertos equipos de expertos en la materia (SME) para proporcionar una visión actual de los derechos en cada carga de trabajo. Las Notas de estado de derechos son declaraciones **concisas** que describen la intención o falta de intención de un cliente para consumir el servicio. Al resumir el estado de derecho actual, asegúrese de incluir el método **“por qué”** o **“razón”**. Este es uno de los componentes clave en su declaración. Solo se necesitan una o dos oraciones para indicar debidamente el estado. Las actualizaciones se deben proporcionar según se requieran de forma que los derechos de la carga de trabajo tengan una descripción actualizada y clara que refleje con exactitud la intención de la carga de trabajo.

Aquí hay algunas preguntas que puede considerar al escribir su nota:

  - ¿El cliente avanza con éxito en la incorporación? ¿Su nota transmite eso claramente?
  - ¿Su cliente está bloqueado? Si es así, ¿cuál es el bloqueador **primario** que le impide avanzar?
  - ¿El cliente tiene intención? Si la respuesta es no, ¿ha declarado por qué carece de intención para el servicio?
  - Si necesita ayuda para describir de manera concisa los aspectos técnicos de la nota, debe trabajar con sus ingenieros de FastTrack (FE) para asegurarse de que se incluyan los detalles técnicos requeridos.

Al redactar su nota, **utilice un lenguaje claro**. Palabras como “*no es posible*”, “*problema*”, “*bloqueado*”, “*no tener intención*”, “*problemas*”, “*sin valor*” o “*falta de características*” ayudan a aclarar la intención del servicio. Por el contrario, se deben evitar palabras y frases como “*por ahora*”, “*actualmente*” o “*aún*”, ya que no aclaran la intención del servicio.. 

**En resumen, una nota debe indicar la intención o la falta de esta e incluir el “**por qué**” tras ello.**

## Guías de plantillas de notas

**En progreso:**

  - El cliente está avanzando con la implementación. Está en la fase de adopción.
  - Incorporación al servicio. Cliente en \[**fase de desarrollo**\]. \[**detalles adicionales**\].
  - La empresa se incorporará al servicio una vez que la \[**carga de trabajo de enfoque actual**\] se haya finalizado. \[**detalles adicionales**\].
  - Incorporación en curso, con enfoque en los \[**detalles**\].

**Bloqueado:**

En una declaración concisa, proporcione detalles sobre por qué se bloquean los derechos, ya sea por una brecha de características técnicas, un problema de licencia o la falta de recursos. Es fundamental transmitir el bloqueador para que la ingeniería de características y otros equipos de Microsoft puedan identificar una oportunidad de tomar medidas para corregir el problema.

  - El cliente no implementará la carga de trabajo debido a un \[**problema principal**\] relacionado con \[**detalles técnicos**\], \[**limitaciones específicas**\] y \[**detalles importantes adicionales**\].
  - No es posible la implementación debido a un \[**problema principal**\] y \[**detalles técnicos**\] debido a \[**limitaciones específicas**\].
  - Cliente bloqueado debido a un \[**problema principal**\] hasta que se implemente una \[**solución potencial**\].

**Sin intención:**

Proporcione una descripción clara y concisa de por qué el cliente no tiene intención de implementar esos derechos. 

  - El cliente no tiene intención de usar el servicio debido a \[**problema principal**\] y \[**específicos**\].
  - El cliente no tiene interés en implementar la carga de trabajo debido a \[**problema principal**\] y \[**detalles circundantes**\].
  - No es necesaria esta carga de trabajo, ya que el \[**problema principal**\] es un factor limitante de \[**específicos**\].

**Estado desconocido:**

  - No se puede reunir la intención del cliente en esta carga de trabajo.
  - El cliente no responde a múltiples intentos de contacto. Cuenta administrada.

**Duplicado/no válido:**

Proporcione una descripción de por qué los derechos se mencionan como duplicados o no válidos (recuento de licencias dobles, etc.). 

## Ejemplos de notas

**Situación 1:**

Una empresa compró recientemente licencias de Office 365 (O365). El equipo de cuentas cree que FastTrack Center (FTC) podría ayudar a que el cliente incorpore y se comunique con FTC. Al tratar de conectarse con el cliente y reunir la fecha de vencimiento, intención, motivo de negocios y propietario de éxito (DIBS), se enteraron de que la empresa está actualmente en proceso de adquirir otra empresa; y el enfoque está en combinar las empresas, no en la incorporación a O365. La administración ha emitido una suspensión de todos los proyectos de TI hasta que se logren los detalles de la adquisición; y así la incorporación tendrá que esperar.

  - **Nota excelente:** El cliente no tiene la intención de incorporar la carga de trabajo debido a una adquisición en curso de otra empresa que debe manejarse antes de que pueda realizarse cualquier actividad de incorporación.
  - **Nota marginal**: Hasta que se complete la fusión, el cliente no realizará la implementación.
  - **Nota deficiente**: El cliente no tiene intención.

**Situación 2:**

Después de comprometerse con FTC, el cliente comienza a probar Exchange Online (EXO). Durante la prueba piloto, los usuarios observan constantemente los buzones de correo que no pueden enviar/recibir mensajes y experimentan problemas generales de rendimiento. El equipo de TI identifica que la causa es un firewall incompatible que maneja el tráfico correctamente por diseño. Lamentablemente, no se puede reemplazar en este momento debido a parámetros de seguridad específicos. Hasta que se encuentre una solución, debe migrarse de nuevo a Exchange local y la implementación se detendrá.

  - **Nota excelente:** Debido a que un firewall no reenvía el tráfico correctamente, el cliente no implementará el servicio porque no puede conectarse a los buzones.
  - **Nota mínima:** El cliente no se implementará debido a una infraestructura específica in situ.
  - **Nota deficiente:** El cliente no puede realizar la implementación en este momento.

**Situación 3:**

El cliente actualmente está comprometido con FTC y está trabajando en los pasos de corrección. Se han identificado algunos problemas en torno a los grupos de usuarios, pero no hay bloqueadores duros. El equipo in situ está avanzando.

  - **Nota excelente:** El cliente continúa el proceso de implementación y actualmente trabaja en los pasos de corrección.
  - **Nota mínima:** En progreso.
  - **Nota deficiente:** (vacía)

**Situación 4:**

Se está procesando un nuevo inquilino a través de Gateway. El FM se pone en contacto con la Unidad de equipo de cuentas (ATU), que actualmente no tiene interacciones ni tiene conocimiento sobre las intenciones de implementación de los clientes. Sin embargo, proporcionan contactos dentro de la organización. Se realizan múltiples intentos fallidos para contactar al cliente. No se proporciona información adicional.

  - **Nota excelente:** El cliente no responde a 3 intentos de contacto. Cliente administrado.
  - **Nota mínima:** El cliente no responde a intentos de contacto.
  - **Nota deficiente:** El cliente no responde.

**Situación 5:**

Mientras explora las opciones de implementación, el cliente comienza a encontrar problemas relacionados con la residencia de los datos. Tras una investigación adicional, la carga de trabajo específica en cuestión no se puede implementar para el cliente debido a las disposiciones legales que prohíben el almacenamiento de datos regulados fuera del país.

  - **Nota excelente:** El servicio no se implementará debido a restricciones legales en la residencia de los datos. El cliente tiene prohibido almacenar datos regulados fuera del país debido a la disposición X.
  - **Nota mínima:** El servicio no se implementará debido a la disposición X, que prohíbe que los datos se almacenen fuera del país en reposo o en tránsito. ATU está involucrado para encontrar una solución, aunque sea poco probable. Se está explorando el plan detallado para una posible resolución de características para los requisitos de datos. El FM continúa reuniéndose periódicamente con el cliente para realizar llamadas de sincronización. Si no se encuentra una solución, es probable que se aproveche una solución competitiva. Se pueden usar los servicios de consultoría de Microsoft (MCS), pero dependen de la financiación.
  **(esta es demasiada información innecesaria; no es útil)\**
  - **Nota deficiente:** No se puede implementar debido a problemas de nube/datos/legales.

## Errores comunes

**No hay información suficiente**
La grabación de información sobre el uso o el estado de L1 no es suficiente información para una nota de estado de derechos.
**Ejemplo:** El cliente no tiene intención para esta carga de trabajo o uso 0,0 %.

**El tipo de información incorrecto**
Las notas de estado de derechos no son el área apropiada para registrar información sobre la interacción. Esa información debe compartirse en las notas generales.
**Ejemplo:** Programación de una reunión de inicio para reunir la intención de la carga de trabajo.

**¿Podemos copiar y pegar la misma nota para cada carga de trabajo?**  
En general, no se aconseja copiar y pegar la misma nota para cada carga de trabajo, ya que la misma nota con frecuencia no es aplicable a múltiples cargas de trabajo, por ejemplo, la migración no es aplicable a Office ProPlus (OPP). Sin embargo, hay situaciones en las que la misma nota se aplicaría a todas las cargas de trabajo, como un cliente que no responde.  
  
**Cuando un cliente rechaza el beneficio de FTC, ¿se trata de una situación de "no intención"?**  
No, la intención de aprovechar FTC no es lo mismo que la intención de utilizar el servicio.

**¿Qué sucede si no estoy seguro de en qué estado colocar al cliente?**
Puede visitar la página [Estado y titularidad](l1l2l3-homepage-list-es.md) para obtener una mejor aclaración o comprensión sobre el estado y la razón que se debe utilizar para el cliente.

## Preguntas frecuentes (FAQ)

**¿Por qué es importante grabar una nota excelente?**
Los grupos de productos y negocios de O365 usan estos datos para tomar decisiones empresariales, tales como:: mejorar las características existentes, desarrollar un plan detallado de productos nuevos, identificar brechas o errores y/o transformar los procesos empresariales. Las notas de calidad también ayudan a brindar visibilidad en los próximos pasos que deben tomarse para hacer avanzar al cliente, ya sea alineando recursos o brindando las mejores prácticas del cliente.

**¿Qué información debe capturarse en una nota?**
Cuando se desglosa una nota excelente, se puede derivar L1-L3, junto con los detalles específicos que proporcionan información adicional para ayudar a Microsoft a comprender mejor el razonamiento trás la intención del cliente. Puede ser útil hacerse las siguientes preguntas sobre su nota:

  - ¿Su nota se articula claramente si hay un bloqueador? ¿Proporciona los detalles de un bloqueador?
  - ¿Su nota transmite claramente la intención del cliente o la falta de ella? ¿Distinguió entre la intención del cliente de consumir el servicio y la intención del cliente de aprovechar FTC para obtener asistencia?
  - ¿Ha capturado toda la información pertinente en apenas 2 oraciones?
  - Para los inquilinos que no respondieron, ¿documentó cuántos intentos se hicieron y con quién intentó contactarse? ¿Es esta una cuenta administrada o no administrada?

### Resumen de actualización

|Fecha|Quién realizó el cambio|Qué cambió|
|---------|---------------|----------------------------|
|03/27/2020| Celia Kennedy| Mantenimiento general|
|10/01/2019| Celia Kennedy| Cuaderno de estrategias del socio actualizado|

[Inicio](http://partner-docs.microsoft.com)
