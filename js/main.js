$(document).ready(function(){
    $("img.splash").mouseover(function(){
        $(this).attr('src',"imgs/tatum.jpg");
        $(this).css("margin" , "auto");
    });

    $("img.splash").mouseout(function(){
        $(this).attr('src',"imgs/nametag.jpg");
    });



    $("img.splash").click(function(){
        var names=prompt("What is your Name?");
        if (names == "jeff" || names == "Jeff"){
            alert("My name is Jeff!");
            alert("My name is Jeff!");
            alert("My name is Jeff!");
            $('div.welcome').hide();
            $('div.landing').removeClass('hide');

        }else {
            alert(names+" is not your Name");
            alert("Please enter your actual name");
        }
    });


});