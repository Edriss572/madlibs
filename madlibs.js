/**
 * Complete the implementation of parseStory.
 *
 * parseStory retrieves the story as a single string from story.txt
 * (I have written this part for you).
 *
 * In your code, you are required (please read this carefully):
 * - to return a list of objects
 * - each object should definitely have a field, `word`
 * - each object should maybe have a field, `pos` (part of speech)
 *
 * So for example, the return value of this for the example story.txt
 * will be an object that looks like so (note the comma! periods should
 * be handled in the same way).
 *
 * Input: "Louis[n] went[v] to the store[n], and it was fun[a]."
 * Output: [
 *  { word: "Louis", pos: "noun" },
 *  { word: "went", pos: "verb", },
 *  { word: "to", },
 *  { word: "the", },
 *  { word: "store", pos: "noun" }
 *  { word: "," }
 *  ....
 *
 * There are multiple ways to do this, but you may want to use regular expressions.
 * Please go through this lesson: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/regular-expressions/
 */
let raw = '';
const regex =  /^\w+(?:...[n|a|v])/;

function parseStory(rawStory) {
  // Your code here.
  raw = rawStory;
  

  const story = rawStory.split(' ');
  const edit = document.querySelector('.madLibsEdit');
  

  for(let i = 0;i<story.length;i++) {

    if(story[i].match(regex) != null) {
      story[i] =`<input type='text' id= ${i} placeholder = '${story[i]}'>`;
    }
  }

  edit.innerHTML = story.join(' ');

  return {}; // This line is currently wrong :)
}

/**
 * All your other JavaScript code goes here, inside the function. Don't worry about
 * the `then` and `async` syntax for now.
 *
 * NOTE: You should not be writing any code in the global namespace EXCEPT
 * declaring functions. All code should either:
 * 1. Be in a function.
 * 2. Be in .then() below.
 *
 * You'll want to use the results of parseStory() to display the story on the page.
 */
getRawStory()
  .then(parseStory)
  .then((processedStory) => {
    console.log(processedStory);
  });


const btn = document.querySelector('button')
btn.addEventListener('click', printText);

function printText() {
  const inputs = document.querySelectorAll('input')

  for(let i =0 ;i < inputs.length;i++) {
    if(inputs[i].value === '') {
      inputs[i].value = '_';
    }
  }
  const story = raw.split(' ');
  const view = document.querySelector('.madLibsPreview');
  
  let j =0;
  for(let i = 0;i<story.length;i++) {
    if(story[i].match(regex) != null) {
      story[i] = inputs[j].value;
      j++;
    }
  }

  view.innerHTML = story.join(' ');
}