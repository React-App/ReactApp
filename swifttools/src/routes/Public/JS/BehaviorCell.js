/**
 *  Created by zhangshumeng on 2018/5/14
 */

import React, { Component } from 'react'

import '../Css/BehaviorCell.css'

class BehaviorCell extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    componentWillMount() {

    }



    render() {
        let dataSource = [
            {'title' : '贡献值', 'count' : this.props.object.activity === null ? '0' : this.props.object.activity},
            {'title' : '粉丝', 'count' : this.props.object.fans_count === null ? '0' : this.props.object.fans_count},
            {'title' : '关注', 'count' : this.props.object.follow_count === null ? '0' : this.props.object.follow_count},
            ]
        return (
            <div className='behaviorCell'>
                {dataSource.map((content, index) => {
                    return(
                        <div key={index} className='behaviorCell_bg'>
                            <div className='behaviorCell_bg_count'>{content['count']}</div>
                            <div className='behaviorCell_bg_title'>{content['title']}</div>
                        </div>
                    );
                })}
            </div>
        );
    }
}

export default BehaviorCell;