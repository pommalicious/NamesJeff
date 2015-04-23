$(document).ready(function(){

    var $splash = $("img.splash");
    var $welcome = $('div.welcome');
    var $landing = $('div.landing');
    var $hovercraft = $(".hovercraft");
    var $namewrite = $(".hovercraft>p");


    $splash.mouseover(function(){
        $(this).attr('src',"imgs/tatum.jpg");
        $(this).css("margin" , "auto");
    });

    $splash.mouseout(function(){
        $(this).attr('src',"imgs/nametag.jpg");
    });

    $splash.click(function(){
        var names=prompt("What is your Name?");

            $(this).attr('src',"imgs/nametag.jpg");
        if (names == "jeff" || names == "Jeff"){
            $namewrite.text("JEFF!!!");
            $hovercraft.animate({left: "-=70%"},1500,function(){
                alert("My name is Jeff!");
                alert("My name is Jeff!");
                alert("My name is Jeff!");
                $welcome.fadeOut(1000,function(){
                    $landing.removeClass("hide");
                });
            });

        }else {
            if(! names){
                names="Casper"
            }
            $namewrite.text(names);
            $hovercraft.animate({left: "-=70%"},1500,function(){
                alert(names+" is not your Name");
                alert("Please enter your actual name");
                $hovercraft.css("left","101.5%")
            });

        }
    });


});