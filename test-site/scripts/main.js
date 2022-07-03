let myImage = document.querySelector('img');

myImage.onclick = function() {
  let mySrc = myImage.getAttribute('src');
  if(mySrc === 'images/images.jpg') {
    myImage.setAttribute ('src','images/images3.jpg');
      } else {
    myImage.setAttribute ('src','images/images.jpg');
  }
}
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');
function setUserName() {
  var myName = prompt('Введите свое имя');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Добро пожаловать, ' + myName;
}
if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'COFFEE|HOUSE приветствует вас, ' + storedName + '!';
}
myButton.onclick = function() {
  setUserName();
}
