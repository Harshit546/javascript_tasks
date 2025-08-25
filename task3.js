class Shape {
    constructor(name) {
        this.name = name;
    }

    getArea() {
        throw new Error("Specify the shape for area calculation.");
    }
}

class Circle extends Shape {
    constructor(radius) {
        super('Circle');
        this.radius = radius;
    }

    getArea() {
        return Math.PI * this.radius ** 2;
    }
}

class Triangle extends Shape {
    constructor(base, height) {
        super('Triangle');
        this.base = base;
        this.height = height;
    }

    getArea() {
        return 0.5 * this.base * this.height;
    }
}

const circle1 = new Circle(5);
console.log(`Area of circle is ${circle1.getArea()}`);

const triangle1 = new Triangle(10, 4);
console.log(`Area of circle is ${triangle1.getArea()}`);