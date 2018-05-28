import React, {Component} from 'react'

import '../../config/Tools'
import './Personal.css'

import groupIcon from '../../images/Group@2x.png'
import {isiOS} from "../../config/Tools";

class PersonalRecommendReward extends Component {

    componentWillMount() {
        document.title = "推荐有奖"
    }

    rewardClick(e) {
        e.stopPropagation()
        if (isiOS) {
            // window.webkit.messageHandlers.RewardClick.postMessage("邀请好友")
        }
    }


    render() {
        return(
            <div className='personal_bg'>
                <img src={groupIcon} alt="" className='personal_rec_topImg'/>

                <div className='personal_rec_shareDetail_bg'>
                    <div className='personal_rec_shareDetail_bg_title'>分享链接邀请好友加入，每当您的1位好友注册且社交账号资料通过审核</div>
                    <div className='personal_rec_shareDetail_bg_reward'>可获得6.5元奖励</div>
                </div>

                <div className='personal_rec_rusult'>
                    <div className='personal_rec_rusult_reward'>
                        <span className='personal_rec_rusult_reward_success'>已成功邀请</span>
                        <span className='personal_rec_rusult_reward_count'> 100 </span>
                        <span className='personal_rec_rusult_reward_success'>人</span>
                    </div>

                    <div className='personal_rec_rusult_reward'>
                        <span className='personal_rec_rusult_reward_success'>已获得奖励</span>
                        <span className='personal_rec_rusult_reward_count'> 650 </span>
                        <span className='personal_rec_rusult_reward_success'>元</span>
                    </div>
                </div>

                <div className='personal_rec_reward'>
                    <div className='personal_rec_rewardStyle'>邀请好友方式</div>
                    <div className='personal_rec_rewardStyle_detail'>
                        1.点击页面下方“立即邀请好友”按钮，分享给您的好友，邀请其加入 <br/><br/>
                        2.在任务详情页面右上角，点击“分享”按钮，分享给您的好友，邀请其加入
                    </div>
                </div>

                <div className='personal_rec_rewardButton' onClick={(e) => this.rewardClick(e)}> 邀请好友 </div>

            </div>
        );
    }
}

export default PersonalRecommendReward;