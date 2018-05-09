class DDocument {
    constructor() {
        this.dict = {}
    }
    /**
     * 查找dhtmlx元素
     * 
     * @param {any} id 
     * @returns 
     * @memberof DDocument
     */
    querySelector(identification) {
        let result = this.dict[identification]
        return result
    }

    /**
     * 判断是否是列表id
     * 
     * @param {any} parameter 
     * @returns 
     * @memberof DDocument
     */
    isList(parameter) {
        if (parameter instanceof Array) {
            return true
        } else {
            return false
        }
    }

    /**
     * 注入dhtmlx元素
     * 
     * @param {any} identification 元素标识(id，idList)
     * @param {any} element 元素实例
     * @memberof DDocument
     */
    injectionElement(identification, element) {
        if (this.isList(identification)) {
            identification.forEach(id => {
                this.dict[id] = element
            })
        } else {
            this.dict[identification] = element
        }
    }
}

const D$ = new DDocument()
module.exports = D$