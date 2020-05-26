---  
# required metadata   
title: FastTrack Partner Playbook - Conduct Security Workshops  
description: FastTrack Partner Playbook - Conduct Security Workshops  
author: Ryan Meehan
ms.author: v-cekenn
manager: pagrim
ms.date: 10/01/2019  
ms.topic: partner-playbook  
ms.prod: non-product-specific  
ms.custom: partner-playbook  
ft.audience: partner  
ft.owner: pargim
---  
# Llevar a cabo talleres de seguridad

Fase: **Evaluación**  

## Descripción general
El proceso de llevar a cabo Talleres de seguridad continúa la relación entre FastTrack Center (FTC) y el cliente con la seguridad en el centro de la participación. Aquí es donde FTC continúa trabajando con el cliente para garantizar que este defina y logre su postura deseada.  

## Objetivos

  - Evaluar la postura de seguridad actual del cliente para seguridad de la identidad, seguridad de la información y del dispositivo.
  - Los clientes entienden lo que está disponible para proteger los activos digitales de su organización y cómo realizar investigaciones diarias de preocupaciones de seguridad.  
  - El cliente permite que las características de seguridad correspondientes protejan sus activos digitales.  

## Enfoque

### Identity Security

Rol principal: **SME**  
Aplicar a: **AADP**

La protección de las identidades es de importancia crítica y debe abordarse como parte del establecimiento de un punto de referencia de seguridad. Debemos asegurar que los clientes comprendan claramente los tipos de seguridad de la identidad disponibles a través de AADP para evitar que las credenciales del usuario se vean comprometidas, y que esos usuarios se administren de acuerdo con las necesidades del cliente y las prácticas recomendadas de seguridad.  

  - Revise las opciones modernas de autenticación para el cliente y los escenarios
  - Asegúrese de que el cliente entienda los controles disponibles a través de características de AADP como el acceso condicional (CA), la autenticación multifactor (MFA) y el inicio de sesión único (SSO).  
  - Comparta descripciones generales de las características de AADP, kits de adopción, demostraciones
  
### Presentaciones de características de Azure AD Premium

