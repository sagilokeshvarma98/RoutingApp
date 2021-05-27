power=(a,b)=>a+b


square = (a)=>a*a


splitlength = (a)=>a.split(" ").length


sum = (a)=>{
    result=0
    for(let x in a)
       result+=a[x]
   return result
}


console.log(power(1,2));
console.log(square(2));
console.log(splitlength("Hello how are you"));
console.log(sum([1,2,3]));
