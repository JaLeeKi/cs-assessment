// Write a function, find_longest_word, that takes a list of words and returns the length of the longest one.

function find_longest_word(str) {
    let word = str.split(' ');
    let length = 0;
  
    for (let i = 0; i < word.length; i++) {
      if (word[i].length > length) {
        length = word[i].length;
      }
    }
    return length;
  }

console.log(find_longest_word("Jade is flabbergasted that his code worked!"));
//O(n)


// Write a function that takes in a single word, as a string. It should return True if that word contains only unique characters. Return False otherwise.

function uniqueChars(str){
    for (let i = 0; i < str.length; i++) {
        for (let j = i + 1; j < str.length; j++) {
            if (str[i] == str[j]) {
                return false;
            }
        }
    }
    return true;
}

console.log(uniqueChars("Jade"))
//O(n^2)


// Write a function to check a sentence to see if it is a pangram or not.

function isPangram(s) {
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    let regex = /\s/g;
    let lowercase = s.toLowerCase().replace(regex, "");
   
    for(let i = 0; i < alphabet.length; i++){
     if(lowercase.indexOf(alphabet[i]) === -1){
       return "This is not a pangram";
     }
    }
   
   return "This is a pangram!";
 }

console.log(isPangram("I like cats, but not mice"))
//O(n)



// Write a function that takes in an array of numbers. The function should return True if any two numberss in list sum to 0, and false otherwise.
// For example:
// addToZero([]);
// // -> False
// addToZero([1]);
// // -> False
// addToZero([1, 2, 3]);
// // -> False
// addToZero([1, 2, 3, -2]);
// // -> True