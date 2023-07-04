class Level {
    enemies;
    clouds;
    backgroundObjects;
    bottles;
    coins;
    smallEnemies;

    level_end_x = 2100;

    constructor(enemies, clouds, backgroundObjects, bottles, coins, smallEnemies){
        this.enemies = enemies;
        this.clouds = clouds;
        this.backgroundObjects = backgroundObjects;
        this.bottles = bottles;
        this.coins = coins;
        this.smallEnemies = smallEnemies;
    }
}
