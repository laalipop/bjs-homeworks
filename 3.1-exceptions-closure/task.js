"use strict";

// Задача №1. Форматтер чисел

function parseCount(value) {
    value = Number.parseInt(value, 10);

    if (Number.isNaN(value)) {
        throw new Error("Невалидное значение");
    }
    return value;  
}

function validateCount(valueElse) {
    try {
        //
        return parseCount(valueElse);
    } catch (e) {
        return e;
    }
}

// Задача №2. Треугольник

class Triangle {
    constructor(partA, partB, partC) {
        this.partA = partA;
        this.partB = partB;
        this.partC = partC;

        if (partA + partB < partC || partA + partC < partB || partB + partC < partA) {
            throw new Error("Треугольник с такими сторонами не существует");
        }
    }

    getPerimeter() {
        return this.partA + this.partB + this.partC;
    }

    getArea() {
        const halfPerimeter = this.getPerimeter() / 2;
        const formulaGerona = Math.sqrt(halfPerimeter * (halfPerimeter - this.partA) * (halfPerimeter - this.partB) * (halfPerimeter - this.partC));
        return +formulaGerona.toFixed(3);
    }
}

function getTriangle(partA, partB, partC) {
    try {
        return new Triangle(partA, partB, partC);
    }
    catch (e) {
        return  {
            getPerimeter: () => "Ошибка! Треугольник не существует",
            getArea: () => "Ошибка! Треугольник не существует"
        }
    }
}
//console.log(getTriangle(1, 300, 10));