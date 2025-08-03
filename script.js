// 1. NÚMEROS PRIMOS
function ejecutarPrimos() {
    const desde = parseInt(document.getElementById('primoDesde').value);
    const hasta = parseInt(document.getElementById('primoHasta').value);
    const resultadoDiv = document.getElementById('resultadoPrimos');

    if (isNaN(desde) || isNaN(hasta) || desde < 0 || hasta < 0) {
        resultadoDiv.innerHTML = '<span style="color: #ff6b6b;">Error: Ingresa números válidos y positivos.</span>';
        return;
    }
    if (desde > hasta) {
        resultadoDiv.innerHTML = '<span style="color: #ff6b6b;">Error: El número "desde" no puede ser mayor que "hasta".</span>';
        return;
    }

    const esPrimo = num => {
        if (num <= 1) return false;
        for (let i = 2; i * i <= num; i++) if (num % i === 0) return false;
        return true;
    };

    let primos = [];
    for (let i = desde; i <= hasta; i++) if (esPrimo(i)) primos.push(i);
    
    resultadoDiv.innerHTML = primos.length > 0 ? 
        `<span style="color: #54a0ff;">Primos encontrados:</span><br>${primos.join(', ')}` : 
        `<span style="color: #ffc107;">No se encontraron primos en ese rango.</span>`;
}

// 2. SERIE FIBONACCI
function ejecutarFibonacci() {
    const limite = parseInt(document.getElementById('fibonacciLimite').value);
    const resultadoDiv = document.getElementById('resultadoFibonacci');

    if (isNaN(limite) || limite < 0) {
        resultadoDiv.innerHTML = '<span style="color: #ff6b6b;">Error: Ingresa un número válido y positivo.</span>';
        return;
    }

    let secuencia = [0, 1];
    if (limite === 0) secuencia = [0];
    else {
        while (secuencia[secuencia.length - 1] + secuencia[secuencia.length - 2] <= limite) {
            secuencia.push(secuencia[secuencia.length - 1] + secuencia[secuencia.length - 2]);
        }
    }
    resultadoDiv.innerHTML = `<span style="color: #ffc107;">Serie:</span><br>${secuencia.join(', ')}`;
}

// 3. CÁLCULO DE IMC (FUNCIÓN COMPLETA)
function ejecutarIMC() {
    const pesoLibras = parseFloat(document.getElementById('pesoLibras').value);
    const alturaMetros = parseFloat(document.getElementById('alturaMetros').value);
    const resultadoDiv = document.getElementById('resultadoIMC');
    
    if (isNaN(pesoLibras) || isNaN(alturaMetros) || pesoLibras <= 0 || alturaMetros <= 0) {
        resultadoDiv.innerHTML = '<span style="color: #ff6b6b;">Error: Ingresa valores válidos y mayores a cero.</span>';
        return;
    }

    const pesoKg = pesoLibras * 0.453592;
    const imc = pesoKg / (alturaMetros * alturaMetros);
    let categoria;

    if (imc < 18.5) categoria = 'Bajo peso';
    else if (imc < 25) categoria = 'Peso normal';
    else if (imc < 30) categoria = 'Sobrepeso';
    else categoria = 'Obesidad';

    resultadoDiv.innerHTML = `<span style="color: #2ecc71;">IMC: ${imc.toFixed(2)}</span><br>Clasificación: <strong>${categoria}</strong>`;
}

// 4. PALABRA PALÍNDROMA (FUNCIÓN COMPLETA)
function ejecutarPalindromo() {
    const texto = document.getElementById('palabraPalindromo').value;
    const resultadoDiv = document.getElementById('resultadoPalindromo');

    if (!texto || !texto.trim()) {
        resultadoDiv.innerHTML = '<span style="color: #ff6b6b;">Error: Ingresa una palabra o frase.</span>';
        return;
    }
    
    const textoLimpio = texto.toLowerCase().replace(/[\W_]/g, '');
    if (textoLimpio.length === 0) {
        resultadoDiv.innerHTML = '<span style="color: #ff6b6b;">Error: El texto no contiene caracteres alfanuméricos.</span>';
        return;
    }
    const textoInvertido = textoLimpio.split('').reverse().join('');
    
    if (textoLimpio === textoInvertido) {
        resultadoDiv.innerHTML = `¡<span style="color: #e84393;">"${texto}"</span> es un palíndromo!`;
    } else {
        resultadoDiv.innerHTML = `"<span style="color: #fd79a8;">${texto}"</span> no es un palíndromo.`;
    }
}