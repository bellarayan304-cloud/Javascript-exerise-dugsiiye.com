//Non-blocking
function getUserData(){
    setTimeout(()=>{
        console.log("after 3 second")
    },3000)
}
console.log("waa uu so dahayaa")
getUserData();


//Blockin

function FetchUserData(){
alert("fetch user data")
return{
    id:21,
    name:"layla",
    city:"bosaso"    
}

}
console.log("My name layla ryan");
const user=FetchUserData();
console.log("user data",user)
console.log("magaca hoyaday waa magaool")
