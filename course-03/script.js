// const array1 = ["elem1", "elem2", "elem3", "elem4", "elem5", "elem6", "elem7", "elem8", "elem9", "elem10", "elem11", "elem12", "elem13", "elem14", "elem15", "elem16", "elem17", "elem18"];

// for (let i = 0; i < array1.length; i++) {
//     console.log(`Element o indeksie ${i} ma wartość '${array1[i]}'`);
// }

// for (const element of array1) {
//     if (element === "elem5") continue;
//     if (element === "elem10") break;
//     console.log(element);
// }

// const str = "Ala ma kota";

// for (const letter of str) {
//     console.log(letter);
// }

// let a = 10;
// let b = 5;
// console.log(`Wartość a: ${a}, wartość b: ${b}`);

// a = b;
// console.log(`Wartość a: ${a}, wartość b: ${b}`);

// b = 15;
// console.log(`Wartość a: ${a}, wartość b: ${b}`);

// const tab1 = ["a", "b", "c"];
// const tab2 = tab1;

// console.log(`Tablica 1: ${tab1}; tablica 2: ${tab2}`);

// tab1[2] = "d";
// console.log(`Tablica 1: ${tab1}; tablica 2: ${tab2}`);

// console.log("Ala ma kota".split(" "));

// const arr = ["data", "data1", "data2", "data3"];
// console.log(arr.join(" ; "));
// console.log(arr.indexOf("data2"));
// console.log(arr.includes("data2"));
// const fruits = ["apple", "banana", "kiwi", "pear", "orange"];

// const fruit = "apple";

// if (fruit === "apple" || fruit === "banana" || fruit === "pear" /* ... */) {
//     // ...
// }

// if (fruits.includes(fruit)) {
//     // ...
// }

// console.log(fruits);
// console.log(`Removing ${fruits.pop()}`);
// console.log(fruits);
// console.log("Adding strawberry");
// fruits.push("strawberry");
// console.log(fruits);
// console.log(`Removing ${fruits.shift()}`);
// console.log(fruits);
// console.log('Adding mango');
// fruits.unshift('mango');
// console.log(fruits);

// const fruits = ["apple", "banana", "kiwi", "pear", "orange"];
// // console.log(fruits.slice(1, 4));

// // console.log(fruits.splice(0, 3));
// fruits.splice(2, 1, "mango", "dragonfruit", "pineapple");
// console.log(fruits);


// const kiwiIndex = fruits.indexOf("kiwi");
// const bananaIndex = fruits.indexOf("banana");

// console.log(`Przed zamianą: ${fruits}`);

// fruits.splice(bananaIndex, 0, fruits[kiwiIndex]);
// fruits.splice(kiwiIndex + 1, 1);
// console.log(`Po zamianie: ${fruits}`);

// const tab = [1, 2, 3].concat([4, 5, 6]);
// console.log(tab);

// const arr1 = [1, 2, 3];
// const arr2 = arr1.concat([4, 5, 6]);
// console.log(arr2);
