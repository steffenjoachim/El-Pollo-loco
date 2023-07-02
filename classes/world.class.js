class World {

    character = new Character();
    level = level1;
    canvas;
    ctx;
    keyboard;
    camera_x = 0;
    statusBar = new StatusBar();
    // bottleStatus = new BottleStatus();
    throwableObjects = [];
    collectedBottles = 0;
    bottles = [
        new Bottle(),
        new Bottle(),
        new Bottle(),
        new Bottle(),
        new Bottle(),
        new Bottle(),
        new Bottle(),
        new Bottle(),
        new Bottle(),
        new Bottle(),
    ];

    // collectedBottles = 0;

    constructor(canvas, keyboard){
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
        this.run();
    }

setWorld(){
    this.character.world = this;
}

run() {
    setInterval(() => {
      this.checkColissions();
      this.checkCollisionsWithBottles();
      this.checkThrowObjects();
    }, 200);
  }
  

checkColissions(){
    this.level.enemies.forEach( (enemy) => {
        if(this.character.isColliding(enemy)  &&    this.character.isAboveGround){
            console.log('Collision with Character, energy', this.character.energy);
            this.character.hit();
            this.statusBar.setPercentage(this.character.energy);
;            };
    });      
}

checkCollisionsWithBottles() {
    this.bottles.forEach((bottle, index) => {
      if (this.character.isColliding(bottle)) {
        this.collectedBottles++;
        this.bottles.splice(index, 1); 
        console.log('Collision with Bottle, collected bottles:', this.collectedBottles);
      }
    });
  }

checkThrowObjects() {
    if (this.keyboard.D) {
      let bottle = new ThrowableObject(this.character.x + 100, this.character.y + 100); 
      this.throwableObjects.push(bottle); 
    }
  }
  

draw(){
this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height);
this.ctx.translate(this.camera_x, 0);
this.addObjectsToMap(this.level.backgroundObjects);
this.addObjectsToMap(this.level.clouds);
this.ctx.translate(-this.camera_x, 0);
this.addToMap(this.statusBar);
// this.addToMap(this.bottleStatus);
this.ctx.translate(this.camera_x, 0);
this.addObjectsToMap(this.level.enemies);
this.addObjectsToMap(this.throwableObjects);
this.addObjectsToMap(this.bottles)
this.addToMap(this.character);
this.ctx.translate(-this.camera_x, 0);

let self = this;
requestAnimationFrame(function(){
    self.draw();
        });
    }

addObjectsToMap(objects){
    objects.forEach(o => {
        this.addToMap(o);
    })
}

addToMap(movableObject){
    if (movableObject.otherDirection) {
        this.flipImage(movableObject);
    }
    movableObject.draw(this.ctx);
    movableObject.drawFrame(this.ctx);

    if (movableObject.otherDirection) {
        this.flipImageBack(movableObject);
    }
}

flipImage(movableObject){
    this.ctx.save();
    this.ctx.translate(movableObject.width,0);
    this.ctx.scale(-1, 1);
        movableObject.x = movableObject.x*-1;
}

flipImageBack(movableObject){
    this.ctx.restore();
    movableObject.x = movableObject.x*-1;
}

}