// Starts at '1'.
// Counting upwards by 1 each time.
// IF a number is divisible by 3, replace the number with 'fizz'
// IF a number is divisible by 5, replace the number with 'buzz'
// IF a number is divisible by 3 AND 5, replace the number with 'fizz buzz'

updateDisplayedSliderValues();

function checkForFizzBuzz() {

    var numberToCountTo, fizzNumber, buzzNumber;
    var finalArray = [];

    numberToCountTo = updateFinalNumber();
    fizzNumber = updateFizzNumber();
    buzzNumber = updateBuzzNumber();
    updateDisplayedSliderValues();

    for (var i = 1; i <= numberToCountTo; i++) {
        if (i % 15 == 0) {
            finalArray.push("Fizz Buzz");
        } else if (i % fizzNumber == 0) {
            finalArray.push("Fizz");
        } else if (i % buzzNumber == 0) {
            finalArray.push("Buzz");
        } else {
            finalArray.push(i.toString());
        }
    }

    document.getElementById("output").innerHTML = finalArray;
    makeGrid(fizzNumber, buzzNumber);

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

function makeGrid(rows, cols) {
    let fizzBuzzGrid = document.getElementById("fizzBuzzGrid");
    fizzBuzzGrid.replaceChildren();

    for (let i = 0; i < rows; i++) {
        let newRow = document.createElement("tr");
        newRow.id = "row" + i;

        fizzBuzzGrid.appendChild(newRow);
        let rowW = document.getElementById("row" + i);

        for (let j = 0; j < cols; j++) {
            let newCell = document.createElement("td");
            newCell.id = "cell"
            rowW.appendChild(newCell);
            
        }
    }
}