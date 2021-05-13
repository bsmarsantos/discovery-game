class Game {
    constructor() {
        // variáveis utilizadas para o mapa
        this.map;
        this.level = 1;
        this.room = 45;

        // variáveis utilizadas para o jogador
        this.player;

        // variáveis utilizadas para o inimigo
    }

    // Inicializa o jogo
    begin() {
        // criar mapa
        this.map = new Map(this.level);
        
        // Inicializa o mapa
        this.map.start();

        // criar o jogador
        var name =  'Nelito' //prompt("Introduz o nome do jogador");
        this.player = new Player(name);
    }

    // Função para controlar o jogo
    play() {
        // Faz update ao mapa enquanto ele não estiver totalmente carregado
        this.map.update();

        context.clearRect(0, 0, canvas.width, canvas.height);

        // Simula a sala 
        context.fillStyle = "grey"; // cor da sala enquanto não há imagem TO DO
        context.fillRect(0, 0, canvas.width, canvas.height);
    
        this.player.draw();
    }

    // Verifica se algo está dentro do mapa
    isInsideMap(moveAction, objectX, objectY, objectWidth, objectHeight) {
        switch (moveAction) {
            case "moveUp":
                if (objectY <= 0) {
                    return false;
                } else {
                    return true;
                }
                break;
            case "moveDown":
                if (objectY + objectHeight >= canvas.height) {
                    return false;
                } else {
                    return true;
                }
                break;
            case "moveLeft":
                if (objectX <= 0) {
                    return false;
                } else {
                    return true;
                }
                break;
            case "moveRight":
                if (objectX + objectWidth >= canvas.width) {
                    return false;
                } else {
                    return true;
                }
                break;
            default:
                console.log("Nome do movimento errado");
                console.error(moveAction);
        }
    }
}