import React, {Component} from 'react'

import './Personal.css'

import appIcon from '../../images/logo_icon_my_bg copy@3x.png'
import  mailboxIcon from  '../../images/mailbox_icon@3x.png'

class PersonalAboutme extends Component {

    componentWillMount() {
        document.title = "关于我们"
    }

    render() {
        return(
            <div className='personal_about_div'>
                <img src={appIcon} className='personal_about_img'/>
                <div className='personal_about_version'>V 4.0.5</div>
                <div className='personal_about_slogan'>你就是你的个人品牌</div>

                <div className='personal_about_bottom'>
                    <div className='personal_about_bottom_super'>
                        <img src={mailboxIcon} className='personal_about_bottom_img'/>
                        <div className='personal_about_bottom_emial'>联系我们：发送邮箱至service@linkedshow.com</div>
                    </div>
                    <div className='personal_about_bottom_companyInfo'>Copyright © 2017 上海鸿人.All Rights Reserved</div>

                </div>
            </div>
        );
    }

}

export default PersonalAboutme;