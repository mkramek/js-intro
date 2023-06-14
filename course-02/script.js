/*
 * ====================
 * INSTRUKCJE WARUNKOWE
 * ====================
 */

const subscription = "unknown";

// COST: IF/ELSE
let cost;
if (subscription === "free") {
    cost = 0;
} else if (subscription === "paid") {
    cost = 100;
} else if (subscription === "plus") {
    cost = 200;
} else {
    cost = -1;
}

// COST: TERNARY (bad practice!)
const ternaryCost =
    subscription === "free"
        ? 0
        : subscription === "paid"
        ? 100
        : subscription === "plus"
        ? 200
        : -1;

// COST: SWITCH
let switchCost;
switch (subscription) {
    case "free":
        switchCost = 0;
        break;
    case "paid":
        switchCost = 100;
        break;
    case "plus":
        switchCost = 200;
        break;
    default:
        switchCost = -1;
        break;
}

// console.log(`[if/else] Cost for ${subscription} subscription: ${cost}`);
// console.log(`[ternary] Cost for ${subscription} subscription: ${ternaryCost}`);
// console.log(`[switch] Cost for ${subscription} subscription: ${switchCost}`);

// document.write(
//     `<p>[if/else] Cost for ${subscription} subscription: ${cost}</p>`,
//     `<p>[ternary] Cost for ${subscription} subscription: ${ternaryCost}</p>`,
//     `<p>[switch] Cost for ${subscription} subscription: ${switchCost}</p>`
// );

/*
 * ====================
 *        SCOPE
 * ====================
 */

let globalScopedVariable = "global"; // Zmienna global scope - zasięg globalny
if (globalScopedVariable === "global") {
    let blockScopedVariable = "block"; // Zmienna w block scope - zasięg if'a
}

// console.log(globalScopedVariable); // Zmienna jest widoczna
// console.log(blockScopedVariable); // Zmienna nie jest widoczna, wyrzuci błąd (ReferenceError)

/*
 * ====================
 *        PĘTLE
 * ====================
 */

// for (let licznik = 1; licznik <= 3; licznik++) {
//     console.log(`[for] Kot nr ${licznik}`);
// }

// let licznik = 1;
// while (licznik <= 3) {
//     console.log(`[while] Kot nr ${licznik}`);
//     licznik++;
// }

// let licznik2 = 1;
// do {
//     console.log(`[do-while] Kot nr ${licznik2}`);
//     licznik2++;
// } while (licznik2 <= 3);

for (let licznik = 1; licznik <= 20; licznik++) {
    if (licznik === 15) {
        break;
    }

    if (licznik % 2 === 0) {
        console.log(`[break/continue] Pominięto kota nr ${licznik}`);
        continue;
    }

    console.log(`[break/continue] Kot nr ${licznik}`);
}
