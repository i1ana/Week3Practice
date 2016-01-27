
//1. GetName Function
// var info = {
// 	name: 'ilana',
// 	age: 28
// }

// function getName(){
// 	return info.name;
// }

// console.log(info.name)

/*2. Write a function called 'totalLetters' which takes an 
array of strings and returns the total number of letters in all strings.*/

// var words =['potato', 'milk', 'grapes', 'tea'] 

// function totalLetters() {
// for(i = 0; i <= words.length; i++)
// 	var length = words.length; 
// 	return length;  
// }
// 	console.log(length)


/* 3. Write a function called 'keyValue' which takes two arguments and
returns a new object with a key of the first argument and the value of the second argument. */

// var keyValue = function (a, b) {
//     var object = {}
//     object[a] = b
//     return object 
// }

// console.log(keyValue('city', 'Denver'));

/* 4. Write a function called 'negativeIndex' which takes an array and a negative number, 
and returns the value from the array at the given negative index, as if the array was circular,
 i.e. arr.length+num. */

// var arr = ['fish', 'cat', 'dog', 'cow', 'crab']
// var num = -4
// var negativeIndex = function(a, b) {
// 	return a[(a.length + b)]	
// }

// console.log(negativeIndex(arr, num))

/* 5. Write a function called 'removeM' which takes a single string 
argument and removes all 'm' characters from the string*/

// var myString = 'mammal'
// var removeM = function() {
// 	return myString = myString.split('m').join('')
// }
// console.log(removeM(myString))

/* 6. Write a function called 'printObject' which takes a single object argument 
and console.log's each key-value pair in the format key is value on separate lines. */ 

// var printObject = function (obj){

// 	for (key in obj){
// 		console.log(key+" is "+obj[key]);
// 	}
// }

// printObject({ firstname: 'refus', lastname: 'dingleberry' });

/* 7. Write a function called 'vowels' which takes a string and returns 
an array of all the vowels in the string, including duplicates. */


// var vowels = function (str){
// 	var myArray = new Array();
// 	str = str.toLowerCase();
// 	var vowelList = "aeiou";

// 	for (pos in str){
// 		letter = str[pos]
// 		if (vowelList.indexOf(letter)!=-1)
// 			myArray.push(letter);
// 	}
// 	return myArray;
// }

// console.log(vowels('I am a banana'));

/* 8. Write a function called 'twins' which takes an array and  returns true if every adjacent pair
of items in the array is the same. */

// var twins = function(array){
// 	var st1 ="";
// 	var st2 ="";

// 	for (i=0; i<array.length; i+=2){
// 		st1+=array[i];
// 	}

// 	for (i=1; i<array.length; i+=2){
// 		st2+=array[i];
// 	}

// 	if (st1===st2)
// 		return true;
// 	else
// 		return false;
// }

// console.log(twins(['a', 'a', 'b', 'b', 'z', 'z']));
// console.log(twins(['a', 'a', 'b', 'c', 'd', 'd']));

/* 9. Write a function called 'or' which takes an array of booleans and returns true if
any one of them is true. Given an empty array, return false. If you find an item that 
is true, the function should return true immediately and not continue checking further values. */

var or = function(myArray) {

	for (pos in myArray){
		if (myArray[pos]===true)
			return true;
	}

	return false;
}

console.log(or([false, false, true, false]) );
console.log(or([false, false, false]));
console.log(or([]));

/* 10. Write a function called 'unique' which takes an array of strings, and returns 
a new array consisting of the unique values (no duplicates). */ 

var unique = function (myArray){
	var returnArray = [];

	for (var i = 0;i<myArray.length;i++){
		if (returnArray.indexOf(myArray[i])==-1)
			returnArray.push(myArray[i]);
	}
	return returnArray;
}

console.log(unique(['ilana', 'bill', 'bob', 'ilana']));
console.log(unique(['a', 'b', 'a', 'c', 'd', 'd']) );

