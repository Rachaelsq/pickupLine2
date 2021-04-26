


/* array of pickup lines */
const pickupArray = [
    'If you were a burger at McDonalds, youd be the McGorgeous.',
    'Is your name Earl Grey? Because you look like a hot-tea!',
    'Know whats on the menu? Me-N-U.',
    'Are you a loan? Cause youve got my interest!',
    'If I had to rate you from 1 to 10, Id give you a 9, because Im the 1 youre missing.',
    'There must be something wrong with my eyes. I cant take them off you.'
  ];


/* Get random pickup line from array */
let pickupLine = pickupArray[Math.floor(Math.random() * pickupArray.length)];
/* console.log(JSON.stringify(pickupLine))*/
const notAnObject = JSON.stringify(pickupLine)



/* random pick up line button1 1 */
const button = document.getElementById('button1Id');
/* button function */
document.getElementById(button1Id).addEventListener(click, btnFunc());
  
function btnFunc() {
  document.querySelector("h2").innerHTML = notAnObject
}

/* template literal display of array data */
  const pickupDisplay = `
<div class="pickupArray">
    ${pickupArray.map( pickupArray => 
            `your ultimate pickup line: ${pickupArray.line}
            is your  pickup line!      
`
     ).join('')}
 </div>
`;



/* 
==============
NOUN
==============
*/

/* Get the noun from input */
let noun = document.getElementById("noun");
let nounValue = document.getElementById("noun").value;

/* madlib button */
const madlibBtn = document.getElementById('madlibBtn');

/* run function on button submit */
function nounFunc() {
  document.querySelector("nounTest").innerHTML = nounValue
}


const submitMadlibs = document.querySelector('[name="submitMadlibs"]')

submitMadlibs.addEventListener('submit', function(event) {
  event.preventDefault()
  event.currentTarget.querySelector('[name="noun"]')
  console.log(event.currentTarget.noun.value)
});

/* madlib button function */
/* document.getElementById(madlibBtn).addEventListener(click, nounFunc());*/





