import createModal from '../modal/modal'
import bodyScrollStop from '../ui'
import { getGalleryArray, getIndex } from '../../helpers/helpers'
import buttonNavigation from '../controllers/buttonsNavigation'
import { updateGalleryState } from './galleryState'
import updateImage from '../modal/updateImage'
import buttonClose from '../controllers/buttonClose'

export default function onClick(e, gallery) {
    e.preventDefault()
    if (!e.target.closest('img')) return

    const galleryArray = getGalleryArray(gallery)
    const idx = getIndex(e, galleryArray)
    const modal = createModal()

    if (modal) {
        updateGalleryState(idx, galleryArray, modal)

        modal.querySelector('.modal-controllers').append(buttonClose(), buttonNavigation())
        updateImage()
        modal.classList.add('show')
        bodyScrollStop(true)
    }
}
