$(document).ready(function(){
    var date = new Date();
    var currentHour = date.getHours();
    var currentMinute = date.getMinutes();

    var day = date.getDay();

    switch(day){
        case 1:
            day = "Monday";
            monday();
        break;
        case 2:
            day = "Tuesday";
            // $('#infoBar').each(function(){
            //     $('#infoBar h1').text("Sorry, didn't work");
            // });
            monday();
        break;
        case 3:
            day = "Wednesday";
        break;
        case 4:
            day = "Thursday";
        break;
        case 5:
            day = "Friday";
        break;
        case 6:
            day = "Saturday";
        break;
        case 7:
            day = "Sunday";
        break;
        default:
            day = day;
    }

    function monday(){ 

    if(currentHour == 11 && currentMinute >=30 || currentHour == 12 && currentMinute < 30){
        $("#infoBar").ready(function(){
            $("#infoBar h1").text("OBJECT ORIENTED SYSTEM ANALYSIS AND DESIGN");
            $("#infoBar h2").text("Room: 2290");
        });
    }

    else if(currentHour == 12 && currentMinute >= 30 || currentHour == 13 && currentMinute < 30){
        $("#infoBar").each(function(){
            $("#infoBar h1").text("object oriented system analysis and design");
            $("#infoBar h2").text("Room: 2290");
        });
    }

    else if(currentHour == 13 && currentMinute >= 30 || currentHour == 14 && currentMinute < 30){
        $("#infoBar").each(function(){
            $("#infoBar h1").text("object oriented system analysis and design");
            $("#infoBar h2").text("Room: 2290");
        });
    }

    else if(currentHour == 14 && currrentMinute >=30 || currentHour == 15 && currentMinute < 30){
        $("#infoBar").each(function(){
            $("#infoBar h1").text(" ");
        })

    }

    else if(currentHour == 19 && currentMinute > 21 ){
        $("#infoBar").each(function(){
            $("#infoBar h1").text("object oriented system analysis and design");
            $("#infoBar h2").text("Room: 2209");
        });
    }

    else{
        $("#infoBar").each(function(){
            $("#infoBar h1").text("No class at the moment");
        });
    }
}

// else{
//     $('#infoBar').each(function(){
//         $('#infoBar h1').text("DIDNT WORK")
//     });
//}

});