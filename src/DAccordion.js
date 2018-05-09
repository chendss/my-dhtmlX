const D$ = require('./DDocument')

/**
 * 一个手风琴组件,只支持垂直布局
 * 
 * @class Accordion
 * @extends {dhtmlXAccordion}
 */
class Accordion extends dhtmlXAccordion {

    constructor(props) {
        super(props)
        this.config = {
            hideSet: new Set([]),
            eventTags: {
                'onItemClick': 'onActive',
                'onItemClickBeFor': 'onBeforeActive',
                'onBeforeDrag': 'onBeforeDrag',
                'onContentLoaded': 'onContentLoaded',
                '回到文档流': 'onDock',
                '脱离文档流': 'onUnDock',
                'onDrop': 'onDrop',
                'onDataLoad': 'onXLE',
                'onXLS': 'onXLS',
            }
        }
        D$.injectionElement(props, this)
    }

    /**
     * 返回所有事件的字典
     * 
     * @returns 
     * @memberof Accordion
     */
    eventDict() {
        let result = this.config.eventTags
        return result
    }

    /**
     * 注册监听事件
     * 
     * @param {any} eventName 
     * @param {any} callBack 
     * @memberof Accordion
     */
    addEvent(eventName, callBack) {
        this.attachEvent(eventName, callBack)
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
    addItem_(id, text, isOpen, height, icon) {
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
        let result = this.attachEvent(name, callBack)
        return result
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

    /**
     * 
     *清除元素的icon 
     * @param {any} itemId 子元素id
     * @memberof Accordion
     */
    clearIcon_(itemId) {
        let item = this.chose(itemId)
        if (item !== null) {
            item.clearIcon()
        }
    }

    /**
     * 把子元素合上
     * 
     * @param {any} itemId 子元素id
     * @memberof Accordion
     */
    close_item(itemId) {
        let item = this.chose(itemId)
        if (item !== null) {
            item.close()
        }
    }

    /**
     * 卸载事件
     * 
     * @param {any} eventId 事件id
     * @memberof Accordion
     */
    delEvent(eventId) {
        this.detachEvent(eventId)
    }

    /**
     * 去掉页脚
     * 
     * @memberof Accordion
     */
    delFooter() {
        this.detachFooter()
    }

    /**
     * 去掉页头
     * 
     * @memberof Accordion
     */
    delHeader() {
        this.detachHeader()
    }

    /**
     * 去掉顶部dhtmlxMenu 
     * 
     * @memberof Accordion
     */
    delMenu() {
        this.detachMenu()
    }

    /**
     * 去掉顶部dhtmlxRibbon 
     * 
     * @memberof Accordion
     */
    delRibbon() {
        this.detachRibbon()
    }

    /**
     * 清除掉底部状态栏
     * 
     * @memberof Accordion
     */
    delStatusBar() {
        this.detachStatusBar()
    }

    /**
     * 清除掉顶部工具栏
     * 
     * @memberof Accordion
     */
    delToolbar() {
        this.detachToolbar()
    }

    /**
     * 关闭元素可拖拽功能
     * 默认开启扩展模式
     * @param {boolean} [isMMode=true] 是否开启扩展模式
     * @memberof Accordion
     */
    openDND(isMMode = true) {
        this.enableMultiMode()
        this.enableDND()
    }

    /**
     * 开启元素分栏模式
     * 
     * @memberof Accordion
     */
    openMultiMode() {
        this.enableMultiMode()
    }

    /**
     * 获得所有子元素实例
     * 
     * @returns 
     * @memberof Accordion
     */
    items() {
        let result = []
        this.forEachItem((cell) => {
            result.push(cell)
        })
        return result
    }

    /**
     * 遍历所有子元素
     * 
     * @param {any} callBack 
     * @memberof Accordion
     */
    eachItem(callBack) {
        this.forEachItem(callBack)
    }

    /**
     * 返回组件顶部的dhtmlxMenu实例
     * 
     * @returns 
     * @memberof Accordion
     */
    getMenu() {
        let menuObj = this.getAttachedMenu()
        return menuObj
    }

    /**
     * 获得顶部的dhtmlxRibbon 实例
     * 
     * @returns 
     * @memberof Accordion
     */
    getRibbon() {
        let result = this.getAttachedRibbon()
        return result
    }

    /**
     * 获得底部状态栏对象
     * 
     * @returns 
     * @memberof Accordion
     */
    getStatusBar() {
        let result = this.getAttachedStatusBar()
        return result
    }

    /**
     * 获得dhtmlxToolbar 实例
     * 
     * @returns 
     * @memberof Accordion
     */
    getToolbar() {
        let result = this.getAttachedToolbar()
        return result
    }

    /**
     * 获得子元素的文本
     * 
     * @param {any} itemId 
     * @returns 
     * @memberof Accordion
     */
    getItemText(itemId) {
        let result = this.chose(itemId).getText()
        return result
    }

    /**
     * 获得所有子元素文本
     * 
     * @returns 
     * @memberof Accordion
     */
    itemTexts() {
        let result = []
        this.forEachItem((cell) => {
            result.push(cell.getText())
        })
        return result
    }

    /**
     * 隐藏子元素
     * 
     * @param {any} itemId 
     * @memberof Accordion
     */
    hideItem_(itemId) {
        this.chose(itemId).hide()
        this.config.hideSet.add(itemId)
    }

    showItem(itemId) {
        this.chose(itemId).show()
        this.config.hideSet.delete(itemId)
    }

    /**
     * 子元素隐藏或者显示的开关函数
     * 
     * @param {any} itemId 
     * @memberof Accordion
     */
    toggleItem(itemId) {
        if (this.config.hideSet.has(itemId)) {
            this.showItem(itemId)
        } else {
            this.hide_Item(itemId)
        }
    }

    /**
     * 
     *隐藏顶部dhtmlxRibbon 对象 
     * @memberof Accordion
     */
    hideRibbon_() {
        this.hideRibbon()
    }

    /**
     * 隐藏底部状态栏
     * 
     * @memberof Accordion
     */
    hideStatusBar_() {
        this.hideStatusBar()
    }

    /**
     * 隐藏顶部dhtmlxToolbar 对象
     * 
     * @memberof Accordion
     */
    hideToolbar() {
        this.hideToolbar()
    }

    /**
     * 子元素是否处于展开状态
     * 
     * @param {any} itemId 
     * @returns 
     * @memberof Accordion
     */
    isOpen(itemId) {
        let result = this.chose(itemId).isOpened()
        return result
    }

    /**
     * 子元素是否隐藏
     * 
     * @param {any} itemId 
     * @returns 
     * @memberof Accordion
     */
    isItemHidden(itemId) {
        let result = this.chose(itemId).isVisible()
        return result
    }

    /**
     * 读取文档、json、xml等等
     * 
     * @param {any} data 
     * @param {any} callBack 
     * @memberof Accordion
     */
    loadFile(data, callBack) {
        this.loadStruct(data, callBack)
    }

    /**
     * 子元素移到最上面
     * 
     * @param {any} itemId 
     * @memberof Accordion
     */
    moveOnTop(itemId) {
        this.chose(itemId).moveOnTop()
    }

    /**
     * 展开此子元素
     * 
     * @param {any} itemId 
     * @memberof Accordion
     */
    openItem(itemId) {
        this.chose(itemId).open()
    }

    /**
     * 开启加载状态，菊花转
     * 
     * @memberof Accordion
     */
    openLoading() {
        this.progressOn()
    }

    /**
     * 结束加载状态，关闭菊花转
     * 
     * @memberof Accordion
     */
    endLoading() {
        this.progressOff()
    }

    /**
     * 删除某个子元素
     * 
     * @param {any} itemId 
     * @memberof Accordion
     */
    removeItem_(itemId) {
        this.removeItem(itemId)
    }

    /**
     * 给子元素设置icon
     * 
     * @param {any} itemId 
     * @param {any} iconPath 
     * @memberof Accordion
     */
    setIcon(itemId, iconPath) {
        this.chose(itemId).setIcon(iconPath)
    }

    /**
     * 设置icon的根目录
     * 
     * @param {any} path 
     * @memberof Accordion
     */
    setIconsPath_(path) {
        this.setIconsPath(path)
    }

    /**
     * 设置icon的字体类型
     * 
     * @param {any} fontName 
     * @memberof Accordion
     */
    setIconFont(fontName) {
        this.setIconset(fontName)
    }

    /**
     * 设置子元素的高度
     * 
     * @param {any} itemId 
     * @param {any} height 
     * @memberof Accordion
     */
    setItemHeight(itemId, height) {
        this.chose(itemId).setHeight(height)
    }

    /**
     * 设置子元素间的垂直偏移量
     * 
     * @param {any} dy 
     * @memberof Accordion
     */
    setItemDy(dy) {
        this.setOffset(dy)
    }

    /**
     * 设置margin
     * 
     * @param {any} conf 
     * @memberof Accordion
     */
    setMargin(conf) {
        this.setOffsets(conf)
    }

    /**
     * 当外部容器大小变化后调用此函数可自适应
     * 
     * @memberof Accordion
     */
    autoLayout() {
        this.setSizes()
    }

    /**
     * 设置主题
     * 
     * @param {any} skin 
     * @memberof Accordion
     */
    setTheme(skin) {
        this.setSkin(skin)
    }

    /**
     * 设置子元素的文字
     * 
     * @param {any} itemId 
     * @param {any} text 
     * @memberof Accordion
     */
    setText(itemId, text) {
        this.chose(itemId).setText(text)
    }

    /**
     * 显示顶部的dhtmlxMenu 对象
     * 
     * @memberof Accordion
     */
    showMenu_() {
        this.showMenu()
    }

    /**
     * 显示顶部dhtmlxRibbon 对象
     * 
     * @memberof Accordion
     */
    showRibbon_() {
        this.showRibbon()
    }

    /**
     * 显示底部状态栏
     * 
     * @memberof Accordion
     */
    showStatusBar_() {
        this.showStatusBar()
    }

    /**
     * 显示底部dhtmlxToolbar 对象
     * 
     * @memberof Accordion
     */
    showToolbar_() {
        this.showToolbar()
    }

    /**
     * 让自己消失
     * 
     * @memberof Accordion
     */
    delSelf() {
        this.unload()
    }

    /**
     * 子元素加入文档流
     * 
     * @param {any} itemId 
     * @memberof Accordion
     */
    dock_(itemId) {
        this.chose(itemId).dock()
    }

    /**
     * 子元素脱离文档流
     * 
     * @param {any} itemId 
     * @param {any} sizes 
     * @memberof Accordion
     */
    unDock_(itemId, sizes) {
        this.chose(itemId).undock(...sizes)
    }

    linkWindow() {
        this.dhxWins.attachViewportTo()
    }
}

module.exports = Accordion