$(document).ready(onLoad);
var secretNumber = 18;
var validTries = 0;
var previousGuess = null;

function onLoad() {
    $('#return').click(checkGuess);    
}

function checkGuess () {
    var userNumber = parseInt($('input[name="val1"]').val());
    if (checkIfNumber(userNumber) == false) {
        $('#output').html('Please add a numeric value in the field above.');
    } else {
        if (compareNumbers(userNumber, previousGuess) !== '=') {
        validTries++;
        console.log('User\'s guess is: ' + userNumber + ' , previous guess is: ' + previousGuess + ' and valid tries including this one:' + validTries);
        previousGuess = userNumber;
        var a = compareNumbers(userNumber, secretNumber);
        switch (a) {
            case '<':
                $('#output').html(userNumber + ' is <b> smaller </b> than the secret number. Try again:)');
                break;
            case '>':
                $('#output').html(userNumber + ' is <b> larger </b> than the secret number. Try again:)');
                break;
            case '=':
                $('#output').html('Congratulations! You guessed the secret number, which was: ' + userNumber + ' with <b>' + validTries + '</b> valid tries.');
                previousGuess = null;
                validTries = 0;
                break;
        }   
        }
        
    }
    
}

function checkIfNumber(any) {
    return !isNaN(any);
}

function compareNumbers(guess, actual) {
    if (guess < actual) {
        console.log (guess + ' < than ' + actual);
        return '<';
    } else if (guess > actual) {
        console.log (guess + ' > than ' + actual);
        return '>';
    } else if (guess == actual) {
        console.log (guess + ' = ' + actual);
        return '=';
    } else {
        console.log (guess + ' considered neither < > = with ' + actual);
        return;
    }    
}
