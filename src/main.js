const D$ = require('./DDocument')
const Accordion = require('./DAccordion')
const Calendar = require('./DCalendar')

var main_ = function () {
    window.addEventListener('load', () => {
        var calendar = new Calendar(['#i1', '#i2'])
        calendar.addReminding('2018-05-14', 'Fuck', true, true)
        calendar.addReminding('2018-05-12', 'Fssuck', true, true)
        document.querySelector('#b1').addEventListener('click', () => {
            let t = calendar.getPopup()
            console.log(t)
        })
    })
}

main_()

