/**
 *  Created by zhangshumeng on 2018/5/11
 */

import React, {Component} from 'react'

import { requestPersonalCenterDetail } from '../../../service/RequestPersonal'
import { requestInterestPersonal, requestAnalystList } from '../../../service/RequestHome'
import PersonalCell from '../../Public/JS/PersonalCell'
import BehaviorCell from '../../Public/JS/BehaviorCell'
import SectionView from '../../Public/JS/SectionView'
import InterestPersonalCell from '../../Public/JS/InterestPersonalCell'

import '../Css/Connection.css'

import rightRenew from '../../../images/Default/default_arrow_renew@3x.png'


class Connection extends Component {

    constructor(props) {
        super(props);
        this.state = {
            personalData: [],
            interestPersonalData: [],
            analystData: [],
        }
    }

    componentWillMount() {
        document.title = '人脉'
        this.requestCenterDetailData()
        this.requestInterestPersonalData()
        this.requestAnalystData()

    }

    requestCenterDetailData() {
        requestPersonalCenterDetail(this.props.match.params.accessToken, this.props.match.params.user_id)
            .then((success) => {
                this.setState({
                    personalData: success,
                })
            })
            .catch((file) => {
                console.log('请求失败：' + file)
            })
    }

    requestInterestPersonalData() {
        requestInterestPersonal(this.props.match.params.accessToken, this.props.match.params.user_id)
            .then((success) => {
                this.setState({
                    interestPersonalData: success,
                })
            })
            .catch((file) => {
                console.log('请求失败：' + file)
            })
    }

    requestAnalystData() {
        requestAnalystList(this.props.match.params.accessToken, this.props.match.params.user_id, '1')
            .then((success) => {
                this.setState({
                    analystData: success,
                })
            })
            .catch((file) => {
                console.log('请求失败：' + file)
            })
    }

    render() {
        return (
            <div>
                <PersonalCell object={this.state.personalData} />
                <BehaviorCell object={this.state.personalData} />

                <SectionView leftTitle={'可能感兴趣的人'} rightImg={rightRenew} sectionCallback={(e) => {
                    this.requestInterestPersonalData()
                }}/>
                <div className='connection_interestPersonalCell'>
                    <InterestPersonalCell dataSource={this.state.interestPersonalData}/>
                </div>

                <SectionView leftTitle={'分析师'} sectionCallback={(e) => {
                    console.log('分析师')
                }}/>
                <div className='connection_interestPersonalCell'>
                    <InterestPersonalCell dataSource={this.state.analystData} isAnalyst={true} />
                </div>
            </div>
        );
    }
}

export default Connection;