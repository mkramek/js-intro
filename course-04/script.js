// function execute() {
//     console.log('Wykonano funkcję!');
// }

// function add(x, y) {
//     return `Wynik to ${x + y}`;
// }

// console.log(add(5, 6));

// function multiply(x, y, z) {
//     console.log("Kod przed return jest wykonywany jak zwykle");

//     // Zwracamy wynik wyrażenia mnożenia
//     return x * y * z;

//     console.log("Ten log nigdy nie zostanie wywołany, jest po return");
// }

// console.log(multiply(1, 2, 3));

// function pow(num = 2, factor = 2) {
//     return Math.pow(num, factor);
// }

// console.log(pow(1, 3));
// console.log(pow(4));
// console.log(pow());

// const downloaded = "Toyota Yaris 2021 black 1.0 hybrid";
// const carData = downloaded.split(" ");

// function printCarData(brand, model, year, ...info) {
//     console.log(`Brand of the car: ${brand}`);
//     console.log(`Model of the car: ${model}`);
//     console.log(`Year of the car: ${year}`);
//     console.log(`Info about the car: ${info.join(", ")}`);
// }

// printCarData(...carData);

// const a = 5;

// function exec() {
//     // const a = 10;
//     for (let i = 0; i < 4; i++) {
//         if (i === 2) {
//             // const a = 15;
//             console.log(a);
//         }
//     }
// }

// exec();

// let i = 0;

// function execA() {
//     console.log(`${++i} execA start`);
//     // execC(); // powoduje błąd typu stack overflow 
//     console.log('execA stop');
// };
// function execB() {
//     console.log(`${++i} execB start`);
//     execA();
//     console.log('execB stop');
// };
// function execC() {
//     console.log(`${++i} execC start`);
//     execB();
//     console.log('execC stop');
// };

// execC();