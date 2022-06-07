let friendContainer = document.getElementById("friends");
let friendList = document.getElementById("list");


let bestFriends = ["Cassidy", "Clayton", "Daniel", "Jared", "Joshé", "Amanda","Ricardo","Mikhail","Monique","Shane"]

function display(){

    for(let i = 0;i<bestFriends.length;i++){
        friendContainer.innerHTML += ` <li> ${bestFriends[i]} </li>`
    }
    friendContainer.innerHTML += `Middle Name : ${bestFriends[bestFriends.length/2]} <br> <p> Last Name: ${(bestFriends[bestFriends.length-1])}</p> `
}

console.log(bestFriends[bestFriends.length/2])
console.log(bestFriends[bestFriends.length-1]);