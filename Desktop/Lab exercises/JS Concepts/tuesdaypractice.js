//functions
//-----------------------------------
//============Normal function===================

function firstfn(){
    for(let i=0 ;i<10;i++){
        console.log("Basic function loop"+(i+1))
    }
}

//Calling function
firstfn()

//===========Anonymous Function(Function with out a name)===================

//=================The function inside the array should be anonymous======================

let a = function(){
    console.log("This is a anonymous function. This function is assigned to varible a")
}

//Calling anonymous function
a()

//==================Passing parameters into function=====================

function paramsfn(a,b){
    console.log("adding prameters... the result is",a+b)
}

//Calling the function with parameters
paramsfn(10,5)

//=============Function with default parameters

function defaultparams(a=101,b="lokesh"){
    console.log(`student with ID ${a} is ${b}`)
}

//============Calling the default parameters function with different values
defaultparams()
defaultparams(111)
defaultparams(109,"varma")

//==================CallBack function==================

function callback(a,b,c){
    console.log("Select option(Yes/No) : ",a)
    b({sno : 1,name:"lokesh"})
    if(c<5){
        console.log("Ïts good to go")
    }
    else{
        console.log("Rejected")
    }
}


callback("Yes",function(obj){
    console.log(`This is ${obj.name} bearing ID ${obj.sno}`)
},
2)
