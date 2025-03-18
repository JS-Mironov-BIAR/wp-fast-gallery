export const galleryState = {
    idx: 0,
    galleryArray: [],
    modal: null,
}

export function updateGalleryState(idx, galleryArray, modal) {
    galleryState.idx = idx
    galleryState.galleryArray = galleryArray
    galleryState.modal = modal
}
