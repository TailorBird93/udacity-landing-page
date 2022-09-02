/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/
const navbar = document.querySelector('#navbar__list');
const selection=document.querySelectorAll('.landing__container h2');
console.log('selection', selection);
const sections=Array.from(selection);
console.log('sections', sections);


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/ 
function isFormValid() {
    if(FirstName.checkValidity()==true
    && Surname.checkValidity()==true 
    && subjects.checkValidity()==true 
    && emailAddress.checkValidity()==true
    && phoneNumber.checkValidity()==true
    && customerMessage.checkValidity()==true) {
        alert('Form Submitted Correctly!')
    }  else {
        alert('Please, fill out the form correctly.')
    }
}

// Makes sure the navbar is created upon DOM load
document.addEventListener('DOMContentLoaded', makeNav);

function makeNav(){
    sections.forEach(function(sections){
        const newListElement=document.createElement('li');
        newListElement.textContent=sections.textContent;
        navbar.appendChild(newListElement);
    });
};



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/
 
// build the nav



    


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active
