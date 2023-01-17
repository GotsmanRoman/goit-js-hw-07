import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryRefs = document.querySelector(".gallery");
galleryRefs.innerHTML = createGalleryMarkUp();

function createGalleryMarkUp() {
  return galleryItems
    .map((elem) => {
      return `
        <a class="gallery__item" href="${elem.original}">
          <img
            class="gallery__image"
            src="${elem.preview}"
            alt="${elem.description}"
          />
      </a>
      `;
    })
    .join("");
}

let gallery = new SimpleLightbox(".gallery a", {
  caption: "true",
  captionType: "attr",
  captionsData: "alt",
  captionPosition: "bottom",
  captionDelay: 250,
});
gallery.on("show.simplelightbox", function () {
  // Do something…
});

gallery.on("error.simplelightbox", function (e) {
  console.log(e); // Some usefull information
});

console.log(galleryItems);
