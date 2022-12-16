import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
import { galleryItems } from './gallery-items';


// Change code below this line

console.log(galleryItems);
const galleryEl = document.querySelector('.gallery');

function markapGallery(array) {
  return array
    .map(
      ({ preview, description, original }) =>
        `<div class="gallery__item">
            <a class=""gallery__link href="${original}">
                <img class="gallery__image" src="${preview}" alt="${description}" data-src="${original}" >
            </a>
        </div>`
    )
    .join(' ');
}

galleryEl.insertAdjacentHTML('beforeend', markapGallery(galleryItems));
const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
  captionPosition: 'bottom',
});
