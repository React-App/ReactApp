/**
 *  Created by zhangshumeng on 2018/5/8
 */

import React, {Component} from 'react'

import { Request, Request1 } from './Request/Request'

import './Request/Request'

let baseUrl = 'http://api.touyanshe.com.cn/touyanshe_api/s/api'
let baseUrl1 = 'https://test.mis.ubye.cn/m/share/sweepOrder'

export {
    POST,
    TestPost
}

let POST = function(options) {

    options['version'] = '4.0.5'
    options['deviceType'] = '3'

    console.log(options)

    return new Promise(function (success, file) {

        Request(baseUrl, options,'POST')
            .then((response) => {

                if (response['msg'] != '成功' && response['statusCode'] != '00000') {
                    file({status:-1})
                    return
                }

                success(response['object'])
            })
            .catch((error) => {
                file(error)
            })
    })
}

let TestPost = function(options) {

    return new Promise(function (success, file) {

        Request1(baseUrl1, options, 'POST')
            .then((response) => {

                if (response['code'] != '2000') {
                    file({status:-1})
                    return
                }
                console.log(response)
                success(response['result'])
            })
            .catch((error) => {
                file(error)
            })
    })
}


