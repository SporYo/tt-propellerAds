$(function () {

    // Custom JS

    // Player
    const player = document.querySelector('.welcome__video')
    const popup = document.querySelector('.popup');
    const popupForm = document.querySelector('.popup__form');
    // const inputValue = document.querySelector('.input__email').value;

    player.play();
    setTimeout(() => {
        player.pause();
        popup.classList.remove('hidden')
    }, 6000);

    popupForm.addEventListener('submit', (e) => {
        e.preventDefault();
        player.play();
        popup.classList.add('hidden');
        // fetch('url', {
        //     method: 'POST',
        //     body: (inputValue)
        // })
    })

    // Menu Burger
    $(function () {
        $('.menu__icon').on('click', function () {
            $(this).closest('.menu').toggleClass('menu_state_open');
        });
    });

});