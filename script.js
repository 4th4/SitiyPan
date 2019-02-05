function visit(){
    var width = $(window).width();
    if(width > 425){
        $('html,body').animate({
            scrollTop: 687
        });
    }else{
        $('html,body').animate({
            scrollTop: 670
        });
    }
    //alert("Width is " + width);
};
