function display(a,b){
    console.log(a+b());
}

//callback function -> giving function as an argument 
display(10,()=>{
    return 20
})

//Schedulers - setInterval , setTimeout


let seI = setInterval(()=>{
    console.log("hello")
},1000)

setTimeout(()=>{
    console.log("Executed after 3 sec")
    clearInterval(seI)
} , 3000)
