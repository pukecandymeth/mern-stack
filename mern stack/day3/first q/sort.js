const a = [1,5,2,3,10,9,8,7,6];
let n = a.lastIndexOf(6) + 1;
let swap;

//ascending
for(let i = 0; i<n; i++){
    for(let j = i+1 ; j < n; j++){
        if(a[i] > a[j]){

            swap = a[i];
            a[i] = a[j];
            a[j] = swap;
        }
    }
    console.log(a[i]);
}

    console.log("Descending")
//descending
for(let i = 0; i<n; i++){
    for(let j = i+1 ; j < n; j++){
        if(a[i] < a[j]){

            swap = a[i];
            a[i] = a[j];
            a[j] = swap;
        }
    }
    console.log(a[i]);
}


//no sort algos


//replace multiple of 2 in wholenoset by multiple of 3 in a[]
//replace multiple of 3 in wholenoset by multiple of 5 in a[]
//mult of 6 with sum of all nos
//rest unused to be filled with base set given numbers
