$( ".dropdown" ).hover(
    function() {
         $(this).children('.submenu').stop().slideDown(200);
    },
    function(){
        $(this).children('.submenu').stop().slideUp(200);
    }
);