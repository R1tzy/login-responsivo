const marcar = document.getElementById('lembrar')

marcar.addEventListener('click', checar)

var estado = marcar.checked

function checar(){
    if(estado == false){
        estado = true
    }
    else{
        estado = false
        marcar.checked = estado
    }
    
}

