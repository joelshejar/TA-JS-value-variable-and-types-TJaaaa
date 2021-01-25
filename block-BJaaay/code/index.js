//  Loop basics

// Do the following using loops:

// Using `console.log` log all the values from 1 to 10.
let i;
for( i = 1; i <= 10; i++) {
    console.log(i);
}
// Using `console.log` log all the evan values from 1 to 10.
let j;
for( j = 1; j <= 10; j++) {
    if( j % 2 == 0){
    console.log(j);
    }
}
// Using `console.log` log all the od values from 1 to 10.
let k;
for( k = 1; k <= 10; k++) {
    if( k % 2 != 0){
    console.log(k);
    }
}
// Calculate the sum of all numbers from 1 to 10.
let m;
let sum = 0;
for(m = 1; m <=10; m++ ) {
    sum += m
}
console.log(sum)
// Log all the values from 1 to 10 using while loop
let n=1 ;
while(n <= 10){
    console.log(n)
    ++n
}
