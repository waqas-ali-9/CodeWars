function promiseimplementation(){
    return new Promise((resolve,reject)=>{
        let decision=false;
        if(decision){
            setTimeout(() => {
                resolve("Congrats")
            }, 2000);
        }
        else{
            reject("Sorry")
        }
    })
}

function promiseimplementation2(what){
    return new Promise((resolve,reject)=>{
        
        if(what=="Congrat"){
            setTimeout(() => {
                resolve("Congratulations")
            }, 2000);
        }
        else{
            reject("Sorrylicious")
        }
    })
}


async function getdata(){
    try 
    {
        console.log("Before")        
        let data=await promiseimplementation();        
        console.log("After")
        console.log(data);
        try{

            let data2=await promiseimplementation2(data)        
            console.log(data2)
        }
        catch(error){
            console.log("inner error")
            console.log(error)
        }

    }
    catch(error){
        console.log("outer error")
        console.log(error)
    }

}

// async function forloop(){
//     for (let i=1;i<6;i++)
//     {
//         console.log(i)
//         let data=await promiseimplementation2("Congrats");
//         console.log(data);
//     }
// }



getdata();