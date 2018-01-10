$(document).ready(onLoad)

function onLoad() {
    $('#new').click(addInput);   
    $('#return').click(finalValue);
}

function addInput() {
  var container = $(".inputs")[0];
  container.append(createInput());
}

function createInput() {
  var inputNumber = $(".values").length;
  inputNumber++; 
  var input = document.createElement("input");
    input.className = "values";
    input.type = "number";
    input.name = "val" + inputNumber;
    input.placeholder = "Value " + inputNumber;
    return input;
}

function finalValue () {
   var valuesList = createValuesArray();
   if (valuesList. length < 1) {
       $("#output").html('Add at least 2 numbers to perform an operation')
   } 
   else {
       $("#output").html('The largest element is: ' + comparison(valuesList) + '.');
   }
}

function checkIfNumber(any) {
    return !isNaN(parseInt(any));
}

function createValuesArray() {
    var inputs = $(".values");
    var numbersList = [];
    var i=0;
    for (var input of inputs) {
        if (input.value !==''&& !isNaN(Number(input.value))) {
            numbersList.push(Number(input.value));
            i++;
        }
    }
    return numbersList;
}

function comparison (arr) {
    var result = null;
    for (var i=0; i < arr.length; i++) {
        if (arr[i] > result) {
            result = arr[i];
        }
    }
    return result;
}