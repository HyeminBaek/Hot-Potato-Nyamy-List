/*
해당 파일에서 사용된 es6 문법
1) const
2) arrow func
3) template literals
4) import and export
5) promise
*/
'use strict';

// 월,일 split 함수 불러오기
import { date_split, month_split } from "./util/split.js";
import { printList } from "./rendering/foodlist.js";

// 먹킷리스트를 가져오는 함수
export const getAllList = () => {
    fetch("http://185.162.75.92:3000/baccine") //5) fetch는 promise를 리턴
        .then(response => {
            return response.json();
        })
        .then(data => {
            const target = document.getElementById("target");

            for (let i = 0; i < data.length; i++) {
                const created_data = data[i].created_data;

                const day = date_split(created_data);
                const month = month_split(created_data);

                target.innerHTML += printList(data[i], day, month);
            }

            // 토글 버튼 이벤트 연결 / object(DOM) array
            // 각 버튼에는 먹음 유무를 업데이트 하는 이벤트가 연결됨
            const chkBoxes = document.querySelectorAll(".chkbox");
            chkBoxes.forEach(chkBox => chkBox.addEventListener("change", (event) => stateUpdate(event)));

        }).catch(err => {
            console.warn(err);
        });
}

// 먹음 유무를 업데이트 이벤트
export const stateUpdate = (event) => {
    const chkbox = event.target;

    let url = "http://185.162.75.92:3000/baccine/";
    url += (!chkbox.checked)?"unclear/":"clear/";

    fetch((url + chkbox.name), {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
    }).then(response => {
        console.log(response);
    }).catch(err => {
        console.warn(err);
    });
    
}

getAllList();