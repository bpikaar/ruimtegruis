export class StartScene extends Phaser.Scene {

    constructor() {
        super({key: "StartScene"})
    }

    init(): void {
    }

    preload(): void {
    }

    create(): void {
        this.add.image(0, 0, 'demo').setOrigin(0, 0)

        this.showText()

        //click on the whole scene
        this.input.once('pointerdown', (pointer) => {
             this.scene.start('GameScene')
        })
    }

    private showText(){
        this.add.text(400, 300, 'RUIMTEGRUIS', { fontFamily: '"Press Start 2P"', fontSize: 70, color: '#FFF' }).setOrigin(0.5)
        let go: Phaser.GameObjects.Text = this.add.text(400, 400, 'START', { fontFamily: '"Press Start 2P"', fontSize: 40, color: '#ff3434' }).setOrigin(0.5)
        this.tweens.add({
            targets: go,
            alpha: 0.8,
            scaleX: 1.2,
            scaleY: 1.2,
            ease: 'Cubic.easeInOut',
            duration: 650,
            yoyo: true,
            repeat: -1
        })
    }
}
