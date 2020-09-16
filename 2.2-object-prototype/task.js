"use strict";

// Задача № 1

String.prototype.isPalindrome = function() {
    let oldStr = this;
    oldStr = oldStr.replace(/\s+/g, '').toLowerCase();    
    let newStr = oldStr.split("");
    newStr = newStr.reverse();
    newStr = newStr.join("");

    if (oldStr == newStr) {  
        return true;
    } else {
        return false;
    }
}

// Задача № 2

function getAverageMark(marks) {
    if (marks.length == 0) {
        return 0;
    }

    let average = 0;
    for (let i = 0; i < marks.length; i++) {
        average += marks[i];
    }
    average = average / marks.length;
    let averageMark = Math.round(average);
    return averageMark;
}

// Задача № 3

function checkBirthday(birthday) {
    let now = Date.now();
    let date = Number(new Date(birthday));
    let diff = now - date;
    let age = diff / (365.25 * 24 * 60 * 60 * 1000);
    let verdict;
    if (age > 18) {
        verdict = true;
    } else {
        verdict = false;
    }
    return verdict;
}