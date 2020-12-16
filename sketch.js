var dog, happyDog,dogImg;
var database;
var foodS,foodStock;

function preload(){
	dogImg = loadImage("dogImg.png");
  happyDog = loadImage("dogImg1.png");
}

function setup() {
  database = firebase.database();
  console.log(database);
	createCanvas(500, 500);
  
  dog = createSprite(250,350);
  dog.addImage(dogImg);
  dog.scale = 0.2;

  foodStock = database.ref('Food');
  foodStock.on("value", readStock);
}


function draw() {  
  background(46, 139, 87);

if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
   dog.addImage(happyDog);
   
  }

  if(keyWentUp(UP_ARROW)){
    dog.addImage(dogImg);
  }

  drawSprites();

  textSize(15);
  stroke(2);
  fill("white");
  text("NOTE : Prees UP_ARROW Key To Feed Drago Milk !",75,25);
  text("Food Remaining : " + foodS, 150,200);

}

function readStock(data){
  foosS = data.val();
}

function writeStock(x){
  database.ref('/').update({
    Food : x
  })
}

