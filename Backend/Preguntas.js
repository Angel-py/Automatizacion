function obtenerPreguntas() {
  return [
    { 
      id: 1, 
      numero: 1, 
      texto: "Diagnóstico y Reflexión Estratégica", 
      tipo: "textarea",
      ayuda: `Análisis Interno – Fortalezas ¿Qué ha salido bien? ¿Qué conocemos? ¿Qué hemos podido hacer?
      Debilidades ¿Qué ha salido mal? ¿Qué brechas tenemos respecto a objetivos? ¿Qué desconocemos?`
    },
    { 
      id: 2, 
      numero: 2, 
      texto: "Test de Diagnóstico Digital", 
      tipo: "textarea", 
      ayuda: "MADUREZ PROPIA - MADUREZ COMPETENCIA"
    },
    { 
      id: 3, 
      numero: 3, 
      texto: "Análisis FODA: Oportunidades y Amenazas", 
      tipo: "dynamic-keyvalue",
      keyConfig: {
        type: "select",
        placeholder: "Selecciona el tipo",
        options: ["Oportunidad", "Amenaza"],
        required: true
      },
       valueConfig: {
        type: "textarea",
        placeholder: "Describe detalladamente el factor",
        required: true
      },
      limits: {
        min: 1,    
        max: 8    // Máximo 10 pares
      },
      ayuda: "FODA OPORTUNIDADES - FODA AMENAZAS"
    },
    { 
      id: 4, 
      numero: 4, 
      texto: "Diagnóstico y Reflexión Estratégica", 
      tipo: "dynamic-table",
      columns: [
          { 
            name: "EMPRESA INNOVADORA", 
            type: "textarea",
            placeholder: "Describe las capacidades innovadoras de la empresa...",
            required: true,
            help: "Ej: Cultura de innovación, I+D, patentes, etc."
          },
          { 
            name: "MODELO DE NEGOCIO", 
            type: "textarea",
            placeholder: "Describe el modelo de negocio actual y propuesto...",
            required: true,
            help: "Ej: Propuesta de valor, segmentos de clientes, canales, etc."
          },
          { 
            name: "ESTRATEGIA DIGITAL", 
            type: "select",
            placeholder: "Selecciona el nivel de madurez digital",
            options: ["Inicial", "En desarrollo", "Avanzado", "Transformación total"],
            required: true
          },
          { 
            name: "PRODUCTO O SERVICIO", 
            type: "textarea",
            placeholder: "Describe el producto/servicio principal...",
            required: true,
            help: "Ej: Características, diferenciación, valor agregado, etc."
          }
        ],
        limits: {
          min: 1,      
          max: 10      
        },
      ayuda: "EMPRESA INNOVADORA - MODELO DE NEGOCIO - ESTRATEGIA DIGITAL- PRODUCTO O SERVICIO"
    },
    { 
      id: 5, 
      numero: 5, 
      texto: "Test de Diagnóstico Digital", 
      tipo: "textarea",
      ayuda: "PRINCIPALES AREAS DE ACTUACIÓN"
    },
    {
      id: 6,
      numero: 6,
      texto: "Perfil de Cliente - BUYER PERSONA",
      tipo: "text",
      ayuda: "Identidad y Entorno Profesional (quién es y qué hace) hasta sus Hábitos y Motivaciones personales (cómo vive y qué le apasiona). Su objetivo principal es identificar los objetivos, retos y frustraciones del usuario para determinar cómo nuestro producto o servicio puede resolver sus problemas específicos, ofreciendo ventajas competitivas y estableciendo los canales más efectivos para conectar con él."
    },
    {
      id: 7,
      numero: 7,
      texto: "Mapa de Empatía",
      tipo: "textarea",
      ayuda: "¿Con quién empatizamos? - ¿Qué necesita hacer? - ¿Qué ve? - ¿Qué dice? - ¿Qué hace? - ¿Qué escucha? - ¿Qué piensa y siente?"
    },
    {
      id: 8,
      numero: 8,
      texto: "Mapa de Experiencia del Cliente",
      tipo: "textarea",
      ayuda: "Tareas - Dudas - Puntos de Contacto - Emociones - Influencias - Debilidades"
    },
    {
      id: 9,
      numero: 9,
      texto: "Lienzo del Modelo de Negocio",
      tipo: "textarea",
      ayuda: "Segmento de Clientes - Relación con Clientes - Actividades Clave - Recursos Clave - Socios Clave - Estructura de Costos - Fuentes de Ingresos"
    },
    {
      id: 10,
      numero: 10,
      texto: "Lienzo Transformación Digital",
      tipo: "textarea",
      ayuda: "Cliente como Centro - Tecnologías - Nube y Datos - Negocio Digital - Ingeniería de Procesos - Cultura Digital/Liderazgo - Marketing Digital"
    },
    {
      id: 11,
      numero: 11,
      texto: "Herramientas y Tecnologías a Mejorar o Implantar",
      tipo: "textarea",
      ayuda: "Ambito - Herramienta/Tecnología - Nivel de Implantación Actual - Presupuesto - Prioridad"
    },
    {
      id: 12,
      numero: 12,
      texto: "Objetivos y KPI",
      tipo: "textarea",
      ayuda: "Fecha (Mes/Año) - Objetivo - KPI"
    },
    {
      id: 13,
      numero: 13,
      texto: "Plan de Acción - Iniciativas, Tareas, Responsables, Plazos y Presupuesto",
      tipo: "textarea",
      ayuda: "Indicadores clave de rendimiento que usarán para evaluar el proyecto"
    },
    {
      id: 14,
      numero: 14,
      texto: "Matriz de Priorización de Iniciativas",
      tipo: "textarea",
      ayuda: "IMPACTO - ESFUERZO / COSTE"
    },
    {
      id: 15,
      numero: 15,
      texto: "Plan de Acción - Inversión Necesaria",
      tipo: "textarea",
      ayuda: "Corto Plazo - Mediano Plazo - Largo Plazo"
    },
    {
      id: 16,
      numero: 16,
      texto: "Gestionando el Cambio",
      tipo: "textarea",
      ayuda: "Impulsores de la transformación digital en la organización"
    },
    {
      id: 17,
      numero: 17,
      texto: "Formación Necesaria",
      tipo: "textarea",
      ayuda: "Curso / Programa - Departamento / Personas - Duración"
    }
  ];
}
