//DRIVER CODE
array=
[
    [1,2,3,4,5],
    [1,2,3,4,5],
    [1,2,3,4,5],
    [1,2,3,4,5],        
    [1,2,3,4,5],
    
    
];


diagonalsummatrix(array)

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//function to find the sum of diagonals of a matrix.
function diagonalsummatrix(array){        
    //if matrix is square then find sum else stop
    if(matrixcheck(array))
    {        
        //finding sum;
        var count=array.length-1;
        var sum=0;
        for (var a=0;a<array.length;a++)
        {    
        sum+=array[a][a];
        sum+=array[a][count];
        count--;    
        }        
        console.log("SUM of DIAGONALS : "+sum)
        return sum;    
    }    
}

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//Function to check if the matrix is a square one or not
function matrixcheck(array){            
    var decision=true;
    array.forEach(element => {
        if(element.length!=array.length)
        {            
            decision=false;
        }
    }); 
    if(decision)
    {
        return true;
    }
    else{
        console.log("Not a square matrix!");
        return false;
    }
}

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++