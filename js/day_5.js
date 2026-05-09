// spread operator :

// let arr = [1,2,3]
// let arr2 = [...arr , 4,5,6 ]
// for(let i = 0 ; i< arr.length ; i++){
//     arr2.push(arr[i])
// }

// console.log([...arr , ...arr2])

let obj ={
    name : "John",
    age : 30
}

let obj2 = {
    ...obj,
    sample:'copy'
}

console.log(obj2)

//rest operator - function parameter , destructure , return array

function display(a , ...b){
    console.log(a ,...b) 
}

display(1 , 2 , 3 , 4 , 6)

let str = ' hello world '
console.log(str)
console.log(str.length)
str2 = str.trim()
console.log(str2)
console.log(str2.toUpperCase())
console.log(str2.toLowerCase())
strSplit = str.split(" ")
console.log(strSplit)
console.log("Mr .".concat(str))
strReplace = str.replace("hello" , 'joe')
console.log(strReplace)

//destructring


// a = arr[0]

// b = arr[1]
let arr = [1,2,3,4,5]
let [a, b , c] = arr
console.log(a,b,c)

let {name , age } = obj
console.log(name , age)

// let mapMethod = []
// for(let i = 0 ; i < arr.length ; i++){
//     mapMethod.push(arr[i]*3)
// }

let mapMethod = arr.map((e)=>e*2)
console.log(mapMethod)

let filterMethod = mapMethod.filter((e)=> e > 5)

console.log(filterMethod)
const fetchData = async()=>{
    try{
        const res = await fetch('https://dummyjson.com/users')
        const data = await res.json()
        console.log(data.users.map((e)=>e.firstName))
        // name.innerText = data.users[0].firstName;
    }catch(err){
        console.log("Error in fetching data" , err)
    }
}
fetchData()
