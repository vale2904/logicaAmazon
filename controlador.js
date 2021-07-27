//1.necesito almacenar el precio en dolares de
//ps5-xbox seriex-nintendo switch

let preciosConsolas=Array(750,700,409);

//2.almacenar la cantidad de consolas
let cantidad=1;

//3.calcular el costo del casillero
let pesosConsolas=Array(14.2,13.1,4.75);
let pesoTotal=pesosConsolas[0]*cantidad;

let costoCasillero=0;

if(pesoTotal>=10 && pesoTotal<=20){

costoCasillero=85;
}else{

let diferenciaPeso=pesoTotal-20;
costoCasillero=85+(diferenciaPeso*2);
}
//4.costos envio+impuestos
const IMPUESTO=114;
const SEGURO=7;

//5.calculo el costo final del envio
let costoTotal=(preciosConsolas[0]*cantidad)+costoCasillero+IMPUESTO+SEGURO;

console.log(costoTotal);
