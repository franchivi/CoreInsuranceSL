# INFORME TÉCNICO Y EJECUTIVO DE OPTIMIZACIÓN SEO Y GEO
## Cliente: Core Insurance S.L. (Ruiz Re Córdoba)
**Fecha:** Septiembre / Octubre 2026  
**Dominio Oficial:** [https://www.coreinsurancecordoba.com/](https://www.coreinsurancecordoba.com/)  
**Estado del Proyecto:** Implementado, Sincronizado y Desplegado en Producción / GitHub  

---

## 1. RESUMEN EJECUTIVO

Se ha completado una estrategia integral de **Posicionamiento Orgánico en Motores de Búsqueda (SEO)** y de **Optimización para Motores Generativos de Inteligencia Artificial y Geolocalización (GEO / Local SEO)** sobre la plataforma web de Core Insurance S.L.

### Objetivos Clave Alcanzados:
1. **Dominio Local en Córdoba:** Asegurar que Core Insurance sea la referencia en búsquedas de seguros de vida y protección familiar en Córdoba y Andalucía.
2. **Preparación para la Búsqueda por Inteligencia Artificial (GEO):** Adaptar la web para que asistentes como ChatGPT Search, Perplexity, Google Gemini y Copilot citen a Core Insurance con datos exactos de contacto, oficina y promociones.
3. **Máxima Tasa de Conversión (CRO):** Estructura consolidada en una landing page de alta velocidad, eliminando fugas de usuarios y midiendo cada interacción de WhatsApp y llamadas con Google Ads.
4. **Indexabilidad Técnica Perfecta:** Generación de sitemap XML, directivas precisas en robots.txt y datos estructurados Schema.org validados.

---

## 2. OPTIMIZACIÓN SEO ON-PAGE (POSICIONAMIENTO EN GOOGLE)

### 2.1 Metadatos y Snippet de Búsqueda
Se han redactado títulos y descripciones persuasivas con longitud optimizada para evitar truncamiento en móviles y escritorio:
- **Title Tag:**  
  `Core Insurance Córdoba | Seguro de Vida y Protección Familiar`  
  *(Contiene marca, localidad e intención de búsqueda principal).*
- **Meta Description:**  
  `Protege la estabilidad de tu familia con un seguro de vida claro, cercano y sin tecnicismos en Córdoba. Atención presencial, telefónica o WhatsApp. Tarjeta deportiva de regalo.`  
  *(Llamada a la acción clara, propuesta de valor y promoción).*
- **URL Canónica:**  
  `<link rel="canonical" href="https://www.coreinsurancecordoba.com/">`  
  *(Evita penalizaciones por contenido duplicado o accesos con/sin www o http/https).*

### 2.2 Open Graph y Twitter Cards (Redes Sociales y WhatsApp)
Al compartir el enlace en WhatsApp, Telegram, LinkedIn, Instagram o Twitter, la web genera una previsualización enriquecida (tarjeta con imagen corporativa, título claro y descripción):
- `og:title`: Core Insurance Córdoba | Seguro de Vida y Protección Familiar
- `og:description`: Protege a tu familia con un seguro de vida claro y cercano en Córdoba.
- `og:image`: `https://www.coreinsurancecordoba.com/images/hero_family_sport.png`
- `og:url` y `og:site_name`: Core Insurance SL
- `twitter:card`: `summary_large_image`

### 2.3 Jerarquía de Encabezados (H1, H2, H3)
- **H1 Único:** Estructurado alrededor del concepto nuclear: *Protege a tu familia con un seguro de vida claro y cercano*.
- **H2 Temáticos:** Segmentación lógica por necesidades (*Pensado para proteger: Tu vivienda, Tus ingresos, Tu familia, Tu tranquilidad*), Coberturas, Promoción de tarjeta deportiva, Formas de contacto y Preguntas Frecuentes.
- **H3 y Párrafos Semánticos:** Enriquecidos con palabras clave naturales (*autónomos, incapacidad permanente, adelanto por enfermedades graves, Córdoba, Paseo de la Victoria*).

---

## 3. OPTIMIZACIÓN LOCAL Y GEO (SEO LOCAL CÓRDOBA)

Para maximizar la visibilidad en Google Maps, búsquedas con intención local (*"seguros de vida cerca de mí"*, *"correduría de seguros en Córdoba"*):

### 3.1 Consistencia NAP (Name, Address, Phone)
Se ha blindado la coherencia exacta de los datos identificativos en todo el código fuente:
- **Nombre:** Core Insurance S.L. / Core Insurance Córdoba (by Ruiz Re)
- **Dirección Física:** Paseo de la Victoria, 1, 14008 Córdoba, España
- **Teléfono Fijo / Oficina:** +34 857 700 111
- **WhatsApp / Móvil Directo:** +34 696 693 617
- **Email:** cordoba@ruizre.es
- **N.I.F. / CIF:** B56213457
- **Respaldo Legal:** Socio de Correduría de Seguros Ruiz Re (autorización DGSFP clave J0442).

### 3.2 Coordenadas Geográficas de Alta Precisión
Se han inyectado en el código las coordenadas exactas de la oficina física:
- **Latitud:** `37.8863434`
- **Longitud:** `-4.784313`
- **Enlace directo a Google Maps:** Vinculado al perfil oficial verificado en Google Maps y Street View.

---

## 4. GEO: OPTIMIZACIÓN PARA MOTORES DE INTELIGENCIA ARTIFICIAL (AI SEARCH)

Los motores de búsqueda generativa (SearchGPT, Perplexity, Gemini, Copilot) extraen respuestas directas sin depender únicamente de enlaces clásicos. Se implementaron tres tecnologías pioneras:

### 4.1 Schema.org JSON-LD (Datos Estructurados Semánticos)
Se incorporó un grafo JSON-LD completo que conecta 4 entidades clave:
1. **`InsuranceAgency` (Agencia de Seguros):**
   - Razón social, CIF, logotipo corporativo e imagen de la oficina.
   - Horarios de apertura comerciales (Lunes a Viernes 09:00-14:00 y 16:30-19:30).
   - Canales de atención diferenciados (Oficina, WhatsApp y soporte móvil).
   - Enlaces de redes sociales oficiales (`sameAs` hacia Instagram y LinkedIn).
2. **`WebSite`:**
   - Declaración de autoría y publicación oficial en idioma `es-ES`.
3. **`FinancialProduct` (Seguro de Vida):**
   - Definición del producto financiero enfocado a familias activas con ámbito de servicio en Córdoba.
4. **`FAQPage` (Preguntas Frecuentes):**
   - 4 preguntas y respuestas directas sobre coberturas, solicitud de presupuesto, detalles de la promoción deportiva y respaldo legal ante la DGSFP. Esto habilita los **Rich Snippets** en Google (acordeones desplegables en los resultados de búsqueda).

### 4.2 Archivo de Contexto para Modelos de Lenguaje (`llms.txt`)
Se ha creado en la raíz del servidor el estándar emergente `/llms.txt`. Este archivo sirve como resumen estructurado en texto plano y Markdown para que los agentes inteligentes (LLMs) entiendan en milisegundos:
- Quién es Core Insurance SL.
- Coberturas disponibles y a quién van dirigidas.
- Términos exactos de la promoción vigente (Tarjeta regalo deportiva de 30 € o 50 € según la prima).
- Canales inmediatos de contacto.

### 4.3 Directivas Específicas en `robots.txt` para Bots de IA
Se han concedido permisos explícitos de rastreo a los principales rastreadores de IA:
- `GPTBot` y `ChatGPT-User` (OpenAI / ChatGPT)
- `PerplexityBot` (Perplexity AI)
- `Google-Extended` (Google Gemini / Vertex)
- `ClaudeBot` y `anthropic-ai` (Anthropic Claude)
- `Applebot-Extended` (Apple Intelligence)
- `Bytespider` (TikTok / ByteDance AI)

---

## 5. ARQUITECTURA TÉCNICA E INDEXACIÓN

### 5.1 Consolidación de Arquitectura (Eliminación de Thin Content)
- Se consolidó la experiencia en una **landing page de alto rendimiento** (`index.html`), eliminando subpáginas redundantes o vacías que dispersaban el flujo de usuarios y perjudicaban la autoridad del dominio.
- Las páginas de contenido legal (`/legal/aviso-legal.html`, `/legal/politica-privacidad.html`, `/legal/politica-cookies.html`) se mantienen accesibles para cumplimiento RGPD / LOPDGDD, pero con directiva `Disallow` en `robots.txt` para que Google concentre el 100% de su presupuesto de rastreo (*crawl budget*) en la página comercial.

### 5.2 Sitemap XML Dinámico (`sitemap.xml`)
- Archivo ubicado en `/sitemap.xml` referenciando la URL canónica principal con prioridad máxima (`1.0`), frecuencia de actualización semanal (`weekly`) y última fecha de modificación.

---

## 6. INTEGRACIÓN DE CONVERSIÓN Y ANALÍTICA (GOOGLE ADS)

- **Etiqueta Global gtag.js:** Vinculada a la cuenta de Google Ads `AW-18467672751`.
- **Tracking Automático de WhatsApp:**
  - Evento de conversión: `AW-18467672751/sdg7cNeexIMdEK-1ieZE`.
  - Detección activa en todos los botones de llamada a WhatsApp (menú superior, hero, sección de contacto y widget flotante 24/7).
- **Formularios con Redirección a WhatsApp:**
  - El formulario de propuesta personalizada procesa los datos del cliente y abre directamente un chat estructurado en WhatsApp, registrando simultáneamente la conversión en Google Ads (`generate_lead`).

---

## 7. CHECKLIST DE RECOMENDACIONES PARA EL CLIENTE

Para potenciar al máximo los resultados conseguidos en el código web:

1. **Ficha de Google Business Profile (Google Maps):**
   - Asegurar que la categoría principal sea *"Correduría de seguros"* o *"Agencia de seguros"*.
   - Verificar que el enlace web apunte exactamente a `https://www.coreinsurancecordoba.com/`.
   - Utilizar el mismo número de oficina (`857 700 111`) y móvil (`696 693 617`).
2. **Generación de Reseñas Locales:**
   - Solicitar a clientes satisfechos en Córdoba reseñas mencionando palabras clave naturales (ejemplo: *"Excelente atención con mi seguro de vida en su oficina de Córdoba"*).
3. **Google Search Console:**
   - Dar de alta la propiedad y enviar el archivo `https://www.coreinsurancecordoba.com/sitemap.xml` para acelerar el indexado prioritario.

---
*Documentación elaborada para Core Insurance S.L. - Todos los derechos reservados.*
