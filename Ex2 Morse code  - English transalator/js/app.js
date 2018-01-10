document.addEventListener("DOMContentLoaded", onLoad);
var Chars = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','0','1','2','3','4','5','6','7','8','9','.',',','?','/',' '];
var Mors = ['.-','-...','-.-.','-..','.','..-.','--.','....','..','.---','-.-','.-..','--','-.','---','.--.','--.-','.-.','...','-','..-','...-','.--','-..-','-.--','--..','-----','.----','..---','...--','....-','.....','-....','--...','---..','----.','.-.-.-','--..--','..--..','-..-.','   '];

function onLoad() {
    document.getElementById('En-Mo').addEventListener('click', englishMorse);    
    document.getElementById('Mo-En').addEventListener("click", morseEnglish);    
}

function checkTextExists (any) {
//Checks field to translate not to be empty and returns boolean
    return any !== '';
}

function splitString (arr, spl) {
//Separates string in an array of multiple strings based on the spl parameter and returns array
    return arr.split(spl);
}

function checkElementInArray (element, arr) {
//Checks if a given element is is a given array and returns its position
    var vals = arr;
    var i=0;
    for (val of vals) {
        if (element == val) {
            return i;
        }
        i++;
    }
}

function translate (element, splitSeparator, letterSeparator, languageToConvert, languageTranslation) {
//Returns string translation
    var letters = splitString(element, splitSeparator);
    var result = '';
    for (each of letters) {
        var position = checkElementInArray(each, languageToConvert);
        if (position !== undefined) {
            result = result + languageTranslation[position] + letterSeparator;
        } 
    }
    return result;
}

function englishMorse() {
    var enText = document.getElementById("en").value.toLowerCase();
    if (checkTextExists(enText) == false) {
        return document.getElementById("res1").innerHTML = 'Please add text in English';
    } else {
        var finalText = translate(enText, '', ' ', Chars, Mors);
        }
    document.getElementById("res1").innerHTML = finalText;
}

function morseEnglish() {
    var moText = document.getElementById("mo").value;
    if (checkTextExists(moText) == false) {
        return document.getElementById("res2").innerHTML = 'Please add text in Morse';
    } else {
        var finalText = '';
        var morseWords = splitString(moText,'   ');
        console.log(morseWords);
        for (each of morseWords) {
            finalText = finalText + translate(each, ' ', '', Mors, Chars) + ' '; 
            }
        }
    document.getElementById("res2").innerHTML = finalText;
}
