let playerWin = 0;
let computerWin = 0;

function playGame(playerInput){
    clearMessages();

    function getMoveName(argMoveId){
        if(argMoveId == 1){
            return 'rock';
        } 
        else if(argMoveId == 2){
            return 'paper';
        } 
        else if(argMoveId == 3){
            return 'scissors';
        } 
        else {
            printMessage('Nie znam ruchu o id ' + argMoveId + '.');
            return 'unknown move';
        }
    }

    //playerMove

    console.log('Gracz wpisał: ' + playerInput);

    let argPlayerMove = getMoveName(playerInput);

    //computerMove

    let randomNumber = Math.floor(Math.random() * 3 + 1);

    console.log('Wylosowana liczba to:' + randomNumber);

    let argComputerMove = getMoveName(randomNumber);

    //gameResult
  
    function displayResult(argComputerMove, argPlayerMove){ 
        console.log('moves:', argComputerMove, argPlayerMove);
 
        if( argComputerMove == 'rock' && argPlayerMove == 'paper'){
            playerWin = playerWin + 1;
            return 'You win!';
        }
        else if( argComputerMove == 'rock' && argPlayerMove == 'rock'){
            return 'We have a draw!';
        }   
        else if( argComputerMove == 'rock' && argPlayerMove == 'scissors'){
            computerWin = computerWin + 1;
            return 'You lose :(';
        }   
        else if( argComputerMove == 'paper' && argPlayerMove == 'scissors'){
            playerWin = playerWin + 1;
            return 'You win!';
        }   
        else if( argComputerMove == 'paper' && argPlayerMove == 'paper'){
            return 'We have a draw!';
        }   
        else if( argComputerMove == 'paper' && argPlayerMove == 'rock'){
            computerWin = computerWin + 1;
            return 'You lose :(';
        }   
        else if( argComputerMove == 'scissors' && argPlayerMove == 'rock'){
            playerWin = playerWin + 1;
            return 'You win!';
        }   
        else if( argComputerMove == 'scissors' && argPlayerMove == 'scissors'){
            return 'We have a draw!';
        }   
        else if( argComputerMove == 'scissors' && argPlayerMove == 'paper'){
            computerWin = computerWin + 1;
            return 'You lose :(';
        }
        else if(argPlayerMove == 'Unknown move'){
            return 'Unknown move, try again!';
        }
    }

    printMoves('I played: ' + argComputerMove + '. You choose: ' + argPlayerMove + '.');
    printMessage(displayResult(argComputerMove, argPlayerMove));
    printResultPlayer(playerWin);
    printResultComputer(computerWin);

}

document.getElementById('play-rock').addEventListener('click', function(){
    playGame(1);
  
});

document.getElementById('play-paper').addEventListener('click', function(){
    playGame(2);
});

document.getElementById('play-scissors').addEventListener('click', function(){
    playGame(3);
});

document.getElementById('reset').addEventListener('click', function(){
    playerWin = 0;
    computerWin = 0;
    clearMessages(document);
    clearMoves(document);
    clearResultPlayer(document);
    clearResultComputer(document);
});