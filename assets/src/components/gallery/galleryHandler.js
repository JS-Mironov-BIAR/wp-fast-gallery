import onClick from './galleryEvents'

export default function initGalleryHandlers(gallery) {
    gallery.addEventListener('click', (e) => onClick(e, gallery))
}
