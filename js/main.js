//changeCircle mouseover
//listen for  mouseover on changeCircle
//change color from red to light blue
var changeCircle = document.getElementById('changeCircle');

changeCircle.addEventListener('mouseover', function () {
    changeCircle.style.backgroundColor = '#caebf2';
});

//doubleClickEffect
//listen for a double click
//when double click, change rectangle from solid to transparent
var doubleClickEffect = document.getElementById('doubleClickEffect');

doubleClickEffect.addEventListener('dblclick', function () {
    doubleClickEffect.style.background = 'rgba(169, 169, 169, 0.2)';
});

//addText effect
//listen for mouse moving away from circle 3
//when mouseleave, add text
var addText = document.getElementById('addText');

addText.addEventListener('mouseleave', function () {
    var newText = document.createElement('newText');
    newText.innerHTML = '<p>Made it through this assignment!</p>';
    document.getElementById('addText').appendChild(newText);
});
