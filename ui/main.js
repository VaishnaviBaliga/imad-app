console.log('Loaded!');

//change text

var element = document.getElementById('main-text');
element.innerHTML = 'new value';

//move image
var img = document.getElementById('madi');
img.onclick = function ()
{
    img.style.marginLeft = '100px';
};