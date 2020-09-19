"use strict";

// Задача №1. Форматтер чисел

function parseCount(value) {
    value = Number.parseInt(value, 10);

    if (Number.isNaN(value)) {
        const showError = new Error("Невалидное значение");
        throw showError;
    } else {
        return value;
    }
}

function validateCount(valueElse) {
    try {
        parseCount(valueElse);
        return +valueElse;
    } catch (e) {
        const showError = new Error("Невалидное значение");
        return showError;
    }
}

// Задача №2. Треугольник

class Triangle {
    constructor(partA, partB, partC) {
        this.partA = partA;
        this.partB = partB;
        this.partC = partC;

        if (partA + partB < partC || partA + partC < partB || partB + partC < partA) {
            const showError = new Error("Треугольник с такими сторонами не существует");
            throw showError;
        }
        else {
            console.log("все ок. это треугольник");
        }
    }

    getPerimeter() {
        const perimeter = this.partA + this.partB + this.partC;
        return perimeter;
    }

    getArea() {
        const halfPerimeter = (this.partA + this.partB + this.partC) / 2;
        const formulaGerona = Math.sqrt(halfPerimeter * (halfPerimeter - this.partA) * (halfPerimeter - this.partB) * (halfPerimeter - this.partC));
        return +formulaGerona.toFixed(3);
    }
}

function getTriangle(partA, partB, partC) {
    try {
        const test = new Triangle(partA, partB, partC);
        return test;
    }
    catch (e) {
        let returnObj = {
            getPerimeter: function () { return "Ошибка! Треугольник не существует" },
            getArea: function () { return "Ошибка! Треугольник не существует" }
        }
        return returnObj;
    }
}
//console.log(getTriangle(1, 300, 10));