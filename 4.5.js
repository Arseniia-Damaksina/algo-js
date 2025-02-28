// Create a function named calcDistance which takes the coordinates of two different 
// points A and B in a 2D space. That function must return the distance between 
// those two points. 
// Examples results:
// Point A = [1, 1], point B = [2, 2] => 1.41
// Point A = [1, 1], point B = [3, 1] => 2
// Point A = [4, 1], point B = [1, 1] => 3
// Point A = [-2, 2], point B = [2, -2] => 5.65
// Create a program to use that function.
// Write a documentation for the calcDistance function.

/**
 * Calculates the distance between two points in a 2D space using the Euclidean formula.
 * 
 * @param {number[]} pointA - The coordinates of the first point [x1, y1].
 * @param {number[]} pointB - The coordinates of the second point [x2, y2].
 * @returns {number} The distance between pointA and pointB, rounded to two decimal places.
 * 
 * @example
 * calcDistance([1, 1], [2, 2]); // Returns 1.41
 * calcDistance([1, 1], [3, 1]); // Returns 2.00
 */
const calcDistance = (pointA, pointB) => {
    const [x1, y1] = pointA;
    const [x2, y2] = pointB;
    
    const distance = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
    const distanceRounded = parseFloat(distance.toFixed(2));

    return distanceRounded;
}

const distance1 = calcDistance([1, 1], [2, 2]);
const distance2 = calcDistance([1, 1], [3, 1]);
const distance3 = calcDistance([4, 1], [1, 1]);
const distance4 = calcDistance([-2, 2], [2, -2]);

console.log(`Distance 1: ${distance1}`);
console.log(`Distance 2: ${distance2}`);
console.log(`Distance 3: ${distance3}`);
console.log(`Distance 4: ${distance4}`);
