const fs = require('fs');
const http = require('http');
const axios = require('axios');


const contentToWrite = "This is the content of the file I'm writing.";
fs.writeFile('sample.txt', contentToWrite, (err) => {
  if (err) {
    console.error("Error writing file:", err);
  } else {
    console.log("File 'sample.txt' has been written.");
    
    
    fs.readFile('sample.txt', 'utf8', (err, data) => {
      if (err) {
        console.error("Error reading file:", err);
      } else {
        console.log("File content:", data);
      }
    });
  }
});


const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end('<h1>Hello World</h1>');
});

server.listen(8000, 'localhost', () => {
  console.log('HTTP server is running on http://localhost:8000/');
});

axios.get('http://www.google.com')
  .then((response) => {
   
    fs.writeFile('google.html', response.data, (err) => {
      if (err) {
        console.error("Error writing HTML file:", err);
      } else {
        console.log("HTML file 'google.html' has been created with data from http://www.google.com");
      }
    });
  })
  .catch((error) => {
    console.error("Error fetching data from http://www.google.com:", error);
  });
