//pgm to out a series 2,22,222,2222

let a = ["","","",""];
let t = '2';
for(i = 1;i < 5;i++){
    a[i+1] =  a[i] + t ;
}
console.log(a);