//console.log("enter a number")
const flag =true
let i=0
/*if (i>10)
{
    console.log("condition satisfied")
}
else
{
    i++
    console.log("condition not satisfied")
}*/
/*while (i<=10)
{console.log(i)
i++}
console.log("***********************")
for (let a=0; a<=100; a++)
{
    if (a%2==0 || a%5==0)
    console.log(a)
}*/
const number = parseInt(prompt('Enter the number of terms: '));
let n1 = 0, n2 = 1, nextTerm;

console.log('Fibonacci Series:');

for (let i = 1; i <= number; i++) {
    console.log(n1);
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
}