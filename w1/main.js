console.log("Hello from inside the main.js file");

//let myVar;
 
const myVar = -44;
const myVarType = typeof(myVar)

console.log("myVarType" + myVarType);
console.log('myVarType ${myVarType}');




function runNow() {
    if(myVarType === "number") {
        console.log('will 11 this one  run?');
    }else{
        console.log('will 13 line run?');
    }
}

runNow()
runNow()