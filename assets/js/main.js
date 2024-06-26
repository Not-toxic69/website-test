// JavaScript to trigger animation when the page loads
document.addEventListener('DOMContentLoaded', function () {
  // Select all navigation items
  const navItems = document.querySelectorAll('.nav-item')

  // Loop through each item and add a delay to animate them one by one
  navItems.forEach(function (item, index) {
    setTimeout(function () {
      item.classList.add('animate')
    }, index * 100) // Change the delay (in milliseconds) as needed
  })
})

window.addEventListener('scroll', function () {
  const sections = document.querySelectorAll('.section')
  sections.forEach((section, index) => {
    const offset = window.pageYOffset
    const speed = 0.5 // Adjust this value for speed
    if (index % 2 === 0) {
      section.style.transform = `translateX(${offset * speed}px)`
    } else {
      section.style.transform = `translateX(-${offset * speed}px)`
    }
  })
})
