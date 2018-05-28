/**
 *  Created by zhangshumeng on 2018/5/2
 */

import React, {Component} from 'react'

import Picker from 'iosselect/src/iosSelect'
import {options} from '../../config/Time'

import 'iosselect/src/iosSelect.css'
import './Personal.css'

import pullDownIcon from '../../images/pulldown_triangle_icon@2x.png'
import noDataIcon from '../../images/default_page_nodetail_icon@2x.png'
import commissionIcon from '../../images/income_icon_green@2x.png'
import rightArrowIcon from '../../images/Shape@2x.png'

const oneSeasons = [
    {
        id: '1001',
        value: '全部类型',
    },
    {
        id: '1002',
        value: '提现',
    },
    {
        id: '1003',
        value: '收入',
    },
    {
        id: '1004',
        value: '推荐奖励',
    },
];

var selectedTime = ''

class PersonalDetail extends Component {

    constructor(props) {
        super(props);
        this.state = {

            categoryName:'全部分类',
            categoryId: "1001",
            time:'全部时间',
            timeOneId: '全部时间',
            timeTwoid: '全部时间',
            isShowLoading:true,

            noData: true,

            dataSource: ['', '', '', '', '', '',],
        }
    }

    componentWillMount() {
        document.title = '收入明细'
    }

    categoryOnClick(e) {
        e.stopPropagation()
        var categoryNameSelect = new Picker(1,
            [oneSeasons],
            {
                title: '选择分类',
                itemHeight: 50,
                itemShowCount: 5,
                showAnimate: true,
                oneLevelId: this.state.categoryId,
                callback: function (selectOneObj) {
                    this.setState({
                        categoryName: selectOneObj['value'],
                        categoryId: selectOneObj['id']
                    });
                }.bind(this)
            });
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
                                <ContentCell></ContentCell>
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
                    <div className='personal_detail_balanceText'>我的余额(元)</div>
                    <div>
                        <div className='personal_detail_balance'>99.0</div>
                        <div className='personal_detail_putforward'>提现</div>
                    </div>

                    <div className='personal_detail_bottom'>

                        <span className='personal_detail_bottom_category' onClick={(e) => this.categoryOnClick(e)}>{this.state.categoryName}
                            <img src={pullDownIcon} alt="" className='personal_detail_bottom_dropImg'/>
                        </span>

                        <span className='personal_detail_bottom_time' onClick={(e) => this.timeOnClick(e)}>{this.state.time}
                            <img src={pullDownIcon} alt="" className='personal_detail_bottom_dropImg'/>
                        </span>

                    </div>

                </div>

                { this.contentHandler() }

            </div>
        );
    }
}

export default PersonalDetail;


class ContentCell extends Component {

    render() {
        return(
          <div>
              <div className='personal_detail_content_cell'>
                  <div className='personal_detail_content_cell_top'>
                      <img src={commissionIcon} alt="" className='personal_detail_content_cell_topImg'/>
                      <span className='personal_detail_content_cell_topText'>佣金收入</span>
                      <span className='personal_detail_content_cell_topTime'>2018-04-28 11:19:23</span>
                  </div>

                  <div className='personal_detail_content_cell_Middle'>
                      <div className='personal_detail_content_cell_MiddleLeftText'>+99.0</div>

                      <div className='FR'>
                          <div className='personal_detail_content_cell_MiddleRightTopText'>余额: 99.0元</div>
                          <div className='personal_detail_content_cell_MiddleRightBottomText'>1.3.1版本兼容</div>
                      </div>

                      <p className='clear'></p>
                  </div>
              </div>

              <div className='personal_detail_content_cell_bottom'>
                  <div className='personal_detail_content_cell_bottomLine'></div>
                  <span className="personal_detail_content_cell_bottomText">查看任务执行详情</span>
                  <img src={rightArrowIcon} alt="" className='personal_detail_content_cell_bottomRightImg'/>
              </div>
              <div className='personal_detail_content_cellSpacing'></div>
          </div>
        );
    }
}
