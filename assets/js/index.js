let precio = 400000
const precioSpan = document.querySelector(".precio-inicial")
precioSpan.innerHTML = precio

let cantidad = document.querySelector(".cantidad")
let valorTotal = document.querySelector(".valor-total")

const btnMas = document.querySelector("#botonMas")
const btnMenos = document.querySelector("#botonMenos")

btnMas.onclick = function(){
    cantidad.innerHTML++
    valorTotal.innerHTML = cantidad.innerHTML*precio
}

btnMenos.onclick = function(){
    if(cantidad.innerHTML==0){
        cantidad.innerHTML=0
    }
    else{
        cantidad.innerHTML--
    }
    valorTotal.innerHTML = cantidad.innerHTML*precio
}