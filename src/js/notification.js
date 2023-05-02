function sendNotification(type, text) {
    const alerts = {
        error: {
            icon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>`,
            color: "#B22222"
        },
        success: {
            icon: `<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>`,
            color: "#008000"
        }
    };
    $('#notification').css('background-color', alerts[type].color);
    $('.notification_icon').html(alerts[type].icon);
    $('.notification_text').html(text);

    $('#notification').animate({
        'left': '10px',
        'opacity': 1
    }, 200, 'swing');
    setTimeout(() => {
        $('#notification').animate({ 'bottom': '-100px', 'opacity': 0 },
            {
                duration: 200,
                easing: 'swing',
                complete: () => {
                    $('#notification').removeAttr('style');
                }
            }
        );
    }, 4000);
}

export { sendNotification }