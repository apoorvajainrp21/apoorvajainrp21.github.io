function toggleMenu(){
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open")
    icon.classList.toggle("open")
}



// Array of "Hello" in different languages
const helloWords = [

    "CYBER SECURITY ANALYST" ,
    " DEVELOPER" ,
    "COMPUTER ENGINEER" ,
     "ELECTRONICS ENGINEER" ,
   "PROGRAMMER ANALYST" 
  ];
  
  let wordIndex = 0;
  let letterIndex = 0;
  const typingSpeed = 100; // Speed of typing each letter
  const pauseBetweenWords = 1000; // Pause before switching to the next language
  
  function typeHelloWord() {
    const currentWord = helloWords[wordIndex];
  
    if (letterIndex < currentWord.length) {
      document.getElementById("hello-text").innerHTML += currentWord.charAt(letterIndex);
      letterIndex++;
      setTimeout(typeHelloWord, typingSpeed);
    } else {
      // Pause after the word is fully typed, then clear and move to the next word
      setTimeout(clearText, pauseBetweenWords);
    }
  }
  
  function clearText() {
    // Clear "Hello" text and reset letter index
    document.getElementById("hello-text").innerHTML = "";
    letterIndex = 0;
  
    // Move to the next word in the array
    wordIndex = (wordIndex + 1) % helloWords.length;
  
    // Start typing the next "Hello" word
    typeHelloWord();
  }
  
  // Start the typing effect
  typeHelloWord();
  
  



// Get the <img> tag and its src
const img = document.getElementById('aboutme_bc');
const imgSrc = img.src;

// Set the src as the background image of the container
document.querySelector('.background-containeram').style.backgroundImage = `url(${imgSrc})`;

// Optionally hide the original <img>
img.style.display = 'none';



