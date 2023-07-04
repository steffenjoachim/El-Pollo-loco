
class ThrowableObject extends MovableObject {
    IMAGES_ROTATING = [
        'img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png',
        'img/6_salsa_bottle/bottle_rotation/2_bottle_rotation.png',
        'img/6_salsa_bottle/bottle_rotation/3_bottle_rotation.png',
        'img/6_salsa_bottle/bottle_rotation/4_bottle_rotation.png'
    ]

    constructor(x, y) {
        super();
        this.loadImage('img/6_salsa_bottle/1_salsa_bottle_on_ground.png');
        this.loadImages(this.IMAGES_ROTATING);
        this.x = x;
        this.y = y;
        this.throw();
        this.height = 60;
        this.width = 50;
    }

    throw() {
            this.speedY = 20;
            this.applyGravity();
            setInterval(() => {
                this.x += 25;
                this.animate();
            }, 25);
    }

    animate() {
        setInterval(() => {
            this.playAnimation(this.IMAGES_ROTATING);
        }, 200);
    }
}
