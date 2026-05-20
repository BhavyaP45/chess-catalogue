function scrollTrigger(selector, animation_type){
  /*Select the elements that have the specific selector*/
    let els = document.querySelectorAll(selector)
    els = Array.from(els)
    els.forEach(el => {
      //Input the animation type, so that this function can be reused.
      addObserver(el, animation_type)
    })
  }
  function addObserver(el, animation_type){
      // A new IntersectionObserver instance that will observe if the element is in view.
      let observer = new IntersectionObserver((entries, observer) => { // This takes a callback function that receives two arguments: the elements list and the observer instance.
        entries.forEach(entry => {
          // entry.isIntersecting will be true if the element is visible
        if(entry.isIntersecting) {
          entry.target.classList.remove("invisible")
          entry.target.classList.add(animation_type)
          // Removing the observer from the element after adding the active class
          observer.unobserve(entry.target)
        }
      })
    })
    // Adding the observer to the element
    observer.observe(el)
  }
  // Use the function for all the elements with the fade_right class. 
  scrollTrigger('.fade_right', "animate__fadeInRight")
  scrollTrigger('.fade_down', "animate__fadeInDown")
  scrollTrigger(".fade_left", "animate__fadeInLeft")