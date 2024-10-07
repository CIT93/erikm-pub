const FORM = document.getElementById("form");
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
  if (numberInHousehold == 1) {
    houseHoldPoints = 14;
  } else if (numberInHousehold == 2) {
    houseHoldPoints = 12;
  } else if (numberInHousehold == 3) {
    houseHoldPoints = 10;
  } else if (numberInHousehold == 4) {
    houseHoldPoints = 8;
  } else if (numberInHousehold == 5) {
    houseHoldPoints = 6;
  } else if (numberInHousehold == 6) {
    houseHoldPoints = 4;
  } else if (numberInHousehold > 6) {
    houseHoldPoints = 2;
  }

  return houseHoldPoints;
}

function start(firstName, lastName, houseHoldMembers, houseSize) {
  const houseHoldPoints = determineHouseHoldPts(houseHoldMembers);
  const HouseSizePts = determineHouseSizePts(houseSize);
  const total = houseHoldPoints + HouseSizePts;

  cfpData.push({
    firstName: firstName,
    lastName: lastName,
    houseHoldMembers: houseHoldMembers,
    houseSize: houseSize,
    houseHoldPoints: houseHoldPoints,
    HouseSizePts: HouseSizePts,
    cfpTotal: total,
  });

  displayOutput(); // Call displayOutput after data is pushed
}

function displayOutput() {
  const output = document.getElementById("output");
  output.innerHTML = ''; // Clear the output before displaying new results
  for (const obj of cfpData) {
    const newH2 = document.createElement("h2");
    newH2.textContent = `${obj.firstName} ${obj.lastName}, your Carbon Footprint total is ${obj.cfpTotal}`;
    const newH3 = document.createElement("h3");
    newH3.textContent = `Based on the number of people in the house and the size of the home:`;
    const newP = document.createElement("p");
    newP.textContent = `There are ${obj.houseHoldMembers} people in the house (score: ${obj.houseHoldPoints}), `;
    newP.textContent += `and the house is ${obj.houseSize} in size (score: ${obj.HouseSizePts}).`;
    output.appendChild(newH2);
    output.appendChild(newH3);
    output.appendChild(newP);
  }
}

// Add event listener for form submission
FORM.addEventListener('submit', function(e) {
  e.preventDefault();

  // Get form values
  const firstName = FORM.FirstName.value;
  const lastName = FORM.LastName.value;
  const houseMembers = parseInt(FORM.housem.value); // Ensure it's a number
  const houseSize = FORM.houses.value;

  // Call the start function with the form values
  start(firstName, lastName, houseMembers, houseSize);

  // Optional: Reset form after submission
  FORM.reset();
});
