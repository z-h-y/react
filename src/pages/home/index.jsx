import React from 'react';
import Header from '@/components/header'
import Footer from '@/components/footer'

class Home extends React.Component {
    goBack = () => {
      this.props.history.goBack()
    }
    render() {
        return <div className="wrapper">
            <Header title="home"/>
            <h1>Home</h1>
            <Footer />
        </div>
    }
}

export default Home;