import React, {Component} from 'react'

import { Link } from 'react-router-dom'

import './Personal.css'

import rowRightImg from '../../images/Shape@2x.png'

// 提现question数组
let withdrawTitleArray = ['1.满多少元支持提现？','2.提现需要实名吗？','3.提现可提到哪呢？','4.提交提现申请后多久可以到账？','5.为什么提现被拒绝？'];

// 注册question数组
let  registerTitleArray = ['1.如何推荐好友获得奖励？','2.推荐的好友已注册成功，为什么没有收到奖励？ ','3.推荐好友的奖励在哪可看到？','4.推荐好友的奖励可提现吗？'];

// 任务question数组
let  taskTitleArray     = ['1.参与任务的要求？','2.什么时候可以参与任务？','3.任务提交了，为什么被退回未完成？我还可以再提交吗？','4.任务提交了，为什么还未返佣金？']

// 任务领取question数组
let  getTaskTitleArray  = ['1.有些任务可以领样品，不领可以参与任务吗？', '2.任务中领取样品都需要交纳押金才能领取吗？', '3.任务中领取的样品什么时候发货？','4.领样押金什么时候退还？']

// 实名认证question数组
let realNameTitleArray  = ['1.为什么要进行实名认证？', '2.实名认证为什么失败了？', '3.实名认证成功后还能更改吗？']

// 社交平台question数组
let thirdBindTitleArray = ['1.实名认证成功后还能更改吗？','2.为什么绑社交平台账号后必须要提交资料呢? ','3.社交平台账号资料提交后为什么是资料审核中？']

// 提现answer数组
let withdrawDeatilsArray = ['满100元可申请提现，申请金额需按照100元为单位','为了确保提现到的支付宝账号和当前账号信息一致，申请提现前请先进行实名制认证','(1).目前仅支持提现至支付宝账号#(2).必须保证提现到的支付宝账号和当前用户的实名制信息一致','(1).您提交的提现申请平台会统一在每周一进行处理，如遇节假日处理时间往后顺延#(2).提现未通过之前，您的提现金额会一致显示“提现中”状态','(1).若支付宝账号填写错误，不能进行提现#(2).提现到的支付宝账号未进行实名制认证，无法保证领showAPP中的实名信息和支付宝中实名信息是否一致，不能进行提现#(3).提现到的支付宝账号和领showAPP中的实名信息不一致，不能进行提现']

// 注册answer数组
let registerDeatilsArray = ['(1).在个人中心-推荐有奖页面中，点击“邀请好友”按钮，分享给您的好友，邀请其加入#(2).在任务详情页面右上角，点击“分享”按钮，分享给您的好友，邀请其加入','推荐的好友完成注册，且需要参与并完成一个任务后，推荐者才可获得奖励','(1).推荐的奖励会直接转至您账户的收入中#(2).在收入明细中可查看是哪位好友帮您获得的奖励','推荐获得的奖励可进行提现']

// 任务answer数组
let taskDeatilsArray = ['每个任务的领取要求会不一样，可在任务详情中查看明细，具体任务具体对待','(1).只能在任务参与时间范围内进行参与任务#(2).未到达该时间或已超过该时间都不能参与任务','(1).当您提交的任务未按照要求、时间等原因进行执行，任务将会被退回#(2).退回的任务可以在提交截止时间前重新进行执行并提交，超过时间后无法提交，提交截止时间可在任务详情中查看','平台会在任务提交截止时间之后的1-3个工作日内进行审核确认，审核通过者可获得任务佣金']

// 任务领取answer数组
let getTaskDeatilsArray = ['可以，样品是为了给KOL提供试用体验，加深对产品的理解，便于进行推广和宣传','(1).不是所有样品都需要交纳押金才能领取，具体以任务要求为准#(2).部分样品无需交纳押金可直接领取#(3).部分样品可使用芝麻信用分免押金领取，前提是芝麻信用分需达标（符合领样要求的分数），不达标则需交纳押金领取#(4).部分样品则需交纳押金才可领取','(1).领取样品后，平台会在1-3个工作日内进行确认后发货#(2).发货后会推送通知告知快递单号，可在个人中心-物品库中查看具体信息','(1).在对应任务执行并经平台确认完成后系统将自动退还押金，退还途径按原支付账户原路返回#(2).押金金额到账时间会根据您选择的支付方式所对应的银行或第三方支付的处理流程不同而有所差别']

// 实名认证answer数组
let realNameDeatilsArray = ['(1).便于提现，提现时为了保障资金安全，要求实名制认证#便于参与任务，部分任务会要求参与者需进行实名制认证#(2).经国家《网络安全法》要求，使用互联网服务账号需进行实名认证','请先确认以下信息项是否满足：#(1).上传的身份证照片需清晰、完整，不能有水印#(2).保证身份证照片中的姓名、身份证号等信息的一致性和正确性#(3).身份证为二代身份证且在有效期时间内#(4).身份证为二代身份证且在有效期时间内#以上信息项都满足，可在个人中心-实名认证页面查看具体原因或联系客服。','认证成功后不能再做更改，认证时请上传账户本人的身份证信息进行认证']

// 社交平台answer数组
let  thirdBindDeatilsArray = ['(1).需绑定社交平台账号才能领取任务#(2).提交任务执行反馈后，便于平台对KOL社交账户下的执行情况进行获取和审核','任务会根据账号资料信息做一些限制，符合条件才可领取任务，未提交资料也视为不符合要求哦。比如：微博粉丝量大于3000才能领取','提交社交账号资料后，平台会在1~3个工作日内进行审核，审核确认通过后数据才会生效']

class PersonalHelpCenter extends Component {

    constructor(proos) {
        super(proos);
        this.state = {
            rowArray: [
                '提现相关',
                '推荐有奖相关',
                '任务相关',
                '任务领取样品相关',
                '实名认证相关',
                '社交平台账号相关'
            ],
            helpDetailQuestion: [
                withdrawTitleArray,
                registerTitleArray,
                taskTitleArray,
                getTaskTitleArray,
                realNameTitleArray,
                thirdBindTitleArray
            ],
            helpDetailAnswer: [
                withdrawDeatilsArray,
                registerDeatilsArray,
                taskDeatilsArray,
                getTaskDeatilsArray,
                realNameDeatilsArray,
                thirdBindDeatilsArray
            ]
        }
    }

    componentWillMount() {
        document.title = "帮助中心"
    }

    render() {
        return(
            <div className='personal_helpCenter_bg'>
                {this.state.rowArray.map((content, index) => (

                    <Link
                        to={{pathname: "/HelpCenterDetail/" + content,
                            state: {title_obj_data: this.state.helpDetailQuestion[index],
                                detail_obj_data: this.state.helpDetailAnswer[index]
                            }
                        }}
                    >

                        <div className='personal_helpCenter_row'>
                            <span>{content}</span>
                            <img src={rowRightImg} className='personal_helpCenter_rowRightImg'/>

                        </div>
                    </Link>
                ))}

                <div className='personal_helpCenter_email'>还有疑问，邮件留言告诉我们 service@linkedshow.com</div>

            </div>
        );
    }
}

export default PersonalHelpCenter;

