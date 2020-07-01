var A = false;
var B = false;
var Q = false;

function setup(){
    createCanvas(200,100);  
    frameRate(4);
    live = color(255,0,0)
    neutral = color(100,100,100)
    //img = loadImage("XOR.jpg");
    btnA = createButton('A')
    btnA.position(25,27)
    btnB = createButton('B')
    btnB.position(25,52)
    btnQ = createButton('Q')
    btnQ.position(150,39)
    btnA.mousePressed(switchA)
    btnB.mousePressed(switchB)
}

function XOR(x,y,A,B){
    this.x = x;
    this.y = y;
    this.A = A;
    this.B = B;
}

XOR.prototype.display = function(){
    //Move to x and y
    push()
    strokeWeight(6)
    scale(0.5,0.5)
    translate(this.x-100,this.y-100)
    stroke(neutral)
    
    //Top Line
    line(50,50,115,50)
    //Botton Line
    line(50,150,115,150)
    //Rear Arc1
    arc(10,100,90,100, PI+HALF_PI,HALF_PI);
    noFill()
    //Rear Arc2
    arc(50,100,90,100, PI+HALF_PI,HALF_PI);
    noFill()
    //Front Arc
    arc(130,100,100,100, PI+HALF_PI,HALF_PI);
    // Inputs and Outputs colors set depending on A or B
    stroke(this.A ? live : neutral)
    //A Line
    line(0,75,90,75)
    stroke(this.B ? live : neutral)
    //B Line
    line(0,125,90,125)
    stroke((this.B||this.A)&&!(this.B&&this.A) ? live : neutral)
    //Q Line
    line(180,100,230,100)
    pop()
    return (this.B||this.A)&&!(this.B&&this.A)
}

//functions to switch value of A on button pushes
function switchA(){
    A = !A
}

function switchB(){
    B = !B
}

//draw it all with some buttons
function draw(){
    background(255)
    //draw a NAND
    Q = new XOR(200,100,A,B).display()
    //and add some buttons


}
