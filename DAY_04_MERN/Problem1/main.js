function createCounter(){
let count=0;

function increment(){
    count++
    return count
}
function decrement(){
    count--
    return count
}
function getCount(){
    return count
}
return {increment,decrement,getCount}
}
const counter=createCounter()

console.log(counter.increment())
console.log(counter.increment())
console.log(counter.decrement())
console.log(counter.increment())
console.log(counter.increment())
console.log(counter.decrement())
console.log(counter.getCount())

