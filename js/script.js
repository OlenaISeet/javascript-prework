{
    function playGame(playerInput) {
        clearMessages();

        const getMoveName = function(argMoveId) {
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
        const randomNumber = Math.floor(Math.random() * 3 + 1);

        console.log('Wylosowana liczba to: ' + randomNumber);

        const argComputerMove = getMoveName(randomNumber);

        console.log('Gracz wpisał: ' + playerInput);

        const argPlayerMove = getMoveName(playerInput);

        const displayResult = function(argComputerMove, argPlayerMove) {
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
    }
    const playRock = document.getElementById('play-rock').addEventListener('click', function() {
        playGame(1);
    });
    const playPaper = document.getElementById('play-paper').addEventListener('click', function() {
        playGame(2);
    });
    const playScissors = document.getElementById('play-scissors').addEventListener('click', function() {
        playGame(3);
    });
}