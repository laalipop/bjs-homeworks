'use strict';
// Задача №1. Печатное издание
class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }
    fix() {
        this.state = this.state * 1.5;
        return this.state;
    }

    set state(number) {
        if (number < 0) {
            number = 0;
        } else if (number > 100) {
            number = 100;
        }
        this._state = number;
    }
    get state() {
        return this._state;
    }
}

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = "magazine";
    }
}

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.author = author;
        this.type = "book";
    }
}

class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "novel";
    }
}

class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "fantastic";
    }
}

class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "detective";
    }
}

// Задача №2. Библиотека

class Library {
    constructor(name, books) {
        this.name = name;
        this.books = [];
    }

    addBook(book) {
        if (book.state > 30) {
            this.books.push(book);
        }
    }

    findBookBy(type, value) {
        let foundBook = null;
        for (var i = 0; i < this.books.length; i++) {
            if (this.books[i].hasOwnProperty(type) && this.books[i][type] == value) {
                foundBook = this.books[i];
            }
        }
        return foundBook;
    }

    giveBookByName(bookName) {
        let deliteBook = null;
        for (let i = 0; i < this.books.length; i++) {  

            if (this.books[i].name == bookName) {
                deliteBook = this.books[i];
                this.books.splice(i, 1);
            }             
        }
        return deliteBook;
    }
}

// const library = new Library("Библиотека имени Ленина");

// library.addBook(new DetectiveBook("Артур Конан Дойл", "Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе", 2019, 1008));
// library.addBook(new FantasticBook("Аркадий и Борис Стругацкие", "Пикник на обочине", 1972, 168));
// library.addBook(new NovelBook("Герберт Уэллс", "Машина времени", 1895, 138));
// library.addBook(new Magazine("Мурзилка", 1924, 60));

// console.log(library.findBookBy("name", "Властелин колец")); //null
// console.log(library.findBookBy("releaseDate", 1924).name);
// console.log("Количество книг до выдачи: " + library.books.length); //Количество книг до выдачи: 4
// library.giveBookByName("Машина времени");
// console.log("Количество книг после выдачи: " + library.books.length);

// Задача №3. Школьный журнал

class StudentLog {

    constructor(name) {
       this.name = name; 
       // let quantityMarks = 0;
    }
    
    getName() {
        console.log("Имя ученика: ", this.name);
    }   
    
    // setQuantity(value) {
    //     this.quantityMarks = value;
    //     return this.quantityMarks;
    // }

    set subject() {
        if (this.subject == )
    }

    addGrade(grade, subject) {
        
        if (grade <= 5 && grade >=1) {
            console.log("all oky");
        } else {
            console.log(`Вы пытались поставить оценку "${grade}" по предмету "${subject}". Допускаются только числа от 1 до 5.`);
        }
        console.log("****");
    }

    getAverageBySubject(subject) {
        //if (this.subject )
    }
    
   


}

const log = new StudentLog('Олег Никифоров', 0);
log.getName();
//log.setQuantity(0);
log.addGrade(2, "math");
log.addGrade(5, "lan");
log.addGrade(15, "math");
