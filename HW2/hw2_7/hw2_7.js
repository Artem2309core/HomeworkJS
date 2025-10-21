let time = 25;

if
(time >= 0 && time < 15) console.log('перша чверть');
else if
(time >= 15 && time < 30) console.log('Друга чверть');
else if
(time >= 30 && time < 45) console.log('Третя чверть');
else if
(time >= 45 && time <= 59) console.log('Четверта чверть');
else
    console.log('Невірне значення');
