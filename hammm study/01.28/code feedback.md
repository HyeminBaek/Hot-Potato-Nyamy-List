~~~
1. 가장 근본은 관심사의 분리 -> 하나의 파일은 하나의 일만 수행해야 함 ex.헤더,스크립트 파일을 분리할 것
<1-1. 요청을 받는 것과 핸들링하는 것을 분리할 것
2. "" 안에서 "를 쓰고 싶으면 '을 쓸 것 ->\" 하지마!
3. foreach 사용 굿굿, for문 사용 지양 -> for와 foreach 차이 알기
4. <!-- Bootstrap : CDN 서버 통해 file가져오지말고, 직접 라이브러리를 static하게 저장해서 불러오기 -->
5. CDN이 무엇인지 알아오기 -> 초기로딩속도 차이
6. <!-- meta tag : SEO -->
7. 메타(데이터를 정의하는 데이터) 태그는 html 문서는 무엇이다를 검색엔진 봇들에게 알려주는 역할
8. <meta name="viewport" content="width=device-width, initial-scale=1.0"> //width를 디바이스에 맞게 해준다!
9. 인라인 스타일 추가하지 말고 css 클래스 추가해서 진행 -> css 네이밍 규칙 __ (언더바2개) 사용
10. 어떨 때 인라인, important을 쓰는지 이해


1. onClick이 협업,캡슐화에 효율적인가? -> 관심사의 분리/ addEventListner
2. onClick 다 뺄 것
3. 이벤트 버블링 배워와!
4. <table>은 구닥다리, <ul><li> 를 많이 쓴다
~~~  
~~~
조언

1. 앞으로 모든 js 접두에 use strict; 를 쓰자!
2. .env(api/mongoDB/nginx) -> docker-compose.yml
3. shift는 반대의 역할을 수행한다 ex. ctrl+z <-> ctrl+shift+z
~~~
![image](https://user-images.githubusercontent.com/55080554/151549073-1b959bab-0ea0-4836-9cf7-36302650eeb4.png)
