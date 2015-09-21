//Wednesday 9/16/15//

//Array for Days !!

// For any methods that we didn't cover, please refer to the Array Documentation.
// Discovering new things is fun and a great way to learn!!
// Please console.log("Question#") followed by console.log(yourAnswer) after each question.
// If you would like, practice using document.write() as well. Use any elements you like!
// ==========================================================================

console.log("Question 1. Declare a variable whose value is an empty Array. Use any method you choose to add at least 4 items to it.");

var myArray = [];
myArray.push(1, 2, 3, 4);

console.log(myArray);

console.log("Question 2. Add an additional item to the beginning of your Array.");
myArray.unshift(5);
console.log(myArray);

console.log("Question 3. Remove the second and third items.");
myArray.splice(2, 3);
console.log(myArray);

console.log("Question 4. Add two new items after the second item.");
myArray.splice(2, 0, 6, 7);
console.log(myArray);

console.log("Question 5. Write 'The current length of the array is....' using the .length method");
console.log('The current length of the array is ' + myArray.length);

// Use the following Array for questions 6-11:
var things = ['mug', 'book', 'mouse', 'plant', 'sunglasses'];

console.log("Question 6. Change 'mouse' to 'keyboard'");
things[2] = 'keyboard';
console.log(things) 

console.log("Question 7. Combine all of the elements of the array into a string.");
var thingsToString = things.toString();
console.log(thingsToString);

console.log("Question 8. Declare a variable called lastItem whose using .pop() Add two new items to lastItem, on at the beginning and one at the end.");
var things = ['mug', 'book', 'mouse', 'plant', 'sunglasses'];
var lastItem = things.pop();
var myLastArray = [];
myLastArray.push(lastItem);
myLastArray.unshift('pencil');
myLastArray.push('dog');
console.log(myLastArray);

console.log("Question 9. Create a new Array called itemLast. The items should be the same as lastItem, only in reverse order.");
var itemLast = myLastArray.reverse();
console.log(itemLast);

console.log('Question 10. Remove the first item of itemLast.');
itemLast.shift();
console.log(itemLast);

console.log('Question 11. Remove all items from itemLast');
itemLast = [];
console.log(itemLast);

// 12. Using the Arrays below, create a single Array called numberPets whose value is [12, 5, 9, 27, 'fish', 'dog']
var firstArray = [12, 5, 9, 27];
var secondArray = ['fish', 'dog'];
var numberPets = [];
numberPets.push(firstArray + secondArray);
console.log(numberPets);

// Use the following array for questions 13-16:
var people = ['Bill', 'Ted', 'Emily', 'Andrea', 'Doug'];

console.log('Question 13. Add two new people after "Doug"');
people.push('Jon', 'Jane');
console.log(people); 

console.log("Question 14. Remove everybody except 'Andrea' and 'Ted'");
var people = ['Bill', 'Ted', 'Emily', 'Andrea', 'Doug', 'Jon', 'Jane'];
// var fewerPeople = people.slice(1, 3, 4, 5);
var fewerPeople = people.filter(function(person) {
	return person === 'Andrea' || person === 'Ted';
});
console.log(fewerPeople);

console.log("Question 15. Add a new person to the beginning of the Array");
people.unshift('Ann');
console.log(people);

console.log("Question 16. Arrange the items alphabetically. Store this Array as orderedPeople");
var orderedPeople = people.sort();
console.log(orderedPeople);

console.log("Question 17. Create an array of arrays with the following three arrays:");
var array1 = ["Fido", "Spot", "Rex", "Sparky"]
var array2 = ["Bulldog", "Lab", "Dalmation", "Beagle"]
var array3 = ["White", "Black", "Spotted", "Tri-color"]
var allArrays = array1.concat(array2, array3);
console.log(allArrays);

var array1 = ["Fido", "Spot", "Rex", "Sparky"]
var array2 = ["Bulldog", "Lab", "Dalmation", "Beagle"]
var array3 = ["White", "Black", "Spotted", "Tri-color"]
var array4 = [];
array4.push(array1 + array2 + array3);
console.log(array4);

// Goal:
var array4 = [
                ["Fido", "Spot", "Rex", "Sparky"],
                ["Bulldog", "Lab", "Dalmation", "Beagle"],
                ["White", "Black", "Spotted", "Tri-color"]
              ]

console.log('Question 18. Remove "Sparky" and "White" from the above array of arrays.');
// var fewDogs = array4.slice();
array4[0].splice(3, 1);
array4[2].splice(0, 1);
console.log(array4);

console.log('BONUS 1: Try to arrange the following items from smallest to largest:');
var sortingNumbers = [2, 5, 98, 55, 77, 300]
var orderedNumbers = sortingNumbers.sort();
console.log(orderedNumbers);

console.log("Explain why it doesn't sort as expected.");
console.log('Although 2 is numerically smaller than 98 or 300, lexicographically, it is larger, so 7 appears at the very right of the sorted array.');

console.log('BONUS 2: Transform array1 into array2 using as few lines of code as you can without directly changing the value of an item (ie array1[0] = item');
var array1 = [2, 'dog', 34, 'jim', 'Bill', 'plant', 'mug', 17];

array1.forEach(function(item) {
	if (item === 34 || item === 'mug') {
		var index = array1.indexOf(item);
		array1.splice(index, 1);
	}
});

console.log(array1);
//Goal
var array2 = ['plant', 17, 2, 'Bill', 'dog'];
