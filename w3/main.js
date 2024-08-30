function determineHouseHoldPts(numberInHousehold) { 
    if (numberInHousehold === 1) { 
      carbonFootprintPoints = carbonFootprintPoints + 14;
    } else if (numberInHousehold === 2) { 
      carbonFootprintPoints = carbonFootprintPoints + 12;
    } else if (numberInHousehold === 3) { 
      carbonFootprintPoints = carbonFootprintPoints + 10;
    } else if (numberInHousehold === 4) { 
      carbonFootprintPoints = carbonFootprintPoints + 8;
    } else if (numberInHousehold === 5) { 
      carbonFootprintPoints = carbonFootprintPoints + 6;
    } else if (numberInHousehold === 6) { 
      carbonFootprintPoints = carbonFootprintPoints + 4;
    } else if (numberInHousehold > 6) { 
      carbonFootprintPoints = carbonFootprintPoints + 2;
    }
    console.log(`Based on the number of members in the household (${numberInHousehold}), the points would be ${carbonFootprintPoints}.`);
}

let carbonFootprintPoints = 0;
//const numberInHousehold = 3; 

    
// global scope 

determineHouseHoldPts(3)
determineHouseHoldPts(4)


// Ex for 4 members in the household
numberInHousehold = 4;
if (numberInHousehold === 1) {
    carbonFootprintPoints += 14;
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