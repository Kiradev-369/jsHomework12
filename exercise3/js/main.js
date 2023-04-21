// ? giá usd hiện nay đang là 23.500 vnd. Viết chương trình thay đổi usd sang vnd. Cho người dùng nhập vào số tiền usd. Tính và xuất ra số tiền sau quy đổi vnd. 
/**
 * Input
 * + user nhập vào sô tiền usd
 * + enterTheAmount
 * Output
 * + Tính và xuất ra số tiền sau quy đổi vnd
 * + currencyExchange
 * Progress
 * + Khai báo biến và lưu giá trị
 * + công thức quy đổi: enterTheAmount * 23500
 * + in ra giá trị ra span#currencyExchange
 */

document.getElementById('btnCurrencyExchange').onclick = function(){
    var enterTheAmount = document.getElementById('enterTheAmount').value;

    var currencyExchange = enterTheAmount * 23500;
    console.log(currencyExchange);

    document.getElementById('currencyExchange').innerHTML = currencyExchange.toLocaleString();
}
