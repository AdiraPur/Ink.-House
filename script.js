document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.country');
    const galleries = document.querySelectorAll('.pictures');

    function filterGalleries(country) {
        galleries.forEach(gallery => {
            gallery.style.display = gallery.dataset.country === country ? 'flex' : 'none';
        });
    }

    filterGalleries('Франция');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            buttons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            filterGalleries(button.dataset.filter);
        });
    });
});