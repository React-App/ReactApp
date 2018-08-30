/**
 *  Created by zhangshumeng on 2018/8/30
 */

import React, {Component} from 'react'


import { TestPost } from './BaseRequest'

export {
    requestTest,
}

// 请求个人中心详情
let requestTest = function () {
    let options = {
            salesId: 'YCJS2018082321125'
        }

    return new Promise(function (successComplete, fileComplete) {
        TestPost(options)
            .then((success) => {
                successComplete(success)
            })
            .catch((file) => {
                fileComplete(file)
            })
    })
}