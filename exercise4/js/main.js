// ? Viết chương trình nhập vào 2 chiều dài và chiều rộng của hcm. Tính chu vi và diện tích
/**
 * input
 * + chiều dài, chiều rộng
 * + rectangleLength, rectangleWidth
 * output
 * + tính diện tích, chu vi
 * + acreage, perimeter
 * progress
 * + khai báo và lưu giá trị viến
 * + công thưc tính: dienTich = dài * rộng, chuVi = (dài + rộng) *2
 * + in ra kết quả span#calculate
 */
document.getElementById("btnCalculate").onclick = function () {
  var rectangleLength = document.getElementById("rectangleLength").value;
  var rectangleWidth = document.getElementById("rectangleWidth").value;

  var acreage = rectangleLength * rectangleWidth;
  var perimeter = (rectangleLength + rectangleWidth) * 2;
  document.getElementById("calculate").innerHTML =
    "Diện tích: " + acreage + "; Chu vi: " + perimeter;
};
