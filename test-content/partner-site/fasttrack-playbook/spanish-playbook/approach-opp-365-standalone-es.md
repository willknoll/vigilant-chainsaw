---  
# required metadata  
title: FastTrack Partner Playbook - Office 365 ProPlus Standalone Deployment
description: FastTrack Partner Playbook - Office 365 ProPlus Standalone Deployment 
ms.author: v-cekenn
manager: pagrim
ms.date: 10/01/2019  
ms.topic: partner-playbook  
ms.prod: non-product-specific  
ms.custom: partner-playbook  
ft.audience: partner
ft.owner: pagrim
---   

#  Implementación independiente de Office 365 ProPlus

## Descripción general

El principal impulsor de Office 365 ProPlus MAU en FY20 será el movimiento Get Modern, el cual incluye tanto Windows 7/8.1 hasta la actualización de Windows 10 y la implementación de Office 365 ProPlus con el System Center.

Este guía está diseñada para los ingenieros de FastTrack, con el soporte técnico de los administradores de FastTrack y OPP SME para acompañar a los clientes a través de la implementación de Office 365 ProPlus sin la actualización de Windows.

**En algunos casos, los pasos se pueden omitir si el tema relevante ha sido completamente abordado o corregido.**

##  Objectivos

La siguiente es una lista de los objetivos en este cuaderno de estrategias:

  - **Uso de los pasos que alinean el punto en que se encuentra el cliente en la implementación de Office 365 ProPlus**. En algunos casos, los pasos se pueden omitir si el tema relevante ha sido completamente abordado o corregido.
    Se recomienda realizar un programa piloto para evitar dar soporte a casos de implementaciones no probadas.

  - **Asegurar que la implementación del cliente sea del 70% o más y que usen las últimas aplicaciones de cliente de Office conectadas** en sus organizaciones es fundamental a medida que continuamos brindando soporte técnico a nuestros clientes mientras se preparan para el fin del soporte técnico de Office 2010 y en su viaje de transformación digital.

  - Office 365 ProPlus es de importancia estratégica para Microsoft entre la competencia a medida que mudamos a nuestros clientes a la nube con Microsoft 365.

## Flujo de trabajo de Office 365 ProPlus  

[![office-proplus-complete-processv3](media/office-proplus-complete-processv3.PNG)]

##  Procesos del cuaderno de estrategias

- [Llevar a cabo talleres de servicios](assess-conduct-services-workshops-partner-es.md)
- [Lleve a cabo la Conversación de administración de cambio y adopción con el cliente](assess-conduct-adoption-and-change-management-conversation-partner-es.md)
- [Llevar a cabo una evaluación técnica](assess-conduct-technical-assessment-partner-es.md)
- [Habilitar servicios](enable-enable-services-partner-es.md)

## Implementación

Rol principal: **Ingeniero de FastTrack**  
Aplicar a: **Office 365 ProPlus (sin actualización de Windows 10)**

