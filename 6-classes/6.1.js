// Create a class named Circle with attributes xPos, yPos and radius. 
// Add a method named move(xOffset, yOffset) that will adjust the position of the circle. 
// Add a getter accessor named surface that will return the surface of the circle.
// Test its method and accessors by modifying the values and checking if everything is consistent.

class Circle {
    constructor(xPos, yPos, radius) {
        if (radius <= 0) {
            throw new Error("Radius must be a positive number.");
        }
        this.xPos = xPos;
        this.yPos = yPos;
        this.radius = radius;
    }

    move(xOffset, yOffset) {
        this.xPos += xOffset;
        this.yPos += yOffset;
        return this;
    }

    get surface() {
        return parseFloat((Math.PI * this.radius ** 2).toFixed(2));
    }
}

const circle1 = new Circle(0, 0, 5);
const circle2 = new Circle(8, -10, 9);

console.log("Initial coordinates:");
console.log(`Circle1: ${circle1.xPos}, ${circle1.yPos}`);
console.log(`Circle2: ${circle2.xPos}, ${circle2.yPos}`);

circle1.move(-5, 5);
circle2.move(-7, 12);

console.log("After move:");
console.log(`Circle1: ${circle1.xPos}, ${circle1.yPos}`);
console.log(`Circle2: ${circle2.xPos}, ${circle2.yPos}`);

console.log(`Circle1 surface: ${circle1.surface}`);
console.log(`Circle2 surface: ${circle2.surface}`);