/* PRESS ENTER TO RESET THE BACKGROUND
   also click on canvas and press letters on keyboard*/

// function preload() { // preload works, but there is a limit to 5 sound files i can play before getting errors?? 
//   a = loadSound('a.mp3');
//   b = loadSound('b.mp3');
//   c = loadSound('c.mp3');
//   d = loadSound('d.mp3');
//   e = loadSound('e.mp3');
//   f = loadSound('f.mp3');
//   g = loadSound('g.mp3');
//   h = loadSound('h.mp3');
//   i = loadSound('i.mp3');
//   j = loadSound('j.mp3');
//   k = loadSound('k.mp3');
//   l = loadSound('l.mp3');
//   m = loadSound('m.mp3');
//   n = loadSound('n.mp3');
//   o = loadSound('o.mp3');
//   p = loadSound('p.mp3');
//   q = loadSound('q.mp3');
//   r = loadSound('r.mp3');
//   s = loadSound('s.mp3');
//   t = loadSound('t.mp3');
//   u = loadSound('u.mp3');
//   v = loadSound('v.mp3');
//   w = loadSound('w.mp3');
//   x = loadSound('x.mp3');
//   y = loadSound('y.mp3');
//   z = loadSound('z.mp3');

//}

function setup() {
  createCanvas(windowWidth, windowHeight);
  a = loadSound('a.mp3');
  b = loadSound('b.mp3');
  c = loadSound('c.mp3');
  d = loadSound('d.mp3');
  e = loadSound('e.mp3');
  f = loadSound('f.mp3');
  g = loadSound('g.mp3');
  h = loadSound('h.mp3');
  i = loadSound('i.mp3');
  j = loadSound('j.mp3');
  k = loadSound('k.mp3');
  l = loadSound('l.mp3');
  m = loadSound('m.mp3');
  n = loadSound('n.mp3');
  o = loadSound('o.mp3');
  p = loadSound('p.mp3');
  q = loadSound('q.mp3');
  r = loadSound('r.mp3');
  s = loadSound('s.mp3');
  t = loadSound('t.mp3');
  u = loadSound('u.mp3');
  v = loadSound('v.mp3');
  w = loadSound('w.mp3');
  x = loadSound('x.mp3');
  y = loadSound('y.mp3');
  z = loadSound('z.mp3');
}

function draw() {
  if (keyCode == ENTER) {
    background(0);
  }
  if ((keyIsPressed == true) && (key == 'a')) {
    textSize(random(50));
    fill(random(255), 0, random(255), random(255));
    text('a', random(width), random(height));
    a.play();
  }
  if ((keyIsPressed == true) && (key == 'b')) {
    textSize(random(50));
    fill(random(255), random(255), random(255), random(255));
    text('b', random(width), random(height));
    b.play();
  }
  if ((keyIsPressed == true) && (key == 'c')) {
    textSize(random(50));
    fill(random(255), random(255), random(255), random(255));
    text('c', random(width), random(height));
    c.play();
  }
  if ((keyIsPressed == true) && (key == 'd')) {
    textSize(random(50));
    fill(random(255), random(255), random(255), random(255));
    text('d', random(width), random(height));
    d.play();
  }
  if ((keyIsPressed == true) && (key == 'e')) {
    textSize(random(50));
    fill(random(255), 0, random(255), random(255));
    text('e', random(width), random(height));
    e.play();
  }
  if ((keyIsPressed == true) && (key == 'f')) {
    textSize(random(50));
    fill(random(255), random(255), random(255), random(255));
    text('f', random(width), random(height));
    f.play();
  }
  if ((keyIsPressed == true) && (key == 'g')) {
    textSize(random(50));
    fill(random(255), random(255), random(255), random(255));
    text('g', random(width), random(height));
    g.play();
  }
  if ((keyIsPressed == true) && (key == 'h')) {
    textSize(random(50));
    fill(random(255), random(255), random(255), random(255));
    text('h', random(width), random(height));
    h.play();
  }
  if ((keyIsPressed == true) && (key == 'i')) {
    textSize(random(50));
    fill(random(255), 0, random(255), random(255));
    text('i', random(width), random(height));
    i.play();
  }
  if ((keyIsPressed == true) && (key == 'j')) {
    textSize(random(50));
    fill(random(255), random(255), random(255), random(255));
    text('j', random(width), random(height));
    j.play();
  }
  if ((keyIsPressed == true) && (key == 'k')) {
    textSize(random(50));
    fill(random(255), random(255), random(255), random(255));
    text('k', random(width), random(height));
    k.play();
  }
  if ((keyIsPressed == true) && (key == 'l')) {
    textSize(random(50));
    fill(random(255), random(255), random(255), random(255));
    text('l', random(width), random(height));
    l.play();
  }
  if ((keyIsPressed == true) && (key == 'm')) {
    textSize(random(50));
    fill(random(255), random(255), random(255), random(255));
    text('m', random(width), random(height));
    m.play();
  }
  if ((keyIsPressed == true) && (key == 'n')) {
    textSize(random(50));
    fill(random(255), random(255), random(255), random(255));
    text('n', random(width), random(height));
    n.play();
  }
  if ((keyIsPressed == true) && (key == 'o')) {
    textSize(random(50));
    fill(random(255), 0, random(255), random(255));
    text('o', random(width), random(height));
    o.play();
  }
  if ((keyIsPressed == true) && (key == 'p')) {
    textSize(random(50));
    fill(random(255), random(255), random(255), random(255));
    text('p', random(width), random(height));
    p.play();
  }
  if ((keyIsPressed == true) && (key == 'q')) {
    textSize(random(50));
    fill(random(255), random(255), random(255), random(255));
    text('q', random(width), random(height));
    q.play();
  }
  if ((keyIsPressed == true) && (key == 'r')) {
    textSize(random(50));
    fill(random(255), random(255), random(255), random(255));
    text('r', random(width), random(height));
    r.play();
  }
  if ((keyIsPressed == true) && (key == 's')) {
    textSize(random(50));
    fill(random(255), random(255), random(255), random(255));
    text('s', random(width), random(height));
    s.play();
  }
  if ((keyIsPressed == true) && (key == 't')) {
    textSize(random(50));
    fill(random(255), random(255), random(255), random(255));
    text('t', random(width), random(height));
    t.play();
  }
  if ((keyIsPressed == true) && (key == 'u')) {
    textSize(random(50));
    fill(random(255), 0, random(255), random(255));
    text('u', random(width), random(height));
    u.play();
  }
  if ((keyIsPressed == true) && (key == 'v')) {
    textSize(random(50));
    fill(random(255), random(255), random(255), random(255));
    text('v', random(width), random(height));
    v.play();
  }
  if ((keyIsPressed == true) && (key == 'w')) {
    textSize(random(50));
    fill(random(255), random(255), random(255), random(255));
    text('w', random(width), random(height));
    w.play();
  }
  if ((keyIsPressed == true) && (key == 'x')) {
    textSize(random(50));
    fill(random(255), random(255), random(255), random(255));
    text('x', random(width), random(height));
    x.play();
  }
  if ((keyIsPressed == true) && (key == 'y')) {
    textSize(random(50));
    fill(random(255), random(255), random(255), random(255));
    text('y', random(width), random(height));
    y.play();
  }
  if ((keyIsPressed == true) && (key == 'z')) {
    textSize(random(50));
    fill(random(255), random(255), random(255), random(255));
    text('z', random(width), random(height));
    z.play();
  }
}