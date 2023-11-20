const fs=require("fs");

setTimeout(()=>{
console.log("timeout function ran")
},10 )

process.nextTick(()=>{
    for(i=0;i<=1000;i++)
    {
        console.log("i")
    }
})



setImmediate(()=>{
    console.log("setimasdasdjasldad")
    process.nextTick(()=>{
        for(i=0;i<=10000;i++)
        {
            console.log("Immediate")
        }
    })
})