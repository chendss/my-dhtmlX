window.addEventListener('load', () => {
    var acc = new Accordion('show')
    acc.addItem_('a1', 'frist', false, null, null)
    acc.addItem_('a2', 'frist', false, null, null)
    acc.addItem_('a3', 'frist', false, null, null)
    document.querySelector('#b1').addEventListener('click', () => {
        console.log(acc.isOpen('a1'))
    })
})
