$(document).ready(onLoad)

function onLoad() {
    $('#return').click(result);    
}

function result () {
   var list1 = $('input[name="val1"]').val();
   var list2 = $('input[name="val2"]').val();
   if (checkListExists(list1) == false || checkListExists(list2) == false) {
     $("#output").html('Please fill out both fields');
   } else {
     $("#output").html('The combination of the two lists is: ' + createCombination(list1, list2));
   }
}

function checkListExists(any) {
//Checks field not to be empty and returns boolean
    return any !== '';
}

function arrayLength (a1, a2) {
//Checks which list is longer
    if (a1.length >= a2.length) {
        return a1.length;
    } else {
        return a2.length;
    }
}

function createCombination (l1, l2) {
    var ar1 = l1.split("");
    var ar2 = l2.split("");
    var maxLength = arrayLength(ar1, ar2);
    var res = '';
    var i = 0;
    var j = 0;
    for (var k=0; k < maxLength; k++)
        if (ar1[i] !== undefined && ar2[j] !== undefined) {
            res = res + ar1[i] + ar2[j];
                i++;
                j++;
        } else if (ar1[i] == undefined) {
            res = res + ar2[j];
            j++;
        } else {
            res = res + ar1[i];
            i++;
    }
    return res;
}