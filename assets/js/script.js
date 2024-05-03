(function() {
  const interval = 5000,
    sliderWrapper = document.querySelector('[data-slider="carousel-inner"]'),
    slides = document.querySelectorAll('[data-slider="carousel-items"]')
  let index = 0
  
  // set default
  slides.forEach(function(item, i){
    item.style.width = `${sliderWrapper.clientWidth}px`
    item.style.opacity = 0
    item.style.transitionDuration = '0ms'
    item.style.transform = `translate3d(${i * sliderWrapper.clientWidth }px, 0, 0)`
  })

  slides[index].style.opacity = 1
  slides[index].children[0].classList.add('zoom-effect--active')
  
  function slideTo(idx) {
    
    sliderWrapper.classList.add("slider-moved")
    slides.forEach(function(item){
      item.style.transitionDuration = '500ms'
    })
    setTimeout(function(){
      sliderWrapper.classList.remove("slider-moved")
      slides.forEach(function(item){
        item.style.transitionDuration = '0ms'
      })
    }, 500)

    // clear all effect
    slides[index].style.opacity = 0
    slides[index].children[0].classList.remove('zoom-effect--active')
    
    // then set up effect
    slides[idx].style.opacity = 1
    slides[idx].children[0].classList.add('zoom-effect--active')

    index = idx
  }

  function nextItem() {
    let newIndex = index + 1
    if(index === slides.length - 1) {
      newIndex = 0
      slideTo(newIndex)
    }
    slideTo(newIndex)
  }

  let timeOut = setInterval(nextItem, interval)
})()