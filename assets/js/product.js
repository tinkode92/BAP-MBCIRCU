/** @type {HTMLIFrameElement} */
const bigPicture = document.querySelector('.big-picture')

document.querySelectorAll('.small-pictures img').forEach(/** @param {HTMLImageElement} img */ img => {
    img.addEventListener('click', () => {
        const newImgSrc = img.src;
        img.src = bigPicture.style.backgroundImage.split('("')[1].split('")')[0];
        bigPicture.style = "background-image: url(" + newImgSrc + ");";
    });
});

bigPicture.addEventListener('mousemove', (e) => {
    e.offsetX ? offsetX = e.offsetX : offsetX = e.touches[0].pageX
    e.offsetY ? offsetY = e.offsetY : offsetX = e.touches[0].pageX
    x = offsetX / bigPicture.offsetWidth * 100
    y = offsetY / bigPicture.offsetHeight * 100
    bigPicture.style.backgroundPosition = x + '% ' + y + '%';
});

bigPicture.addEventListener('mouseout', (e) => {
    bigPicture.style.backgroundPosition = "center";
});