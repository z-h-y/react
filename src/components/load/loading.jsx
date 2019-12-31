import React from 'react'
import loading from '../../assets/img/loading.gif'
import './load.less'
class Loading extends React.Component {
  render() {
    return <div className="m-loading"><img src={loading} alt=""/></div>;
  }
}
export default Loading