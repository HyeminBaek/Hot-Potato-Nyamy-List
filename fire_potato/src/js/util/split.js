'use strict';

// created_data로부터 일 value를 뽑아냄
const date_split = (created_data) => created_data.substring(8, 10);

// created_data로부터 월 value를 뽑아냄
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