// Seleccionar elementos del HTML
const screen = document.getElementById("escribe");
const numeros = document.querySelectorAll("#numero");
const operaciones = document.querySelectorAll("#operacion");
const borrar = document.getElementById("borra");
const resultado = document.getElementById("igual");

// Esto sirve para recorrer el array completo y al hacer click el valor se agrega al screen (es para los numeros)
for (let i = 0; i < numeros.length; i++) {
  numeros[i].addEventListener("click", function() {
    screen.value += this.value;
  });
}

// Esto sirve para recorrer el array completo y al hacer click el valor se agrega al screen (es para las operaciones)
for (let i = 0; i < operaciones.length; i++){
  operaciones[i].addEventListener("click", function(){
    screen.value += this.value;
  })
}

// Este evento sirve para limpiar la pantalla cuando le demos al boton de limpiar
borrar.addEventListener("click", () => {
  screen.value = "";
});

// Este evento sirve para calcular el resultado final al darle al "="
resultado.addEventListener("click", function() {
  const escrito = screen.value;
  if (escrito) {
    const resultado = eval(escrito);
    screen.value = resultado;
  }
});