const inventors = [
  { first: "Albert", last: "Einstein", year: 1879, passed: 1955 },
  { first: "Isaac", last: "Newton", year: 1643, passed: 1727 },
  { first: "Galileo", last: "Galilei", year: 1564, passed: 1642 },
  { first: "Marie", last: "Curie", year: 1867, passed: 1934 },
  { first: "Johannes", last: "Kepler", year: 1571, passed: 1630 },
  { first: "Nicolaus", last: "Copernicus", year: 1473, passed: 1543 },
  { first: "Max", last: "Planck", year: 1858, passed: 1947 },
  { first: "Katherine", last: "Blodgett", year: 1898, passed: 1979 },
  { first: "Ada", last: "Lovelace", year: 1815, passed: 1852 },
  { first: "Sarah E.", last: "Goode", year: 1855, passed: 1905 },
  { first: "Lise", last: "Meitner", year: 1878, passed: 1968 },
  { first: "Hanna", last: "Hammarström", year: 1829, passed: 1909 },
];

const people = [
  "Bernhard, Sandra",
  "Bethea, Erin",
  "Becker, Carl",
  "Bentsen, Lloyd",
  "Beckett, Samuel",
  "Blake, William",
  "Berger, Ric",
  "Beddoes, Mick",
  "Beethoven, Ludwig",
  "Belloc, Hilaire",
  "Begin, Menachem",
  "Bellow, Saul",
  "Benchley, Robert",
  "Blair, Robert",
  "Benenson, Peter",
  "Benjamin, Walter",
  "Berlin, Irving",
  "Benn, Tony",
  "Benson, Leana",
  "Bent, Silas",
  "Berle, Milton",
  "Berry, Halle",
  "Biko, Steve",
  "Beck, Glenn",
  "Bergman, Ingmar",
  "Black, Elk",
  "Berio, Luciano",
  "Berne, Eric",
  "Berra, Yogi",
  "Berry, Wendell",
  "Bevan, Aneurin",
  "Ben-Gurion, David",
  "Bevel, Ken",
  "Biden, Joseph",
  "Bennington, Chester",
  "Bierce, Ambrose",
  "Billings, Josh",
  "Birrell, Augustine",
  "Blair, Tony",
  "Beecher, Henry",
  "Biondo, Frank",
];

// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's

const fifteen = inventors.filter(function (inventor) {
  if (inventor.year >= 1500 && inventor.year < 1600) {
    return true;
  }
});

console.log(fifteen);
console.table(fifteen);

const fifteen2 = inventors.filter(
  (inventor) => inventor.year >= 1500 && inventor.year < 1600
);
console.log(fifteen2);
console.table(fifteen2);

// we can use arrow function

// Array.prototype.map()
// 2. Give us an array of the inventors first and last names

// const fullname = inventors.map(inventor => `${inventor.first} ${inventor.last}`);
// console.log(fullname);
// console.table(fullname);

const fullName = inventors.map(function (inventor) {
  return inventor.first + "@" + inventor.last;
});

console.log(fullName);
console.table(fullName);

// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest

const old = inventors.sort((a, b) => (a.year > b.year ? 1 : -1));
console.log(old);

// Array.prototype.reduce()
// 4. How many years did all the inventors live all together?

const living = inventors.reduce((total, a) => {
  return total + (a.passed - a.year);
}, 0);

console.log(living);

// 5. Sort the inventors by years lived

const lived = inventors.sort((a, b) => {
  const liv = a.passed - a.lived;
  const liv2 = b.passed - a.lived;
  return liv2 > liv ? -1 : 1;
});

console.table(lived);

// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris

//   const category = document.querySelector('.mw-category');

//   const links =Array.from( category.querySelectorAll('a'));
//   // const links =[...( category.querySelectorAll('a')];

//   const  de = links
//   .map(link =>link.textContent)
//   .filter(streetname => streetname.includes('de'));
// console.log(de)

// 7. sort Exercise
// Sort the people alphabetically by last name
const per = people.sort((per1, per2) => {
  const [per1first, per1last] = per1.split(", ");
  const [per2first, per2last] = per2.split(", ");
  // if(per2last>per1last)
  // {
  //   return -1;
  // }
  // else
  // {
  //   return 1;
  // }

  return per2first > per1first ? -1 : 1;
});

console.table(per);

// 8. Reduce Exercise
// Sum up the instances of each of these
const data = [
  "car",
  "car",
  "truck",
  "truck",
  "bike",
  "walk",
  "car",
  "van",
  "bike",
  "walk",
  "car",
  "van",
  "car",
  "truck",
];

const alpha = data.reduce((obj, items) => {
  if (!obj[items]) {
    obj[items] = 0;
  }
  obj[items]++;
  return obj;
}, {});

console.log(alpha);
console.table(alpha);

const arr1 = [1, 2, 3, 4, 5];
const arr_print = arr1.reduce((sum, elemts) => {
  return (sum += elemts);
}, []);

console.log(arr_print);
