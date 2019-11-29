
 

 
var money = +prompt("Ваш бюджет на месяц?");
var time =  prompt("Введите дату в формате YYYY-MM-DD");

var appData = {
    budget : money,
    timeData : time,
    expenses : {expenditure,sizeExpenditure,expenditure1,sizeExpenditure1},
    optionalExpenses : 0,
    income : 0,
    savings : false
};

var expenditure = prompt("Введите обязательную статью расходов в этом месяце");
var sizeExpenditure = prompt("Во сколько это обойдется?");

var expenditure1 = prompt("Введите обязательную статью расходов в этом месяце");
var sizeExpenditure1 = prompt("Во сколько это обойдется?");

var perDay = money/30;
alert("Ваш бюджет на 1 день равен " + perDay + " рублей");
