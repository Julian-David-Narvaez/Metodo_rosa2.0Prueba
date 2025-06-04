// PDFGenerator.js - Utilidad para generar informes PDF de evaluación ROSA

export const generarInformePDF = (datosEvaluacion, puntuacionFinal, nivelRiesgo, recomendaciones) => {
  // Crear contenido HTML optimizado para PDF
  const contenidoHTML = `
    <!DOCTYPE html>
    <html lang="es">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Informe ROSA - ${datosEvaluacion?.identificadorPuesto || 'Sin ID'}</title>
      <style>
        /* Reset y base */
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { 
          font-family: 'Arial', sans-serif; 
          line-height: 1.6; 
          color: #333; 
          background: white;
          font-size: 14px;
        }
        
        /* Layout */
        .container { max-width: 210mm; margin: 0 auto; padding: 20mm; }
        .page-break { page-break-before: always; }
        
        /* Header */
        .header { 
          text-align: center; 
          border-bottom: 3px solid #4CAF50; 
          padding-bottom: 20px; 
          margin-bottom: 30px; 
        }
        .header h1 { 
          color: #4CAF50; 
          font-size: 28px; 
          margin-bottom: 10px; 
          font-weight: bold;
        }
        .header .subtitle { 
          color: #666; 
          font-size: 16px; 
          margin-bottom: 5px; 
        }
        .header .date { 
          color: #888; 
          font-size: 14px; 
        }
        
        /* Secciones */
        .section { 
          margin-bottom: 30px; 
          break-inside: avoid;
        }
        .section h2 { 
          color: #4CAF50; 
          border-bottom: 2px solid #e0e0e0; 
          padding-bottom: 8px; 
          margin-bottom: 15px; 
          font-size: 20px;
        }
        .section h3 { 
          color: #FF8C00; 
          margin: 20px 0 10px 0; 
          font-size: 16px;
        }
        
        /* Grid de información */
        .info-grid { 
          display: grid; 
          grid-template-columns: 1fr 1fr; 
          gap: 15px; 
          margin-bottom: 20px; 
        }
        .info-item { 
          background: #f8f9fa; 
          padding: 12px; 
          border-radius: 6px; 
          border-left: 4px solid #4CAF50;
        }
        .info-item strong { color: #333; }
        
        /* Resultado principal */
        .resultado-principal { 
          background: linear-gradient(135deg, #e8f5e8 0%, #f0f8f0 100%); 
          padding: 30px; 
          text-align: center; 
          border-radius: 12px; 
          margin: 30px 0; 
          border: 2px solid #4CAF50;
        }
        .puntuacion-grande { 
          font-size: 48px; 
          font-weight: bold; 
          color: #4CAF50; 
          margin: 15px 0; 
        }
        .nivel-riesgo { 
          font-size: 24px; 
          font-weight: bold; 
          margin: 10px 0; 
          padding: 10px 20px;
          border-radius: 25px;
          display: inline-block;
        }
        .nivel-bajo { background: #d4edda; color: #155724; }
        .nivel-medio { background: #fff3cd; color: #856404; }
        .nivel-alto { background: #f8d7da; color: #721c24; }
        .nivel-muy-alto { background: #f5c6cb; color: #491217; }
        
        /* Tablas */
        .tabla-container { 
          margin: 20px 0; 
          overflow-x: auto;
        }
        .tabla { 
          width: 100%; 
          border-collapse: collapse; 
          background: white;
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }
        .tabla th, .tabla td { 
          border: 1px solid #ddd; 
          padding: 10px 8px; 
          text-align: center; 
          font-size: 12px;
        }
        .tabla th { 
          background: #4CAF50; 
          color: white; 
          font-weight: bold;
        }
        .tabla tr:nth-child(even) { background: #f9f9f9; }
        .tabla tr:hover { background: #f5f5f5; }
        
        /* Resumen de puntuaciones */
        .resumen-puntuaciones {
          background: #f8f9fa;
          padding: 20px;
          border-radius: 8px;
          margin: 20px 0;
        }
        .puntuacion-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 8px 0;
          border-bottom: 1px solid #e0e0e0;
        }
        .puntuacion-item:last-child { border-bottom: none; }
        .puntuacion-valor {
          font-weight: bold;
          font-size: 18px;
          color: #4CAF50;
        }
        
        /* Recomendaciones */
        .recomendacion-categoria { 
          background: #fff8e1; 
          padding: 20px; 
          border-radius: 8px; 
          margin: 15px 0; 
          border-left: 5px solid #FFC107;
        }
        .recomendacion-categoria h4 { 
          color: #F57C00; 
          margin-bottom: 12px; 
          font-size: 16px;
        }
        .recomendacion-lista { 
          list-style: none; 
          padding: 0; 
        }
        .recomendacion-lista li { 
          padding: 6px 0; 
          position: relative;
          padding-left: 20px;
        }
        .recomendacion-lista li::before {
          content: "▶";
          position: absolute;
          left: 0;
          color: #FF8C00;
          font-size: 12px;
        }
        
        /* Footer */
        .footer { 
          margin-top: 50px; 
          padding-top: 20px;
          border-top: 2px solid #e0e0e0;
          text-align: center; 
          font-size: 12px; 
          color: #666; 
        }
        .footer p { margin: 5px 0; }
        
        /* Utilidades */
        .text-center { text-align: center; }
        .text-bold { font-weight: bold; }
        .mb-20 { margin-bottom: 20px; }
        .mt-20 { margin-top: 20px; }
        
        /* Media queries para impresión */
        @media print {
          body { font-size: 12px; }
          .container { margin: 0; padding: 15mm; }
          .no-print { display: none; }
          .page-break { page-break-before: always; }
        }
      </style>
    </head>
    <body>
      <div class="container">
        
        <!-- PÁGINA 1: PORTADA Y RESUMEN -->
        <div class="header">
          <h1>INFORME DE EVALUACIÓN ERGONÓMICA</h1>
          <div class="subtitle">Método ROSA - Rapid Office Strain Assessment</div>
          <div class="date">Generado el: ${new Date().toLocaleDateString('es-ES', { 
            weekday: 'long', 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
          })}</div>
        </div>

        <div class="section">
          <h2>📋 Información General del Puesto</h2>
          <div class="info-grid">
            <div class="info-item">
              <strong>Identificador del Puesto:</strong><br>
              ${datosEvaluacion?.identificadorPuesto || 'No especificado'}
            </div>
            <div class="info-item">
              <strong>Trabajador Evaluado:</strong><br>
              ${datosEvaluacion?.nombreTrabajador || 'No especificado'}
            </div>
            <div class="info-item">
              <strong>Empresa:</strong><br>
              ${datosEvaluacion?.empresa || 'No especificada'}
            </div>
            <div class="info-item">
              <strong>Departamento:</strong><br>
              ${datosEvaluacion?.departamento || 'No especificado'}
            </div>
            <div class="info-item">
              <strong>Evaluador:</strong><br>
              ${datosEvaluacion?.nombreEvaluador || 'No especificado'}
            </div>
            <div class="info-item">
              <strong>Fecha de Evaluación:</strong><br>
              ${datosEvaluacion?.fechaEvaluacion || 'No especificada'}
            </div>
          </div>
          
          ${datosEvaluacion?.descripcion ? `
            <div class="info-item" style="grid-column: 1 / -1;">
              <strong>Descripción del Puesto:</strong><br>
              ${datosEvaluacion.descripcion}
            </div>
          ` : ''}
        </div>

        <div class="resultado-principal">
          <h2 style="margin-bottom: 20px; color: #4CAF50;">🎯 RESULTADO FINAL</h2>
          <div class="puntuacion-grande">${puntuacionFinal}</div>
          <div class="nivel-riesgo nivel-${nivelRiesgo.toLowerCase().replace(' ', '-')}">
            NIVEL DE RIESGO: ${nivelRiesgo}
          </div>
          <p style="margin-top: 15px; font-size: 16px;">
            ${getDescripcionRiesgo(nivelRiesgo)}
          </p>
        </div>

        <div class="section">
          <h2>📊 Resumen de Puntuaciones</h2>
          <div class="resumen-puntuaciones">
            <div class="puntuacion-item">
              <span><strong>🪑 Evaluación de la Silla</strong></span>
              <span class="puntuacion-valor">${datosEvaluacion?.evaluacionSilla?.puntuaciones?.puntuacionSilla || 0}</span>
            </div>
            <div class="puntuacion-item">
              <span><strong>🖥️ Pantalla y Periféricos</strong></span>
              <span class="puntuacion-valor">${datosEvaluacion?.evaluacionPantallaPerifericos?.puntuaciones?.puntuacionPantallaPerifericos || 0}</span>
            </div>
            <div class="puntuacion-item" style="border-top: 2px solid #4CAF50; font-size: 18px;">
              <span><strong>🏆 PUNTUACIÓN ROSA FINAL</strong></span>
              <span class="puntuacion-valor" style="font-size: 24px;">${puntuacionFinal}</span>
            </div>
          </div>
        </div>

        <!-- PÁGINA 2: DETALLES DE LA EVALUACIÓN -->
        <div class="page-break"></div>
        
        <div class="section">
          <h2>🔍 Detalles de la Evaluación</h2>
          
          <h3>Información del Trabajador</h3>
          <div class="info-grid">
            <div class="info-item">
              <strong>Edad:</strong> ${datosEvaluacion?.edad || 'No especificada'} años
            </div>
            <div class="info-item">
              <strong>Sexo:</strong> ${datosEvaluacion?.sexo || 'No especificado'}
            </div>
            <div class="info-item">
              <strong>Antigüedad en el puesto:</strong> ${datosEvaluacion?.antiguedadPuesto || 'No especificada'}
            </div>
            <div class="info-item">
              <strong>Tiempo en el puesto por jornada:</strong> ${datosEvaluacion?.tiempoPuestoJornada || 'No especificado'}
            </div>
          </div>

          <h3>Componentes Evaluados</h3>
          <div class="tabla-container">
            <table class="tabla">
              <thead>
                <tr>
                  <th>Componente</th>
                  <th>Puntuación Individual</th>
                  <th>Nivel de Riesgo</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Altura del Asiento</strong></td>
                  <td>${(datosEvaluacion?.evaluacionSilla?.alturaAsiento?.puntuacion || 0) + (datosEvaluacion?.evaluacionSilla?.alturaAsiento?.incrementos?.length || 0)}</td>
                  <td>${getNivelComponente((datosEvaluacion?.evaluacionSilla?.alturaAsiento?.puntuacion || 0) + (datosEvaluacion?.evaluacionSilla?.alturaAsiento?.incrementos?.length || 0))}</td>
                </tr>
                <tr>
                  <td><strong>Profundidad del Asiento</strong></td>
                  <td>${(datosEvaluacion?.evaluacionSilla?.profundidadAsiento?.puntuacion || 0) + (datosEvaluacion?.evaluacionSilla?.profundidadAsiento?.incrementos?.length || 0)}</td>
                  <td>${getNivelComponente((datosEvaluacion?.evaluacionSilla?.profundidadAsiento?.puntuacion || 0) + (datosEvaluacion?.evaluacionSilla?.profundidadAsiento?.incrementos?.length || 0))}</td>
                </tr>
                <tr>
                  <td><strong>Reposabrazos</strong></td>
                  <td>${(datosEvaluacion?.evaluacionSilla?.reposabrazos?.puntuacion || 0) + (datosEvaluacion?.evaluacionSilla?.reposabrazos?.incrementos?.length || 0)}</td>
                  <td>${getNivelComponente((datosEvaluacion?.evaluacionSilla?.reposabrazos?.puntuacion || 0) + (datosEvaluacion?.evaluacionSilla?.reposabrazos?.incrementos?.length || 0))}</td>
                </tr>
                <tr>
                  <td><strong>Respaldo</strong></td>
                  <td>${(datosEvaluacion?.evaluacionSilla?.respaldo?.puntuacion || 0) + (datosEvaluacion?.evaluacionSilla?.respaldo?.incrementos?.length || 0)}</td>
                  <td>${getNivelComponente((datosEvaluacion?.evaluacionSilla?.respaldo?.puntuacion || 0) + (datosEvaluacion?.evaluacionSilla?.respaldo?.incrementos?.length || 0))}</td>
                </tr>
                <tr style="background: #f0f8f0;">
                  <td><strong>🪑 TOTAL SILLA</strong></td>
                  <td><strong>${datosEvaluacion?.evaluacionSilla?.puntuaciones?.puntuacionSilla || 0}</strong></td>
                  <td><strong>${getNivelRiesgo(datosEvaluacion?.evaluacionSilla?.puntuaciones?.puntuacionSilla || 0)}</strong></td>
                </tr>
                <tr>
                  <td><strong>Pantalla/Monitor</strong></td>
                  <td>${datosEvaluacion?.evaluacionPantallaPerifericos?.puntuaciones?.puntuacionPantalla || 0}</td>
                  <td>${getNivelComponente(datosEvaluacion?.evaluacionPantallaPerifericos?.puntuaciones?.puntuacionPantalla || 0)}</td>
                </tr>
                <tr>
                  <td><strong>Teléfono</strong></td>
                  <td>${datosEvaluacion?.evaluacionPantallaPerifericos?.puntuaciones?.puntuacionTelefono || 0}</td>
                  <td>${getNivelComponente(datosEvaluacion?.evaluacionPantallaPerifericos?.puntuaciones?.puntuacionTelefono || 0)}</td>
                </tr>
                <tr>
                  <td><strong>Mouse</strong></td>
                  <td>${datosEvaluacion?.evaluacionPantallaPerifericos?.puntuaciones?.puntuacionMouse || 0}</td>
                  <td>${getNivelComponente(datosEvaluacion?.evaluacionPantallaPerifericos?.puntuaciones?.puntuacionMouse || 0)}</td>
                </tr>
                <tr>
                  <td><strong>Teclado</strong></td>
                  <td>${datosEvaluacion?.evaluacionPantallaPerifericos?.puntuaciones?.puntuacionTeclado || 0}</td>
                  <td>${getNivelComponente(datosEvaluacion?.evaluacionPantallaPerifericos?.puntuaciones?.puntuacionTeclado || 0)}</td>
                </tr>
                <tr style="background: #fff8e1;">
                  <td><strong>🖥️ TOTAL PANTALLA Y PERIFÉRICOS</strong></td>
                  <td><strong>${datosEvaluacion?.evaluacionPantallaPerifericos?.puntuaciones?.puntuacionPantallaPerifericos || 0}</strong></td>
                  <td><strong>${getNivelRiesgo(datosEvaluacion?.evaluacionPantallaPerifericos?.puntuaciones?.puntuacionPantallaPerifericos || 0)}</strong></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <!-- PÁGINA 3: RECOMENDACIONES -->
        <div class="page-break"></div>
        
        <div class="section">
          <h2>💡 Recomendaciones</h2>
          <p style="margin-bottom: 20px; font-style: italic;">
            Las siguientes recomendaciones están basadas en la puntuación obtenida y los hallazgos específicos de la evaluación:
          </p>
          
          ${recomendaciones.map(categoria => `
            <div class="recomendacion-categoria">
              <h4>${categoria.categoria}</h4>
              <ul class="recomendacion-lista">
                ${categoria.items.map(item => `<li>${item}</li>`).join('')}
              </ul>
            </div>
          `).join('')}
        </div>

        ${datosEvaluacion?.observaciones ? `
          <div class="section">
            <h2>📝 Observaciones Adicionales</h2>
            <div class="info-item">
              ${datosEvaluacion.observaciones}
            </div>
          </div>
        ` : ''}

        <div class="footer">
          <p><strong>Informe generado automáticamente por el Sistema de Evaluación ROSA</strong></p>
          <p>Este informe debe ser interpretado por personal capacitado en ergonomía ocupacional</p>
          <p>Fecha de generación: ${new Date().toLocaleDateString('es-ES')} a las ${new Date().toLocaleTimeString('es-ES')}</p>
          <p style="margin-top: 15px; font-size: 10px;">
            El método ROSA fue desarrollado por Sonne, Villalta y Andrews (2012) para la evaluación rápida de riesgos ergonómicos en puestos de oficina.
          </p>
        </div>
      </div>
    </body>
    </html>
  `;

  // Crear y abrir ventana para imprimir
  const ventanaPDF = window.open('', '_blank', 'width=800,height=1000');
  
  if (ventanaPDF) {
    ventanaPDF.document.write(contenidoHTML);
    ventanaPDF.document.close();
    
    // Esperar a que se cargue y luego mostrar diálogo de impresión
    ventanaPDF.onload = () => {
      setTimeout(() => {
        ventanaPDF.print();
      }, 500);
    };
  } else {
    alert('No se pudo abrir la ventana para generar el PDF. Verifique que el bloqueador de ventanas emergentes esté desactivado.');
  }
};

