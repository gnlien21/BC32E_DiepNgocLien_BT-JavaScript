//Bài 1: sắp xếp thứ tự số

document.getElementById('btnSapXep').onclick = function(){
    //input: soThu1 : number, soThu2: number, soThu3" number
    var a = +document.getElementById('soThu1').value;
    var b = +document.getElementById('soThu2').value;
    var c = +document.getElementById('soThu3').value;

    //output: thuTu : string
    var thuTu = '';

    //progress:

    if (a>b && b>c){
        thuTu = c +'<'+ b +'<'+ a;
    } else if (a>b && c>b) {
        thuTu = b + '<'+ c + '<'+a;
    } else if (a > b && c > a){
        thuTu = b + '<'+ a + '<'+c;
    } else if (b > a && a >c){
        thuTu = c + '<'+ a + '<'+b;
    } else if (b>c && c>a){
        thuTu = a + '<'+ c + '<'+b;
    } else {
        thuTu = a + '<'+ b + '<'+c;
    }

    document.getElementById('ketQua_B1').innerHTML = thuTu;
}

//Bài 2: In ra lời chào


document.getElementById('btnChaoHoi').onclick = function(){
    //input: các option: string
    var option = document.getElementById('listChaoHoi').value;

    //output: lời chào: string
    var loiChao = '';

    //progress

    switch (option) {
        case 'B': {
            loiChao = 'Chào Bố!';
        };break;
        case 'M': {
            loiChao = 'Chào Mẹ!';
        };break;
        case 'A': {
            loiChao = 'Chào Anh!';
        };break;
        case 'C': {
            loiChao = 'Chào Chị!';
        };break;
        case 'E': {
            loiChao = 'Chào Em!';
        };break;
        default: {
            loiChao = 'invalid value';
        }
     }

     document.getElementById('ketQua_B2').innerHTML = loiChao;
}

//Bài 3: đếm số chẵn lẻ

document.getElementById('btnDemSo').onclick = function (){
    //input: num1, num2, num3 : number
    var num1 = +document.getElementById('num1').value;
    var num2 = +document.getElementById('num2').value;
    var num3 = +document.getElementById('num3').value;
    //output: soChan (number), soLe (number)
    var soChan = 0;
    var soLe = 0;
    var count = 0;

    //progress:

    if (num1 % 2 === 0)  {
        soChan++;
    } if (num2 % 2 === 0) {
        soChan++;
    } if (num3 % 2 === 0) {
        soChan++;
    }

    soLe = 3 - soChan;

    document.getElementById('ketQua_B3').innerHTML = 'số chẵn có: ' + soChan + ' số' + ' số lẻ có: ' + soLe + ' số';
}

//Bài 4: đoán tam giác khi biết độ dài 3 cạnh

document.getElementById('btnDoan').onclick = function(){
    //input: độ dài 3 cạnh tam giác: number
    var canh1 = +document.getElementById('canh1').value;
    var canh2 = +document.getElementById('canh2').value;
    var canh3 = +document.getElementById('canh3').value;

    //output: tenTamGiac : string
    var tenTamGiac = '';

    //progress:

    if (canh1 === canh2 && canh2 === canh3){
        tenTamGiac = 'tam giác đều';
    } else if (canh1 === canh2 || canh2 === canh3 || canh3 === canh1){
        tenTamGiac = 'tam giác cân';
    } else if (canh1 == Math.sqrt(canh2*canh2 + canh3*canh3) || canh2 == Math.sqrt(canh1*canh1 + 
        canh3*canh3)|| canh3 == Math.sqrt(canh2*canh2 + canh1*canh1)) {
        tenTamGiac = 'tam giác vuông';
    } else {
        tenTamGiac = 'tam giác thường';
    }

    document.getElementById('ketQua_B4').innerHTML = tenTamGiac;
}

//Bài 5: tính ngày/tháng/năm hôm qua và ngày mai

