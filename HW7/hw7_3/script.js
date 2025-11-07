const users = [
    { id: 3, name: 'Olya', age: 22 },
    { id: 1, name: 'Artem', age: 20 },
    { id: 5, name: 'Ivan', age: 24 },
    { id: 2, name: 'Masha', age: 19 },
    { id: 4, name: 'Dmytro', age: 23 },
];

// НЕмутуюча версія:
const usersSortedById = [...users].sort((a, b) => a.id - b.id);
console.log('Users sorted by id ↑:', usersSortedById);