// ValidationUtils.js - Utilidades para validación y feedback

export const validarDatosCompletos = (datosEvaluacion) => {
  const errores = [];

  // Validar datos básicos
  if (!datosEvaluacion.identificadorPuesto?.trim()) {
    errores.push('El identificador del puesto es obligatorio');
  }
  
  if (!datosEvaluacion.nombreTrabajador?.trim()) {
    errores.push('El nombre del trabajador es obligatorio');
  }
  
  if (!datosEvaluacion.empresa?.trim()) {
    errores.push('El nombre de la empresa es obligatorio');
  }
  
  if (!datosEvaluacion.nombreEvaluador?.trim()) {
    errores.push('El nombre del evaluador es obligatorio');
  }
  
  if (!datosEvaluacion.fechaEvaluacion) {
    errores.push('La fecha de evaluación es obligatoria');
  }

  // Validar evaluación de silla
  if (!datosEvaluacion.evaluacionSilla) {
    errores.push('Falta completar la evaluación de la silla');
  } else {
    const silla = datosEvaluacion.evaluacionSilla;
    if (!silla.alturaAsiento?.puntuacion && silla.alturaAsiento?.puntuacion !== 0) {
      errores.push('Falta evaluar la altura del asiento');
    }
    if (!silla.profundidadAsiento?.puntuacion && silla.profundidadAsiento?.puntuacion !== 0) {
      errores.push('Falta evaluar la profundidad del asiento');
    }
    if (!silla.reposabrazos?.puntuacion && silla.reposabrazos?.puntuacion !== 0) {
      errores.push('Falta evaluar los reposabrazos');
    }
    if (!silla.respaldo?.puntuacion && silla.respaldo?.puntuacion !== 0) {
      errores.push('Falta evaluar el respaldo');
    }
    if (silla.tiempoUso === null || silla.tiempoUso === undefined) {
      errores.push('Falta evaluar el tiempo de uso de la silla');
    }
  }

  // Validar evaluación de pantalla y periféricos
  if (!datosEvaluacion.evaluacionPantallaPerifericos) {
    errores.push('Falta completar la evaluación de pantalla y periféricos');
  } else {
    const pantalla = datosEvaluacion.evaluacionPantallaPerifericos;
    if (!pantalla.pantalla?.puntuacion && pantalla.pantalla?.puntuacion !== 0) {
      errores.push('Falta evaluar la pantalla');
    }
    if (!pantalla.telefono?.puntuacion && pantalla.telefono?.puntuacion !== 0) {
      errores.push('Falta evaluar el teléfono');
    }
    if (!pantalla.mouse?.puntuacion && pantalla.mouse?.puntuacion !== 0) {
      errores.push('Falta evaluar el mouse');
    }
    if (!pantalla.teclado?.puntuacion && pantalla.teclado?.puntuacion !== 0) {
      errores.push('Falta evaluar el teclado');
    }
  }

  return {
    esValido: errores.length === 0,
    errores
  };
};

export const obtenerSugerenciasPrevencion = (puntuacionFinal, componentes) => {
  const sugerencias = [];

  // Sugerencias basadas en puntuación total
  if (puntuacionFinal >= 8) {
    sugerencias.push({
      prioridad: 'CRÍTICA',
      categoria: 'Acción Inmediata',
      descripcion: 'Considerar la suspensión temporal de actividades hasta realizar las mejoras necesarias',
      icono: '🚨'
    });
  }

  if (puntuacionFinal >= 6) {
    sugerencias.push({
      prioridad: 'ALTA',
      categoria: 'Capacitación',
      descripcion: 'Programar capacitación inmediata en ergonomía y posturas correctas',
      icono: '📚'
    });
  }

  if (puntuacionFinal >= 4) {
    sugerencias.push({
      prioridad: 'MEDIA',
      categoria: 'Seguimiento',
      descripcion: 'Establecer programa de seguimiento semanal/quincenal',
      icono: '📅'
    });
  }

  // Sugerencias específicas por componente
  if (componentes?.silla >= 5) {
    sugerencias.push({
      prioridad: 'ALTA',
      categoria: 'Mobiliario',
      descripcion: 'Evaluar reemplazo o ajuste profesional de la silla de trabajo',
      icono: '🪑'
    });
  }

  if (componentes?.pantallaPerifericos >= 5) {
    sugerencias.push({
      prioridad: 'ALTA',
      categoria: 'Equipamiento',
      descripcion: 'Revisar configuración de monitor, teclado y mouse',
      icono: '🖥️'
    });
  }

  // Sugerencias generales
  sugerencias.push({
    prioridad: 'GENERAL',
    categoria: 'Prevención',
    descripcion: 'Implementar pausas activas cada 60-90 minutos',
    icono: '⏰'
  });

  sugerencias.push({
    prioridad: 'GENERAL',
    categoria: 'Salud',
    descripcion: 'Realizar ejercicios de estiramiento cervical y lumbar',
    icono: '🤸‍♀️'
  });

  return sugerencias.sort((a, b) => {
    const prioridades = { 'CRÍTICA': 0, 'ALTA': 1, 'MEDIA': 2, 'GENERAL': 3 };
    return prioridades[a.prioridad] - prioridades[b.prioridad];
  });
};

