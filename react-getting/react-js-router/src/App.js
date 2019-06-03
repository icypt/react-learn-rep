import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./component/Home";
import Login from "./component/Login";

class App extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <Route exact path="/" component={Home} />
                    <Route path="/login" component={Login} />
                </div>
            </Router>
        );
    }
}
export default App;
