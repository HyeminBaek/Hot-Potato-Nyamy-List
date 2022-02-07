[ git command ]
~~~
git branch: 
rm -rf:
git clone [원격 레포지토리 URL]:
git log: ':Q'
code . :
git status: 
git add --all:
git push 원격저장소이름 브랜치이름:
~~~
js 파일 분리 관습: 외부 라이브러리는 public 디렉토리, 개인 js는 src 디렉토리에 넣는다

파일을 함수단위로 분리하는 거 X -> 역할에 초점 ex. API 요청만 하는 것들, DOM 렌더링만 하는 것들로 묶는다
<br>index.js, .css가 있음 좋다 -> 누가봐도 dependency가 .js, .css에 있구나! 라고 알 수 있게끔
<br>그다음에 index.js를 어떻게 나눌 것인가 고민!

DB에 있는 index를 가져오자! -> order가 인덱스 값

<br>promise, async, await
<br>fetch.then.catch

'랑 "랑 병행해서 사용하면 나중에 syntax error가 발생할 수 있다->통일할 것!

\" -> ' 로 사용

---

html 구조: 브라우저는 코드를 순서대로 읽는다
<br><body>안에 <script> 넣기 지양 -> 넣을거면 그 이유를 정확히 설명할 것
<br><script>가 들어갈 수 있는 곳: (1) <body>가 끝나기 직전 (2) <head> 안 (3) <body> 끝나고 난 후
<br>-> 언제 <script>가 바인딩 되는지에 따라 다음과 같은 3가지 형태로 사용된다
<br>*** <script>가 바인딩이 언제 되는가? 가 key point

다음 시간까지 해야할 것) 
1. getList.js 를 ex.js 형태로 변환하기
2. [동영상 강의1](https://youtu.be/wcsVjmHrUQg)
3. [동영상 강의2](https://youtu.be/tJieVCgGzhs)
4. 환경변수와 앨리어스에 대해 알아오기
5. Array and object destructing(배열 및 객체 비구조화) 문법
