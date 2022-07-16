
const descripUno = document.getElementById("descrip__uno")
const descripDos = document.getElementById("descrip__dos")
const divImg = document.getElementById("imgs")

let indiceImg = 1;
const img = ["assets/IMG/fertilizantes.png","assets/IMG/trigo.png", "assets/IMG/machine-paisaje.jpg"];
divImg.src = img[0]
window.addEventListener('load', () => {  
    
    setInterval (()=>{
        divImg.src = img[(indiceImg <= 2) ? indiceImg++ : indiceImg = 0 ];                
        descripUno.classList.toggle("descrip_hidden")
        descripDos.classList.toggle("descrip_hidden")
    },3000)

    /*function cambiarImg() {
       
    }*/
})
