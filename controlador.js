//traigo una etiqueta del html
let titulo=document.getElementById("titulo")
console.log(titulo)

//CONTROLANDO ETIQUETAS
//1. CAMBIAR EL TEXTO DE UNA ETIQUETA
//SOLO APLICA H1---,P,A
titulo.textContent="CHAO"

//2. CAMBIAR LA IMAGEN (O LA FUENTE )
let foto=document.getElementById("foto")
foto.src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Escudo_de_Atl%C3%A9tico_Nacional.png"

//3.AGREGANDO ESTILOS
titulo.classList.add("letra")

//4. DETECTANDO EVENTOS
let boton=document.getElementById("boton")
boton.addEventListener("click",function(){
    console.log("hice clic")
})