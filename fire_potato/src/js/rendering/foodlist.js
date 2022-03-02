/*
해당 파일에서 사용된 es6 문법
1) const
2) arrow func
3) template literals: ${}
4) array and object destructing
5) import and export
*/
'use strict';

export const printList = (data, day, month) => {
    const { is_clear, created_by, name, order, created_data } = data; //4)

    let clearOffset;
    if (is_clear) {
        clearOffset = `<input type="checkbox" class="chkbox" name=${order} checked="checked" />`;
    }
    else {
        clearOffset = `<input type="checkbox" class="chkbox" name=${order} />`;
    }
    //3)
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

    return list;
}