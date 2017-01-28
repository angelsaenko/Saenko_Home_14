$(window).load(function() {
    $('#slider1').flexslider({
        animation: "slide",
        animationLoop: false,
        itemWidth: 282 ,
        itemMargin: 5,
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


$(window).load(function() {
    $('#slider2').flexslider({
        animation: "slide",
        animationLoop: false,
        itemWidth: 162,
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


$(window).load(function() {
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



