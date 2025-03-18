export default function bodyScrollStop(isStopScroll) {
    const body = document.body
    const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth

    const bodyStyles = {
        overflow: isStopScroll ? 'hidden' : '',
        paddingRight: isStopScroll ? `${scrollBarWidth}px` : '',
    }

    body.style.overflow = bodyStyles.overflow
    body.style.paddingRight = bodyStyles.paddingRight
}
