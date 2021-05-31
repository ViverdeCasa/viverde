
const aparecer = () =>{  
    document.getElementById('object').style.display = 'block'
}

const proximo = (pg) =>{
    document.getElementById(`overlay${pg}`).style.display='none'
    document.getElementById(`overlay${pg + 1}`).style.display='block'

}

const voltar = (pg) =>{
    document.getElementById(`overlay${pg}`).style.display='none'
    document.getElementById(`overlay${pg - 1}`).style.display='block'
    
}
function video () {
    document.getElementById("overlayVideo").style.display = "block";
    document.getElementById("overlay1").style.display = "none";
    
}
const enviar = ()=>{
   alert(`Sua solicitação foi enviada com sucesso! Respondemos em torno de 72 horas via email!`); 
} 

const fechar = ()=>{
    document.getElementById('object').style.display = 'none';
}