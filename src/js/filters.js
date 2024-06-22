export function filters() {
    const filterOpen = document.querySelector("[data-filterOpen]");
    const filterContent = document.querySelector("[data-filterContent]");

    filterOpen.addEventListener('click', function () {
        if (filterContent.style.display === 'none') {
            filterContent.style.display = 'block';
        } else {
            filterContent.style.display = 'none';
        }
    });
}