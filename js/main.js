var canvas;
var ctx;

var w;
var h;

var girlPic = new Image();
var starPic = new Image();

var num = 60;
var stars = [];

var lastTime;
var deltaTime;

var switchy = false;
var life = 0;

function init(){
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');
    
    w = canvas.width;
    h = canvas.height;
    
    document.addEventListener('mousemove', mousemove, false);
    
    girlPic.src = 'src/girl.jpg';
    starPic.src = 'src/star.png';
    
    for(var i=0;i<num;i++){
        var obj = new starObj;
        stars.push(obj);
        stars[i].init();
        
    }
    
    lastTime = Date.now();
    gameloop();
}

document.body.onload = init;

function gameloop(){
    window.requestAnimFrame(gameloop);
    
    var now = Date.now();
    deltaTime = now - lastTime;
    lastTime = now;
    
    //console.log(deltaTime);
    drawBackBg();
    drawGirl();
    drawStars();
    aliveUpdate();
}

function drawBackBg(){
    ctx.fillStyle = '#393550';
    ctx.fillRect(0,0,w,h);
}

function drawGirl(){
    ctx.drawImage(girlPic, 100, 100, 800, 400);
}

function mousemove(e){
    if(e.offsetX || e.layerX){
        var px = e.offsetX == undefined ? e.layerX: e.offsetX;        
        var py = e.offsetY == undefined ? e.layerY: e.offsetY;
        
        if(px>100 && px< 900 && py>100 && py<500){
            switchy = true;
            //console.log(switchy);
        }else{
            switchy = false;
            //console.log(switchy);
        }

    }
}