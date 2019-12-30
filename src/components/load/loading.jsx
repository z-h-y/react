import React from 'react'
import loading from '../../assets/img/loading.gif'
import './index.less'
class Loading extends React.Component {
  render() {
    return <div class="m-loading"><img src={loading} alt=""/></div>;
  }
}
export default Loading