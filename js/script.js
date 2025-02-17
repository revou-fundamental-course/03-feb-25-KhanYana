// Ini File JavaScript

// Pengambilan tag elemen berdasarkan ID
const mainInput = document.getElementById("insert");
const mainResult = document.getElementById("result");
const calculation = document.getElementById("calculation");
const labelInput = document.getElementById("input");
const labelOutput = document.getElementById("output");

let celciusToFahrenheit = true; // Mengubah kondisi awal

// Fungsi Konversi
function konversi() {
    const inputValue = parseFloat(mainInput.value);

    if (isNaN(inputValue)) {
        // Tampilkan pesan error di dalam input box
        mainInput.value = "";
        mainInput.placeholder = "Mohon inputkan suhu!";
        mainInput.style.border = "3px solid red";
        mainInput.style.color = "red";
        mainResult.value = "";
        calculation.value = "";
        return;
    }

    // Reset warna & placeholder jika input valid
    mainInput.style.border = "3px solid #ccc";
    mainInput.style.color = "black";
    mainInput.placeholder = "Masukkan suhu";

    // RUMUS KONVERSI SUHU
    let hasil, cara;
		if (celciusToFahrenheit) {
        // Konversi dari Celcius ke Fahrenheit
        let fahrenheit = (inputValue * 9 / 5) + 32;
        fahrenheit = Math.round(fahrenheit * 100) / 100;
        hasil = `${fahrenheit}\u00B0F`;
        cara = `(${inputValue}℃ × (9/5)) + 32 = ${hasil}`;
    } else {
        // Konversi dari Fahrenheit ke Celcius
        let celcius = (inputValue - 32) * 5 / 9;
        celcius = Math.round(celcius * 100) / 100;
        hasil = `${celcius}\u00B0C`;
        cara = `(${inputValue}℉ - 32) × (5/9) = ${hasil}`;
    }

    // Menampilkan hasil konversi
    mainResult.value = hasil;
    calculation.value = cara;
}

// Fungsi Reset
function reset() {
    mainInput.value = "";
    mainInput.placeholder = "Masukkan suhu";
    mainInput.style.border = "3px solid #ccc";
    mainInput.style.color = "black";
    mainResult.value = "";
    calculation.value = "";
}

// Fungsi Reverse
function reverse() {
    celciusToFahrenheit = !celciusToFahrenheit;
    
    let inputValue = parseFloat(mainInput.value);
    if (!isNaN(inputValue)) {
        inputValue = celciusToFahrenheit
            ? ((inputValue - 32) * 5) / 9 // Fahrenheit ke Celcius
            : (inputValue * 9) / 5 + 32; // Celcius ke Fahrenheit

        mainInput.value = inputValue.toFixed(2);
    } else {
        // Reset tampilan tanpa menampilkan alert
        mainInput.value = "";
        mainInput.placeholder = "Masukkan suhu";
        mainInput.style.border = "3px solid #ccc";
        mainInput.style.color = "black";
    }

    // Tukar label input dan output
    labelInput.innerHTML = celciusToFahrenheit
        ? "Celcius (&deg;C):"
        : "Fahrenheit (&deg;F):";

    labelOutput.innerHTML = celciusToFahrenheit
        ? "Fahrenheit (&deg;F):"
        : "Celcius (&deg;C):";
	konversi();
}

// Warna box kembali normal saat diketik
mainInput.addEventListener("input", function () {
    mainInput.style.border = "3px solid #ccc";
    mainInput.style.color = "black";
    mainInput.placeholder = "Masukkan suhu";
});