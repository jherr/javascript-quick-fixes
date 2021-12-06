// Simple timing function
const timeThis = (func, reps = 100) => {
  const start = new Date().getTime();
  for (let i = 0; i < reps; i++) {
    func();
  }
  return new Date().getTime() - start;
};

// Create an array of numbers of a specified size
const length = process.argv.length > 2 ? parseInt(process.argv[2], 10) : 10000;
const values = new Array(length).fill(null).map((_, i) => i);

// Time building the lookup using destructuring
const destructureTime = timeThis(() => {
  values.reduce((a, v) => ({ ...a, [v]: (a[v] ?? 0) + 1 }), {});
});

// Time building the lookup using a single object
const oneObjectTime = timeThis(() => {
  values.reduce((a, v) => {
    a[v] = (a[v] ?? 0) + 1;
    return a;
  }, {});
});

console.log([length, oneObjectTime, destructureTime].join("\t"));
