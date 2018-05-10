const { analysisParameterToId } = require('./share')

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
        let domObj = document.querySelector(identification)
        let id = domObj.id
        let result = this.dict[id]
        return result
    }

    /**
     * 注入dhtmlx元素
     * 
     * @param {any} identification 元素标识(id，idList)
     * @param {any} element 元素实例
     * @memberof DDocument
     */
    injectionElement(identification, element) {
        let parentIds = analysisParameterToId(identification)
        parentIds = (parentIds instanceof Array) ? parentIds : [parentIds]
        parentIds.forEach(id => {
            this.dict[id] = element
        })
    }
}

const D$ = new DDocument()
module.exports = D$