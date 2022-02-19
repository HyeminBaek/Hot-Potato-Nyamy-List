'use strict';
/*
관심사의 분리 기준: 역할
GET으로 데이터를 가져와 화면에 뿌리는 과정에 대한 코드가 해당 파일에 있습니다.
*/


// created_data를 달과 일로 나누는 함수: 관심사 분리---02.07 
const date_split = (created_data) => created_data.substring(8, 10);
const month_split = (created_data) => {
    switch (created_data.substring(5, 7)) {
        case ('01'): return "January";
        case ('02'): return "Fabruary";
        case ('03'): return "March";
        case ('04'): return "April";
        case ('05'): return "May";
        case ('06'): return "June";
        case ('07'): return "July";
        case ('08'): return "August";
        case ('09'): return "September";
        case ('10'): return "October";
        case ('11'): return "November";
        case ('12'): return "December";
    }
};


// 먹킷리스트를 가져오는 함수
const getAllList = () => {
    fetch("http://185.162.75.92:3000/baccine")
        .then(response => response.json())
        .then(data => {
            const target = document.getElementById("target");

            for (let i = 0; i < data.length; i++) {
                const { is_clear, created_by, name, order, created_data } = data[i];
                const day = date_split(created_data);
                const month = month_split(created_data);

                let clearOffset;
                if (is_clear) {
                    clearOffset = `<input type="checkbox" class="chkbox" name=${order} checked="checked" />`;
                }
                else {
                    clearOffset = `<input type="checkbox" class="chkbox" name=${order} />`;
                }

                const list = `
                    <tr class="inner-box">
                        <th scope="row">
                            <div class="event-date">
                                <span>
                                    ${day}
                                </span>
                                <p>
                                    ${month}
                                </p>

                            </div>
                        </th>
                        <td>
                            <div class="event-wrap">
                                <h3>${name}</h3>
                                <div class="meta">
                                    <div class="organizers">
                                        ${created_by}
                                    </div>
                                </div>
                            </div>
                        </td>
                        <td>
                            <div class="r-no">
                                <span>
                                    <label class="switch">
                                        ${clearOffset}
                                        <span class="slider round"></span>
                                    </label>
                                    ${(is_clear) ? "<p>머금</p>" : "<p>안머금</p>"}
                                </span>
                            </div>
                        </td>
                    </tr>
                `;

                target.innerHTML += list;
            }

            // 토글 버튼 이벤트 연결 / object(DOM) array
            // 각 토글 버튼에는 먹음 유무를 업데이터 함
            const chkBoxes = document.querySelectorAll(".chkbox");
            chkBoxes.forEach(chkBox => chkBox.addEventListener("change", (event) => stateUpdate(event)));

        }).catch(err => {
            console.warn(err);
            alert("error!0");
        });
}

// 각 토글 버튼에는 먹음 유무를 업데이터 함
const stateUpdate = (event) => {
    const chkbox = event.target;

    if (!chkbox.checked) {
        fetch(("http://185.162.75.92:3000/baccine/unclear/" + chkbox.name), {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
        }).then(response => {
            console.log(response);
        }).catch(err => {
            console.warn(err);
            alert("error1!");
        });
    }
    else {
        fetch(("http://185.162.75.92:3000/baccine/clear/" + chkbox.name), {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
        }).then(response => {
            console.log(response);
        }).catch(err => {
            console.warn(err);
            alert("error2!");
        });
    }
}

getAllList();


/*

[ 오늘 피드백 ]
- git hub
- use strict 사용
- 신텍스 통일 - 들여쓰기 
- oneline 가능한건 활용하자 () => 에서 리턴 생략한 케이스 생각
- for대신 forEach 사용 -> 왜? 동작원리는 저번에 깨달았음 
- addEventListener? callback? => study
- html에 div가 너무 많음
- git feature브랜치 사용하기! 


[ JS 공부 ]
- Array and object destructing(배열 및 객체 비구조화) 문법
- promise, async, await 공부
- fetch.then.catch 공부
- 이크마스크립트를 깨우치셨으니, 위 문법 규칙들이 각 ES 몇 규칙인지 알아오기
- callback 공부 - https://youtu.be/TAyLeIj1hMc


[ 과제 ]
- 위 코드들을 잘보면
    1. 유틸성을 가지는 함수 (month_split 등)
    2. API 요청만 보내는 함수 (fetch)
        - 여기서 응답 에러 케이스를 판별해줘야함
    3. API 응답 성공시 처리만 하는 함수 
    4. 이벤트를 처리하는 함수

    와 같이 4가지 형태로 나타나는 것을 깨달았다, 사실 아주 기본적으로 위와 같이 나뉜다. 어떤 상황에서든 위와 같은 코드 형태가 자연스럽게 된다
    그럼 우리는 각 4가지를 "관심사 분리" 적으로 생각할 수 있다. 협업을 할때, 캡슐링을 할때 고민해야 할 부분이 늘어났다!
    각 4가지를 적절하게 "분리" 해보자. 여기서 "적절한 주관이 중요하다"

    너무 분리가 되어 있으면 찾기 힘들다. 오히려 협업할때 서로서로 힘들 수 도 있다!
    너무 분리가 안되어 있으면 협업 하기 힘들고 재사용성이 너무 떨어진다. 서로 결속력도 너무 강해진다.
    정답은 없다. "논리적"으로 하고싶은대로 하면 된다!

- 잘 모르겠으면 아래 4가지 사항을 생각해보자 
    1. 유틸성을 가지는 덩어리들은 뭔가 유틸리티 파일에 다 담아서 보관하면 편할 것 같다
    2. API 요청을 보내기만 하는 놈은 역할만 나눠놓고 (어떤놈은 getAllFoodList, getOneFood, updateFood 등으로 함수 이름을 정하고) 
       API request만 처리하고 에러 처리와 성공시 데이터를 return만 함수처럼 만듦면 어떨까? 디렉토리는 일단 마음대로 해보자
    3. 응답을 성공했다면? 성공시 처리해야하는 작업이 들어가야한다! 
    4. 성공시 처리해야하는 작업에 이벤트 바인딩을 하는 함수가 필요하다면??


- 사실 여기서 promise, async, await, fetch.then.catch 를 모르면 제대로 나눌 수 가 없다 사실...
- 정답은 없으니까 자유롭게 해보자! 


[ P.S ]
- 사실 예전에 한 번 말했던 부분인데, commonJS말고 ES6 부터 모듈화에 대한 서포팅이 많다 (https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Modules)
- script type=moude 을 사용해서 분리해야한 것도 고려해보자. 
- 어려우면 재끼자 / 왜냐면 사실 정확하게 모듈화를 하려면 npm, 패키지, 서버가 필요할 수 있기 때문

*/