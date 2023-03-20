const generateBtn = document.getElementById("generate-btn");
const titleOutput = document.getElementById("title");
const bodyOutput = document.getElementById("body");
const outputDiv = document.getElementById("output");

function generateText() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => response.json())
    .then(json_response => {
      const title = json_response[Math.floor(Math.random() * json_response.length)].title;
      const body = json_response[Math.floor(Math.random() * json_response.length)].body;
      titleOutput.textContent = title;
      bodyOutput.textContent = body;
      outputDiv.style.display = "block";
    })
    .catch(error => console.log(error));
}

generateBtn.addEventListener("click", generateText);
