import * as PIXI from 'pixi.js';


function createDucttape(app){
    const ducttape = PIXI.Sprite.from('assets/ducttape.png');
    ducttape.anchor.set(0.5, 0.5);
    ducttape.x = app.screen.width/2;
    ducttape.y = app.screen.height/2;
    ducttape.scale.set(0.2);
    return ducttape;
}
export { createDucttape }