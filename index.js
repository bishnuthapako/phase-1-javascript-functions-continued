// code your solution here
function saturdayFun(){
    console.log("function exists")
}
function saturdayFun(msg = "roller-skate"){
    return `This Saturday, I want to ${msg}!`;
    
}
console.log(saturdayFun())

function mondayWork(val = "go to the office"){
    return `This Monday, I will ${val}.`

}
console.log(mondayWork())


function wrapAdjective(msg = "*"){
    const innerFunction = function(msg1 = "a hard worker"){
        return `You are ${msg}${msg1}${msg}!`

    }
    return innerFunction;
}
