/**
 *  Created by zhangshumeng on 2018/5/7
 */

import React, {Component} from 'react'

import Picker from 'iosselect/src/iosSelect'
import {options} from '../../config/Time'

import './Personal.css'
import 'iosselect/src/iosSelect.css'

import pullDownIcon from '../../images/pulldown_triangle_icon@2x.png'
import noDataIcon from '../../images/default_page_nodetail_icon@2x.png'

class PersonalIntegralList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            time:'全部时间',
            timeOneId: '全部时间',
            timeTwoid: '全部时间',
            noData: false,
        }
    }

    componentWillMount() {
        document.title = '积分明细'
    }

    timeOnClick(e) {
        e.stopPropagation()
        var timeSelect = new Picker(
            2,
            options(),
            {
                title: '选择时间',
                itemHeight: 50,
                itemShowCount: 5,
                showAnimate: true,
                relation: [1],
                oneLevelId: this.state.timeOneId,
                twoLevelId: this.state.timeTwoid,
                callback: function (selectOneObj, selectTwoObj) {
                    console.log(selectOneObj['value'])
                    this.setState({

                        time: selectOneObj['value'] == '全部时间' ? selectOneObj['value'] : selectOneObj['value'] + selectTwoObj['value'],
                        timeOneId: selectOneObj['id'],
                        timeTwoid: selectTwoObj['id']
                    })
                }.bind(this)

            })
    };

    contentHandler() {
        return(
            <div>{
                this.state.noData ?
                    <div className='personal_detail_content_cellBg'>{
                        this.state.dataSource.map((item) => {
                            return(
                                <div></div>
                            );
                        })
                    }</div>
                    :
                    <div className='personal_detail_content_noData'>
                        <img src={noDataIcon} alt="" className='personal_detail_content_noDataImg'/>
                        <div className='personal_detail_content_noDataText'>暂无明细记录</div>
                    </div>
            }</div>
        );
    }


    render() {
        return (
            <div>
                <div className='personal_detail_bg'>
                    <div className='personal_detail_balanceText'>我的积分</div>
                    <div className='personal_detail_balance'>15</div>

                    <div className='personal_detail_bottom'>
                        <span className='personal_detail_bottom_category' onClick={(e) => this.timeOnClick(e)}>{this.state.time}
                            <img src={pullDownIcon} alt="" className='personal_detail_bottom_dropImg'/>
                        </span>
                    </div>
                </div>
                {this.contentHandler()}
            </div>
        );
    }
}

export default PersonalIntegralList;