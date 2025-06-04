'use client';

import React, { useState } from 'react';
import Formulario from './modules/Formulario';
import EvaluacionSilla from './modules/EvaluacionSilla/EvaluacionSilla';
import ResultadoTablaA from './modules/EvaluacionSilla/ResultadoTablaA';
import EvaluacionPantallaPerifericos from './modules/PantallaPerifericos/PantallaPerifericos';
import ResultadoTablaB from './modules/PantallaPerifericos/ResultadoTablaB';

const RosaEvaluacion = ({ onVolverInicio }) => {
  const [pasoActual, setPasoActual] = useState(1);
  const [datosCompletos, setDatosCompletos] = useState({});

  const pasos = [
    { numero: 1, titulo: "Datos del Puesto", componente: "formulario" },
    { numero: 2, titulo: "Evaluación Silla", componente: "silla" },
    { numero: 3, titulo: "Resultado Tabla A", componente: "tablaA" },
    { numero: 4, titulo: "Pantalla y Periféricos", componente: "pantalla" },
    { numero: 5, titulo: "Resultado Tablas B,C,D", componente: "tablaB" },
    { numero: 6, titulo: "Resultados Finales", componente: "resultados" }
  ];

  const handleSiguientePaso = (datos) => {
    setDatosCompletos(datos);
    setPasoActual(prev => prev + 1);
  };

  const handlePasoAnterior = () => {
    setPasoActual(prev => prev - 1);
  };

  const handleIrAPaso = (numeroPaso) => {
    setPasoActual(numeroPaso);
  };

  const renderPasoActual = () => {
    switch(pasoActual) {
      case 1:
        return (
          <Formulario 
            onNext={handleSiguientePaso}
            onCancel={onVolverInicio}
            formData={datosCompletos}
          />
        );
      case 2:
        return (
          <EvaluacionSilla 
            onNext={handleSiguientePaso}
            onBack={handlePasoAnterior}
            formData={datosCompletos}
          />
        );
      case 3:
        return (
          <ResultadoTablaA 
            onContinuar={handleSiguientePaso}
            onVolver={handlePasoAnterior}
            datosEvaluacion={datosCompletos}
          />
        );
      case 4:
        return (
          <EvaluacionPantallaPerifericos 
            onNext={handleSiguientePaso}
            onBack={handlePasoAnterior}
            formData={datosCompletos}
          />
        );
      case 5:
        return (
          <ResultadoTablaB 
            onContinuar={handleSiguientePaso}
            onVolver={handlePasoAnterior}
            datosEvaluacion={datosCompletos}
          />
        );
      case 6:
        return (
          <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8 flex items-center justify-center">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">
                Resultados Finales ROSA
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Aquí se mostrará la Tabla E (combinación final) y la opción de descargar PDF
              </p>
              <div className="space-x-4">
                <button 
                  onClick={handlePasoAnterior}
                  className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50"
                >
                  ← Volver
                </button>
                <button 
                  onClick={onVolverInicio}
                  className="px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600"
                >
                  Nueva Evaluación
                </button>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Barra de progreso */}
      <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-xl font-bold text-gray-800 dark:text-gray-200">
              Evaluación ROSA
            </h1>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              Paso {pasoActual} de {pasos.length}
            </span>
          </div>
          
          {/* Indicador de progreso */}
          <div className="flex items-center space-x-2 overflow-x-auto">
            {pasos.map((paso, index) => (
              <React.Fragment key={paso.numero}>
                <div 
                  className={`flex items-center space-x-2 cursor-pointer transition-colors duration-200 whitespace-nowrap ${
                    paso.numero === pasoActual ? 'text-green-600' : 
                    paso.numero < pasoActual ? 'text-green-500' : 'text-gray-400'
                  }`}
                  onClick={() => paso.numero <= pasoActual && handleIrAPaso(paso.numero)}
                >
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                    paso.numero === pasoActual ? 'bg-green-600 text-white' :
                    paso.numero < pasoActual ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-600'
                  }`}>
                    {paso.numero < pasoActual ? '✓' : paso.numero}
                  </div>
                  <span className="text-xs sm:text-sm font-medium hidden md:block">{paso.titulo}</span>
                </div>
                
                {index < pasos.length - 1 && (
                  <div className={`w-4 sm:w-8 h-1 rounded ${
                    paso.numero < pasoActual ? 'bg-green-500' : 'bg-gray-200'
                  }`} />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>

      {/* Contenido del paso actual */}
      <div className="flex-1">
        {renderPasoActual()}
      </div>

      {/* Debug info (remover en producción) */}
      {process.env.NODE_ENV === 'development' && (
        <div className="fixed bottom-4 right-4 bg-black text-white p-3 rounded-lg text-xs max-w-xs">
          <p><strong>Paso:</strong> {pasoActual}</p>
          <p><strong>Datos:</strong> {Object.keys(datosCompletos).length} campos</p>
          <p><strong>Silla:</strong> {datosCompletos.evaluacionSilla ? '✓' : '✗'}</p>
          <p><strong>Pantalla:</strong> {datosCompletos.evaluacionPantallaPerifericos ? '✓' : '✗'}</p>
        </div>
      )}
    </div>
  );
};

export default RosaEvaluacion;