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

                if(secondPlayer == 'vs-ai') {
                    //execute ai plays
                    aiPlay();
                    player2++;
                }
            } else {
                player2++;
            }

            // checkWinner
            checkWinCondition();
        }

    });

}

// check 2 players or versus AI
for(let i = 0; i < btn.length; i++) {
    btn[i].addEventListener("click", function(){
        secondPlayer = this.getAttribute("id");

        for(let j = 0; j < btn.length; j++) {
            btn[j].style.display = 'none';
        }

        setTimeout( function() {
            let container = document.querySelector("#container");
            container.classList.remove("hide");
        }, 500);
    })
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

function checkWinCondition() {
    let b1 = document.getElementById("block-1");
    let b2 = document.getElementById("block-2");
    let b3 = document.getElementById("block-3");
    let b4 = document.getElementById("block-4");
    let b5 = document.getElementById("block-5");
    let b6 = document.getElementById("block-6");
    let b7 = document.getElementById("block-7");
    let b8 = document.getElementById("block-8");
    let b9 = document.getElementById("block-9");

    // check horizontal 1
    if(b1.childNodes.length > 0 && b2.childNodes.length > 0 && b3.childNodes.length > 0 ) {
        let b1Child = b1.childNodes[0].className;
        let b2Child = b2.childNodes[0].className;
        let b3Child = b3.childNodes[0].className;

        if(b1Child == 'x' && b2Child == 'x' && b3Child == 'x') {
            //x win
            showWinner('x');
        }else if (b1Child == 'o' && b2Child == 'o' && b3Child == 'o'){
            //o win
            showWinner('o');
        }
    }
    // check horizontal 2
    if(b4.childNodes.length > 0 && b5.childNodes.length > 0 && b6.childNodes.length > 0 ) {
        let b4Child = b4.childNodes[0].className;
        let b5Child = b5.childNodes[0].className;
        let b6Child = b6.childNodes[0].className;

        if(b4Child == 'x' && b5Child == 'x' && b6Child == 'x') {
            //x win
            showWinner('x');
        }else if (b4Child == 'o' && b5Child == 'o' && b6Child == 'o'){
            //o win
            showWinner('o');
        }
    }
    // check horizontal 3
    if(b7.childNodes.length > 0 && b8.childNodes.length > 0 && b9.childNodes.length > 0 ) {
        let b7Child = b7.childNodes[0].className;
        let b8Child = b8.childNodes[0].className;
        let b9Child = b9.childNodes[0].className;

        if(b7Child == 'x' && b8Child == 'x' && b9Child == 'x') {
            //x win
            showWinner('x');
        }else if (b7Child == 'o' && b8Child == 'o' && b9Child == 'o'){
            //o win
            showWinner('o');
        }
    }

    //////////////////////////////////////////////////////////////////////////////
    
    
    // check vertical 1
    if(b1.childNodes.length > 0 && b4.childNodes.length > 0 && b7.childNodes.length > 0 ) {
        let b1Child = b1.childNodes[0].className;
        let b4Child = b4.childNodes[0].className;
        let b7Child = b7.childNodes[0].className;

        if(b1Child == 'x' && b4Child == 'x' && b7Child == 'x') {
            //x win
            showWinner('x');
        }else if (b1Child == 'o' && b4Child == 'o' && b7Child == 'o'){
            //o win
            showWinner('o');
        }
    }
    // check vertical 2
    if(b2.childNodes.length > 0 && b5.childNodes.length > 0 && b8.childNodes.length > 0 ) {
        let b2Child = b8.childNodes[0].className;
        let b5Child = b5.childNodes[0].className;
        let b8Child = b8.childNodes[0].className;

        if(b2Child == 'x' && b5Child == 'x' && b8Child == 'x') {
            //x win
            showWinner('x');
        }else if (b2Child == 'o' && b5Child == 'o' && b8Child == 'o'){
            //o win
            showWinner('o');
        }
    }
    // check vertical 3
    if(b3.childNodes.length > 0 && b6.childNodes.length > 0 && b9.childNodes.length > 0 ) {
        let b3Child = b3.childNodes[0].className;
        let b6Child = b6.childNodes[0].className;
        let b9Child = b9.childNodes[0].className;

        if(b3Child == 'x' && b6Child == 'x' && b9Child == 'x') {
            //x win
            showWinner('x');
        }else if (b3Child == 'o' && b6Child == 'o' && b9Child == 'o'){
            //o win
            showWinner('o');
        }
    }

    //////////////////////////////////////////////////////////////////////////////

    // check diagonal 1
    if(b1.childNodes.length > 0 && b5.childNodes.length > 0 && b9.childNodes.length > 0 ) {
        let b1Child = b1.childNodes[0].className;
        let b5Child = b5.childNodes[0].className;
        let b9Child = b9.childNodes[0].className;

        if(b1Child == 'x' && b5Child == 'x' && b9Child == 'x') {
            //x win
            showWinner('x');
        }else if (b1Child == 'o' && b5Child == 'o' && b9Child == 'o'){
            //o win
            showWinner('o');
        }
    }
    // check diagonal 2
    if(b3.childNodes.length > 0 && b5.childNodes.length > 0 && b7.childNodes.length > 0 ) {
        let b3Child = b3.childNodes[0].className;
        let b5Child = b5.childNodes[0].className;
        let b7Child = b7.childNodes[0].className;

        if(b3Child == 'x' && b5Child == 'x' && b7Child == 'x') {
            //x win
            showWinner('x');
        }else if (b3Child == 'o' && b5Child == 'o' && b7Child == 'o'){
            //o win
            showWinner('o');
        }
    }

    //////////////////////////////////////////////////////////////////////////////

    // all lose
    let counter = 0;

    for(let i = 0; i < boxes.length; i++) {
        if(boxes[i].childNodes[0] != undefined) {
            counter++;
        }
    }
    
    if(counter == 9) {
        showWinner('');
    }

}

// clear game/ show winner/ update scoreboard
function showWinner(winner){
    let scoreboardX = document.querySelector("#scoreboard-1");
    let scoreboardO = document.querySelector("#scoreboard-2");
    let msg = '';

    if(winner == 'x') {
        scoreboardX.textContent = parseInt(scoreboardX.textContent) + 1;
        msg = 'Player 1 Venceu!';
    } else if(winner == 'o') {
        scoreboardO.textContent = parseInt(scoreboardO.textContent) + 1;
        msg = 'Player 2 Venceu!';
    } else {
        msg = "Deu Velha!";
    }

    // show msg
    msgText.innerHTML = msg;
    msgContainer.classList.remove("hide");

    // hide message
    setTimeout( function() {
        msgContainer.classList.add("hide");
    }, 3000);

    //reload plays
    player1 = 0;
    player2 = 0;

    //remove x and o

    let boxesToRemove = document.querySelectorAll(".box div");

    for(let i = 0; i < boxesToRemove.length; i++) {
        boxesToRemove[i].parentNode.removeChild(boxesToRemove[i]);
    }
}

function aiPlay() {
    let cloneO = o.cloneNode(true);
    counter = 0;
    filled = 0;

    for(let i = 0; i < boxes.length; i++) {
        let randomNumber = Math.floor(Math.random() * 5);

        // only fill if the child is empty
        if(boxes[i].childNodes[0] == undefined) {
            if(randomNumber <= 1) {
                setTimeout( function() {
                    boxes[i].appendChild(cloneO);
                }, 500);
                
                counter++;
                break;
            }

        // check how many are filled
        } else {
            filled++;
        }
    }

    if (counter == 0 && filled < 9) {
        aiPlay();
    }
}