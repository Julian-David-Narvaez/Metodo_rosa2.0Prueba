'use client';

import React, { useState } from 'react';

const Formulario = ({ onNext, onCancel }) => {
  const [formData, setFormData] = useState({
    // Datos del puesto
    identificadorPuesto: '',
    descripcion: '',
    empresa: '',
    departamento: '',
    seccion: '',
    
    // Datos del evaluador
    empresaEvaluadora: '',
    nombreEvaluador: '',
    fechaEvaluacion: '',
    
    // Datos del trabajador
    nombreTrabajador: '',
    sexo: '',
    edad: '',
    antiguedadPuesto: '',
    tiempoPuestoJornada: '',
    duracionJornada: '',
    observaciones: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Limpiar error cuando el usuario empiece a escribir
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    // Campos obligatorios
    const requiredFields = [
      'identificadorPuesto',
      'empresa',
      'nombreEvaluador',
      'fechaEvaluacion',
      'nombreTrabajador',
      'sexo',
      'edad',
      'tiempoPuestoJornada',
      'duracionJornada'
    ];
    
    requiredFields.forEach(field => {
      if (!formData[field] || formData[field].trim() === '') {
        newErrors[field] = 'Este campo es obligatorio';
      }
    });
    
    // Validaciones específicas
    if (formData.edad && (isNaN(formData.edad) || formData.edad < 16 || formData.edad > 80)) {
      newErrors.edad = 'Edad debe ser un número entre 16 y 80';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      console.log('Datos del formulario:', formData);
      if (onNext) {
        onNext(formData);
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
          
          {/* Header */}
          <div className="bg-gradient-to-r from-green-500 to-orange-500 px-6 py-4">
            <h1 className="text-2xl font-bold text-white">Datos del Puesto de Trabajo</h1>
            <p className="text-green-100 mt-1">Complete la información básica para la evaluación ROSA</p>
          </div>

          <form onSubmit={handleSubmit} className="p-6 space-y-8">
            
            {/* Sección: Datos del Puesto */}
            <div className="space-y-6">
              <h2 className="text-xl font-semibold text-green-800 dark:text-green-300 border-b border-green-200 dark:border-green-700 pb-2">
                Información del Puesto
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Identificador del Puesto *
                  </label>
                  <input
                    type="text"
                    name="identificadorPuesto"
                    value={formData.identificadorPuesto}
                    onChange={handleChange}
                    className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white ${
                      errors.identificadorPuesto ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Ej: OF-001, SEC-ADM-01"
                  />
                  {errors.identificadorPuesto && (
                    <p className="text-red-500 text-sm mt-1">{errors.identificadorPuesto}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Empresa *
                  </label>
                  <input
                    type="text"
                    name="empresa"
                    value={formData.empresa}
                    onChange={handleChange}
                    className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white ${
                      errors.empresa ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Nombre de la empresa"
                  />
                  {errors.empresa && (
                    <p className="text-red-500 text-sm mt-1">{errors.empresa}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Departamento/Área
                  </label>
                  <input
                    type="text"
                    name="departamento"
                    value={formData.departamento}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    placeholder="Ej: Administración, Ventas"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Sección
                  </label>
                  <input
                    type="text"
                    name="seccion"
                    value={formData.seccion}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    placeholder="Ej: Contabilidad, Atención al cliente"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Descripción del Puesto
                </label>
                <textarea
                  name="descripcion"
                  value={formData.descripcion}
                  onChange={handleChange}
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  placeholder="Descripción breve de las actividades principales del puesto"
                />
              </div>
            </div>

            {/* Sección: Datos del Evaluador */}
            <div className="space-y-6">
              <h2 className="text-xl font-semibold text-orange-800 dark:text-orange-300 border-b border-orange-200 dark:border-orange-700 pb-2">
                Información del Evaluador
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Empresa Evaluadora
                  </label>
                  <input
                    type="text"
                    name="empresaEvaluadora"
                    value={formData.empresaEvaluadora}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    placeholder="Empresa o consultora que realiza la evaluación"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Nombre del Evaluador *
                  </label>
                  <input
                    type="text"
                    name="nombreEvaluador"
                    value={formData.nombreEvaluador}
                    onChange={handleChange}
                    className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white ${
                      errors.nombreEvaluador ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Nombre completo del evaluador"
                  />
                  {errors.nombreEvaluador && (
                    <p className="text-red-500 text-sm mt-1">{errors.nombreEvaluador}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Fecha de Evaluación *
                  </label>
                  <input
                    type="date"
                    name="fechaEvaluacion"
                    value={formData.fechaEvaluacion}
                    onChange={handleChange}
                    className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white ${
                      errors.fechaEvaluacion ? 'border-red-500' : 'border-gray-300'
                    }`}
                  />
                  {errors.fechaEvaluacion && (
                    <p className="text-red-500 text-sm mt-1">{errors.fechaEvaluacion}</p>
                  )}
                </div>
              </div>
            </div>

            {/* Sección: Datos del Trabajador */}
            <div className="space-y-6">
              <h2 className="text-xl font-semibold text-green-800 dark:text-green-300 border-b border-green-200 dark:border-green-700 pb-2">
                Información del Trabajador
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Nombre del Trabajador *
                  </label>
                  <input
                    type="text"
                    name="nombreTrabajador"
                    value={formData.nombreTrabajador}
                    onChange={handleChange}
                    className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white ${
                      errors.nombreTrabajador ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Nombre completo del trabajador"
                  />
                  {errors.nombreTrabajador && (
                    <p className="text-red-500 text-sm mt-1">{errors.nombreTrabajador}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Sexo *
                  </label>
                  <select
                    name="sexo"
                    value={formData.sexo}
                    onChange={handleChange}
                    className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white ${
                      errors.sexo ? 'border-red-500' : 'border-gray-300'
                    }`}
                  >
                    <option value="">Seleccionar...</option>
                    <option value="masculino">Masculino</option>
                    <option value="femenino">Femenino</option>
                    <option value="otro">Otro</option>
                  </select>
                  {errors.sexo && (
                    <p className="text-red-500 text-sm mt-1">{errors.sexo}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Edad *
                  </label>
                  <input
                    type="number"
                    name="edad"
                    value={formData.edad}
                    onChange={handleChange}
                    min="16"
                    max="80"
                    className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white ${
                      errors.edad ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Edad en años"
                  />
                  {errors.edad && (
                    <p className="text-red-500 text-sm mt-1">{errors.edad}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Antigüedad en el Puesto
                  </label>
                  <input
                    type="text"
                    name="antiguedadPuesto"
                    value={formData.antiguedadPuesto}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    placeholder="Ej: 2 años, 6 meses"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Tiempo en el Puesto por Jornada *
                  </label>
                  <select
                    name="tiempoPuestoJornada"
                    value={formData.tiempoPuestoJornada}
                    onChange={handleChange}
                    className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white ${
                      errors.tiempoPuestoJornada ? 'border-red-500' : 'border-gray-300'
                    }`}
                  >
                    <option value="">Seleccionar...</option>
                    <option value="menos-1h">Menos de 1 hora</option>
                    <option value="1-4h">Entre 1 y 4 horas</option>
                    <option value="4-6h">Entre 4 y 6 horas</option>
                    <option value="6-8h">Entre 6 y 8 horas</option>
                    <option value="mas-8h">Más de 8 horas</option>
                  </select>
                  {errors.tiempoPuestoJornada && (
                    <p className="text-red-500 text-sm mt-1">{errors.tiempoPuestoJornada}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Duración de la Jornada Laboral *
                  </label>
                  <select
                    name="duracionJornada"
                    value={formData.duracionJornada}
                    onChange={handleChange}
                    className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white ${
                      errors.duracionJornada ? 'border-red-500' : 'border-gray-300'
                    }`}
                  >
                    <option value="">Seleccionar...</option>
                    <option value="4h">4 horas</option>
                    <option value="6h">6 horas</option>
                    <option value="8h">8 horas</option>
                    <option value="10h">10 horas</option>
                    <option value="12h">12 horas</option>
                    <option value="otro">Otro</option>
                  </select>
                  {errors.duracionJornada && (
                    <p className="text-red-500 text-sm mt-1">{errors.duracionJornada}</p>
                  )}
                </div>
              </div>
            </div>

            {/* Observaciones */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Observaciones
              </label>
              <textarea
                name="observaciones"
                value={formData.observaciones}
                onChange={handleChange}
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                placeholder="Observaciones adicionales sobre el puesto o condiciones especiales..."
              />
            </div>

            {/* Botones */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-gray-200 dark:border-gray-700">
              <button
                type="button"
                onClick={onCancel}
                className="px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200"
              >
                Cancelar
              </button>
              
              <button
                type="submit"
                className="bg-gradient-to-r from-green-500 to-orange-500 text-white px-8 py-3 rounded-lg font-medium hover:from-green-600 hover:to-orange-600 transition-all duration-300 hover:transform hover:-translate-y-1 shadow-lg"
              >
                Continuar con la Evaluación
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Formulario;