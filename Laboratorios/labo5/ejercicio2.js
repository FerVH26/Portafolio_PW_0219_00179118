var arreglito=[4,3,2];
var suma=0;
var prom=0;
function suma_prom(arreglo){
    for(let i=0;i<arreglo.length;i++){
        suma+=arreglito[i];
        prom=suma/arreglito.length;
    }
    console.log(suma);
    console.log(prom);
}