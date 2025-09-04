// Type your code below this line!
function Journey (from, to){
    this.start = from;
    this.end = to;
}
    

// Type your code above this line!

const travel = new Journey("CDMX", "QRO")

console.log("Booking a taxi from " + travel.start + " to " + travel.end + ".")