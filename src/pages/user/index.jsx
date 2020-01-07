import React from 'react';
import Footer from '@/components/footer'
import Header from '@/components/header'

class User extends React.Component {
    goBack = () => {
      this.props.history.goBack()
    }
    render() {
        return <div className="wrapper">
            <Header title="我的" goBack={this.goBack}/>
            <h1>User</h1>
            <Footer />
        </div>
    }
}

export default User;