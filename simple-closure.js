function multiplier(){
    let counter=0;
    return function()
    {
         counter++;
         return counter;
    }
}
let counting=multiplier();
console.log(counting());
console.log(counting());
console.log(counting());
console.log(counting());