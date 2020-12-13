function printMessage(msg) {
    let div = document.createElement('div');
    div.innerHTML = msg;
    document.getElementById('messages').appendChild(div);
}

function clearMessages() {
    document.getElementById('messages').innerHTML = '';
}

function getMoveName(argMoveId) {
    if (argMoveId == 1) {
        return 'kamień';
    } else if (argMoveId == 2) {
        return 'papier';
    } else if (argMoveId == 3) {
        return 'nożyce';
    }

    printMessage('Nie znam ruchu o id ' + argMoveId + '.');
    return 'nieznany ruch';
}

/*if (argComputerMove == 'kamień' && argPlayerMove == 'papier') {
    printMessage('Ty wygrywasz!');
} else if (argComputerMove == 'kamien' && argPlayerMove == 'nożyce') {
    printMessage('Komputer wygrywa!');
} else if (argComputerMove == 'papier' && argPlayerMove == 'kamien') {
    printMessage('Komputer wygrywa!');
} else if (argComputerMove == 'papier' && argPlayerMove == 'nożyce') {
    printMessage('Ty wygrywasz!');
} else if (argComputerMove == 'nożyce' && argPlayerMove == 'papier') {
    printMessage('Komputer wygrywa!');
} else if (argComputerMove == 'nożyce' && argPlayerMove == 'kamien') {
    printMessage('Ty wygrywasz!');
} else if (argComputerMove == argPlayerMove) {
    printMessage('Remis!');
} else if (argPlayerMove == 'nieznany ruch') {
    printMessage('wybiez liczbe od 1 do 3');
}*/
let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let argComputerMove = getMoveName(randomNumber);

/*if (randomNumber == 1) {
    computerMove = 'kamień';
} else if (randomNumber == 2) {
    computerMove = 'papier';
} else if (randomNumber == 3) {
    computerMove = 'nożyce';
}*/
/*printMessage('Mój ruch to: ' + argComputerMove);*/

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let argPlayerMove = getMoveName(playerInput);

/*if (playerInput == '1') {
    playerMove = 'kamień';
} else if (playerInput == '2') {
    playerMove = 'papier';
} else if (playerInput == '3') {
    playerMove = 'nożyce';
}*/
/*printMessage('Twój ruch to: ' + argPlayerMove);*/
/*if (computerMove == 'kamień' && playerMove == 'papier') {
    printMessage('Ty wygrywasz!');
} else if (computerMove == 'kamien' && playerMove == 'nożyce') {
    printMessage('Komputer wygrywa!');
} else if (computerMove == 'papier' && playerMove == 'kamien') {
    printMessage('Komputer wygrywa!');
} else if (computerMove == 'papier' && playerMove == 'nożyce') {
    printMessage('Ty wygrywasz!');
} else if (computerMove == 'nożyce' && playerMove == 'papier') {
    printMessage('Komputer wygrywa!');
} else if (computerMove == 'nożyce' && playerMove == 'kamien') {
    printMessage('Ty wygrywasz!');
} else if (computerMove == playerMove) {
    printMessage('Remis!');
} else if (playerMove == 'nieznany ruch') {
    printMessage('wybiez liczbe od 1 do 3');
}*/
function displayResult(argComputerMove, argPlayerMove) {
    printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);

    if (argComputerMove == 'kamień' && argPlayerMove == 'papier') {
        printMessage('Ty wygrywasz!');
    } else if (argComputerMove == 'kamien' && argPlayerMove == 'nożyce') {
        printMessage('Komputer wygrywa!');
    } else if (argComputerMove == 'papier' && argPlayerMove == 'kamien') {
        printMessage('Komputer wygrywa!');
    } else if (argComputerMove == 'papier' && argPlayerMove == 'nożyce') {
        printMessage('Ty wygrywasz!');
    } else if (argComputerMove == 'nożyce' && argPlayerMove == 'papier') {
        printMessage('Komputer wygrywa!');
    } else if (argComputerMove == 'nożyce' && argPlayerMove == 'kamien') {
        printMessage('Ty wygrywasz!');
    } else if (argComputerMove == argPlayerMove) {
        printMessage('Remis!');
    } else if (argPlayerMove == 'nieznany ruch') {
        printMessage('wybiez liczbe od 1 do 3');
    }
}
displayResult(argComputerMove, argPlayerMove)