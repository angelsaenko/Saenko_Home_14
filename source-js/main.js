$(window).load(function() {
    $('.flexslider').flexslider({
        animation: "slide",
        animationLoop: false,
        itemWidth:282 ,
        itemMargin: 4,

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