$(document).ready(onLoad)

function onLoad() {
    $('#return').click(result);    
}

function result () {
   var list1 = $('input[name="val1"]').val();
   if (checkListExists(list1) == false) {
     $("#output").html('Please add a list in the field above.');
   } else if (list1.length<2) {
     $("#output").html('The list has no elements on odd positions.');
   } else {
     $("#output").html('The elements on odd positions in the list are: ' + oddElements(list1));
   }
}

function checkListExists(any) {
//Checks field not to be empty and returns boolean
    return any !== '';
}

function oddElements (any) {
    var text = '';
    for (var i=1; i<any.length; i=i+2) {
        var text = text + '\''+ any[i] + '\'' + ', ';
    }
    return text;
}