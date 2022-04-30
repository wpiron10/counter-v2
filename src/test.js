const array = [0, 4, 2, 7];
console.log(array);

// for (let i = 0; i < array.length; i++) {
//   array.splice(array[i], 1, array[i] - 1);
// }

array.splice(2, 1);
console.log("le resultat => ", array);
