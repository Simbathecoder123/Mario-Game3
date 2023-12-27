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

// lvl1bgImg = loadImage("assets/bg1.jpg")  
lvl1bgImg = loadImage("assets/bg.png")
mariostandingimg= loadImage("assets/Mario_1.png")
platImage = loadImage("assets/ground.PNG")
// cloudImage = loadImage("assets/cloud.png")
splashscreen = loadImage("assets/Mario Game.gif")

}
function setup(){
    var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)
  if (isMobile) {
    canW = displayWidth
    canH = displayHeight
    createCanvas(displayWidth , displayHeight)
  }
  else {
    canW = windowWidth
    canH = windowHeight
    createCanvas(windowWidth, windowHeight)

  }

  createCanvas(windowWidth,windowHeight)

  cloudsGroup=new Group()


  // create Background


  // lvl1bg = createSprite(0,0)
  // lvl1bg.addImage(lvl1bgImg)
  // lvl1bg.scale=19.5
  // lvl1bg.visible=false
  // lvl1bg.velocityX =-2
  // lvl1bg.x=width/2
  

  // invisibleGround = createSprite(0,height-height/4,500000,20)
  // invisibleGround.visible = false
  
  mario = createSprite(-225,200,50,20)
  mario.addImage("standImg",mariostandingimg)
  mario.scale = 0.5
  mario.visible = false
  camera.x=mario.x 


  // ground=createSprite(width/2,height/2,width,20) 
  // ground.addImage(lvl1bgImg)
  // ground.x=lvl1bg.width/2


  // invisibleGround = createSprite(width/2,height-20,width,20)

plat1=createSprite(-225,200,50,20)
plat1.addImage(platImage)
plat1.setCollider("rectangle",0,0,width/3.2,height/4.5)
plat1.scale=0.5
plat1.debug=true
// plat1invisible=createSprite(50,50,200,20)
// plat1invisible.visible=false


plat2=createSprite(50,50,50,20)
plat2.addImage(platImage)
plat2.setCollider("rectangle",0,0,width/3.2,height/4.5)
plat2.scale=0.5
plat2.debug=true


plat3=createSprite(-480,320,50,20)
plat3.addImage(platImage)
plat3.setCollider("rectangle",0,0,width/3.2,height/4.5)
plat3.scale=0.5
plat3.debug=true


plat4=createSprite(350,220,50,20)
plat4.addImage(platImage)
plat4.setCollider("rectangle",0,0,width/3.2,height/4.5)
plat4.scale=0.5
plat4.debug=true

// create buttons for play
// playbutton=createButton("play")
// playbutton.position(width/2, height-300)
// playbutton.hide()


playbutton=createImg("assets/play_button.png")
 playbutton.position(width/2.1, height-250)
 playbutton.size(125,125)
playbutton.hide()


// make platform invisible
plat1.visible=false
plat2.visible=false
plat3.visible=false
plat4.visible=false




}

function draw(){

if(gameState="wait"){
background(splashscreen)
playbutton.show()
}

playbutton.mousePressed(()=>{

  // background("red")
  gameState="play"
  playbutton.hide()
  console.log(gameState)

  console.log("play pressed")
})

if(gameState=="play"){
background(lvl1bgImg)


}



// if (gameState=="play"){
//   background(lvl1bgImg)
  
//   playbutton.visible = false
//   mario.visible = true
//   lvl1bg.visible = true
//   camera.x=mario.x 
//   camera.y=mario.y
//   mario.collide(invisibleGround)
//   mario.collide(plat1)
//   mario.collide(plat2)
//   mario.collide(plat3)
//   mario.collide(plat4)
//   spawnClouds()

// lvl1bg.velocityX=-2
// if(lvl1bg.x<=0){
//   lvl1bg.x=width/2
// }
  

//   if(keyDown("RIGHT_ARROW")){
//     mario.x +=5
//   }

//   if(keyDown("LEFT_ARROW")){
//     mario.x -=5
//   }

  

//   if(keyDown("UP_ARROW") ){
//     if (mario.isTouching(plat1) && (mario.y<=plat1.y-90 && mario.y>=-50) ){

//       mario.velocityY=-20
//     }

//     if (mario.isTouching(plat2) && (mario.y<=plat2.y-90 && mario.y>=-50) ){
//       console.log("mario "+mario.y)
//       console.log("paltform " +plat2.y)
//        mario.velocityY=-20
//      } 

// console.log(mario.y)  
//   }
  


//   if(keyDown("DOWN_ARROW")){
//     mario.y +=5
//   }

//   // add gravity
//   mario.velocityY += 0.8

// }


    



drawSprites()



}

function spawnClouds() {
  //write code here to spawn the clouds
  if (frameCount % 80 === 0) {
     cloud = createSprite(width,0);
    cloud.y = Math.round(random(-80,-260));
    // cloud.addImage(cloudImage);
    cloud.scale=2
   
    cloud.velocityX = -3;
    
     //assign lifetime to the variable
    // cloud.lifetime = width*3;
    
  //adding cloud to the group
   cloudsGroup.add(cloud);
    }
}



function windowResized() {

    resizeCanvas(windowWidth, windowHeight)
  }


  //homework: remove all the backgrounds for images and add in a new background. 
  // Make movement
  //add enemies