import { outsideModal } from './modalEvents'

export default function initModalHandler(modal) {
    modal.addEventListener('click', (e) => outsideModal(e))
}
