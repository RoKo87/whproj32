const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;
var hr;

var bg = "sunrise.png";

function preload() {
    getBackgroundImg();
    
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){
    getBackgroundImg()
    if(backgroundImg)
        background(backgroundImg);

    Engine.update(engine);
    

    fill("black");
    textSize(30);
    
    if(hr>=12){
        text("Time in USA : "+ hr%12 + " PM", 50,100);
    }else if(hr==0){
        text("Time in USA : 12 AM",100,100);
    }else{
        text("Time in USA : "+ hr%12 + " AM", 50,100);
    }

}

async function getBackgroundImg(){

    // write code to fetch time from API
    var f = await fetch('http://worldtimeapi.org/api/timezone/America/Chicago')
    var t = await f.json();
    console.log(t)
 
    //change the data in JSON format and store it in variable responseJSON
    

    
    //fetch datetime from responseJSON
    var getit = t.datetime
    var hour = getit.slice(11, 13)
    

    // slice the datetime to extract hour
    

    
    if(hour>=0 && hour<18 ){
        bg = "sunrise.png";
    }
    else{
        bg="sunset.png"
    }
    
    backgroundImg = loadImage(bg);
}
