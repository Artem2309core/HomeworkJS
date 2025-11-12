for (const c of coursesAndDurationArray) {
    const div = document.createElement('div');
    div.style.border = '1px solid #ddd';
    div.style.padding = '8px';
    div.style.margin = '6px 0';
    div.textContent = `title: ${c.title} | monthDuration: ${c.monthDuration}`;
    document.body.appendChild(div);
}