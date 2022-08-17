// 1:
function doubleValues(arr) {
  const q1Double = arr.map((item) => item * 2);
  console.log(q1Double);
}
doubleValues([1, 2, 3]);
doubleValues([5, 1, 2, 3, 10]);

//2:
function onlyEvenValues(arr) {
  const q2NewArray = [];
  arr.forEach((item) => {
    if (item % 2 == 0) {
      q2NewArray.push(item);
    }
  });
  console.log(q2NewArray);
}
onlyEvenValues([1, 2, 3]);
onlyEvenValues([5, 1, 2, 3, 10]);

// 3:

function showFirstAndLast(arr) {
  const q3Map = arr.map((item) => {
    // console.log(item);
    return item[0] + item.slice(-1); // item[item.length -1 ]
  });
  console.log(q3Map);
}
showFirstAndLast(["colt", "matt", "tim", "udemy"]); // ["ct", "mt", "tm", "uy"]
showFirstAndLast(["hi", "goodbye", "smile"]); // ['hi', 'ge', 'se']

// 4:
function addKeyAndValue(arr, key, value) {
  const q4Map = arr.map((item) => {
    item[key] = value;
    return item;
  });
  console.log(q4Map);
}
addKeyAndValue(
  [{ name: "Elie" }, { name: "Tim" }, { name: "Matt" }, { name: "Colt" }],
  "title",
  "instructor"
);
