'use client';

import React from 'react';
import ThemeToggle from './ThemeToggle';

const Inicio = ({ onComenzarEvaluacion }) => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      {/* Header con toggle de tema */}
      <header className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-orange-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">R</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-green-900 dark:text-green-100">Evaluación ROSA</h1>
                <p className="text-sm text-green-600 dark:text-green-400">Sistema de Evaluación Ergonómica</p>
              </div>
            </div>
            <ThemeToggle />
          </div>
        </div>
      </header>

      {/* Contenido principal */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-6 sm:p-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-green-900 dark:text-green-100 mb-4">
              Bienvenido al Sistema ROSA
            </h2>
            <p className="text-green-600 dark:text-green-400 max-w-2xl mx-auto mb-6">
              Rapid Office Strain Assessment - Evaluación rápida de riesgos ergonómicos en puestos de oficina
            </p>
            
            {/* Información sobre el método */}
            <div className="bg-green-50 dark:bg-green-900 p-6 rounded-lg mb-8 text-left">
              <h3 className="font-semibold text-green-800 dark:text-green-200 mb-3">¿Qué es el método ROSA?</h3>
              <p className="text-green-700 dark:text-green-300 text-sm mb-4">
                ROSA es una herramienta de evaluación ergonómica diseñada específicamente para analizar 
                los riesgos de trastornos musculoesqueléticos en puestos de trabajo de oficina que emplean 
                pantallas de visualización de datos.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <h4 className="font-medium text-green-800 dark:text-green-200 mb-2">Evalúa:</h4>
                  <ul className="space-y-1 text-green-700 dark:text-green-300">
                    <li>• Silla (altura, profundidad, reposabrazos, respaldo)</li>
                    <li>• Monitor/Pantalla (posición y tiempo de uso)</li>
                    <li>• Periféricos (teclado, mouse, teléfono)</li>
                    <li>• Tiempo de exposición</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-green-800 dark:text-green-200 mb-2">Resultado:</h4>
                  <ul className="space-y-1 text-green-700 dark:text-green-300">
                    <li>• Puntuación de riesgo (1-10)</li>
                    <li>• Nivel de actuación requerido</li>
                    <li>• Recomendaciones específicas</li>
                    <li>• Informe descargable en PDF</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Botones de acción */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <button 
              onClick={onComenzarEvaluacion}
              className="bg-gradient-to-r from-green-500 to-orange-500 text-white px-8 py-4 rounded-lg font-medium hover:from-green-600 hover:to-orange-600 transition-all duration-300 hover:transform hover:-translate-y-1 shadow-lg text-lg"
            >
              Comenzar Evaluación →
            </button>
            <button className="bg-white dark:bg-gray-700 border-2 border-green-500 text-green-500 dark:text-green-400 px-6 py-4 rounded-lg font-medium hover:bg-green-50 dark:hover:bg-gray-600 transition-all duration-300 text-lg">
              Ver Instrucciones
            </button>
          </div>

          {/* Pasos del proceso */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📋</span>
              </div>
              <h3 className="font-semibold text-green-800 dark:text-green-300 mb-2">Paso 1</h3>
              <p className="text-green-600 dark:text-green-400 text-sm">Datos del puesto y trabajador</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 dark:bg-orange-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🪑</span>
              </div>
              <h3 className="font-semibold text-orange-800 dark:text-orange-300 mb-2">Paso 2</h3>
              <p className="text-orange-600 dark:text-orange-400 text-sm">Evaluación de la silla</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🖥️</span>
              </div>
              <h3 className="font-semibold text-green-800 dark:text-green-300 mb-2">Paso 3</h3>
              <p className="text-green-600 dark:text-green-400 text-sm">Pantalla y periféricos</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 dark:bg-orange-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📊</span>
              </div>
              <h3 className="font-semibold text-orange-800 dark:text-orange-300 mb-2">Paso 4</h3>
              <p className="text-orange-600 dark:text-orange-400 text-sm">Resultados y recomendaciones</p>
            </div>
          </div>

          {/* Información adicional */}
          <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-2xl font-bold text-green-600 dark:text-green-400">~10 min</div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Tiempo estimado</p>
              </div>
              <div>
                <div className="text-2xl font-bold text-orange-600 dark:text-orange-400">100% Local</div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Sin envío de datos</p>
              </div>
              <div>
                <div className="text-2xl font-bold text-green-600 dark:text-green-400">PDF</div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Informe descargable</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Inicio;