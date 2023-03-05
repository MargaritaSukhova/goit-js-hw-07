import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector(".gallery");
const galleryMarkup = createGalleryMarkup(galleryItems);

function createGalleryMarkup(photos) {
	return photos
		.map(({ preview, original, description }) => {
			return `<div class="gallery__item">
					<a class="gallery__link" href="${original}">
						<img
							class="gallery__image"
							src="${preview}"
							data-source="${original}"
							alt="${description}"
						/>
					</a>
				</div>`;
		})
		.join("");
}

galleryEl.insertAdjacentHTML("afterbegin", galleryMarkup);

galleryEl.addEventListener("click", handlePhotoClick);

function handlePhotoClick(event) {
	event.preventDefault();

	if (event.target.nodeName !== "IMG") {
		return;
	}

	const url = event.target.dataset.source;

	const instance = basicLightbox.create(`
    <img src="${url}" width="800" height="600">
`);

	instance.show();
}
