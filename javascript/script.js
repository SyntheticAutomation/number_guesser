// when the document loads
$(document).ready(function() {
    // when someone types in the guess field 
    $('#guess_field').keyup(function (){
        // enable the buttons
        $('#clear-button').prop('disabled', this.value == "" ? true : false);
        $('#reset-button').prop('disabled', this.value == "" ? true : false);
    })
    // when someone types in the max field
    $('#maximum_field').keyup(function () {
        // enable range button
        $('#range-button').prop('disabled', this.value == "" ? true : false);
    })
});

// declares variables to be defined later
var random_number;
var min_value;
var max_value;

function DisplayGuess() {
    // declares number variable as whatever the user put as their guess
    var number = document.getElementById('guess_field').value;
    // allows us to display their guess in a fancy format on the page
    document.getElementById('number-result').innerHTML = number;
}

function DisplayGuessText() {
    // Adds a string to the page output
    document.getElementById('previous-guess-text').innerHTML = "Your last guess was";
}

function ClearInput() {
    // empties the guess field
    document.getElementById("guess_field").value = "";
}

function DisplayEvaluation() {
    // declares two variables
    var guessed_number = Number(document.getElementById('guess_field').value);
    var output = 'BOOM!';
    // if their guess is higher than the randomly generated number, display a message saying it's too high and vice versa
    if (guessed_number > random_number) {
            output = 'That is too high!';
        }
    else if (guessed_number < random_number) {
            output = 'That is too low!';
        }
    document.getElementById("evaluation").innerHTML = output;
        // couldn't get this to work the way I want to.
        // its supposed to check if the user won, 
        // then on the front end, tell them the game got harder,
        //  and on the back end, increase the max and lower the min.
    if (output == 'BOOM!') {
        document.getElementById("number_change_warning").innerHTML = "Difficulty increased by 10. Try another guess";
        IncreaseDifficulty();
    };
}

function ValidateInput(min_value, max_value) {
    // declares the input variable as an integer
    var input = parseInt(document.getElementById("guess_field").value);
    // if user types in a value outside their specified range, it will error out.
    // not sure why, but this can be broken easily. no clue how to fix.
    if (input < min_value || input > max_value)
    alert("Error: Number must be in your specified range.");
    return;
}

function DisplayResponse() {
    // declares input variable as an integer
    var input = parseInt(document.getElementById("guess_field").value);
    // if its a valid guess, do all the things and vice versa
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
    // sets values to two variables as the user input range
    min_value = document.getElementById('minimum_field').value
    max_value = document.getElementById('maximum_field').value
    // creates a random_number on range button click so that when someone presses guess button,
    //  the random number stays the same and can be passed to all functions.
    random_number = Math.floor(Math.random() * max_value);
    // sets output variable with interpolation!
    var output = (`Random Number Generated. Guess what it is, from ${Number(min_value)} to ${Number(max_value)}`);
    // if the user is stupid as fuck and they put a maximum lower than a minimum, error out.
    if (min_value > max_value) {
        output = "Error: Your range is invalid. Please try again.";
    }
    // display output.
    document.getElementById("range-text").innerHTML = output;
}

function IncreaseDifficulty() {
    // set min value variable
    min_value = document.getElementById('minimum_field').value;
    // in the minimum value in the range is low, don't reduce it by 10.
    if (min_value > 10) {
        min_value = min_value - 10;
    }
    // adds 10 to the max_value on the backend - not sure if this is storing correctly
    max_value = document.getElementById('maximum_field').value + 10;
    // sets a new random_number - not sure if this works
    random_number = Math.floor(Math.random() * max_value);
    // sets msg variable like in respondtorange function above
    var msg = (`Random Number Generated. Guess what it is, from ${Number(min_value)} to ${Number(max_value)}`);
    if (min_value > max_value) {
        msg = "Error: Your range is invalid. Please try again.";
    }
    // display msg
    document.getElementById("range-text").innerHTML = msg;
    
}