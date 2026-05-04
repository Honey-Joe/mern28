
// let arr = ["joe", 2 , "hello" , true , [5,6,7] , {name : 'joe'}] // creation of array

// console.log(arr[0])

// console.log(arr.length)

// for(let i = 0 ; i < arr.length ; i++ ){
//     console.log(arr[i])
// }

// console.log("hello")

// arr.push(15)
// arr.unshift(1)
// console.log(arr)

// arr.pop()

// console.log(arr)

// arr.shift()
// console.log(arr)

// arr.splice(3,2)
// console.log(arr)

let obj = {
    name : "joe",
    age : 20,
    city : "new york",
    hobbies : ["reading" , "traveling" , "cooking"],
}

// dot notation 
console.log(obj.name)
// bracket notation
console.log(obj['age'])

obj.address = "nehru nagar"
console.log(obj)
obj['state']= 'tamilnadu'
console.log(obj)

delete obj.age;
console.log(obj)

delete obj["address"]
console.log(obj)


