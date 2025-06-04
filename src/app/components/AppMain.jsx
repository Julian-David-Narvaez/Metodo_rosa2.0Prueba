'use client';

import React, { useState } from 'react';
import Inicio from './Inicio';
import RosaEvaluacion from './RosaEvaluacion';
import ThemeToggle from './ThemeToggle';

const AppMain = () => {
  const [vistaActual, setVistaActual] = useState('inicio'); // 'inicio' | 'evaluacion'

  const handleComenzarEvaluacion = () => {
    setVistaActual('evaluacion');
  };

  const handleVolverInicio = () => {
    setVistaActual('inicio');
  };

  if (vistaActual === 'evaluacion') {
    return (
      <div>
        {/* Theme toggle */}
        <div className="fixed top-4 right-4 z-50">
          <ThemeToggle />
        </div>
        
        <RosaEvaluacion onVolverInicio={handleVolverInicio} />
      </div>
    );
  }

  return (
    <Inicio onComenzarEvaluacion={handleComenzarEvaluacion} />
  );
};

export default AppMain;