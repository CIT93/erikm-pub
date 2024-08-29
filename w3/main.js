
function determineHouseHoldPts(){}








let carbonFootprintPoints = 0;
const numberInHousehold = 6; // Change this value to test different scenarios

if (numberInHousehold === 1) {
    carbonFootprintPoints = 14;
} else if (numberInHousehold === 2) {
    carbonFootprintPoints += 12;
} else if (numberInHousehold === 3) {
    carbonFootprintPoints += 10;
} else if (numberInHousehold === 4) {
    carbonFootprintPoints += 8;
} else if (numberInHousehold === 5) {
    carbonFootprintPoints += 6;
} else if (numberInHousehold === 6) {
    carbonFootprintPoints += 4;
} else if (numberInHousehold > 6) {
    carbonFootprintPoints += 2;
}

console.log(`Based on the number of members in the household (${numberInHousehold}), the points would be ${carbonFootprintPoints}.`);


// global scope 