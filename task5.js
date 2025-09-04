

// Type your code below this line!
function FriendsList(names) {
    this.names = names;
}

const cantidad = parseInt(process.argv[2]);
const nombres = process.argv.slice(3, 3 + cantidad);
const myFriends = new FriendsList(nombres);

console.log(myFriends.names);


// Type your code above this line!

