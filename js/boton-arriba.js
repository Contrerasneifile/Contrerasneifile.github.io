

function irArriba(pxPantalla){
    window.addEventListener('scroll', () => {
        var scroll = document.documentElement.scrollTop;
        var botonArriba = document.getElementById('scroll-arriba')

        // Si el scroll > 350px entonces se muestra el botón
        if(scroll > pxPantalla) {
            botonArriba.style.opacity=0.8;
            botonArriba.style.transform='scale(1)';
        }
        // En caso contrario, se oculta el botón
        else {
            botonArriba.style.opacity=0;
            botonArriba.style.transform='scale(0)';
        }
    })
}
irArriba(350);
window.addEventListener("scroll", function(){
 
    let color1=document.getElementById("cabecera");
    let Texto1=document.querySelectorAll("a[class='txtmenus']");
   
    if (window.scrollY>0){


        for(let i =0; i<Texto1.length; i++){

         Texto1[i].style.color="black";

        }

        color1.style.backgroundColor=" #FBF8F3"; 
        
        
        
    }
    else  {

        color1.style.backgroundColor="";
        for(let i =0; i<Texto1.length; i++){

            Texto1[i].style.color="#FBF8F3";
   
           }
        
    }
    
    
})


