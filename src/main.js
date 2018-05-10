const D$ = require('./DDocument')
const Accordion = require('./DAccordion')
const Calendar = require('./DCalendar')

var main_ = function () {
    window.addEventListener('load', () => {
        var calendar = new Calendar(['#i1', '#i2'])
        document.querySelector('#b1').addEventListener('click', () => {
            let test = D$.querySelector('.fuck')
            calendar.injectionToDom('#i3')
        })
    })
}

main_()

