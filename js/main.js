//h1click listener

var headerClick = document.getElementById('h1click');
var clicks = 0;

headerClick.addEventListener('click', function () {
    var newParagraph = document.createElement('newParagraph');
    console.log(++clicks);
    newParagraph.innerHTML = '<p>This is click number </p>' + clicks;
    document.getElementById('h1click').appendChild(newParagraph);
});
