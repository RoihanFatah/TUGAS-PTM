let a;
let b;
let c;
let hasil = document.querySelector("#hasil");


function tambah(){
    a = parseFloat(document.calculator.angka1.value);
    b = parseFloat(document.calculator.angka2.value);
    c = a + b ;
    hasil.innerHTML = c;
}

function kurang(){
    a = parseFloat(document.calculator.angka1.value);
    b = parseFloat(document.calculator.angka2.value);
    c = a - b ;
    hasil.innerHTML = c;
}

function kali(){
    a = parseFloat(document.calculator.angka1.value);
    b = parseFloat(document.calculator.angka2.value);
    c = a * b ;
    hasil.innerHTML = c;
}

function bagi(){
    a = parseFloat(document.calculator.angka1.value);
    b = parseFloat(document.calculator.angka2.value);
    c = a / b ;
    hasil.innerHTML = c;
}

function halo() {
    alert("HALOOOO");
}



// tambah.onclick = function () {
//     let a = parseFloat( document.querySelector("#angka1").value);
//     let b = parseFloat( document.querySelector("#angka2").value);
//     let c = a + b;
//     document.querySelector("#hasil").innerHTML = c;
// }

















// let hasil = document.querySelector("#hasil");
// let angka1 = document.querySelector("#num1");
// let angka2 = document.querySelector("#num2");

// switch (jumlah) {
//     case 'kali':
//         hasil = parseFloat(angka1) * parseFloat(angka2);
//         break;

//     default:
//         break;
// }


