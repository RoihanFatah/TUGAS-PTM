zodiak.onclick = function() {
    let bulan = document.querySelector("#bulan").value;
    let tgl = document.querySelector("#tanggal").value;

    //SISTEM ZODIAK
    if ((tgl >= 21 && tgl <= 31 && bulan == 3) || (tgl >= 1 && tgl <= 19 && bulan == 4) ) {
        document.querySelector("#hasil").innerHTML = "ARIES";

    } else if ((tgl >= 20 && tgl <= 30 && bulan == 4) || (tgl >= 1 && tgl <= 20 && bulan == 5)) {
        document.querySelector("#hasil").innerHTML = "TAURUS";

    } else if ((tgl >= 21 && tgl <= 30 && bulan == 5) || (tgl >= 1 && tgl <= 20 && bulan == 6)) {
        document.querySelector("#hasil").innerHTML = "GEMINI";

    } else if ((tgl >= 21 && tgl <= 30 && bulan == 6) || (tgl >= 1 && tgl <= 22 && bulan == 7)) {
        document.querySelector("#hasil"). innerHTML = "CANCER";

    } else if ((tgl >= 23 && tgl <= 31 && bulan == 7) || (tgl >= 1 && tgl <= 22 && bulan == 8 )) {
        document.querySelector("#hasil"). innerHTML = "LEO";

    } else if ((tgl >= 23 && tgl <= 30 && bulan == 8) || (tgl >= 1 && tgl <= 22 && bulan == 9)) {
        document.querySelector("#hasil"). innerHTML = "VIRGO";

    } else if ((tgl >= 23 && tgl <= 30 &&  bulan == 9 ) || (tgl >= 1 && tgl <= 22 && bulan == 10)) {
        document.querySelector("#hasil"). innerHTML = "LIBRA";

    } else if ((tgl >= 23 && tgl <= 31 && bulan == 10) || (tgl >= 1 && tgl <= 21 && bulan == 11)) {
        document.querySelector("#hasil"). innerHTML = "SCORPIO";

    } else if ((tgl >= 22 && tgl <= 30 && bulan == 11) || (tgl >= 1 && tgl <= 21 && bulan == 12)) {
        document.querySelector("#hasil"). innerHTML = "SAGITARIUS";

    } else if ((tgl >= 22 && tgl <= 31 && bulan == 12) || (tgl >= 1 && tgl <= 19 && bulan == 1)) {
        document.querySelector("#hasil"). innerHTML = "CAPRICORN";

    } else if ((tgl >= 20 && tgl <= 31 && bulan == 1) || (tgl >= 1 && tgl <= 18 && bulan == 2)) {
        document.querySelector("#hasil"). innerHTML = "AQUARIUS";

    } else if ((tgl >= 19 && tgl <= 29 && bulan == 2) || (tgl >= 1 && tgl <= 20 && bulan == 3)) {
        document.querySelector("#hasil"). innerHTML = "PISCES";
    } 

    //PENGECEKAN
    if (tgl >= 32 && bulan >= 13) {
        document.querySelector("#hasil"). innerHTML = "INPUT SALAH";

    } else if (tgl >= 32) {
        document.querySelector("#hasil"). innerHTML = "INPUT TANGGAL SALAH";

    } else if (bulan >= 13) {
        document.querySelector("#hasil"). innerHTML = "INPUT BULAN SALAH";
    }


   
}