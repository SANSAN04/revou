var hitungBMI = document.getElementById("hitungBMI");
    
    hitungBMI.addEventListener("click", function (event){
        event.preventDefault();
        var jenisKelaminValue = document.getElementById("jenisKelamin").value
        var beratBadanValue = document.getElementById("beratBadan").value
        var usiaValue = document.getElementById("usia").value
        var tinggiBadanValue = document.getElementById("tinggiBadan").value

        var finalbmi = (beratBadanValue / (tinggiBadanValue * tinggiBadanValue) * 10000);
        document.getElementById('bmi-output').value = finalbmi;

        if (finalbmi < 18.5 ) {
            console.log(finalbmi + "Kekurangan Berat Badan")
        }
        else if (finalbmi > 18.5 && finalbmi < 24.9) {
            console.log(finalbmi + "Normal(Ideal)")
        }
        else if (finalbmi > 25.0 && finalbmi < 29.9) {
            console.log(finalbmi + "Kelebihan Berat Badan")
        }
        else if (finalbmi > 30.0) {
            console.log(finalbmi + "Kegemukan(Obesitas)")
        }
}
    )

//function bmi-output {
  //  document.getElementById('bmi-output').value = finalbmi;
//}
//function tampilHasilBMI (jenisKelamin, beratBadan, usia, tinggiBadan) {
   // var  jenisKelaminOutput = document.getElementById("jenisKelaminOutput")
   // jenisKelaminOutput.textContent = jenisKelamin
   // var  beratBadanOutput = document.getElementById("beratBadanOutput")
   // beratBadanOutput.textContent = beratBadan
// };