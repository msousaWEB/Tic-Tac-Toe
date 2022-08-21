let x = document.querySelector(".x");
let o = document.querySelector(".o");
let boxes = document.querySelectorAll(".box");
let btn = document.querySelectorAll("#btn-container button");
let msgContainer = document.querySelector("#message");
let msgText = document.querySelector("#message p");
let secondPlayer;

// play counter
let player1 = 0;
let player2 = 0;

// adding click event in each box
for(let i = 0; i < boxes.length; i++) {
    // when someone clicks on the box
    boxes[i].addEventListener("click", function() {
        let element = checkPlayer(player1, player2);

        // setting play limit
        if(this.childNodes.length == 0 ) {
            let cloneElement = element.cloneNode(true);
            this.appendChild(cloneElement);

            // computing play
            if(player1 == player2) {
                player1++;
            } else {
                player2++;
            }
        }

    });

}

function checkPlayer(player1, player2) {
    // defining whose turn it is to play
    if(player1 == player2) {
        //x
        element = x;
    } else {
        //o
        element = o;
    }

    return element;
}