export const calcularTendenciaRiesgo = (datosHistoricos) => {
  // Si hay datos históricos, calcular tendencia
  if (!datosHistoricos || datosHistoricos.length < 2) {
    return null;
  }

  const ultimaEvaluacion = datosHistoricos[datosHistoricos.length - 1];
  const evaluacionAnterior = datosHistoricos[datosHistoricos.length - 2];

  const diferencia = ultimaEvaluacion.puntuacion - evaluacionAnterior.puntuacion;

  return {
    tendencia: diferencia > 0 ? 'EMPEORANDO' : diferencia < 0 ? 'MEJORANDO' : 'ESTABLE',
    diferencia: Math.abs(diferencia),
    fechaAnterior: evaluacionAnterior.fecha,
    puntuacionAnterior: evaluacionAnterior.puntuacion
  };
};

export const generarAlertasPersonalizadas = (datosEvaluacion, puntuacionFinal) => {
  const alertas = [];

  // Alertas por edad
  const edad = parseInt(datosEvaluacion.edad);
  if (edad >= 50 && puntuacionFinal >= 5) {
    alertas.push({
      tipo: 'EDAD',
      mensaje: 'Trabajador mayor de 50 años con riesgo elevado. Considerar evaluación médica.',
      color: 'orange'
    });
  }

  // Alertas por tiempo de exposición
  const tiempoJornada = datosEvaluacion.tiempoPuestoJornada;
  if ((tiempoJornada === 'mas-8h' || tiempoJornada === '6-8h') && puntuacionFinal >= 4) {
    alertas.push({
      tipo: 'EXPOSICIÓN',
      mensaje: 'Alta exposición diaria combinada con riesgo moderado-alto. Priorizar intervención.',
      color: 'red'
    });
  }

  // Alertas por antigüedad
  const antiguedad = datosEvaluacion.antiguedadPuesto;
  if (antiguedad && antiguedad.includes('año') && puntuacionFinal >= 6) {
    alertas.push({
      tipo: 'CRONICIDAD',
      mensaje: 'Trabajador con antigüedad en puesto de alto riesgo. Evaluar lesiones acumulativas.',
      color: 'red'
    });
  }

  // Alerta por género (estudios muestran mayor prevalencia de TME en mujeres)
  if (datosEvaluacion.sexo === 'femenino' && puntuacionFinal >= 5) {
    alertas.push({
      tipo: 'EPIDEMIOLÓGICO',
      mensaje: 'Mayor prevalencia de TME en población femenina. Considerar factores adicionales.',
      color: 'yellow'
    });
  }

  return alertas;
};

export const calcularIndicadoresAdicionales = (datosEvaluacion) => {
  const indicadores = {};

  // Índice de configurabilidad (cuántos elementos son ajustables)
  let elementosConfigurables = 0;
  let totalElementos = 0;

  // Verificar elementos de la silla
  const silla = datosEvaluacion.evaluacionSilla;
  if (silla) {
    totalElementos += 4; // altura, profundidad, reposabrazos, respaldo
    
    // Si tiene incrementos, significa que el elemento no es totalmente ajustable
    if (!silla.alturaAsiento?.incrementos?.length) elementosConfigurables++;
    if (!silla.profundidadAsiento?.incrementos?.length) elementosConfigurables++;
    if (!silla.reposabrazos?.incrementos?.length) elementosConfigurables++;
    if (!silla.respaldo?.incrementos?.length) elementosConfigurables++;
  }

  indicadores.indiceConfigurabilidad = totalElementos > 0 ? 
    Math.round((elementosConfigurables / totalElementos) * 100) : 0;

  // Índice de sobrecarga temporal
  const tiempoSilla = silla?.tiempoUso || 0;
  const pantalla = datosEvaluacion.evaluacionPantallaPerifericos;
  
  let sobrecargaTemporal = 0;
  if (tiempoSilla > 0) sobrecargaTemporal++;
  if (pantalla?.pantalla?.tiempoUso > 0) sobrecargaTemporal++;
  if (pantalla?.mouse?.tiempoUso > 0) sobrecargaTemporal++;
  if (pantalla?.teclado?.tiempoUso > 0) sobrecargaTemporal++;

  indicadores.indiceSobrecargaTemporal = Math.round((sobrecargaTemporal / 4) * 100);

  return indicadores;
};