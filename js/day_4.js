// console.log("Revamp 1")
// setTimeout(()=>{
//     console.log("Revamp 2")
// } , 2000)
// console.log("Revamp 3")

console.log(fetch('https://dummyjson.com/users'))

// then catch method 
// async await method
// let name = document.getElementById("name")
fetch('https://dummyjson.com/users').then((res)=>{
    console.log(res)
    return res.json()
}).then((data)=>{
    console.log(data.users[0].firstName)
    // name.innerText = data.users[1].firstName
}).catch((err)=>{
    console.log("Error in fetching data" , err)
})


const fetchData = async()=>{
    try{
        const res = await fetch('https://dummyjsoom/users')
        const data = await res.json()
        console.log(data.users[0].firstName)
        // name.innerText = data.users[0].firstName;
    }catch(err){
        console.log("Error in fetching data" , err)
    }
}

fetchData()