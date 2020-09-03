"use strict"

function calculateTotalMortgage(percent, contribution, amount, date) {

    let flag = 1;
    let totalAmount;

    if (Number(percent)) {
        flag = 0;
    } else {
        totalAmount = (`Параметр "percent" содержит неправильное значение "${percent}"`);
    }

    if (Number(contribution)) {
        flag = 0;
    } else {
        totalAmount = (`Параметр "contribution" содержит неправильное значение "${contribution}"`);
    }

    if (Number(amount)) {
        flag = 0;
    } else {
        totalAmount = (`Параметр "amount" содержит неправильное значение "${amount}"`);
    }

    if (flag == 0) {
        let returnToBanck = amount - contribution;
        let numberOfPayments = (12 * (date.getFullYear() - new Date().getFullYear())) + (date.getMonth() - new Date().getMonth());
        let interestRate = (percent / 12) / 100;
        let paymentForMonth = returnToBanck * (interestRate + interestRate / (Math.pow((1 + interestRate), numberOfPayments) - 1));
        totalAmount = paymentForMonth * numberOfPayments;        
        totalAmount = totalAmount.toFixed(2);
        totalAmount = Number(totalAmount);
    }
    return totalAmount;
}

    function getGreeting(name) {
        let greeting;
        if (name === null || name === "" || name === undefined) {
            greeting = `Привет, мир! Меня зовут Аноним`;
        } else {
              greeting = `Привет, мир! Меня зовут ${name}`;
        }      
        return greeting;
    }