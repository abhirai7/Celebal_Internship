//Priting Hello World by creating a server that listens on port 5000
const http = require('http');
const server = http.createServer((req ,res)=>{
res.writeHead(200,{'Content-Type':'text/html'});
res.end("Hello World\n");
});
 
server.listen(5000 , ()=>{
    console.log('Server is running at http://localhost:5000/');
});

// In package.json / scripts , I have added : 
//  "start":"node index.js" 

// IMP : To run this server use : npm start 