let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

let sorted = [...coursesAndDurationArray].sort((a, b) => b.monthDuration - a.monthDuration);
console.log('Сортування за спаданням:', sorted);
let filtered = coursesAndDurationArray.filter(course => course.monthDuration > 5);
console.log('nривалість більше 5:', filtered);
let withId = coursesAndDurationArray.map((course, index) => ({
    id: index + 1,
    title: course.title,
    monthDuration: course.monthDuration
}));
console.log('З id:', withId);
