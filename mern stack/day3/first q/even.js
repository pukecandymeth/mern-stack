//js pgm for even nos in a set
const a = [1,2,4,10,8,54,68,20,3];

let n = a.lastIndexOf(3)+1;

for(let i = 0;i < n; i++){
    if(a[i] %2 == 0){
        console.log(a[i]);
    }
}