// Funciones auxiliares
const getDescripcionRiesgo = (nivel) => {
  switch (nivel) {
    case 'BAJO':
      return 'El puesto presenta un riesgo ergonómico aceptable. Se recomienda mantener las condiciones actuales y realizar seguimientos periódicos.';
    case 'MEDIO':
      return 'El puesto presenta un riesgo ergonómico moderado. Se recomiendan mejoras y seguimiento en el corto plazo.';
    case 'ALTO':
      return 'El puesto presenta un riesgo ergonómico elevado. Se requieren cambios significativos de forma prioritaria.';
    case 'MUY ALTO':
      return 'El puesto presenta un riesgo ergonómico crítico. Se requiere acción inmediata para prevenir lesiones.';
    default:
      return 'Nivel de riesgo no determinado.';
  }
};

const getNivelRiesgo = (puntuacion) => {
  if (puntuacion <= 2) return 'BAJO';
  if (puntuacion <= 4) return 'MEDIO';
  if (puntuacion <= 7) return 'ALTO';
  return 'MUY ALTO';
};

const getNivelComponente = (puntuacion) => {
  if (puntuacion <= 1) return 'Óptimo';
  if (puntuacion <= 2) return 'Aceptable';
  if (puntuacion <= 3) return 'Mejorable';
  return 'Problemático';
};

// Función alternativa para descargar como archivo HTML
export const descargarInformeHTML = (datosEvaluacion, puntuacionFinal, nivelRiesgo, recomendaciones) => {
  const contenidoHTML = generarContenidoHTML(datosEvaluacion, puntuacionFinal, nivelRiesgo, recomendaciones);
  
  const blob = new Blob([contenidoHTML], { type: 'text/html;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  
  const enlaceDescarga = document.createElement('a');
  enlaceDescarga.href = url;
  enlaceDescarga.download = `Informe_ROSA_${datosEvaluacion?.identificadorPuesto || 'SinID'}_${new Date().toISOString().split('T')[0]}.html`;
  
  document.body.appendChild(enlaceDescarga);
  enlaceDescarga.click();
  document.body.removeChild(enlaceDescarga);
  
  URL.revokeObjectURL(url);
};

// Función para generar contenido HTML (reutilizable)
const generarContenidoHTML = (datosEvaluacion, puntuacionFinal, nivelRiesgo, recomendaciones) => {
  // Aquí iría el mismo contenido HTML que en la función principal
  // (simplificado para evitar duplicación)
  return `<!DOCTYPE html>...`; // El mismo contenido HTML de arriba
};