Encuentre vínculos a todas las características de Azure AD Premium que actualmente se admiten en FastTrack y que pueden utilizarse para centrarse en el valor de características específicas en el conjunto de Azure AD Premium haciendo clic [aquí](https://aka.ms/FRPFTOPTask2533WorkshopLocalized).

Si su cliente tiene interés en una característica específica, debe presentar y/o compartir estas presentaciones de características para obtener descripciones generales rápidas y de alto nivel, y proporcionar acceso a los recursos para obtener más información.

#### Tareas de FTOP

| Id. de tarea | Nombre de la tarea                      | (M)andatorio / (O)pcional | Rol de FastTrack | Servicios |
| ------- | ------------------------------ | :----------------------: | :------------: | -------- |
| 2533    | Azure AD Premium - Taller técnico |            M             |      SME       | AADP     |

### Seguridad del dispositivo

Rol principal: **SME**  
Iniciativas: **Salud del cliente / RFA / Focalización**  
Aplicar a: **Intune / MDATP / Windows 10**

Ayude a los clientes a proteger sus datos a la vez que mantiene la productividad de los empleados en los dispositivos y las aplicaciones de su elección. Administrador de dispositivos móviles (MDM) puede proporcionar protección de datos y funcionalidades de cumplimiento integradas que le permiten establecer con precisión a cuáles datos pueden tener acceso los diferentes usuarios y qué pueden hacer con los datos en Office y otras aplicaciones móviles.  

  - ​Entienda las diferentes plataformas que el cliente espera administrar y proteger
  - Defina directivas completas que protegen las aplicaciones, los datos y dispositivos​

[Microsoft Defender Advanced Threat Protection (MDATP)](https://docs.microsoft.com/en-us/windows/security/threat-protection/microsoft-defender-atp/microsoft-defender-advanced-threat-protection) es una plataforma de seguridad de punto de conexión unificado que tiene como fin la protección preventiva, la detección posterior a una filtración y una investigación y respuesta automáticas.

Características en el ámbito: **Threat Vulnerability Management (TVM)** usa un enfoque basado en el riesgo para el descubrimiento, la priorización y la corrección de las vulnerabilidades y configuraciones indebidas del punto de conexión. **Reduction (ASR)** elimina las áreas de superficie innecesarias o riesgosas y restringe la ejecución de código peligroso. La **Protección de última generación** aprovecha a el análisis profundo y aprendizaje de máquina análisis profundo para proteger contra malware basado en archivos y sin archivos. **Endpoint Detection and Response (EDR)** supervisa los comportamientos y las técnicas del atacante para detectar y responder a ataques avanzados. La **Investigación y corrección automática** aprovecha la inteligencia artificial para investigar automáticamente alertas y corregir amenazas complejas en cuestión de minutos. La **Postura de seguridad** ofrece visibilidad en tiempo real y ayuda a identificar formas de mejorar la puntuación de seguridad del cliente.  

#### Tareas de FTOP

| Id. de tarea | Nombre de la tarea                                               | (M)andatorio / (O)pcional |  Rol de FastTrack   | Servicios   |
| ------- | ------------------------------------------------------- | :----------------------: | :---------------: | ---------- |
| 2460    | Intune - Llevar a cabo un Taller de Microsoft              |            M             | Administrador de FastTrack | Intune     |
| 4084    | Intune - Llevar a cabo una evaluación de administración moderna de Microsoft |            M             |        SME        | Intune     |
| 4079    | [Presentación de valor empresarial MDATP](https://aka.ms/mdatp-oatp-bvd)                               |            M             | Administrador de FastTrack | MDATP      |
| 4078    | MDATP – Posicionar MDATP por sobre AV de terceros                |            M             |        SME        | Windows 10 |
| 4085    | Realizar MDATP BVD                                       |            O             |        SME        | Intune     |

### Seguridad de la información

Rol principal: **Ingeniero de FastTrack**  
Aplicar a: **Exchange / OneDrive para la Empresa / Outlook Mobile /
SharePoint**

La protección de la información o los datos del cliente es un requisito importante para establecer un punto de referencia de seguridad. ​Antes de que el cliente migre sus activos digitales confidenciales más valiosos a la nube, debemos asegurarnos de que este comprende claramente la clasificación de la información y la protección necesaria para garantizar la seguridad de sus datos confidenciales.​

  - Identifique la información que el cliente desea proteger
  - Determine y establezca las directivas de acceso, retención y protección de la información  

#### Tareas de FTOP

| Id. de tarea | Nombre de la tarea                                      | (M)andatorio / (O)pcional |   Rol de FastTrack   | Servicios                                      |
| ------- | ---------------------------------------------- | :----------------------: | :----------------: | --------------------------------------------- |
| 3747    | Taller de Exchange Online Protection            |            M             | Ingeniero de FastTrack | Exchange                                      |
| 3748    | Taller de prevención de pérdida de datos                  |            O             | Ingeniero de FastTrack | Exchange / OneDrive para la Emresa / SharePoint |
| 3749    | Office 365 Taller de cifrado de mensajes         |            O             | Ingeniero de FastTrack | Exchange                                      |
| 3750    | [Taller de protección contra amenazas avanzadas de Office 365](https://aka.ms/mdatp-oatp-bvd) |            O             | Ingeniero de FastTrack | Exchange                                      |
| 3997    | [Taller MIP](https://aka.ms/PartnerMIPWorkshopDeck)                                   |            M             | Administrador de FastTrack  | AIP                                           |

## Entradas clave

  - Conversación de seguridad de M365 finalizada
  - Implementación segura de tareas finalizada​​  

## Resultados clave

  - El cliente habilita Exchange Online Protection y Azure Information Protection, la configuración de Azure Active Directory y Azure Information Protection, según corresponda a su licencia.
  - El cliente habilita características adicionales de acuerdo con su directiva organizativa, con relación a la seguridad y el cumplimiento.
  - Documente las áreas en las que el cliente no tiene planificado realizar una habilitación, además de los motivos.​

## Siguientes pasos

  - Basándose en las cargas de trabajo identificadas que se incorporarán, proceda a [Llevar a cabo Talleres de servicios](assess-conduct-services-workshops-partner-es.md)  
  - Si no se requieren talleres, proceda a [Abordar las brechas técnicas​](remediate-address-technical-gaps-partner-es.md)  

## Resumen de actualización

| Fecha      | Quién realizó el cambio   | Qué cambió                    |
| --------- | ------------- | ------------------------------- |
| 01/03/2020 | Celia Kennedy | Se actualizó Seguridad del dispositivo se agregó BVD para la Tarea 4079 y 3750 |
| 10/18/2019 | Celia Kennedy | Cuaderno de estrategias del socio actualizado |
| 7/26/2019 | Rosie Arrieta | Se agregaron pasos de dispositivo e identidad |
| 5/31/2019 | Rosie Arrieta | Se publicó el proceso               |

[Inicio](http://partner-docs.microsoft.com)
