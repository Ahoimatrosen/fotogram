// Array for the images
const FOTOGRAM_IMAGES_ARRAY = [
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
    "leopards.jpg",
    "bird.jpg",
];

// Array for the alt attribute
const FOTOGRAM_ALT_ARRAY = [
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
    "Two baby leopards",
    "A bird on a branch",
];

// Array for the dialog/image titles
const FOTOGRAM_TITLE_ARRAY = [
    "Cat",
    "Corgi",
    "Cow",
    "Dog",
    "Dog_and_lake",
    "Flower",
    "Island_on_river",
    "Mountains_and_river",
    "Rocks_and_desert",
    "Sunny_forest",
    "Leopards",
    "Bird",
];

// variable for fotogram dialog
let FOTOGRAM_DIALOG_REF = document.getElementById("fotogramDialog");

// variable for the dialog img container
let FOTOGRAM_DIALOG_IMG_REF = document.getElementById("fotogramDialogImg");

// variable for the dialog title container
let FOTOGRAM_DIALOG_TITLE = document.getElementById("fotogramTitle");

// variable for the counter container
let FOTOGRAM_DIALOG_FOOTER = document.getElementById("fotogramDialogFooterP");

// opens dialog; renders img and title
function openFotogram(index) {
    FOTOGRAM_DIALOG_REF.showModal();
    showFotogramImage(index);
    showFotogramTitle(index);
}

// closes dialog
function closeFotogram() {
    FOTOGRAM_DIALOG_REF.close();
}

// renders img and alt attribute for dialog
function showFotogramImage(index) {
    let getImgs = "";
    getImgs = `<img class="dialog-inner-img" src="./assets/img/${FOTOGRAM_IMAGES_ARRAY[index]}" alt="${FOTOGRAM_ALT_ARRAY[index]}">`;
    FOTOGRAM_DIALOG_IMG_REF.innerHTML = getImgs;
}

//renders title for dialog
function showFotogramTitle(index) {
    let getTitle = "";
    getTitle = `${FOTOGRAM_TITLE_ARRAY[index]}`;
    FOTOGRAM_DIALOG_TITLE.innerHTML = getTitle;
}

// renders imgs for main-content
function renderImages() {
    let getImgs = "";
    for (let index = 0; index < FOTOGRAM_IMAGES_ARRAY.length; index++) {
        getImgs += `<img  onclick="openFotogram(${index})" src="./assets/img/${FOTOGRAM_IMAGES_ARRAY[index]}" alt="${FOTOGRAM_ALT_ARRAY[index]}">`;
    }
    fotoContainer.innerHTML = getImgs;
}
