let valor = document.getElementById('valor')
const aumentar = document.getElementById('aumentar')
const disminuir = document.getElementById('disminuir')

var contador = 0

aumentar.addEventListener('click', () => {
    if(true){
        contador += 1;
        //console.log(contador);
        valor.innerHTML = contador
    }
})

disminuir.addEventListener('click', () => {
    if(true){
        contador -= 1;
        //console.log(contador);
        valor.innerHTML = contador
    }
})

console.log(contador);