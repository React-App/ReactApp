/**
 *  Created by zhangshumeng on 2018/5/15
 */

import React, {Component} from 'react'

import '../Css/TYSPersonalCell.css'

import setting from '../../../images/TYSPersonal/personal_user_settings@3x.png'
import rightArrow from '../../../images/Default/default_arrow_right@3x.png'


/*
    dataSource: 数据源
    personalCellCallback: 点击事件回调
 */

class TYSPersonalCell extends Component {

    constructor(props) {
        super(props);
    }

    componentWillMount() {

    }

    personalCellClick(e, index) {
        e.stopPropagation();
        if (this.props.personalCellCallback) {
            this.props.personalCellCallback(e, index)
        }
    }

    render() {
        var data = []
        data = !this.props.dataSource ? [] : this.props.dataSource
        return (
            <div>
                {data.map((content, index) => {
                    return(
                        <div key={index} onClick={(e) => {this.personalCellClick(e, index)}}>
                            <div className='tysPersonalCell_bg'>
                                <img src={content['leftImg']} alt="" className='tysPersonalCell_bg_leftImg'/>
                                <div className='tysPersonalCell_bg_leftTitle'>{content['leftTitle']}</div>
                            </div>
                            <div className='tysPersonalCell_bg_rightBG'>
                                <img src={rightArrow} alt="" className='tysPersonalCell_bg_rightImg'/>
                                <div className='tysPersonalCell_bg_rightTitle'> </div>
                            </div>
                            <div className='tysPersonalCell_bg_bottomLine'> </div>
                        </div>
                    );
                })}
            </div>
        );
    }
}

export default TYSPersonalCell;