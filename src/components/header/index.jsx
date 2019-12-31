import React, {Component} from 'react'
import './header.less'
class Header extends Component {
  handleBack = () => {
    this.props.goBack()
  }
  handleEdit = () => {
    this.props.edit()
  }
  render () {
    return (
      <div className="header-container">
        {this.props.goBack&&<div className="icon-back header-back" onClick={this.handleBack}></div>}
        <div className="header-title">{this.props.title}</div>
        {this.props.signUp?(this.props.userInfo ? <span className='icon-account user-avatar' onClick={this.props.goHome}></span>
        : <span>登录|注册</span>):''}
        {this.props.edit&&<div onClick={this.handleEdit} className='user-avatar'>
        {this.props.userInfo.operate==='edit'?'编辑':'完成'}</div>}
      </div>
    )
  }
}

export default Header