En cualquier momento que su interacción se demore, bloquee o requiera ayuda adicional para ejecutar este cuaderno de estrategias, solicite un SME de OPP con la [Herramienta de solicitud de recursos de FastTrack](https://aka.ms/FRPHubSMERequestProcess).
Este equipo de expertos en la materia de OPP dedicados están disponibles para apoyar el movimiento a escala pero en ningún momento reemplazan el rol del administrador, ingeniero o arquitecto de FastTrack.

### 1. Planificación y evaluación técnica de Office 365 ProPlus

El taller de evaluación guía al cliente para descubrir y planificar la implementación de Office 365 ProPlus Durante el taller se dará la información acerca de los puntos de decisión importantes de la implementación de Office 365 ProPlus. El taller facilita la discusión para identificar los puntos de decisión para los clientes. Use la [presentación del taller de evaluación](https://fasttrack-docs.microsoft.com/collateral/M365-O365-O365ProPlus.html#assessment-workshop) La impartición del taller debe incluir al responsable del equipo de TI de Office 365 ProPlus. Se puede dirigir a los clientes a la [Guía de implementación de Office](https://docs.microsoft.com/DeployOffice/deployment-guide-for-office-365-proplus) y usar una estructura coherente para los recursos de apoyo adicionales.

### 2. Conversación de administración de cambio y adopción

> El administrador de FastTrack debe usar la Guía de ACM como sea necesario para > asegurarse de que el cliente cuente con los materiales relevantes para poder informar a los usuarios finales que se está implementando Office 365 ProPlus. Use el OPP BVD o el supervisor de objeciones para abordar cualquier idea errónea de los beneficios de Office 365 ProPlus comparado con las versiones anteriores. La discusión se puede usar más adelante en la implementación, si es necesario, para mobilizar al cliente en caso de que se encuentre bloqueado.

### 3. Evaluación de conjunto de herramientas de preparación para Office
 
### 4. ORT a través de SCCM o independiente debe ser ejecutado por el cliente para evaluar cualquier macro de terceros o personalizado o complementos que no sean compatibles con Office 365 Pro Plus 64-bit. El ingeniero de FastTrack debe analizar estos resultados para identificar los procesos empresariales críticos que pudieran ser afectados. Consulte a un SME si es necesario para asegurar que la herramienta ORT finalice su función, o para ayudar a identificar opciones de corrección adicionales.

### 5. Crear una lista de comprobación de remediación

Usar un cuestionario de remediación y una lista de comprobación para proporcionar al cliente los lineamientos para la implementación de uno o todos los servicios admitidos por FTC. La versión Nube de la Comunidad Gubernamental (GCC, por sus siglas en inglés) Alto/Departamento de Defensa (DOD, por sus siglas en inglés) se debe usar para los clientes de GCC Alto/DOD. Para asegurarse de que tiene el último contenido, descargue una copia nueva cada vez. Para generar una lista de comprobación final, comience por llenar el cuestionario del servicio(s) correspondiente (pestaña del cuestionario), la guía para servicios que no están en el ámbito estarán ocultos en la lista de comprobación final. Para poder dar seguimiento al uso, envíe por correo electrónico una copia completada del XLS a: [d4cf4a2d.microsoft.com@amer.teams.ms](mailto:d4cf4a2d.microsoft.com@amer.teams.ms)

### 6.  Confirmar los análisis del cliente y resolver cualquier cosa en la lista de comprobación de remediación

Para más información consulte [Corrección](phase-remediate-es.md)

### 7. Implementar Office 365 ProPlus

En la etapa de implementación use los resultados de la evaluación para guiar al cliente a crear los paquetes identificados y preparar estos paquetes para su entrega.

Guiar al cliente para construir el archivo de configuración del paquete usando la Herramienta de configuración de Office ([https://config.office.com](https://config.office.com/)) o a través de la opción del cliente de Office 365 si el cliente estará implementando el paquete con el administrador de configuración. Los ajustes para la configuración estarán disponibles de las decisiones realizadas en las actividades de evaluación, incluyendo actualizar canal, idioma, etc.

Después de construidos los paquetes, FastTrack ahora provee guía mientras el cliente comienza a implementar los paquetes para los grupos objetivo de usuarios. El cliente es responsable de entregar los paquetes en sus herramientas de implementación seleccionadas. FastTrack puede proporcionar guía para ayudar en esta actividad.

La implementación de FastTrack continuará dando seguimiento a la implementación y usará el progreso junto con el cliente en sesiones de seguimiento para asegurar que el cliente continúe la implementación.

No se recomienda usar el asistente de implementación para facilitar esta actividad.

## Acelerar

Rol principal: **Ingeniero de FastTrack**  
Roles secundarios: **Administrador de FastTrack, SME, GM FTA, OPP Ranger**  
Aplicar a: **Office 365 ProPlus (sin actualización de Windows 10)**
 
**Aceleración** Clientes que actualmente están implementando o se ha parado la implementación y es necesaria la asistencia de FastTrack para que vuelvan a entrar en movimiento. Probablemente tuvieron un plan de implementación, pero algo salió mal o sus prioridades cambiaron.
 
La implementación de FastTrack continuará dando seguimiento a la implementación y usará el progreso junto con el cliente en sesiones de seguimiento para asegurar que el cliente continúe la implementación. El cliente no se considera "saludable" o totalmente implementado hasta que alcancen un MAU del 70%.

\*Cualquier cliente que tenga un crecimiento inferior al 3% durante 3 meses (y debajo del 70%) podría activar un seguimiento de los SME de OPP para asegurar que se acelere el crecimiento. En este punto, el FM, FE y SME deberán discutir el estado del cliente para entender cómo volver a encaminarlos.

1. Determine el motivo del MAU estancado y seguir el plan de acción correspondiente

  - Impedimento técnico
    
    1.  Involucrar a un OPP SME para que ayude si no está ya involucrado
    
    2.  Valore el impedimiento del cliente en comparación con las soluciones conocidas y la comunidad de SME de Get Modern.
    
    3.  Colabore con cliente para solucionar el impedimento
        
        -  Cree una retroialimentación de FTC según sea necesario
        
        -  Ponga en marcha App Assure para problemas de complementos o desempeño.
    
    4.  Si el impedimento no puede resolverse, documentar el impedimiento en las notas de Administración de Involcuramiento y actualice L1 a bloqueado.

  - Impedimento de adopción/administración de cambio
    
    1. Taller de Mini-ACM para ayudar a identificar el impedimento específico y resolverlo

  - Impedimento de recursos del cliente
    
    1. Si se requiere una ACM con mayor profundidad, dirigirse a prospectos rápidos de ACM (Consulte la guía relevante de tareas)

- Recuperar prioridad disminuida del cliente
- 
    1. Involucre al GM FTA de estar disponible

    2. Ponga en marcha ATS/ATU

2.  Actualice Office 365 ProPlus: tarea de acelerador OPP si se realizan esfuerzos de aceleración para lograr que un cliente se mueva de un estado previamente estancado. Esta tarea se usará para dar seguimiento a los esfuerzos actuales para mantener las implementaciones de Office 365 ProPlus al 70%+ MAU.

####  Tareas de FTOP

| Id. de tarea                                        | Descripción de la tarea                                                                 | (M) Mandatorio (O) Opcional | Rol de FastTrack |
| ---------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------- | -------------- |
| 3080   | Taller de evaluación de Office 365 ProPlus  | M    | Al terminar la discusión el FE             |
| 3738   | Office 365 ProPlus - Presentación de demostración de realización | M    | FM             |
| 3070   | Crear una lista de comprobación de remediación            | M    | Al terminar la discusión el FE             |
| 3190   | Confirmar el análisis del cliente y lo que se haya resuelto de la lista de comprobación de remediación.    | M  | Al terminar la discusión el FE  |
| 1247   | Implementar Office 365 ProPlus               | M    | Al terminar la discusión el FE             |
| 3650   | Office ProPlus – OPP Aceleración      | O    | FM             |

##  Entradas clave

  - El cliente tiene intención de implementar Office 365 ProPlus

##  Resultados clave

  - Implementación de Office 365 ProPlus finalizada

## Próximos pasos

  - Continúe brindando soporte técnico al cliente hasta que esté completamente implementado con AU \> 70%.

##  Datos recopilados

| Campo de datos / Nombre común           | Requerido para este proceso | Se ingreso por primera vez al FTOP |
| -------------------------------- | ------------------------- | ----------------------- |
| L1 – Estado del consumo          | Sí                       | Sí                     |
| L2 – Derechos                | Sí                       | Sí                     |
| Escenario de interacción              | Sí                       | Sí                     |
| Notas de administración de la interacción (FM) | Sí                       | Sí                     |
| Notas de habilitación técnica (FE)  | Sí                       | Sí                     |
| Notas de Enterprise (FTA)           | No                        | Sí                     |

> [!Note]
> *Consultar [Descripción del servicio de FastTrack](https://docs.microsoft.com/en-us/fasttrack/m365-eligible-services-and-plans) para los detalles de elegibilidad de licencia específicos.

##  Resumen de actualización

|Fecha|Quién realizó el cambio|Qué cambió|
|---------|---------------|----------------------------|
|03/25/2020| Celia Kennedy| Mantenimiento general|
|10/01/2019| Celia Kennedy| Mantenimiento general|

[Inicio](http://partner-docs.microsoft.com)
