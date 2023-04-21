// ? Viết chương trình tính tiền lương nhân viên. Lương 1 ngày là 100.000. Cho người dùng nhập vào số ngày làm  
/**
 * Input
 * + Lương một ngày: number & số ngày làm: number
 * + salary1D, workDay
 * Progress
 * +b1: khai báo biến và lưu giá trị
 * b2: công thức tính lương: lương một ngày * số ngày làm
 * b3: in kết quả ra span#totalSalary
 * 
 * Output
 * + tổng lương: number
 */

function showTotalSalary (){
    var salary1D = document.getElementById('salary1D').value;
    var workDay = document.getElementById('workDay').value;
    document.getElementById('totalSalary').innerHTML = salary1D * workDay;
}

document.getElementById('btnTotalSalary').onclick = showTotalSalary;
