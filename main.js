const btn = document.querySelector('#btn');
const inputs = document.getElementsByTagName('input');
var currentdate = new Date(); 
btn.addEventListener('click', function () {
    inputs[2].value = tinh_ngay(inputs[0].value,inputs[1].value);
})

const tinh_ngay = function (month, year) {
    if(month === ""){
        month = currentdate.getMonth() + 1;
    }
    if(year === ""){
        year = currentdate.getFullYear();
    }
    let day = 0;
    switch (Number(month)) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            day = 31;
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            day = 30;
            break;
        case 2:
            if (Number(year) % 400 == 0 || (Number(year) % 4 == 0 && Number(year) % 100 != 0)) {
                day = 29;
            } else {
                day = 28;
            }
            break;
    }
    return `Tháng ${month} năm ${year} có ${day} ngày`;
}
