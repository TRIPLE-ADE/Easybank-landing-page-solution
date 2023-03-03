# Frontend Mentor - Easybank landing page solution

This is a solution to the [Easybank landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/easybank-landing-page-WaUhkoDN). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

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

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshot

![](./screenshot.jpg)


### Links

- Solution URL: [Add solution URL here](https://github.com/TRIPLE-ADE/Easybank-landing-page-solution)
- Live Site URL: [Add live site URL here](https://easybanking-page.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [Tailwind CSS](https://tailwindcss.com/docs/) - For styles


### What I learned

Use this section to recap over some of your major learnings while working through this project. Writing these out and providing code samples of areas you want to highlight is a great way to reinforce your own knowledge.

To see how you can add code snippets, see below:

```html
<h1>Some HTML code I'm proud of</h1>
```
```css

.btn{
    @apply py-3 text-sm text-primary-White bg-gradient-to-r from-primary-Lime-Green via-primary-Lime-Green to-primary-Bright-cyan rounded-3xl px-7;
}
.flex-container{
    @apply flex flex-col items-center gap-2 text-center sm:flex-row-reverse sm:items-start;
}
.bg-image{
    @apply grid grid-cols-1;
}
.cards{
    @apply grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-5;
}
.card-content{
    @apply flex flex-col gap-5 overflow-hidden rounded-md sm:items-start;
}
.card-header{
    @apply text-2xl;
}
@layer base{
    footer{
        @apply gap-10 sm:grid sm:grid-cols-4;
    }
}
```
```js
const hamburger = document.querySelector('.hamburger')
const closeMenu = document.querySelector('.close')
const nav = document.querySelector('nav')

hamburger.addEventListener('click', function(){
    hamburger.classList.add('hidden')
    closeMenu.classList.remove('hidden')
    nav.classList.remove('hidden')

})

closeMenu.addEventListener('click', function(){
    hamburger.classList.remove('hidden')
    closeMenu.classList.add('hidden')
    nav.classList.add('hidden')
})
```

If you want more help with writing markdown, we'd recommend checking out [The Markdown Guide](https://www.markdownguide.org/) to learn more.


### Continued development

Use this section to outline areas that you want to continue focusing on in future projects. These could be concepts you're still not completely comfortable with or techniques you found useful that you want to refine and perfect.

- Tailwind clean code
- css grid layout
- JavaScript
- mobile work flow

### Useful resources

- [Tailwind Documentation](https://tailwindcss.com/docs/) - This helped me in tailwind setup and installation. I really liked this pattern and will use it going forward.
- [Tailwind cheat sheet](https://nerdcave.com/tailwind-cheat-sheet) -  This helped me to have better understanding of Tailwind classes. I really liked this pattern and will use it going forward.

## Author

- Website - [TripleA](https://easybanking-page.netlify.app/)
- Frontend Mentor - [@TRIPLE-ADE](https://www.frontendmentor.io/profile/TRIPLE-ADE)
- Twitter - [@Triple123A](https://www.twitter.com/Triple123A)