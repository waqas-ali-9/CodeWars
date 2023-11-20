// var matrix=[[1,2,3],[4,5,6],[7,8,9]]
// var matrix = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15,16]];
// var matrix=[[1,2,3,4,5,6,7],[8,9,10,11,12,13,14],[15,16,17,18,19,20,21],[22,23,24,25,26,27,28],[29,30,31,32,33,34,35],[36,37,38,39,40,41,42],[43,44,45,46,47,48,49]];

var matrix=[
    [25, 24, 23,22,21],
    [20, 19, 18,17,16],
    [15,14,13,12,11],
    [10,9,8,7,6],
    [5,4,3,2,1]]


//Check if matrix is a square matrix, only then proceed otherwise display error
if (checkMatrix(matrix)) {
    findhourglasses(matrix);
} else {
    console.log("Please Enter Correct Square Matrix")
}


function findhourglasses(matrix){    
var indexofhourglasses = [];
var sumofhourglass = [];

for (let outer = 0; outer < findExtend(matrix); outer++) {
    let tempArraytoHoldIndexed = [];
    for (let inner = 0; inner < findExtend(matrix); inner++) {


        tempArraytoHoldIndexed = [];
        tempArraytoHoldIndexed.push([[outer, inner], [outer, inner + 1], [outer, inner + 2]])
        tempArraytoHoldIndexed.push([[outer + 1, inner + 1]])
        tempArraytoHoldIndexed.push([[outer + 2, inner], [outer + 2, inner + 1], [outer + 2, inner + 2]])
        
        indexofhourglasses.push(tempArraytoHoldIndexed)

        sumofhourglass.push(findSum(matrix, tempArraytoHoldIndexed))
    }

}

//Function Call
printHourGlasses(indexofhourglasses);
//Function Call
printMax(sumofhourglass,indexofhourglasses);

//Function to Print the sum of each hourglass.
// printSums(sumofhourglass)



}





//Function to Print the hourglasses.
function printHourGlasses(indexofhourglasses){
    for(let i=0;i<indexofhourglasses.length;i++){
        console.log("Hour Glass : "+(i+1)+" : ",indexofhourglasses[i]);
    }

}


function printSums(sumofhourglass){
    for(let i=0;i<sumofhourglass.length;i++){
        console.log("Hour Glass Sum  : "+(i+1)+" : ",sumofhourglass[i]);
    }

}



//Function to Print the maximum hourglass along with its sum
function printMax(sumofhourglass,indexofhourglasses) {
    let maximum = sumofhourglass[0];
    let maximumindex = 0;
    for (i = 1; i < sumofhourglass.length; i++) {
        if (maximum < sumofhourglass[i]) {
            maximum = sumofhourglass[i];
            maximumindex = i
        }
    }
    console.log("Maximum Hourglass : ",indexofhourglasses[maximumindex]);
    console.log("Maximum Sum       : ",maximum);
}


//Function to find the sum of hourglass.
function findSum(matrix, tempArraytoHoldIndexed) {
    let sum = 0;
    for (let i = 0; i < tempArraytoHoldIndexed.length; i++) {
        for (let j = 0; j < tempArraytoHoldIndexed[i].length; j++) {
            let array = tempArraytoHoldIndexed[i][j]
            sum = sum + matrix[array[0]][array[1]]
        }
    }
    return sum;
}


//function to find the limit upto which the loops will iterate in the main findhourglass() function.
function findExtend(matrix){

if(matrix.length<5)    {
    return Math.floor(matrix.length/2)
}
else{
    return Math.ceil(matrix.length/2)
}
    
    
}



//Function to check if a matrix is a square matrix or not
function checkMatrix(matrix) {
    let decision = true;
    for(let a=0;a<matrix.length;a++){    
        if(matrix[a].length!=matrix.length)
        {
            decision=false;            
            return decision;
        }
        
    }
        return decision;
}