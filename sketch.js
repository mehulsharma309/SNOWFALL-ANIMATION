const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var bg, snow, snowflakes;
var snow1

function preload(){
  backgroundImg= loadImage("snow3.jpg")
  snowflakes= loadImage("snow4.webp")
}

function setup() {
  createCanvas(800,400);
  snow1=createSprite(random(50,750),random(50, 350), 50, 50)
  snow1.addImage(snowflakes)
  snow1.scale=0.3
}

function draw() {
  background(backgroundImg);  
  snow1.velocityY=3
  drawSprites()
}