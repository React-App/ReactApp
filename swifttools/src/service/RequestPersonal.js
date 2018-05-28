/**
 *  Created by zhangshumeng on 2018/5/14
 */

import React, { Component } from 'react'


import { POST } from './BaseRequest'

export {
    requestPersonalCenterDetail,
}

// 请求个人中心详情
let requestPersonalCenterDetail = function (accessToken = '', user_id = '') {
    let options = {
        accessToken,
        user_id,
        requestCode: '10002',
    }

    return new Promise(function (successComplete, fileComplete) {
        POST(options)
            .then((success) => {
                successComplete(success)
            })
            .catch((file) => {
                fileComplete(file)
            })
    })
}