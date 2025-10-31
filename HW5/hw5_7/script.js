const makeNLi = (text, n) => {
    document.write('<ul>');
    for (let i = 0; i < n; i++) {
        document.write(`<li>${text}</li>`);
    }
    document.write('</ul>');
};

makeNLi('повторюю', 5);
