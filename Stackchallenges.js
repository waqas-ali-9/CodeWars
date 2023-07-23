// We will consider an array as a stack

var testArray=[1,2,3,4,5,6,7,8,9,10];
var testStack=[10,437,12,64,78,43,12,45,76,45,2345,23,12];

function ReverseAnArrayUsingStack(arrayInput)
{
    //This function will reverse an array using stack
    console.log("Input Array   : "+arrayInput);
    var stack=[];
    for (var a=0;a<arrayInput.length;a++)
    {
        stack.push(arrayInput[a]);        
    }
    arrayInput=[];    
    while(stack.length!==0)
    {
        arrayInput.push(stack.pop());
    }
    console.log("Reversed Array : "+arrayInput);
}

function ReverseAStackUsingQueue(stackInput)
{
    //This function will reverse a stack using queue
    var queue=[];    
    console.log("Input Stack    : "+stackInput);
    while(stackInput.length!==0)
    {
        queue.push(stackInput.pop());
    }

    while(queue.length!==0)
    {
        stackInput.push(queue.shift());
    }
    console.log("Reversed Stack : "+stackInput);
}

//++++++++++++++++++++++++++++++++++++++++++++++++++++++
function SortAStackUsingStack(stackInput)
{
    console.log("Input  Stack : "+stackInput);
    var sortedStack=[];
    var popped=stackInput.pop();
    while(popped!==undefined)
    {
        sortedStack=InsertAtCorrectPosition(sortedStack,popped)
        popped=stackInput.pop();
    }
    console.log("Sorted Stack : "+sortedStack);
}

function InsertAtCorrectPosition(stack,element)
{
    //Recursive Function
    //keep popping elements of stack if they are less than the element to be inserted.
    //insert the element when popped is > than the element to be inserted.
    //push back all the popped elements back into the stack.
    var popped=stack.pop();
    if(popped>element)
    {
        stack=InsertAtCorrectPosition(stack,element);        
        stack.push(popped);
    }
    else
    {
        //boundary check
        if(popped!==undefined)
        {
            stack.push(popped);                
        }
        stack.push(element);
        return stack;
    }
    return stack;
}
//++++++++++++++++++++++++++++++++++++++++++++++++++++++

SortAStackUsingStack(testStack)