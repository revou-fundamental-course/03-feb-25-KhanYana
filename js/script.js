// Ini File JavaScript

console.log('Javascript is working!');

// Pengambilan tag elemet
const mainInput = document.getElementById("insert");
const mainResult = document.getElementById("result");
const calculation = document.getElementById("calculation");
const labelInput = document.getElementById("input");
const labelOutput = document.getElementById("output");

let celciusToFahrenheit = true; //Mengubah kondisi awal



function konversi() {
	const inputValue = parseFloat(mainInput.value);
	if (isNaN(inputValue)) {
    alert("Mohon inputkan suhu!");
		mainResult.value = "";
		calculation.value = "";
		return;
	}

	// Kondisi untuk Reverse
	let hasil, cara;
	if (celciusToFahrenheit) {
		hasil = `${(inputValue * 9) / 5 + 32}\u00B0F`;
		cara = `${inputValue}\u00B0C * (9/5) + 32 = ${hasil}`;
	} else {
		hasil = `${(((inputValue - 32) * 5) / 9).toFixed(2)}\u00B0C`;
		cara = `(${inputValue}\u00B0F - 32) * 5/9 = ${hasil}`;
	}
	// Menampilkan ke Inputan hasil dan cara
	mainResult.value = hasil;
	calculation.value = cara;
}

// Fungsi Reset
function reset() {
	mainInput.value = "";
	mainResult.value = "";
	calculation.value = "";
}

// Fungsi Reverse
function reverse() {
	celciusToFahrenheit = !celciusToFahrenheit;

	if (celciusToFahrenheit) {
		labelInput.innerHTML = "Celcius (&deg;C)";
		labelOutput.innerHTML = "Fahrenheit (&deg;F)";
	} else {
		labelInput.innerHTML = "Fahrenheit (&deg;F)";
		labelOutput.innerHTML = "Celcius (&deg;C)";
	}
	reset();
}
