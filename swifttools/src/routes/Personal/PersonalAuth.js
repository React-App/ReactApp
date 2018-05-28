/**
 *  Created by zhangshumeng on 2018/5/7
 */

import React, {Component} from 'react'
import { Tabs, WhiteSpace } from 'antd-mobile'
import { StickyContainer, Sticky } from 'react-sticky'
import 'antd-mobile/lib/tabs/style/css'

const tabs = [
    { title: 'First Tab' },
    { title: 'Second Tab' },
    { title: 'Third Tab' },
];

class PersonalAuth extends Component {



    componentWillMount() {
        document.title = '实名认证'
    }

    renderTabBar(props) {
        return (
            <Sticky>
                {({ style }) => <div style={{ ...style, zIndex: 1 }}><Tabs.DefaultTabBar {...props} /></div>}
            </Sticky>);
    }

    render() {

        return (
            <div>
                <WhiteSpace/>
                <StickyContainer>
                    <Tabs tabs={tabs}
                          initalPage={'t2'}
                          renderTabBar={this.renderTabBar}
                          // tabBarUnderlineStyle={}
                    >
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
                            Content of first tab
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
                            Content of second tab
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
                            Content of third tab
                        </div>
                    </Tabs>
                </StickyContainer>
                <WhiteSpace/>
            </div>
        );
    }
}

export default PersonalAuth;