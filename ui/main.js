console.log('Loaded!');

//Change the text of the main-text dev
var element = document.getElementById('main-text');

element.innerHTML = 'Ankit Sharma';

//Move the image
var img = document.getElementById('madi');
var marginLeft = 0;
function moveRight () {
    marginLeft = marginLeft + 10;
    img.style.marginLeft = marginLeft + 'px';
}
img.onclick = function () {
    var interval = setInterval(moveRight, 100);
};