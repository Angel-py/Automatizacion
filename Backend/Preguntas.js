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
      tipo: "dynamic-table",
      columns: [
        {
          name: "SOCIOS CLAVE",
          type: "textarea",
          placeholder: "¿Quién te puede ayudar?",
          help: "Socios estratégicos, proveedores, alianzas clave",
          required: true,
          width: "200px"
        },
        {
          name: "ACTIVIDADES CLAVE",
          type: "textarea",
          placeholder: "¿Qué harás para cumplir la propuesta de valor?",
          help: "Acciones principales, procesos clave",
          required: true,
          width: "200px"
        },
        {
          name: "PROPUESTA VALOR",
          type: "textarea",
          placeholder: "¿Qué haces diferente de la competencia?",
          help: "Valor único que ofreces al cliente",
          required: true,
          width: "200px"
        },
        {
          name: "RELACION CLIENTES",
          type: "textarea",
          placeholder: "¿Cómo interactúas con tu cliente?",
          help: "Canales de comunicación, fidelización",
          required: true,
          width: "200px"
        },
        {
          name: "SEGMENTO DE CLIENTES",
          type: "textarea",
          placeholder: "¿Cómo interactúas con tu cliente?",
          help: "Canales de comunicación, fidelización",
          required: true,
          width: "200px"
        },
        {
          name: "SEGMENTO DE CLIENTES",
          type: "textarea",
          placeholder: "¿A quién ayudas?",
          required: true,
          width: "200px"
        },
        {
          name: "RECURSOS CLAVE",
          type: "textarea",
          placeholder: "¿Qué recursos necesitas para la propuesta de valor?",
          required: true,
          width: "200px"
        },
        {
          name: "CANALES",
          type: "textarea",
          placeholder: "¿Cómo llegas a los clientes?",
          help: "Canales de comunicación, fidelización",
          required: true,
          width: "200px"
        },
        {
          name: "ESTRUCTURA DE COSTOS",
          type: "textarea",
          placeholder: "¿Cuánto te costará? ¿Cuánto cuesta llegar a nuestro cliente",
          required: true,
          width: "200px"
        },
        {
          name: "FUENTE DE INGRESOS",
          type: "textarea",
          placeholder: "¿De dónde vienen nuestros ingresos? ¿Cuáles son los precios?",
          required: true,
          width: "200px"
        },
      ],
      rows: 2,  // Configuración especial para Business Canvas
      rowLabels: [
        {
          label: "PARTE SUPERIOR",
          help: "Bloques estratégicos del modelo de negocio"
        },
        {
          label: "PARTE INFERIOR",
          help: "Bloques operativos y financieros"
        }
      ],
      limits: {
        min: 1,
        max: 1
      },
      ayuda: "Segmento de Clientes - Relación con Clientes - Actividades Clave - Recursos Clave - Socios Clave - Estructura de Costos - Fuentes de Ingresos"
    },
    {
      id: 10,
      numero: 10,
      texto: "Lienzo Transformación Digital",
      tipo: "dynamic-keyvalue",
      keyConfig: {
        type: "select",
        placeholder: "Selecciona el área",
        options: [
          "Cliente como Centro",
          "Tecnologías",
          "Nube y Datos",
          "Negocio Digital",
          "Ingeniería de Procesos",
          "Cultura Digital/Liderazgo",
          "Marketing Digital"
        ],
        required: true
      },
      valueConfig: {
        type: "textarea",
        placeholder: "Descripción detallada, objetivos y métricas",
        required: true
      },
      limits: {
        min: 7,
        max: 7  // Fijo para que sean exactamente las 7 áreas
      },
      ayuda: "Cliente como Centro - Tecnologías - Nube y Datos - Negocio Digital - Ingeniería de Procesos - Cultura Digital/Liderazgo - Marketing Digital"
    },
    {
      id: 11,
      numero: 11,
      texto: "Herramientas y Tecnologías a Mejorar o Implantar",
      tipo: "dynamic-table",
      columns: [
        {
          name: "ÁMBITO",
          type: "textarea",
          placeholder: "¿Quién te puede ayudar?",
          help: "Socios estratégicos, proveedores, alianzas clave",
          required: true,
          width: "200px"
        },
        {
          name: "HERRAMIENTA/TECNOLOGIA",
          type: "textarea",
          placeholder: "¿Qué harás para cumplir la propuesta de valor?",
          help: "Acciones principales, procesos clave",
          required: true,
          width: "200px"
        },
        {
          name: "PRESUPUESTO",
          type: "textarea",
          placeholder: "¿Qué haces diferente de la competencia?",
          help: "Valor único que ofreces al cliente",
          required: true,
          width: "200px"
        },
        {
          name: "PRIORIDAD",
          type: "textarea",
          placeholder: "¿Cómo interactúas con tu cliente?",
          help: "Canales de comunicación, fidelización",
          required: true,
          width: "200px"
        }
      ],
      rows: 2,  // Configuración especial para Business Canvas
      rowLabels: [
        {
          label: "PARTE SUPERIOR",
          help: "Bloques estratégicos del modelo de negocio"
        },
        {
          label: "PARTE INFERIOR",
          help: "Bloques operativos y financieros"
        }
      ],
      limits: {
        min: 1,
        max: 4
      },
      ayuda: "Ambito - Herramienta/Tecnología - Nivel de Implantación Actual - Presupuesto - Prioridad"
    },
    {
      id: 12,
      numero: 12,
      texto: "Objetivos y KPI",
      tipo: "dynamic-table",
      columns: [
        {
          name: "FECHA (MES/AÑO)",
          type: "month",
          required: true,
          help: "Ej: 2026-03"
        },
        {
          name: "OBJETIVO",
          type: "textarea",
          placeholder: "Describe tu objetivos",
          required: true,
          help: "Ej: Obtener más conocimiento"
        },
        {
          name: "KPI",
          type: "textarea",
          placeholder: "KPI",
          required: true
        },
      ],
      limits: {
        min: 1,
        max: 5
      },
      ayuda: "Fecha (Mes/Año) - Objetivo - KPI"
    },
    {
      id: 13,
      numero: 13,
      texto: "Plan de Acción - Iniciativas, Tareas, Responsables, Plazos y Presupuesto",
      tipo: "dynamic-table",
      columns: [
        {
          name: "ÁMBITO DEL LIENZO DE TD",
          type: "textarea",
          required: true,
          help: "Ej: Ambito..."
        },
        {
          name: "INICIATIVA",
          type: "textarea",
          placeholder: "Iniciativa",
          required: true,
          help: "Ej: Obtener más conocimiento"
        },
        {
          name: "TAREAS",
          type: "textarea",
          placeholder: "Tareas",
          required: true
        },
        {
          name: "PLAZO",
          type: "textarea",
          placeholder: "Plazo",
          required: true
        },
        {
          name: "RESPONSABLE",
          type: "textarea",
          placeholder: "Responsable",
          required: true
        },
        {
          name: "PRESUPUESTO",
          type: "textarea",
          placeholder: "Presupuesto",
          required: true
        },
      ],
      limits: {
        min: 1,
        max: 6
      },
      ayuda: "Indicadores clave de rendimiento que usarán para evaluar el proyecto"
    },
    {
      id: 14,
      numero: 14,
      texto: "Matriz de Priorización de Iniciativas",
      tipo: "matrix-checkbox",
      matrixConfig: {
        rows: [
          { label: "ALTO", value: "alto", color: "secondary" },
          { label: "BAJO", value: "bajo", color: "accent" }
        ],
        columns: [
          { label: "ALTO", value: "alto", color: "secondary" },
          { label: "BAJO", value: "bajo", color: "accent" }
        ],
        combinations: [
          { row: "alto", col: "alto", label: "ALTO-ALTO", description: "Alto impacto -alto esfuerzo/coste", color: "bg-red-500" },
          { row: "alto impacto", col: "bajo esfuerzo/coste", label: "ALTO-BAJO", description: "Prioridad media - Planificar", color: "bg-yellow-500" },
          { row: "bajo impacto", col: "alto esfuerzo/coste", label: "BAJO-ALTO", description: "Prioridad media - Monitorear", color: "bg-yellow-500" },
          { row: "bajo impacto", col: "bajo esfuerzo/coste", label: "BAJO-BAJO", description: "Baja prioridad - Revisar periódicamente", color: "bg-green-500" }
        ]
      },
      multipleSelection: false,
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
