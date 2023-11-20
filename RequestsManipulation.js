const map=new Map();
const mmap=new Map();
var array=[
{name:"waqas",deptt:"CS",r_id:1},
{name:"hamza",deptt:"CS",r_id:2},
{name:"umer",deptt:"CS",r_id:1},
{name:"talha",deptt:"PHY",r_id:1},
{name:"usama",deptt:"PHY",r_id:1},
{name:"burhan",deptt:"PHY",r_id:1},
{name:"maaz",deptt:"PHY",r_id:3},
{name:"noor",deptt:"MATH",r_id:1},
{name:"rahmeen",deptt:"MATH",r_id:1},
{name:"laiba",deptt:"MATH",r_id:3},
{name:"sawleh",deptt:"MATH",r_id:4},
{name:"ahmed",deptt:"MATH",r_id:2},
]

//hr deptt mein har request kitni dafa ai hai

let department_data=[];
array.forEach(element => {
    if (map.has(element.deptt)) {
      const depttData = map.get(element.deptt);
      const existingEntry = depttData.find(entry => entry.r_id === element.r_id);
  
      if (existingEntry) {
        existingEntry.count += 1;
      } else {
        depttData.push({ r_id: element.r_id, count: 1 });
      }
    } else {
      map.set(element.deptt, [{ r_id: element.r_id, count: 1 }]);
    }
  });



map.forEach((value,key) => {
        value.forEach(element => {
            if(mmap.has(element.r_id))
            {
                mmap.set(element.r_id,mmap.get(element.r_id)+1)   
            }
            else{
                mmap.set(element.r_id,1)
            }            
        });
});

let maximumvalue=null;
let maximumkey=null;

mmap.forEach((value,key) => {
    if(value>maximumvalue){
        maximumvalue=value;
        maximumkey=key
    }
});

// console.log(mmap,"mmap")

// console.log(department_data)
console.log(map);









// array.forEach( element => {        
//     if(map.has(element.deptt)){
//         map.set(element.deptt,map.get(element.deptt)+1)
//     }else{
//         map.set(element.deptt,1);
//     }    
// });

// let maximumvalue=null;
// let maximumkey=null
// map.forEach((value,key) => {
//     if(maximumvalue<value){
//         maximumvalue=value;
//         maximumkey=key
//     }    
// });

// console.log(maximumkey)







