//arrays used for storing user input data
let exp1 = [];
let exp2 = [];
let exp3 = [];

function setup() {
  //3 user inputs and buttons set up
  createCanvas(windowWidth, windowHeight);
  name1 = createInput();
  name1.position(100,30);
  name2 = createInput();
  name2.position(100,60);
  name3 = createInput();
  name3.position(100,90);

  //buttons call corresponding functions
  button1 = createButton("Enter");
  button1.position(300,30);
  button1.mousePressed(enter1);
  button2 = createButton("Enter");
  button2.position(300,60);
  button2.mousePressed(enter2);
  button3 = createButton("Enter");
  button3.position(300,90);
  button3.mousePressed(enter3);

}

function draw() {
  //setting up text on page
  background(255);
  fill(100);
  text("Instructions: Enter in the $ amount for every spending of an individual",10,10);
  text("Find out how much everyone spent:",10,130);
  fill(0);
  for (let i = 1; i < 4; i++) {
    text("Person "+i,10,34*i);
    text("Spendings of P" + i,120*i-100,150); 
  }

  //call the categorize function on the 3 arrays
  categorize(exp1);
  categorize(exp2);
  categorize(exp3);  
}

function categorize(list){
  //determine x-coordinate  
  strokeWeight(0.1);
  if(list == exp1){
    x = 30;
  } else if(list == exp2){
    x = 150;
  } else {
    x = 270;
  }

  //calculate the sum of spendings
  let sum = 0;
  for (let j = 0; j < list.length; j++) {
    sum += list[j];
  }

  //print values to the correct column on the page
  let i = 0;
  while(i < list.length){
    text("$ "+list[i],x,170+15*i);
    i += 1;
  }
  text("Sum: $ "+sum,x,190+15*i);
}

//functions called when corresponding button is pressed
function enter1() {
  exp1.push(parseInt(name1.value()));
}

function enter2(){
  exp2.push(parseInt(name2.value()));
}

function enter3(){
  exp3.push(parseInt(name3.value()));
}