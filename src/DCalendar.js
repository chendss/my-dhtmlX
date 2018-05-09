const D$ = require('./DDocument')
const {analysisProps} = require('./share')

class Calendar extends dhtmlXCalendarObject {
    constructor(props) {
        analysisProps(props, (backData) => { super(backData) })
        this.config = {

        }
        D$.injectionElement(props, this)
    }


    monitorEvent(eventName, callBack) {
        this.attachEvent(eventName, callBack)
    }
}

module.exports = Calendar