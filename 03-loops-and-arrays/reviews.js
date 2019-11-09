var reviews = [5, 5, 4.5, 7, 8];
var total = 0;
for (var i = 0; i < reviews.length; i++) {
    console.log(reviews[i]);
    total += reviews[i];
}
var average = total / reviews.length;
console.log("Reviews average = " + average);
