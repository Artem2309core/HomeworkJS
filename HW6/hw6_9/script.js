
let coursesArray = [
    {title: 'JavaScript Complex', modules: ['html', 'css', 'sass', 'js']},
    {title: 'Java Complex', modules: ['java', 'spring']},
    {title: 'FullStack', modules: ['react', 'docker', 'node.js']},
    {title: 'Frontend', modules: ['html', 'sass']}
];
let withSass = coursesArray.filter(course => course.modules.includes('sass'));
console.log('Мають sass:', withSass);
//
let withDocker = coursesArray.filter(course => course.modules.includes('docker'));
console.log('Мають docker:', withDocker);
