/**
 *  Created by zhangshumeng on 2018/5/14
 */

import React, {Component} from 'react'

import '../Css/InterestPersonalCell.css'

import defaultUserIcon from '../../../images/Default/defaut_avatar@3x.png'

/*
  dataSource: 数据源
  isAnalyst: 是否是分析师cell
 */

/*
company_profile: "扬程投资"
frist_pinyin: "FWC"
gz_id: 0
head_img: "http://api.touyanshe.com.cn/touyanshe_api/outImages/20180122/20180122_2252801.png"
industry_name: null
mobile: "13808864966"
name: "冯伟成"
org_name: null
p_post_name: "合伙人"
post_name: null
type: "2"
user_id: 142812
 */

class InterestPersonalCell extends Component {

    companyProfileHandler(companyProfile) {
        var com = !companyProfile ? '投研社' : companyProfile
        if (com.length > 4) {
            com = com.substring(0, 4)
        }
        return com;
    }

    is_analyst(content, index) {
        if (this.props.isAnalyst) {
            return(
                <div key={index} className='interestPersonalCell_bg_item analystHeight'>
                    <img src={!content['head_img'] ? defaultUserIcon : content['head_img']} alt="" className='interestPersonalCell_bg_item_img'/>
                    <div className='interestPersonalCell_bg_item_name'>{!content['name'] ? '投研社' : content['name']}</div>
                    <div className='interestPersonalCell_bg_item_org'>{this.companyProfileHandler(content['company_profile'])}</div>
                </div>
            );
        } else {
            return(
                <div key={index} className='interestPersonalCell_bg_item height'>
                    <img src={!content['head_img'] ? defaultUserIcon : content['head_img']} alt="" className='interestPersonalCell_bg_item_img'/>
                    <div className='interestPersonalCell_bg_item_name'>{!content['name'] ? '投研社' : content['name']}</div>
                </div>
            );
        }
    }

    render() {
        var data = []
        data = !this.props.dataSource ? [] : this.props.dataSource
        return (
            <div className='interestPersonalCell'>
                <div className='interestPersonalCell_bg'>{
                    data.map((content, index) => {
                        return(
                            this.is_analyst(content, index)
                        );
                    })
                }</div>
            </div>
        );
    }
}

export default InterestPersonalCell;