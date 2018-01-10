$(document).ready(onLoad);

function onLoad(){
    $('input[type="button"]').click(greet);
}

function checkValueIsNotNull (name) {
    return name!=='';
};

function greet(){
    var fName = $('input[type="text"]').val();
    if (checkValueIsNotNull(fName)) {
        var boldName = fName.bold();
        $('#output').html('Welcome, ' + boldName + ', it\'s so nice to meet you!');
    } else {
        var boldStranger = 'stranger'.bold();
        $('#output').html('Why, surely you must have a name, ' + boldStranger + '!');
    };
}