import React, {Component} from 'react'
import {Router, Route} from 'react-router'
import createBrowserHistory from 'history/createBrowserHistory'

import App from './routes/App/App'
import LiveAudioBack from './routes/Live/JS/LiveAudioBack'
import Personal from './routes/Personal/Personal'
import AboutMe from './routes/Personal/PersonalAboutme'
import HelpCenter from './routes/Personal/PersonalHelpCenter'
import HelpCenterDetal from './routes/Personal/PersonalHelpCenterDetail'
import RecommendReward from './routes/Personal/PersonalRecommendReward'
import Detail from './routes/Personal/PersonalDetail'
import GoodsList from './routes/Personal/PersonalGoodsList'
import IntegralList from './routes/Personal/PersonalIntegralList'
import Auth from './routes/Personal/PersonalAuth'
import LiveDetail from './routes/Live/JS/LiveDetail'
import HotLiveList from './routes/Live/JS/LiveHotLiveList'
import RecLiveList from './routes/Live/JS/LiveRecLiveList'
import Connection from './routes/Home/JS/Connection'
import TYSPersonal from './routes/TYSPersonal/JS/TYSPersonal'

const history = createBrowserHistory()

class RouterRoot extends Component {
    render() {
        return(
            <Router history={history}>
                <div>
                    <Route exact path="/" component={App}/>
                    <Route path="/LiveAudioBack" component={LiveAudioBack}/>
                    {/* 个人中心 */}
                    <Route exact path="/Personal" component={Personal}/>
                    {/* 收入 */}
                    <Route path="/Personal/Detail" component={Detail}/>
                    {/* 物品库 */}
                    <Route path="/Personal/GoodsList" component={GoodsList}/>
                    {/* 积分 */}
                    <Route path="/Personal/IntegralList" component={IntegralList}/>
                    {/* 实名认证 */}
                    <Route path="/Personal/Auth" component={Auth}/>
                    {/* 关于我们 */}
                    <Route path="/Personal/Setting/AboutMe" component={AboutMe}/>
                    {/* 帮助中心 */}
                    <Route path="/Personal/HelpCenter" component={HelpCenter}/>
                    {/* 帮助中心 详情 */}
                    <Route path="/HelpCenterDetail/:title" component={HelpCenterDetal}/>
                    {/* 推荐有奖 */}
                    <Route path="/Personal/RecommendReward" component={RecommendReward}/>
                    {/* 直播详情 */}
                    <Route path="/Live/LiveDetail/:accessToken/:user_id/:id" component={LiveDetail}/>
                    {/* 查询热门直播列表 */}
                    <Route path="/Live/HotLiveList/:accessToken/:user_id" component={HotLiveList}/>
                    {/* 查询推荐直播列表 */}
                    <Route path="/Live/RecLiveList/:accessToken/:user_id" component={RecLiveList}/>
                    {/* 人脉 */}
                    <Route path="/Home/Connection/:accessToken/:user_id" component={Connection}/>
                    {/* tys 个人中心 */}
                    <Route path="/TYSPersonal/:accessToken/:user_id" component={TYSPersonal}/>
                </div>
            </Router>
        );
    }
}

export default RouterRoot;