// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const galleryEl = document.querySelector('.gallery');
const markup = createGalleryMarkup(galleryItems)

galleryEl.insertAdjacentHTML('afterbegin', markup)

function createGalleryMarkup(galleryItems) {
    return galleryItems.map(({preview, original, description}) => { return `<li class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        alt="${description}"
      />
    </a>
  </li>`
}).join('');
};

const lightbox = new SimpleLightbox('.gallery__link', {
    captionsData: 'alt', captionPosition: 'bottom', captionDelay: 250
  })

