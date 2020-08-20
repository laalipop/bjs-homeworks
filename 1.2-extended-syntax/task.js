"use strict"

function getResult(a, b, c) {
    let result = [];
    let discriminant = Math.pow(b, 2) - 4 * a * c;
   
    if (discriminant > 0) {
        let rootOne = (-b + Math.sqrt(discriminant)) / (2 * a);
        let rootTwo = (-b - Math.sqrt(discriminant)) / (2 * a);
        result.push(rootOne);
        result.push(rootTwo);
    } else if (discriminant === 0) {
            let rootOne = -( b / 2 * a);
            result.push(rootOne);
            } 
    return result;
}

function getAverageMark(marks) {
    let averageMark = 0;
    if (marks.length > 5) {
        console.log("Среднее значение будет посчитано только с первыми 5 оценками");
    }
    if (marks.length > 0) {
        marks.splice(5);

        let sumMarks = 0;
        for (let i = 0; i < marks.length; i++) {
            sumMarks += marks[i];      
        }
        averageMark = sumMarks / marks.length;
    }    
    return averageMark;
}

function askDrink(name, dateOfBirthday) {
    let result;
    let differenceAge = new Date().getFullYear() - dateOfBirthday.getFullYear();
    let canDrink = `Не желаете ли олд-фэшн, ${name}?`;
    let notCanDrink = `Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`;
    result = notCanDrink;

    if (differenceAge > 18) {
        result = canDrink;
    } else if (differenceAge == 18) {
        
        if (dateOfBirthday.getMonth() < new Date().getMonth()) {
            result = canDrink;
        }
        if ((dateOfBirthday.getMonth() == new Date().getMonth()) && (new Date().getDate() >= dateOfBirthday.getDate())) {            
            result = canDrink;
        }
    }   
    return result;
}