// Generar un número aleatorio entre 1 y 10
const numeroSecreto = Math.floor(Math.random() * 10) + 1;

// Función para adivinar el número
function adivinarNumero(intentos) {
  for (let i = 1; i <= intentos; i++) {
    const intento = parseInt(prompt('Intenta adivinar el número (entre 1 y 10):'));

    if (intento === numeroSecreto) {
      console.log(`¡Correcto! Has adivinado el número en ${i} intento(s).`);
      return;
    } else {
      const distancia = Math.abs(numeroSecreto - intento);
      console.log(`Incorrecto. Estás ${distancia} unidades de distancia del número secreto.`);
    }
  }

  console.log(`Agotaste tus ${intentos} intentos. El número secreto era ${numeroSecreto}.`);
}

// Iniciar el simulador
adivinarNumero(3);