//Bài 1:
document.getElementById('btnTinhLuong').onclick = function(){

    var luongMotNgay = document.getElementById('luongMotNgay').value;
    var soNgayLam = document.getElementById('soNgayLam').value;
    var soTienLuong = 0;

    soTienLuong = luongMotNgay * soNgayLam;

    document.getElementById('soTienLuong').innerHTML = "👉 " + soTienLuong;
}

//Bài 2:

document.getElementById('btnTinhTB').onclick = function(){
    var soThuNhat = +document.getElementById('soThuNhat').value;
    var soThuHai = +document.getElementById('soThuHai').value;
    var soThuBa = +document.getElementById('soThuBa').value;
    var soThuTu = +document.getElementById('soThuTu').value;
    var soThuNam = +document.getElementById('soThuNam').value;
    var giaTriTrungBinh = 0;
    var tongNamSo = 0;

    tongNamSo = soThuNhat + soThuHai + soThuBa + soThuTu + soThuNam;
    giaTriTrungBinh = tongNamSo/5;

    document.getElementById('giaTriTrungBinh').innerHTML = '👉 ' + giaTriTrungBinh;
}

//Bài 3:
var donGia = 0;
donGia = 23500;
document.getElementById('donGia').innerHTML = 'Giá USD hôm nay là ' + donGia+ ' VND';
// chỗ này cho mình ngựa xíu mentor thông cảm :v

document.getElementById('doiTien').onclick = function(){
    var soTienUSD = +document.getElementById('soTienUSD').value;
    var soTienVND = 0;
    soTienVND = soTienUSD*donGia;

    document.getElementById('ketQuaVND').innerHTML = 'Số tiền VND bạn nhận được là: ' + soTienVND + ' VND';
}

//Bài 4:

document.getElementById('tinhSP').onclick = function(){
    var chieuDai = +document.getElementById('chieuDai').value;
    var chieuRong = +document.getElementById('chieuRong').value;
    var dienTich = 0;
    var sumDaiRong = 0;
    var chuVi = 0;
    dienTich = chieuDai*chieuRong;
    sumDaiRong = chieuDai + chieuRong;
    chuVi = sumDaiRong*2;
    document.getElementById('ketQuaSP').innerHTML = 'Diện tích là: ' + dienTich + ' Chu vi là: ' + chuVi;
}

//Bài 5:

document.getElementById('tongKySo').onclick = function(){
    var soNguyen = +document.getElementById('soNguyen').value;
    var hangChuc = 0;
    var hangDVi = 0;
    var tong2KySo = 0;
    hangChuc = Math.floor(soNguyen/10);
    hangDVi = soNguyen%10;
    tong2KySo = hangChuc + hangDVi;

    document.getElementById('ketQua5').innerHTML = 'Tồng 2 ký số bằng: ' + tong2KySo;
}
