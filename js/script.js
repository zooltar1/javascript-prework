{

let playerWin = 0,
computerWin = 0,
playRock = document.getElementById('play-rock'),
playPaper = document.getElementById('play-paper'),
playScissors = document.getElementById('play-scissors'),
reset = document.getElementById('reset');

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

    const argPlayerMove = getMoveName(playerInput);

    //computerMove

    const randomNumber = Math.floor(Math.random() * 3 + 1);

    console.log('Wylosowana liczba to:' + randomNumber);

    const argComputerMove = getMoveName(randomNumber);

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

playRock.addEventListener('click', function(){
    playGame(1);
  
});

playPaper.addEventListener('click', function(){
    playGame(2);
});

playScissors.addEventListener('click', function(){
    playGame(3);
});

reset.addEventListener('click', function(){
    playerWin = 0;
    computerWin = 0;
    clearMessages(document);
    clearMoves(document);
    clearResultPlayer(document);
    clearResultComputer(document);
});

}