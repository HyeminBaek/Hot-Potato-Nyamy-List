'use strict';

// 월,일 split 함수 불러오기
document.write("<script type='text/javascript' src='./src/js/util/split.js'></script>");

// 먹킷리스트를 가져오는 함수
const getAllList = () => {
    fetch("http://185.162.75.92:3000/baccine")
        .then()
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