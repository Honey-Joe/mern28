// let var const 
// let a ;

// {
//     const a  = 10;
    // var a = 10 ;
//     // a = 20
//     console.log(a)
// }

// console.log(a);

// Primitive Datatype - number , string , bool , null , undefined

// Non primitive datatype - array and object

{
    var a = 10;
    console.log(a)
}

console.log(a)
// let a = 10;
console.log(a , typeof(a))
let b = "Hello World";
console.log(b , typeof(b))
let c = true;
console.log(c , typeof(c))
let d = null;
console.log(d , typeof(d))
let e = undefined;
console.log(e , typeof(e))

let arr = [1,2,3,4, "hello" , true , ["arr"]]
console.log(arr)
let obj = {
    name : "John",
    age : 20
}
console.log(obj)

// arithmetic operators + , - , * , / , % , //

a = 20 

b = 20

// reltional operator - > , < , >= , <= , == , != , === , !==

if(a === b && a>b){
    // console.log("a is greater than b")
    console.log('if ')
}else{
    console.log("else")
}

//logical - && , || , !

for(let i = 0 ;  i < 5 ; i++){
    console.log(i)
}

function add(a,b){
    console.log(typeof(b))
    console.log(a+b)
}

add(10,20)

let an = function(a,b){
    console.log("sum function")
}

an(10 , 20)

let arrow = ()=>{
    console.log('arrow function')
}

arrow();
