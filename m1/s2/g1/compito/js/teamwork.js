var nome = prompt("come ti chiami?");




if (isNaN(nome)) {
  document.getElementById("text").innerHTML =
    '<h1>Inserito con successo!</h1>';

} else {
  document.getElementById("text").innerHTML =
    '<h1>Inserire delle lettere i numeri non sono ammessi!</h1>';

}