document.getElementById('ngayMai').onclick = function(){
    //input: ngày, tháng, năm: number
    var ngay = +document.getElementById('ngay').value;
    var thang = +document.getElementById('thang').value;
    var nam = +document.getElementById('nam').value;
    //output: ngày, tháng, năm tiếp theo: number
    var ngay2 = 0;
    var thang2 = 0;
    var nam2 = 0;

    //progress:
    if (thang == 2){
        if (ngay == 28){
            ngay2 = 1;
            thang2 = 3;
            nam2 = nam;
        } else if (ngay > 28){
            ngay2 = 'error: invalid date';
            thang2 = 'error: invalid date';
            nam2 = 'error: invalid date';
        } 
        else {
            ngay2 = ngay+1;
            thang2 = 2;
            nam2 = nam;
        }
    } else if (thang == 12){
        if (ngay == 31){
            ngay2 = 1;
            thang2 = 1;
            nam2 = nam+1;
        } else if (ngay > 31){
            ngay2 = 'error: invalid date';
            thang2 = 'error: invalid date';
            nam2 = 'error: invalid date';
        }  else {
            ngay2 = ngay+1;
            thang2 = 12;
            nam2 = nam;
        }
    } else if (thang == 1 || thang == 3 || thang == 5 || thang == 7 || thang == 8 || thang == 10){
        if(ngay == 31){
            ngay2 = 1;
            thang2 = thang+1;
            nam2 = nam;
            
        } else if (ngay > 31){
            ngay2 = 'error: invalid date';
            thang2 = 'error: invalid date';
            nam2 = 'error: invalid date';
        } else {
            ngay2 = ngay+1;
            thang2 = thang;
            nam2 = nam;
        }
    } else if (thang == 4 || thang == 6 || thang == 9 || thang == 11){
        if (ngay == 30){
            ngay2 = 1;
            thang2 = thang+1;
            nam2 = nam;
        } else if (ngay > 30){
            ngay2 = 'error: invalid date';
            thang2 = 'error: invalid date';
            nam2 = 'error: invalid date';
        } else {
            ngay2 = ngay+1;
            thang2 = thang;
            nam2 = nam;
        }
    } else {
        ngay2 = 'unknown';
        thang2 = 'unknown';
        nam2 = 'unknown';
    }

    document.getElementById('ketQua_B5').innerHTML = ngay2 + '/' + thang2 + '/'+ nam2;
}

document.getElementById('homQua').onclick = function (){
    //input: ngày, tháng, năm: number
    var ngay = +document.getElementById('ngay').value;
    var thang = +document.getElementById('thang').value;
    var nam = +document.getElementById('nam').value;
    //output: ngày, tháng, năm trước đó: number

    var ngay1 = 0;
    var thang1 = 0;
    var nam1 = 0;

    //progress:
    
    if (thang == 1){
        if (ngay == 1){
            ngay1 = 31;
            thang1 = 12;
            nam1 = nam - 1;
        } else {
            ngay1 = ngay - 1 ;
            thang1 = 1;
            nam1 = nam;
        }
    } else if (thang == 3){
        if (ngay == 1 ) {
            ngay1 = 28;
            thang1 = 2;
            nam1 = nam;
        } else {
            ngay1 = ngay - 1;
            thang1 = thang;
            nam1 = nam;
        }
    } else if (thang == 5 || thang == 7 || thang == 8 || thang == 10 || thang == 12){
        if (ngay == 1){
            ngay1 = 30;
            thang1 = thang - 1;
            nam1 = nam;
        } else {
            ngay1 = ngay - 1;
            thang1 = thang;
            nam1 = nam;
        }
    } else if (thang == 2 || thang == 4 || thang == 6 || thang == 9 || thang == 11) {
        if (ngay == 1){
            ngay1 = 31;
            thang1 = thang - 1;
            nam1 = nam;
        } else {
            ngay1 = ngay - 1;
            thang1 = thang;
            nam1 = nam;
        }
    } else {
        ngay1 = 'unknown';
        thang1 = 'unknown';
        nam1 = 'unknown';
    }
    document.getElementById('ketQua_B5').innerHTML = ngay1 + '/' + thang1 + '/'+ nam1;
}


