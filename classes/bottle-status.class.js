class BottleStatus extends DrawableObject {

    IMAGES = [
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/green/0.png',
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/green/20.png',
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/green/40.png',
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/green/60.png',
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/green/80.png',
        'img/7_statusbars/1_statusbar/3_statusbar_bottle/green/100.png'
    ];
    
    percentage = 100;
    
    constructor () {
        super();
        this.loadImages(this.IMAGES);
        this.x = 8;
        this.y = 47;
        this.width = 200;
        this.height = 60;
        this.setPercentage(0);
    }
    
    setPercentage(percentage){
        this.percentage = percentage;
        let path = this.IMAGES[this.selectImageIndex()]
        this.img = this.imageCach[path];
    }
    
    
    selectImageIndex(){
        if (this.percentage == 10){
            return 5;
        } else if (this.percentage >= 8){
            return 4;
        } else if (this.percentage >= 6){
            return 3;
        } else if (this.percentage >= 4){
            return 2;
        } else if (this.percentage >= 2){
            return 1;
        } else {
            return 0;
        } 
    }
    
    }