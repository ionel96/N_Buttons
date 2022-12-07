function createButtons(numOfButtons) {
    let winnerButton = Math.ceil(Math.random() * numOfButtons);
    for (let i = 1; i <= numOfButtons; ++i) {
        let button = document.createElement("button");
        let nButtons = document.getElementById("n_buttons");
        button.innerHTML= i;
        nButtons.appendChild(button);
    }
}
function checkButton(clickedButton) {
    if (Number(clickedButton) == winnerButton) {
        document.getElementById("output").innerHTML = "Congratulations. You guessed the button!"
    } else {
        document.getElementById("output").innerHTML = "Keep trying."
    }
}
