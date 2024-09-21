$(document).ready(function() {
    $("#news-slider").owlCarousel({
        loop: true,
        infinte:true,
        rewindNav:true,
        rewindSpeed: 0 ,
        items : 3,
        itemsDesktop:[1199,3],
        itemsDesktopSmall:[980,2],
        itemsMobile : [600,1],
        navigation:true,
        navigationText:["",""],
        pagination:true,
        autoPlay:true,
       
        
    });
});

