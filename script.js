'use strict';

let money = prompt("Ваш месячный доход?", 30000), 
    income = 'Фриланс', 
    addExpenses = prompt("Перечислите возможные расходы за рассчитываемый период через запятую", 
    'Mobile, Связь, Коммуналка'), 
    deposit = confirm('Есть ли у вас депозит в банке?'), 
    mission = 300000, 
    period = 12;

let showTypeOf = function(data){
    console.log(data, typeof(data));
};
showTypeOf(money);
showTypeOf(income);
showTypeOf(deposit);

console.log(addExpenses.toLowerCase().split(', '));

let expenses1,
    expenses2,
    amount1,
    amount2;

let question = () => {
    expenses1 = prompt('Введите обязательную статью расходов?', 'credit');
    amount1 = +prompt('Во сколько это обойдется?', 2800);
    expenses2 = prompt('Введите обязательную статью расходов?', 'iqos');
    amount2 = +prompt('Во сколько это обойдется?', 2500);
};
question();

let getExpensesMonth = function(){
    return amount1 + amount2;
};
console.log(getExpensesMonth());


let getAccumulatedMonth = function(){
    return money - amount1 - amount2;
};
let accumulatedMonth = getAccumulatedMonth();

let getTargetMonth = function(){
    return Math.round(mission / accumulatedMonth);
};
console.log(getTargetMonth());

let budgetDay = Math.floor(accumulatedMonth / 30);
console.log('budgetDay: ', budgetDay);

let getStatusIncome = function(){
    if (budgetDay >= 1200) {
        return ("У вас высокий уровень дохода");
    } else if (budgetDay >= 600 && budgetDay < 1200){
        return ("У вас средний уровень дохода");
    } else if (budgetDay < 600 && budgetDay > 0) {
        return ("К сожалению у вас уровень дохода ниже среднего");
    } else if (budgetDay <= 0) {
        return ("Что то пошло не так");
    }
};
console.log(getStatusIncome());
