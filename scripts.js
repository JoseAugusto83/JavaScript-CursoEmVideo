function carregar(){
    var msg = window.document.getElementById("texto");

    var imagem = window.document.getElementById('imagem');

    var corFundo = window.document.querySelector("body");

    var data = new Date();
    var hora = data.getHours(); 
    var minutos = data.getMinutes();

    msg.innerHTML = `Agora são ${hora}:${minutos} horas`

    if(hora >= 0 && hora <12){
        imagem.src = "https://st2.depositphotos.com/1324256/7595/i/600/depositphotos_75953121-stock-photo-early-morning-sky-scene.jpg";
        
        corFundo.style.backgroundColor = "white";
    
    }else if( hora >= 12 && hora < 18){
        imagem.src = "https://images.pexels.com/photos/2386144/pexels-photo-2386144.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500";
        
        corFundo.style.backgroundColor = 'brown';
    
    }else{
        imagem.src = "https://cdn.pixabay.com/photo/2020/05/27/15/55/sky-5227770_960_720.jpg"

        corFundo.style.backgroundColor = 'black';

        imagem.classList.toggle("visivel")
    }
    

}




