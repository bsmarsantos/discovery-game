class Player {
    constructor(name) {
        this.name = name;
        this.hp = 100;
        this.movementSpeed = 1;
        this.attackSpeed = 1;
        this.strenght = 1;
        this.lives = 1;
        this.x = canvas.width / 2;
        this.y = canvas.height / 2 - 10;
        this.width = 20;
        this.height = 40;
    }

    moveUp() {
        this.y -= 10;
        console.log("move para cima");
    }

    moveDown() {
        this.y += 10;
        console.log("move para baixo");
    }

    moveLeft() {
        this.x -= 10;
        console.log("move para a esquerda");
    }

    moveRight() {
        this.x += 10;
        console.log("move para a direita");
    }
    
    draw() {
        context.fillStyle = "aqua";
        context.fillRect(this.x, this.y, this.width, this.height);
    }
}