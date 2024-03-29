//****INTRODUCTION SECTION********************************//

const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = [ "product manager", 
                    "engineer", 
                    "scientist", 
                    "educator" ];
const typingDelay = 200;
const erasingDelay = 50 //100;
const newTextDelay = 2000; // Delay between current and next text
let textArrayIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    //if charIndex is less than length of string
    //if cursorSpan does not have ".typing"
    if(!cursorSpan.classList.contains("typing")) 
      cursorSpan.classList.add("typing"); //then add ".typing" to stop blinking

    //if it does have ".typing"...
    //add next character of string into the textContent of the span 
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } 
  else {
    //if charIndex is equal or greater than length of string
    //remove ".typing" to start blinking
    cursorSpan.classList.remove("typing");
  	setTimeout(erase, newTextDelay);
  }
}

function erase() {
	if (charIndex > 0) {
    //if charIndex is greater than 0
    //if cursorSpan does not have ".typing"
    if(!cursorSpan.classList.contains("typing")) 
      cursorSpan.classList.add("typing"); //then add ".typing" to stop blinking
    
    //if it does have ".typing"...
    //new string is the extracted substring from charIndex 0 to the char before the last
    typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  } 
  else {
    //if charIndex is zero
    //remove ".typing" to start blinking
    cursorSpan.classList.remove("typing");
    textArrayIndex++;
    //and if array index is greater or equal to length of array, reset index
    if(textArrayIndex>=textArray.length) textArrayIndex=0;
    setTimeout(type, typingDelay + 1100);
  }
}

function initiateTypeEffect() {
  if(textArray.length) {setTimeout(type, newTextDelay + 250);}
}

document.addEventListener("DOMContentLoaded", initiateTypeEffect);



//****END INTRODUCTION SECTION*******************************//

//****PROJECT SECTION****************************************//


var projectsButton = document.getElementById("projectsNav");
var projectsSection = document.getElementById("projectsSection");

projectsButton.addEventListener("click", function() {
  var projectsSectionPosition = projectsSection.offsetTop - (projectsSection.offsetHeight / 20);

  window.scrollTo({
    top: projectsSectionPosition,
    behavior: "smooth"
  });
});

var publicationsButton = document.getElementById("publicationsNav");
var publicationsSection = document.getElementById("publicationsSection");

publicationsButton.addEventListener("click", function() {
  var publicationsSectionPosition = publicationsSection.offsetTop - (publicationsSection.offsetHeight / 20);

  window.scrollTo({
    top: publicationsSectionPosition,
    behavior: "smooth"
  });
});