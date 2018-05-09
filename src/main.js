const D$ = require('./DDocument')
const Accordion = require('./DAccordion')
const Calendar = require('./DCalendar')

var main_ = function () {
    window.addEventListener('load', () => {
        var acc = new Accordion('#show')
        acc.addItem_('a1', 'test', false, null, null)
        acc.addItem_('a2', 'test', false, null, null)
        acc.addItem_('a3', 'test', false, null, null)
        document.querySelector('#b1').addEventListener('click', () => {
            D$.querySelector('#show')
        })
    })
}

main_()

