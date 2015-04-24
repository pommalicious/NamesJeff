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

$('.carousel').carousel({
    interval: 350
});

$( "#date" ).datepicker();




$(".validate").click(function(){
    var $modal = $(".modal-body");

    if(! $modal.find("#InputName").val()){
        alert("Please enter a name.")
    }else if (! $modal.find("#InputEmail").val()){
        alert("Please enter an email")
    }else if (! $modal.find("#date").val() && ! $modal.find("#sendnow").is(":checked")){
        console.log($modal.find("#date").val());
        console.log(1);
        alert("Choose a date to share Jeff. Or check box to send immediately")
    }else {

    }

});

