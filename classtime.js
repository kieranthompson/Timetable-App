$(document).ready(function(){
    // window.setInterval (
    //     function ()
    //     {
    //         //alert ('yow');
    //     },
    //     2500
    // );
    var date = new Date();
    var currentHour = date.getHours();
    var currentMinute = date.getMinutes();

    var day = date.getDay();
    var month = date.getMonth() + 1;

            

    var dateEnd = "";
    var monthEnd = "";

    if(date == 1 || date == 21 || date == 31){
        dateEnd = "st";
    }

    else if(date == 2 || date == 22 ){
        dateEnd = "nd";

    }

    else if(date == 3 || date == 23){
        dateEnd = "rd";
    }

    else {
        dateEnd = "th";
    }

    if(month == 1){
        monthEnd = "st";
    }

    else if(month == 2){
        monthEnd = "nd";
    }

    else if(month == 3){
        monthEnd = "rd";
    }

    else{
        monthEnd = "th";
    }
    setDay(day, true);

    $('.btnDay').click
    (
        function (e)
        {
            e.preventDefault();
            setDay($(this).val());
        }
    
    );


function setDay(day, onLoad)
{
    $(".monday").hide();
            $(".tuesday").hide();
            $(".wednesday").hide();
            $(".thursday").hide();
            $(".friday").hide();
day = parseInt(day);
    switch(day){
        case 1:
            if (onLoad)
                {monday();
                $("#infoBar #currentDay").text("Today is Monday, the " + date.getDate() + dateEnd + " of the " + month + monthEnd)
                }
            $(".monday").show();
            break;
        case 2:
            tuesday();
            if (onLoad) $("#infoBar #currentDay").text("Today is Tuesday, the " + date.getDate() + dateEnd + " of the " + month + monthEnd);
            $(".tuesday").show();
        break;
        case 3:
            wednesday();
            if (onLoad) $("#infoBar #currentDay").text("Today is Wednesday, the " + date.getDate() + dateEnd + " of the " + month + monthEnd);
            $(".wednesday").show();
        break;
        case 4:
            thursday();
            if (onLoad) $("#infoBar #currentDay").text("Today is Thursday, the " + date.getDate() +  dateEnd + " of the " + month + monthEnd);
            $(".thursday").show();
        break;
        case 5:
            friday();
            if (onLoad) $("#infoBar #currentDay").text("Today is Friday, the " + date.getDate() + dateEnd + " of the " + month + monthEnd);
            $(".friday").show();
        break;
        case 6:
            day = "Saturday";
            if (onLoad) $("#infoBar #currentDay").text("Today is Saturday, the " + date.getDate() + dateEnd + " of the " + month + monthEnd);
        break;
        case 7:
            day = "Sunday";
            if (onLoad) $("#infoBar #currentDay").text("Today is Sunday, the " + date.getDate() + dateEnd + " of the " + month + monthEnd);
        break;
    }

    function monday(){ 

    if(currentHour == 9 && currentMinute >=30 || currentHour == 10 && currentMinute < 30){
            $("#infoBar h1").text("Object Oriented System Analysis and Design");
            $("#infoBar h2").text("Room: 2290");
        
    }

    if(currentHour == 10 && currentMinute >=30 || currentHour == 11 && currentMinute < 30){
            $("#infoBar h1").text("Object Oriented System Analysis and Design");
            $("#infoBar h2").text("Room: 2290");
        
    }

    if(currentHour == 11 && currentMinute >=30 || currentHour == 12 && currentMinute < 30){
            $("#infoBar h1").text("Object Oriented System Analysis and Design");
            $("#infoBar h2").text("Room: 2290");
        
    }

    else if(currentHour == 12 && currentMinute >= 30 || currentHour == 13 && currentMinute < 30){
            $("#infoBar h1").text("Object Oriented System Analysis and Design");
            $("#infoBar h2").text("Room: 2290");
        
    }

    else if(currentHour == 13 && currentMinute >= 30 || currentHour == 14 && currentMinute < 30){
            $("#infoBar h1").text("Object Oriented System Analysis and Design");
            $("#infoBar h2").text("Room: 2290");
        
    }

    else if(currentHour == 14 && currrentMinute >=30 || currentHour == 15 && currentMinute < 30){
            $("#infoBar h1").text(" ");
        

    }

    else{
            $("#infoBar h1").text("No class at the moment");
        
    }
}

function tuesday(){

    if(currentHour == 9 && currentMinute >=30 || currentHour == 10 && currentMinute < 30){
            $("#infoBar h1").text("No Class");
            $("#infoBar h2").text("Room: 2290");
        
    }

    else if(currentHour == 10 && currentMinute >= 30 || currentHour == 11 && currentMinute < 30){
            $("#infoBar h1").text("Object Oriented System Analysis and Design");
            $("#infoBar h2").text("Room: 2290");
        
    }

    else if(currentHour == 11 && currentMinute >=30 || currentHour == 12 && currentMinute < 30){
            $("#infoBar h1").text("Integrated Web Development");
            $("#infoBar h2").text("Room: 2290");
        
    }

    else if(currentHour == 12 && currentMinute >=30 || currentHour == 13 && currentMinute < 30){
            $("#infoBar h1").text("Integrated Web Development");
            $("#infoBar h2").text("Room: 2290");
        
    }

    else if(currentHour == 13 && currentMinute >= 30 || currentHour == 14 && currentMinute < 30){
            $("#infoBar h1").text("No Class");
            $("#infoBar h2").text("Room: 2290");
        
    }

    else if(currentHour == 14 && currrentMinute >=30 || currentHour == 15 && currentMinute < 30){
            $("#infoBar h1").text(" ");
        

    }

    else{
            $("#infoBar h1").text("No class at the moment");
        
    }

}

function wednesday(){

    if(currentHour == 11 && currentMinute >=30 || currentHour == 12 && currentMinute < 30){
            $("#infoBar h1").text("Object Oriented System Analysis and Design");
            $("#infoBar h2").text("Room: 2290");
        
    }

    else if(currentHour == 12 && currentMinute >= 30 || currentHour == 13 && currentMinute < 30){
            $("#infoBar h1").text("Object Oriented System Analysis and Design");
            $("#infoBar h2").text("Room: 2290");
        
    }

    else if(currentHour == 13 && currentMinute >= 30 || currentHour == 14 && currentMinute < 30){
            $("#infoBar h1").text("Object Oriented System Analysis and Design");
            $("#infoBar h2").text("Room: 2290");
        
    }

    else if(currentHour == 14 && currrentMinute >=30 || currentHour == 15 && currentMinute < 30){
            $("#infoBar h1").text("Technical Writing ");
        

    }

    else if(currentHour == 15 && currentMinute >= 30 || currentHour == 16 && currentMinute < 30){
        $("#infoBar h1").text("Integrated Web Development");
    }

    else if(currentHour == 16 && currentMinute >= 30 || currentHour == 17 && currentMinute < 30){
        $("#infoBar h1").text("Integrated Web Development");
    }

    else{
            $("#infoBar h1").text("No class at the moment");
        
    }

}

function thursday(){
    if(currentHour == 11 && currentMinute >=30 || currentHour == 12 && currentMinute < 30){
            $("#infoBar h1").text("Object Oriented System Analysis and Design");
            $("#infoBar h2").text("Room: 2290");
        
    }

    else if(currentHour == 12 && currentMinute >= 30 || currentHour == 13 && currentMinute < 30){
            $("#infoBar h1").text("Object Oriented System Analysis and Design");
            $("#infoBar h2").text("Room: 2290");
        
    }

    else if(currentHour == 13 && currentMinute >= 30 || currentHour == 14 && currentMinute < 30){
            $("#infoBar h1").text("Object Oriented System Analysis and Design");
            $("#infoBar h2").text("Room: 2290");
        
    }

    else if(currentHour == 14 && currrentMinute >=30 || currentHour == 15 && currentMinute < 30){
            $("#infoBar h1").text(" ");
        

    }

    else{
            $("#infoBar h1").text("No class at the moment");
        
    }

}


function friday(){
    if(currentHour == 11 && currentMinute >=30 || currentHour == 12 && currentMinute < 30){
            $("#infoBar h1").text("Object Oriented System Analysis and Design");
            $("#infoBar h2").text("Room: 2290");
        
    }

    else if(currentHour == 12 && currentMinute >= 30 || currentHour == 13 && currentMinute < 30){
            $("#infoBar h1").text("Object Oriented System Analysis and Design");
            $("#infoBar h2").text("Room: 2290");
        
    }

    else if(currentHour == 13 && currentMinute >= 30 || currentHour == 14 && currentMinute < 30){
            $("#infoBar h1").text("Object Oriented System Analysis and Design");
            $("#infoBar h2").text("Room: 2290");
        
    }

    else if(currentHour == 14 && currrentMinute >=30 || currentHour == 15 && currentMinute < 30){
            $("#infoBar h1").text(" ");
        

    }

    else{
            $("#infoBar h1").text("No class at the moment");
        
    }
}
}
});