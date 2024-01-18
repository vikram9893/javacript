





//stack(primitive) and heap memory(non primitive)


let myYoutubeChannel="hiteshchoudharydotcom"
let anotherName= myYoutubeChannel
anotherName="chaiaurcode"

console.log(anotherName);
console.log(myYoutubeChannel);

let userOne={
    email:"use@gmail.com",
    upi:"user@ybl"
   
}
let userTwo=userOne

userTwo.email="hitesh@google.com"

console.log(userOne.email);
console.log(userTwo.email);