const D$ = require('./DDocument')
const Accordion = require('./DAccordion')
const Calendar = require('./DCalendar')

var main_ = function () {
    window.addEventListener('load', () => {
        var calendar = new Calendar(['#i1', '#i2','#hhh'])
        calendar.enableIframe(true)
        document.querySelector('#b1').addEventListener('click', () => {
            calendar.enableIframe(false)
        })
    })
}

main_()

