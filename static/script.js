var cities = ["Москва", "Санкт-Петербург", "Казань", "Владивосток", "Астрахань", "Ростов-на-Дону", "Волгоград", "Новосибирск", "Краснодар", "Красноярск"];

function getInputValueForm(){
    //Getting values from inputs with cities 
    var inputVal_from = document.getElementById("from_input").value;
    var inputVal_to = document.getElementById("to_input").value;

    var mistakes_ammount = 0;

    //Checking if the name of the city is in the list
    if(cities.indexOf(inputVal_from) == -1){
        document.getElementById("from_input").style.border = "2px solid #A71B10";
        document.getElementById("from_input").style.boxShadow = "0px 0px 20px rgba(191, 39, 27, 0.62)";
        document.getElementById("from_input").style.color = '#A71B10';
        document.getElementById("incorrect_from").style.visibility = "visible";
        mistakes_ammount += 1;        
    } else {
        document.getElementById("from_input").style.border = "";
        document.getElementById("from_input").style.boxShadow = "";
        document.getElementById("from_input").style.color = '';
        document.getElementById("incorrect_from").style.visibility = "hidden";
    }
    
    if(cities.indexOf(inputVal_to) == -1){
        document.getElementById("to_input").style.border = "2px solid #A71B10";
        document.getElementById("to_input").style.boxShadow = "0px 0px 20px rgba(191, 39, 27, 0.62)";
        document.getElementById("to_input").style.color = '#A71B10';
        document.getElementById("incorrect_to").style.visibility = "visible";
        mistakes_ammount += 1;
    } else {
        document.getElementById("to_input").style.border = "";
        document.getElementById("to_input").style.boxShadow = "";
        document.getElementById("to_input").style.color = '';
        document.getElementById("incorrect_to").style.visibility = "hidden";
    }
    //Getting values from the inputs with parametrs
    var inputValLength = document.getElementById("input_length").value;
    var inputValWidth = document.getElementById("input_width").value;
    var inputValHeight = document.getElementById("input_height").value;
    var inputValWeight = document.getElementById("input_weight").value;
    var inputValAmmount = document.getElementById("input_ammount").value;

    //Checking if the params are integers and they are not empty
    if(!((Number.isInteger(Number(inputValLength)))) || inputValLength == ""){
        document.getElementById("input_length").style.boxShadow = "0px 0px 20px rgba(191, 39, 27, 0.62)";
        document.getElementById("input_length").style.color = '#A71B10';
        document.getElementById("input_length").style.border = "2px solid #A71B10";
        mistakes_ammount += 1;
    } else {
        document.getElementById("input_length").style.boxShadow = "";
        document.getElementById("input_length").style.color = '';
        document.getElementById("input_length").style.border = "";
    }

    if(!((Number.isInteger(Number(inputValWidth)))) || inputValWidth == ""){
        document.getElementById("input_width").style.boxShadow = "0px 0px 20px rgba(191, 39, 27, 0.62)";
        document.getElementById("input_width").style.color = '#A71B10';
        document.getElementById("input_width").style.border = "2px solid #A71B10";
        mistakes_ammount += 1;
    } else {
        document.getElementById("input_width").style.boxShadow = "";
        document.getElementById("input_width").style.color = '';
        document.getElementById("input_width").style.border = "";
    }

    if(!((Number.isInteger(Number(inputValWeight)))) || inputValWeight == ""){
        document.getElementById("input_weight").style.boxShadow = "0px 0px 20px rgba(191, 39, 27, 0.62)";
        document.getElementById("input_weight").style.color = '#A71B10';
        document.getElementById("input_weight").style.border = "2px solid #A71B10";
        mistakes_ammount += 1;
    } else {
        document.getElementById("input_weight").style.boxShadow = "";
        document.getElementById("input_weight").style.color = '';
        document.getElementById("input_weight").style.border = ""
    }

    if(!((Number.isInteger(Number(inputValHeight)))) || inputValHeight == ""){
        document.getElementById("input_height").style.boxShadow = "0px 0px 20px rgba(191, 39, 27, 0.62)";
        document.getElementById("input_height").style.color = '#A71B10';
        document.getElementById("input_height").style.border = "2px solid #A71B10";
        mistakes_ammount += 1;
    } else {
        document.getElementById("input_height").style.boxShadow = "";
        document.getElementById("input_height").style.color = '';
        document.getElementById("input_height").style.border = "";
    }

    if(!((Number.isInteger(Number(inputValAmmount)))) || inputValAmmount == ""){
        document.getElementById("input_ammount").style.boxShadow = "0px 0px 20px rgba(191, 39, 27, 0.62)";
        document.getElementById("input_ammount").style.color = '#A71B10';
        document.getElementById("input_ammount").style.border = "2px solid #A71B10";
        mistakes_ammount += 1;
    } else {
        document.getElementById("input_ammount").style.boxShadow = "";
        document.getElementById("input_ammount").style.color = '';
        document.getElementById("input_ammount").style.border = "";
    }
      
    //If there are no mistakes in inputs we send the values of the form to the server
    if(mistakes_ammount == 0){
        let paramsSum = Number(inputValLength) + Number(inputValWidth) + Number(inputValWeight) + Number(inputValHeight) + Number(inputValAmmount);
            jQuery.ajax({
               type: 'POST',
               data: {"sum": paramsSum},
               success: function (resp) {
                    alert(resp);
                },
                error: function (xhr, str) {
                }
            });

    }

  }
  //Changing the image on the button when mouse is on the button and when not 
function onHover()
{
    $("#button_more_img").attr('src', 'templates/icon_2.png');
}

function offHover()
{
    $("#button_more_img").attr('src', 'templates/icon.png');
}
