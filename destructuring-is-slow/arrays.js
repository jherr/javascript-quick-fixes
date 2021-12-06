const numbers = [10, 20, 30, 40, 50];

numbers.reduce((arr, v) => [
  ...arr,
  v * 100
], []);

numbers.reduce((arr, v) => {
  arr.push(v * 100);
  return arr;
}, []);