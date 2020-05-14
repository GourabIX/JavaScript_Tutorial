/////////////////////////////////
// CODING CHALLENGE

/*

Suppose that you're working in a small town administration, and you're in charge of two town elements:
1. Parks
2. Streets

It's a very small town, so right now there are only 3 parks and 4 streets. All parks and streets have a name and a build year.

At an end-of-year meeting, your boss wants a final report with the following:
1. Tree density of each park in the town (forumla: number of trees/park area)
2. Average age of each town's park (forumla: sum of all ages/number of parks)
3. The name of the park that has more than 1000 trees
4. Total and average length of the town's streets
5. Size classification of all streets: tiny/small/normal/big/huge. If the size is unknown, the default is normal

All the report data should be printed to the console.

HINT: Use some of the ES6 features: classes, subclasses, template strings, default parameters, maps, arrow functions, destructuring, etc.

*/

/////////////////////////////////
// SOLUTION

class PublicPlaces {
  constructor(name, buildYear) {
    this.name = name;
    this.buildYear = buildYear;
  }
}

class Park extends PublicPlaces {
  constructor(name, buildYear, area, numberOfTrees) {
    super(name, buildYear);
    this.area = area;
    this.numberOfTrees = numberOfTrees;
  }

  calculateTreeDensity() {
    return this.numberOfTrees / this.area;
  }

  calculateParkAge() {
    return new Date().getFullYear() - this.buildYear;
  }
}

class Street extends PublicPlaces {
  constructor(name, buildYear, length, size) {
    super(name, buildYear);
    this.length = length;
    this.size = size;
  }

  classifyStreet() {
    const streetSizeMap = new Map();
    streetSizeMap.set(1, "tiny");
    streetSizeMap.set(2, "small");
    streetSizeMap.set(3, "normal");
    streetSizeMap.set(4, "big");
    streetSizeMap.set(5, "huge");
    console.log(
      `${this.name}, built in ${
        this.buildYear
      } is classfied as a ${streetSizeMap.get(this.size)} street.`
    );
  }
}

const allParks = [
  new Park("Bruce Wayne Memorial", 1989, 2000, 1298),
  new Park("Peter Parker Environmental Reserve", 2006, 1250, 700),
  new Park("Superman Memorial", 2005, 5600, 3780),
];

const allStreets = [
  new Street("Diamond Harbour road", 1910, 2000, 5),
  new Street("Sarat Bose Road", 1920, 200, 3),
  new Street("South Gariahat Road", 1970, 125, 2),
  new Street("National Highway 44", 1989, 7855, 5),
];

function treeDensity() {
  allParks.forEach((current) => {
    console.log(
      `Tree Density of ${
        current.name
      } park is ${current.calculateTreeDensity()}.`
    );
  });
}

function averageParkAge() {
  let sumAge = 0;
  allParks.forEach((current) => {
    sumAge += current.calculateParkAge();
  });

  console.log(`Average age of parks in this town is ${sumAge / 3} years.`);
}

function firstParkWith1000Trees() {
  let parkCount = 0;
  allParks.forEach((current) => {
    if (current.numberOfTrees >= 1000 && parkCount === 0) {
      parkCount++;
      console.log(
        `The first park with a tree count greater than 1000 is ${current.name} park.`
      );
    }
  });
  if (parkCount === 0)
    console.log(
      "Currently there are no parks that contain 1000 or more trees."
    );
}

function allParksWith1000Trees() {
  let parkCount = 0;
  console.log(`The park(s) with a tree count greater than 1000 are: `);
  allParks.forEach((current) => {
    if (current.numberOfTrees >= 1000) {
      parkCount++;
      console.log(current.name);
    }
  });
  if (parkCount === 0)
    console.log(
      "Currently there are no parks that contain 1000 or more trees."
    );
}

function reportPark() {
  console.log("Report: Parks -----------------------------------------> ");
  treeDensity();
  averageParkAge();
  firstParkWith1000Trees();
  allParksWith1000Trees();
}

function streetTotalLength() {
  let streetLengthSum = 0;
  allStreets.forEach((current) => (streetLengthSum += current.length));
  return streetLengthSum;
}

function streetAverageLength() {
  let streetTotalLen = streetTotalLength();
  return streetTotalLen / 4;
}

function streetLengthReport() {
  console.log(
    `Total length of all the streets combined is ${streetTotalLength()} sq. Kilometres.`
  );
  console.log(
    `Average length of our streets is ${streetAverageLength()} sq. Kilometres.`
  );
}

function streetSizeClassifier() {
  allStreets.forEach((current) => current.classifyStreet());
}

function reportStreets() {
  console.log(" ");
  console.log("Report: Streets -----------------------------------------> ");
  streetLengthReport();
  streetSizeClassifier();
}

reportPark();
reportStreets();
console.log(
  "<----------------------------- END OF REPORT ----------------------------->"
);
