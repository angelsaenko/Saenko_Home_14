$(document).ready(function() {
    $('#slider1').flexslider({
        animation: "slide",
        animationLoop: false,
        itemWidth: 262 ,
        itemMargin: 30,
        move: 1,
        loop:true,
        margin:10,
        minItems: 1,
        maxItems: 4,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            886:{
                items:2,
                nav:false
            },
            1000:{
                items:4,
                nav:true,
                loop:false
            }
        }
    });

    $('#slider2').flexslider({
        animation: "slide",
        animationLoop: false,
        itemWidth: 162,
        itemMargin: 30,
        move: 1,

        loop:true,

        margin:10,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            600:{
                items:2,
                nav:false
            },
            886:{
                items:3,
                nav:false
            },
            1000:{
                items:4,
                nav:true,
                loop:false
            }
        }
   });

 $('#slider3').flexslider({
        animation: "slide",
        animationLoop: false,
        itemWidth: 749,
        itemMargin: 3,
        move: 1,

        loop:true,

        margin:10,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            600:{
                items:2,
                nav:false
            },
            886:{
                items:3,
                nav:false
            },
            1000:{
                items:4,
                nav:true,
                loop:false
            }
        }
    });

});
