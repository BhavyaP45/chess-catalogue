//Start Frame
const start_frame = document.querySelector("#startFrame")

//Buttons on variation menu are nested in the variations frame
const caro_variation_frame = document.querySelector("#caroVariationFrame")

//Classical Carousel Frame
const classical_carousel = document.querySelector("#classicalFrame")

//Advance Setup Frame
const advance_carousel = document.querySelector("#advanceFrame")

//Exchange Frame
const exchange_carousel = document.querySelector("#exchangeFrame")

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
    caro_variation_frame.classList.add("d-none")
}

//Function that displays the variation frame
function display_variation_menu() {
   caro_variation_frame.classList.remove("d-none")

}; 

//Function that hides the carousel frame
function hide_carousel() {
    classical_carousel.classList.add("d-none")
    advance_carousel.classList.add("d-none")
    exchange_carousel.classList.add("d-none")

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
    display_variation_menu()
    hide_carousel()
}

//Function that changes to the first carousel
function change_classical() {
    classical_carousel.classList.remove("d-none")
    hide_variation_menu()

}

//Function that changes to the second carousel
function change_advance() {
    advance_carousel.classList.remove("d-none")
    hide_variation_menu()

}

//Function that changes to the third carousel
function change_exchange() {
    exchange_carousel.classList.remove("d-none")
    hide_variation_menu()

}
