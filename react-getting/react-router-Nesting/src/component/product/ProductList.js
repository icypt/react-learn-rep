import React from 'react';
class ProductList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            msg: '我是商品列表组件'
        }
    }

    render(){
        return (
            <div>
               <h2>{this.state.msg}</h2>
            </div>
        )
    }
}
export default ProductList;