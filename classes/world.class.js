class World {

    character = new Character();
    endboss = new Endboss();
    level = level1;
    canvas;
    ctx;
    keyboard;
    camera_x = 0;
    statusBar = new StatusBar();
    bottleStatus = new BottleStatus();
    coinStatus = new CoinStatus();
    throwableObjects = [];
    collectedBottles = 0;
    collectedCoins = 0;
   
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
      this.checkColissionsSmallEnemie();
      this.checkCollisionsWithBottles();
      this.checkCollisionsWithCoins();
      this.checkThrowObjects();
    }, 200);
  }
  

checkColissions(){
    this.level.enemies.forEach( (enemy,index) => {
        if(this.character.isColliding(enemy)  &&    !this.character.isAboveGround()){
            console.log('Collision with Character, energy', this.character.energy);
            this.character.hit();
            this.statusBar.setPercentage(this.character.energy);
;            }else 
    if(this.character.isColliding(enemy)  &&  this.character.isAboveGround()+60)  {
    console.log('above the ground');
    this.level.enemies.splice(index, 1); 
};
    });      
}     

checkColissionsSmallEnemie(){
    this.level.smallEnemies.forEach( (enemy,index) => {
        if(this.character.isColliding(enemy)  &&    !this.character.isAboveGround()){
            console.log('Collision with Small Enemy, energy', this.character.energy);
            this.character.smallHit();
            this.statusBar.setPercentage(this.character.energy);
;            }else 
    if(this.character.isColliding(enemy)  &&    this.character.isAboveGround()+60)  {
    console.log('above the ground small');
    this.level.smallEnemies.splice(index, 1); 
};
    });      
}     

checkCollisionsWithBottles() {
    this.level.bottles.forEach((bottle, index) => {
      if (this.character.isColliding(bottle)) {
        this.collectedBottles++;
        this.bottleStatus.setPercentage(this.collectedBottles);
        this.level.bottles.splice(index, 1); 
        console.log('Collision with Bottle, collected bottles:', this.collectedBottles);
      }
    });
  }

  checkCollisionsWithCoins() {
    this.level.coins.forEach((coin, index) => {
      if (this.character.isColliding(coin)) {
        this.collectedCoins++;
        this.coinStatus.setPercentage(this.collectedCoins);
        this.level.coins.splice(index, 1); 
        console.log('Collision with Coin, collected coins:', this.collectedCoins);
      }
    });
  }

checkThrowObjects() {
    if (this.keyboard.D && this.collectedBottles > 0) {
      this.collectedBottles -= 1;  
      let bottle = new ThrowableObject(this.character.x + 100, this.character.y + 100); 
      this.throwableObjects.push(bottle); 
      this.checkColissionThrowableBottle(bottle);
    }
    
  }

checkColissionThrowableBottle(bottle){
    setInterval(() => {
        if (this.endboss.isColliding(bottle)) {
            this.endboss.endbossHit();
        }   
    }, 200);
    
}
  

draw(){
this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height);
this.ctx.translate(this.camera_x, 0);
this.addObjectsToMap(this.level.backgroundObjects);
this.addObjectsToMap(this.level.clouds);
this.ctx.translate(-this.camera_x, 0);
this.addToMap(this.statusBar);
this.addToMap(this.bottleStatus);
this.addToMap(this.coinStatus);
this.ctx.translate(this.camera_x, 0);
this.addObjectsToMap(this.level.enemies);
this.addObjectsToMap(this.level.smallEnemies);
this.addObjectsToMap(this.throwableObjects);
this.addObjectsToMap(this.level.bottles);
this.addObjectsToMap(this.level.coins);
this.addToMap(this.character);
this.addToMap(this.endboss);
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