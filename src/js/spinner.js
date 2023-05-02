var showSpinner = function () {
    $('#spinner').fadeIn();
    $('#blackscreen').fadeIn();
}
var hideSpinner = function () {
    $('#spinner').fadeOut();
    $('#blackscreen').fadeOut(300);
}

export {
    hideSpinner,
    showSpinner
}