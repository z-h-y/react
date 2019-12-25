import React from 'react';
import '../style/hello.less';

class Hello extends React.Component {
    render() {
        return <div>
            <h1 className="hello">Hello React & Webpack!</h1>
        </div>
    }
}

export default Hello;