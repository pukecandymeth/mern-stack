//perfect square nos from first 100 natural numbers

for(let i = 1; i < 101; i++){
    if(Number.isInteger(i ** (1/2))){
        console.log(i)
    }
}