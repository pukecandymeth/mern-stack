//pgm to convert binary to decimal

num = 1100011;
let bnum = String(num);
let arr = [];
let arr2 = [];
let sum = 0;
let n = bnum.length;

for(let i = 0; i < n; i++){
    arr[i] = bnum[i];
}
console.log(arr);

for(i = 0; i < n; i++){
    arr2[i] = (2 ** (i));
    sum = sum + arr2[i];
}
console.log(arr2);
console.log(sum);