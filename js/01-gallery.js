import { galleryItems } from "./gallery-items.js";
// Change code below this line

function crateGalleryMarkUp() {
  return galleryItems
    .map((elem) => {
      return `
      <div class="gallery__item">
      <a class="gallery__link" href="${elem.original}">
        <img
          class="gallery__image"
          src="${elem.preview}"
          data-source="${elem.original}"
          alt="${elem.description}"
        />
      </a>
    </div>
    `;
    })
    .join("");
}

const galleryRefs = document.querySelector(".gallery");
const galleryHtmlMarkUp = crateGalleryMarkUp();
galleryRefs.innerHTML = galleryHtmlMarkUp;

galleryRefs.addEventListener("click", openModal);

function openModal(e) {
  e.preventDefault();
  if (e.target.nodeName !== "IMG") return;

  const instance = basicLightbox.create(
    `
      <div class="modal">
          <img src="${e.target.dataset.source}" width="1280" height="720">
      </div>
  `
  );
  instance.show();

  galleryRefs.addEventListener("keydown", (e) => {
    if (e.code === "Escape") instance.close();
    console.log(e.code);
    galleryRefs.removeEventListener("keydown", this);
  });
}

console.log(galleryItems);
