
function getMoveName(argMoveId){
    if(argMoveId == 1){
        return 'kamień';
    } 
    else if(argMoveId == 2){
        return 'papier';
    } 
    else if(argMoveId == 3){
        return 'nożyce';
    } 
    else {
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
    console.log('moves:', argComputerMove, argPlayerMove);
    printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
 
    if( argComputerMove == 'kamień' && argPlayerMove == 'papier'){
        return 'Ty wygrywasz!';
    }   
    else if( argComputerMove == 'kamień' && argPlayerMove == 'kamień'){
        return 'Mamy remis!';
    }   
    else if( argComputerMove == 'kamień' && argPlayerMove == 'nożyce'){
        return 'Tym razem przegrywasz :(';
    }   
    else if( argComputerMove == 'papier' && argPlayerMove == 'nożyce'){
        return 'Ty wygrywasz!';
    }   
    else if( argComputerMove == 'papier' && argPlayerMove == 'papier'){
        return 'Mamy remis!';
    }   
    else if( argComputerMove == 'papier' && argPlayerMove == 'kamień'){
        return 'Tym razem przegrywasz :(';
    }   
    else if( argComputerMove == 'nożyce' && argPlayerMove == 'kamień'){
        return 'Ty wygrywasz!';
    }   
    else if( argComputerMove == 'nożyce' && argPlayerMove == 'nożyce'){
        return 'Mamy remis!';
    }   
    else if( argComputerMove == 'nożyce' && argPlayerMove == 'papier'){
        return 'Tym razem przegrywasz :(';
    }
    else if(argPlayerMove == 'nieznany ruch'){
        return 'Błędny ruch, spróbuj ponownie!';
    }
}

printMessage(displayResult(argComputerMove, argPlayerMove));





