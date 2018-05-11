const fs = require("fs")
const chokidar = require('chokidar')
const exec = require('child_process').execFile

var log = console.log.bind(console)
const commandFile = '1.cmd'

var callWebpack = function () {
    log('文件变化开始')
    exec(commandFile, function (error, data) {
        log('是否存在异常？', error)
        log('数据是什么？', data)
    })
}

var createWatcher = function () {
    let result = chokidar.watch('./src', {
        ignored: /[\/\\]\./, persistent: true
    })
    return result
}

var whenFileChange = function (path) {
    log('文件变化：', path)
    callWebpack()
}

var whenFileAdd = function (path) {
    log('文件添加触发，', path)
    callWebpack()
}

var whenFileDel = function (path) {
    log('文件删除触发，', path)
    callWebpack()
}

var whenError = function (error) {
    log('监听异常：', error)
    // callWebpack()
}

var eventDict = function () {
    let result = {
        change: whenFileChange,
        // add: whenFileAdd,
        unlink: whenFileDel,
        error: whenError,
    }
    return result
}

var registerWatcherEvent = function (watcher) {
    let eventTags = eventDict()
    let keys = Object.keys(eventTags)
    for (let i = 0; i < keys.length; i++) {
        let key = keys[i]
        watcher.on(key, eventTags[key])
    }
}

var main_ = function () {
    var watcher = createWatcher()
    registerWatcherEvent(watcher)
}

main_()