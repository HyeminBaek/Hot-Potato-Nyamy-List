const http = require("http"); //모듈

const express = require("express"); //Q. require()이 수행하는 행동
const app = express(); //객체를 생성해야 한다
app.set('port', '3000');

app.get("/", (request, response) => { 
    response.send(`<h1>햄 테스트</h1>`); 
});
console.log('connect root end point');

const server = http.createServer(app);
server.listen('3000');

console.log('end of codes');
/*
Q. 이렇게만 던져줄테니 CRUD 만들어봐! 
- 몽고디비를 쓸 것
- mongoose  dotenv  cors 설치
- app.router 찾아오기 -> spring으로 MVC패턴을 적용해서 만들기
- router는 end pointer를 명시해주는 것인데 spring에서 controller와 비슷하다고 생각하면 된다
- node 프로젝트에서 따와도 되긴 한다(대신 왜 썼는지 대답해야 함)
- 크롬에서 aws ip:3000 접속하는데 public ip로 접근하기
*/

//mongoose는 ORM! 
//ORM) 논리적인 데이터베이스의 객체와 코드에서의 인스턴스(객체)와 매핑해주는 것

/*
< 검색해야할 것들 >
Q. 노드로 서버만들기
Q. 몽고 디비 모델 만들기
Q. 스키마, 컬렉션, 모델, 오브젝트아이디 알아오기
Q. nodemon 알아오기
Q. package.json의 각 항목들이 무슨 일을 하는지
Q. public ip vs private ip

PuTTY 설치
elastic computing -> ec2 에다가 몽고 디비를 깔자!

**** 제일 먼저 해야할 것
- 우분투에 몽고디비,노드(npm & npm 버전관리),엔진엑스 설치하기
- 우분투에서 git setting -> git pull로 코드 받아오기(git clone => git remote add / git pull)
*/