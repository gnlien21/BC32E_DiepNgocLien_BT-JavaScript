//Bài 1:

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

//Bài 2:


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

//Bài 3:

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

//Bài 4:

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

//Bài 5:

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