import React, {Component} from 'react'

import './Personal.css'
import '../../config/Tools'

import fillInIcon from '../../images/fillin_btn_mypage@2x.png'
import  userIcon from  '../../images/log_out_icon@2x.png'
import  realNameIcon from  '../../images/attestation_icon_mypage@2x.png'
import  bindThirdIcon from  '../../images/binding_icon_mypage@2x.png'
import  personalIcon from  '../../images/fillin_icon_mypage@2x.png'
import  addressIcon from  '../../images/fillinsite_icon_mypage@2x.png'
import  recomendIcon from  '../../images/award_icon_mypage@2x.png'
import  helpIcon from  '../../images/help_icon_mypage@2x.png'
import  settingIcon from  '../../images/set_icon_write@2x.png'
import  listArrowIcon from  '../../images/Shape@2x.png'
import {isiOS} from "../../config/Tools";

class Personal extends Component {

    constructor(props) {
        super(props);
        this.state = {
            cellTextArray1: ['实名认证','绑定社交平台账户','完善个人资料','地址管理'],
            cellImgArray1: [realNameIcon,bindThirdIcon,personalIcon,addressIcon],
            cellTextArray2: ['推荐有奖','帮助中心','设置'],
            cellImgArray2: [recomendIcon,helpIcon,settingIcon],
            data: {},
            isShowLoading: true,
            show_help_index: 1
        }
    }

    componentWillMount() {
        document.title = "我"
    }

    incomeOnClick(e) {
        e.stopPropagation()
        if (isiOS) {
            window.webkit.messageHandlers.Income.postMessage('收入')
        }
    }

    goodsListOnClick(e) {
        e.stopPropagation()
        if (isiOS) {
            window.webkit.messageHandlers.GoodsList.postMessage('物品库')
        }
    }

    integralList(e) {
        e.stopPropagation()
        if (isiOS) {
            window.webkit.messageHandlers.IntegralList.postMessage('积分')
        }
    }

    cellOnClick(e, content) {
        e.stopPropagation()

        switch (content) {
            case '实名认证' :
                if (isiOS) {
                    window.webkit.messageHandlers.Auth.postMessage('实名认证')
                }
                break;
            case '绑定社交平台账户' :
                if (isiOS) {
                    // window.webkit.messageHandlers.BindingSocialPlatform.postMessage('绑定社交平台账户')
                }
                break;
            case '完善个人资料' :
                if (isiOS) {
                    // window.webkit.messageHandlers.PerfectInformation.postMessage('完善个人资料')
                }
                break;
            case '地址管理' :
                if (isiOS) {
                    // window.webkit.messageHandlers.AddressManage.postMessage('地址管理')
                }
                break;
            case '推荐有奖' :
                if (isiOS) {
                    window.webkit.messageHandlers.Recommend.postMessage('推荐有奖')
                }
                break;
            case '帮助中心' :
                if (isiOS) {
                    window.webkit.messageHandlers.HelpCenter.postMessage('帮助中心')
                }
                break;
            case '设置' :
                if (isiOS) {
                    // window.webkit.messageHandlers.Setting.postMessage('设置')
                }
                break;
            default:
                console.log('')
                break;
        }
    }


    render() {
        return(
            <div>
                <div className='personal_bg'>
                    <div className='personal_userInfo'>
                        <img src={userIcon} alt="" className='personal_userInfoIcon'/>
                        <div className='personal_userInfo_right'>
                            <div className='personal_userInfo_right_superName'>
                                <div className='personal_userInfo_right_name'>18355335523</div>
                                <div className='personal_userInfo_right_grade'>V1</div>
                            </div>
                            <div className='personal_userInfo_right_superIntroduction'>
                                <span className='personal_userInfo_right_introduction'>请用一句话介绍一下自己吧</span>
                                <img src={fillInIcon} alt="" className='personal_userInfo_right_introductionIcon'/>
                            </div>
                        </div>
                    </div>

                    <div className='personal_userInfo_bottom'>
                        <div className='personal_userInfo_bottom_left' onClick={(e) => this.incomeOnClick(e)}>
                            <div className='personal_userInfo_bottom_topText'>¥0.0</div>
                            <div className='personal_userInfo_bottom_bottomText'>收入</div>
                        </div>
                        <div className='personal_userInfo_bottom_center' onClick={(e) => this.goodsListOnClick(e)}>
                            <div className='personal_userInfo_bottom_topText'>0</div>
                            <div className='personal_userInfo_bottom_bottomText'>物品库</div>
                        </div>

                        <div className='personal_userInfo_bottom_right' onClick={(e) => this.integralList(e)}>
                            <div className='personal_userInfo_bottom_topText'>0</div>
                            <div className='personal_userInfo_bottom_bottomText'>积分</div>
                        </div>
                    </div>

                </div>

                <div className='personal_super_cell'>
                    {
                        this.state.cellTextArray1.map((content, index) => {
                            return(
                                <div className={index == this.state.cellTextArray1.length - 1 ? 'personal_cellNoneLine' : 'personal_cell'} onClick={(e) => this.cellOnClick(e, content)}>
                                    <img src={this.state.cellImgArray1[index]} alt="" className='personal_cell_leftImg'/>
                                    <span className='personal_cell_leftText'>{content}</span>
                                    <img src={listArrowIcon} alt="" className='personal_cell_rightImg'/>
                                </div>
                            );
                        })
                    }
                </div>

                <div className='personal_super_cell'>
                    {
                        this.state.cellTextArray2.map((content, index) => {
                            return(
                                <div className={index == this.state.cellTextArray2.length - 1 ? 'personal_cellNoneLine' : 'personal_cell'} onClick={(e) => this.cellOnClick(e, content)}>
                                    <img src={this.state.cellImgArray2[index]} alt="" className='personal_cell_leftImg'/>
                                    <span className='personal_cell_leftText'>{content}</span>
                                    <img src={listArrowIcon} alt="" className='personal_cell_rightImg'/>
                                </div>
                            );
                        })
                    }
                </div>

            </div>
        );
    }
}

export default Personal;