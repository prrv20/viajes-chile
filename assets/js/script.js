/*Código para quitar la Transparencia al Navbar al hacer Scroll*/

      $(window).scroll(function(){

        if($("#menu").offset().top > 500){
            $("#menu").removeClass("bg-transparent")
            $("#menu").addClass("bg-secondary", "shadow")
           //$("#menu").addClass("color-menu", "shadow")
        }else{
      
          $("#menu").removeClass("bg-secondary", "shadow")
      
        }
      
      })

     
    