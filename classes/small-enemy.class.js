class SmallEnemy extends MovableObject {
    y = 355;
    IMAGES_WALKING = [
        'img/3_enemies_chicken/chicken_small/1_walk/1_w.png',
        'img/3_enemies_chicken/chicken_small/1_walk/2_w.png',
        'img/3_enemies_chicken/chicken_small/1_walk/3_w.png'
    ]

    // chicken_sound = new Audio('audio/chickens.wav')
    constructor(){
        super().loadImage('img/3_enemies_chicken/chicken_small/1_walk/1_w.png');
        this.loadImages(this.IMAGES_WALKING);
        this.x = 300 + Math.random() * 1950;
        this.y = 390; 
        this.height = 40;
        this.width = 40;
        this.speed = 0.125 + Math.random() * 0.5;
        this.animate();
    }

    animate(){
        this.moveLeft();
        
        setInterval( () => {
            this.playAnimation(this.IMAGES_WALKING);
        // this.chicken_sound.play();
        }, 200);
       
    }
}

