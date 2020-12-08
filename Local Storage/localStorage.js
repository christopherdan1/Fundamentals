myStorage = window.localStorage;

//Exceptions SecurityError
//Items are set as key value pairs
//setItem | getItem


//You bought a new cat and named him Tom
localStorage.setItem('myCat', 'Tom');

//You call for Tom
const cat = localStorage.getItem('myCat');

//Tom dies... or leaves
localStorage.removeItem('myCat');

localStorage.clear();




