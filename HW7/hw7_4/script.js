function Client(id, name, surname, email, phone, order = []) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
    this.order = order;
}
const clients = [
    new Client(1, 'Artem', 'G.', 'artem@gmail.com', '+380000000001', ['bread']),
    new Client(2, 'Masha', 'S.', 'masha@gmail.com', '+380000000002', ['milk', 'eggs']),
    new Client(3, 'Ivan', 'K.', 'ivan@gmail.com', '+380000000003', ['coffee', 'sugar', 'cream']),
    new Client(4, 'Olya', 'B.', 'olya@gmail.com', '+380000000004', []),
    new Client(5, 'Dima', 'L.', 'dima@gmail.com', '+380000000005', ['tea']),
    new Client(6, 'Alina', 'R.', 'alina@gmail.com', '+380000000006', ['apples', 'bananas']),
    new Client(7, 'Nazar', 'T.', 'nazar@example.com', '+380000000007', ['rice', 'pasta', 'sauce', 'cheese']),
    new Client(8, 'Ira', 'P.', 'ira@example.com', '+380000000008', ['butter', 'jam']),
    new Client(9, 'Bohdan', 'D.', 'bohdan@example.com', '+380000000009', ['water', 'salt', 'pepper']),
    new Client(10, 'Yana', 'M.', 'yana@example.com', '+380000000010', ['chocolate', 'cookies', 'juice', 'nuts', 'honey']),
];
console.log('Clients (10 шт):', clients);