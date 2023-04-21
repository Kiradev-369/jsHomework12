// ? Viết chương trình nhập vào 5 số thực. Tính giá trị trung bình của 5 số này và xuất ra màn hình.
/**
 * Input
 * + user nhập vào 5 số thực
 * + number1, number2, number3, number4, number5
 * Output
 * + tính giá trị trung bình của 5 số
 * progress
 * +b1: khai báo biến và lưu giá trị
 * b2: lập công thức:  là tổng của 5 số người dùng nhập chia cho 5
 * b3: in ra kết quả span#averaged
 */
document.getElementById('btnAveraged').onclick = function() {
    var number1 = document.getElementById('number1').value;
    var number2 = document.getElementById('number2').value;
    var number3 = document.getElementById('number3').value;
    var number4 = document.getElementById('number4').value;
    var number5 = document.getElementById('number5').value;
    document.getElementById('averaged').innerHTML = ( Number(number1) + Number(number2) + Number(number3) + Number(number4) + Number(number5) ) /5;
}