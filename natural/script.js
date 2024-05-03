(function() {
  const interval = 5000;
  const wrapper = document.querySelector('[data-slider="carousel-wrapper"]');
  const items = document.querySelectorAll('[data-slider="carousel-items"]');
  let index = 0;
  
  // default before slide function is running
  items.forEach((item, idx) => {
    item.style.opacity = 0
    item.style.transitionDuration = "0ms"
    item.style.transform = `translateX(-${idx * 100}%)`
  })

  items[0].style.opacity = 1
  items[0].style.transitionDuration = "0ms"
  items[0].children[0].classList.add('zoom-effect--active')

  function toSlide(i) {
    items.forEach((item, idx) => {
      item.style.transitionDuration = "500ms"
    })

    setTimeout(() => {
      items.forEach((item) => {
        item.style.transitionDuration = "0ms"
      })
    }, 500)

    // clear all effect
    items[index].style.opacity = 0
    items[index].children[0].classList.remove('zoom-effect--active')
    
    // then set up effect
    items[i].style.opacity = 1
    items[i].children[0].classList.add('zoom-effect--active')

    index = i
  }

  function nextItem() {
    let newIndex = index === items.length - 1 ? 0 : index + 1
    
    toSlide(newIndex)
  }

  setInterval(nextItem, interval)
})()