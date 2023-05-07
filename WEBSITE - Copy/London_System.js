//Start Frame
const start_frame = document.querySelector("#startFrame")

//Buttons on variation menu are nested in the variations frame
const london_variation_frame = document.querySelector("#londonVariationFrame")

//Mainline Carousel Frame
const mainline_carousel = document.querySelector("#mainlineFrame")

//Indian Setup Frame
const indian_setup = document.querySelector("#indianFrame")

//Queen's Indian Frame
const queen_indian = document.querySelector("#queenIndianFrame")

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
    london_variation_frame.classList.add("d-none")
}

//Function that displays the variation frame
function display_variation_menu() {
   london_variation_frame.classList.remove("d-none")

}; 

//Function that hides the carousel frame
function hide_carousel() {
    mainline_carousel.classList.add("d-none")
    indian_setup.classList.add("d-none")
    queen_indian.classList.add("d-none")

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

//Function that changes to the the first carousel
function change_mainline() {
    mainline_carousel.classList.remove("d-none")
    hide_variation_menu()

}

//Function that changes to the the second carousel
function change_indian() {
    indian_setup.classList.remove("d-none")
    hide_variation_menu()

}

//Function that changes to the final carousel
function change_queen() {
    queen_indian.classList.remove("d-none")
    hide_variation_menu()

}
