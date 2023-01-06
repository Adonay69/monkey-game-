var PLAY
var END
var gameState = PLAY

var wall1,wall2,wall3,wall4,wall5,wall6,wall7,wall8,wall9,wall10,wall11

var monkey,banana,gameOver,restart,evilBee,monkeyHunter,bananaProtector,superMonkey,angryBanana
var monkeyImage,bananaImage,evilBeeImg,monkeyHunterImg,bananaProtectorImg,superMonkeyImg,angryBananaImg
function preload(){
monkeyImg = loadImage("monkey.png")
bananaImg = loadImage("image_processing20200410-24721-18i3la0.png")  
evilBeeImg = loadImage("28830.png")
monkeyHunterImg = loadImage("21-218069_deer-hunting-clip-art-hunter-clipart.png")
bananaProtectorImg = loadImage("MotoJojo.webp")
superMonkeyImg = loadImage("f387793befe6ea8.png")
angryBananaImg = loadImage("tl.webp")
}

function setup() {
 createCanvas(600,600)
angryBanana = createSprite(500,70)
angryBanana.addImage("tl.webp",angryBananaImg)
angryBanana.scale = 0.07



superMonkey = createSprite(450,510)
superMonkey.addImage("f387793befe6ea8.png",superMonkeyImg)
superMonkey.scale = 0.04

bananaProtector = createSprite(40,135)
bananaProtector.addImage("MotoJojo.webp",bananaProtectorImg)
bananaProtector.scale = 0.02

monkeyHunter = createSprite(319,225)
monkeyHunter.addImage("21-218069_deer-hunting-clip-art-hunter-clipart.png",monkeyHunterImg)
monkeyHunter.scale = 0.06

evilBee = createSprite(300,319)
evilBee.addImage("28830.png",evilBeeImg)
evilBee.scale = 0.09

banana = createSprite(60,50)
banana.addImage("image_processing20200410-24721-18i3la0.png",bananaImg)
banana.scale = 0.03
  
 monkey = createSprite(30,510)
 monkey.addImage("monkey",monkeyImg)
 monkey.scale = 0.02

 wall1 = createSprite(140,100,290,10)
 wall1.shapeColor = "red"

 wall2 = createSprite(83,175,710,10)
 wall2.shapeColor = "red"

 wall3 = createSprite(600,175,150,10)
 wall3.shapeColor = "red" 

 wall4 = createSprite(490,427,10,65)
 wall4.shapeColor = "red"

wall5 = createSprite(490,600,10,60)
wall5.shapeColor = "red"

wall6 = createSprite(180,400,610,10)
wall6.shapeColor = "red"

wall7  = createSprite(595,300,10,600)
wall7.shapeColor ="lime"

wall8 = createSprite(550,100,400,10)
wall8.shapeColor = "red"

wall9 = createSprite(280,80,10,50)
wall9.shapeColor = "red"

wall10 = createSprite(5,300,10,600)
wall10.shapeColor = "lime"

wall11 = createSprite(300,600,600,10)
wall11.shapeColor = "lime"
}

gameState = "serve"

function draw() {
 background("blue")
 createEdgeSprites()
if(gameState === "serve"){
  fill('yellow')
  textSize(20)
  text("press space to start",200,300)
   }

monkey.collide(wall7)
monkey.collide(wall10)
 monkey.collide(wall1)
 monkey.collide(wall2)
 monkey.collide(wall3)
 monkey.collide(wall4)
 monkey.collide(wall5)
 monkey.collide(wall6)
 monkey.collide(wall8)
 monkey.collide(wall9)
 monkey.collide(wall11)
 evilBee.bounceOff(wall7)
 evilBee.bounceOff(wall10)
 monkeyHunter.bounceOff(wall7)
 monkeyHunter.bounceOff(wall10)
 bananaProtector.bounceOff(wall7)
 bananaProtector.bounceOff(wall10)
 superMonkey.bounceOff(wall11)
 superMonkey.bounceOff(wall6)
 angryBanana.bounceOff(wall7)
 angryBanana.bounceOff(wall9)

 

 if (keyDown("space") && gameState === "serve"){
 serve()
 gameState = "play"  

 }
 
  if(keyDown('UP_ARROW')){
  monkey.velocityY = -4
  monkey.velocityX = 0
  }else{
    monkey.velocityX = 0
    monkey.velocityY = 0
}
if(keyDown("DOWN_ARROW")){
  monkey.velocityY = 4
  monkey.velocityX = 0

}
if(keyDown("RIGHT_ARROW")){
  monkey.velocityX = 4
  monkey.velocityY = 0
  }
if(keyDown("LEFT_ARROW")){
monkey.velocityX = -4
monkey.velocityY = 0
}
if(monkey.isTouching(evilBee)||monkey.isTouching(monkeyHunter)||monkey.isTouching(bananaProtector)||monkey.isTouching(superMonkey)||monkey.isTouching(angryBanana)){
  gameState = 'over'
  fill('yellow')
  textSize(20)
  text("HAHA U LOST",250,280)
  text("Press R to restart",250,300)
  evilBee.velocityX=0
  evilBee.velocityY=0
  monkeyHunter.velocityX=0
  monkeyHunter.velocityY=0
  bananaProtector.velocityX=0
  bananaProtector.velocityY=0
  superMonkey.velocityX = 0
  superMonkey.velocityY = 0
  angryBanana.velocityX = 0
  angryBanana.velocityY = 0
  monkey.velocityX=0
  monkey.velocityY=0
  
}


if (monkey.isTouching(banana)){
  gameState = "over"
  fill("yellow")
  textSize(20)
  text("MONKEY + BANANA = SUPER MONKEY ",100,280)
  text("you won press r to restart ",150,300)
  evilBee.velocityX = 0
  evilBee.velocityY = 0
  monkeyHunter.velocityX = 0
  monkeyHunter.velocityY = 0
  monkey.velocityX = 0
  monkey.velocityY = 0
  superMonkey.velocityX = 0
  superMonkey.velocityY = 0
  angryBanana.velocityX = 0
  angryBanana.velocityY = 0
  bananaProtector.velocityX = 0
  bananaProtector.velocityY = 0


}

if(keyDown("r") && gameState === "over"){
  gameState = "serve"
  reset()

}

drawSprites()
}

function serve(){
  evilBee.velocityX = -5
  monkeyHunter.velocityX = 5
  bananaProtector.velocityX = 7
  superMonkey.velocityY = 3
  angryBanana.velocityX = 5
}

function reset(){
  monkey.x = 30
  monkey.y = 510
}




 
 


