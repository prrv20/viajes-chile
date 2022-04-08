
      /*var nav = document.querySelector('nav');

      window.addEventListener('scroll', function () {
        if (window.scrollY > 500) {
          nav.classList.add('bg-secondary', 'shadow');
          
        } else {
          nav.classList.remove('bg-secondary', 'shadow');
        }
      });*/
     /* $(window).scroll(){
          if($("#menu").offset().top > 500){
              $("#menu").addClass("bg-success");
          } else {
            $("#menu").addRemove("bg-success");
          }
      }*/
      $(window).scroll(function(){

        if($("#menu").offset().top > 500){
            $("#menu").removeClass("bg-transparent")
            $("#menu").addClass("bg-secondary", "shadow")
           //$("#menu").addClass("color-menu", "shadow")
        }else{
      
          $("#menu").removeClass("bg-secondary", "shadow")
      
        }
      
      })

     
    