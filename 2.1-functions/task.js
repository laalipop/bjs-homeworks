//Задача №1. Корни квадратного уравнения

function getSolutions( a, b, c ) {
    //let D = b * b - 4 * a * c;
    let computing = new Object();
    computing.D = b * b - 4 * a * c;

    if (computing.D < 0) {
        return {
            D: computing.D, roots: []
        }
    }

    if (computing.D == 0) {
        computing.x1 = -b / (2 * a);
        return {
            D: computing.D, roots: [+computing.x1.toFixed(2)]
        }
    }

    if (computing.D > 0) {
        computing.x1 = (-b + Math.sqrt(computing.D)) / (2 * a);
        computing.x2 = (-b - Math.sqrt(computing.D)) / (2 * a);
        return {
            D: computing.D, roots: [+computing.x1.toFixed(2), +computing.x2.toFixed(2)]
        }
    }
}

function showSolutionsMessage( a, b, c ) {
    let result = getSolutions( a, b, c );

    console.log(`Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}`);
    console.log(`Значение дискриминанта:`, result);
    
    if (result.D < 0) {
        console.log(`Уравнение не имеет вещественных корней`);
    }
    if (result.D == 0) {
        console.log(`Уравнение имеет один корень X₁ = ${result.roots}` );
    }
    if (result.D > 0) {
        console.log(`Уравнение имеет два корня. X₁ =`, result.roots[0],`, X₂ =`, result.roots[1]);
    } 
    
}
console.log("---------");
showSolutionsMessage( 1, 2, 3 );
console.log("---------");
showSolutionsMessage( 7, 20, -3 );
console.log("---------");
showSolutionsMessage( 2, 4, 2 );


//Задача №2. Журнал успеваемости
function getAverageMark(marks) {
    if (marks.length == 0) {
        return 0;
    }
    let sum = 0;
    for (let i = 0; i < marks.length; i++) {
        sum += marks[i];
    }
    sum = sum / marks.length;
    return sum;
}

function getAverageScore(data) {  
    if (data == {}) {
        let average = 0;
        return average;
    } 
    let objectOfMarks = {};
    for (let mark in data) {
        let key = data[mark];
        objectOfMarks[mark] = getAverageMark(key);    
    }
    let average = getAverageMark(Object.values(objectOfMarks));
    objectOfMarks.average = average;
    return objectOfMarks;
}

getAverageScore({
    algebra: [2, 4, 5, 3],
    geometry: [2, 4, 3],
    russian: [4],
    physics: [3, 5, 5, 4],
    music: [2, 3, 4],
    english: [4, 4, 4, 4],
    poetry: [5, 5, 4, 3],
    chemistry: [3, 2],
    french: [4, 2, 5, 4]
});

// getAverageScore({
//     algebra: [],
//     geometry: [5, 2],    
// });


//Задача №3. Расшифровка данных

function getDecodedValue(secret) {    
    if (secret == 0) {
        return 'Родриго';
    }
    if (secret == 1) {
        return 'Эмильо';
    }    
}

function getPersonData(secretData) {
    let nObj = new Object();
    
    for (let prop in secretData) {
        let value = secretData[prop];
        if (prop == "aaa") {
            nObj.firstName = getDecodedValue(value);            
        }
        if (prop == "bbb") {
            nObj.lastName = getDecodedValue(value);
        }   
    }
    return nObj;
}

getPersonData({
    aaa: 0,
    bbb: 1
});
getPersonData({
    aaa: 1,
    bbb: 1
});
getPersonData({
    aaa: 0,
    bbb: 0,
});
getPersonData({
    aaa: 1,
    bbb: 0
});