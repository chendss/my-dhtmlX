window.addEventListener('load', () => {
    var acc = new Accordion('show')
    acc.item('a1', 'frist', false, null, null)
    acc.item('a2', 'frist', false, null, null)
    acc.item('a3', 'frist', false, null, null)
    document.querySelector('#b1').addEventListener('click',()=>{
        acc.close_item('a2')
    })
})
