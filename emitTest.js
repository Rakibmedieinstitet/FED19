const EventListner = require("events")
 
const event = new EventListner();
 
 
//register an event
//eventargs === objektet av loggedIn event
// villkor ? om det är sant : om det är false. 
event.on("Subscribe", (e)=>{
    e.isSubscribed? 
    console.log(e.username , " has subscribed")
    : 
    console.log("User not subscribed");
//if(villkor){}

})
 
function subscribe(username, isSubscribed){
//Raise/emit an event
//{username:username, isSubscribed: isSubscribed}
// { key : value}
// { namn: "Rakib"}
 event.emit("Subscribe", {username, isSubscribed})
 }
// const e = {username : "rakib", isSubscribed: true}

subscribe("Balt", false)