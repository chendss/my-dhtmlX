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
 * 解析props,解析完成后回调
 * 
 * @param {any} props 
 * @param {any} callBack 
 */
export const analysisProps = function (props, callBack) {
    let parentIds = []
    props = props instanceof Array ? props : [props]
    console.log(props)
    props.forEach(identification => {
        let domObj = document.querySelector(identification)
        let id = domId(domObj)
        parentIds.push(domObj.id)
    })
    callBack(parentIds)
}


export const structuralType = function (prop) {
    let result = ''
    let typeIdent = prop.slice(0, 1)
    if (typeIdent === '.') {
        result = ''
        // 根据传入的参数获得dom对象，如果有id则使用id，如果没有则随机生成一个，并且不能重复
    }
}