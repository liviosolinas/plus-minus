let txt_schedaX = 250, txt_schedaY = 10; 

class Checkbox { 
    x; y; b; 
    constructor(_x, _y) 
    { 
        this.x = _x; 
        this.y = _y; 
        this.b = false; 
    } 
    
    render() 
    {
        stroke(255); 
        fill(this.isOver() ? 128 : 64); 
        rect(this.x, this.y, 20, 20); 
        if (this.b) 
        { 
            line(this.x, this.y, this.x + 20, this.y + 20); 
            line(this.x, this.y + 20, this.x + 20, this.y); 
        } 
    } 
    
    click() 
    { 
        if (this.isOver()) 
        { 
            this.b = !this.b; 
        } 
    } 
    
    isOver() 
    { 
        return (mouseX > this.x && mouseX < this.x + 20 && mouseY > this.y && mouseY < this.y + 20); 
    } 
} 

//usage
//Checkbox[] boxes = new Checkbox[3];
//void setup(){
//  size(200,200);
//  smooth();
//  for(int i=0; i< boxes.length; i++){
//    boxes[i] = new Checkbox(10 + 30 * i, 10);
//  }
//}
//void draw(){
//  background(0);
//  boolean allChecked = true;
//  for(int i=0; i< boxes.length; i++){
//    boxes[i].render();
//    if(!boxes[i].b){
//      allChecked = false;
//    }
//  }
//  if(allChecked){
//    stroke(255);
//    line(10,40,90,40);
//    stroke(255,0,0);
//    point(random(10,90), 40);
//  }
//}
//void mousePressed(){
//  for(int i=0; i< boxes.length; i++){
//    boxes[i].click();
//  }
//}
class TextBox 
{ // demands rectMode(CORNER)
    textC; 
    baseC; 
    bordC; 
    slctC; 
    x; 
    y; 
    w; 
    h; 
    xw; 
    yh; 
    lim; 
    isFocused; 
    txt = ""; 
    
    constructor(txt, xx, yy, ww, hh, li, te, ba, bo, se) 
    { 
        this.txt = txt; 
        this.x = xx; 
        this.y = yy; 
        this.w = ww; 
        this.h = hh; 
        this.lim = li; 
        this.xw = (xx + ww); 
        this.yh = (yy + hh); 
        this.textC = te; 
        this.baseC = ba; 
        this.bordC = bo; 
        this.slctC = se;
    } 
    
    display() 
    { 
        stroke(this.isFocused ? this.slctC : this.bordC); 
        fill(this.baseC); 
        rect(this.x, this.y, this.w, this.h); 
        fill(this.textC); 
        text(this.txt + this.blinkChar(), this.x, this.y, this.w, this.h); 
    } 
    
    blinkChar() 
    { 
        // return isFocused && (frameCount>>2 & 1) == 0 ? "_" : "  ";
        return this.isFocused && (((frameCount >> 2) & 1) === 0) ? "_" : "  ";
    } 
    
