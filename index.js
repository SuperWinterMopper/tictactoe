var board = ["", "", "", "", "", "", "", "", ""];
var moveNumber = 0;

function move(placement)
{
    moveNumber++;
    if(moveNumber % 2 == 1)
        {board[placement] = "X";}
    else 
        {board[placement] = "O";}
    displayAndCheckIfWin();
}

function displayAndCheckIfWin () {
    document.getElementById("button1").innerText = board[0];
    document.getElementById("button2").innerText = board[1];
    document.getElementById("button3").innerText = board[2];
    document.getElementById("button4").innerText = board[3];
    document.getElementById("button5").innerText = board[4];
    document.getElementById("button6").innerText = board[5];
    document.getElementById("button7").innerText = board[6];
    document.getElementById("button8").innerText = board[7];
    document.getElementById("button9").innerText = board[8];

    var winPatterns = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ]

    for(pattern of winPatterns)
    {
        if(board[pattern[0]] != "" && board[pattern[0]] == board[pattern[1]] && board[pattern[0]] == board[pattern[2]])
        {
            winDisplay(board[pattern[0]], pattern);
            return;
        }

        if(!board.includes(""))
        {
            tieDisplay();
        }
    }
}

function winDisplay(winner, pattern) {
    document.getElementById("winner").innerText = "Winner: " + winner;
    const buttons = document.getElementsByClassName("row-of-buttons");

    for(const location of pattern)
    {
        let newLocation = 1 + location;
        let string = "button" + newLocation;
        document.getElementById(string).style.backgroundColor = "green";
    }

    for (const button of buttons)
    {
        button.disabled = true;
    }
}

function tieDisplay () {
    document.getElementById("winner").style.color = "lightblue";
    document.getElementById("winner").innerText = "Tie";
}