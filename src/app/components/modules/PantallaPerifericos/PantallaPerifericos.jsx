'use client';

import React, { useState, useEffect } from 'react';

const EvaluacionPantallaPerifericos = ({ onNext, onBack, formData }) => {
  const [evaluacionData, setEvaluacionData] = useState({
    pantalla: {
      puntuacion: null,
      incrementos: [],
      tiempoUso: null
    },
    telefono: {
      puntuacion: null,
      incrementos: [],
      tiempoUso: null
    },
    mouse: {
      puntuacion: null,
      incrementos: [],
      tiempoUso: null
    },
    teclado: {
      puntuacion: null,
      incrementos: [],
      tiempoUso: null
    }
  });

  const [puntuaciones, setPuntuaciones] = useState({
    puntuacionPantalla: 0,
    puntuacionTelefono: 0,
    puntuacionMouse: 0,
    puntuacionTeclado: 0,
    tablaB: 0,
    tablaC: 0,
    puntuacionPantallaPerifericos: 0
  });

  const [mostrarResultados, setMostrarResultados] = useState(false);

  // Calcular puntuaciones automáticamente (con optimización)
  useEffect(() => {
    const timer = setTimeout(() => {
      calcularPuntuaciones();
    }, 10);
    
    return () => clearTimeout(timer);
  }, [evaluacionData]);

  const calcularPuntuaciones = () => {
    // Calcular puntuaciones individuales (incluso si no están todos completos)
    const puntuacionPantalla = evaluacionData.pantalla.puntuacion !== null && evaluacionData.pantalla.tiempoUso !== null ?
      Math.max(0, evaluacionData.pantalla.puntuacion + 
        evaluacionData.pantalla.incrementos.length + evaluacionData.pantalla.tiempoUso) : 0;
    
    const puntuacionTelefono = evaluacionData.telefono.puntuacion !== null && evaluacionData.telefono.tiempoUso !== null ?
      Math.max(0, evaluacionData.telefono.puntuacion + 
        evaluacionData.telefono.incrementos.length + evaluacionData.telefono.tiempoUso) : 0;
    
    const puntuacionMouse = evaluacionData.mouse.puntuacion !== null && evaluacionData.mouse.tiempoUso !== null ?
      Math.max(0, evaluacionData.mouse.puntuacion + 
        evaluacionData.mouse.incrementos.length + evaluacionData.mouse.tiempoUso) : 0;
    
    const puntuacionTeclado = evaluacionData.teclado.puntuacion !== null && evaluacionData.teclado.tiempoUso !== null ?
      Math.max(0, evaluacionData.teclado.puntuacion + 
        evaluacionData.teclado.incrementos.length + evaluacionData.teclado.tiempoUso) : 0;

    // Solo calcular tablas si todos los campos están seleccionados
    let tablaB = 0;
    let tablaC = 0;
    let puntuacionFinal = 0;

    if (evaluacionData.pantalla.puntuacion !== null && evaluacionData.pantalla.tiempoUso !== null &&
        evaluacionData.telefono.puntuacion !== null && evaluacionData.telefono.tiempoUso !== null &&
        evaluacionData.mouse.puntuacion !== null && evaluacionData.mouse.tiempoUso !== null &&
        evaluacionData.teclado.puntuacion !== null && evaluacionData.teclado.tiempoUso !== null) {
      
      // Tabla B (Pantalla + Teléfono)
      tablaB = obtenerTablaB(puntuacionPantalla, puntuacionTelefono);
      
      // Tabla C (Mouse + Teclado)
      tablaC = obtenerTablaC(puntuacionMouse, puntuacionTeclado);
      
      // Tabla D (Resultado final de Pantalla y Periféricos)
      puntuacionFinal = obtenerTablaD(tablaB, tablaC);
    }

    setPuntuaciones({
      puntuacionPantalla,
      puntuacionTelefono,
      puntuacionMouse,
      puntuacionTeclado,
      tablaB,
      tablaC,
      puntuacionPantallaPerifericos: puntuacionFinal
    });
  };

  const obtenerTablaB = (pantalla, telefono) => {
    const tabla = [
      [1, 1, 1, 2, 3, 4, 5, 6],
      [1, 1, 2, 2, 3, 4, 5, 6],
      [1, 2, 2, 3, 3, 4, 6, 7],
      [2, 2, 3, 3, 4, 5, 6, 8],
      [3, 3, 4, 4, 5, 6, 7, 8],
      [4, 4, 5, 5, 6, 7, 8, 9],
      [5, 5, 6, 7, 8, 8, 9, 9]
    ];

    const fila = Math.min(telefono, tabla.length - 1);
    const columna = Math.min(pantalla, tabla[0].length - 1);
    
    return tabla[fila][columna];
  };

  const obtenerTablaC = (mouse, teclado) => {
    const tabla = [
      [1, 1, 1, 2, 3, 4, 5, 6],
      [1, 1, 2, 3, 4, 5, 6, 7],
      [1, 2, 2, 3, 4, 5, 6, 7],
      [2, 3, 3, 3, 5, 6, 7, 8],
      [3, 4, 4, 5, 5, 6, 7, 8],
      [4, 5, 5, 6, 6, 7, 8, 9],
      [5, 6, 6, 7, 7, 8, 8, 9],
      [6, 7, 7, 8, 8, 9, 9, 9]
    ];

    const fila = Math.min(mouse, tabla.length - 1);
    const columna = Math.min(teclado, tabla[0].length - 1);
    
    return tabla[fila][columna];
  };

  const obtenerTablaD = (tablaB, tablaC) => {
    const tabla = [
      [1, 2, 3, 4, 5, 6, 7, 8, 9],
      [2, 2, 3, 4, 5, 6, 7, 8, 9],
      [3, 3, 3, 4, 5, 6, 7, 8, 9],
      [4, 4, 4, 4, 5, 6, 7, 8, 9],
      [5, 5, 5, 5, 5, 6, 7, 8, 9],
      [6, 6, 6, 6, 6, 6, 7, 8, 9],
      [7, 7, 7, 7, 7, 7, 7, 8, 9],
      [8, 8, 8, 8, 8, 8, 8, 8, 9],
      [9, 9, 9, 9, 9, 9, 9, 9, 9]
    ];

    const fila = Math.min(Math.max(0, tablaB - 1), tabla.length - 1);
    const columna = Math.min(Math.max(0, tablaC - 1), tabla[0].length - 1);
    
    return tabla[fila][columna];
  };

  const handleSeleccionOpcion = (elemento, puntuacion, incrementos = []) => {
    // Guardar posición actual del scroll
    const scrollPosition = window.scrollY;
    
    setEvaluacionData(prev => ({
      ...prev,
      [elemento]: {
        ...prev[elemento],
        puntuacion,
        incrementos
      }
    }));
    
    // Restaurar posición del scroll después del re-render
    setTimeout(() => {
      window.scrollTo(0, scrollPosition);
    }, 0);
  };

  const handleTiempoUso = (elemento, tiempo) => {
    // Guardar posición actual del scroll
    const scrollPosition = window.scrollY;
    
    setEvaluacionData(prev => ({
      ...prev,
      [elemento]: {
        ...prev[elemento],
        tiempoUso: tiempo
      }
    }));
    
    // Restaurar posición del scroll después del re-render
    setTimeout(() => {
      window.scrollTo(0, scrollPosition);
    }, 0);
  };

  const handleContinuar = () => {
    // Validar que todos los campos estén seleccionados
    if (evaluacionData.pantalla.puntuacion === null || evaluacionData.pantalla.tiempoUso === null ||
        evaluacionData.telefono.puntuacion === null || evaluacionData.telefono.tiempoUso === null ||
        evaluacionData.mouse.puntuacion === null || evaluacionData.mouse.tiempoUso === null ||
        evaluacionData.teclado.puntuacion === null || evaluacionData.teclado.tiempoUso === null) {
      alert('Por favor, complete todas las evaluaciones antes de continuar.');
      return;
    }

    const datosCompletos = {
      ...formData,
      evaluacionPantallaPerifericos: {
        ...evaluacionData,
        puntuaciones
      }
    };

    if (onNext) {
      onNext(datosCompletos);
    }
  };

  const toggleResultados = () => {
    setMostrarResultados(!mostrarResultados);
  };

  // Componente para mostrar opciones con imágenes
  const OpcionEvaluacion = ({ titulo, elemento, opciones }) => (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-orange-800 dark:text-orange-300">{titulo}</h3>
      
      {/* Opciones principales */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {opciones.map((opcion, index) => (
          <button
            key={index}
            type="button"
            onClick={(e) => {
              e.preventDefault();
              handleSeleccionOpcion(elemento, opcion.puntuacion, opcion.incrementos || []);
            }}
            className={`p-4 border-2 rounded-lg transition-all duration-200 ${
              evaluacionData[elemento].puntuacion === opcion.puntuacion &&
              JSON.stringify(evaluacionData[elemento].incrementos) === JSON.stringify(opcion.incrementos || [])
                ? 'border-orange-500 bg-orange-50 dark:bg-orange-900'
                : 'border-gray-300 dark:border-gray-600 hover:border-orange-400'
            }`}
          >
            <div className="aspect-square bg-gray-100 dark:bg-gray-700 rounded-lg mb-3 flex items-center justify-center">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-600 rounded-lg flex items-center justify-center text-white font-bold">
                IMG
              </div>
            </div>
            <p className="text-sm font-medium text-gray-700 dark:text-gray-300">{opcion.descripcion}</p>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
              Puntuación: {opcion.puntuacion + (opcion.incrementos?.length || 0)}
            </p>
          </button>
        ))}
      </div>

      {/* Tiempo de uso */}
      <div className="mt-4">
        <h4 className="text-md font-medium text-gray-700 dark:text-gray-300 mb-3">Tiempo de uso diario:</h4>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {[
            { valor: -1, descripcion: "Menos de 1 hora", color: "green" },
            { valor: 0, descripcion: "Entre 1 y 4 horas", color: "yellow" },
            { valor: 1, descripcion: "Más de 4 horas", color: "red" }
          ].map((opcion) => (
            <button
              key={opcion.valor}
              type="button"
              onClick={(e) => {
                e.preventDefault();
                handleTiempoUso(elemento, opcion.valor);
              }}
              className={`p-3 border rounded-lg transition-all duration-200 ${
                evaluacionData[elemento].tiempoUso === opcion.valor
                  ? 'border-orange-500 bg-orange-50 dark:bg-orange-900'
                  : 'border-gray-300 dark:border-gray-600 hover:border-orange-400'
              }`}
            >
              <div className={`w-6 h-6 mx-auto mb-1 rounded-full flex items-center justify-center text-xs font-bold text-white ${
                opcion.color === 'green' ? 'bg-green-500' :
                opcion.color === 'yellow' ? 'bg-yellow-500' :
                'bg-red-500'
              }`}>
                {opcion.valor > 0 ? '+1' : opcion.valor < 0 ? '-1' : '0'}
              </div>
              <p className="text-xs text-gray-600 dark:text-gray-400">{opcion.descripcion}</p>
            </button>
          ))}
        </div>
      </div>
    </div>
  );

  const opcionesPantalla = [
    { puntuacion: 1, descripcion: "Pantalla a altura y distancia correctas", incrementos: [] },
    { puntuacion: 2, descripcion: "Pantalla muy alta o muy baja", incrementos: [] },
    { puntuacion: 2, descripcion: "Pantalla muy cerca o muy lejos", incrementos: [] },
    { puntuacion: 1, descripcion: "Correcta + no ajustable", incrementos: ["+1"] }
  ];

  const opcionesTelefono = [
    { puntuacion: 1, descripcion: "Uso normal del teléfono", incrementos: [] },
    { puntuacion: 2, descripcion: "Teléfono entre hombro y oreja", incrementos: [] },
    { puntuacion: 1, descripcion: "Con auriculares o manos libres", incrementos: [] }
  ];

  const opcionesMouse = [
    { puntuacion: 1, descripcion: "Mouse a altura y posición correctas", incrementos: [] },
    { puntuacion: 2, descripcion: "Mouse muy alto o muy bajo", incrementos: [] },
    { puntuacion: 1, descripcion: "Correcto + sin soporte de muñeca", incrementos: ["+1"] },
    { puntuacion: 2, descripcion: "Inadecuado + sin soporte", incrementos: ["+1"] }
  ];

  const opcionesTeclado = [
    { puntuacion: 1, descripcion: "Teclado a altura y ángulo correctos", incrementos: [] },
    { puntuacion: 2, descripcion: "Teclado muy alto o ángulo inadecuado", incrementos: [] },
    { puntuacion: 1, descripcion: "Correcto + sin soporte de muñeca", incrementos: ["+1"] },
    { puntuacion: 2, descripcion: "Inadecuado + sin soporte", incrementos: ["+1"] }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
          
          {/* Header */}
          <div className="bg-gradient-to-r from-orange-500 to-green-500 px-6 py-4">
            <h1 className="text-2xl font-bold text-white">Pantalla y Periféricos</h1>
            <p className="text-orange-100 mt-1">Evaluación ergonómica de monitor, teclado, mouse y teléfono</p>
          </div>

          <div className="p-6 space-y-8">
            {/* Información del puesto */}
            <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
              <h2 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Puesto: {formData?.identificadorPuesto}</h2>
              <p className="text-sm text-gray-600 dark:text-gray-400">Trabajador: {formData?.nombreTrabajador}</p>
            </div>

            {/* Puntuación actual - área fija para evitar saltos */}
            <div className="bg-orange-50 dark:bg-orange-900 p-4 rounded-lg min-h-[120px]">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-orange-800 dark:text-orange-200">Puntuación Actual de Pantalla y Periféricos</h3>
                {(puntuaciones.puntuacionPantalla > 0 || puntuaciones.puntuacionTelefono > 0 || 
                  puntuaciones.puntuacionMouse > 0 || puntuaciones.puntuacionTeclado > 0) && (
                  <button
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      setMostrarResultados(!mostrarResultados);
                    }}
                    className="text-orange-600 dark:text-orange-400 hover:text-orange-800 dark:hover:text-orange-200"
                  >
                    {mostrarResultados ? 'Ocultar' : 'Ver'} Detalles
                  </button>
                )}
              </div>
              
              <div className="text-2xl font-bold text-orange-700 dark:text-orange-300 mt-2">
                Puntuación: {puntuaciones.puntuacionPantallaPerifericos || '-'}
              </div>
              
              {/* Mostrar puntajes individuales solo si mostrarResultados está activo */}
              {mostrarResultados && (puntuaciones.puntuacionPantalla > 0 || puntuaciones.puntuacionTelefono > 0 || 
                puntuaciones.puntuacionMouse > 0 || puntuaciones.puntuacionTeclado > 0) && (
                <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                  <div>
                    <p className="font-medium">Pantalla: {puntuaciones.puntuacionPantalla || '-'}</p>
                  </div>
                  <div>
                    <p className="font-medium">Teléfono: {puntuaciones.puntuacionTelefono || '-'}</p>
                  </div>
                  <div>
                    <p className="font-medium">Mouse: {puntuaciones.puntuacionMouse || '-'}</p>
                  </div>
                  <div>
                    <p className="font-medium">Teclado: {puntuaciones.puntuacionTeclado || '-'}</p>
                  </div>
                  {puntuaciones.tablaB > 0 && (
                    <>
                      <div className="col-span-2">
                        <p className="font-medium">Tabla B (Pantalla+Teléfono): {puntuaciones.tablaB}</p>
                      </div>
                      <div className="col-span-2">
                        <p className="font-medium">Tabla C (Mouse+Teclado): {puntuaciones.tablaC}</p>
                      </div>
                    </>
                  )}
                </div>
              )}
            </div>

            {/* Evaluaciones */}
            <OpcionEvaluacion 
              titulo="Monitor/Pantalla"
              elemento="pantalla"
              opciones={opcionesPantalla}
            />

            <OpcionEvaluacion 
              titulo="Teléfono"
              elemento="telefono"
              opciones={opcionesTelefono}
            />

            <OpcionEvaluacion 
              titulo="Mouse"
              elemento="mouse"
              opciones={opcionesMouse}
            />

            <OpcionEvaluacion 
              titulo="Teclado"
              elemento="teclado"
              opciones={opcionesTeclado}
            />

            {/* Navegación */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-gray-200 dark:border-gray-700">
              <button
                onClick={onBack}
                className="px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200"
              >
                ← Volver a Resultado Tabla A
              </button>
              
              <button
                onClick={handleContinuar}
                className="bg-gradient-to-r from-orange-500 to-green-500 text-white px-8 py-3 rounded-lg font-medium hover:from-orange-600 hover:to-green-600 transition-all duration-300 hover:transform hover:-translate-y-1 shadow-lg"
              >
                Ver Tablas B, C y D →
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EvaluacionPantallaPerifericos;