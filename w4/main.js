const cfpData = [];

function determineHouseSizePts(size) {
  let HouseSizePts = 0;
  if (size === "large") {
    HouseSizePts = 10;
  } else if (size === "medium") {
    HouseSizePts = 7;
  } else if (size === "small") {
    HouseSizePts = 4;
  } else if (size === "apt") {
    HouseSizePts = 2;
  }

  return HouseSizePts;
}

function determineHouseHoldPts(numberInHousehold) {
  let houseHoldPoints = 0;
  if (numberInHousehold === 1) {
    houseHoldPoints = 14;
  } else if (numberInHousehold === 2) {
    houseHoldPoints = 12;
  } else if (numberInHousehold === 3) {
    houseHoldPoints = 10;
  } else if (numberInHousehold === 4) {
    houseHoldPoints = 8;
  } else if (numberInHousehold === 5) {
    houseHoldPoints = 6;
  } else if (numberInHousehold === 6) {
    houseHoldPoints = 4;
  } else if (numberInHousehold > 6) {
    houseHoldPoints = 2;
  }

  return houseHoldPoints;
}

function start(houseHoldMembers, houseSize) {
  const houseHoldPoints = determineHouseHoldPts(houseHoldMembers);
  const HouseSizePts = determineHouseSizePts(houseSize);
  const total = houseHoldPoints + HouseSizePts;
  cfpData.push([
    houseHoldMembers,
    houseSize,
    houseHoldPoints,
    HouseSizePts,
    total,
  ]);
}

function displayOutput() {
  for (arr of cfpData) {
    console.log(arr);
    const output = document.getElementById("output");
    const newP = document.createElement("pgh");
    newP.textContent = `Carbon Footprint total is ${arr[4]}`;
    output.appendChild(newP);
  }
}

start(5, "apt");
start(4, "large");
start(3, "meduim");
start(2, "small");
start(1, "1");
start(2, "2");
start(2, "5");

displayOutput();
