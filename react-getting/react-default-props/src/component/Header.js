import React from 'react';
import PropTypes from 'prop-types';
/*
父组件给子组件传值：
    defaultProps:父子组件传值中，如果父组件调用子组件的时候不给子组件传值，可以在子组件中使用defaultProps定义的默认值
    propTypes：验证父组件传值的类型合法性
            1、引入import PropTypes from 'prop-types';
            2、类.propTypes = {
                name: PropTypes.string
            };
    都是定义在子组件里面
    https://reactjs.org/docs/typechecking-with-proptypes.html
*/
class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            msg: '我是一个头部组件'
        }

    }

    render() {
        return (
            <div>
                {this.props.title}
            </div>
        )
    }
}

//父组件给子组件传值时，如果不传值，可以通过Header.defaultProps定义默认值
Header.defaultProps = {
    title: '标题'
}

//验证父组件传入子组件值类型合法性
Header.propTypes  = {
    title: PropTypes.string
}


export default Header;