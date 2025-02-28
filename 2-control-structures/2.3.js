// while loop to be executed 100 times
let i = 1;
let counterWhileLoop = 0;

while(i <= 100) {
    if(i % 2 === 0) {
        console.log(i);
    }
    i++;
    counterWhileLoop++;
}
console.log(`While loop was executed ${counterWhileLoop} times`);

// for loop to be executed 50 times
let counterForLoop = 0;

for(let i = 2; i <= 100; i+=2) {
    if(i % 2 === 0) {
        console.log(i);
    }
    counterForLoop++;
}
console.log(`For loop was executed ${counterForLoop} times`);