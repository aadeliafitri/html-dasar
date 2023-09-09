console.log("Welcome!"); alert("haloo partner!");

// variabel dan tipe data
const nama = "Adel";
let umur = 20;
var alamat = "Gresik";
let isMarried = false;
let job = {
    position: "Front End Developer",
    division: "Developer"
};

console.log(`Halo nama saya ${nama} umur ${umur} tahun bekerja sebagai ${job.position}`)

//konversi tipe data
stringIsMarried = String(isMarried)
console.log("tipe data isMarried adalah " + typeof isMarried)
console.log("tipe data isMarried setelah dikonversi adalah " + typeof stringIsMarried)

umur = "30"

numUmur = Number(umur)
console.log ("tipe data umur adalah " + typeof umur)
console.log("tipe data umur setelah dikonversi adalah " + typeof numUmur)

let a = 20;
let b = 3;

console.log("a: " + a)
console.log("b: " + b)

//aritmethic operator
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);
console.log(a ** b);

//assignment operator
a+=5;
console.log("a: " + a);

//comparison operator
console.log(a == b);
console.log(a < b);
console.log(a > b);
console.log(a != b);

//logical operator
console.log(a && b);
console.log(a || b);
console.log(!a);

//ternary operator

hasil = a == b ? "benar" : "bukan";
console.log(`a dan b ${hasil} bilangan yang sama`)

// pop up alert prompt confirm
let response = prompt("kamu bahagia hari ini?");
alert("aku tau kamu lagi " + response)

let answer = confirm("Mau makan bakso?")

// conditional if else switch
if (answer == true){
    alert("Ayoo berangkat makan bakso")
} else {
    alert("Kasih saran dong mau makan apa")
}

let mood = "happy";

switch(mood) {
    case "happy":
        alert("it's your day :)");
        break;
    case "sad":
        alert("don't worry! Tomorrow will be a great day");
        break;
    default:
        alert("Sorry, I don't know what mood it is");
        break;
}

// looping for, do while, while

for (let i = 0; i < 5; i++) {
   console.log(`iteras ke ${i}`);
}

let c = 0;

do {
    console.log(`iterasi ke ${c}`)
    c+=1;
}while (c < 3);

let d = 0;
while (d < 3) {
    console.log(`iterasi ke ${d}`)
    d++;
}

//continue

for (let j = 0; j < 5; j++) {
    if (j == 2) {
        continue;
    }
    console.log(`iterasi ke ${j}`);
}

//break

for (let k = 0; k < 5; k++) {
    if (k == 2) {
        break;
    }
    console.log(`iterasi ke ${k}`);
}