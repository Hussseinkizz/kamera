'use strict';

const VIDEO = document.getElementById('video');
const CAMERAVIEW = document.getElementById('cameraView');
const CANVAS = document.getElementById('canvas');
const SNAP = document.getElementById('cameraButton');
const PREVIEW = document.getElementById('PreviewPhoto');
const CONTEXT = CANVAS.getContext('2d');

async function InitCamera() {
  const stream = await navigator.mediaDevices.getUserMedia({ video: true });
  VIDEO.width = window.innerWidth;
  VIDEO.height = window.innerHeight;
  VIDEO.srcObject = stream;
  await VIDEO.play();
}

function DrawCanvas() {
  let width = VIDEO.videoWidth;
  let height = VIDEO.videoHeight;
  CANVAS.width = width;
  CANVAS.height = height;
  let sizeWidth = CANVAS.width;
  let sizeHeight = CANVAS.height;
  const min = Math.min(width, height);
  const posX = (width - min) / 2;
  const posY = (height - min) / 2;
  CONTEXT.drawImage(VIDEO, posX, posY, min, min, 0, 0, sizeWidth, sizeHeight);
}

SNAP.addEventListener('click', function () {
  DrawCanvas();
  // PHOTO.src = CANVAS.toDataURL();
  let srcData = CANVAS.toDataURL();
  // update photo or photos store
  srcData && UpdatePhotos(srcData);

  // change preview photo
  PREVIEW.src = CANVAS.toDataURL();
  PREVIEW.classList.add('animate');
  // simulate shot
  CAMERAVIEW.classList.add('animate');
  setInterval(function () {
    CAMERAVIEW.classList.remove('animate');
  }, 600);
  // change snap button
  SNAP.classList.add('snapped');
});

// start camera
window.addEventListener('load', InitCamera, false);
