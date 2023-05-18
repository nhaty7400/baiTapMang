// Nhập số n
var mangSoNguyen = [];

function nhapSoNguyen() {
    var n = Number(document.getElementById("soNguyen").value);
    mangSoNguyen.push(n);
    document.getElementById("mangSoNguyen").innerHTML = mangSoNguyen;
}
document.getElementById("btnThemSoNguyen").onclick = nhapSoNguyen;

// 1.Tổng số dương

function tongSoDuong() {
    var tongSoDuong = 0;
    for (var i = 0; i < mangSoNguyen.length; i++) {
        if(mangSoNguyen[i]>0){
            tongSoDuong+=mangSoNguyen[i];
        }
    }
    document.getElementById("result-1").innerHTML = "Tổng số dương: " + tongSoDuong;
}
document.getElementById("btnTinhTongDuong").onclick = tongSoDuong;

// 2.Đếm số dương

function demSoDuong() {
    var demSoDuong = 0;
    for (var i = 0; i < mangSoNguyen.length; i++) {
        if (mangSoNguyen[i] > 0) {
            demSoDuong++;
        }
    }
    document.getElementById("result-2").innerHTML = "Số số dương: " + demSoDuong;
}
document.getElementById("btnDemSoDuong").onclick = demSoDuong;

// 3.Tìm số nhỏ nhất

function timMin() {
    var min = mangSoNguyen[0];
    for (var i = 1; i < mangSoNguyen.length; i++) {
        if (mangSoNguyen[i] < min) {
            min = mangSoNguyen[i];
        }
    }
    document.getElementById("result-3").innerHTML = "Số nhỏ nhất là: " + min;
}
document.getElementById("btnTimMin").onclick = timMin;

// 4.Tìm số dương nhỏ nhất

function timMinDuong() {
    var mangSoDuong = [];
    for (var i = 0; i < mangSoNguyen.length; i++) {
        if (mangSoNguyen[i] > 0) {
            mangSoDuong.push(mangSoNguyen[i]);
        }
    }
    if (mangSoDuong.length == 0) {
        document.getElementById("result-4").innerHTML = "Mảng không có số dương";
    } else {
        var minDuong = mangSoDuong[0];
        for (var i = 1; i < mangSoDuong.length; i++) {
            if (mangSoDuong[i] < minDuong) {
                minDuong = mangSoDuong[i];
            }
        }
        document.getElementById("result-4").innerHTML = "Số dương nhỏ nhất là: " + minDuong;
    }

}
document.getElementById("btnTimMinDuong").onclick = timMinDuong;

// 5.Tìm số chẵn cuối cùng

function timSoChan() {
    var soChan = 1;
    for (var i = mangSoNguyen.length - 1; i >= 0; i--) {
        if (mangSoNguyen[i] % 2 == 0) {
            soChan = mangSoNguyen[i];
            break;
        }

    }
    if(soChan==1){
        document.getElementById("result-5").innerHTML="Mảng không có số chẵn";
    }else{
        document.getElementById("result-5").innerHTML = "Số chẵn cuối là: " + soChan;
    }
    
}
document.getElementById("btnTimSoChan").onclick = timSoChan;


// 6.Đổi chỗ

function doiCho() {
    var vt1 = document.getElementById("viTri1").value;
    var vt2 = document.getElementById("viTri2").value;
    
    if((vt1>=mangSoNguyen.length||vt1<0)||(vt2>=mangSoNguyen.length||vt2<0)){
        alert("Hãy nhập vị trí là số nguyên có giá trị từ 0 tới độ dài mảng trừ 1");
        return 0;
    }

    var n = mangSoNguyen[vt1];
    mangSoNguyen[vt1] = mangSoNguyen[vt2];
    mangSoNguyen[vt2] = n;
    document.getElementById("result-6").innerHTML = "Mảng sau khi đổi vị trí: " + mangSoNguyen;

}
document.getElementById("btnDoiCho").onclick = doiCho;

// 7.Sắp xếp tăng dần

function tangDan() {
    var mangSoNguyenCopy = [];
    for (var i = 0; i < mangSoNguyen.length; i++) {
        mangSoNguyenCopy.push(mangSoNguyen[i]);
    }

    var result = mangSoNguyenCopy.sort(function (a, b) {
        return a - b;
    })
    document.getElementById("result-7").innerHTML = result;
}
document.getElementById("btnSXTang").onclick = tangDan;


// 8.Tìm số nguyên tố đầu tiên

function kiemTraSoNT(n) {
    if (n < 2) {
        return false;
    } else {
        for (var i = 2; i <= Math.round(Math.sqrt(n)); i++) {
            if (n % i == 0) {
                return false;
            }
        }
        return true;
    }
}

function timSoNT() {
    var soNT = 0;
    for (var i = 0; i < mangSoNguyen.length; i++) {
        if (kiemTraSoNT(mangSoNguyen[i]) == true) {
            soNT = mangSoNguyen[i];
            break;
        }

    }
    if (soNT == 0) {
        document.getElementById("result-8").innerHTML = "Mảng không có số nguyên tố";
    } else {
        document.getElementById("result-8").innerHTML = "Số nguyên tố đầu tiên là: " + soNT;
    }
}
document.getElementById("btnTimSoNT").onclick = timSoNT;


// 9.Đếm số nguyên

var mangSoThuc = [];

function nhapSoThuc() {
    var n = Number(document.getElementById("soThuc").value);
    mangSoThuc.push(n);
    document.getElementById("mangSoThuc").innerHTML = mangSoThuc;
}
document.getElementById("btnThemSoThuc").onclick = nhapSoThuc;

function demSoNguyen() {
    var demSoNguyen = 0;
    for (var i = 0; i < mangSoThuc.length; i++) {
        if (Number.isInteger(mangSoThuc[i]) == true) {
            demSoNguyen++;
        }

    }
    document.getElementById("result-9").innerHTML = "Số số nguyên trong mảng là: " + demSoNguyen + " số";
}
document.getElementById("btnDemSoNguyen").onclick = demSoNguyen;

// 10.So sánh số lượng số âm và số dương


function soSanh(){
    var demSoAm=0;
    var demSoDuong=0;

    for (var i = 0; i < mangSoNguyen.length; i++) {
        if(mangSoNguyen[i]<0){
            demSoAm++;
        }else if(mangSoNguyen[i]>0){
            demSoDuong++;
        }else{
            continue;
        }
    }

    if (demSoAm>demSoDuong) {
        document.getElementById("result-10").innerHTML="Số số âm > Số số dương";
    }else if(demSoAm<demSoDuong){
        document.getElementById("result-10").innerHTML="Số số âm < Số số dương";
    }else{
        document.getElementById("result-10").innerHTML="Số số âm = Số số dương";
    }
}
document.getElementById("btnSoSanh").onclick=soSanh;

