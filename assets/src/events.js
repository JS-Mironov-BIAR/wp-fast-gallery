import initGalleryHandlers from './components/gallery/galleryHandler'

export default function initGalleryEvents() {
    const galleries = document.querySelectorAll('.gallery')

    galleries.forEach((gallery) => initGalleryHandlers(gallery))
}
