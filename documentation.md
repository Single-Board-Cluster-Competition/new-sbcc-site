# Documentation

## Website
You can find the website [here](https://single-board-cluster-competition.github.io/new-sbcc-site/)

## File structure: 
- new-sbcc-site/
    - assets/ 
        - Dall-E.webp
        - favicon.jpg
    - components/ 
        - FAQ.js
        - bench-apps.js
    - css
        - main-page.css
        - history-page.html
        - rules-page.html
        - about-us-page.html
    - documentation.md
    - README.md 
    - main-page.html
    - history-page.html
    - rules-page.html
    - about-us-page.html
    - .gitignore

### Description
- assets: 
This directory is for all the images, video, etc used in the site. 
- components: 
This directory is for all the dynamic (frequently changed) JavaScript components. 
For example, the FAQ or the list of Benchmarks/Applications should be in here.
- css: 
This directory is for all the css files. 
- documentation.md: 
You are currently reading this file. This file documents everything done to this repository in a coherent way. 
- README.md: 
This file provides the introduction to repository. 
- main-page.html: 
This file is for displaying the SBCC home page. 
- history-page.html: 
This file is for displaying the history of SBCC
- rules-page.html: 
This file is for displaying the SBCC rules. 
- about-us-page.html: 
This file is for displaying information about the SBCC committee. 
- .gitignore
This file is for storing all the files that should not be pushed to github publicly. 

## Design Decision Log: 
- The site is built off of the [previous SBCC website](https://github.com/Single-Board-Cluster-Competition/sbcc-site)
- The elements should be maximum 95vw wide so that there is a margin for people use scroll bars and etc
- The home page has every subpage on its navigation bars
- All the sub pages only have a link to the home page and the socials
- All the clickable elements are bouncy because it feels nice


## To Do:
- Responsive Design (make it look good for phones)
- Use JS to fill out FAQ, Bench/Apps
- Use JS fall back that is hidden if JS active. If JS inactive, the HTML will show
- Use a email submission or search bar function
- Fix history page auto jumping to SBCC 2024