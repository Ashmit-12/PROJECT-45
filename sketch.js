var gamestate="harleys";
//var gamestate="booms";
var lives=4;

var Group;
var harley;
var harleyimg;
var crock;
var crockimg;
var joker,jokerimg;
var boom,boomimg;
var maze;
var wonderw;wonderimg;
var bat;batimg;
var flash,flashimg;
var superman,superimg;
var diamondimg;
var diamondGroup;
var diamond;

function preload(){
boomimg=loadImage("suicidesquadimages/boom.png");
harleyimg=loadImage("suicidesquadimages/harley.png");
jokerimg=loadImage("suicidesquadimages/joker.png");
crockimg=loadImage("suicidesquadimages/killercrock.png");
wonderimg=loadImage("justiceleagueimages/wonderwomen.png");
flashimg=loadImage("justiceleagueimages/flash.png");
superimg=loadImage("justiceleagueimages/superman.png");
batimg=loadImage("justiceleagueimages/batman.png");
diamondimg=loadImage("diamond.png");
}
function setup() {

  createCanvas(600,600);

diamondGroup=new Group();

 harley=createSprite(525,80,30,30);
 harley.addImage("hr",harleyimg);
 harley.scale=0.13;
 

 boom=createSprite(525,160,30,30);
 boom.addImage("bo",boomimg);
boom.scale=0.13;

 crock=createSprite(525,240,30,30);
 crock.addImage("cr",crockimg);
crock.scale=0.13;

 joker=createSprite(525,320,30,30);
joker.addImage("jr",jokerimg);
joker.scale=0.13;

wonderw=createSprite(410,420,30,30);
wonderw.addImage("w",wonderimg);
wonderw.scale=0.08;

flash=createSprite(95,430,30,30);
flash.addImage("fl",flashimg);
flash.scale=0.08; 

superman=createSprite(410,65,30,30);
superman.addImage("sm",superimg);
superman.scale=0.08; 

bat=createSprite(67,67,30,30);
bat.addImage("bt",batimg);
bat.scale=0.08; 

for(var i=0;i<70;i++){
  for(var j=60;j<430;j=j+70){
    for(var m=60;m<430;m=m+50){
      diamond=createSprite(j,m);
    diamond.addImage("dd",diamondimg);
    diamond.scale=0.05;
    }
    
  }
}
}

function draw() {
  background(51);
 
  drawSprites();
text(mouseX +" "+mouseY+"",100,100);
text("lifes : "+lives,500,100); 
  line(350, 210, 420, 210);
  line(390, 250, 390, 330);
  line(420, 210, 420, 250);
   line(385, 210, 385, 90);
  line(420, 170, 450, 170);
  line(310, 90, 310, 130);
   line(350, 90, 350, 50);
 line(310, 130, 385, 130);
 line(385, 90, 420, 90);
 line(420, 130, 420, 170);
 line(230, 50, 450, 50);
 line(450, 50, 450, 290);
 line(450, 330, 450, 450);
 line(50, 450, 450, 450);
 line(160, 290, 230, 290);
 line(270, 250, 270, 330);
 line(270, 330, 200, 330);
 line(200, 410, 200, 290);
 line(50, 130, 50, 450);
 line(50, 370, 100, 370);
 line(140, 370, 200, 370);
 line(160, 410, 80, 410);
line(80, 410, 80, 450);
 line(200, 410, 240, 410);
 line(270, 290, 350, 290);
 line(350, 290, 350, 210);
 line(350, 210, 270, 210);
 line(310, 210, 310, 250);
 line(270, 170, 310, 170);
 line(240, 370, 310, 370);
 line(275, 370, 275, 450);
 line(310, 370, 310, 330);
 line(350, 330, 415, 330);
 line(350, 330, 350, 370);
 line(310, 410, 310, 450);
 line(310, 410, 350, 410);
line(390, 410, 390, 370);
 line(390, 370, 450, 370);
 line(390, 410, 420, 410);
 line(390, 290, 450, 290);
 line(350, 170, 385, 170);
 line(50, 50, 190, 50);
   line(190, 50, 190, 130);
  line(90, 90, 150, 90);
   line(150, 90, 150, 170);
  line(50, 50, 50, 130);
  line(50, 130, 110, 130);
  line(83, 130, 83, 170);
   line(120, 170, 230, 170);
  line(230, 50, 230, 80);
   line(230, 120, 230, 250);
    line(270, 50, 270, 170);
    line(50, 210, 190, 210);
    line(270, 250, 160, 250);
   line(120, 210, 120, 290);
   line(160, 330, 80, 330);
   line(80, 330, 80, 250);
   line(160, 330, 160, 290);

   if(gamestate==="harleys"){
    Movement(harley);
    if(Touch(harley,superman)){
      gamestate="booms";
    }else if(Touch(harley,bat)){
      gamestate="booms";
    }else if(Touch(harley,wonderw)){
      gamestate="booms";
    }else if(Touch(harley,flash)){
      gamestate="booms";
    }
    
  }

}


function Movement(villain){
  if(keyDown(UP_ARROW)){
    villain.y-=10;
  }
  if(keyDown(DOWN_ARROW)){
    villain.y+=10;
  }
  if(keyDown(RIGHT_ARROW)){
    villain.x+=10;
  }
  if(keyDown(LEFT_ARROW)){
    villain.x-=10;
  }
}
function Touch(villain,heros){
  if(villain.isTouching(heros)){
    villain.visible=false;
    console.log(lives);
  }
}
