// Get the button and output elements from the HTML
const generateBtn = document.getElementById("generate-btn");
const titleOutput = document.getElementById("title");
const bodyOutput = document.getElementById("body");
const outputDiv = document.getElementById("output");

// Function to generate random text
function generateText() {
  // Fetch the JSON response from the API endpoint
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => response.json())
    .then(json_response => {
      // Extract the title and body fields from a random post
      const title = json_response[Math.floor(Math.random() * json_response.length)].title;
      const body = json_response[Math.floor(Math.random() * json_response.length)].body;
      // Display the title and body in the HTML
      titleOutput.textContent = title;
      bodyOutput.textContent = body;
      // Show the output
      outputDiv.style.display = "block";
    })
    .catch(error => console.log(error));
}

// Add event listener to the button
generateBtn.addEventListener("click", generateText);
