const canvas = document.getElementById("game") as HTMLCanvasElement;
const ctx = canvas.getContext("2d");

let x:number = 50;
let y:number = 50;
let keys: Record<string, boolean> = {};

const WINDOW_WIDTH = 1280
const WINDOW_HEIGHT = 720

window.addEventListener("keydown", (e) => {
    keys[e.key] = true;
    console.log("down", e.key);
});

window.addEventListener("keyup", (e) => {
    keys[e.key] = false;
    console.log("up", e.key);
});

function gameUpdate(){
    canvas.width = WINDOW_WIDTH;
    canvas.height = WINDOW_HEIGHT;
    //x += 2;
    if (keys["a"]) {
        x -= 3;
    }
    if (keys["d"]) {
        x += 3;
    }
    if (keys["w"]) {
        y -= 3;
    }
    if (keys["s"]) {
        y += 3;
    }
}

function gameDraw() {
    ctx.clearRect(0,0, canvas.width ,canvas.height);
    ctx.fillStyle = "white";
    ctx.fillRect(0,0,WINDOW_WIDTH, WINDOW_HEIGHT);

    ctx.fillStyle = "red";
    ctx.fillRect(x,y,50,50);
}

function gameLoop() {
    gameUpdate()
    gameDraw()
    requestAnimationFrame(gameLoop);
}

function gameInit() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    canvas.tabIndex = 0;
    canvas.focus();
}

gameInit();
gameLoop()
gameUpdate();
gameDraw()