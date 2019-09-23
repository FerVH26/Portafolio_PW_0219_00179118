
var palabrita = 'anona';

function frasePalindromo(palabra){
    vuelta=palabra.split("").reverse().toString();
 
  for (var i = 0; i < ((vuelta.length)-1); i++) {
    vuelta=vuelta.replace(",","");
  };
  if(palabra==vuelta){
    resultado="es un Palindromo";
  }
  else{
    resultado="no es un Palindromo";
  }
  console.log("Tu frase "+resultado);
}
