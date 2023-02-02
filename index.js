'use strict';

// grab dom elements
const photosButton = document.querySelector('#photosButton');
const photosGrid = document.querySelector('#photosGrid');

// grab modal elements
const photoModal = document.querySelector('#modal');
const photoModalClose = document.querySelector('#closeButton');
const photoModalMsg = document.querySelector('#imagesCount');

// go to photos
photosButton.addEventListener('click', function () {
  // show modal with storage saved images
  ShowModal();
});

function ShowModal() {
  photoModal.classList.add('is-visible');
}
function CloseModal() {
  photoModal.classList.remove('is-visible');
  photoModal.classList.add('is-hidden');
}

// handle dom modal close
photoModalClose.addEventListener('click', CloseModal);

// clicking on modal closes it
// photoModal.addEventListener('click', CloseModal);

// handle photos rendering
// photo store
const PHOTOSTORE = [];

function UpdatePhotos(srcData) {
  PHOTOSTORE.push(srcData);
  // console.log(PHOTOSTORE);
  photosGrid.innerHTML = PHOTOSTORE.map(function (src, i) {
    let span = `<span class="photo-container">
            <img id="photo" src=${src} class="photo" alt=${i} />
          </span>`;
    // update modal footer message
    photoModalMsg.innerText = `${PHOTOSTORE.length} Images!`;
    return span;
  });
}
