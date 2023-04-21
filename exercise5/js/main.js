// ? Viết chương trình nhập vào hai chữ số. tính tổng hai kí số của hai số vừa nhập
/**
 * input
 * +user nhập vào hai chữ số
 * +twoDigits
 * output
 * + tính tổng hai kí số
 * progress
 * + khai báo và lưuưu giá trị biến
 * + công thức tính: tổng hai số = số thứ 1 + số thứ 2
 * + in kết quả vào thẻ span#calculate
 */
document.getElementById('btnCalculate').onclick = function (){
    var twoDigits = document.getElementById('twoDigits').value;
    var number1 = Math.floor(twoDigits / 10);
    var number2 = twoDigits % 10;
    console.log(number1, number2)
    document.getElementById('calculate').innerHTML = number1 + number2;
}