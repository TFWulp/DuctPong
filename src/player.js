import * as PIXI from 'pixi.js'

function createPlayer(app, id){
    const player = new PIXI.Sprite.from("assets/cola.png");
    player.anchor.set(0.5, 0.5);
    player.x = app.screen.width/2;
    player.y = app.screen.height/2;
    player.scale.set(0.25);
    return player;
}
export {createPlayer}