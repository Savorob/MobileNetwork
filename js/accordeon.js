const headers = document.querySelectorAll ('[data-name = "accordeon-title"]');

headers.forEach (function (item) {
    item.addEventListener('click', function showContent() {
        this.nextElementSibling.classList.toggle('hidden');
    })
});
