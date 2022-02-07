/*
관심사의 분리 기준: 역할
GET으로 데이터를 가져와 화면에 뿌리는 과정에 대한 코드가 해당 파일에 있습니다.
*/

// created_data를 달과 일로 나누는 함수: 관심사 분리---02.07 
const date_split = (created_data) => created_data.substring(8,10);
const month_split = (created_data) => {
    switch(created_data.substring(5,7)) {
        case(1): "January";
        case(2): "Fabruary";
        case(3): "March";
        case(4): "April";
        case(5): "May";
        case(6): "June";
        case(7): "July";
        case(8): "August";
        case(9): "September";
        case(10): "October";
        case(11): "November";
        case(12): "December";
    }
}

// 먹킷리스트를 가져오는 함수
const getAllList = async() => {
    await fetch("http://185.162.75.92:3000/baccine")
    .then(response => {
        return response.json();
    }).then(data =>{
        const target = document.getElementById("target");

        let list ="";
        for(let i =0;i<data.length;i++){
            const { is_clear, created_by, name, order, created_data } = data[i];
            const day = date_split(created_data);
            const month = month_split(created_data);

            list += `
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
                                    <input type="checkbox" onclick="stateUpdate(this)" name=${order}`;

                if(is_clear) list += ">";
                else list += "checked='checked'>";
            
                list += `<span class="slider round"></span>
                        </label>`;
            
                if(is_clear) list += "<p>안머금</p>";
                else list += "<p>머금</p>";

                list += `</span>
                        </div>
                    </td>
                </tr>`;
                            
            target.innerHTML+=list;
        }
    }).catch(err => {
        alert("error!");
    });
}