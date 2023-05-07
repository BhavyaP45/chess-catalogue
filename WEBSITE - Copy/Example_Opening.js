//*Example Opening Frames*

/*Initializing Popovers*/
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})

var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
  return new bootstrap.Popover(popoverTriggerEl)
})


//Start Frame
const start_frame = document.querySelector("#startFrame")

//Buttons on variation menu are nested in the variations frame
const example_variation_frame = document.querySelector("#exampleVariationFrame")

//Carousel Frame
const example_carousel = document.querySelector("#carouselFrame")


//Function that hides the start frame contents
function hide_start_frame() {
    //Removes the Start Learning Button
    start_frame.classList.add("d-none")

}

//Function that displays the start frame contents
function display_start_frame() {
    //Displays the Start Learning Button
    start_frame.classList.remove("d-none"); 
}

//A function that hides the variation menu
function hide_variation_menu() {
    example_variation_frame.classList.add("d-none")
}

//Function that displays the variation frame
function display_variation_menu() {
   example_variation_frame.classList.remove("d-none")
   return_button.classList.remove("d-none")

}; 

//Function that hides the carousel frame
function hide_carousel() {
    example_carousel.classList.add("d-none")

}

//Function that displays the carousel frame
function display_carousel() {
    example_carousel.classList.remove("d-none")


}
//Function to change to the second frame  
function change_variation() {
    hide_start_frame()
    display_variation_menu()

}

//Function return to the start frame 
function return_start() {
    display_start_frame()
    hide_variation_menu()
}

//Function that returns to variation
function return_variation() {
    hide_carousel()
    display_variation_menu()
}

//Function that changes to the the carousel
function change_carousel() {
    display_carousel()
    hide_variation_menu()

}







