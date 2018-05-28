/**
 *  Created by zhangshumeng on 2018/5/15
 */

import React, {Component} from 'react'

import PersonalCell from '../../Public/JS/PersonalCell'
import BehaviorCell from '../../Public/JS/BehaviorCell'
import TYSPersonalCell from './TYSPersonalCell'

import { requestPersonalCenterDetail } from '../../../service/RequestPersonal'
import { Toast } from 'antd-mobile';

import 'antd-mobile/lib/toast/style/css';
import '../Css/TYSPersonal.css'

import addfriends from '../../../images/TYSPersonal/personal_user_button_addfriends@3x.png'
import melive from '../../../images/TYSPersonal/personal_user_button_melive@3x.png'
import download from '../../../images/TYSPersonal/personal_user_dl@3x.png'
import collection from '../../../images/TYSPersonal/personal_user_fav@3x.png'
import prefer from '../../../images/TYSPersonal/personal_user_prefer@3x.png'
import about from '../../../images/TYSPersonal/personal_user_about@3x.png'
import fb from '../../../images/TYSPersonal/personal_user_fb@3x.png'
import setting from '../../../images/TYSPersonal/personal_user_settings@3x.png'
import {isiOS} from "../../../config/Tools";


const personalCellData = [
    {'leftImg' : download, 'leftTitle' : '我的下载', 'rightTitle' : ''},
    {'leftImg' : collection, 'leftTitle' : '我的收藏', 'rightTitle' : ''},
    {'leftImg' : prefer, 'leftTitle' : '偏好选择', 'rightTitle' : ''},
    {'leftImg' : about, 'leftTitle' : '关于我们', 'rightTitle' : ''},
    {'leftImg' : fb, 'leftTitle' : '意见反馈', 'rightTitle' : ''},
    {'leftImg' : setting, 'leftTitle' : '设置', 'rightTitle' : ''},
    ]


class TYSPersonal extends Component {

    constructor(props) {
        super(props);
        this.state = {
            personalData: [],
        }
    }

    componentWillMount() {
        document.title = ''
        this.requestCenterDetailData()
    }

    requestCenterDetailData() {
        Toast.loading('加载中...', 0)
        requestPersonalCenterDetail(this.props.match.params.accessToken, this.props.match.params.user_id)
            .then((success) => {
            Toast.hide()
                this.setState({
                    personalData: success,
                })
            })
            .catch((file) => {
                Toast.hide()
                Toast.fail('网络异常', 1.5);
            })
    }

    personalCellClickHandler(index) {
            if (isiOS) {
                window.webkit.messageHandlers.PersonalCell.postMessage(index)
            }
    }


    render() {
        return (
            <div className='personal'>

                <PersonalCell object={this.state.personalData} isliveAuthState={true}/>
                <div className='personalBehaviorCell'>
                    <BehaviorCell object={this.state.personalData} />
                </div>

                <div>
                    <img src={melive} alt="" className='personal_melive'/>
                    <img src={addfriends} alt="" className='personal_addfriends'/>
                </div>

                <TYSPersonalCell dataSource={personalCellData} personalCellCallback={(e, index) => {
                    this.personalCellClickHandler(index)
                }}/>
            </div>
        );
    }
}

export default TYSPersonal;