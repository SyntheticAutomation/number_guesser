function DisplayGuess() {
    const show_number = document.getElementById('guess_field').value;
    document.getElementById('number-result').innerHTML = show_number;
}

function ClearInput() {
    document.getElementById("guess_field").value = "";
}