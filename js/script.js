
function getMoveName(argMoveId){
    if(argMoveId == 1){
        return 'kamień';
    } else if(argMoveId == 2){
        return 'papier';
    } else if(argMoveId == 3){
        return 'nożyce';
    } else {
        printMessage('Nie znam ruchu o id ' + argMoveId + '.');
        return 'nieznany ruch';
    }
}

//playerMove

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let argPlayerMove = getMoveName(playerInput);

//computerMove

let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to:' + randomNumber);

let argComputerMove = getMoveName(randomNumber);

//gameResult
  
function displayResult(argComputerMove, argPlayerMove){
    printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
 
    if( argComputerMove == 'kamień' && argPlayerMove == 'papier'){
        printMessage('Ty wygrywasz!');
    }   
    else if( argComputerMove == 'kamień' && argPlayerMove == 'kamień'){
        printMessage('Mamy remis!');
    }   
    else if( argComputerMove == 'kamień' && argPlayerMove == 'nożyce'){
        printMessage('Tym razem przegrywasz :(');
    }   
    else if( argComputerMove == 'papier' && argPlayerMove == 'nożyce'){
        printMessage('Ty wygrywasz!');
    }   
    else if( argComputerMove == 'papier' && argPlayerMove == 'papier'){
        printMessage('Mamy remis!');
    }   
    else if( argComputerMove == 'papier' && argPlayerMove == 'kamień'){
        printMessage('Tym razem przegrywasz :(');
    }   
    else if( argComputerMove == 'nożyce' && argPlayerMove == 'kamień'){
        printMessage('Ty wygrywasz!');
    }   
    else if( argComputerMove == 'nożyce' && argPlayerMove == 'nożyce'){
        printMessage('Mamy remis!');
    }   
    else if( argComputerMove == 'nożyce' && argPlayerMove == 'papier'){
        printMessage('Tym razem przegrywasz :(');
    }
}

let result = displayResult(argComputerMove, argPlayerMove);
printMessage(result);

