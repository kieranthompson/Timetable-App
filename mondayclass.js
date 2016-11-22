$(document).ready(function(){
    var date = new Date();
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    var days = days[date.getDay() ];
    var currentHour = date.getHours();
    var currentMinute = date.getMinutes();

    if(days = 'Tuesday'){
        $("#infobar").each(function(){
            $("#infobar h1").text("ITS TUESDAY");
        });
    }

    if((currentHour = 11 && currentMinute >= 30) || (currentHour = 12 && currentMinute < 30)){
        $("#infoBar").each(function(){
            $("#infoBar h1").text("Object Oriented System Analysis and Design");
            $("#infobar h2").text("Room: 2290")
        });
    }

    else if((currentHour = 12 && currentMinute >= 30) || (currentHour = 13 && currentMinute < 30)){
        $("#infoBar").each(function(){
            $("#infoBar h1").text("Object Oriented System Analysis and Design");
            $("#infobar h2").text("Room: 2290")
        });
    }

    else if((currentHour = 13 && currentMinute >= 30) || (currentHour = 14 && currentMinute < 30)){
        $("#infobar").each(function(){
            $("#infobar h1").text("Object Oriented System Analysis and Design");
            $("#infobar h2").text("Room: 2290");
        });
    }

    else if((currentHour = 14 && currrentMinute >=30) || (currentHour = 15 && currentMinute < 30)){
        $("#infobar").each(function(){
            $("#infobar h1").text("")
        })

    }

    else{
        $("#infoBar").each(function(){
            $("#infobar h1").text("No class at the moment");
        });
    }

});