const videos = [
  {
    url: "https://vs2.coursehunter.net/wb-bjsnew/lesson1.mp4",
    name: "01. Welcome and Course Methodologies"
  },
  {
    url: "https://vs2.coursehunter.net/wb-bjsnew/lesson2.mp4",
    name: "02. Browser, Editor and Terminal Setup"
  },
  {
    url: "https://vs2.coursehunter.net/wb-bjsnew/lesson3.mp4",
    name: "03. Running and Loading JS"
  },
  {
    url: "https://vs2.coursehunter.net/wb-bjsnew/lesson4.mp4",
    name: "04. Variables and Statements"
  },
  {
    url: "https://vs2.coursehunter.net/wb-bjsnew/lesson5.mp4",
    name: "05. Code Quality Tooling with Prettier and ESLint"
  },
  {
    url: "https://vs2.coursehunter.net/wb-bjsnew/lesson6.mp4",
    name: "06. Types - Introduction"
  },
  {
    url: "https://vs2.coursehunter.net/wb-bjsnew/lesson7.mp4",
    name: "07. Types - Strings"
  },
  {
    url: "https://vs2.coursehunter.net/wb-bjsnew/lesson8.mp4",
    name: "08. Types - Numbers"
  },
  {
    url: "https://vs2.coursehunter.net/wb-bjsnew/lesson9.mp4",
    name: "09. Types - Objects"
  },
  {
    url: "https://vs2.coursehunter.net/wb-bjsnew/lesson10.mp4",
    name: "10. Types - null and undefined"
  },
  {
    url: "https://vs2.coursehunter.net/wb-bjsnew/lesson11.mp4",
    name: "11. Types - Booleans and Equality"
  },
  {
    url: "https://vs2.coursehunter.net/wb-bjsnew/lesson12.mp4",
    name: "12. Functions - Built in"
  },
  {
    url: "https://vs2.coursehunter.net/wb-bjsnew/lesson13.mp4",
    name: "13. Functions - Custom"
  },
  {
    url: "https://vs2.coursehunter.net/wb-bjsnew/lesson14.mp4",
    name: "14. Functions - Parameters and Arguments"
  },
  {
    url: "https://vs2.coursehunter.net/wb-bjsnew/lesson15.mp4",
    name: "15. Different Ways to Declare Functions"
  },
  {
    url: "https://vs2.coursehunter.net/wb-bjsnew/lesson16.mp4",
    name: "16. Debugging Tools"
  },
  {
    url: "https://vs2.coursehunter.net/wb-bjsnew/lesson17.mp4",
    name: "17. Scope"
  },
  {
    url: "https://vs2.coursehunter.net/wb-bjsnew/lesson18.mp4",
    name: "18. Hoisting"
  },
  {
    url: "https://vs2.coursehunter.net/wb-bjsnew/lesson19.mp4",
    name: "19. Closures"
  },
  {
    url: "https://vs2.coursehunter.net/wb-bjsnew/lesson20.mp4",
    name: "20. The DOM - Introduction to the document"
  },
  {
    url: "https://vs2.coursehunter.net/wb-bjsnew/lesson21.mp4",
    name: "21. The DOM - Selecting Elements"
  },
  {
    url: "https://vs2.coursehunter.net/wb-bjsnew/lesson22.mp4",
    name: "22. The DOM - Element Properties and Methods"
  },
  {
    url: "https://vs2.coursehunter.net/wb-bjsnew/lesson23.mp4",
    name: "23. The DOM - Working with Classes"
  },
  {
    url: "https://vs2.coursehunter.net/wb-bjsnew/lesson24.mp4",
    name: "24. The DOM - Build in and Custom Data Attributes"
  },
  {
    url: "https://vs2.coursehunter.net/wb-bjsnew/lesson25.mp4",
    name: "25. The DOM - Creating HTML"
  },
  {
    url: "https://vs2.coursehunter.net/wb-bjsnew/lesson26.mp4",
    name: "26. The DOM - HTML from Strings and XSS"
  },
  {
    url: "https://vs2.coursehunter.net/wb-bjsnew/lesson27.mp4",
    name: "27. The DOM - Traversing and Removing Nodes"
  },
  {
    url: "https://vs2.coursehunter.net/wb-bjsnew/lesson28.mp4",
    name: "28. The DOM - CARDIO"
  },
  {
    url: "https://vs2.coursehunter.net/wb-bjsnew/lesson29.mp4",
    name: "29. Events - Event Listener"
  },
  {
    url: "https://vs2.coursehunter.net/wb-bjsnew/lesson30.mp4",
    name: "30. Events - targets, bubbling, propagation and capture"
  },
  {
    url: "https://vs2.coursehunter.net/wb-bjsnew/lesson31.mp4",
    name: "31. Events - Prevent Default and Form Events"
  },
  {
    url: "https://vs2.coursehunter.net/wb-bjsnew/lesson32.mp4",
    name: "32. Events - Accesibility Gotchas and Keyboard Codes"
  },
  {
    url: "https://vs2.coursehunter.net/wb-bjsnew/lesson33.mp4",
    name: "33. Etch-a-Sketch"
  },
  {
    url: "https://vs2.coursehunter.net/wb-bjsnew/lesson34.mp4",
    name: "34. Click Outside Modal"
  },
  {
    url: "https://vs2.coursehunter.net/wb-bjsnew/lesson35.mp4",
    name: "35. Scroll Events and Intersection Observer"
  },
  {
    url: "https://vs2.coursehunter.net/wb-bjsnew/lesson36.mp4",
    name: "36. Tabs"
  },
  {
    url: "https://vs2.coursehunter.net/wb-bjsnew/lesson37.mp4",
    name: "37. BEDMAS"
  },
  {
    url: "https://vs2.coursehunter.net/wb-bjsnew/lesson38.mp4",
    name: "38. Flow Control - If Statements, Function Returns, Truthy, Falsy"
  },
  {
    url: "https://vs2.coursehunter.net/wb-bjsnew/lesson39.mp4",
    name: "39. Coercion, Ternaries and Conditional Abuse"
  },
  {
    url: "https://vs2.coursehunter.net/wb-bjsnew/lesson40.mp4",
    name: "40. Case Switch and Animating a Turtle with CSS Variables"
  },
  {
    url: "https://vs2.coursehunter.net/wb-bjsnew/lesson41.mp4",
    name: "41. Intervals and Timers"
  },
  {
    url: "https://vs2.coursehunter.net/wb-bjsnew/lesson42.mp4",
    name: "42. Objects"
  },
  {
    url: "https://vs2.coursehunter.net/wb-bjsnew/lesson43.mp4",
    name: "43. Object Reference vs Values"
  },
  {
    url: "https://vs2.coursehunter.net/wb-bjsnew/lesson44.mp4",
    name: "44. Maps"
  },
  {
    url: "https://vs2.coursehunter.net/wb-bjsnew/lesson45.mp4",
    name: "45. Arrays"
  },
  {
    url: "https://vs2.coursehunter.net/wb-bjsnew/lesson46.mp4",
    name: "46. Array Cardio - Static Methods"
  },
  {
    url: "https://vs2.coursehunter.net/wb-bjsnew/lesson47.mp4",
    name: "47. Array Cardio - Instance Methods"
  },
  {
    url: "https://vs2.coursehunter.net/wb-bjsnew/lesson48.mp4",
    name: "48. Array Cardio - Callback Methods and Function Generation"
  },
  {
    url: "https://vs2.coursehunter.net/wb-bjsnew/lesson49.mp4",
    name: "49. Looping and Iterating - Array .forEach"
  },
  {
    url: "https://vs2.coursehunter.net/wb-bjsnew/lesson50.mp4",
    name: "50. Looping and Iterating - Mapping"
  },
  {
    url: "https://vs2.coursehunter.net/wb-bjsnew/lesson51.mp4",
    name: "51. Looping and Iterating - Filter, Find and Higher Order Functions"
  },
  {
    url: "https://vs2.coursehunter.net/wb-bjsnew/lesson52.mp4",
    name: "52. Looping and Iterating - Reduce"
  },
  {
    url: "https://vs2.coursehunter.net/wb-bjsnew/lesson53.mp4",
    name: "53. Looping and Iterating - Reduce Exercise"
  },
  {
    url: "https://vs2.coursehunter.net/wb-bjsnew/lesson54.mp4",
    name: "54. Looping and Iterating - for, for in, for of and while Loops"
  },
  {
    url: "https://vs2.coursehunter.net/wb-bjsnew/lesson55.mp4",
    name: "55. Face Detection and Censorship"
  },
  {
    url: "https://vs2.coursehunter.net/wb-bjsnew/lesson56.mp4",
    name: "56. Sarcastic Text Generator"
  },
  {
    url: "https://vs2.coursehunter.net/wb-bjsnew/lesson57.mp4",
    name: "57. Shopping Form with Custom Events, Delegation and localstorage"
  },
  {
    url: "https://vs2.coursehunter.net/wb-bjsnew/lesson58.mp4",
    name: "58. Building a Gallery Exercise"
  },
  {
    url: "https://vs2.coursehunter.net/wb-bjsnew/lesson59.mp4",
    name: "59. Building a Slider"
  },
  {
    url: "https://vs2.coursehunter.net/wb-bjsnew/lesson60.mp4",
    name: "60. The New Keyword"
  },
  {
    url: "https://vs2.coursehunter.net/wb-bjsnew/lesson61.mp4",
    name: "61. The this Keyword"
  },
  {
    url: "https://vs2.coursehunter.net/wb-bjsnew/lesson62.mp4",
    name: "62. Prototype Refactor of the Gallery Exercise"
  },
  {
    url: "https://vs2.coursehunter.net/wb-bjsnew/lesson63.mp4",
    name: "63. Prototypes and Prototypal Inheritance"
  },
  {
    url: "https://vs2.coursehunter.net/wb-bjsnew/lesson64.mp4",
    name: "64. Prototype Refactor of the Slider Exercise"
  },
  {
    url: "https://vs2.coursehunter.net/wb-bjsnew/lesson65.mp4",
    name: "65. bind, call and apply"
  },
  {
    url: "https://vs2.coursehunter.net/wb-bjsnew/lesson66.mp4",
    name: "66. The Event Loop and Callback Hell"
  },
  {
    url: "https://vs2.coursehunter.net/wb-bjsnew/lesson67.mp4",
    name: "67. Promises"
  },
  {
    url: "https://vs2.coursehunter.net/wb-bjsnew/lesson68.mp4",
    name: "68. Promises - Error Handling"
  },
  {
    url: "https://vs2.coursehunter.net/wb-bjsnew/lesson69.mp4",
    name: "69. Refactoring Callback Hell to Promise Land"
  },
  {
    url: "https://vs2.coursehunter.net/wb-bjsnew/lesson70.mp4",
    name: "70. Async Await"
  },
  {
    url: "https://vs2.coursehunter.net/wb-bjsnew/lesson71.mp4",
    name: "71. Async Await Error Handling"
  },
  {
    url: "https://vs2.coursehunter.net/wb-bjsnew/lesson72.mp4",
    name: "72. Async Await Prompt UI"
  },
  {
    url: "https://vs2.coursehunter.net/wb-bjsnew/lesson73.mp4",
    name: "73. Async Typer UI - two ways"
  },
  {
    url: "https://vs2.coursehunter.net/wb-bjsnew/lesson74.mp4",
    name: "74. Ajax and APIs"
  },
  {
    url: "https://vs2.coursehunter.net/wb-bjsnew/lesson75.mp4",
    name: "75. CORS and Recipes"
  },
  {
    url: "https://vs2.coursehunter.net/wb-bjsnew/lesson76.mp4",
    name: "76. Dad Jokes"
  },
  {
    url: "https://vs2.coursehunter.net/wb-bjsnew/lesson77.mp4",
    name: "77. Currency Converter"
  },
  {
    url: "https://vs2.coursehunter.net/wb-bjsnew/lesson78.mp4",
    name: "78. Modules"
  },
  {
    url: "https://vs2.coursehunter.net/wb-bjsnew/lesson79.mp4",
    name: "79. Currency Modules Refactor"
  },
  {
    url: "https://vs2.coursehunter.net/wb-bjsnew/lesson80.mp4",
    name: "80. Dad Jokes Modules Refactor"
  },
  {
    url: "https://vs2.coursehunter.net/wb-bjsnew/lesson81.mp4",
    name: "81. Bundling and Building with Parcel"
  },
  {
    url: "https://vs2.coursehunter.net/wb-bjsnew/lesson82.mp4",
    name: "82. using open source npm packages"
  },
  {
    url: "https://vs2.coursehunter.net/wb-bjsnew/lesson83.mp4",
    name: "83. Security"
  },
  {
    url: "https://vs2.coursehunter.net/wb-bjsnew/lesson84.mp4",
    name: "84. Web Speech Colours Game"
  },
  {
    url: "https://vs2.coursehunter.net/wb-bjsnew/lesson85.mp4",
    name: "85. Audio Visualization"
  }
];

module.exports = videos;
