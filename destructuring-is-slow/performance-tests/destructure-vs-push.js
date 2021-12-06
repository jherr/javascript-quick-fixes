// Simpel timer function
const timeThis = (func, reps = 100) => {
  const start = new Date().getTime();
  for (let i = 0; i < reps; i++) {
    func();
  }
  return new Date().getTime() - start;
};

// Create the array
const length = process.argv.length > 2 ? parseInt(process.argv[2], 10) : 10000;
const values = new Array(length).fill(null).map((_, i) => i);

// Time building it using destructuring
const destructureTime = timeThis(() => {
  values.reduce((a, v) => [...a, v], []);
});

// Time building it using push
const pushTime = timeThis(() => {
  values.reduce((a, v) => {
    a.push(v);
    return a;
  }, []);
});

console.log([length, pushTime, destructureTime].join("\t"));
