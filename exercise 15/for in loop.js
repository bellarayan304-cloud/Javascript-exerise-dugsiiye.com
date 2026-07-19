const student =[
    { name:"layla",
    age:19, 
    city:"bosaso"
},

{
    name:"apdalla", 
    age:23,
     city:"tripol"
},
{
    name:"fatima",
    age:27,
    city:"nairobi"
},
];

console.log("Properties and values of each person:");

for (let person of student) {
  for (let key in person) {
    console.log(`${key}: ${person[key]}`);
  }
  console.log("---");
    }


