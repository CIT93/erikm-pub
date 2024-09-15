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

function displayOutput(obj) {
  console.log(obj);
  const output = document.getElementById("output");

  const newH2 = document.createElement("h2");
  newH2.textContent = `Carbon Footprint total is ${obj.cfpTotal}`;
  output.appendChild(newH2);

  const newH3 = document.createElement("h3");
  newH3.textContent = `Based on number in and size of home`;
  output.appendChild(newH3);

  const newp = document.createElement("p");
  newp.textContent = `This number is based on the number of people in the house (${obj.houseHoldMembers}) (score: ${obj.houseHoldPoints}), `;
  newp.textContent = `and a ${obj.houseSize} size home (score: ${obj.HouseSizePts}).`;
  output.appendChild(newp);
}

function start(houseHoldMembers, houseSize) {
  const houseHoldPoints = determineHouseHoldPts(houseHoldMembers);
  const HouseSizePts = determineHouseSizePts(houseSize);
  const total = houseHoldPoints + HouseSizePts;

  cfpData.push({
    houseHoldMembers: houseHoldMembers,
    houseSize: houseSize,
    houseHoldPoints: houseHoldPoints,
    HouseSizePts: HouseSizePts,
    cfpTotal: total,
  });
}

function displayOutput() {
  for (const obj of cfpData) {
    console.log(obj);

    const output = document.getElementById("output");
    const newH2 = document.createElement("h2");
    newH2.textContent = `Carbon Footprint total is ${obj.cfpTotal}`;

    const newH3 = document.createElement("h3");
    newH3.textContent = `Based on number in and size of home`;

    const newP = document.createElement("p");
    newP.textContent = `This number is based on the number of people in the house of ${obj.houseHoldMembers} (score: ${obj.houseHoldPoints}),`;
    newP.textContent += ` and a ${obj.houseSize} size of home (score: ${obj.HouseSizePts}).`;

    output.appendChild(newH2);
    output.appendChild(newH3);
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

displayOutput()
