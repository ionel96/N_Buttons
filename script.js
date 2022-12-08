function createButtons(numOfButtons) {
    let winnerButton = Math.ceil(Math.random() * numOfButtons);
    for (let i = 1; i <= numOfButtons; ++i) {
        let button = document.createElement("button");
        button.innerHTML = i;
        document.body.appendChild(button);
        button.id = i;
    }
    document.querySelectorAll('button').forEach(occurence => {
        let id = occurence.getAttribute('id');
        occurence.addEventListener('click', () => {
            if (Number(id) == winnerButton) {
                document.getElementById("output").innerHTML = "Congratulations. You guessed the button!"
            } else {
                document.getElementById("output").innerHTML = "Keep trying."
            }
        });
    });
}
