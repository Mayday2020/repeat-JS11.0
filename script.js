'use strict';

let money = prompt("Ваш месячный доход?", 30000), 
    income = 'Фриланс', 
    addExpenses = prompt("Перечислите возможные расходы за рассчитываемый период через запятую", 
    'Mobile, Связь, Коммуналка'), 
    deposit = confirm('Есть ли у вас депозит в банке?'), 
    mission = 300000, 
    period = 12;


console.log(typeof money);
console.log(typeof income);
console.log(typeof deposit);
console.log(addExpenses.length);
console.log('Период равен ' + period + ' месяцев. Цель заработать ' + mission + ' рублей.');
console.log(addExpenses.toLowerCase().split(', '));
console.log(deposit);


let expenses1,
    expenses2,
    amount1,
    amount2;

let question = () => {
    expenses1 = prompt('Введите обязательную статью расходов?', 'credit');
    amount1 = prompt('Во сколько это обойдется?', 2800);
    expenses2 = prompt('Введите обязательную статью расходов?', 'iqos');
    amount2 = prompt('Во сколько это обойдется?', 2500);
};
question();

let budgetMonth = money - amount1 - amount2;
console.log('budgetMonth: ', budgetMonth);
let budgetDay = Math.round(budgetMonth / 30);
console.log('budgetDay: ', budgetDay);