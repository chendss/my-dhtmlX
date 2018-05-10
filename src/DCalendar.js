const D$ = require('./DDocument')
const { analysisProps } = require('./share')

class Calendar extends dhtmlXCalendarObject {
    constructor(props) {
        this.config = {

        }
        analysisProps(props, (parentIds) => {
            super(parentIds)
            D$.injectionElement(parent, this)
        })
    }


    monitorEvent(eventName, callBack) {
        this.attachEvent(eventName, callBack)
    }
}

module.exports = Calendar