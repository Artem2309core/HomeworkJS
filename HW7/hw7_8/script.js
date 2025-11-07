class Cinderella {
    constructor(name, age, footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }
}
class Prince {
    constructor(name, age, foundShoeSize) {
        this.name = name;
        this.age = age;
        this.foundShoeSize = foundShoeSize;
    }
}
const cinderellas = [
    new Cinderella('Olya', 22, 36),
    new Cinderella('Ira', 21, 37),
    new Cinderella('Masha', 19, 35),
    new Cinderella('Katya', 23, 38),
    new Cinderella('Nastia', 20, 39),
    new Cinderella('Alina', 24, 37.5),
    new Cinderella('Yulia', 22, 36.5),
    new Cinderella('Dasha', 25, 35.5),
    new Cinderella('Vika', 18, 38.5),
    new Cinderella('Tanya', 21, 39.5),
];

const prince = new Prince('Artem', 20, 36.5);
const matchFind = cinderellas.find(girl => girl.footSize === prince.foundShoeSize);
console.log('Попелюшка (find):', matchFind);