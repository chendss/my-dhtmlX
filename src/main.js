const D$ = require('./DDocument')
const Accordion = require('./DAccordion')
const Calendar = require('./DCalendar')

var main_ = function () {
    window.addEventListener('load', () => {
        var calendar = new Calendar([{ input: "i1", button: "iconID" }])
        document.querySelector('#b1').addEventListener('click', () => {
        })
    })
}

main_()

