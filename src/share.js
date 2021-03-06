const { isArray } = require("util")

/**
 * 返回随机时间数
 * 
 * @returns 
 */
const timeStamp = function () {
    let timestamp = new Date().getTime()
    let r = parseInt(Math.random() * 1000) + 1
    let result = '' + r + timestamp
    return result
}

/**
 * 获得dom的id，如果id有值返回id，如果没有值随机赋予一个值
 * 
 * @param {any} domObj 
 * @returns 
 */
const domId = function (domObj) {
    let id = ''
    if (domObj.id === '') {
        let timestamp = timeStamp()
        domObj.setAttribute('id', timestamp)
        id = domObj.id
    } else {
        id = domObj.id
    }
    return id
}
/**
 * 如果参数是长度为一的数组，则返回第一项
 * 如果参数的长度不为1，则返回全部
 * @param {any} parentIds 
 * @returns 
 */
const variationParentIds = function (parentIds) {
    let result
    if (parentIds.length === 1) {
        result = parentIds[0]
    } else {
        result = parentIds
    }
    return result
}

/**
 * 判断参数是否是一个含有对象的数组
 * 
 * @param {any} params 
 * @returns 
 */
export const isObjectArray = function (params) {
    let result = false
    if (isArray(params)) {
        for (let i = 0; i < params.length; i++) {
            let param = params[i]
            if (isObject(param)) {
                result = true
                break
            }
        }
    }
    return result
}

/**
 * 判断是否是一个对象
 * 
 * @param {any} param 
 * @returns 
 */
export const isObject = function (param) {
    let result
    if (param instanceof Object) {
        if (!param.hasOwnProperty('length')) {
            result = true
        } else {
            result = false
        }
    } else {
        result = false
    }
    return result
}

/**
 * 解析参数,解析成一个id数组/id返回
 * 
 * @param {any} props 
 */
export const analysisParameterToId = function (props) {
    if (isObject(props)) {
        return props
    } else if (isArray(props) && isObjectArray(props)) {
        return props
    } else {
        let parentIds = [], result
        props = (props instanceof Array) ? props : [props]
        props.forEach(identification => {
            let domObj = document.querySelector(identification)
            let id = domId(domObj)
            parentIds.push(domObj.id)
        })
        result = variationParentIds(parentIds)
        return result
    }
}