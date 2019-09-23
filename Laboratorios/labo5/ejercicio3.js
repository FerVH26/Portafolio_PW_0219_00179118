var arreglito=[1,1,2,2,3,4,5,6,6];
var numero=3;
var cont=0;
function encontrar(arreglo, num){
    for(let i=0;i<arreglo.length;i++){
        if(num==arreglo[i]){
            cont++;
        }
    }
    console.log(cont);
}