# RandomTextGenerator
Fetches a random title and body of a post from the JSONPlaceholder API and displays them on a webpage when a button is clicked. The code listens for a click event on the button with ID "generate-btn" and then makes a request to the API using the fetch() method. It then parses the JSON response and selects a random title and body from the array of posts using Math.random() and Math.floor().