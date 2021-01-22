$(document).ready(function(){
    var len = $(".btns li").length;
    var i = 1;
    var isDone = true;

    $("#bg").on("mousewheel", function(e){
        if(isDone){
            isDone = false;
            if(e.originalEvent.deltaY > 0){
                //wheel down
                ( i >= len ) ? i = len : i++;            
            }else {
                //wheel up
                ( i <= 1 ) ?  i=1: i--;               
            }
            activation(i);
        }        
    });
    function activation(i){
        $("#frame").removeClass().addClass("r"+i);    
            $(".btns li, #circle ul li").removeClass("on");
            $(".btns li").eq(i-1).addClass("on");
            $("#circle ul li").eq(i-1).addClass("on");

            setTimeout(function(){
                isDone = true;
            },600);
    }
});