import { closeModal } from '../modal/modalEvents'
import bodyScrollStop from '../ui'
import { createButton } from '../../helpers/helpers'

export default function buttonClose() {
    return createButton('Close', ['button-close', 'close'], closeIconSvg, () => {
        closeModal()
        bodyScrollStop(false)
    })
}

// eslint-disable-next-line max-len
const closeIconSvg = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_0_2689)"><path d="M38 12.83L35.17 10L24 21.17L12.83 10L10 12.83L21.17 24L10 35.17L12.83 38L24 26.83L35.17 38L38 35.17L26.83 24L38 12.83Z" fill="black"/></g><defs><clipPath id="clip0_0_2689"><rect width="48" height="48" fill="white"/></clipPath></defs></svg>`
