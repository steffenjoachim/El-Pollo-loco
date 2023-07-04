class Character extends MovableObject {
    x = 50;
    y = 0;
    height = 300;
    width = 150;
    world;
    speed= 50;
    image;
    offset = 20;
    pepeIsDead = false;
    
    
    IMAGES_IDLE = [
        'img/2_character_pepe/1_idle/idle/I-1.png',
        'img/2_character_pepe/1_idle/idle/I-2.png',
        'img/2_character_pepe/1_idle/idle/I-3.png',
        'img/2_character_pepe/1_idle/idle/I-4.png',
        'img/2_character_pepe/1_idle/idle/I-5.png',
        'img/2_character_pepe/1_idle/idle/I-6.png',
        'img/2_character_pepe/1_idle/idle/I-7.png',
        'img/2_character_pepe/1_idle/idle/I-8.png',
        'img/2_character_pepe/1_idle/idle/I-9.png',
        'img/2_character_pepe/1_idle/idle/I-10.png'
    ];

    IMAGES_SLEEPING = [
        'img/2_character_pepe/1_idle/long_idle/I-11.png',
        'img/2_character_pepe/1_idle/long_idle/I-12.png',
        'img/2_character_pepe/1_idle/long_idle/I-13.png',
        'img/2_character_pepe/1_idle/long_idle/I-14.png',
        'img/2_character_pepe/1_idle/long_idle/I-15.png',
        'img/2_character_pepe/1_idle/long_idle/I-16.png',
        'img/2_character_pepe/1_idle/long_idle/I-17.png',
        'img/2_character_pepe/1_idle/long_idle/I-18.png',
        'img/2_character_pepe/1_idle/long_idle/I-19.png',
        'img/2_character_pepe/1_idle/long_idle/I-20.png'
    ]

    IMAGES_WALKING = [
        'img/2_character_pepe/2_walk/W-21.png',
        'img/2_character_pepe/2_walk/W-22.png',
        'img/2_character_pepe/2_walk/W-23.png',
        'img/2_character_pepe/2_walk/W-24.png',
        'img/2_character_pepe/2_walk/W-25.png',
        'img/2_character_pepe/2_walk/W-26.png'
    ]

    IMAGES_JUMPING = [
        'img/2_character_pepe/3_jump/J-31.png',
        'img/2_character_pepe/3_jump/J-32.png',
        'img/2_character_pepe/3_jump/J-33.png',
        'img/2_character_pepe/3_jump/J-34.png',
        'img/2_character_pepe/3_jump/J-35.png',
        'img/2_character_pepe/3_jump/J-36.png',
        'img/2_character_pepe/3_jump/J-37.png',
        'img/2_character_pepe/3_jump/J-38.png',
        'img/2_character_pepe/3_jump/J-39.png'
    ]

    IMAGES_DEAD = [
        'img/2_character_pepe/5_dead/D-51.png',
        'img/2_character_pepe/5_dead/D-52.png',
        'img/2_character_pepe/5_dead/D-53.png',
        'img/2_character_pepe/5_dead/D-54.png',
        'img/2_character_pepe/5_dead/D-55.png',
        'img/2_character_pepe/5_dead/D-56.png',
        'img/2_character_pepe/5_dead/D-57.png',
    ]

    IMAGES_HURT = [
        'img/2_character_pepe/4_hurt/H-41.png',
        'img/2_character_pepe/4_hurt/H-42.png',
        'img/2_character_pepe/4_hurt/H-43.png'
    ]

    walking_sound = new Audio('audio/walking.wav');

    // chicken_sound = new Audio('audio/chickens.wav');
    constructor() {
        super().loadImage('img/2_character_pepe/1_idle/idle/I-1.png');
        this.loadImages(this.IMAGES_IDLE);
        this.loadImages(this.IMAGES_SLEEPING);
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_JUMPING);
        this.loadImages(this.IMAGES_DEAD);
        this.loadImages(this.IMAGES_DEAD);
        this.loadImages(this.IMAGES_HURT);
        this.applyGravity();
        this.animate();
    }

    animate(){

        let interval =setInterval( () => {
            this.walking_sound.pause();
            if(this.isDead()) {
                this.pepeDead(interval);
            } else {if (this.world.keyboard.RIGHT  && this.x < this.world.level.level_end_x) {
                this.pepeWalkingRight();  
            } 
            if (this.world.keyboard.LEFT && this.x > 0) {
                this.pepeWalkingLEFT();
            } 
            if (this.world.keyboard.SPACE && !this.isAboveGround()) {
                this.speedY = 25;
            }
            if (this.isHurt()){
                this.pepeHurt();
            } else if(this.isAboveGround() || this.speedY > 0){
                this.jump();
            } else if (this.world.keyboard.LEFT == false && this.world.keyboard.RIGHT == false && !this.isAboveGround()) {
                this.pepeIdle();
                
            // this.chicken_sound.play();

            // setTimeout(()=>{this.pepeSleeping();},7000);
            } 
          }
        }, 160);
       
    }

    pepeSleeping(){  
        let i = this.currentImage % this.IMAGES_SLEEPING.length;
        let path = this.IMAGES_SLEEPING[i];
        this.img = this.imageCach[path];
        this.currentImage++;
    }
    

    pepeWalkingRight(){
        this.walking_sound.play();
        let i = this.currentImage % this.IMAGES_WALKING.length;
        let path = this.IMAGES_WALKING[i];
        this.img = this.imageCach[path];
        this.currentImage++;
        this.x += this.speed;
        this.world.camera_x = -this.x;
        this.otherDirection = false;
    }

    pepeWalkingLEFT(){
        this.walking_sound.play();
        let i = this.currentImage % this.IMAGES_WALKING.length;
        let path = this.IMAGES_WALKING[i];
        this.img = this.imageCach[path];
        this.currentImage++;
        this.x -= this.speed;
        this.world.camera_x = -this.x;
        this.otherDirection = true;
    }

    pepeIdle(){
        let i = this.currentImage % this.IMAGES_IDLE.length;
        let path = this.IMAGES_IDLE[i];
        this.img = this.imageCach[path];
        this.currentImage++;
    }

    pepeDead() {
        let i = this.currentImage % this.IMAGES_DEAD.length;
        let path = this.IMAGES_DEAD[i];
        this.img = this.imageCach[path];
        this.currentImage++;
        for (let i = 1; i < 9999; i++) window.clearInterval(i);
        this.showEndScreen();
      }
    
     showEndScreen() {
        document.getElementById('you-lost').classList.remove('d-none')
      }
      
      

    pepeHurt(){
        let i = this.currentImage % this.IMAGES_HURT.length;
        let path = this.IMAGES_HURT[i];
         this.img = this.imageCach[path];
        this.currentImage++;
    }

    

    
}


