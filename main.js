window.addEventListener('load', () => {
    var acc = new Accordion('show')
    acc.item('a1', 'frist', false, null, null)
    acc.item('a2', 'frist', false, null, null)
    acc.item('a3', 'frist', false, null, null)
    console.log(acc.chose('a1'),acc.chose('t1'))
})
