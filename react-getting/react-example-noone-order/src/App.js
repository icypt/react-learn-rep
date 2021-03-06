import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Product from "./component/Product";
import ProductContent from "./component/ProductContent";
class App extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <Route exact path="/" component={Product} />
                    <Route path="/productContent/:pid" component={ProductContent} />
                </div>
            </Router>
        );
    }
}
export default App;
