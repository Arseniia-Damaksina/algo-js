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

    const isCollision =
      this.topLeftXPos < rect2BottomRightXPos &&
      rect1BottomRightXPos > otherRectangle.topLeftXPos &&
      this.topLeftYPos < rect2BottomRightYPos &&
      rect1BottomRightYPos > otherRectangle.topLeftYPos;

    return isCollision;
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

// Create a program that will re-use the Rectangle class you created previously.
// It should generate 1000 random instances of Rectangle with random positions and sizes.
// Then it will display all colliding rectangles amongst those that were generated that way.

const generateRandomRectangle = () => {
  return new Rectangle(
    Math.floor(Math.random() * 1000),
    Math.floor(Math.random() * 1000),
    Math.floor(Math.random() * 10) + 1,
    Math.floor(Math.random() * 10) + 1
  );
};

const create1000Rectangles = () => {
  return Array.from({ length: 1000 }, generateRandomRectangle);
};

const findCollidingRectangles = (rectangles) => {
  const collidingRectangles = [];
  for (let i = 0; i < rectangles.length; i++) {
    for (let j = i + 1; j < rectangles.length; j++) {
      if (rectangles[i].collides(rectangles[j])) {
        collidingRectangles.push({
          rect1: rectangles[i],
          rect2: rectangles[j],
        });
      }
    }
  }

  return collidingRectangles;
};

const rectangles = create1000Rectangles();
const collidingRectangles = findCollidingRectangles(rectangles);
collidingRectangles.forEach((collision, index) => {
  console.log(
    `Collision ${index + 1}: Rectangle 1 (${JSON.stringify(
      collision.rect1
    )}) and Rectangle 2 (${JSON.stringify(collision.rect2)})`
  );
});
