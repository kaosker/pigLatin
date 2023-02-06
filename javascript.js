function pigLatinWord(word) {
  let vowels = "aeiou";
  if (vowels.includes(word[0])) {
    return word + "yay";
  }
  for (let i = 0; i < word.length; i++) {
    let letter = word[i];

    if (vowels.includes(letter)) {
        let firstPart = word.slice(i); // slice i trash = tr < ash
        let secondPart = word.slice(0, i);
        return firstPart + secondPart + "ay"; // returns "ash + tr + ay"
    }
  }
};

console.log(pigLatinWord("apple")); //=> "appleyay"
console.log(pigLatinWord("eat")); //=> "eatyay"
console.log(pigLatinWord("banana")); //=> "ananabay"
console.log(pigLatinWord("trash")); //=> "ashtray"
