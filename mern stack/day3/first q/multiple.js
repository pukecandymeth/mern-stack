 //js pgm to find multiple of 5 in natural nos and add 3 if so.
//if not multiple, multiply by 5
//first 10 natural nos

for(let i = 1;i < 11;i++){
    if(i%5 == 0){
        console.log(i + 3);
    } 
    else{
        console.log(i * 5);
    }
}