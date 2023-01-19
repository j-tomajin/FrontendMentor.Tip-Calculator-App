# Frontend Mentor - Tip calculator app solution

This is a solution to the [Tip calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/tip-calculator-app-ugJNGbJUX). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Calculate the correct tip and total cost of the bill per person

### Screenshot

[My Solution](./design/Solution.png)

### Links

- [Solution Repository](https://github.com/j-tomajin/FrontendMentor.Tip-Calculator-App.git)
- [Live site](https://jpt-tip-calculator-app.netlify.app)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- SASS/SCSS

### What I learned

What I learned in this project is you can add a function inside a event listener, I always use the const function thingy with the => function. (there's is nothing wrong with the =>  function, I just find this a way cleaner method to write your code). And I also learn how to pass the active state (in a cleaner way). Before I just use a straight forEach loop, but here I used a function

```js
const percent = document.querySelectorAll('.bill__label')

percent.forEach(function(val) {
    val.addEventListener('click', activeFun) //<- HERE
})

function activeFun(event) {
    percent.forEach(function(val) {
        val.classList.remove('active-label')
        custom.value = ''

        if(event.target.innerText == val.innerText) {
            val.classList.add('active-label')
            tipVal = parseFloat(val.innerText)/100
        }
    })
    calculateTip()
}

// My before passing active state function
percent.ForEach(tip => {
  tip.addEventListener('click', () => {
    percent.forEach(p => p.classList.remove('active-label'))

    this.classList.add('active-label')
  })
})
```

### Continued development

I still find JavaScript difficult. So I think I will focus more on JS and watch and read a bunch of stuff about how to write JS more easier.

### Useful resources

- [How to calculate a tip](https://www.youtube.com/watch?v=jIv-tYfE11s) - This helped me how to calculate tip/s and how to split it. The video I watched has a wrong calculation on tips so I watched another.
- [Frontend Mentor Tip Calculator](https://www.youtube.com/watch?v=etYv-pPfol4) - This is a video of someone doing this challenge. I know how to solve and to do this challenge but I don't know how to approach it so I watched this.

## Author

- Github - [j-tomajin](https://github.com/j-tomajin)
- Frontend Mentor - [@AsukalDePapa](https://www.frontendmentor.io/profile/AsukalDePapa)

## Acknowledgments

Thanks to [CodeAgam](https://www.youtube.com/watch?v=etYv-pPfol4)'s video I finished this project. Also thanks to him I learned something new.