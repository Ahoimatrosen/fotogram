// Array for the images
const FOTOGRAM_IMAGES_ARRAY = [
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

// Array for the alt attribute
const FOTOGRAM_ALT_ARRAY = [
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

// Array for the dialog/image titles
const FOTOGRAM_TITLE_ARRAY = [
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

let FOTOGRAM_MAIN_REF = document.getElementById("fotoContainer");

// variable for fotogram dialog
let FOTOGRAM_DIALOG_REF = document.getElementById("fotogramDialog");

// variable for the dialog img container
let FOTOGRAM_DIALOG_IMG_REF = document.getElementById("fotogramDialogImg");

// variable for the dialog title container
let FOTOGRAM_DIALOG_TITLE = document.getElementById("fotogramTitle");

// variable for the counter container
let FOTOGRAM_DIALOG_FOOTER = document.getElementById("fotogramDialogFooter");

// renders imgs for main-content
function renderImages() {
    let getImgs = "";
    for (let index = 0; index < FOTOGRAM_IMAGES_ARRAY.length; index++) {
        getImgs += renderImagesTemplate(index);
    }
    FOTOGRAM_MAIN_REF.innerHTML = getImgs;
}

// opens dialog; renders img and title
function openFotogram(index) {
    FOTOGRAM_DIALOG_REF.showModal();
    showFotogramImage(index);
    showFotogramTitle(index);
    currentImageCounter(index);
}

function openFotogramOnKeyDown(index) {
    if (event.key === "Enter") {
        openFotogram(index);
    }
}

// renders img and alt attribute for dialog
function showFotogramImage(index) {
    let getImgs = "";
    getImgs = showFotogramImageTemplate(index);
    FOTOGRAM_DIALOG_IMG_REF.innerHTML = getImgs;
}

//renders title for dialog
function showFotogramTitle(index) {
    let getTitle = "";
    getTitle = `${FOTOGRAM_TITLE_ARRAY[index]}`;
    FOTOGRAM_DIALOG_TITLE.innerHTML = getTitle;
}

// counts and display the current number of the image
function currentImageCounter(index) {
    let counter = "";
    counter = currentImageCounterTemplate(index);
    FOTOGRAM_DIALOG_FOOTER.innerHTML = counter;
}

// closes dialog
function closeFotogram() {
    FOTOGRAM_DIALOG_REF.close();
}

function closeFotogramOnKeyDown() {
    if (event.key === "Enter") {
        closeFotogram();
    }
}

// stops event bubbling
function bubblingProtection(event) {
    event.stopPropagation();
}

// skips to next image in dialog
function nextImage(index) {
    index++;
    if (index === FOTOGRAM_IMAGES_ARRAY.length) {
        index = 0;
    }
    openFotogram(index);
}

function nextImageOnKeyDown(index) {
    if (event.key === "Enter") {
        nextImage(index);
        let FOTOGRAM_DIALOG_FOOTER_NEXT_IMAGE_BUTTON = document.getElementById("nextImageButton");
        FOTOGRAM_DIALOG_FOOTER_NEXT_IMAGE_BUTTON.focus();
    }
}

// jumps back to previous image in dialog
function previousImage(index) {
    index--;
    if (index === -1) {
        index = FOTOGRAM_IMAGES_ARRAY.length - 1;
    }
    openFotogram(index);
}

function previousImageOnKeyDown(index) {
    if (event.key === "Enter") {
        previousImage(index);
        let FOTOGRAM_DIALOG_FOOTER_PREVIOUS_IMAGE_BUTTON = document.getElementById("previousImageButton");
        FOTOGRAM_DIALOG_FOOTER_PREVIOUS_IMAGE_BUTTON.focus();
    }
}

//template for function renderImages()
function renderImagesTemplate(index) {
    return `<img tabindex="0" onkeydown="openFotogramOnKeyDown(${index})" onclick="openFotogram(${index})" src="./assets/img/${FOTOGRAM_IMAGES_ARRAY[index]}" alt="${FOTOGRAM_ALT_ARRAY[index]}">`;
}

//template for function showFotogramImageT()
function showFotogramImageTemplate(index) {
    return `<img class="dialog-inner-img" src="./assets/img/${FOTOGRAM_IMAGES_ARRAY[index]}" alt="${FOTOGRAM_ALT_ARRAY[index]}">`;
}

// templaze for function currentImageCounter()
function currentImageCounterTemplate(index) {
    return `<img id="previousImageButton" tabindex="0" onkeydown="previousImageOnKeyDown(${index})" onclick="previousImage(${index})" class="mirrored dialog-footer-button" src="./assets/icon/next-icon.png" alt="previous-button" />
                <p>${index + 1} / 12</p>
                <img id="nextImageButton" tabindex="0" class="dialog-footer-button" onkeydown="nextImageOnKeyDown(${index})" onclick="nextImage(${index})" src="./assets/icon/next-icon.png" alt="next-button" />`;
}
