$(document).ready(function(){
    $('.sidenav').sidenav(); 
    $(".dropdown-trigger").dropdown({hover: false} );
    
    var swiper = new Swiper(".mySwiper", {
        breakpoints:{
            0:{
                slidesPerView: 3,
            },
            750:{
                slidesPerView: 4,
                spaceBetween:0,
            },
            1100:{
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

})

