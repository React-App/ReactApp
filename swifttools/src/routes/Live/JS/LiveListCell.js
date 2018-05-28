/**
 *  Created by zhangshumeng on 2018/5/10
 */

import React, { Component } from 'react'
import {dateFormat, isiOS} from '../../../config/Tools'
import {requestLiveDetail} from "../../../service/RequestLive"

import '../Css/LiveList.css'

import default_label_live from '../../../images/Live/default_label_live_gif.gif'
import default_label_tomorrow from '../../../images/Live/default_label_tomorrow@3x.png'
import default_label_yestday from '../../../images/Live/default_label_yestday@3x.png'
import default_label_call from '../../../images/Live/default_label_call@3x.png'


/*
company_profile: "太平洋计算机"
dialing_number: null
easemob_group_id: "48255781109761"
entry_count: 186
free_money: 0
id: 3060
industry_name: "计算机"
is_free: 2
is_melive: 2
is_signup: 2
live_img_path: "http://web.touyanshe.com.cn/touyanshe_web/outImages/20180504/20180504_5230993.jpg"
live_type: "2"
maxAttendees: "500"
name: "太平洋计算机"
org_name: "太平洋"
p_post_name: null
post_name: null
room_number: null
room_pwd: null
score: 8.6
startTime: "2018-05-10 09:00:00"
state: 2
subject: "太平洋证券2018中期策略会分会场 | 智能制造，大国重器"
type: 2
up_down: 1
 */

class LiveListCell extends Component {

    constructor(props) {
        super(props);
    }

    liveState(content) {
        switch (content.state) {
            case 1:
                return <img src={default_label_tomorrow} alt="" className='liveList_cell_item_liveState'/>
            case 2:
                return <img src={default_label_live} alt="" className='liveList_cell_item_liveState_live'/>
            case 3:
                return <img src={default_label_yestday} alt="" className='liveList_cell_item_liveState'/>
            default:
                return <img src={default_label_tomorrow} alt="" className='liveList_cell_item_liveState'/>
        }

        if (content.dialing_number != null) {
            return <img src={default_label_call} alt="" className='liveList_cell_item_liveState'/>
        }
    }

    cellOnClick(e, index) {
        let model = this.props.dataArray[index]

        this.reuqestLiveDetailData(model.id)
            .then((success) => {

                switch (success.state) {
                    case 3:
                        if (isiOS) {
                            window.webkit.messageHandlers.LiveAudioBack.postMessage(success)
                        } else {

                        }
                        break;
                    case 1:
                    case 2:
                        switch (success.is_melive) {
                            case 1:
                                if (isiOS) {
                                    window.webkit.messageHandlers.LivePersonalRoom.postMessage(success)
                                } else {

                                }
                                break;
                            case 2:
                                if (isiOS) {
                                    window.webkit.messageHandlers.LiveOtherPersonalRoom.postMessage(success)
                                } else {

                                }
                                break;
                            default:
                                console.log('错误的is_melive')
                                break
                        }
                        break;
                    default:
                        console.log('错误的state')
                        break;
                }
            })
            .catch((file) => {
                return false
            })
    }


    reuqestLiveDetailData = function (dataId = '') {
        const _this = this
        return new Promise(function (successComplete, fileComplete) {
            requestLiveDetail(_this.props.accessToken, dataId, _this.props.user_id)
                .then((success) => {
                    successComplete(success)
                })
                .catch((file) => {
                    console('请求失败：' + file)
                })
        })
    }

    render() {
        return(
            <div className='liveList_bg'>
                <div className='liveList_cell'>{
                    this.props.dataArray.map((content, index) => {
                        return(
                            <div className='liveList_cell_items' key={index}  onClick={(e) => this.cellOnClick(e, index)}>
                                <div className='liveList_cell_item'>
                                    <img src={content.live_img_path} alt="" className='liveList_cell_item_img'/>
                                    <div className='liveList_cell_item_statsBg'>
                                        {this.liveState(content)}
                                        <span className='liveList_cell_item_entryCount'>{content.entry_count}人</span>
                                    </div>
                                    <div className='liveList_cell_item_sub'>{content.subject}</div>
                                    <div className='liveList_cell_item_bottom'>
                                        <span className='liveList_cell_item_bottom_org'>{content.company_profile}</span>
                                        <span className='liveList_cell_item_bottom_time'>{dateFormat(content.startTime)}</span>
                                    </div>
                                </div>
                            </div>
                        );
                    })
                }</div>
            </div>
        );
    }
}

export default LiveListCell;