import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector(".gallery");
const galleryMarkup = createGalleryMarkup(galleryItems);

function createGalleryMarkup(photos) {
	return photos
		.map(({ preview, original, description }) => {
			return `<div class="gallery__item">
<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}"/>
</a>
</div>`;
		})
		.join("");
}

galleryEl.insertAdjacentHTML("afterbegin", galleryMarkup);

let gallery = new SimpleLightbox(".gallery a", {
	captions: true,
	captionsData: "alt",
	captionDelay: 250,
});
