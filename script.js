
var money = +prompt("Ваш бюджет на месяц?");
var time =  prompt("Введите дату в формате YYYY-MM-DD");

var appData = {
    budget : money,
    timeData : time,
    expenses : {},
    optionalExpenses : 0,
    income : 0,
    savings : false
};

// var expenditure = prompt("Введите обязательную статью расходов в этом месяце");
// var sizeExpenditure = +prompt("Во сколько это обойдется?");

// var expenditure1 = prompt("Введите обязательную статью расходов в этом месяце");
// var sizeExpenditure1 = +prompt("Во сколько это обойдется?");

var perDay = money/30;

for (var i=0; i<2;i++){
    var expenditure = prompt("Введите обязательную статью расходов в этом месяце");
    var sizeExpenditure = prompt("Во сколько это обойдется?");

    if (typeof(expenditure) === 'string' && (typeof(expenditure)) !=null &&
    (typeof(sizeExpenditure)) !=null){
        appData.expenses[expenditure] = sizeExpenditure;
    }
    
};
appData.perDay = money/30;

alert("Ваш бюджет на 1 день равен " + perDay + " рублей");

if (appData.perDay < 100) {
    alert("Минимальный уровень достатка")
 } else if (appData.perDay < 100 && appData.perDay > 2000) {
    alert("Средний уровень достатка")
    } else{
        alert("Высокий уровень достатка")
    };

 