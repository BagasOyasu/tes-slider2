let currentIndex = {
    slider1: 0,
    slider2: 0
};

function moveSlider(direction, sliderId) {
    const slider = document.getElementById(sliderId);
    const track = slider.querySelector('.slider-track');
    const totalImages = track.children.length;

    currentIndex[sliderId] += direction;

    if (currentIndex[sliderId] < 0) {
        currentIndex[sliderId] = totalImages - 1;
    } else if (currentIndex[sliderId] >= totalImages) {
        currentIndex[sliderId] = 0;
    }

    track.style.transform = `translateX(-${currentIndex[sliderId] * 100}%)`;
}

function goToLink(url) {
    window.location.href = url;
}
