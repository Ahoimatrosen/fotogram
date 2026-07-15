const fotogramImagesArray = [
    "cat.jpg",
    "corgi.jpg",
    "beach.jpg",
    "dog.jpg",
    "forest.jpg",
    "flower.jpg",
    "mushroom.jpg",
    "owl.jpg",
    "rocks_and_desert.jpg",
    "elephant.jpg",
    "leopards.jpg",
    "bird.jpg",
];
const fotogramAltArray = [
    "A cat looking into the camera",
    "A corgi looking into the camera",
    "A beach with Hat and flip-flops",
    "A dog on white background",
    "A road in a forest",
    "A purple flower",
    "A fly agaric",
    "An owl on a tree",
    "Rocks in a desert",
    "An elephant in a forest",
    "Two baby leopards",
    "A bird on a branch",
];
const fotogramTitleArray = [
    "Cat",
    "Corgi",
    "Beach",
    "Dog",
    "Forest",
    "Flower",
    "Mushroom",
    "Owl",
    "Rocks_and_desert",
    "Elephant",
    "Leopards",
    "Bird",
];
const fotogramMainRef = document.getElementById("fotoContainer");
const fotogramDialogRef = document.getElementById("fotogramDialog");
const fotogramDialogImgRef = document.getElementById("fotogramDialogImg");
const fotogramDialogTitle = document.getElementById("fotogramTitle");
const fotogramDialogFooter = document.getElementById("fotogramDialogFooter");

function renderImages() {
    let getImgs = "";
    for (let index = 0; index < fotogramImagesArray.length; index++) {
        getImgs += renderImagesTemplate(index);
    }
    fotogramMainRef.innerHTML = getImgs;
}

function openFotogram(index) {
    fotogramDialogRef.showModal();
    showFotogramImage(index);
    showFotogramTitle(index);
    currentImageCounter(index);
}

function openFotogramOnKeyDown(index) {
    if (event.key === "Enter") {
        openFotogram(index);
    }
}

function showFotogramImage(index) {
    let getImgs = "";
    getImgs = showFotogramImageTemplate(index);
    fotogramDialogImgRef.innerHTML = getImgs;
}

function showFotogramTitle(index) {
    let getTitle = "";
    getTitle = `${fotogramTitleArray[index]}`;
    fotogramDialogTitle.innerHTML = getTitle;
}

function currentImageCounter(index) {
    let counter = "";
    counter = currentImageCounterTemplate(index);
    fotogramDialogFooter.innerHTML = counter;
}

function closeFotogram() {
    fotogramDialogRef.close();
}

function closeFotogramOnKeyDown() {
    if (event.key === "Enter") {
        closeFotogram();
    }
}

function bubblingProtection(event) {
    event.stopPropagation();
}

function nextImage(index) {
    index++;
    if (index === fotogramImagesArray.length) {
        index = 0;
    }
    openFotogram(index);
}

function nextImageOnKeyDown(index) {
    if (event.key === "Enter") {
        nextImage(index);
        const fotogramDialogFooterNextImageButton = document.getElementById("nextImageButton");
        fotogramDialogFooterNextImageButton.focus();
    }
}

function previousImage(index) {
    index--;
    if (index === -1) {
        index = fotogramImagesArray.length - 1;
    }
    openFotogram(index);
}

function previousImageOnKeyDown(index) {
    if (event.key === "Enter") {
        previousImage(index);
        const fotogramDialogFooterPreviousImageButton = document.getElementById("previousImageButton");
        fotogramDialogFooterPreviousImageButton.focus();
    }
}

function renderImagesTemplate(index) {
    return `<img tabindex="0" onkeydown="openFotogramOnKeyDown(${index})" onclick="openFotogram(${index})" src="./assets/img/${fotogramImagesArray[index]}" alt="${fotogramAltArray[index]}">`;
}

function showFotogramImageTemplate(index) {
    return `<img class="dialog-inner-img" src="./assets/img/${fotogramImagesArray[index]}" alt="${fotogramAltArray[index]}">`;
}

function currentImageCounterTemplate(index) {
    return `<img id="previousImageButton" tabindex="0" onkeydown="previousImageOnKeyDown(${index})" onclick="previousImage(${index})" class="mirrored dialog-footer-button" src="./assets/icon/next-icon.png" alt="previous-button" />
    <p>${index + 1} / 12</p>
    <img id="nextImageButton" tabindex="0" class="dialog-footer-button" onkeydown="nextImageOnKeyDown(${index})" onclick="nextImage(${index})" src="./assets/icon/next-icon.png" alt="next-button" />`;
}
