
//Write a function firstReverse that takes a single string 
//parameter and returns the string in reverse order.
// var s = "string "
// var firstReverse = function(s) {
//    console.log(s.split("").reverse().join(""))

// }

function FirstReverse(str) { 

  var newString = "";

  for (var i = str.length - 1; i >= 0; i--) {   
    // add each character to newString
    newString = newString + str.charAt(i);
  }

  return newString;
  console.log(newString)     
}
FirstReverse("I am a string that needs to be reversed");   



function reverse(str) { 

  // first we split the string which creates an array of characters, e.g. ['c','a','t']
  // then we call the reverse function on this array 
  // and finally we turn the reversed array back into a string using the join function
  return str.split('').reverse().join('');
 console.log(str)        
}
   
reverse("I am a string that needs to be reversed");                            

// var swapCase = function(letters){
//     var newLetters = "";
//     for(var i = 0; i<letters.length; i++){
//         if(letters[i] === letters[i].toLowerCase()){
//             newLetters += letters[i].toUpperCase();
//         }else {
//             newLetters += letters[i].toLowerCase();
//         }
//     }
//     console.log(newLetters);
//     return newLetters;
// }

// var text = 'So, today we have REALLY good day';

// var swappedText = swapCase(text);