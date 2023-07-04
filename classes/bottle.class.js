class Bottle extends DrawableObject{


    constructor(){
        super();
        this.loadImage('img/6_salsa_bottle/1_salsa_bottle_on_ground.png');
        this.x = 300 + Math.random() * 1950;
        this.y = 380 - Math.random() * 20;
        this.height = 60;
        this.width = 50;
     }


}