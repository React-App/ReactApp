/**
 *  Created by zhangshumeng on 2018/5/4
 */

let currentDate = new Date(); // 获取系统当前时间
let currentYear = currentDate.getFullYear(); // 获取当前年份
let currentMonth = currentDate.getMonth(); // 获取当前月份

export default  {
    options
}

export const handlerTime = function (year) {
    var monthArray = []

    if (year == currentYear) {
        for (let i = 0; i <= currentMonth; i++) {
            monthArray.push({
                'id': i + 1 + '月',
                'value': i + 1 + '月',
                'parentId': year + '年'
            })
        }
    } else if (year == 2017) {
        for (let i = 10; i < 12; i++) {
            monthArray.push({
                'id': i + 1 + '月',
                'value': i + 1 + '月',
                'parentId': year + '年'
            })
        }
    } else {
        for (let  i = 0 ; i < 12; i++){
            monthArray.push({
                'id': i + 1 + '月',
                'value': i + 1 + '月',
                'parentId': year + '年'
            })
        }
    }
    return monthArray;
}

export const options = function () {
    var array = [];
    var yearArr = [];
    var monthArr = [];

    yearArr.push({
        'id': '全部时间',
        'value': '全部时间',
        'parentId': '全部时间'
    })
    monthArr.push({
        'id': '全部时间',
        'value': '全部时间',
        'parentId': '全部时间'
    })
    for (let i = 2017 ; i <= currentYear; i++){
        yearArr.push({
            'id': i + '年',
            'value': i + '年',
            'parentId': '0'
        })

        for (let j = 0; j < handlerTime(i).length; j++) {
            let value = handlerTime(i)[j]
            monthArr.push(value)
        }
    }
    array.push(yearArr,monthArr)
    return array;
}