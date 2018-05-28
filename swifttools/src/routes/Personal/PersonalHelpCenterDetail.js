import React, {Component} from 'react'
import ActivityIndicator from 'antd-mobile/lib/activity-indicator'

import 'antd-mobile/lib/activity-indicator/style'
import './Personal.css'

class PersonalHelpCenterDetail extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isShowLoading: this.props.location.state.detail_obj_data == null ? true : false,
            titlesArray: this.props.location.state.title_obj_data == null ? [] : this.props.location.state.title_obj_data,
            detailArray: this.props.location.state.detail_obj_data == null ? [] : this.props.location.state.detail_obj_data
        }
        document.title = this.state.navTitle
    }

    componentWillMount() {
        document.title = this.props.match.params.title
    }

    handelContent(desc) {
        if (desc.indexOf('#') > 0) {
            var splitArray = desc.split('#')

            if (splitArray.length) {
                return (
                    <div>{
                        splitArray.map((content, index) => {
                            return(
                                <div>{content} <br/></div>
                            );
                        })
                    }</div>
                );
            }
        } else  {
            return(
                <div>{desc}</div>
            );
        }
    }

    render() {

        if (this.state.isShowLoading) {
            return(
                <div>
                    <ActivityIndicator
                        toast
                        text = '加载中...'
                        animating={this.state.isShowLoading}
                    />
                </div>
            );
        }

        return(
            <div className='personal_helpCenter_detail_bg'>{
                this.state.titlesArray.map((content, index) => {
                    return(
                        <div className='personal_helpCenter_detail_row'>
                            <div className='personal_helpCenter_detail_question'>{content}</div>
                            <div className='personal_helpCenter_detail_answer'>{this.handelContent(this.state.detailArray[index])
                            }</div>
                        </div>
                    );
                })

            }</div>
        );
    }
}

export default PersonalHelpCenterDetail;







