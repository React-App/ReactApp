/**
 *  Created by zhangshumeng on 2018/8/30
 */

import React, {Component} from 'react'

import { requestTest } from '../../../service/TestRequest'

import { Toast } from 'antd-mobile';

class Test extends Component {

    constructor(props) {
        super(props);
        this.state = {
            personalData: {},
            pictureLists: [],
        }
    }

    componentWillMount() {
        document.title = "测试"
        this.requestCenterDetailData()
    }

    requestCenterDetailData() {
        Toast.loading('加载中...', 0)
        requestTest()
            .then((success) => {
                Toast.hide()
                console.log(success)
                this.setState({
                    personalData: success,
                    pictureLists: success.pictureList
                })
            })
            .catch((file) => {
                Toast.hide()
                Toast.fail('网络异常', 1.5);
            })
    }

    render() {
        return (
            <div>
                <div>{this.state.personalData.packageSweepName}</div>
                <div>{
                    this.state.pictureLists.map((content, index) => {
                        console.log(content)
                        return(
                            <div key={index}>
                                <img src={content.picUrl} alt=""/>
                            </div>
                        );
                    })
                }</div>
            </div>
        );
    }
}

export default Test;