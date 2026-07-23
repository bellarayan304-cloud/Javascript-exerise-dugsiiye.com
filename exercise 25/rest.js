// SPREAD
const number=[1,2,3];
const AllNumber = [... number, 4,5,6];
console.log(AllNumber);

// REST
function multply(...numbers){
return numbers.reduce((total, multply)=> total * multply);


}
console.log(multply(1,2,3,4,5));

