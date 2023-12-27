var mario
var opponent, opponentGroup
var obstacle, obstacleGroup
var powerup, powerupGroup
var gameState="wait"
var lvl1bg,lvl1bgImg,mario,mariostandingimg
var invisibleGround,plat1,platImage,plat2,plat2Image,plat1invisible,plat3,plat3Image,plat
var cloudImage,cloud,cloudsGroup,plat4
var splashscreen,playbutton



function preload(){
    lvl1bgImg = loadImage("assets/bg.png")
    mariostandingimg= loadImage("assets/Mario_1.png")
    platImage = loadImage("assets/ground.PNG")
    // cloudImage = loadImage("assets/cloud.png")
    splashscreen = loadImage("assets/Mario Game.gif")


}

function setup(){
createCanvas(windowWidth, windowHeight)


playbutton=createImg("assets/play_button.png")
 playbutton.position(width/2.1, height-250)
 playbutton.size(125,125)
playbutton.hide()


}


function draw(){

    if(gameState="wait"){
        background(splashscreen)
        playbutton.show()
        }


        playbutton.mousePressed(()=>{
            gameState="play"
            fontSize(50)
            text("PLAY PRESSED",width/2.1,height/2.1)
        })




        if(gameState=="play"){
            background("red")
        }


}