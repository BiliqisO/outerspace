const closedFace = document.querySelector('.closed');
const openFace = document.querySelector('.open');
const go = document.querySelector('.go');
const bodyF = document.getElementsByTagName('body');

//Add Event Listener
closedFace.addEventListener('click', () => {
    if (openFace.classList.contains('open')) {
        openFace.classList.toggle('active');
        closedFace.classList.remove('active');
    }
});

openFace.addEventListener('click', () => {
    if (closedFace.classList.contains('closed')) {
        closedFace.classList.toggle('active');
        openFace.classList.remove('active');
    }
});
