/**
 *  Created by zhangshumeng on 2018/5/10
 */

export {
    isiOS,
    isAndroid,
    dateFormat,
}

let isiOS = function () {
    var u = navigator.userAgent,
        app = navigator.appVersion;
    return !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
}

let isAndroid = function () {
    var u = navigator.userAgent,
        app = navigator.appVersion;
    return u.indexOf('Android') > -1 || u.indexOf('Linux') > -1; //android终端或者uc浏览器
}

let dateFormat = function (date) {
    // "M+" : date.getMonth()+1,                 //月份
    // "d+" : date.getDate(),                    //日
    // "h+" : date.getHours(),                   //小时
    // "m+" : date.getMinutes(),                 //分
    // "s+" : date.getSeconds(),                 //秒
    // "q+" : Math.floor((date.getMonth()+3)/3), //季度
    // "S"  : date.getMilliseconds()             //毫秒

    if (date === null) {
        date = '2018-01-01 00:00:00'
    }

    date = date.replace(/-/g,"/");
    var da = new Date(date);

    let year = da.getFullYear()
    let month = da.getMonth() + 1
    let day = da.getDate()
    let hours = da.getHours()
    let minutes = da.getMinutes()
    let seconds = da.getSeconds()

    let formatDate = [month, day].map(formatNumber).join('/') + ' ' + [hours, minutes].map(formatNumber).join(':')
    return formatDate
}

function formatNumber(n) {
    n = n.toString()
    return n[1] ? n : '0' + n
}