import "phaser";
import { BootScene } from "./scenes/boot-scene";
import { StartScene } from "./scenes/start-scene";
import { GameScene } from "./scenes/game-scene";
import { GameOver } from "./scenes/game-over";

const config: GameConfig = {
    width: 1000,
    height: 625,
    parent: "game",
    resolution: window.devicePixelRatio, // added
    scene: [BootScene, StartScene, GameScene, GameOver],
    input: {
        keyboard: true
    },
    physics: {
        default: "arcade",
        arcade: {
            debug: false, // shows velocity and hitboxes! 
            gravity: { y: 0 }
        }
    },
    render: { pixelArt: true }
};

export class Game extends Phaser.Game {
  constructor(config: GameConfig) {
    super(config)
  }
}

window.addEventListener("load", () => new Game(config))
