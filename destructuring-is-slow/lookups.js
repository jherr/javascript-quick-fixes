const people = [
  { id: 1, name: "Jack" },
  { id: 2, name: "Sally" },
  { id: 3, name: "Joe" },
];

people.reduce(
  (lookup, person) => ({
    ...lookup,
    [person.id]: person,
  }),
  {}
);

people.reduce((lookup, person) => {
  lookup[person.id] = person;
  return lookup;
}, {});
