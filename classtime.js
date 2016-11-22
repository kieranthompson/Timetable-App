$(document).ready(function(){
    var date = new Date();
    var currentHour = date.getHours();
    var currentMinute = date.getMinutes();

    if((currentHour == 11 && currentMinute >= 30) || (currentHour = 12 && currentMinute < 30)){
        $("#infoBar").each(function(){
            $("#infoBar h1").text("YEAH BOI");
            $("#infoBar h2").text("Room: 2290");
        });
    }

    else if((currentHour == 12 && currentMinute >= 30) || (currentHour = 13 && currentMinute < 30)){
        $("#infoBar").each(function(){
            $("#infoBar h1").text("YEAH BOI");
            $("#infoBar h2").text("Room: 2290");
        });
    }

    else if((currentHour == 13 && currentMinute >= 30) || (currentHour == 14 && currentMinute < 30)){
        $("#infobar").each(function(){
            $("#infoBar h1").text("YEAH BOI");
            $("#infoBar h2").text("Room: 2290");
        });
    }

    else if((currentHour == 14 && currrentMinute >=30) || (currentHour == 15 && currentMinute < 30)){
        $("#infoBar").each(function(){
            $("#infoBar h1").text(" Yeah BOI ");
        });
    }

    else if(currentHour == 19 && currentMinute < 51){
        $("#infoBar").each(function(){
            $("#infoBar h1").text("YEAH BOI")
        });
    }

    else {
        $("#infoBar").each(function(){
            $("#infoBar h1").text("No class at the moment");
        });
    }


});