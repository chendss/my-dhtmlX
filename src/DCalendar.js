const D$ = require('./DDocument')
const { analysisParameterToId } = require('./share')
const { isObject, isObjectArray } = require("./share")
const { isArray } = require("util")

class Calendar extends dhtmlXCalendarObject {
    /**
     * 一个日历组件
     * @param {string|Array} props 
     * @memberof Calendar
     */
    constructor(props) {
        if (isObject(props) || isObjectArray(props)) {
            super(props)
        } else {
            let parentIds = analysisParameterToId(props)
            super(parentIds)
            D$.injectionElement(props, this)
        }
        this.config = {

        }
    }

    /**
     * 修改所有的日历组件语言
     * 
     * @static
     * @param {string} lang 
     * @memberof Calendar
     */
    static allLangChange(lang) {
        dhtmlXCalendarObject.prototype.lang = "de"
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

    /**
     * 返回某个日期的坐标和宽高
     * 
     * @param {string|Date} date 
     * @returns 日期的坐标和宽高
     * @memberof Calendar
     */
    dateCoordinate(date) {
        let result = this.getCellDimension(date)
        return result
    }

    /**
     * 获得当前选中的时间
     * 
     * @param {boolean} isFormatted 是否使用简易时间，默认标准时间
     * @returns 当前选中时间
     * @memberof Calendar
     */
    date(isFormatted) {
        let result = this.getDate(isFormatted)
        return result
    }

    /**
     * 获得最近的触发onPopupShow事件的popup对象
     * 
     * @memberof Calendar
     */
    getRemindingPopup() {
        let result = this.getPopup()
        return
    }

    /**
     * 获得指定日期是第几周
     * 
     * @param {string|Date} date 
     * @returns 返回第几周Number
     * @memberof Calendar
     */
    getWhichWeek(date) {
        let result = this.getWeekNumber(date)
        return result
    }

    /**
     * 隐藏自己
     * 
     * @memberof Calendar
     */
    hide_() {
        this.hide()
    }

    /**
     * 隐藏底部时间面板
     * 
     * @memberof Calendar
     */
    hideBottomTime() {
        this.hideTime()
    }

    /**
     * 显示右下角的 今天 清除 按钮
     * 
     * @memberof Calendar
     */
    showTodayClear() {
        this.showToday()
    }

    /**
     * 隐藏右下角 今天 清除 按钮
     * 
     * @memberof Calendar
     */
    hideTodayClear() {
        this.hideToday()
    }

    /*
     * 左侧显示周数栏
     * 
     * @memberof Calendar
     */
    showWeekCell() {
        this.showWeekNumbers()
    }

    /**
     * 隐藏左侧周数栏
     * 
     * @memberof Calendar
     */
    hideWeekCell() {
        this.hideWeekNumbers()
    }

    /**
     * 判断组件是否处于显示状态
     * 
     * @returns 
     * @memberof Calendar
     */
    isShow() {
        let result = this.isVisible()
        return result
    }

    /**
     * 设置语言
     * 
     * @param {any} lang 语言索引
     * @memberof Calendar
     */
    setLanguage(lang) {
        this.loadUserLanguage(lang)
    }

    /**
     * 设置当前日期时间
     * 
     * @param {string|Date} date 
     * @memberof Calendar
     */
    setDate_(date) {
        this.setDate(date)
    }

    /**
     * 设置日期格式
     * 
     * @param {any} format 
     * @memberof Calendar
     */
    setDateFormat_(format) {
        this.setDateFormat(format)
    }

    /**
     * 根据格式设置日期
     * 
     * @param {string} format 
     * @param {string} date 
     * @memberof Calendar
     */
    setFormatedDate_(format, date) {
        this.setFormatedDate(format, date)
    }

    /**
     * 设定特殊日子
     * 
     * @param {string|Date|Array} date 
     * @memberof Calendar
     */
    setSpecialDate(date) {
        this.setHolidays(data)
    }

    

}

module.exports = Calendar