let arr = [1,2,3,4,5,6,7,8];

let even = '';
let odd = '';

for(let i =0;i<=arr.length-1;i++){
    if(arr[i]%2==0){
even= even +arr[i]+" ";
    }

    if(arr[i]%2!==0){
        odd= odd+arr[i]+" ";
    }
}

console.log("Enven number is : ", even);
console.log("Odd number is : ", odd);







