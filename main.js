

var elementEventBinding = function (element) {
    let eventTags = acc.eventDict()
    acc.addEvent(eventTags.脱离文档流, function () {
        console.log(arguments)
        return true
    })
}

var buttonEventBinding = function (acc) {
    var b = document.querySelector('#b1')
    b.addEventListener('click', () => {
        acc.unDock_('a1', [550, 20, 400, 300])
    })
}

var elementInit = function () {
    var acc = new Accordion('show')
    acc.addItem_('a1', 'frist', false, null, null)
    acc.addItem_('a2', 'frist', false, null, null)
    acc.addItem_('a3', 'frist', false, null, null)
    return acc
}

var main_ = function () {
    window.addEventListener('load', () => {
        var acc = elementInit()
        // buttonEventBinding(acc)
    })
}

