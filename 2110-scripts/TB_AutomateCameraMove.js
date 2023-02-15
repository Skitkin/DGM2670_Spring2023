// Define the start and end position of the camera
var startPosition = [0, 0, -100];
var endPosition = [0, 0, 100];

// Define the duration of the camera move
var duration = 1;

// Create a camera move from the start to end position over the defined duration
var camera = Camera.create();
camera.setPosition(startPosition);
var animation = Animation.create(camera, duration);
animation.addKeyFrame(endPosition);