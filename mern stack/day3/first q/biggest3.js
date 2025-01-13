//js to find biggest of 3
let a=5;
let b=10;
let c=33;

if(a > b){
    if(a > c){
        console.log(a + " is biggest");
    }
    else{
        console.log(c+ " is biggest");
    }
}
else if(b > a){
    if(b > c){
        console.log(b+ " is biggest");
    }
    else{
        console.log(c+ " is biggest");
    }
}
else{
    console.log("give differing numbers in magnitude");
}