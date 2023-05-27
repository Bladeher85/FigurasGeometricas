class Triangle {
    constructor(base, height) {
        this.base = base;
        this.height = height;
    }

    getArea() {
        return (this.base * this.height) / 2;
    }

    getPerimeter() {
        return this.base + this.height + Math.sqrt(this.base * this.base + this.height * this.height);
    }
}

class Square {
    constructor(side) {
        this.side = side;
    }

    getArea() {
        return this.side * this.side;
    }

    getPerimeter() {
        return 4 * this.side;
    }
}

class Rhombus {
    constructor(diagonal1, diagonal2) {
        this.diagonal1 = diagonal1;
        this.diagonal2 = diagonal2;
    }

    getArea() {
        return (this.diagonal1 * this.diagonal2) / 2;
    }

    getPerimeter() {
        return 4 * Math.sqrt((this.diagonal1 * this.diagonal1 + this.diagonal2 * this.diagonal2) / 4);
    }
}

class Trapezoid {
    constructor(base1, base2, height) {
        this.base1 = base1;
        this.base2 = base2;
        this.height = height;
    }

    getArea() {
        return ((this.base1 + this.base2) * this.height) / 2;
    }

    getPerimeter() {
        return this.base1 + this.base2 + 2 * Math.sqrt(((this.base2 - this.base1) / 2) ** 2 + this.height ** 2);
    }
}

class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    getArea() {
        return Math.PI * this.radius * this.radius;
    }

    getPerimeter() {
        return 2 * Math.PI * this.radius;
    }
}

class Rectangle {
    constructor(length, width) {
        this.length = length;
        this.width = width;
    }

    getArea() {
        return this.length * this.width;
    }

    getPerimeter() {
        return 2 * (this.length + this.width);
    }
}

document.getElementById('shape').addEventListener('change', function() {
    var shape = this.value;
    var input3Container = document.getElementById('input3-container');
    var input4Container = document.getElementById('input4-container');

    if (shape === 'trapezoid' || shape === 'rectangle') {
        input3Container.style.display = 'block';
        input4Container.style.display = 'block';
    } else {
        input3Container.style.display = 'none';
        input4Container.style.display = 'none';
    }
});

document.getElementById('calculate-button').addEventListener('click', function() {
    var shape = document.getElementById('shape').value;
    var input1 = parseFloat(document.getElementById('input1').value);
    var input2 = parseFloat(document.getElementById('input2').value);
    var input3 = parseFloat(document.getElementById('input3').value);
    var input4 = parseFloat(document.getElementById('input4').value);
    var resultArea = document.getElementById('result-area');
    var resultPerimeter = document.getElementById('result-perimeter');

    var shapeObj;

    if (shape === 'triangle') {
        shapeObj = new Triangle(input1, input2);
    } else if (shape === 'square') {
        shapeObj = new Square(input1);
    } else if (shape === 'rhombus') {
        shapeObj = new Rhombus(input1, input2);
    } else if (shape === 'trapezoid') {
        shapeObj = new Trapezoid(input1, input3, input4);
    } else if (shape === 'circle') {
        shapeObj = new Circle(input1);
    } else if (shape === 'rectangle') {
        shapeObj = new Rectangle(input1, input3);
    }

    resultArea.innerText = 'Área: ' + shapeObj.getArea().toFixed(2);
    resultPerimeter.innerText = 'Perímetro: ' + shapeObj.getPerimeter().toFixed(2);
});
