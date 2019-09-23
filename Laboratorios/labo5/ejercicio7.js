function fibonacci(numero)

{
    var primero = 0;
    var segundo = 1;
    var siguiente;
    console.log(primero+"");
    console.log(segundo+"");
    for(var i=3; i <= numero;i++)
    {
        siguiente = primero + segundo;
        primero = segundo;
        segundo = siguiente;
        console.log(siguiente+"");
    }
}