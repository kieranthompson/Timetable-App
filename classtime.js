$(document).ready(function(){
    var date = new Date();
    var currentHour = date.getHours();
    var currentMinute = date.getMinutes();

    var day = date.getDay();

    switch(day){
        case 1:
            monday();
            $("#infoBar #currentDay").text("Today is Monday, the " + date.getDate() + " of the " + date.getMonth());
        break;
        case 2:
            tuesday();
            $("#infoBar #currentDay").text("Today is Tuesday, the " + date.getDate() + " of the " + date.getMonth());
        break;
        case 3:
            wednesday();
            $("#infoBar #currentDay").text("Today is Wednesday, the " + date.getDate() + " of the " + date.getMonth());
        break;
        case 4:
            thursday();
            $("#infoBar #currentDay").text("Today is Thursday, the " + date.getDate() + " of the " + date.getMonth());
        break;
        case 5:
            friday();
            $("#infoBar #currentDay").text("Today is Friday, the " + date.getDate() + " of the " + date.getMonth());
        break;
        case 6:
            day = "Saturday";
            $("#infoBar #currentDay").text("Today is Saturday, the " + date.getDate() + " of the " + date.getMonth());
        break;
        case 7:
            day = "Sunday";
            $("#infoBar #currentDay").text("Today is Sunday, the " + date.getDate() + " of the " + date.getMonth());
        break;
        default:
            day = day;
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

    if(currentHour == 11 && currentMinute >=30 || currentHour == 12 && currentMinute < 30){
            $("#infoBar h1").text("Integrated Web Development");
            $("#infoBar h2").text("Room: 2290");
        
    }

    if(currentHour == 12 && currentMinute >=30 || currentHour == 13 && currentMinute < 30){
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

    else if(currentHour == 19 && currentMinute > 21 ){
            $("#infoBar h1").text("Object Oriented System Analysis and Design");
            $("#infoBar h2").text("Room: 2209");
        
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

    else if(currentHour == 19 && currentMinute > 21 ){
            $("#infoBar h1").text("Object Oriented System Analysis and Design");
            $("#infoBar h2").text("Room: 2209");
        
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

    else if(currentHour == 19 && currentMinute > 21 ){
            $("#infoBar h1").text("Object Oriented System Analysis and Design");
            $("#infoBar h2").text("Room: 2209");
        
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

    else if(currentHour == 19 && currentMinute > 21 ){
            $("#infoBar h1").text("Object Oriented System Analysis and Design");
            $("#infoBar h2").text("Room: 2209");
        
    }

    else{
            $("#infoBar h1").text("No class at the moment");
        
    }
}
});