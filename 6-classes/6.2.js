// Create a class name Rectangle with attributes topLeftXPos, topLeftYPos, width and length.
// Add a method named collides(otherRectangle) that returns true only if the current rectangle collides with otherRectangle.
// Test the collides(otherRectangle) method by using multiple test cases.

class Rectangle {
  constructor(topLeftXPos, topLeftYPos, width, length) {
    if (width <= 0 || length <= 0) {
      throw new Error("Width and length must be positive numbers.");
    }
    this.topLeftXPos = topLeftXPos;
    this.topLeftYPos = topLeftYPos;
    this.width = width;
    this.length = length;
  }

  collides(otherRectangle) {
    const rect1BottomRightXPos = this.topLeftXPos + this.width;
    const rect1BottomRightYPos = this.topLeftYPos + this.length;

    const rect2BottomRightXPos =
      otherRectangle.topLeftXPos + otherRectangle.width;
    const rect2BottomRightYPos =
      otherRectangle.topLeftYPos + otherRectangle.length;

    const isCollision = (
      rect1BottomRightXPos <= otherRectangle.topLeftXPos ||
      rect2BottomRightXPos <= this.topLeftXPos ||
      rect1BottomRightYPos <= otherRectangle.topLeftYPos ||
      rect2BottomRightYPos <= this.topLeftYPos
    );

    return !isCollision;
  }
}

const rect1 = new Rectangle(0, 0, 4, 4);
const rect2 = new Rectangle(2, 2, 4, 4);
const rect3 = new Rectangle(5, 5, 3, 3);
const rect4 = new Rectangle(-3, -3, 2, 2);

console.log(`Do rectangles collide? ${rect1.collides(rect2)}`); // true (collides)
console.log(`Do rectangles collide? ${rect1.collides(rect3)}`); // false (not)
console.log(`Do rectangles collide? ${rect2.collides(rect3)}`); // true (collides)
console.log(`Do rectangles collide? ${rect1.collides(rect4)}`); // false (not)