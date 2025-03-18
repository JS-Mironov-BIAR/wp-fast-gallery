import bodyScrollStop from '../ui'

export function closeModal() {
    const modal = document.querySelector('.modal')

    modal.classList.remove('show')
    modal.addEventListener('transitionend', () => modal.remove(), { once: true })
}

export function outsideModal(event) {
    if (event.target.classList.contains('modal')) {
        closeModal()
        bodyScrollStop(false)
    }
}
