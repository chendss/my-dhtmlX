/**
 * 解析props,解析完成后回调
 * 
 * @param {any} props 
 * @param {any} callBack 
 */
export const analysisProps = function (props, callBack) {
    let parent = []
    props = props instanceof Array ? props : [props]
    console.log(props)
    props.forEach(identification => {
        let domObj = document.querySelector(identification)
        parent.push(domObj)
    })
    callBack(parent)
}


export const structuralType = function (prop) {
    let result = ''
    let typeIdent = prop.slice(0, 1)
    if (typeIdent==='.'){
        result = ''
        // 根据传入的参数获得dom对象，如果有id则使用id，如果没有则随机生成一个，并且不能重复
    }
}