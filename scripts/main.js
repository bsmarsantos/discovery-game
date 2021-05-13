var canvas, context;
var game;

// Inicializa tudo (animação, menu, jogo, etc)
function iniatialize() {
    canvas = document.getElementById("canvas");
    context = canvas.getContext("2d");

    // Cria o jogo
    game = new Game();

    // Cria um listener para o evento de clicar na tecla (keydown) e chama a função keyDown para tratar a tecla clicada
    document.addEventListener("keydown", keyDown);

    // Inicializa o jogo
    game.begin();

    // Começa o jogo
    playGame()
}

// Gere o jogo
function playGame() {
    game.play();

    // Garante que a função jogo é executada cerca de 60x por segundo de forma estável
    requestAnimationFrame(playGame); 
}

// Função que desplota cada vez que se clica numa tecla
function keyDown(event) {
    switch (event.keyCode) { 
        case 65: // Letra A, andar para a esquerda
            if (game.isInsideMap('moveLeft', game.player.x, game.player.y, game.player.width, game.player.height)) {
                game.player.moveLeft(); 
            }
            break;
        case 87: // Letra W, andara para cima
            if (game.isInsideMap('moveUp', game.player.x, game.player.y, game.player.width, game.player.height)) {
                game.player.moveUp();
            }
            break;
        case 68: // Letra D, andar para a direita
            if (game.isInsideMap('moveRight', game.player.x, game.player.y, game.player.width, game.player.height)) {
                game.player.moveRight();
            }
            break;
        case 83: // Letra S, andar para baixo
            if (game.isInsideMap('moveDown', game.player.x, game.player.y, game.player.width, game.player.height)) {
                game.player.moveDown();
            }
            break;
        default:
            return;
    }
}