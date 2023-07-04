class Coins extends DrawableObject{


    constructor(){
        super();
        this.loadImage('img/8_coin/coin_1.png');
        this.x = 300 + Math.random() * 1950;
        this.y = 365 - Math.random() * 200;
         this.height = 100;
        this.width = 100;
     }


}