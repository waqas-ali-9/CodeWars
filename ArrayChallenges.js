const testArray=[20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1];

function MaximumAndMinimum(arrayInput)
{
    //This function finds the maximum and minimum in an array
    console.log("InputArray : "+ arrayInput);
    var max=arrayInput[0];
    var min=arrayInput[0];
    for(var a=0;a<arrayInput.length;a++)
    {
        arrayInput[a]>max?max=arrayInput[a]:max=max;
        arrayInput[a]<min?min=arrayInput[a]:min=min;
    }
    console.log("Largest Element  : "+max);
    console.log("Smallest Element : "+min);
}

function ReverseArray(arrayInput)
{   
    //This function reverses an array
    console.log("InputArray    : "+ arrayInput);     
    var half_of_array=Math.floor(arrayInput.length/2);
    var last_iterator=arrayInput.length-1;    
    for(var a=0;a<half_of_array;a++)
    {
        arrayInput[a]=arrayInput[a]+arrayInput[last_iterator];
        arrayInput[last_iterator]=arrayInput[a]-arrayInput[last_iterator];
        arrayInput[a]=arrayInput[a]-arrayInput[last_iterator];
        last_iterator--;
    }    
    console.log("Reverse Array : "+ arrayInput);
}

function ElementsIndexFinder(arrayInput)
{   
    //This function finds the unique elements and their positions in an array
    console.log("Input Array : "+ arrayInput);
    var map = new Map();
    for(var a=0;a<arrayInput.length;a++)
    {
        if(map.has(`${arrayInput[a]}`))
        {
            //fetch existing array
            var fetchvalue=map.get(`${arrayInput[a]}`)
            //push the index into array
            fetchvalue.push(`${a}`);
            //set map value
            map.set(`${arrayInput[a]}`,fetchvalue)
        }
        else
        {
            //create an empty array
            var createValue=[]
            //push the index into array
            createValue.push(`${a}`)
            //set map value
            map.set(`${arrayInput[a]}`,createValue)
        }    
    }
    console.log('MAP : ',map);
    
}

// +++++++++++++++++++++++++++++++++++++++++++++++++++
function AddTwoSortedArraysIntoThirdArray(arrayInput1,arrayInput2)
{
    //This funcion will take 2 sorted arrays, insert them into a third sorted array.
    var sortedArray=[];
    var iterator=0;
    arrayInput1.length>=arrayInput2.length?iterator=arrayInput1.length:iterator=arrayInput2.length;        
    for (var a=0;a<iterator;a++)
    {                    
            if(arrayInput1[a]>arrayInput2[a])
            {
                correctPlaceElementInserter(sortedArray,arrayInput2[a]);
                correctPlaceElementInserter(sortedArray,arrayInput1[a]);                
            }
            else
            {
                correctPlaceElementInserter(sortedArray,arrayInput1[a]);
                correctPlaceElementInserter(sortedArray,arrayInput2[a]);
            }        
    }
    console.log("Sorted Array : "+sortedArray)
}


function correctPlaceElementInserter(arrayInput,element)
{    
	//this function inserts elements in ascending order. In Sorted Manner
    //Recursive Function
    //keep popping elements of array if they are less than the element to be inserted.
    //insert the element when popped is > than the element to be inserted.
    //push back all the popped elements back into the array.
    var popped=arrayInput.pop();    
    if(popped>element)
    {
        arrayInput=correctPlaceElementInserter(arrayInput,element);
        arrayInput.push(popped);
    }
    else
    {
        //for index out of range value handling
        if(popped!==undefined)
        {
            arrayInput.push(popped);
        }
        arrayInput.push(element);
        return arrayInput;
    }
    return arrayInput;
}
// +++++++++++++++++++++++++++++++++++++++++++++++++++

function ArrayShiftingRight(arrayInput,howmanyelements)
{
    //This function will shift an array toward right with K elements
    for(var a=0;a<howmanyelements;a++)
    {
        arrayInput.unshift(arrayInput.pop());
    }
    console.log(arrayInput)
}

function ArrayShiftingLeft(arrayInput,howmanyelements)
{
    //This function will shift an array toward left with K elements
    for(var a=0;a<howmanyelements;a++)
    {
        arrayInput.push(arrayInput.shift());
    }
    console.log(arrayInput);
}


function FirstRepeatingElement(arrayInput)
{
    //This function will find the first array element that has a duplicate.
    var firstRepeatingElement=0;
    var map=new Map();
    for(var a=0;a<arrayInput.length;a++)
    {
        if(map.has(`${arrayInput[a]}`))
        {
            firstRepeatingElement=arrayInput[a];
            console.log(firstRepeatingElement);
            return;
        }
        else
        {
            map.set(`${arrayInput[a]}`,a)
        }
    }
    console.log("No Repeating Element")
}




var array1=[10,20,20,40,10]
var array2=[60,70,80,90,100]

// AddTwoSortedArraysIntoThirdArray(array1,array2);

FirstRepeatingElement(array1);


