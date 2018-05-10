const D$ = require('./DDocument')
const { analysisParameterToId } = require('./share')
const { isObject, isArray } = require("util")

class Calendar extends dhtmlXCalendarObject {
    /**
     * 一个日历组件
     * @param {string|Array} props 
     * @memberof Calendar
     */
    constructor(props) {
        if (isObject(props)) {
            super(props)
        } else {
            let parentIds = analysisParameterToId(props)
            super(parentIds)
        }
        D$.injectionElement(props, this)
        this.config = {

        }
    }

    /**
     * 监听一个事件
     * 
     * @param {any} eventName 事件名
     * @param {any} callBack 回调函数
     * @memberof Calendar
     */
    addEventListener(eventName, callBack) {
        this.attachEvent(eventName, callBack)
    }

    /**
     * 将时间组件注入到某个Dom节点中
     * 
     * @param {any} selector 
     * @memberof Calendar
     */
    injectionToDom(selector) {
        let dHtmlXId = analysisParameterToId(selector)
        this.attachObj(dHtmlXId)
    }

    /**
     * 屏蔽日期
     * 
     * @param {string|Date|Array} date 
     * @memberof Calendar
     */
    disableDate(date) {
        this.setInsensitiveDays(date)
    }

    /**
     * 开启被disableDate屏蔽的日期
     * 
     * @memberof Calendar
     */
    enableDay() {
        this.clearInsensitiveDays()
    }

    /**
     * 解除范围限制，包括batchDisableDate、setOptionalRange导致的范围限制
     * 
     * @memberof Calendar
     */
    clearRangeControl() {
        this.clearSensitiveRange()
    }

    /**
     * 批量屏蔽日期
     * 
     * @param {string|Date} from 
     * @param {string|Date} to 
     * @memberof Calendar
     */
    batchDisableDate(from, to) {
        this.setInsensitiveRange(from, to)
    }

    /**
     * 设置日期可选范围
     * 
     * @param {Date|string} from 
     * @param {Date|string} to 
     * @memberof Calendar
     */
    setOptionalRange(from, to) {
        this.setSensitiveRange(from, to)
    }

    /**
     * 设置某个日期提醒
     * 
     * @param {Date|string|Array} date 
     * @param {string} text 
     * @param {boolean} [isShowIcon=null] 
     * @param {boolean} [isPopup=null] 
     * @memberof Calendar
     */
    addReminding(date, text, isShowIcon = null, isPopup = null) {
        this.setTooltip(date, text, isShowIcon, isPopup)
    }

    /**
     * 取消这个日期的提醒
     * 
     * @param {Date} date 
     * @memberof Calendar
     */
    cancelReminding(date) {
        this.clearTooltip(date)
    }

    /**
     * 卸载事件
     * 
     * @param {Number} eventId 事件id
     * @memberof Calendar
     */
    delEvent(eventId) {
        this.detachEvent(eventId)
    }

    /**
     * 从Dom对象删除自己 
     * 
     * @param {string|Number|HTMLElement} parent (Dom的id、Dom节点、attachObj()返回的id)
     * @memberof Calendar
     */
    delSelfFromDom(parent) {
        this.detachObj(parent)
    }

    /**
     * 屏蔽每周、每月、每年的某天
     * 
     * @param {string} cycle "week", "month", "year"
     * @param {string|Array|Number} date 
     * @memberof Calendar
     */
    disableOneDayEachCycle(cycle, date) {
        this.disableDays(cycle, date)
    }

    /**
     * 开启被disableOneDayEachCycle屏蔽的日期
     * 
     * @param {string} mode "week", "month" or "year"
     * @memberof Calendar
     */
    enableOneDayEachCycle(mode) {
        this.enableDays(mode)
    }
}

module.exports = Calendar