// Array of student ages
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

// Sort the array
const sortedAges = [...ages].sort((a, b) => a - b);

// Find the min and max age
const minAge = sortedAges[0];
const maxAge = sortedAges[sortedAges.length - 1];

// Find the median age
const middle = Math.floor(sortedAges.length / 2);
let median;
if (sortedAges.length % 2 === 0) {
  median = (sortedAges[middle - 1] + sortedAges[middle]) / 2;
} else {
  median = sortedAges[middle];
}

// Find the average age
const average = sortedAges.reduce((sum, age) => sum + age, 0) / sortedAges.length;

// Find the range of the ages (max - min)
const range = maxAge - minAge;

// Compare (min - average) and (max - average) using abs()
const minAvgDifference = Math.abs(minAge - average);
const maxAvgDifference = Math.abs(maxAge - average);

// Output results
console.log(`Sorted ages: ${sortedAges}`);
console.log(`Min age: ${minAge}`);
console.log(`Max age: ${maxAge}`);
console.log(`Median age: ${median}`);
console.log(`Average age: ${average}`);
console.log(`Range of ages: ${range}`);
console.log(`Difference between min and average: ${minAvgDifference}`);
console.log(`Difference between max and average: ${maxAvgDifference}`);