    checkFocus() 
    { 
        return this.isFocused = mouseX > this.x & mouseX < this.xw & mouseY > this.y & mouseY < this.yh; 
    }

} //usage
//static final int NUM = 2;
//final TextBox[] tboxes = new TextBox[NUM];
//int idx;
//void setup() {
//  size(640, 480);
//  frameRate(20);
//  smooth(4);
//  rectMode(CORNER);
//  textAlign(LEFT);
//  strokeWeight(1.5);
//  instantiateTextBox();
//  tboxes[idx = 1].isFocused = true;
//}
//void draw() {
//  background("#778C85");
//  for (int i = 0; i != NUM; tboxes[i++].display());
//}
//void mouseClicked() {
//  int i = idx = -1;
//  while (++i != NUM)  if (tboxes[i].checkFocus())  idx = i;
//}
//void keyTyped() {
//  final char k = key;
//  if (k == CODED | idx < 0)  return;
//  final TextBox tbox = tboxes[idx];
//  final int len = tbox.txt.length();
//  if (k == BACKSPACE)  tbox.txt = tbox.txt.substring(0, max(0, len-1));
//  else if (len >= tbox.lim)  return;
//  else if (k == ENTER | k == RETURN)     tbox.txt += "\n";
//  else if (k == TAB & len < tbox.lim-3)  tbox.txt += "    ";
//  else if (k == DELETE)  tbox.txt = "";
//  else if (k >= ' ')     tbox.txt += str(k);
//}
//void keyPressed() {
//  if (key != CODED | idx < 0)  return;
//  final int k = keyCode;
//  final TextBox tbox = tboxes[idx];
//  final int len = tbox.txt.length();
//  if (k == LEFT)  tbox.txt = tbox.txt.substring(0, max(0, len-1));
//  else if (k == RIGHT & len < tbox.lim-3)  tbox.txt += "    ";
//}
function instantiateTextBox() 
{
    /*
    tboxes[0] = new TextBox( "2" ,
        txt_schedaX, txt_schedaY, // x, y
        70, 25, // w, h
        215, // lim
        0300 << 030, color(-1, 040), // textC, baseC
        color(#000000, 0100), color(#000000, 0200)); // bordC, slctC

    tboxes[1] = new TextBox( "" ,
        txt_schedaX, 40, // x, y
        70, 25, // w, h
        640, // lim
        0300 << 030, color(-1, 040), // textC, baseC
        color(#000000, 0100), color(#000000, 0200)); // bordC, slctC
    }
    */ 
    tboxes[0] = new TextBox("2",
        txt_schedaX, txt_schedaY, // x, y
        70, 25,                 // w, h
        215,                   // lim
        color(0, 0, 0, 192),   // textC
        color(255, 255, 255, 32), // baseC
        color(0, 0, 0, 64),    // bordC
        color(0, 0, 0, 128)    // slctC
      );

      tboxes[1] = new TextBox(
        "",
        txt_schedaX, 40,       // x, y
        70, 25,               // w, h
        640,                  // lim
        color(0, 0, 0, 192),  // textC: nero con alfa 192
        color(255, 255, 255, 32), // baseC: bianco con alfa 32
        color(0, 0, 0, 64),   // bordC: nero con alfa 64
        color(0, 0, 0, 128)   // slctC: nero con alfa 128
      );
      
} 

class Button {
    txt = ""; x; y; w; h; basecolor; highlightcolor; 
    currentcolor; 
    over = false; 
    pressed = false;
    
    constructor(txt, ix, iy, isize, h, icolor, ihighlight) 
    { 
        this.txt = txt; this.x = ix; this.y = iy; this.w = isize; 
        this.h = h; this.basecolor = icolor; this.highlightcolor = ihighlight; this.currentcolor = this.basecolor; 
    } 
    
    update() 
    { 
        if (this.over) 
        { 
            this.currentcolor = this.highlightcolor; 
        } 
        else 
        { 
            this.currentcolor = this.basecolor; 
        } 
    }
    
    pressed() 
    {
        console.log("BUTTON:pressed()");
        if (this.over) 
        { //locked = true;
            console.log("BUTTON:pressed()=>true");
            return true;
        } 
        else 
        { //locked = false;
            console.log("BUTTON:pressed()=>false");
            return false;
        }
    } 
    
    over() 
    { 
        console.log("BUTTON:over()");
        return true; 
    } 
    
    overRect(x, y, width, height) 
    { 
        if (mouseX >= x && mouseX <= x + width && mouseY >= y && mouseY <= y + height) 
        { 
            return true; 
        } 
        else 
        { 
            return false; 
        } 
    } 
    
    display() 
    { 
        stroke(90); 
        fill(this.currentcolor); 
        rect(this.x, this.y, this.w, this.h); 
        fill(0); 
        textAlign(CENTER); 
        text(this.txt, this.x, this.y, this.w, this.h); 
    }
} 