# Moving bento grid demo

This is a simple demo of moving bento grid animation on my [personal site](https://mnsh.me/), countless people have asked the source code so I just open sourced the grid part.



https://github.com/user-attachments/assets/c9288ea7-f886-4348-beba-f021c6e1e65b



## How it works?

Most of the grid heavy lifting is done by [react-grid-layout](https://github.com/react-grid-layout/react-grid-layout), react helps in changing the grid config when clicking on nav buttons and since ```react-grid-layout``` uses transforms, adding css animation to ```react-grid-item``` allows for smooth transitions.

### index.css
```css
.react-grid-item.react-grid-placeholder {
  background: rgba(0, 0, 0, 0.438) none repeat scroll 0% 0%;
  transition-duration: 100ms;
  z-index: 2;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -o-user-select: none;
  user-select: none;
  border-radius: 32px;
  transition: all 500ms ease 0s !important;
  will-change: transform;
}

.react-grid-item {
  transition: visibility 500ms ease 0s;
}
```
### Some gotchas
- You need to import react-grid-layout styles from node_modules in your global CSS.
- I manually wrote the grid configuration for my site for each of the different layouts. There might be a better way to create or generate this configuration.
---

## How to run locally

- Clone/fork the repo: ```git clone https://github.com/manish-basargekar/moving-bento-grid.git```

- Install ```node_modules``` ```npm i```

- Run the vite app ```npm run dev```

---
Star the repository if you liked the demo and Feel free to contribute and suggest improvements

Follow me on [Twitter](https://x.com/madebymanish) for more such cool ui components!
