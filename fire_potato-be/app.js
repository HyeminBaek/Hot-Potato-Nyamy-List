import http from "http";
import express from "express";
import bodyParser from "body-parser";//html의 body를 받아오기 위한 모듈 사용
import {router} from "./routes/route.js";
import db from "./models/index.js";

const app = express(); //객체 생성
app.use(bodyParser.json()); // content-type: application/json 
app.use(bodyParser.urlencoded({ extended: true })); //content-type: application/x-www-form-urlencoded

app.set('port', '3000');

// RESTful API route for DB 
app.use('/', router);

// DB Connection 
connect(db.url, { 
    useNewUrlParser: true, useUnifiedTopology: true }) 
    .then(() => { 
        console.log('db.url', db.url); 
        console.log('db.mongoose', db.mongoose); 
        console.log('db.food.db', db.food.db); 
        console.log('Database Connection Success'); 
    }) 
    .catch(err => { 
        console.log('Database Connection Failure', err); 
        process.exit(); 
    }); 
    
// Default route for server status
app.get("/", (request, response) => { 
    response.send(`<h1>햄 테스트</h1>`); 
});

const server = http.createServer(app);
server.listen('3000', () =>{
    console.log('Server is running');
});
