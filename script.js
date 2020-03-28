let money = 30000, 
    income = 'Фриланс', 
    addExpenses = 'Бензин, Связь, Коммуналка', 
    deposit = false, 
    mission = 300000, 
    period = 12;
alert('Любой текст!');

console.log('Также любой текст!');
console.log(typeof money);
console.log(typeof income);
console.log(typeof deposit);
console.log(addExpenses.length);
console.log('Период равен ' + period + ' месяцев. Цель заработать ' + mission + ' рублей.');
console.log(addExpenses.toLowerCase().split(', '));

let budgetDay = money / 30;
console.log('budgetDay: ', budgetDay);

