import backgroundImageFile from '../assets/images/background.png'

export default class Background {
    constructor() {
        this.backgroundImage = new Image()
        this.backgroundImage.src = backgroundImageFile
        this.currentPosX = 0
        this.backgroundScrollSpeed = 4
    }

    reset() {
        this.currentPosX = 0
    }

    update(elapsedFrame) {
        for (let i = 0; i < elapsedFrame; i++) {
            this.currentPosX -= this.backgroundScrollSpeed
            if (this.currentPosX <= -800) {
                this.currentPosX = 0
            }
        }
    }

    getBackgroundSpeed() {
        return this.backgroundScrollSpeed
    }
}