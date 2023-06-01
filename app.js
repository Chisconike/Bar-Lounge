const firstNav = document.querySelector('li')
firstNav.classList.add('text');


function dropDown() {

    let dropDownMenu = document.getElementById('click')
    if (dropDownMenu.className === 'topnav') {
        dropDownMenu.className += ' responsive';
    } else {
        dropDownMenu.className = 'topnav';
    }

}

const span = document.querySelector('span')
span.classList.add('color');
const h2 = document.querySelector('h2');
h2.classList.add('color')