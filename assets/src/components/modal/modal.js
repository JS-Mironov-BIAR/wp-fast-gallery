import initModalHandler from './modalHandler'

export default function createModal() {
    const isModal = document.querySelector('.modal')
    if (isModal) return null

    const modal = document.createElement('div')
    modal.classList.add('modal', 'modal-wrapper')
    modal.innerHTML = `
        <div class="modal-dialog">
             <div class="modal-controllers"></div>
             <div class="modal-content">
                 <img src="" alt="">
             </div>
        </div>`

    initModalHandler(modal)
    document.body.appendChild(modal)
    return modal
}
