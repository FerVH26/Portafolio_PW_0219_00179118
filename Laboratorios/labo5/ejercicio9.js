var radio = prompt("ingrese el radio",number);
function calcRadio(radio){
    if(radio>=0){
        console.log("el radio es"+Math.PI*(Math.pow(radio,2)));
    }
    else{
        console.log("no se puede calcular un radio negativo")
    }
    
}