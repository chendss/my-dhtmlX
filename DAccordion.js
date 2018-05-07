// 一个手风琴组件,只支持垂直布局
class Accordion extends dhtmlXAccordion {

    constructor(props) {
        super(props)
    }

    /**
     * 添加一个子元素
     * 
     * @param {any} id 设定子元素的id
     * @param {any} text 设定子元素显示的文本
     * @param {any} isOpen 是否处于展开状态
     * @param {any} height 子元素的高度
     * @param {any} icon 子元素的icon
     * @memberof Accordion
     */
    item(id, text, isOpen, height, icon) {
        return this.addItem(...arguments)
    }

    /**
     * 添加一个事件
     * 
     * @param {any} name 
     * @param {any} callBack 
     * @returns 返回一个内部的事件id 可用于detachEvent(eventId) 
     * @memberof Accordion
     */
    addEvent(name, callBack) {
        let eventId = this.attachEvent(name, callBack)
        return eventI
    }

    /**
     * 添加一个页脚样式到底部
     * 
     * @param {any} idOrDom 
     * @param {any} [height=null] 可选，页脚的高度
     * @memberof Accordion
     */
    addFooter(idOrDom, height = null) {
        if (height === null) {
            this.attachFooter(idOrDom)
        } else {
            this.attachFooter(idOrDom, height)
        }
    }
    /**
     * 将页头样式加入组件顶部
     * 
     * @param {any} idOrDom  
     * @param {any} [height=null] 可选，页头高度 
     * @memberof Accordion
     */
    addHeader(idOrDom, height = null) {
        if (height === null) {
            this.attachHeader(idOrDom)
        } else {
            this.attachHeader(idOrDom, height)
        }
    }

    /**
     * 将dhtmlxMenu加入组件顶部
     * 
     * @param {any} menu 
     * @returns 返回dhtmlXMenuObject实例
     * @memberof Accordion
     */
    addMenuToHeader(menu) {
        let menuObject = this.accordion.attachMenu(menu)
        return menuObject
    }
    /**
     * 添加一个dhtmlxRibbon 在组件顶部
     * 
     * @param {any} ribbon 
     * @returns dhtmlxRibbon 的实例
     * @memberof Accordion
     */
    addRibbonToHeader(ribbon) {
        let ribbonObj = this.attachRibbon(ribbon)
        return ribbonObj
    }

    /**
     * 将一个状态栏加入组件底部
     * 
     * @param {any} conf eg: {text: "Text", height: 20 }
     * @returns 返回状态栏对象
     * @memberof Accordion
     */
    addStatusBarToBottom(conf) {
        let obj = this.attachStatusBar(conf)
        return obj
    }

    /**
     * 将dhtmlXToolbarObject 对象添加到组件顶部
     * 
     * @param {any} conf 
     * @returns 返回一个dhtmlXToolbarObject对象
     * @memberof Accordion
     */
    addToolbarToHeader(conf) {
        let toolbarObject = this.attachToolbar(conf)
        return toolbarObject
    }

    /**
     * 选中子元素
     * 
     * @param {any} itemId 子元素id
     * @returns 返回子元素
     * @memberof Accordion
     */
    chose(itemId) {
        let item = null
        try {
            item = this.cells(itemId)
        } catch (error) {
            console.log('未找到此元素')
        }
        return item
    }
}
