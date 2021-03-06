export default class Obstacle {
    constructor(spriteFile, width, height, flyingObstacle = false, animationFrameCount = 0) {
        this.sprite = new Image();
        this.sprite.src = spriteFile;
        this.sizeWidth = width;
        this.sizeHeight = height;    
        this.currentPosX = 800
        if (flyingObstacle) {
            this.currentPosY = 600 - 213 - this.sizeHeight
        }
        else {
            this.currentPosY = 600 - 13 - this.sizeHeight
        }
        this.maxFrameCount = animationFrameCount
        this.currentFrameCount = 0
        this.visible = true
    }

    update(backgroundSpeed) {
        this.currentPosX -= backgroundSpeed
        this.currentFrameCount++
        if (this.currentPosX <= (this.sizeWidth * (-1))) {
            this.visible = false
        }
        if (this.currentFrameCount >= 60) {
            this.currentFrameCount = 0
        }

    }

    getAnimationFrame() {
        return Math.floor(this.currentFrameCount / (Math.floor(60 / this.maxFrameCount + 1))) % (this.maxFrameCount + 1)
    }
}