const D$ = require('./DDocument')
const Accordion = require('./DAccordion')
const Calendar = require('./DCalendar')

var main_ = function () {
    window.addEventListener('load', () => {
        var calendar = new Calendar(['#i1', '#i2'])
        calendar.showWeekNumbers()
        calendar.addReminding('2018-05-14', 'Fuck', true, true)
        calendar.addReminding('2018-05-12', 'Fssuck', true, true)
        document.querySelector('#b1').addEventListener('click', () => {
            let ff = calendar.isVisible()
            calendar.setMinutesInterval(20)

            console.log('FUCK')
        })
    })
}

main_()

