/**
 *  Created by zhangshumeng on 2018/5/8
 */

import React, { Component } from 'react'

import { POST } from './BaseRequest'

export {
    requestLiveHotLiveList,
    requestLiveRecLiveList,
    requestLiveDetail,
}

// 查询热门直播列表
let requestLiveHotLiveList = function (accessToken = '', user_id = '', page = '1') {
    let options = {
        accessToken,
        user_id,
        page,
        requestCode: '80003',
        limit: '10',
        q_t: '2',
        is_hot: '1'
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

// 查询推荐直播列表
let requestLiveRecLiveList = function (accessToken = '', user_id = '', page = '1') {
    let options = {
        accessToken,
        user_id,
        page,
        requestCode: '80003',
        limit: '10',
        q_t: '2',
        is_rec: '1'
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

// 直播详情
let requestLiveDetail = function(accessToken = '', id = '', user_id = '') {

    let options = {
        accessToken,
        id,
        user_id,
        requestCode: '80005'
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
