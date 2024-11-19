export function typewriterAdd(txt, callback) {
 const element = document.getElementById("typewriter");
 let i = 0;

 function typeChar() {
   if (i < txt.length) {
     element.innerHTML += txt.charAt(i);
     i++;
     setTimeout(typeChar, 150); // Adjust typing speed here
   } else {
     // Once typing is done, call the callback (for deleting)
     setTimeout(callback, 1000); // Wait 1 second before deleting
   }
 }

 typeChar();
}

export function typewriterDelete(callback) {
 const element = document.getElementById("typewriter");
 let text = element.innerHTML; // Get the current text inside the element
 let i = text.length; // Set i to the length of the text

 function deleteChar() {
   if (i > 0) {
     element.innerHTML = text.substring(0, i - 1); // Remove the last character
     i--; // Decrease the index
     setTimeout(deleteChar, 100); // Adjust deleting speed here
   } else {
     // Once deleting is done, call the callback (for adding the next word)
     callback();
   }
 }

 deleteChar();
}

export function infiniteTypewriter() {
 const skills = ['HTML', 'CSS', 'PHP', 'Laravel', 'Bootstrap', 'Tailwind', 'SQL',];
 let i = 0;

 function loop() {
   typewriterAdd(skills[i], () => {
     typewriterDelete(() => {
       i++;
       if (i >= skills.length) {
         i = 0; // Loop back to the first word
       }
       loop(); // Call loop again for the next word
     });
   });
 }

 loop(); // Start the loop
}