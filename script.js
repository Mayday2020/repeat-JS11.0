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
console.log("Цель будет достигнута через " + Math.round(mission / budgetMonth) + " месяцев.");
let budgetDay = Math.floor(budgetMonth / 30);
console.log('budgetDay: ', budgetDay);

if (budgetDay >= 1200) {
    console.log("У вас высокий уровень дохода");
} else if (budgetDay >= 600 && budgetDay < 1200){
    console.log("У вас средний уровень дохода");
} else if (budgetDay < 600 && budgetDay > 0) {
    console.log("К сожалению у вас уровень дохода ниже среднего");
} else if (budgetDay <= 0) {
    console.log("Что то пошло не так");
}