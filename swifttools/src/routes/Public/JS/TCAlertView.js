/**
 * Created by WXW on 2018/4/25.
 */
import React from 'react'

import '../PublicComponents/PublishComponent.css'

export default class TCAlertView extends React.Component {
    constructor(props) {
        super(props);
    };



    clickSelected(title) {
        this.props.selected_callback(title)
    }

    handleMessage(message){
        if(message.indexOf("#") > 0 ){
            var splitArray = message.split("#");
            if(splitArray.length){
                return  <div>
                    {splitArray.map((content,index) => {
                        return <div className="alertview_whrite_message">
                            {content}
                            <br/>
                        </div>
                    })}
                </div>
            }
        }else {
            return <div className="alertview_whrite_message">
                {message}
            </div>
        }
    }

    handleOtherMessage(otherMessage){
        if(this.props.otherMessage.length > 0){
            if(otherMessage.indexOf("#") > 0 ){
                var splitArray = otherMessage.split("#");
                if(splitArray.length){
                    return  <div>
                        {splitArray.map((content,index) => {
                            return <div className="alertview_whrite_other_message">
                                {content}
                                <br/>
                            </div>
                        })}
                    </div>
                }
            }else {
                return <div className="alertview_whrite_other_message">
                    {otherMessage}
                </div>
            }
        }else {
            return''
        }
    }

    handleBottomBtn(btnTitles){
        if(this.props.btnTitles.length == 1){
           return <div className="alertview_whrite_bottom_btn_super">
                <div className="alertview_whrite_bottom_btn" onClick={this.clickSelected.bind(this, this.props.btnTitles[0])}>{this.props.btnTitles[0]}</div>
            </div>
        }else {
            return <div className="alertview_whrite_bottom_btn_super">
                <div className="alertview_whrite_bottom_btn_left" onClick={this.clickSelected.bind(this, this.props.btnTitles[0])}>{this.props.btnTitles[0]}</div>
                <div className="alertview_whrite_bottom_btn_right" onClick={this.clickSelected.bind(this, this.props.btnTitles[1])}>{this.props.btnTitles[1]}</div>
            </div>
        }
    }

    render() {
        return <div>
            <div className="alertview_black_bg">
                <div className="alertview_whrite_bg">
                    <div className="alertview_whrite_title_tip">提示</div>
                    {this.props.title.length ? <div className="alertview_whrite_title">{this.props.title}</div> :''}
                    {this.handleMessage(this.props.message)}
                    {this.handleOtherMessage(this.props.otherMessage)}
                    {this.handleBottomBtn(this.props.btnTitles)}
                </div>
            </div>
            </div>
    }
}

TCAlertView.propTypes = {
    /** 标题数组 */
    btnTitles: React.PropTypes.array.isRequired,
    /** 选中某个按钮回调*/
    selected_callback: React.PropTypes.func.isRequired,
    /**标题 若不需显示 该字段传空字符串即可*/
    title:React.PropTypes.string.isRequired,
    /**内容*/
    message:React.PropTypes.string.isRequired,
    /**其他内容 若不需显示 该字段传空字符串即可*/
    otherMessage:React.PropTypes.string.isRequired,
    /**是否显示提示框*/
    // isShow:React.PropTypes.bool.isRequired,
};