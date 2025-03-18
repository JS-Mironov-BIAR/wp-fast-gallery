import { galleryState } from '../gallery/galleryState'

export default function updateImage(newIdx = null) {
    if (newIdx !== null) {
        galleryState.idx = (newIdx + galleryState.galleryArray.length) % galleryState.galleryArray.length
    }

    const img = galleryState.modal.querySelector('.modal-content img')
    img.style.opacity = 0.3

    setTimeout(() => {
        img.src = galleryState.galleryArray[galleryState.idx].querySelector('a').href
        img.style.opacity = 1
    }, 150)
}
