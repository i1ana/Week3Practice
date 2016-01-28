

// var reverseWord = ("I am a string that needs to be reversed");         


// function reverse(str) { 

//  return str.split('').reverse().join('');    

//   return str;         
// }
   
// console.log(reverse(reverseWord))                        


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


function Char_Counts(str1) {  
var uchars = {};  
str1.replace(/\S/g, function(l){uchars[l] = (isNaN(uchars[l]) ? 1 : uchars[l] + 1);});  
return uchars;  
}  
console.log(Char_Counts("The quick brown fox jumps over the lazy dog"));  

//last function still needs work 
