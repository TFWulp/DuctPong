import * as PIXI from 'pixi.js';
import {createDucttape} from './ducttape';
import {createPlayer} from './player';

// The application will create a renderer using WebGL, if possible,
// with a fallback to a canvas render. It will also setup the ticker
// and the root stage PIXI.Container
const app = new PIXI.Application();

// The application will create a canvas element for you that you
// can then insert into the DOM
document.body.appendChild(app.view);

//=======Object initialization=====
const ducttape = createDucttape(app);
var player1 = createPlayer(app, 1);
var player2 = createPlayer(app, 2);
player1.x = app.screen.left;
player2.x = app.screen.right;

app.stage.addChild(ducttape);
app.stage.addChild(player1);
app.stage.addChild(player2);
app.ticker.add((delta) => {
    ducttape.rotation += 0.1 * delta;
})