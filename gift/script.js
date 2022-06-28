$(document).ready(function(){
    $('.sidenav').sidenav({draggable:false}); 
    $(".dropdown-trigger").dropdown({hover: false} );
    $('.collapsible').collapsible();
    $('.cartSidenav').sidenav({edge:"right",draggable:false});
    
    var swiper = new Swiper(".mySwiper", {
        breakpoints:{
            0:{
                slidesPerView: 1,
            },
            350:{
                slidesPerView:2
            },
            630:{
                slidesPerView:3
            },
            750:{
                slidesPerView: 4,
                spaceBetween:0,
            },
            1110:{
                slidesPerView: 5,
            },
        },
        slidesPerGroup: 1,
        loop: true,
        loopFillGroupWithBlank: true,
        
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      });
      $(window).resize(function(){
        if(window.innerWidth < 600){
            $('.AddBtn').text('Add');
        }  
      })


})

