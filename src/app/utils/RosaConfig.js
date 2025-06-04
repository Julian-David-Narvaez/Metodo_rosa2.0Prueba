// ROSAConfig.js - Configuración y constantes del método ROSA

export const NIVELES_RIESGO = {
  BAJO: {
    rango: [1, 2],
    color: 'green',
    descripcion: 'Riesgo Bajo',
    accion: 'Seguimiento rutinario',
    frecuenciaSeguimiento: '6 meses',
    prioridad: 4
  },
  MEDIO: {
    rango: [3, 4],
    color: 'yellow',
    descripcion: 'Riesgo Medio',
    accion: 'Mejoras recomendadas',
    frecuenciaSeguimiento: '3 meses',
    prioridad: 3
  },
  ALTO: {
    rango: [5, 7],
    color: 'orange',
    descripcion: 'Riesgo Alto',
    accion: 'Cambios necesarios',
    frecuenciaSeguimiento: '1 mes',
    prioridad: 2
  },
  MUY_ALTO: {
    rango: [8, 10],
    color: 'red',
    descripcion: 'Riesgo Muy Alto',
    accion: 'Acción inmediata',
    frecuenciaSeguimiento: '1 semana',
    prioridad: 1
  }
};

export const TABLAS_ROSA = {
  // Tabla A - Silla (Altura+Profundidad vs Reposabrazos+Respaldo)
  TABLA_A: [
    [2, 2, 3, 4, 5, 6, 7, 8],
    [2, 2, 3, 4, 5, 6, 7, 8],
    [3, 3, 3, 4, 5, 6, 7, 8],
    [4, 4, 4, 4, 5, 6, 7, 8],
    [5, 5, 5, 5, 6, 7, 8, 9],
    [6, 6, 6, 7, 7, 8, 8, 9],
    [7, 7, 7, 8, 8, 9, 9, 9]
  ],

  // Tabla B - Pantalla + Teléfono
  TABLA_B: [
    [1, 1, 1, 2, 3, 4, 5, 6],
    [1, 1, 2, 2, 3, 4, 5, 6],
    [1, 2, 2, 3, 3, 4, 6, 7],
    [2, 2, 3, 3, 4, 5, 6, 8],
    [3, 3, 4, 4, 5, 6, 7, 8],
    [4, 4, 5, 5, 6, 7, 8, 9],
    [5, 5, 6, 7, 8, 8, 9, 9]
  ],

  // Tabla C - Mouse + Teclado
  TABLA_C: [
    [1, 1, 1, 2, 3, 4, 5, 6],
    [1, 1, 2, 3, 4, 5, 6, 7],
    [1, 2, 2, 3, 4, 5, 6, 7],
    [2, 3, 3, 3, 5, 6, 7, 8],
    [3, 4, 4, 5, 5, 6, 7, 8],
    [4, 5, 5, 6, 6, 7, 8, 9],
    [5, 6, 6, 7, 7, 8, 8, 9],
    [6, 7, 7, 8, 8, 9, 9, 9]
  ],

  // Tabla D - Resultado B + C
  TABLA_D: [
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    [2, 2, 3, 4, 5, 6, 7, 8, 9],
    [3, 3, 3, 4, 5, 6, 7, 8, 9],
    [4, 4, 4, 4, 5, 6, 7, 8, 9],
    [5, 5, 5, 5, 5, 6, 7, 8, 9],
    [6, 6, 6, 6, 6, 6, 7, 8, 9],
    [7, 7, 7, 7, 7, 7, 7, 8, 9],
    [8, 8, 8, 8, 8, 8, 8, 8, 9],
    [9, 9, 9, 9, 9, 9, 9, 9, 9]
  ],

  // Tabla E - Resultado Final (Silla + Pantalla/Periféricos)
  TABLA_E: [
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    [2, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    [3, 3, 3, 4, 5, 6, 7, 8, 9, 10],
    [4, 4, 4, 4, 5, 6, 7, 8, 9, 10],
    [5, 5, 5, 5, 5, 6, 7, 8, 9, 10],
    [6, 6, 6, 6, 6, 6, 7, 8, 9, 10],
    [7, 7, 7, 7, 7, 7, 7, 8, 9, 10],
    [8, 8, 8, 8, 8, 8, 8, 8, 9, 10],
    [9, 9, 9, 9, 9, 9, 9, 9, 9, 10],
    [10, 10, 10, 10, 10, 10, 10, 10, 10, 10]
  ]
};

export const RECOMENDACIONES_BASE = {
  SILLA: {
    ALTURA: {
      1: ['Mantener la altura actual del asiento', 'Verificar que los pies apoyen completamente en el suelo'],
      2: ['Ajustar altura para conseguir ángulo de 90° en rodillas', 'Usar reposapiés si es necesario'],
      3: ['Reemplazar silla por una con mayor rango de ajuste', 'Evaluar antropometría del usuario']
    },
    PROFUNDIDAD: {
      1: ['Mantener profundidad actual', 'Verificar espacio adecuado detrás de rodillas'],
      2: ['Ajustar profundidad del asiento', 'Considerar cojín lumbar si el asiento es muy profundo'],
      3: ['Reemplazar silla con profundidad inadecuada', 'Evaluar silla ergonómica certificada']
    },
    REPOSABRAZOS: {
      1: ['Mantener configuración actual de reposabrazos', 'Verificar altura a nivel de codos'],
      2: ['Ajustar altura y posición de reposabrazos', 'Verificar que no interfieran con el acercamiento a la mesa'],
      3: ['Reemplazar o reparar reposabrazos defectuosos', 'Considerar reposabrazos 4D ajustables']
    },
    RESPALDO: {
      1: ['Mantener soporte lumbar actual', 'Verificar contacto continuo con la espalda'],
      2: ['Ajustar inclinación y altura del respaldo', 'Añadir cojín lumbar si es necesario'],
      3: ['Reemplazar silla con respaldo inadecuado', 'Priorizar soporte lumbar ajustable']
    }
  },
  
  PANTALLA_PERIFERICOS: {
    PANTALLA: {
      1: ['Mantener posición actual de la pantalla', 'Verificar ausencia de reflejos'],
      2: ['Ajustar altura: borde superior a nivel de ojos', 'Modificar distancia: 50-70 cm'],
      3: ['Usar soporte o brazo articulado para monitor', 'Considerar monitor adicional si usa múltiples ventanas']
    },
    TELEFONO: {
      1: ['Mantener uso normal del teléfono', 'Continuar con manos libres si aplica'],
      2: ['Implementar auriculares o sistema manos libres', 'Evitar sostener teléfono entre hombro y oreja'],
      3: ['Uso obligatorio de auriculares', 'Capacitar en técnicas de comunicación ergonómica']
    },
    MOUSE: {
      1: ['Mantener posición actual del mouse', 'Verificar movimiento fluido'],
      2: ['Ajustar altura del mouse al nivel del codo', 'Usar almohadilla con soporte de muñeca'],
      3: ['Reemplazar mouse por uno ergonómico', 'Considerar mouse vertical o trackball']
    },
    TECLADO: {
      1: ['Mantener posición actual del teclado', 'Verificar muñecas en posición neutra'],
      2: ['Ajustar inclinación del teclado', 'Usar soporte para muñecas'],
      3: ['Reemplazar por teclado ergonómico', 'Considerar teclado dividido o compacto']
    }
  },

  GENERALES: {
    BAJO: [
      'Realizar pausas activas cada 2 horas',
      'Mantener hidratación adecuada',
      'Ejercicios de estiramiento suaves',
      'Revisión ergonómica cada 6 meses'
    ],
    MEDIO: [
      'Pausas activas cada hora',
      'Ejercicios específicos de cuello y espalda',
      'Capacitación en ergonomía básica',
      'Seguimiento mensual',
      'Evaluación de síntomas'
    ],
    ALTO: [
      'Pausas obligatorias cada 30-45 minutos',
      'Programa de ejercicios terapéuticos',
      'Rotación de tareas si es posible',
      'Seguimiento semanal',
      'Evaluación médica recomendada'
    ],
    MUY_ALTO: [
      'Intervención inmediata en el puesto',
      'Pausas cada 15-30 minutos',
      'Evaluación médica obligatoria',
      'Seguimiento diario inicial',
      'Considerar reubicación temporal',
      'Programa intensivo de rehabilitación'
    ]
  }
};

export const TIEMPO_USO_FACTORES = {
  MENOS_1H: { valor: -1, descripcion: 'Menos de 1 hora', color: 'green' },
  ENTRE_1_4H: { valor: 0, descripcion: 'Entre 1 y 4 horas', color: 'yellow' },
  MAS_4H: { valor: 1, descripcion: 'Más de 4 horas', color: 'red' }
};

export const VALIDACIONES = {
  EDAD_MIN: 16,
  EDAD_MAX: 80,
  CAMPOS_OBLIGATORIOS: [
    'identificadorPuesto',
    'empresa',
    'nombreEvaluador',
    'fechaEvaluacion',
    'nombreTrabajador',
    'sexo',
    'edad',
    'tiempoPuestoJornada',
    'duracionJornada'
  ]
};

export const MENSAJES = {
  SUCCESS: {
    EVALUACION_COMPLETA: 'Evaluación completada exitosamente',
    PDF_GENERADO: 'Informe PDF generado correctamente',
    DATOS_GUARDADOS: 'Datos guardados correctamente'
  },
  ERROR: {
    DATOS_INCOMPLETOS: 'Faltan datos obligatorios para completar la evaluación',
    ERROR_CALCULO: 'Error en el cálculo de puntuaciones',
    ERROR_PDF: 'Error al generar el informe PDF'
  },
  WARNING: {
    RIESGO_ALTO: 'Nivel de riesgo alto detectado - Se requiere acción prioritaria',
    DATOS_INCONSISTENTES: 'Algunos datos parecen inconsistentes'
  }
};

// Funciones auxiliares usando la configuración
export const obtenerNivelRiesgo = (puntuacion) => {
  for (const [nivel, config] of Object.entries(NIVELES_RIESGO)) {
    const [min, max] = config.rango;
    if (puntuacion >= min && puntuacion <= max) {
      return {
        nivel: config.descripcion,
        codigo: nivel,
        color: config.color,
        accion: config.accion,
        seguimiento: config.frecuenciaSeguimiento,
        prioridad: config.prioridad
      };
    }
  }
  return {
    nivel: 'Crítico',
    codigo: 'CRITICO',
    color: 'red',
    accion: 'Acción inmediata',
    seguimiento: 'Inmediato',
    prioridad: 0
  };
};

export const calcularConTabla = (tabla, fila, columna) => {
  const filaIndex = Math.min(Math.max(0, fila), tabla.length - 1);
  const columnaIndex = Math.min(Math.max(0, columna), tabla[0].length - 1);
  return tabla[filaIndex][columnaIndex];
};

export const obtenerRecomendacionesPorComponente = (componente, puntuacion) => {
  const categoria = RECOMENDACIONES_BASE[componente];
  if (!categoria) return [];
  
  for (const [nivel, recomendaciones] of Object.entries(categoria)) {
    if (puntuacion <= parseInt(nivel)) {
      return recomendaciones;
    }
  }
  
  return categoria[Object.keys(categoria).pop()] || [];
};