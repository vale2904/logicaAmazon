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
//1.obtener costo producto
let pesoPS5=consolas.pesos[0];
let cantidad=1;
let costoCasillero=calcularCostoCasillero(pesoPS5,cantidad);

//2.obtener costo prducto+impuestos
let precioPS5=consolas.precios[0];
let costoProductoImpuestos=calcularCostoImpuesto(pesoPS5,cantidad);

//3.obtener el total de la compra
let totalCompra=costoCasillero+costoProductoImpuestos;
console.log(`El costo total de la compra fue de: $${totalCompra} USD`);

//4.obtener el total de la compra en pesos
let totalPesos=convertir(totalCompra);
console.log(`El costo total de la compra en pesos fue de: $${totalPesos} COP`);