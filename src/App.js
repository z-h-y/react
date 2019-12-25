import React from 'react';
// import Hello from '../components/Hello';
import { Link } from 'react-router-dom'

class App extends React.Component {
    render() {
        return <div>
            <h1 className="hello">Hello React & Webpack!</h1>
            <Link to="/hello">Hello</Link>
            <Link to="/Say">Say</Link>
        </div>
    }
}

export default App;