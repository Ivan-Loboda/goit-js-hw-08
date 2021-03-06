// Описан в документации
import SimpleLightbox from "simplelightbox";
// Дополнительный импорт стилей
import "simplelightbox/dist/simple-lightbox.min.css";
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

const galleryBox = document.querySelector('.gallery');

const markUp = galleryItems.map(item =>
    `<a class="gallery__link" href="${item.original}" style ="cursor: default">
        <img class="gallery__image"
            src="${item.preview}"
            alt="${item.description}"/>
    </a>`).join("");


galleryBox.insertAdjacentHTML('beforeend', markUp);

const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
});