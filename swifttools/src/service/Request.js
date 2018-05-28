/**
 *  Created by zhangshumeng on 2018/5/8
 */

import React, { Component } from 'react'

import 'whatwg-fetch'

/**
 * 真正的请求
 * @param url 请求地址
 * @param options 请求参数
 * @param method 请求方式
 */
Request = function(url, formData, method = 'GET') {

    const searchStr = obj2String(formData)
    let initObj = {}
    if (method === 'GET') { // 如果是GET请求，拼接url
        url += '?' + searchStr
        initObj = {
            method: method,
        }
    } else {
        initObj = {
            method: method,
            headers: new Headers({
                'Accept': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded'
            }),
            body: searchStr
        }
    }

    console.log("ReuqestURL: " + url)
    console.log("Parameter: " + searchStr)

    return new Promise(function (resolve, reject) {
        fetch(url, initObj)
            .then((response) => {
                if (response.ok) {
                    var responseJson = response.json()
                    return responseJson;
                } else {
                    reject({status:response.status})
                }
            })
            .then((response) => {

                resolve(response);
            })
            .catch((err)=> {
                reject({status:-1});
            })
    })
}

/**
 * 将对象转成 a=1&b=2的形式
 * @param obj 对象
 */
function obj2String(obj, arr = [], idx = 0) {
    for (let item in obj) {
        arr[idx++] = [item, obj[item]]
    }
    return new URLSearchParams(arr).toString()
}

export default Request;