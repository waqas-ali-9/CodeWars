var testString='The lesson is that you can still make The mistakes and be forgiven mistakes mistakes';



//+++++++++++++++++++++++++++++++++++++++
function ReverseString(stringInput)
{            
    //This function reverses a string
    console.log("Input String    : "+stringInput);
    console.log("Reversed String : "+ReverseArray(stringInput.split(" ")).join(" "));
}

function ReverseArray(arrayInput)
{   
    //This function reverses an array    
    var half_of_array=Math.floor(arrayInput.length/2);
    var last_iterator=arrayInput.length-1;    
    for(var a=0;a<half_of_array;a++)
    {
        temp=arrayInput[a];
        arrayInput[a]=arrayInput[last_iterator];
        arrayInput[last_iterator]=temp;        
        last_iterator--;
    }        
    return arrayInput;
}
//+++++++++++++++++++++++++++++++++++++++

function WordsCountFinder(stringInput)
{   
    //This function finds the unique elements and their count
    var inputStringArray=stringInput.split(" ");
    console.log("Input String : "+ stringInput);
    var map = new Map();
    for(var a=0;a<inputStringArray.length;a++)
    {
        if(map.has(inputStringArray[a]))
        {         
            map.set(inputStringArray[a],map.get(inputStringArray[a])+1)
        }
        else
        {                        
            map.set(inputStringArray[a],1)
        }    
    }

    for(let key of map.keys())
    {
        if(map.get(key)!=1)
        {
            console.log("More Than 1 Count : "+key+" : "+map.get(key));
        }
    }        
}


