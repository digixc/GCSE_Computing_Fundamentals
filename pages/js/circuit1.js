var A = true;
var B = false;
var Q = false;

function setup(){
    createCanvas(200,200);  
    frameRate(12);
    live = color(255,0,0);
    neutral = color(100,100,100);
    ORimg = loadImage("OR.jpg");
    btnA = createButton('A')
    btnA.position(25,27)
    btnB = createButton('B')
    btnB.position(25,52)
    btnQ = createButton('Q')
    btnQ.position(200,39)
    btnCarry = createButton("Q'")
    btnCarry.position(200,112.5)
    btnA.mousePressed(switchA)
    btnB.mousePressed(switchB)
}

function AND(x,y,A,B){
    this.x = x;
    this.y = y;
    this.A = A;
    this.B = B;
}

AND.prototype.display = function(){
    //Move to x and y
    push()
    strokeWeight(6)
    scale(0.5,0.5)
    translate(this.x-100,this.y-100)
    //Draw the AND gate
    stroke(neutral)
    line(50,50,100,50)
    line(50,150,100,150)
    line(50,50,50,150)
    noFill()
    arc(100,100,100,100, PI+HALF_PI,HALF_PI);
    // Inputs and Outputs colors set depending on A or B
    stroke(this.A ? live : neutral)
    line(0,75,50,75)
    stroke(this.B ? live : neutral)
    line(0,125,50,125)
    stroke(this.B&&this.A ? live : neutral)
    line(150,100,200,100)
    pop()
    return this.B&&this.A
}


function OR(x,y,A,B){
    this.x = x;
    this.y = y;
    this.A = A;
    this.B = B;
}

OR.prototype.display = function(){
    //Move to x and y
    push()
    strokeWeight(6)
    scale(0.5,0.5)
    translate(this.x-100,this.y-100)
    stroke(neutral)
    //Draw OR gate using a tinted image
    tint(255,150)
    image(img,30,40)
    //ellipse(160,100,20,20);
    // Inputs and Outputs colors set depending on A or B
    stroke(this.A ? live : neutral)
    line(0,75,50,75)
    stroke(this.B ? live : neutral)
    line(0,125,50,125)
    stroke(this.A||this.B ? live : neutral)
    line(165,100,200,100)
    pop()
    return this.B||this.A
}


//wire class (xy start, XY end, On is true or false)
function wire(x,y,X,Y,On){
    this.x = x;
    this.y = y;
    this.X = X;
    this.Y = Y;
    this.On = On;
}

//wire display
wire.prototype.display = function(){
    strokeWeight(3)
    stroke(this.On ? live : neutral)
    line(this.x,this.y,this.X,this.Y)
}



//functions to switch value of A on button pushes
function switchA(){
    A = !A
}

function switchB(){
    B = !B
}
