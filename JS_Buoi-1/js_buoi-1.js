// BAI 1: tinh tien luong nhan vien//

/**
 input: 
    - x: payment per day (100.000)
    - a: number of days
    - total : tổng số tiền lương với số ngày a
 process:
   1. tạo biến x, a
   2. gán giá trị x, a
   3. thực hiện phép tính số tiền lương = số tiền 1 ngày * số ngày = x*a
 output: 
   số tiền lương total

 */

var x = 0;
var a = 0;
var total = 0;

x = 100000;
a = 30 ;
total = x * a;

console.log ("Tong so tien luong la: " + total)


// BAI 2: TINH GIA TRI TRUNG BINH//

/**

input: 
- 5 biến a, b, c, d, e
process: 
  1. tạo 5 biến a, b, c, d, e và gán gtri, biến avg là giá trị trung bình của 5 số
  2. thực hiện phép tính tìm tổng 5 biến
  3. tính giá trị trung bình avg bằng cách chia tổng cho 5
output:
- kết quả phép tính trung bình avg
 */

var a = 0;
var b = 0;
var c = 0;
var d = 0;
var e = 0;
var sum = 0;
var avg = 0;

a = 34;
b = 9;
c = 50;
d = 12;
e = 21;
sum = a + b + c + d + e;
avg = sum / 5;
console.log ("gia tri trung binh la: " + avg)

//BÀI 3: ĐỔI XIỀN//

/**

input: 
  biến x tượng trưng cho giá tiền của 1 USD với giá trị là 23500;
  biến usd là số usd ng dùng nhập
  vnd là số tiền được quy đổi ra
process:
  1. tạo lần lượt các biến trên và gán giá trị
  2. thực hiện phép toán vnd = x * usd

Output:
số tiền VND được quy đổi ra từ số USD nhập vào
 */

var x = 0;
var usd = 0;
var vnd = 0;

x = 5;
usd = 23500;
vnd = x * usd;

console.log(x + " USD doi ra VND bang: " + vnd +" VND");

//BÀI 4: TÍNH DIỆN TÍCH, CHU VI HÌNH CHỮ NHẬT

/**
 input: chiều dài a và chiều rộng b của hình chữ nhật
 progress:
 1. tạo các biến chiều dài a, chiều rộng b, diện tích S, chu vi P, sum tổng chiều dài và chiều rộng
 2. gán giá trị cho các biến
 3. tính diện tích S bằng phép toán S = a*b
 4. tính chu vi P bằng phép toán P = (a+b)*2
 output: diện tích hình chữ nhật S, chu vi hình chữ nhật P
 */

 var a = 0;
 var b = 0;
 var S = 0;
 var P = 0;
 var sum = 0;

 a = 70;
 b = 55;
 S = a * b;
 sum = a + b;
 P = sum * 2;

 console.log("Dien tich hinh chu nhat la: " + S);
 console.log("Chu vi hinh chu nhat la: " + P);

 //BÀI 5: TÍNH TỔNG 2 KÍ SỐ

 /**
  input: số nguyên dương n có 2 ký số

  progress: 
  1. tạo biến n là số dương có 2 ký số, số hàng chục x, số hàng đơn vị y
  2. tách số hàng chục: x = n / 10
  3. tách số hàng đơn vị y = n % 10
  4. tính tổng sum = x + y

  output: tổng sum của 2 ký số
  */

  var n = 0;
  var x = 0;
  var y = 0;
  var sum = 0;

  n = 67;
  x = Math.floor(n/10);
  y = n % 10;
  sum = x + y;

  console.log("Tong 2 ky so cua so nguyen duong " + n + " la: " + sum);