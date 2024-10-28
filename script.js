document.getElementById('financeForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Obtener valores ingresados
    const cajaInicial = parseFloat(document.getElementById('cajaInicial').value);
    
    const efectivoRecibido1 = parseFloat(document.getElementById('efectivoRecibido1').value) || 0;
    const efectivoRecibido2 = parseFloat(document.getElementById('efectivoRecibido2').value) || 0;
    const efectivoRecibido3 = parseFloat(document.getElementById('efectivoRecibido3').value) || 0;

    const full = parseFloat(document.getElementById('full').value) || 0;

    const bPichinchaIngreso = parseFloat(document.getElementById('bPichinchaIngreso').value) || 0;
    const bGuayaquilAIngreso = parseFloat(document.getElementById('bGuayaquilAIngreso').value) || 0;
    const bGuayaquilRIngreso = parseFloat(document.getElementById('bGuayaquilRIngreso').value) || 0;

    const bPichinchaEgreso = parseFloat(document.getElementById('bPichinchaEgreso').value) || 0;
    const bGuayaquilAEgreso = parseFloat(document.getElementById('bGuayaquilAEgreso').value) || 0;
    const bGuayaquilREgreso = parseFloat(document.getElementById('bGuayaquilREgreso').value) || 0;

    const entregas = parseFloat(document.getElementById('entregas').value);
    
    const comisionFull = parseFloat(document.getElementById('comisionFull').value);

    const billetes5 = parseFloat(document.getElementById('billetes5').value) || 0;
    const monedas1 = parseFloat(document.getElementById('monedas1').value) || 0;
    const monedas50 = parseFloat(document.getElementById('monedas50').value) || 0;
    const monedas25 = parseFloat(document.getElementById('monedas25').value) || 0;
    const monedas10 = parseFloat(document.getElementById('monedas10').value) || 0;
    const monedas5 = parseFloat(document.getElementById('monedas5').value) || 0;
    const monedas1Centavo = parseFloat(document.getElementById('monedas1Centavo').value) || 0;

    
// Calcular ingresos
const ingresosTotales = cajaInicial + efectivoRecibido1 + efectivoRecibido2 + efectivoRecibido3 + full + bPichinchaIngreso + bGuayaquilAIngreso + bGuayaquilRIngreso;

// Calcular egresos
const egresosTotales = bPichinchaEgreso + bGuayaquilAEgreso + bGuayaquilREgreso + entregas;

// Calcular saldo antes de comisiones
const saldoAntesComision = ingresosTotales - egresosTotales;

// Calcular saldo final después de comisiones
const saldoFinalConComision = saldoAntesComision + comisionFull;

// Calcular efectivo disponible en caja final
const efectivoDisponible =
(billetes5 * 5) +
(monedas1 * 1) +
(monedas50 * 0.5) +
(monedas25 * 0.25) +
(monedas10 * 0.10) +
(monedas5 * 0.05) +
(monedas1Centavo * 0.01);

// Calcular diferencia entre efectivo disponible y saldo final
const diferencia = efectivoDisponible - saldoFinalConComision;

// Mostrar resultados
document.getElementById('resultado').innerText =
`Ingresos Totales: $${ingresosTotales.toFixed(2)}
Egresos Totales: $${egresosTotales.toFixed(2)}
Saldo Antes de Comisiones: $${saldoAntesComision.toFixed(2)}
Saldo Final con Comisiones: $${saldoFinalConComision.toFixed(2)}
Efectivo Disponible en Caja Final: $${efectivoDisponible.toFixed(2)}
Diferencia (Falta/Sobra): $${diferencia.toFixed(2)} (${diferencia >= 0 ? 'Sobra' : 'Falta'})`;
});