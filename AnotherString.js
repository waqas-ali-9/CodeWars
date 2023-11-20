// var name="Chouwdhary waqas";



// let array=name.split(" ")
// console.log(array)


// let data=["chaudhry","Chaudhary","Chouwdhary"];


// function checkname(n,d){
//     let divide=n.split(" ")
//     let present=false;
//     divide.forEach(element => {        
//         d.find(each=>each===element)?present=true:present=false;        
//     });    
//     console.log(divide[1])
// }

// checkname(name,data);



var word="maham";
var wordArray=[];
var last_iterator=word.length;

for(let a=0;a<last_iterator;a++)
{
    wordArray.push(word[a]);
}
console.log(wordArray,"lala");

for(let a=0;a<Math.floor(wordArray.length/2);a++){    
    last_iterator--;
        temp=wordArray[a];
        wordArray[a]=wordArray[last_iterator];
        wordArray[last_iterator]=temp;        
        console.log(wordArray);                    
}


var reversedString=wordArray.join('');

if(reversedString===word){
    console.log("palindrome")    
}
else{
    console.log("no")    
}

// console.log(wordArray);








