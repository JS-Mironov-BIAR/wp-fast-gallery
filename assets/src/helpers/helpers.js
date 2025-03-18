export function getGalleryArray(gallery) {
    return Array.from(gallery.children)
}
export function getIndex(e, galleryArray) {
    return galleryArray.indexOf(e.target.closest('.gallery-item'))
}

export function createButton(label, className, iconSvg, callback) {
    const button = document.createElement('button')
    button.classList.add(className)
    button.innerHTML = iconSvg
    button.addEventListener('click', (e) => {
        e.preventDefault()
        callback()
    })
    return button
}
