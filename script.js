document.addEventListener("DOMContentLoaded", function() {
    // Get the target element by its id
    let element = document.getElementById("level");
  
    // Initialize a variable to count the DOM level
    let domLevel = 1;
  
    // Traverse the parent elements until we reach the root html element
    while (element && element !== document.documentElement) {
      element = element.parentElement;
      domLevel++;
    }
  
    // Display the result using the alert() function
    alert(`The level of the element is: ${domLevel}`);
  });