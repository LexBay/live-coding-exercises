var word = "19jfeapoihfe85";
var num = [ '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var new_word = "";

 /* for each character in the word check the value */ 
for(var i = 0; i < word.length; i++){

 /* for each number check for a match in the string  */ 
	for (var j = 0; j < num.length; j++){
  
  /* convert the value to an interger and if a number is found in the string add it to the new word */
  if(j === parseInt(word[i])){
      new_word += word[i];
    }  
  }  
}
console.log(new_word);
var the_answer = new_word * word.length;
console.log(the_answer);