//BÀI 6: tính số ngày khi có tháng + năm

document.getElementById('btnTinhSoNgay').onclick = function () {
    //input: month (number), year (number)
    var month = +document.getElementById('month').value;
    var year = +document.getElementById('year').value;
    //output: soNgay (number)
    var soNgay = 0;

    //progress:

    if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
        switch (month) {
            case 1: {
                soNgay = 31;
            }; break;
            case 2: {
                soNgay = 29;
            };break;
            case 3: {
                soNgay = 31;
            };break;
            case 4: {
                soNgay = 30;
            };break;
            case 5: {
                soNgay = 31;
            };break;
            case 6: {
                soNgay = 30;
            };break;
            case 7: {
                soNgay = 31;
            };break;
            case 8: {
                soNgay = 31;
            };break;
            case 9: {
                soNgay = 30;
            };break;
            case 10: {
                soNgay = 31;
            };break;
            case 11: {
                soNgay = 30;
            };break;
            case 12: {
                soNgay = 31;
            };break;
            default: {
                soNgay = 'unknown';
            }
        }
    } else {
        switch (month) {
            case 1: {
                soNgay = 31;
            }; break;
            case 2: {
                soNgay = 28;
            };break;
            case 3: {
                soNgay = 31;
            };break;
            case 4: {
                soNgay = 30;
            };break;
            case 5: {
                soNgay = 31;
            };break;
            case 6: {
                soNgay = 30;
            };break;
            case 7: {
                soNgay = 31;
            };break;
            case 8: {
                soNgay = 31;
            };break;
            case 9: {
                soNgay = 30;
            };break;
            case 10: {
                soNgay = 31;
            };break;
            case 11: {
                soNgay = 30;
            };break;
            case 12: {
                soNgay = 31;
            };break;
            default: {
                soNgay = 'unknown';
            }
        }
    }

    document.getElementById('ketQua_B6').innerHTML = 'Số ngày của tháng ' + month + ' là: ' + soNgay;
}


