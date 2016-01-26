
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

var printObject = function (obj){

	for (key in obj){
		console.log(key+" is "+obj[key]);
	}
}

printObject({ firstname: 'refus', lastname: 'dingleberry' });

/* 7. Write a function called 'vowels' which takes a string and returns 
an array of all the vowels in the string, including duplicates. */




