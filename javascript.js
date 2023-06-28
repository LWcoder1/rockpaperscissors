function getComputerChoice() {
    let chosenOption = Math.floor(Math.random() * 3);
    console.log(chosenOption);
    return chosenOption;
}


function playRound(playNum, compNum) {
    const dialog = document.querySelector(".dialog");
    const newElement = document.createElement("p");

    let roundScore = 0;
    if (playNum == 0 && compNum == 1) {
        roundScore = -1;
        newElement.textContent = 'You choose Rock and the Computer chooses Paper (You Lose)' ;
        dialog.appendChild(newElement);
        playerImage.src= "images/rock.jpg";
        robotImage.src = "images/paper.jpg";

    }
    else if (playNum == 1 && compNum == 2) {
        roundScore = -1;
        newElement.textContent = 'You choose Paper and the Computer chooses Scissor (You Lose)';
        dialog.appendChild(newElement);
        playerImage.src= "images/paper.jpg";
        robotImage.src = "images/scissors.jpg";

    }
    else if (playNum == 2 && compNum == 0) {
        roundScore = -1;
        newElement.textContent = 'You choose Scissor and the Computer chooses Rock (You Lose)';
        dialog.appendChild(newElement);
        playerImage.src= "images/scissors.jpg";
        robotImage.src = "images/rock.jpg";
    }
    else if (playNum == 1 && compNum == 0) {
        roundScore = 1;
        newElement.textContent = 'You choose Paper and the Computer chooses Rock (You Win)';
        dialog.appendChild(newElement);
        playerImage.src= "images/paper.jpg";
        robotImage.src = "images/rock.jpg";


    }
    else if (playNum == 2 && compNum == 1) {
        roundScore = 1;
        newElement.textContent = 'You choose Scissor and the Computer chooses Paper (You Win)';
        dialog.appendChild(newElement);
        playerImage.src= "images/scissors.jpg";
        robotImage.src = "images/paper.jpg";

    }
    else if (playNum == 0 && compNum == 2) {
        roundScore = 1;
        newElement.textContent = 'You choose Rock and the Computer chooses Scissor (You Win)';
        dialog.appendChild(newElement);
        playerImage.src= "images/rock.jpg";
        robotImage.src = "images/scissors.jpg";


    }
    else {
        newElement.textContent = "You both choose the same thing! (You Tie)";
        dialog.appendChild(newElement);

        if (playNum == 0) {
            playerImage.src= "images/rock.jpg";
            robotImage.src= "images/rock.jpg";
        }
        else if (playNum == 1) {
            playerImage.src= "images/paper.jpg";
            robotImage.src= "images/paper.jpg";
        }
        else {
            playerImage.src= "images/scissors.jpg";
            robotImage.src= "images/scissors.jpg";
        }


    }

    return roundScore;
}

// ---------------------------------

let currScore = 0;
let oppScore = 0;
let currIteration = 0;


const playerScore = document.querySelector('.player').querySelector("h1");
const compScore = document.querySelector('.robot').querySelector("h1");
playerScore.textContent=`Player: ${currScore}`;
compScore.textContent=`Computer: ${oppScore}`;
const playerImage = document.querySelector(".actualFight").querySelector(".chosen").querySelector(".playerSelect");
const robotImage = document.querySelector(".actualFight").querySelector(".chosen").querySelector(".robotSelect");


const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        currIteration ++;
        if (currIteration != 6) {
            let roundScore = playRound(parseInt(button.className), getComputerChoice());
            console.log(roundScore);
            if (roundScore == -1) {
                oppScore ++;
            }
            else if (roundScore == 1) {
                currScore ++;
            }
            playerScore.textContent=`Player: ${currScore}`;
            compScore.textContent=`Computer: ${oppScore}`;
        }

        if (currScore == 5) {
            playerImage.src= "images/pausedWhite.jpg";
            robotImage.src= "images/pausedWhite.jpg";
            currScore = 0;
            oppScore = 0;
            alert("Player Wins!");
        }
        else if (oppScore == 5) {
            playerImage.src= "images/pausedWhite.jpg";
            robotImage.src= "images/pausedWhite.jpg";
            currScore = 0;
            oppScore = 0;
            alert("Computer Wins!");
        }
        
        if (currIteration == 6) {
            const dialog = document.querySelector(".dialog");
            dialog.textContent = "";
            currIteration = 0;
        }
    });
});


