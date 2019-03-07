
function DisplayGuess() {
    var number = document.getElementById('guess_field').value;
    document.getElementById('number-result').innerHTML = number;
}

function ClearInput() {
    document.getElementById("guess_field").value = "";
}

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