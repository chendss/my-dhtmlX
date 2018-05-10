const D$ = require('./DDocument')
const { analysisParameterToId } = require('./share')

class Calendar extends dhtmlXCalendarObject {
    constructor(props) {
        let parentIds = analysisParameterToId(props)
        super(parentIds)
        D$.injectionElement(props, this)
        this.config = {

        }
    }


    monitorEvent(eventName, callBack) {
        this.attachEvent(eventName, callBack)
    }

    injectionToDom(selector) {
        let dHtmlXId = analysisParameterToId(selector)
        this.attachObj(dHtmlXId)
    }
}

module.exports = Calendar