// ================== ambil element =================== //

const form = document.querySelector("#bmi-form")
const weight = document.querySelector("#weight")
const height = document.querySelector("#height")
const btnBMI = document.querySelector("#btn-bmi")
const result = document.querySelector("#result")

// ================== manipulasi / event =============== //

btnBMI.addEventListener("click", (event) => {
    event.preventDefault()

    let bmi = weight.value / ((height.value / 100) ** 2) // menghitung BMI
    bmi = bmi.toFixed(1) // membulatkan nilai BMI menjadi 1 angka di belakang koma

    let category = "" // inisialisasi variabel kategori

    if (bmi < 18.5) {
        category = "Underweight" // jika BMI kurang dari 18.5, maka kategori Underweight
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        category = "Normal weight" // jika BMI antara 18.5 dan 24.9, maka kategori Normal weight
    } else if (bmi >= 25 && bmi <= 29.9) {
        category = "Overweight" // jika BMI antara 25 dan 29.9, maka kategori Overweight
    } else {
        category = "Obesity" // jika BMI lebih dari atau sama dengan 30, maka kategori Obesity
    }

    result.innerHTML = `Your BMI is <strong>${bmi}</strong> which means You are <strong>${category}</strong>.` // menampilkan hasil BMI dan kategori pada page

    form.reset() // mengosongkan nilai input
})