var arreglo=["hola","cosa",1,2,3,true];
var numeros=0;
var palabras=0;
var booleanos=0;
function listar_tipo(arreglito){
    for(let i=0;i<6;i++){
        if(typeof(arreglito[i])=== 'number'){
            numeros++;
        }
        if(typeof(arreglito[i])==='string'){
            palabras++;
       }
       if(typeof(arreglito[i])==='boolean'){
           booleanos++;
       }
    }
    console.log("el total de numeros es: " + numeros);
    console.log("el total de palabras es: " + palabras);
    console.log("el total de booleanos es: " + booleanos);
    
}