// Step by step guide on how to move, rotate, scale, and manipulate colors with code


// taken from 02-mouse examples
const Engine = Matter.Engine;
const Runner = Matter.Runner;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Mouse = Matter.Mouse;
const Common = Matter.Common;
const MouseConstraint = Matter.MouseConstraint;

let engine;
let boxA;
let boxB;
let ball;
let ground;

let rect01;
let rect02;
let rect03;
let rect04;

let rect05;

let rect06;


let canvas;


function setup() {
  // createCanvas(800, 800);
  canvas = createCanvas(800, 800);

  // create an engine
  engine = Engine.create();

  // create two boxes and a ground
  boxA = Bodies.rectangle(780, 560, 7, 600, { isStatic: true });
  boxB = Bodies.rectangle(0, 229, 200, 11);


  rect01 = Bodies.rectangle(620,600, 250, 70, { isStatic: true } );
  rect02 = Bodies.rectangle(167, 56, 12, 209);
  rect03 = Bodies.rectangle(68, 37, 118, 15);
rect04 = Bodies.rectangle(167, 267, 300, 31);


  rect05 = Bodies.rectangle(700, 430, 60, 230, { isStatic: true }  );


  rect06 = Bodies.rectangle(99, 145, 176, 49);
  rect07 = Bodies.rectangle(620,655, 161, 18,{ isStatic: true });
    rect08 = Bodies.rectangle(620,700, 128, 35,{ isStatic: true });
    rect09 = Bodies.rectangle(590, 447, 73, 20);
      rect10 = Bodies.rectangle(500, 467, 173, 27);
  rect11 = Bodies.rectangle(620,760, 79, 35, { isStatic: true });
circle01 =  Bodies.circle(260,176,20,{ isStatic: true })
circle02 =  Bodies.circle(110,427,20,{ isStatic: true })

    ground2 = Bodies.rectangle(100, 400, 300, 11, {
      isStatic: true, angle: Math.PI * 0.09
      // isStatic: true, angle: Math.PI * 0.06

    });


  ground = Bodies.rectangle(260, 150, 210, 11, {
    isStatic: true, angle: Math.PI * -0.02
    // isStatic: true, angle: Math.PI * 0.06

  });


  ground3 = Bodies.rectangle(0,800, 1800, 50, {
    isStatic: true, angle: Math.PI * 0.0
    // isStatic: true, angle: Math.PI * 0.06

  });
  World.add(engine.world, [boxA, boxB,circle01, circle02, rect04, rect01, rect05, rect02, rect06, rect03,rect07,rect08,rect09,rect10,rect11,ground3 , ground, ground2]);


  // setup mouse
  let mouse = Mouse.create(canvas.elt);
  let mouseParams = {
    mouse: mouse,
    constraint: { stiffness: 0.05, angularStiffness: 0 }
  }
  mouseConstraint = MouseConstraint.create(engine, mouseParams);
  mouseConstraint.mouse.pixelRatio = pixelDensity();
  World.add(engine.world, mouseConstraint);

  // run the engine
  Engine.run(engine);

}

function draw() {

  background(0);
  noStroke();

  fill(128, 222, 234);
  drawVertices(boxA.vertices);
  drawVertices(boxB.vertices);

  drawVertices(rect04.vertices);


  drawVertices(rect02.vertices);
  drawVertices(rect06.vertices);
  drawVertices(rect03.vertices);


      drawVertices(rect09.vertices);
        drawVertices(rect10.vertices);

        fill(183, 28, 28);
  drawVertices(rect01.vertices);
          fill(183, 28, 28,150);
  drawVertices(rect05.vertices);
          fill(183, 28, 28,130);
  drawVertices(rect07.vertices);
          fill(183, 28, 28,110);
          drawVertices(rect08.vertices);
                  fill(183, 28, 28,90);
          drawVertices(rect11.vertices);


    fill(170, 40, 40,150);
          drawVertices(circle01.vertices);
            drawVertices(circle02.vertices);
  fill(128);
  drawVertices(ground.vertices);


  drawVertices(ground2.vertices);
  drawVertices(ground3.vertices)
  drawMouse(mouseConstraint);

  // //bottom black circle
  // fill(0);
  // ellipse(400, 600, 80, 80);
  //
  // //black handle rectangle
  // rect(360, 300, 80, 300);
  //
  // //bottom white circle
  // fill(255); //white
  // ellipse(400, 600, 40, 40);
  //
  // //white thin handle part
  // rect(397.5, 320, 5, 270);
  //
  // //wrench head circle
  // fill(0);
  // ellipse(400, 250, 150, 150);
  //
  // //angled wrench head
  // fill(255);
  // translate(430, 250);
  // angleMode(DEGREES);
  // rotate(151);
  // rect(0, 0, 60, 110, 10);
}


function drawMouse(mouseConstraint) {
  if (mouseConstraint.body) {
    var pos = mouseConstraint.body.position;
    var offset = mouseConstraint.constraint.pointB;
    var m = mouseConstraint.mouse.position;
    stroke(0, 255, 0);
    strokeWeight(2);
    line(pos.x + offset.x, pos.y + offset.y, m.x, m.y);
  }
}


function drawVertices(vertices) {
  beginShape();
  for (var i = 0; i < vertices.length; i++) {
    vertex(vertices[i].x, vertices[i].y);
  }
  endShape(CLOSE);
}



function drawSprite(body, img) {
  const pos = body.position;
  const angle = body.angle;
  push();
  translate(pos.x, pos.y);
  rotate(angle);
  imageMode(CENTER);
  image(img, 0, 0);
  pop();

}
