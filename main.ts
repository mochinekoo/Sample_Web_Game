import {GameUtil} from "./GameUtil.js"
import {TestObject} from "./TestObject.js"

const canvas = document.getElementById("game") as HTMLCanvasElement;
const render2D:CanvasRenderingContext2D = canvas.getContext("2d")!;
const WINDOW_WIDTH = 1280
const WINDOW_HEIGHT = 720
let Box = new TestObject(render2D);

let timer = 0;

function gameUpdate(){
    canvas.width = WINDOW_WIDTH;
    canvas.height = WINDOW_HEIGHT;
    timer++;

    Box.update();
}

function gameDraw() {
    render2D.clearRect(0,0, canvas.width ,canvas.height);
    render2D.fillStyle = "white";
    render2D.fillRect(0,0,WINDOW_WIDTH, WINDOW_HEIGHT);

    Box.draw();
    render2D.font = "48px serif";
    render2D.fillText("時間:" + Math.round((timer / 60)), 0, 50);
}

function gameLoop() {
    gameUpdate()
    gameDraw()
    requestAnimationFrame(gameLoop);
}

function gameInit() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    window.addEventListener("keydown", (e) => {
        GameUtil.keys[e.key] = true;
        console.log("down", e.key);
    });

    window.addEventListener("keyup", (e) => {
        GameUtil.keys[e.key] = false;
        console.log("up", e.key);
    });
}

gameInit();
gameLoop()
gameUpdate();
gameDraw()