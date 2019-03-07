$(document).ready(function() {
    $('#guess_field').keyup(function (){
        $('#clear-button').prop('disabled', this.value == "" ? true : false);
        $('#reset-button').prop('disabled', this.value == "" ? true : false);
    })
    $('#minimum_field, #maximum_field').keyup(function () {
        $('#range-button').prop('disabled', this.value == "" ? true : false);
    })
});

var random_number;
var min_value;
var max_value;

function DisplayGuess() {
    var number = document.getElementById('guess_field').value;
    document.getElementById('number-result').innerHTML = number;
}

function DisplayGuessText() {
    document.getElementById('previous-guess-text').innerHTML = "Your last guess was";
}

function ClearInput() {
    document.getElementById("guess_field").value = "";
}

function DisplayEvaluation() {
    var guessed_number = Number(document.getElementById('guess_field').value);
    var output = 'BOOM!';
    if (guessed_number > random_number) {
            output = 'That is too high!';
        }
    else if (guessed_number < random_number) {
            output = 'That is too low!';
        }
    document.getElementById("evaluation").innerHTML = output;
}

function ValidateInput(min_value, max_value) {
    var input = parseInt(document.getElementById("guess_field").value);
    if (input < min_value || input > max_value)
    alert("Error: Number must be in your specified range.");
    return;
}

function DisplayResponse() {
    var input = parseInt(document.getElementById("guess_field").value);
    if (input > min_value - 1 && input < max_value + 1) {
        DisplayGuessText(); 
        DisplayGuess(); 
        DisplayEvaluation();
    }
    else {
        ValidateInput(min_value, max_value);
    }
}

function RespondtoRange() {
    min_value = document.getElementById('minimum_field').value
    max_value = document.getElementById('maximum_field').value
    // creates a random_number on range button click so that when someone presses guess button,
    //  the random number stays the same and can be passed to all functions.
    random_number = Math.floor(Math.random() * max_value)
    var output = (`Random Number Generated. Guess what it is, from ${Number(min_value)} to ${Number(max_value)}`);
    if (min_value > max_value) {
        output = "Error: Your range is invalid. Please try again.";
    }
    
    document.getElementById("range-text").innerHTML = output;
}