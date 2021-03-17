# User Search - JSON DB

Project where the user type a name and the app filters on the database the users who matches the string name. It returns the users, the gender, the sum of ages, and the average age of the filtered ones.

![alt tag](https://i.imgur.com/cjccNtr.gif)

## How It's Made:

**Tech used:** HTML, CSS, JavaScript, Node.JS

I focused on the creation of custom functions to handle the user interaction between events. As soon as the DOMContent was loaded, I initialize a async/await fetch to load all the user data from the backend (hosted locally), and from there filtering the key-values pairs that was interesting for the purpose of the project. After that was much more about DOM manipulation to render that information obtained dinamically.

## Optimizations

Definitely change the programming paradigm to work with OOP. The app needs seriously a cleaner version that makes more approachable and easier to read.

## Lessons Learned:

I'm happy that I made it work. I learned more about functional paradigm and the events working with backend, and how to manipulate that data. I should definitely keep an eye out for techniques, that could make my work more scalable and optimized.
