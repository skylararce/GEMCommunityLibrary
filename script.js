// Code for nav bar and filtering books based on genre was inspired by code from W3 Schools

//	This is code for the nav bar

const navToggle = document.querySelector('#navToggle');
const nav = document.querySelector('nav');
const navIcon = document.querySelectorAll('.navIcon');
const hamburgernav = document.querySelector('#shortened-nav');

navToggle.addEventListener("click", () => {
  nav.classList.toggle('open')
  navIcon.forEach(icon => {
    icon.classList.toggle('hidden');
  });
});

window.addEventListener("resize", () => {
if(document.body.clientWidth > 845) {
  nav.classList.remove('open');
  navIcon.forEach(icon => {
    icon.classList.add('hidden')
  });
  hamburgernav.classList.remove('hidden');
}
});

filterSelection("all")
function filterSelection(genre) {
  var allBooks;
  allBooks = document.getElementsByClassName("filterBook");
  if (genre == "all") genre = "";
  for (let i = 0; i < allBooks.length; i++) {
    showBook(allBooks[i], "show");
    if (allBooks[i].className.indexOf(genre) > -1) hideBook(allBooks[i], "show");
  }
}

function hideBook(element, className) {
  var arr1; //, arr2;
  arr1 = element.className.split(" ");
  //arr2 = name.split(" ");
  //for (let i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(className) == -1) {element.className += " " + className;}
  //}
}

function showBook(element, className) {
  var arr1; //, arr2;
  arr1 = element.className.split(" ");
  //arr2 = name.split(" ");
  //for (let i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(className) > -1) {
      arr1.splice(arr1.indexOf(className), 1);     
    }
  //}
  element.className = arr1.join(" ");
}

// Add active class to the current button (highlight it)
var genreContainer = document.getElementById("genreContainer");
var genrebtns = genreContainer.getElementsByClassName("genrebtn");
for (let i = 0; i < genrebtns.length; i++) {
  genrebtns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active");
    current[0].classList.remove("active");
    this.classList.add("active");
  });
}

reserveButton.addEventListener('click', ()=>{
  const form = document.getElementById('form1');
   if (form.style.display === 'none') {
    reserveButton.innerText = "Close";
    form.style.display = 'block';
  } else {
    reserveButton.innerText = "Reserve";
    form.style.display = 'none';
  }
});

/*const navToggle = document.querySelector('#navToggle');
const nav = document.querySelector('nav');
const navIcon = document.querySelectorAll('.navIcon');
const hamburgernav = document.querySelector('#shortened-nav');

navToggle.addEventListener("click", () => {
  nav.classList.toggle('open')
  navIcon.forEach(icon => {
    icon.classList.toggle('hidden');
  });
});

window.addEventListener("resize", () => {
if(document.body.clientWidth > 845) {
  nav.classList.remove('open');
  navIcon.forEach(icon => {
    icon.classList.add('hidden')
  });
  hamburgernav.classList.remove('hidden');
}
});


filterSelection("all")
function filterSelection(genre) {
  var allBooks;
  allBooks = document.getElementsByClassName("filterBook");
  if (genre == "all") genre = "";
  for (let i = 0; i < allBooks.length; i++) {
    showBook(allBooks[i], "show");
    if (allBooks[i].className.indexOf(genre) > -1) hideBook(allBooks[i], "show");
  }
}

function hideBook(element, className) {
  var arr1; //, arr2;
  arr1 = element.className.split(" ");
  //arr2 = name.split(" ");
  //for (let i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(className) == -1) {element.className += " " + className;}
  //}
}

function showBook(element, className) {
  var arr1; //, arr2;
  arr1 = element.className.split(" ");
  //arr2 = name.split(" ");
  //for (let i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(className) > -1) {
      arr1.splice(arr1.indexOf(className), 1);     
    }
  //}
  element.className = arr1.join(" ");
}

// Add active class to the current button (highlight it)
var genreContainer = document.getElementById("genreContainer");
var genrebtns = genreContainer.getElementsByClassName("genrebtn");
for (let i = 0; i < genrebtns.length; i++) {
  genrebtns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active");
    current[0].classList.remove("active");
    this.classList.add("active");
  });
}



/*filterSelection("all")
function filterSelection(currentGenre) {
  var allBooks;
  allBooks = document.getElementsByClassName("filterBook");
  //if (allBooks == "all") a == "";
  //get all elements with class filterBook 
  //look through all elements with class filterBook
  //if any elements contains currentGenre, add class showBook to the element 
  //to all elements that do not contain currentGenre add class hideBook
  
  //if element is to be shown, check to see if it has the hideBook class if it does remove hideBook class before adding in showBook class
  //if an element is to be hidden, check to see if it has the showBook class, if it does remove the showBook class before adding in the removeBook class
  for (let i = 0; i < allBooks.length; i++) {
    bookRemoveClass(allBooks[i], "show");
    if(allBooks[i].classList.indexOf(currentGenre) > -1)    bookAddClass(allBooks[i], currentGenre);
  }
}

function bookAddClass(element, currentGenre) {
  //var i, x, y;
  let elementClassList = element.classList;
  if (elementClassList.contains(currentGenre)) {
    element.classList.add("show");
  }
  //y = name.split(" ");
  //for (i = 0; i < y.length; i++) {
   // if (x.indexOf(y[i]) == -1) {element.className += " " + y[i];}
  //}
}

function bookRemoveClass(element) {
  //var i, x, y;
  element.classList.remove("show");
  element.classList.add("hidden");
  //y = name.split(" ");
  //for (i = 0; i < y.length; i++) {
   // while (x.indexOf(y[i]) > -1) {
     // x.splice(x.indexOf(y[i]), 1);     
    //}
  //}
  //element.className = x.join(" ");
}

var genreContainer = document.getElementById("genreContainer");
var genrebtns = genreContainer.getElementsByClassName("genrebtn");
for (var i = 0; i < genrebtns.length; i++) {
  genrebtns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}*/



