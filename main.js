window.addEventListener('load', () => {
    var acc = new Accordion('show')
    acc.addItem_('a1', 'frist', false, null, null)
    acc.addItem_('a2', 'frist', false, null, null)
    acc.addItem_('a3', 'frist', false, null, null)
    var b = document.querySelector('#b1')
    b.addEventListener('click', () => {
        let parent = document.querySelector('#show')

    })
    let eventTags = acc.eventDict()
    acc.openDND()
    acc.attachEvent('onDock', () => {
        console.log('click')
    })
})
