/**
 *  Created by zhangshumeng on 2018/5/11
 */

import React, {Component} from 'react'

import LiveListCell from './LiveListCell'
import { requestLiveRecLiveList } from '../../../service/RequestLive'

import ReactPullLoad,{ STATS } from 'react-pullload'
import 'react-pullload/dist/ReactPullLoad.css'

var page = 1;

class LiveRecLiveList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dataSource: [],
            dataArray: [],
            action: STATS.init,
        }
    }

    componentWillMount() {
        document.title = '推荐'
        this.requestLiveRecLiveListData()
    }

    requestLiveRecLiveListData() {
        requestLiveRecLiveList(this.props.match.params.accessToken, this.props.match.params.user_id, page)
            .then((success) => {
                if (page === 1) {
                    this.setState({
                        dataSource: [],
                        dataArray: []
                    })
                }

                success.map((content, index) => {
                    this.state.dataArray.push(content)
                })

                this.setState({
                    dataSource: this.state.dataArray,
                    action: page === 1 ? STATS.refreshed : STATS.reset
                })
            })
            .catch((file) => {
                console.log('请求失败：' + file)
                this.setState({
                    action: page === 1 ? STATS.refreshed : STATS.reset
                })
            })
        if (page === 1) {
            this.setState({
                action: STATS.refreshing
            })
        } else {
            this.setState({
                action: STATS.loading
            })
        }
    }

    handleAction = (action) => {
        if(action === this.state.action){
            return false
        }

        if(action === STATS.refreshing){//刷新
            page = 1
            this.requestLiveRecLiveListData()
        } else if(action === STATS.loading){//加载更多
            page++
            this.requestLiveRecLiveListData()
        } else{
            //DO NOT modify below code
            this.setState({
                action: action
            })
        }
    }


    render() {
        return (
            <div>
                <ReactPullLoad
                    action={this.state.action}
                    handleAction={this.handleAction}

                    distanceBottom={10}
                    downEnough={100}
                >
                    <LiveListCell
                        dataArray={this.state.dataSource}
                        accessToken={this.props.match.params.accessToken}
                        user_id={this.props.match.params.user_id}
                    />
                </ReactPullLoad>
            </div>
        );
    }
}

export default LiveRecLiveList;