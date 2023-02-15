// Define the color you want to use
var newColor = [1, 0, 0];

// Get the elements in the scene
var elements = Scene.getElements();

// Loop through each element
for (var i = 0; i < elements.length; i++) {
  // Get the current element
  var element = elements[i];

  // Change the color of the element
  element.setColor(newColor);
}