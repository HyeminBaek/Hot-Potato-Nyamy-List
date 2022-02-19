/*
관심사의 분리 기준: 역할
GET으로 데이터를 가져와 화면에 뿌리는 과정에 대한 코드가 해당 파일에 있습니다.
*/

// created_data를 달과 일로 나누는 함수: 관심사 분리---02.07 
const date_split = (created_data) => created_data.substring(8,10);
const month_split = function(created_data) {
    switch(created_data.substring(5,7)) {
        case('01'): return "January";
        case('02'): return "Fabruary";
        case('03'): return "March";
        case('04'): return "April";
        case('05'): return "May";
        case('06'): return "June";
        case('07'): return "July";
        case('08'): return "August";
        case('09'): return "September";
        case('10'): return "October";
        case('11'): return "November";
        case('12'): return "December";
    }
}
// 먹킷리스트를 가져오는 함수
const getAllList = () => {
    fetch("http://185.162.75.92:3000/baccine")
    .then(response => {
        return response.json();
    }).then(data =>{
        const target = document.getElementById("target");

        for(let i =0;i<data.length;i++){
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

            let list = `
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

            target.innerHTML+=list;
        }

        //토글 버튼 이벤트 연결
        const chkValue = document.getElementsByClassName("chkbox");
        //console.log(chkValue);
        for(let i =0;i<chkValue.length;i++) {
            chkValue[i].addEventListener("change",function(){stateUpdate(chkValue[i])});
        }
        

    }).catch(err => {
        alert("error!0");
    });
}
//토글 버튼 이벤트
const stateUpdate = (element) => {
    console.log(1);
    if(!element.checked) {
        fetch(("http://185.162.75.92:3000/baccine/unclear/"+element.name),{
            method: 'PUT',              
            headers: {
                'Content-Type': 'application/json',
            },
            }).then(response => {
                console.log(element.name);
            }).catch(err => {
                alert("error1!");
            });
    } else {
        fetch(("http://185.162.75.92:3000/baccine/clear/"+element.name),{
            method: 'PUT',              
            headers: {
                'Content-Type': 'application/json',
            },
            }).then(response => {
            }).catch(err => {
                alert("error2!");
            });
    } 
}

getAllList();