$(document).ready(function() {
    $('#guess_field').keyup(function (){
        $('#clear-button').prop('disabled', this.value == "" ? true : false);
        $('#reset-button').prop('disabled', this.value == "" ? true : false);
    })
});

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

// creates a random_number on page load so that when someone presses guess button the random number stays the same
var random_number = Math.floor(Math.random() * 100)

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

function ValidateInput() {
    var input = parseInt(document.getElementById("guess_field").value);
    if (input < 1 || input > 100)
    alert("Error: Number must be between 1-100.");
    return;
}

function DisplayResponse() {
    var input = parseInt(document.getElementById("guess_field").value);
    if (input > 1 && input < 100) {
        DisplayGuessText(); 
        DisplayGuess(); 
        DisplayEvaluation();
    }
    else {
        ValidateInput();
    }
}

// function enable_buttons() {
//     document.getElementById("clear-button").disabled = false;
//     document.getElementById("reset-button").disabled = false;
// }