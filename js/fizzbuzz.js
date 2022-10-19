// Starts at '1'.
// Counting upwards by 1 each time.
// IF a number is divisible by 3, replace the number with 'fizz'
// IF a number is divisible by 5, replace the number with 'buzz'
// IF a number is divisible by 3 AND 5, replace the number with 'fizz buzz'

updateDisplayedSliderValues();

function checkForFizzBuzz() {

    var numberToCountTo, fizzNumber, buzzNumber;

    numberToCountTo = updateNumberToCountTo();
    fizzNumber = updateFizzNumber();
    buzzNumber = updateBuzzNumber();
    updateDisplayedSliderValues();

    document.getElementById("outputGrid").innerHTML = ""

    for (var i = 1; i <= numberToCountTo; i++) {
        if (i % 15 == 0) {

            document.getElementById("outputGrid").innerHTML += "<div><div class=\"fizz\">Fizz</div><div class=\"buzz\">Buzz</div></div>";

        } else if (i % fizzNumber == 0) {

            document.getElementById("outputGrid").innerHTML += "<div><div class=\"fizz\">Fizz</div><div class=\"noBuzz\"></div></div>";

        } else if (i % buzzNumber == 0) {

            document.getElementById("outputGrid").innerHTML += "<div><div class=\"noFizz\"></div><div class=\"buzz\">Buzz</div></div>";

        } else {

            document.getElementById("outputGrid").innerHTML += "<div class=\"number\"><p>" + i.toString() + "</p></div>";

        }
    }

}

function updateNumberToCountTo() {

    return document.getElementById("finalNumber").value;
}

function updateFizzNumber() {

    return document.getElementById("fizzSlider").value;
}

function updateBuzzNumber() {

    return document.getElementById("buzzSlider").value;
}

function updateDisplayedSliderValues() {
    document.getElementById("fizzSliderValue").innerHTML = document.getElementById("fizzSlider").value;
    document.getElementById("buzzSliderValue").innerHTML = document.getElementById("buzzSlider").value;
    document.getElementById("finalNumberSliderValue").innerHTML = document.getElementById("finalNumber").value;
}