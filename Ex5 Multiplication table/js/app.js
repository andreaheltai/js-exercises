$(document).ready(onLoad)

function onLoad() {
    $('#return').click(result);    
}

function result () {
   var list1 = $('input[name="val1"]').val();
   if (checkTextExists(list1) == false || checkIfNumber(list1) == false) {
     $("#output").html('Please add a numeric value in the field above.');
   } 
   else if (parseInt(list1) < 0 || parseInt(list1) > 12) {
     $("#output").html('The number value needs to be between 0 and 12.');
   } 
   else {
     $("#output").html(multiplicationTable(parseInt(list1)));
   }
}

function checkTextExists(any) {
//Checks field not to be empty and returns boolean
    return any !== '';
}

function checkIfNumber(any) {
//Checks if field contains a number
    return !isNaN(parseInt(any));
}

function multiplicationTable (any) {
    var text = 'The multiplication table for number ' + any + ' is: <br/>';
    for (var i=0; i<=any; i++) {
        text = text + any + ' x ' + i + ' = ' + any*i + '<br/>';
    }
    return text;
}