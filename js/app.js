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
const sections=Array.from(selection)

const mainSectionsFirst=document.querySelectorAll('section')
const mainSections=Array.from(mainSectionsFirst)





/**
 * End Global Variables
 * Start Helper Functions
 * 
*/ 

// Helper function to check if all the form inputs have been filled correctly + alert a correct response for the user

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




/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/
 
// build the nav
function makeNav(){
    sections.forEach(function(sections){
        const newListElement=document.createElement('a');
        newListElement.textContent=sections.textContent;
        navbar.appendChild(newListElement);
// Scroll to anchor ID using scrollTO event        
        newListElement.addEventListener('click', function(){
            sections.scrollIntoView({ behavior: 'smooth'});
        })
    });
};


    


// Add class 'active' to section when near top of viewport

mainSections.forEach(function(mainSections){
    window.addEventListener('scroll', function(){
        if (mainSections.getBoundingClientRect().top <= 169 && mainSections.getBoundingClientRect().bottom >=169) {
            mainSections.classList.add('your-active-class');
        } else {
            mainSections.classList.remove('your-active-class')
        }
    })
})
 



/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active
