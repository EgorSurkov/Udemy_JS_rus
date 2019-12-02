var money;
var time;

function start() {
    money = +prompt("Ваш бюджет на месяц?");
    while (isNaN(money) || money == '' || money == null) {
        money = +prompt("Ваш бюджет на месяц?");
    }

    time = prompt("Введите дату в формате YYYY-MM-DD");
};
start();


var appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: 0,
    income: 0,
    savings: true
};

// var expenditure = prompt("Введите обязательную статью расходов в этом месяце");
// var sizeExpenditure = +prompt("Во сколько это обойдется?");

// var expenditure1 = prompt("Введите обязательную статью расходов в этом месяце");
// var sizeExpenditure1 = +prompt("Во сколько это обойдется?");


function chooseExpenses() {

    for (var i = 0; i < 2; i++) {
        var expenditure = prompt("Введите обязательную статью расходов в этом месяце");
        var sizeExpenditure = prompt("Во сколько это обойдется?");

        if (typeof (expenditure) === 'string' && (typeof (expenditure)) != null &&
            (typeof (sizeExpenditure)) != null) {
            appData.expenses[expenditure] = sizeExpenditure;
        } else {
            i = i - 1;
        }
    }
};

chooseExpenses();


function detectDayBudget() {
    while (isNaN(money) || money == '' || money == null) {
        var perDay = (money / 30).toFixed();
    }
    alert("Ваш бюджет на 1 день равен " + perDay + " рублей");
};
detectDayBudget();





function detectLevel() {
    if (appData.perDay < 100) {
        alert("Минимальный уровень достатка");
    } else if (appData.perDay < 100 && appData.perDay > 2000) {
        alert("Средний уровень достатка");
    } else {
        alert("Высокий уровень достатка");
    }
};

detectLevel();



function deposit() {
    if (appData.savings == true) {
        var razmer = +prompt("Каков размер Ваших накоплений?"),
            percent = +prompt("Какой процент депозита вы хотели бы получить?");
        appData.monthincome = razmer / 100 / 12 * percent;
        alert("Доход за первый месяц будет составлять " + appData.monthincome);
    }
};

deposit();