// Starts at '1'.
// Counting upwards by 1 each time.
// IF a number is divisible by 3, replace the number with 'fizz'
// IF a number is divisible by 5, replace the number with 'buzz'
// IF a number is divisible by 3 AND 5, replace the number with 'fizz buzz'

updateDisplayedSliderValues();

function checkForFizzBuzz() {

    var numberToCountTo, fizzNumber, buzzNumber;

    numberToCountTo = updateFinalNumber();
    fizzNumber = updateFizzNumber();
    buzzNumber = updateBuzzNumber();
    updateDisplayedSliderValues();

    document.getElementById("outputGrid").innerHTML = ""

    for (var i = 1; i <= numberToCountTo; i++) {
        if (i % 15 == 0) {

            document.getElementById("outputGrid").innerHTML += "<div class=\"fizzbuzz\">Fizz Buzz</div>";

        } else if (i % fizzNumber == 0) {

            document.getElementById("outputGrid").innerHTML += "<div class=\"fizz\">Fizz</div>";

        } else if (i % buzzNumber == 0) {

            document.getElementById("outputGrid").innerHTML += "<div class=\"buzz\">Buzz</div>";

        } else {

            document.getElementById("outputGrid").innerHTML += "<div class=\"number\">" + i.toString() + "</div>";

        }
    }

}

function updateFinalNumber() {

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
}