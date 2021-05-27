//Write a program to convert all srings to upper case using map
let strArr = ["good","morning","to","you","all"]

let uppStr = strArr.map(x=>x.toUpperCase())
console.log(uppStr);

//Remove all odd numbers using filter
let numArr = [1,65,67,354,98721,987,4987,34987,45,97,654,988]

let evenArr = numArr.filter(x=>x%2==0)

console.log(evenArr)

//Arrow function to concatinate all strings in an array into one


let concatString=()=>{
    let strAdd = ""
    for(let x of strArr)
    strAdd+=x
    return strAdd
}

console.log(concatString());


let reducedArr = strArr.reduce((a,b)=>a+b)


console.log("reduced string array is", reducedArr);

