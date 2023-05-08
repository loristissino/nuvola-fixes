// author: Loris Tissino - loris.tissino@gmail.com
// MIT Licence

const className = getSelection().getRangeAt(0).commonAncestorContainer.parentNode.classList[1];
 
document.querySelectorAll('.' + className).forEach(function(x){
    x.style.color = "white";
    x.style['background-color'] = "red";
});
