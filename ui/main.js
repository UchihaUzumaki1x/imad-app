console.log('Loaded!');

//Change the text of the main-text dev
var element = document.getElementById('main-text');

element.innerHTML = 'Ankit Sharma';

//Move the image
var img = document.getElementById('madi');
img.onclick = function () {
    img.style.marginLeft = '100px';
};