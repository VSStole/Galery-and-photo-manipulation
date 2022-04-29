
'use strict';

const current = document.getElementById('current');
const slike = document.getElementsByClassName('thumb');
for (let i = 0; i < slike.length; i++) {
    slike[i].addEventListener('click', display);


}

function display() {
    const slike = this.getAttribute('src');
    current.setAttribute('src', slike);
}