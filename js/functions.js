function printMessage(msg){
    document.getElementById('messages').innerHTML = msg;
}

function printMoves(msg){
    document.getElementById('moves').innerHTML = msg;
}

function clearMessages(){
    document.getElementById('messages').innerHTML = '';
}

function clearMoves(){
    document.getElementById('moves').innerHTML = '';
}

function clearResultPlayer(){
    document.getElementById('result-player').innerHTML = '';
}

function clearResultComputer(){
    document.getElementById('result-computer').innerHTML = '';
}

function printResultPlayer(msg){
    document.getElementById('result-player').innerHTML = msg;
}

function printResultComputer(msg){
    document.getElementById('result-computer').innerHTML = msg;
}