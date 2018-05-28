/**
 *  Created by zhangshumeng on 2018/5/14
 */

import React, { Component } from 'react'

import { POST } from './BaseRequest'

export {
    requestInterestPersonal,
    requestAnalystList,
}

// 请求可能感兴趣的人
let requestInterestPersonal = function (accessToken = '', login_user_id = '') {
    let options = {
        accessToken,
        login_user_id,
        requestCode: 'V219001',
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

// 请求分析师列表
let requestAnalystList = function (accessToken = '', login_user_id = '', page = '1') {
    let options = {
        accessToken,
        login_user_id,
        page,
        limit: '10',
        requestCode: 'V219002',
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
