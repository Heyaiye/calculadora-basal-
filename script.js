const CALCULAR = document.getElementById('calcular');
const ERROR = document.getElementById('error');
const FLU = document.getElementById('flu');
const MAN = document.getElementById('man');
const PESO_LIMITE_HOLLIDAY = 30;
const PESO_LIMITE_SUPERFICIE = 30;

CALCULAR.addEventListener('click', eventoBoton);

function eventoBoton() {
    let peso = document.getElementById('peso').valueAsNumber;
    if (peso <= PESO_LIMITE_HOLLIDAY) {
        calcularFlujoHollidaySegar(peso);
    } else {
        let resultadoSuperficie = calcularFlujoSuperficie(peso);
       FLU.innerHTML = `Resultado 1: ${resultadoSuperficie[0]}`;
        MAN.innerHTML = `Resultado 2: ${resultadoSuperficie[1]}`;
    }
}

function calcularFlujoHollidaySegar(peso) {
  
    let flujo = 0;
    if (peso <= 10) {
        flujo = peso * 100;
    } else if (peso <= 20 && peso > 10) {
        flujo = 1000 + (peso - 10) * 50;
    } else {
        flujo = 1500 + (peso - 20) * 20;
        return(flujo)
    }

}
function superficie(valor) {
    let resultado1= (((valor*4)+7)/(valor+90))*1500
    let resultado2= (((valor*4)+7)/(valor+90))*2000

    return [resultado1,resultado2];
}