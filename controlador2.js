//1.Almaceno la info general de los productos
let consolas={
    nombres:Array("PS5","Xbox Serie x","Nintendo Switch"),
    precios:Array(750,700,409),
    pesos:Array(14.2,13.1,4.75)
}

//2.Calcular costo casillero
function calcularCostoCasillero(pesoConsola,cantidad){
   
    let costoCasillero=0;
    let pesoTotalEnvio=pesoConsola*cantidad;
    
    if(pesoTotalEnvio<=20){

        costoCasillero=85;
    
    }else{// Me paso del peso

       let pesoExtra=pesoTotalEnvio-20;
       costoCasillero=85+(pesoExtra*2);
    }
    return costoCasillero;

}
//3.Calcular costo de impuesto
function calcularCostoImpuesto(costoConsola,cantidad){
    
 const IMPUESTO=114;
 const SEGURO=7;

  let costoCompra=costoConsola*cantidad;
  let costoTotal=costoCompra+IMPUESTO+SEGURO;

return costoTotal;
}
//4.convertir dolares a pesos
function convertir(precioDolares){

    const TRM=3932;
    let precioPesos=precioDolares*TRM;

    return precioPesos;
}