/**
 *  Created by zhangshumeng on 2018/5/8
 */

import React, {Component} from 'react'

import {requestLiveDetail} from "../../../service/RequestLive";
import { Toast } from 'antd-mobile';

import 'antd-mobile/lib/toast/style/css';

import addFollow from '../../../images/live_detail_onekeyAttention@3x.png'
import {isiOS} from "../../../config/Tools";

const disclaimer = '本场路演所提供的内容（包括嘉宾分享的语音、提供的分享资料等）仅供学习使用，不构成对任何人的投资建议，接收人应依据个人情况自行判断是否采用本场路演所提供的信息并自行承担风险。\n本APP不担保任何投资及策略适合接收人，不构成给与接收人的私人咨询建议。\n 投研社不对任何人因使用本场路演所提供的任何内容所导致的直接或间接损失负任何责任。一切后果，投研社不承担任何法律责任。\n《证券期货投资者适当性管理办法》、《证券经营机构投资者适当性管理实施指引(试行)于2017年7月1日起正式实施。本场提供的所有分享内容版权归嘉宾及嘉宾所在机构所有，未经版权所有者书面授权，任何人不得更改或以任何形式转发、转载、发表、引用、传播或再次分发他人等任何形式侵犯本app发布的相关全部或部分材料、内容。'

class LiveDetail extends Component {

    constructor(props) {
        super(props)
        this.state = {
            object: {},
        }
    }

    componentWillMount() {
        document.title = '详情'

        this.requestLiveDetailData()

    }

    requestLiveDetailData() {
        Toast.loading('加载中...', 0)
        requestLiveDetail(this.props.match.params.accessToken, this.props.match.params.id, this.props.match.params.user_id)
            .then((object) => {
                Toast.hide()
                this.setState({
                    object: object,
                })
            })
            .catch((file) => {
                Toast.hide()
                Toast.fail('网络异常', 1.5);
            })
    }

    formater(desc) {
        var str = desc == null ? "" : desc
        if (str.indexOf('\n') > 0) {
            var arr = str.split('\n')
            if (arr.length) {
                return(
                    <div>{arr.map((content, index) => {
                        return(
                            <div key={index}>{content}</div>
                        );
                    })
                    }</div>
                );
            }
        } else {
            return(
                <div>{str}</div>
            );
        }
    }



    render() {

        return (
            <div className='liveDetail'>
                <div className='liveDetail_bg'>
                    <div className='liveDetail_section'>路演简介</div>

                    <div className='liveDetail_subject'>{
                        this.formater(this.state.object.description)
                    }</div>

                    <div className='liveDetail_section'>主讲人</div>

                    <UserInfoCell obj={this.state.object}/>
                    <div className='liveDetail_subject'>{this.formater(this.state.object.speakerInfo)}</div>

                    <div className='liveDetail_disclaimer'>免责声明</div>
                    <div className='liveDetail_disclaimer_text'>{this.formater(disclaimer)}</div>
                </div>
            </div>
        );
    }
}

export default LiveDetail;


class UserInfoCell extends Component {

    constructor(props) {
        super(props);
    }

    isAddFollow() {
        if (this.props.obj.host_gz_id == '0' && this.props.obj.host_group_gz_id == '0') {
            return <img src={addFollow} alt="" className='liveDetail_addFollowBtn' onClick={(e) => this.addFollowClick(e)}/>
        }
    }

    addFollowClick(e) {
        e.stopPropagation()
        alert('加关注')
        if (isiOS) {

        }
    }

    goPersonalCenter(e) {
        e.stopPropagation()
        alert('个人中心')
        if (isiOS) {

        }
    }

    goPersonalTeam(e) {
        e.stopPropagation()
        alert('组')
        if (isiOS) {

        }
    }

    render() {
        return(
            <div>
                <div className='liveDetail_userInfo'>
                    <img src={this.props.obj.head_img} alt="" className='liveDetail_userIcon' onClick={(e) => this.goPersonalCenter(e)}/>
                    <div>
                        <div className='liveDetail_userName' onClick={(e) => this.goPersonalCenter(e)}>
                            <div className='liveDetail_user_nameLeft' >主持人</div>
                            <div className='liveDetail_user_nameRight'>{this.props.obj.name}</div>
                        </div>
                        <div className='liveDetail_userComeFrom' onClick={(e) => this.goPersonalTeam(e)}>
                            <div className='liveDetail_user_nameLeft'>来自</div>
                            <div className='liveDetail_user_nameRight'>{this.props.obj.host_org_group_name == null ? '个人用户' : this.props.obj.host_org_group_name}</div>
                        </div>
                    </div>
                </div>
                {this.isAddFollow()}
            </div>
        );
    }
}