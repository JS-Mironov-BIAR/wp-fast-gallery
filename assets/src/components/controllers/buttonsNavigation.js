import { createButton } from '../../helpers/helpers'
import updateImage from '../modal/updateImage'
import { galleryState } from '../gallery/galleryState'

export default function buttonNavigation() {
    const navigationWrapper = document.createElement('div')
    navigationWrapper.classList.add('navigation')

    const prevButton = createButton('Prev', ['button-prev', 'prev'], prevIconSvg, () =>
        updateImage(galleryState.idx - 1),
    )
    const nextButton = createButton('Next', ['button-next', 'next'], nextIconSvg, () =>
        updateImage(galleryState.idx + 1),
    )

    navigationWrapper.append(prevButton, nextButton)
    return navigationWrapper
}

// eslint-disable-next-line max-len
const prevIconSvg = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M30.83 14.83L28 12L16 24L28 36L30.83 33.17L21.66 24L30.83 14.83Z" fill="black"/></svg>`
// eslint-disable-next-line max-len
const nextIconSvg = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19.9999 12L17.1699 14.83L26.3399 24L17.1699 33.17L19.9999 36L31.9999 24L19.9999 12Z" fill="black"/></svg>`
