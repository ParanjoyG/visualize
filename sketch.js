let input, button, greeting;
var name = 'Anusmitaa';
var font;
var vehicles = [];

function preload() {
  font = loadFont('AvenirNextLTPro-Demi.otf');
}

function setup() {
  createCanvas(1450, 500);
  background(51);
  input = createInput();
  input.position(20, 65);
  fill(255);

  button = createButton('submit');
  button.position(input.x + input.width, 65);
  button.mousePressed(change);

  greeting = createElement('h2', 'Enter the Word.');
  greeting.position(20, 5);

  textAlign(CENTER);
  textSize(50);
  
  
 
  
}

function change()
{
  name = input.value();
  vehicles = [];
  var points = font.textToPoints(name, 100, 300, 192, {
    sampleFactor: 0.25
  });

  for (var i = 0; i < points.length; i++) {
    var pt = points[i];
    var vehicle = new Vehicle(pt.x, pt.y);
    vehicles.push(vehicle);
  }
}
function draw() {
  background(101);
  for (var i = 0; i < vehicles.length; i++) {
    var v = vehicles[i];
    v.behaviors();
    v.update();
    v.show();
  }
}
