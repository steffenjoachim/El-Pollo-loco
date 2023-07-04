class Endboss extends MovableObject{
    IMAGES_ALERT = [
        'img/4_enemie_boss_chicken/2_alert/G5.png',
        'img/4_enemie_boss_chicken/2_alert/G6.png',
        'img/4_enemie_boss_chicken/2_alert/G7.png',
        'img/4_enemie_boss_chicken/2_alert/G8.png',
        'img/4_enemie_boss_chicken/2_alert/G9.png',
        'img/4_enemie_boss_chicken/2_alert/G10.png',
        'img/4_enemie_boss_chicken/2_alert/G11.png',
        'img/4_enemie_boss_chicken/2_alert/G12.png',
    ];

    IMAGES_WALKING = [
        'img/4_enemie_boss_chicken/1_walk/G1.png',
        'img/4_enemie_boss_chicken/1_walk/G2.png',
        'img/4_enemie_boss_chicken/1_walk/G3.png',
        'img/4_enemie_boss_chicken/1_walk/G4.png'
    ]

    IMAGES_DEAD = [
        'img/4_enemie_boss_chicken/5_dead/G24.png',
        'img/4_enemie_boss_chicken/5_dead/G25.png',
        'img/4_enemie_boss_chicken/5_dead/G26.png'
    ]

    constructor(){
        super().loadImage(this.IMAGES_ALERT[0]);
        this.loadImages(this.IMAGES_ALERT);
        this.loadImages(this.IMAGES_DEAD);
        this.loadImages(this.IMAGES_WALKING);
        this.x = 2540;
        this.y=  50;
        this.height = 400;
        this.width = 300;
        this.animate();
    }

    animate(){
        setInterval( () => {
            if(this.endbossIsDead()) {
                this.playAnimation(this.IMAGES_DEAD);
                setTimeout(() => {
                    for (let i = 1; i < 9999; i++) window.clearInterval(i);
                }, 1000);
                this.showEndScreen();
                
            } else {
                this.playAnimation(this.IMAGES_ALERT);
            }
           
        }, 200);
        
    }

    showEndScreen() {
        console.log('Endscreen');
        document.getElementById('game-over').classList.remove('d-none')
      }

}