//BÀI 7: In ra cách đọc của số nguyên 3 chữ số
document.getElementById('btnDocSo').onclick = function() {
    //input: soNguyen(number)
    var soNguyen = +document.getElementById('soNguyen').value;

    //output: cách đọc (string)

    var docSo = '';
    var docHangTram = '';
    var docHangChuc = '';
    var docDonVi = '';

    //progress:

    //tìm số hàng trăm, chục và đơn vị:

    var hangTram = 0;
    var hangChuc = 0;
    var hangDonVi = 0;

    hangTram = Math.floor(soNguyen/100);
    hangChuc = Math.floor(soNguyen%100/10);
    hangDonVi = soNguyen%10;

    

    switch (hangTram) {
        case 1: {
            docHangTram = 'Một trăm';
        };break;
        case 2: {
            docHangTram = 'Hai trăm';
        };break;
        case 3: {
            docHangTram = 'Ba trăm';
        };break;
        case 4: {
            docHangTram = 'Bốn trăm';
        };break;
        case 5: {
            docHangTram = 'Năm trăm';
        };break;
        case 6: {
            docHangTram = 'Sáu trăm';
        };break;
        case 7: {
            docHangTram = 'Bảy trăm';
        };break;
        case 8: {
            docHangTram = 'Tám trăm';
        };break;
        case 9: {
            docHangTram = 'Chín trăm';
        };break;
        default: {
            docHangTram = 'error';
        }
    }

    switch (hangChuc) {
        case 0: {
            docHangChuc = 'lẻ';
        };break;
        case 1: {
            docHangChuc= 'mười';
        };break;
        case 2: {
            docHangChuc = 'hai mươi';
        };break;
        case 3: {
            docHangChuc = 'ba mươi';
        };break;
        case 4: {
            docHangChuc = 'bốn mươi';
        };break;
        case 5: {
            docHangChuc = 'năm mươi';
        };break;
        case 6: {
            docHangChuc = 'sáu mươi';
        };break;
        case 7: {
            docHangChuc = 'bảy mươi';
        };break;
        case 8: {
            docHangChuc = 'tám mươi';
        };break;
        case 9: {
            docHangChuc = 'chín mươi';
        };break;
        default: {
            docHangChuc = 'error';
        }
    }
    switch (hangDonVi) {
        case 0: {
            docDonVi = 'mươi';
        };break;
        case 1: {
            if (hangChuc == 0 || hangChuc == 1){
                docDonVi = 'một';
            } else {
                docDonVi = 'mốt';
            }
        };break;
        case 2: {
            docDonVi = 'hai';
        };break;
        case 3: {
            docDonVi = 'ba';
        };break;
        case 4: {
            docDonVi = 'bốn';
        };break;
        case 5: {
            if(hangChuc == 0) {
                docDonVi = 'năm';
            } else {
                docDonVi = 'lăm';
            }
        };break;
        case 6: {
            docDonVi = 'sáu';
        };break;
        case 7: {
            docDonVi = 'bảy';
        };break;
        case 8: {
            docDonVi = 'tám';
        };break;
        case 9: {
            docDonVi = 'chín';
        };break;
        default: {
            docDonVi = 'error';
        }
    }

    docSo = docHangTram + ' '+ docHangChuc+ ' ' + docDonVi;

    document.getElementById('ketQua_B7').innerHTML = docSo;
    
}

//BÀI 8: Tìm sinh viên xa trường nhất
document.getElementById('btnTimToaDo').onclick = function (){
    //input: tên sv (string), tọa độ x1, y1 của sv, tọa độ x2, y2 cùa trường học (number)
    var tenSV1 = document.getElementById('tenSV1').value;
    var tenSV2 = document.getElementById('tenSV2').value;
    var tenSV3 = document.getElementById('tenSV3').value;

    var x1 = +document.getElementById('toaDox1').value;
    var y1 = +document.getElementById('toaDoy1').value;
    var x2 = +document.getElementById('toaDox2').value;
    var y2 = +document.getElementById('toaDoy2').value;
    var x3 = +document.getElementById('toaDox3').value;
    var y3 = +document.getElementById('toaDoy3').value;
    var x4 = +document.getElementById('toaDox4').value;
    var y4 = +document.getElementById('toaDoy4').value;


    //output: d1, d2, d3 : độ dài từ nhà tới trường (number); sinh viên xa trường nhất (string)
    var a = 0;
    var b = 0;
    var c = 0;
    var xaNhat = '';
    //progress:

    //Tính d:
    a = Math.sqrt(Math.pow(x4 - x1, 2) + Math.pow(y4 - y1, 2));
    b = Math.sqrt(Math.pow(x4 - x2, 2) + Math.pow(y4 - y2, 2));
    c = Math.sqrt(Math.pow(x4 - x3, 2) + Math.pow(y4 - y3, 2));

    //So sánh quãng đường của 3 bạn:

    if (a>b && b>c){
        xaNhat = tenSV1;
    } else if (a>b && c>b) {
        xaNhat = tenSV1;
    } else if (a > b && c > a){
        xaNhat = tenSV3;
    } else if (b > a && a >c){
        xaNhat = tenSV2;
    } else if (b>c && c>a){
        xaNhat = tenSV2;
    } else {
        xaNhat = tenSV3;
    }

    document.getElementById('ketQua_B8').innerHTML = 'Sinh viên ở xa trường nhất là: ' + xaNhat;
}





