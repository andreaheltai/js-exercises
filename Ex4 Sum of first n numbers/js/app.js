$(document).ready(onLoad)

function onLoad() {
    $('#return').click(result);    
}

function result () {
   var value = $('input[name="val1"]').val();
   if (checkIfNumber(value) == false || parseInt(value)<=0) {
     $("#output").html('Please add a numeric value higher than 0');
   } else {
     var toNum = parseInt(value);
     var result = (toNum*(toNum+1))/2;
     $("#output").html('After adding the first '+ toNum + ' natural numbers, the result is: ' + result);
   }
}

function checkIfNumber(any) {
    return !isNaN(parseInt(any));
}