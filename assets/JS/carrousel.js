const carrusel = document.querySelector(".carrousel-items");

let interval = null;
let maxScrollLeft = carrusel.scrollWidth - carrusel.clientWidth;// obtiene el mazimo del scroll 
let step = 1;

const start = () => {
    interval = setInterval (function (){
        carrusel.scrollLeft += step;
        if(carrusel.scrollLeft === maxScrollLeft) {
            step *= -1; //cambia de pos a negativo
        }else if (carrusel.scrollLeft === 0) {
            step = step * -1;
        }
    },10);
};

const stop = () => {
    clearInterval(interval);
};

carrusel.addEventListener('mouseover', ()=>{
    stop()
})

carrusel.addEventListener('mouseout', ()=>{
    start()
})
start()