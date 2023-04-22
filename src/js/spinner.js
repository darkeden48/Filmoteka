const spinner = document.querySelector('#spinner');
const blackscreen = document.querySelector('#blackscreen');

var showSpinner = function () {
    spinner.classList.add('active');
    blackscreen.classList.add('active');
}
var hideSpinner = function () {
    spinner.classList.remove('active');
    blackscreen.classList.remove('active');
}

export {
    hideSpinner,
    showSpinner
}