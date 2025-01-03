document.querySelectorAll('input[name="slider"]').forEach((radio) => {
    radio.addEventListener('change', () => {
        document.body.classList.toggle('blue');
    });
});
