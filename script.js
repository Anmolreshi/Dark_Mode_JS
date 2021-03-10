var toggle=false;
$('.box').click(function() {
    if(toggle==false){
    $('body').css("background","black");
    $('h1').css("color","white");
    }
    else
        {
             $('body').css("background","white"); 
             $('h1').css("color","black");
        }
     toggle=!toggle;   
});
