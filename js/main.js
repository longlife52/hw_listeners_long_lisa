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
