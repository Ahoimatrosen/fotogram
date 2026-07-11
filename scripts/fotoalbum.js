const FOTOGRAM_IMAGES = [
    "cat.jpg",
    "corgi.jpg",
    "cow.jpg",
    "dog.jpg",
    "dog_and_lake.jpg",
    "flower.jpg",
    "island_on_river.jpg",
    "mountains_and_river.jpg",
    "rocks_and_desert.jpg",
    "sunny_forest.jpg",
];

const FOTOGRAM_ALT = [
    "A cat looking into the camera",
    "A corgi looking into the camera",
    "A cow looking into the camera",
    "A dog on white background",
    "A dog looking into a lake",
    "A purple flower",
    "A small Island on a quiet lake",
    "A river floating through mountain landscape",
    "Rocks in a desert",
    "Sun shining over a forest",
];

let FOTOGRAM_DIALOG_REF = document.getElementById("fotogramDialog");

let FOTOGRAM_DIALOG_IMG_REF = document.getElementById("fotogramDialogImg");

function openFotogram(index) {
    FOTOGRAM_DIALOG_REF.showModal();
    showFotogramImage(index);
}

function showFotogramImage(index) {
    let getImgs = "";
    getImgs = `<img src="./assets/img/${FOTOGRAM_IMAGES[index]}" alt="${FOTOGRAM_ALT[index]}">`;
    FOTOGRAM_DIALOG_IMG_REF.innerHTML = getImgs;
}

function renderImages() {
    let getImgs = "";
    for (let index = 0; index < FOTOGRAM_IMAGES.length; index++) {
        getImgs += `<img onclick="openFotogram(${index})" src="./assets/img/${FOTOGRAM_IMAGES[index]}" alt="${FOTOGRAM_ALT[index]}">`;
    }
    fotoContainer.innerHTML = getImgs;
}
