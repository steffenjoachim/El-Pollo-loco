let level1;

function initLevel() {
  level1 = new Level( 

    [
        new Enemy(),
        new Enemy(),
        new Enemy(),
        new Enemy(),
        new Enemy(),
        new Enemy(),
        new Enemy(),
        new Enemy(),
        new Enemy(),
        new Enemy(),
        new Enemy(),
    ],

    [
        new Cloud(),
    ],
    [
        new BackgroundObject('img/5_background/layers/air.png',0),
        new BackgroundObject('img/5_background/layers/3_third_layer/1.png',0),
        new BackgroundObject('img/5_background/layers/2_second_layer/1.png',0),
        new BackgroundObject('img/5_background/layers/1_first_layer/1.png',0),
        new BackgroundObject('img/5_background/layers/air.png',719),
        new BackgroundObject('img/5_background/layers/3_third_layer/2.png',719),
        new BackgroundObject('img/5_background/layers/2_second_layer/2.png',719),
        new BackgroundObject('img/5_background/layers/1_first_layer/2.png',719),
        new BackgroundObject('img/5_background/layers/air.png',1438),
        new BackgroundObject('img/5_background/layers/3_third_layer/1.png',1438),
        new BackgroundObject('img/5_background/layers/2_second_layer/1.png',1438),
        new BackgroundObject('img/5_background/layers/1_first_layer/1.png',1438),
        new BackgroundObject('img/5_background/layers/air.png',2157),
        new BackgroundObject('img/5_background/layers/3_third_layer/2.png',2157),
        new BackgroundObject('img/5_background/layers/2_second_layer/2.png',2157),
        new BackgroundObject('img/5_background/layers/1_first_layer/2.png',2157),
    ],

    [
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
    ],

    [
        new Coins(),
        new Coins(),
        new Coins(),
        new Coins(),
        new Coins(),
    ],

    [
        new SmallEnemy(),
        new SmallEnemy(),
        new SmallEnemy(),
        new SmallEnemy(),
        new SmallEnemy(),
        new SmallEnemy(),
        new SmallEnemy(),
    ]
)
}