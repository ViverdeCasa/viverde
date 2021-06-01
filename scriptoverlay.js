
const aparecer = () =>{  
    document.getElementById('object').style.display = 'block'
}
const click = () =>{  
    document.getElementById('nav-link').style.display = 'active'
}

var file;
var textContent; 

function nova(){
file = document.getElementById("arquivo");
console.log(file); 
file.addEventListener('change', function() {
          
    var fr =new FileReader();
    fr.onload=function(){
        textContent = fr.result;
    }
      
    fr.readAsText(this.files[0]);

})
}

const proximo = (pg) =>{
    document.getElementById(`overlay${pg}`).style.display='none'
    document.getElementById(`overlay${pg + 1}`).style.display='block'

    //alert(file.split("\\").pop());
    let opc = document.getElementsByName("op");
    for(let i =0 ; i < opc.length ; i++){
        if(opc[i].checked){
        opc = opc[i].value;
        }
    }   
    const Pedido = Parse.Object.extend("Pedido");    
    var cliente = new Pedido();

    cliente.save({
    medida : document.getElementById("medida").value,
    arquivo : new Parse.File(file.value.split("\\").pop(), { base64: btoa(textContent) }),
    op :  opc   
    }).then(function(response) {
        alert('New object create with success! ObjectId: ' + response.id);
    }).catch(function(error) {
        alert('Error: ' + error.message);
    });
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
   alert(`Sua solicitaÃ§Ã£o foi enviada com sucesso! Respondemos em torno de 72 horas via email!`); 
} 

const fechar = ()=>{
    document.getElementById('object').style.display = 'none';
}
